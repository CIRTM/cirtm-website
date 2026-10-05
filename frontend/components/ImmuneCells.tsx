"use client";
import { useEffect, useRef } from "react";
import { simplexNoise as noise } from "@/lib/glsl";

type NucleusShape = "kidney" | "lobes4" | "lobes2" | "round" | "large" | "none";

type CellConfig = {
  inner: string;
  rim: string;
  amp: number;
  freq: number;
  bumps: number;
  bumpFreq: number;
  ridges: number;
  ridgeFreq: number;
  nucleus: NucleusShape;
  nucleusInner: string;
  nucleusRim: string;
  granules: number;
  granuleColor: string;
  granulesOutside: number;
};

const CELLS: Record<string, CellConfig> = {
  monocyte: { inner: "#3b1452", rim: "#d8a8f0", amp: 0.07, freq: 1.4, bumps: 0, bumpFreq: 0, ridges: 0, ridgeFreq: 0, nucleus: "kidney", nucleusInner: "#2a0f4a", nucleusRim: "#b48ad8", granules: 30, granuleColor: "#f0c8f8", granulesOutside: 0 },
  mast: { inner: "#4a0f24", rim: "#f5a0b8", amp: 0.06, freq: 1.3, bumps: 0, bumpFreq: 0, ridges: 0, ridgeFreq: 0, nucleus: "none", nucleusInner: "", nucleusRim: "", granules: 70, granuleColor: "#ff9fb4", granulesOutside: 0.4 },
  nk: { inner: "#3f1048", rim: "#e8a0e0", amp: 0.09, freq: 2.0, bumps: 0, bumpFreq: 0, ridges: 0, ridgeFreq: 0, nucleus: "round", nucleusInner: "#2a1050", nucleusRim: "#c090e0", granules: 35, granuleColor: "#ffe0f6", granulesOutside: 0 },
  neutrophil: { inner: "#4a0a1c", rim: "#ff9aae", amp: 0.06, freq: 1.4, bumps: 0, bumpFreq: 0, ridges: 0, ridgeFreq: 0, nucleus: "lobes4", nucleusInner: "#5a0a24", nucleusRim: "#ff7090", granules: 25, granuleColor: "#ffc0cc", granulesOutside: 0 },
  eosinophil: { inner: "#0f1f55", rim: "#9cc0ff", amp: 0.06, freq: 1.5, bumps: 0, bumpFreq: 0, ridges: 0, ridgeFreq: 0, nucleus: "lobes2", nucleusInner: "#101a50", nucleusRim: "#7090e0", granules: 45, granuleColor: "#ff9ec4", granulesOutside: 0 },
  basophil: { inner: "#2e1648", rim: "#e8c0f0", amp: 0.06, freq: 1.5, bumps: 0, bumpFreq: 0, ridges: 0, ridgeFreq: 0, nucleus: "lobes2", nucleusInner: "#2a1050", nucleusRim: "#a080d0", granules: 45, granuleColor: "#9070d0", granulesOutside: 0 },
  tcell: { inner: "#4a1e00", rim: "#ffc070", amp: 0.04, freq: 1.5, bumps: 0.07, bumpFreq: 5, ridges: 0, ridgeFreq: 0, nucleus: "large", nucleusInner: "#3a2000", nucleusRim: "#ffd070", granules: 0, granuleColor: "", granulesOutside: 0 },
  bcell: { inner: "#0c2060", rim: "#90b8ff", amp: 0.05, freq: 1.5, bumps: 0, bumpFreq: 0, ridges: 0.06, ridgeFreq: 2.2, nucleus: "large", nucleusInner: "#0a1a50", nucleusRim: "#7090e0", granules: 0, granuleColor: "", granulesOutside: 0 },
};

const TYPES = Object.keys(CELLS);


// Smooth lobes, plus optional fine ruffles (close-up cells), microvilli bumps
// (T cell), ruffled ridges (B cell) and a kidney-shaped dent (monocyte nucleus).
// Normals are rebuilt from neighbouring points so the displaced surface lights
// correctly; uDetail blends them back towards the sphere to soften busy surfaces.
const vertexShader = `
uniform float uTime;
uniform float uAmp;
uniform float uFreq;
uniform float uFine;
uniform float uBumps;
uniform float uBumpFreq;
uniform float uRidges;
uniform float uRidgeFreq;
uniform float uDent;
uniform float uDetail;
uniform float uSeed;
varying vec3 vNormal;
varying vec3 vView;
${noise}
float displace(vec3 n) {
  float t = uTime + uSeed * 10.0;
  float d = snoise(n * uFreq + vec3(uSeed) + t * 0.1) * uAmp;
  if (uFine > 0.0) d += snoise(n * uFreq * 3.5 - t * 0.2) * uAmp * uFine;
  if (uBumps > 0.0) d += smoothstep(0.0, 0.8, snoise(n * uBumpFreq + vec3(uSeed))) * uBumps;
  if (uRidges > 0.0) d += smoothstep(0.6, 1.0, 1.0 - abs(snoise(n * uRidgeFreq + vec3(uSeed) + t * 0.05))) * uRidges;
  if (uDent > 0.0) d -= pow(max(n.x, 0.0), 3.0) * uDent;
  return d;
}
vec3 surface(vec3 n, float radius) {
  return n * (radius + displace(n));
}
void main() {
  float radius = length(position);
  vec3 n = normalize(position);
  vec3 tangent = normalize(abs(n.y) > 0.99 ? cross(n, vec3(1.0, 0.0, 0.0)) : cross(n, vec3(0.0, 1.0, 0.0)));
  vec3 bitangent = cross(n, tangent);
  float e = 0.01;
  vec3 p = surface(n, radius);
  vec3 pt = surface(normalize(n + tangent * e), radius);
  vec3 pb = surface(normalize(n + bitangent * e), radius);
  vec3 displacedNormal = normalize(cross(pt - p, pb - p));
  if (dot(displacedNormal, n) < 0.0) displacedNormal = -displacedNormal;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vView = normalize(-mv.xyz);
  vNormal = normalize(normalMatrix * normalize(mix(n, displacedNormal, uDetail)));
  gl_Position = projectionMatrix * mv;
}
`;

const fragmentShader = `
uniform vec3 uInner;
uniform vec3 uRim;
uniform float uAlpha;
uniform float uFill;
uniform float uRimPower;
uniform float uSpecular;
varying vec3 vNormal;
varying vec3 vView;
void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vView);
  float fresnel = pow(1.0 - max(dot(n, v), 0.0), uRimPower);
  vec3 light = normalize(vec3(-0.5, 0.7, 0.6));
  float diffuse = max(dot(n, light), 0.0);
  float spec = pow(max(dot(n, normalize(light + v)), 0.0), 50.0) * uSpecular;
  vec3 color = mix(uInner, uRim, fresnel) * (0.75 + diffuse * 0.45) + vec3(spec);
  gl_FragColor = vec4(color, (uFill + fresnel * (1.0 - uFill) + spec) * uAlpha);
}
`;

type MaterialOptions = Partial<{
  amp: number;
  freq: number;
  fine: number;
  bumps: number;
  bumpFreq: number;
  ridges: number;
  ridgeFreq: number;
  dent: number;
  detail: number;
  alpha: number;
  fill: number;
  rimPower: number;
  specular: number;
}>;

type Tier = "close" | "mid" | "back";

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export default function ImmuneCells({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
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
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.z = 6;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const time = { value: 0 };
      const disposables: { dispose: () => void }[] = [];
      const geometries = {
        close: new THREE.IcosahedronGeometry(1, 96),
        high: new THREE.IcosahedronGeometry(1, 64),
        mid: new THREE.IcosahedronGeometry(1, 28),
        low: new THREE.IcosahedronGeometry(1, 12),
      };
      disposables.push(...Object.values(geometries));

      const softTexture = (size: number, centre: string) => {
        const c = document.createElement("canvas");
        c.width = c.height = size;
        const ctx = c.getContext("2d")!;
        const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        g.addColorStop(0, centre);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, size, size);
        const texture = new THREE.CanvasTexture(c);
        disposables.push(texture);
        return texture;
      };
      const dotTexture = softTexture(32, "rgba(255,255,255,1)");
      const glowTexture = softTexture(128, "rgba(255,255,255,0.5)");

      const material = (inner: string, rim: string, opts: MaterialOptions) =>
        new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          uniforms: {
            uTime: time,
            uSeed: { value: Math.random() * 10 },
            uAmp: { value: opts.amp ?? 0.05 },
            uFreq: { value: opts.freq ?? 1.5 },
            uFine: { value: opts.fine ?? 0 },
            uBumps: { value: opts.bumps ?? 0 },
            uBumpFreq: { value: opts.bumpFreq ?? 0 },
            uRidges: { value: opts.ridges ?? 0 },
            uRidgeFreq: { value: opts.ridgeFreq ?? 0 },
            uDent: { value: opts.dent ?? 0 },
            uDetail: { value: opts.detail ?? 0.45 },
            uInner: { value: new THREE.Color(inner) },
            uRim: { value: new THREE.Color(rim) },
            uAlpha: { value: opts.alpha ?? 1 },
            uFill: { value: opts.fill ?? 0.05 },
            uRimPower: { value: opts.rimPower ?? 2.2 },
            uSpecular: { value: opts.specular ?? 0.3 },
          },
        });

      const granules = (count: number, color: string, outside: number, size: number, opacity: number, inner: [number, number] = [0.25, 0.85]) => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          const r = Math.random() < outside ? rand(1.15, 1.6) : rand(inner[0], inner[1]);
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          positions.set([r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)], i * 3);
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return new THREE.Points(
          geometry,
          new THREE.PointsMaterial({
            size,
            map: dotTexture,
            color,
            transparent: true,
            opacity: 0.75 * opacity,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          })
        );
      };

      const nucleusMeshes = (cfg: CellConfig, geometry: InstanceType<typeof THREE.IcosahedronGeometry>, alpha: number, closeUp: boolean) => {
        const opts = { amp: 0.03, freq: 1.2, alpha: 0.75 * alpha, fill: closeUp ? 0.45 : 0.4, rimPower: 1.6, specular: closeUp ? 0.35 : 0.15, detail: closeUp ? 0.8 : 0.45 };
        const mesh = (x: number, y: number, z: number, s: number, extra: MaterialOptions = {}) => {
          const m = new THREE.Mesh(geometry, material(cfg.nucleusInner, cfg.nucleusRim, { ...opts, ...extra }));
          m.position.set(x, y, z);
          m.scale.setScalar(s);
          return m;
        };
        const nucleolus = (x: number, y: number, z: number, s: number) =>
          mesh(x, y, z, s, { amp: 0.01, alpha: 0.85 * alpha, fill: 0.6, rimPower: 1.2, specular: 0.2 });
        switch (cfg.nucleus) {
          case "kidney": {
            const m = mesh(-0.05, 0, 0, 0.5, { dent: 0.35 });
            m.scale.set(0.6, 0.45, 0.45);
            return [m];
          }
          case "lobes4":
            return [mesh(-0.4, 0.1, 0, 0.2), mesh(-0.12, -0.25, 0.08, 0.2), mesh(0.18, -0.08, -0.05, 0.2), mesh(0.38, 0.26, 0.04, 0.19)];
          case "lobes2":
            return [mesh(-0.24, 0.05, 0, 0.29), mesh(0.26, -0.04, 0.03, 0.27)];
          case "round":
            return [mesh(-0.12, 0.08, 0, 0.42), ...(closeUp ? [nucleolus(-0.04, 0.14, 0.14, 0.11)] : [])];
          case "large":
            return [mesh(0.04, 0.02, 0, 0.6), ...(closeUp ? [nucleolus(0.15, 0.1, 0.2, 0.14)] : [])];
          default:
            return [];
        }
      };

      type Cell = {
        group: InstanceType<typeof THREE.Group>;
        tier: Tier;
        x: number;
        y: number;
        vx: number;
        vy: number;
        spin: [number, number, number];
        r: number;
        phase: number;
        vesicles: InstanceType<typeof THREE.Points>[];
        glow?: InstanceType<typeof THREE.Sprite>;
        fade: number;
        faders: ((fade: number) => void)[];
        ox: number;
        oy: number;
      };
      let cells: Cell[] = [];
      let visibleWidth = 0;
      let visibleHeight = 0;

      const makeCell = (type: string, tier: Tier, x: number, y: number, z: number, r: number) => {
        const cfg = CELLS[type];
        const closeUp = tier === "close";
        const alpha = tier === "back" ? 0.4 : 1;
        const group = new THREE.Group();
        const vesicles: InstanceType<typeof THREE.Points>[] = [];
        let glow: InstanceType<typeof THREE.Sprite> | undefined;

        if (closeUp) {
          glow = new THREE.Sprite(
            new THREE.SpriteMaterial({ map: glowTexture, color: cfg.rim, transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending })
          );
          glow.scale.set(3.4, 3.4, 1);
          group.add(glow);
        }

        // Inner glow: a softly lit cytoplasm layer plus a glowing core
        if (tier !== "back") {
          const cytoplasm = new THREE.Mesh(
            closeUp ? geometries.high : geometries.mid,
            material(cfg.rim, cfg.rim, { amp: cfg.amp, freq: cfg.freq * 1.2, alpha: closeUp ? 0.22 : 0.14, fill: 0.35, rimPower: 1.0, specular: 0 })
          );
          cytoplasm.scale.setScalar(0.88);
          const core = new THREE.Sprite(
            new THREE.SpriteMaterial({ map: glowTexture, color: cfg.rim, transparent: true, opacity: closeUp ? 0.45 : 0.3, depthWrite: false, blending: THREE.AdditiveBlending })
          );
          core.scale.set(1.7, 1.7, 1);
          group.add(cytoplasm, core);
        }

        group.add(
          new THREE.Mesh(
            closeUp ? geometries.close : tier === "mid" ? geometries.high : geometries.low,
            material(cfg.inner, cfg.rim, {
              amp: cfg.amp * (closeUp ? 1.6 : 1),
              freq: cfg.freq,
              fine: closeUp ? 0.2 : 0,
              bumps: cfg.bumps,
              bumpFreq: cfg.bumpFreq,
              ridges: cfg.ridges,
              ridgeFreq: cfg.ridgeFreq,
              detail: closeUp ? (cfg.bumps || cfg.ridges ? 0.65 : 1) : 0.45,
              alpha,
              fill: closeUp ? 0.04 : 0.1,
              rimPower: closeUp ? 2.4 : 1.9,
              specular: closeUp ? 0.55 : tier === "mid" ? 0.35 : 0.1,
            })
          )
        );

        const nuclei = nucleusMeshes(cfg, tier === "back" ? geometries.low : geometries.mid, alpha, closeUp);
        if (nuclei.length) group.add(...nuclei);

        if (closeUp) {
          const color = cfg.granuleColor || cfg.rim;
          const count = Math.max(cfg.granules, 40);
          vesicles.push(
            granules(Math.round(count / 3), color, cfg.granulesOutside, 0.08, 0.7, [0.45, 0.82]),
            granules(count * 3, color, cfg.granulesOutside * 0.5, 0.03, 1, [0.3, 0.88])
          );
        } else if (cfg.granules) {
          vesicles.push(granules(tier === "mid" ? cfg.granules : Math.round(cfg.granules / 2), cfg.granuleColor, cfg.granulesOutside, 0.07, alpha));
        }
        if (vesicles.length) group.add(...vesicles);

        group.position.set(x, y, z);
        group.scale.setScalar(r);
        group.rotation.set(rand(0, Math.PI * 2), rand(0, Math.PI * 2), rand(0, Math.PI * 2));
        scene.add(group);

        // Each material remembers its base opacity so the cell can fade near the text
        const faders: ((fade: number) => void)[] = [];
        group.traverse((o) => {
          if (o === glow) return;
          if (o instanceof THREE.Mesh) {
            const uniform = (o.material as InstanceType<typeof THREE.ShaderMaterial>).uniforms.uAlpha;
            const base = uniform.value;
            faders.push((fade) => (uniform.value = base * fade));
          } else if (o instanceof THREE.Points || o instanceof THREE.Sprite) {
            const m = o.material as InstanceType<typeof THREE.PointsMaterial>;
            const base = m.opacity;
            faders.push((fade) => (m.opacity = base * fade));
          }
        });

        const drift = reducedMotion || closeUp ? 0 : 1;
        const spin = reducedMotion ? 0 : 1;
        cells.push({
          group,
          tier,
          x,
          y,
          r,
          phase: rand(0, Math.PI * 2),
          vesicles,
          glow,
          fade: 1,
          faders,
          ox: 0,
          oy: 0,
          vx: rand(-0.05, 0.05) * drift,
          vy: rand(-0.03, 0.03) * drift,
          spin: [rand(-0.04, 0.04) * spin, rand(-0.06, 0.06) * spin, rand(-0.03, 0.03) * spin],
        });
      };

      const clearCells = () => {
        for (const c of cells) {
          c.group.traverse((o) => {
            if (o instanceof THREE.Mesh || o instanceof THREE.Points || o instanceof THREE.Sprite) {
              (o.material as InstanceType<typeof THREE.Material>).dispose();
              if (o instanceof THREE.Points) o.geometry.dispose();
            }
          });
          scene.remove(c.group);
        }
        cells = [];
      };

      const populate = () => {
        clearCells();
        const narrow = container.clientWidth < 768;
        // T cells look odd up close, so they only appear at normal size
        const closeTypes = TYPES.filter((type) => type !== "tcell").sort(() => Math.random() - 0.5).slice(0, 2);
        const shuffled = [...closeTypes, ...TYPES.filter((type) => !closeTypes.includes(type)).sort(() => Math.random() - 0.5)];

        // Two close-up cells, partly off the left and right edges
        const closeR = visibleHeight * (narrow ? 0.15 : 0.24);
        const inView = narrow ? 0.4 : 0.75;
        makeCell(shuffled[0], "close", -visibleWidth / 2 + closeR * inView, visibleHeight * 0.17, 0.6, closeR);
        makeCell(shuffled[1], "close", visibleWidth / 2 - closeR * inView, -visibleHeight * 0.17, 0.6, closeR);

        // The other six: three per side, in the half away from that side's close-up cell
        const rows = { left: [-0.06, -0.24, -0.42], right: [0.42, 0.24, 0.06] };
        shuffled.slice(2).forEach((type, i) => {
          const left = i % 2 === 0;
          const row = (left ? rows.left : rows.right)[Math.floor(i / 2)];
          const edge = narrow ? rand(0.04, 0.12) : rand(0.1, 0.3);
          const x = (left ? edge - 0.5 : 0.5 - edge) * visibleWidth;
          makeCell(type, "mid", x, (row + rand(-0.03, 0.03)) * visibleHeight, rand(-0.4, 0.2), visibleHeight * (narrow ? 0.05 : rand(0.065, 0.085)));
        });

        const backCount = narrow ? 6 : 12;
        for (let i = 0; i < backCount; i++) {
          const z = rand(-4, -1.5);
          const spread = 1 + -z / 6;
          makeCell(
            TYPES[Math.floor(Math.random() * TYPES.length)],
            "back",
            rand(-0.5, 0.5) * visibleWidth * spread,
            rand(-0.5, 0.5) * visibleHeight * spread,
            z,
            visibleHeight * rand(0.05, 0.07)
          );
        }
      };

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = container;
        if (!w || !h) return;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        visibleHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
        visibleWidth = visibleHeight * camera.aspect;
        populate();
      };
      resize();
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);

      // Pointer position in pixels relative to the section
      const pointer = { x: -9999, y: -9999 };
      const onPointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        pointer.x = e.clientX - rect.left;
        pointer.y = e.clientY - rect.top;
      };
      if (!reducedMotion) window.addEventListener("pointermove", onPointerMove);

      const projected = new THREE.Vector3();
      let frame = 0;
      let last = performance.now();
      const start = last;
      const render = () => {
        const now = performance.now();
        const dt = Math.min((now - last) / 1000, 0.1);
        last = now;
        const t = reducedMotion ? 0 : (now - start) / 1000;
        time.value = t;
        const width = container.clientWidth;
        const height = container.clientHeight;

        for (const c of cells) {
          const g = c.group;
          c.x += c.vx * dt;
          c.y += c.vy * dt;
          const spread = 1 + Math.max(0, -g.position.z) / 6;
          const halfW = (visibleWidth / 2) * spread + c.r * 2;
          const halfH = (visibleHeight / 2) * spread + c.r * 2;
          if (c.x > halfW) c.x = -halfW;
          if (c.x < -halfW) c.x = halfW;
          if (c.y > halfH) c.y = -halfH;
          if (c.y < -halfH) c.y = halfH;

          let floatX = 0;
          let floatY = 0;
          if (c.tier === "close") {
            // Float slowly around its spot with a gentle sway, no steady spin
            g.rotation.x = Math.sin(t * 0.07 + c.phase) * 0.12;
            g.rotation.y = c.phase + Math.sin(t * 0.05 + c.phase) * 0.2;
            g.rotation.z = Math.sin(t * 0.06 + c.phase * 2) * 0.08;
            floatX = Math.sin(t * 0.11 + c.phase) * 0.08;
            floatY = Math.sin(t * 0.15 + c.phase * 1.7) * 0.07;
            c.vesicles[0]?.rotateY(-0.04 * dt);
            c.vesicles[1]?.rotateY(0.03 * dt).rotateZ(0.02 * dt);
            if (c.glow) c.glow.material.opacity = (0.28 + Math.sin(t * 0.6 + c.phase) * 0.06) * c.fade;
          } else {
            g.rotation.x += c.spin[0] * dt;
            g.rotation.y += c.spin[1] * dt;
            g.rotation.z += c.spin[2] * dt;
          }

          // Cells near the cursor drift gently aside, then settle back
          projected.set(c.x, c.y, g.position.z).project(camera);
          const worldPerPx = (visibleWidth * ((camera.position.z - g.position.z) / camera.position.z)) / width;
          let tx = 0;
          let ty = 0;
          if (c.tier !== "back") {
            const sx = ((projected.x + 1) / 2) * width;
            const sy = ((1 - projected.y) / 2) * height;
            const dx = sx - pointer.x;
            const dy = sy - pointer.y;
            const dist = Math.hypot(dx, dy);
            const reach = c.r / worldPerPx + 100;
            if (dist < reach && dist > 0.01) {
              const push = (1 - dist / reach) * (c.tier === "close" ? 20 : 36) * worldPerPx;
              tx = (dx / dist) * push;
              ty = (-dy / dist) * push;
            }
          }
          c.ox += (tx - c.ox) * 0.05;
          c.oy += (ty - c.oy) * 0.05;
          g.position.x = c.x + floatX + c.ox;
          g.position.y = c.y + floatY + c.oy;

          // Fade cells out as they pass behind the text in the centre
          projected.copy(g.position).project(camera);
          const dx = projected.x / 0.68;
          const dy = projected.y / 0.92;
          const fade = THREE.MathUtils.smoothstep(Math.hypot(dx, dy), 0.45, 1);
          if (Math.abs(fade - c.fade) > 0.002) {
            c.fade = fade;
            c.faders.forEach((f) => f(fade));
          }
        }
        renderer.render(scene, camera);
      };
      const loop = () => {
        render();
        frame = requestAnimationFrame(loop);
      };
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        cancelAnimationFrame(frame);
        last = performance.now();
        if (entry.isIntersecting && !reducedMotion) loop();
      });
      intersectionObserver.observe(container);
      render();

      cleanup = () => {
        cancelAnimationFrame(frame);
        intersectionObserver.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        clearCells();
        disposables.forEach((d) => d.dispose());
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
