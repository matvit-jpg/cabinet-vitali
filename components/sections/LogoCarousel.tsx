"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { useMotionValue, useAnimationFrame, animate, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  { name: "Ville de Marseille", src: "https://static.wixstatic.com/media/a80145_db1c80335393464abc084b20e036160f~mv2.png/v1/fill/w_800,h_800,al_c,q_90,enc_auto/a80145_db1c80335393464abc084b20e036160f~mv2.png", href: "https://www.marseille.fr" },
  { name: "L'Occitane en Provence", src: "https://static.wixstatic.com/media/a80145_47d60a0e088d4a3f8d5d49aa5f13c19b~mv2.png/v1/fill/w_560,h_560,al_c,lg_1,q_85,enc_auto/a80145_47d60a0e088d4a3f8d5d49aa5f13c19b~mv2.png", href: "https://www.loccitane.com" },
  { name: "Caritas France", src: "https://static.wixstatic.com/media/a80145_d588f8bad6b043039c3e7d9383ad8d72~mv2.png/v1/fill/w_496,h_496,al_c,lg_1,q_85,enc_auto/a80145_d588f8bad6b043039c3e7d9383ad8d72~mv2.png", href: "https://www.secours-catholique.org" },
  { name: "Caisse d'Épargne", src: "https://static.wixstatic.com/media/a80145_1c7ed7bae98f409e898841f9a6ac80ed~mv2.jpg/v1/fill/w_1299,h_827,al_c,q_85,enc_auto/a80145_1c7ed7bae98f409e898841f9a6ac80ed~mv2.jpg", href: "https://www.caisse-epargne.fr" },
  { name: "Marseille Fos", src: "https://static.wixstatic.com/media/a80145_21cac12cfbc64c26b5a1d1e9cdff22a0~mv2.jpg/v1/fill/w_2008,h_580,al_c,q_85,enc_auto/a80145_21cac12cfbc64c26b5a1d1e9cdff22a0~mv2.jpg", href: "https://www.marseille-port.fr" },
  { name: "Thiriet", src: "https://static.wixstatic.com/media/a80145_334cbc72d0f747be8f4ba69f52f5c315~mv2.png/v1/fill/w_284,h_193,al_c,lg_1,q_85,enc_auto/a80145_334cbc72d0f747be8f4ba69f52f5c315~mv2.png", href: "https://www.thiriet.com" },
  { name: "Renault", src: "https://static.wixstatic.com/media/a80145_b723a017698249029bb49842ace49177~mv2.jpg/v1/fill/w_398,h_398,al_c,lg_1,q_80,enc_auto/a80145_b723a017698249029bb49842ace49177~mv2.jpg", href: "https://www.renault.fr" },
  { name: "La Garde", src: "https://static.wixstatic.com/media/a80145_a1cefa5eae7a445882df82e71c9e70ce~mv2.png/v1/fill/w_462,h_462,al_c,lg_1,q_85,enc_auto/a80145_a1cefa5eae7a445882df82e71c9e70ce~mv2.png", href: "https://www.ville-lagarde.fr" },
  { name: "Vinci", src: "https://static.wixstatic.com/media/a80145_a445b4e7bf9341d683f9719613f84d92~mv2.png/v1/fill/w_315,h_315,al_c,lg_1,q_85,enc_auto/a80145_a445b4e7bf9341d683f9719613f84d92~mv2.png", href: "https://www.vinci.com" },
  { name: "Urbanis", src: "https://static.wixstatic.com/media/a80145_2ac73d27877142e0b4ad4be3fca4f058~mv2.png/v1/fill/w_581,h_169,al_c,lg_1,q_85,enc_auto/a80145_2ac73d27877142e0b4ad4be3fca4f058~mv2.png", href: "https://www.urbanis.fr" },
  { name: "Quartus", src: "https://static.wixstatic.com/media/a80145_184c38cf8a754f87842c0f5f658c2a2b~mv2.png/v1/fill/w_900,h_298,al_c,lg_1,q_85,enc_auto/a80145_184c38cf8a754f87842c0f5f658c2a2b~mv2.png", href: "https://groupe-quartus.com" },
  { name: "Maussanne", src: "https://static.wixstatic.com/media/a80145_34877fa67d754bf29dcce2ca54368e87~mv2.png/v1/fill/w_1251,h_1376,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a80145_34877fa67d754bf29dcce2ca54368e87~mv2.png", href: "https://www.maussanelesalpilles.fr" },
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
                  className="h-10 w-auto object-contain"
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
