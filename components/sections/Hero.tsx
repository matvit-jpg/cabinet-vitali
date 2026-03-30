"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedLine, AnimatedText } from "@/components/ui/AnimatedText";

const heroImage = "/images/ndg.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-navy/70"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 pb-24 pt-32 text-center">
        <AnimatedText>
          <AnimatedLine>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-ivory md:text-4xl lg:text-5xl text-balance">
            Comprendre, analyser, conclure… pour vous faire gagner en clarté.
            </h1>
          </AnimatedLine>
          <AnimatedLine>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg font-light leading-relaxed text-ivory/90 md:text-xl">
              Expert judiciaire agréé près la Cour d&apos;appel — évaluations
              immobilières opposables devant les tribunaux.
            </p>
          </AnimatedLine>
          <AnimatedLine>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <Button href="/cabinet" variant="primary" className="w-64 text-center">
    Découvrir le cabinet
  </Button>
  <Button href="/contact" variant="primary" className="w-64 text-center">
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
