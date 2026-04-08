"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
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
    <section ref={sectionRef} className="relative min-h-[90vh] overflow-hidden">
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
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 pb-24 pt-32 text-center">
        <AnimatedText>
          <AnimatedLine>
            <h1 className="font-display text-2xl font-semibold tracking-tight text-ivory md:text-4xl lg:text-5xl text-balance">
              Comprendre, analyser, conclure… pour vous faire gagner en clarté.
            </h1>
          </AnimatedLine>
          <AnimatedLine>
            <div className="mx-auto mt-6 text-center font-sans text-lg font-light text-ivory/90 md:text-xl">
              <p>Cabinet d&apos;expertise immobilière dirigé par Serge Vitali,</p>
              <p>expert judiciaire près la Cour d&apos;appel d&apos;Aix-en-Provence et la Cour administrative d&apos;appel de Marseille.</p>
            </div>
          </AnimatedLine>
          <AnimatedLine>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/cabinet" variant="ghost" className="w-64 text-center border border-white/60 text-white hover:bg-white/10 hover:border-white">
                Découvrir le cabinet
              </Button>
              <Button href="/contact" variant="ghost" className="w-64 text-center border border-white/60 text-white hover:bg-white/10 hover:border-white">
                Prendre contact
              </Button>
            </div>
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
