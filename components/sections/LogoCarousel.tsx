"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useMotionValue, useAnimationFrame, animate, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  { name: "Ville de Marseille", src: "/images/marseille.png", href: "https://www.marseille.fr" },
  { name: "L'Occitane en Provence", src: "/images/occitane.png", href: "https://www.loccitane.com" },
  { name: "Caritas France", src: "/images/caritas.avif", href: "https://www.secours-catholique.org" },
  { name: "Caisse d'Épargne", src: "/images/caisse-epargne.avif", href: "https://www.caisse-epargne.fr" },
  { name: "Marseille Fos", src: "/images/marseillefos.avif", href: "https://www.marseille-port.fr" },
  { name: "Thiriet", src: "/images/thiriet.avif", href: "https://www.thiriet.com" },
  { name: "Renault", src: "/images/renault.avif", href: "https://www.renault.fr" },
  { name: "La Garde", src: "/images/la-garde.avif", href: "https://www.ville-lagarde.fr" },
  { name: "Vinci", src: "/images/vinci.avif", href: "https://www.vinci.com" },
  { name: "Urbanis", src: "/images/urbanis.avif", href: "https://www.urbanis.fr" },
  { name: "Quartus", src: "/images/quartus.avif", href: "https://groupe-quartus.com" },
  { name: "Maussanne", src: "/images/maussanne.avif", href: "https://www.maussanelesalpilles.fr" },
];

const SPEED = 0.035; // px/ms

export function LogoCarousel() {
  const track = [...clients, ...clients];
  const x = useMotionValue(0);
  const halfWidth = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isManual = useRef(false);
  const touchStartX = useRef(0);
  const touchStartMotionX = useRef(0);
  const lastTouchX = useRef(0);
  const lastTouchTime = useRef(0);
  const touchVelocity = useRef(0);

  useEffect(() => {
    if (trackRef.current) {
      halfWidth.current = trackRef.current.scrollWidth / 2;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (isManual.current) return;
    const next = x.get() - SPEED * delta;
    x.set(Math.abs(next) >= halfWidth.current ? 0 : next);
  });

  const skip = (dir: 1 | -1) => {
    if (!halfWidth.current) return;
    const logoStep = halfWidth.current / clients.length;
    let current = x.get();
    let target = current - dir * logoStep * 4;

    // Wrap-around seamless : repositionne instantanément dans la copie miroir
    if (target < -halfWidth.current) {
      const offset = current + halfWidth.current;
      x.set(offset);
      target = target + halfWidth.current;
    } else if (target > 0) {
      const offset = current - halfWidth.current;
      x.set(offset);
      target = target - halfWidth.current;
    }

    isManual.current = true;
    animate(x, target, {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      onComplete: () => { isManual.current = false; },
    });
  };

  return (
    <div>
      <p className="mb-10 text-center font-sans text-xs font-semibold uppercase tracking-widest text-gold">
        Ils nous ont fait confiance
      </p>

      <div className="relative flex items-center gap-3">
        {/* Flèches — desktop uniquement */}
        <button
          onClick={() => skip(-1)}
          aria-label="Logo précédent"
          className="hidden md:flex shrink-0 h-8 w-8 items-center justify-center rounded-sm border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-navy"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {/* Piste — drag tactile temps réel sur mobile */}
        <div
          className="relative flex-1 overflow-hidden"
          onTouchStart={(e) => {
            const clientX = e.touches[0].clientX;
            touchStartX.current = clientX;
            touchStartMotionX.current = x.get();
            lastTouchX.current = clientX;
            lastTouchTime.current = performance.now();
            touchVelocity.current = 0;
            isManual.current = true;
          }}
          onTouchMove={(e) => {
            const clientX = e.touches[0].clientX;
            const now = performance.now();
            const dt = now - lastTouchTime.current;
            if (dt > 0) {
              touchVelocity.current = (clientX - lastTouchX.current) / dt;
            }
            lastTouchX.current = clientX;
            lastTouchTime.current = now;

            const diff = clientX - touchStartX.current;
            let newX = touchStartMotionX.current + diff;
            if (newX < -halfWidth.current) newX += halfWidth.current;
            if (newX > 0) newX -= halfWidth.current;
            x.set(newX);
          }}
          onTouchEnd={() => {
            const velocity = touchVelocity.current;
            const momentum = velocity * 280;
            let target = x.get() + momentum;
            if (target < -halfWidth.current) target += halfWidth.current;
            if (target > 0) target -= halfWidth.current;
            animate(x, target, {
              type: "spring",
              velocity: velocity * 1000,
              stiffness: 60,
              damping: 20,
              onComplete: () => { isManual.current = false; },
            });
          }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ivory to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ivory to-transparent" />
          <motion.div
            ref={trackRef}
            className="flex items-center gap-14"
            style={{ x, width: "max-content" }}
          >
            {track.map((client, i) => (
              <a
                key={`${client.name}-${i}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                title={client.name}
                className="carousel-logo shrink-0"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="h-10 w-28 object-contain"
                  unoptimized
                />
              </a>
            ))}
          </motion.div>
        </div>

        <button
          onClick={() => skip(1)}
          aria-label="Logo suivant"
          className="hidden md:flex shrink-0 h-8 w-8 items-center justify-center rounded-sm border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-navy"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
