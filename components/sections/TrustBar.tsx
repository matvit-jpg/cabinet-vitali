import Image from "next/image";

export function TrustBar() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "320px" }}>
      <Image
        src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=3840&q=90&fit=crop&crop=center"
        alt="Vieux-Port de Marseille"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Filtre navy léger pour coller à la DA du site */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(13, 27, 42, 0.38)" }}
      />
      {/* Fondu bas vers ivory */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(248,246,241,0.5) 100%)",
        }}
      />
    </div>
  );
}
