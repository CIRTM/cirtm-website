"use client";
import { useEffect, useRef } from "react";
import { simplexNoise } from "@/lib/glsl";

// Particles with depth of field drifting leftwards out of the Join us image:
// distant specks are small and sharp, near ones large, soft and faint. A few
// translucent red cells drift with them.

// Positions wrap across the field in the shader, so nothing is updated per frame on the CPU.
const pointVertex = `
uniform float uTime;
uniform vec3 uField;
uniform float uPixelRatio;
attribute float aSize;
attribute float aSpeed;
attribute float aSeed;
varying float vAlpha;
varying float vSoft;
void main() {
  vec3 p = position;
  p.x = mod(p.x - uTime * aSpeed + uField.x * 0.5, uField.x) - uField.x * 0.5;
  p.y += sin(uTime * 0.4 + aSeed) * 0.25 + uTime * aSpeed * 0.15;
  p.y = mod(p.y + uField.y * 0.5, uField.y) - uField.y * 0.5;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float depth = -mv.z;
  gl_PointSize = aSize * uPixelRatio * (300.0 / depth);
  // Nearer particles are softer and fainter, like out-of-focus bokeh
  vSoft = clamp((7.0 - depth) / 5.0, 0.0, 1.0);
  vAlpha = mix(0.9, 0.28, vSoft) * (0.65 + 0.35 * sin(uTime * 0.7 + aSeed * 3.0));
  gl_Position = projectionMatrix * mv;
}
`;

const pointFragment = `
uniform vec3 uColor;
varying float vAlpha;
varying float vSoft;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float edge = mix(0.35, 0.95, vSoft);
  float a = 1.0 - smoothstep(1.0 - edge, 1.0, d);
  if (a <= 0.0) discard;
  gl_FragColor = vec4(uColor, a * vAlpha);
}
`;

const cellVertex = `
uniform float uTime;
uniform float uSeed;
varying vec3 vNormal;
varying vec3 vView;
${simplexNoise}
void main() {
  vec3 n = normalize(position);
  float d = snoise(n * 1.8 + vec3(uSeed) + uTime * 0.15) * 0.12;
  vec4 mv = modelViewMatrix * vec4(position * (1.0 + d), 1.0);
  vView = normalize(-mv.xyz);
  vNormal = normalize(normalMatrix * n);
  gl_Position = projectionMatrix * mv;
}
`;

const cellFragment = `
uniform vec3 uInner;
uniform vec3 uRim;
uniform float uAlpha;
varying vec3 vNormal;
varying vec3 vView;
void main() {
  float fresnel = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 2.0);
  gl_FragColor = vec4(mix(uInner, uRim, fresnel), (0.12 + fresnel * 0.8) * uAlpha);
}
`;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export default function JoinParticles({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      } catch {
        return;
      }
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      renderer.setPixelRatio(pixelRatio);
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      camera.position.z = 8;
      const additive = { transparent: true, depthWrite: false, blending: THREE.AdditiveBlending };
      const time = { value: 0 };
      const field = { value: new THREE.Vector3(14, 8, 10) };

      // Particle field: depth from far behind to just in front of the camera's focus
      const count = container.clientWidth < 768 ? 300 : 700;
      const positions = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      const speeds = new Float32Array(count);
      const seeds = new Float32Array(count);
      for (let i = 0; i < count; i++) {
        const z = rand(-6, 5);
        positions.set([rand(-7, 7), rand(-4, 4), z], i * 3);
        const near = (z + 6) / 11;
        sizes[i] = near > 0.7 && Math.random() < 0.35 ? rand(0.4, 0.9) : rand(0.06, 0.18) + near * 0.15;
        speeds[i] = rand(0.15, 0.35) * (0.5 + near);
        seeds[i] = Math.random() * 100;
      }
      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      pointGeometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
      pointGeometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
      pointGeometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
      const pointMaterial = new THREE.ShaderMaterial({
        vertexShader: pointVertex,
        fragmentShader: pointFragment,
        ...additive,
        uniforms: {
          uTime: time,
          uField: field,
          uPixelRatio: { value: pixelRatio },
          uColor: { value: new THREE.Color("#ffb4aa") },
        },
      });
      scene.add(new THREE.Points(pointGeometry, pointMaterial));

      // A few translucent red cells drifting with the particles
      const cellGeometry = new THREE.IcosahedronGeometry(1, 24);
      const cells = Array.from({ length: 12 }, () => {
        const material = new THREE.ShaderMaterial({
          vertexShader: cellVertex,
          fragmentShader: cellFragment,
          ...additive,
          uniforms: {
            uTime: time,
            uSeed: { value: Math.random() * 10 },
            uInner: { value: new THREE.Color("#4a0510") },
            uRim: { value: new THREE.Color("#ff8f84") },
            uAlpha: { value: rand(0.35, 0.6) },
          },
        });
        const mesh = new THREE.Mesh(cellGeometry, material);
        const z = rand(-3, 3);
        mesh.scale.setScalar(rand(0.12, 0.3));
        mesh.position.set(rand(-7, 7), rand(-3, 3), z);
        scene.add(mesh);
        return { mesh, material, speed: rand(0.2, 0.4) * (0.7 + (z + 3) / 6), phase: rand(0, Math.PI * 2), y: mesh.position.y };
      });

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = container;
        if (!w || !h) return;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const visibleHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
        field.value.set(visibleHeight * camera.aspect * 1.3, visibleHeight * 1.3, 10);
      };
      resize();
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      let frame = 0;
      let last = performance.now();
      const start = last;
      const render = () => {
        const now = performance.now();
        const dt = Math.min((now - last) / 1000, 0.1);
        last = now;
        const t = (now - start) / 1000;
        time.value = t;
        const half = field.value.x / 2;
        for (const c of cells) {
          c.mesh.position.x -= c.speed * dt;
          if (c.mesh.position.x < -half) c.mesh.position.x = half;
          c.mesh.position.y = c.y + Math.sin(t * 0.3 + c.phase) * 0.3;
          c.mesh.rotation.y += dt * 0.2;
          c.mesh.rotation.x += dt * 0.1;
        }
        renderer.render(scene, camera);
      };
      const loop = () => {
        render();
        frame = requestAnimationFrame(loop);
      };
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        cancelAnimationFrame(frame);
        if (entry.isIntersecting) {
          last = performance.now();
          loop();
        }
      });
      intersectionObserver.observe(container);

      cleanup = () => {
        cancelAnimationFrame(frame);
        intersectionObserver.disconnect();
        resizeObserver.disconnect();
        pointGeometry.dispose();
        pointMaterial.dispose();
        cellGeometry.dispose();
        cells.forEach((c) => c.material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
