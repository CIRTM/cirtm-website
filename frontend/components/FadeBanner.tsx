import Image from "next/image";

const NAVY = "#0B1B3A";

export function FadeBanner({
  image,
  className = "py-20",
  objectPosition = "center",
  children,
}: {
  image: string;
  className?: string;
  objectPosition?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`relative overflow-hidden ${className}`} style={{ backgroundColor: NAVY }}>
      <div className="absolute inset-y-0 right-0 w-full md:w-3/5">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to right, ${NAVY} 0%, rgba(11,27,58,0.7) 35%, rgba(11,27,58,0.15) 100%)` }}
        />
      </div>
      <div className="absolute inset-0 md:hidden" style={{ backgroundColor: "rgba(11,27,58,0.7)" }} />
      <div className="relative">{children}</div>
    </section>
  );
}
