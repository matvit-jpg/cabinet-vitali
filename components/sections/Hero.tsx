"use client";

import Image from "next/image";
import { ChevronDown, UserPlus } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { AnimatedLine, AnimatedText } from "@/components/ui/AnimatedText";

const heroImage = "/images/hero.jpg";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // L'image grossit légèrement au scroll : 1.0 → 1.12
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  // Elle monte légèrement pour accentuer l'effet
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale, y }}
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-navy/70" aria-hidden />
      {/* Logo sur hero — mobile uniquement, hors du stacking context z-10 pour que le blend fonctionne */}
      <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 z-20">
        <Image
          src="/images/logo-ivory.png"
          alt="Cabinet Vitali Expertises"
          width={190}
          height={85}
          priority
        />
      </div>

      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 pb-20 pt-40 text-center md:pt-36">
        <AnimatedText>
          <AnimatedLine>
            <h1 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-light md:text-sm">
              Expert judiciaire immobilier à Marseille et Aix-en-Provence
            </h1>
            <p className="font-display text-2xl font-semibold tracking-tight text-ivory md:text-4xl lg:text-5xl text-balance !text-center">
              Comprendre, analyser, conclure… pour vous faire gagner en clarté.
            </p>
          </AnimatedLine>
          <AnimatedLine>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/cabinet" variant="ghost" className="w-64 text-center border border-white/60 text-white hover:bg-white/10 hover:border-white">
                Découvrir le cabinet
              </Button>
              <Button href="/contact" variant="primary" className="w-64 text-center border border-gold">
                Prendre contact
              </Button>
            </div>
            <a
              href="/serge-vitali.vcf"
              download
              className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-ivory/80 underline-offset-4 transition hover:text-gold hover:underline"
            >
              <UserPlus className="h-4 w-4" aria-hidden />
              Ajouter à mes contacts
            </a>
          </AnimatedLine>
        </AnimatedText>
        <motion.a
          href="#intro"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ivory"
          aria-label="Faire défiler vers le contenu"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8 opacity-80" />
        </motion.a>
      </div>
    </section>
  );
}
