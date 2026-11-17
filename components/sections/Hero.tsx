"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AnimatedLine, AnimatedText } from "@/components/ui/AnimatedText";

const credentials = [
  { k: "Depuis 2017", v: "Expert près la Cour d'appel d'Aix-en-Provence" },
  { k: "REV", v: "Recognised European Valuer — TEGoVA" },
  { k: "EEFIC", v: "Président de la fédération" },
  { k: "AJDI", v: "Contributions à la revue Dalloz" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-t border-grey-light/70 bg-gradient-to-b from-ivory via-[#f3efe6] to-[#ece5d6] text-navy">
      {/* Fond : dégradé et trame fine */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 70% at 90% 20%, rgba(201,169,97,0.18), transparent 60%), radial-gradient(ellipse 60% 60% at 0% 0%, rgba(255,255,255,0.8), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,27,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(13,27,42,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Monogramme en filigrane — ordinateur */}
      <span
        className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-[58%] select-none font-display text-[26rem] font-semibold leading-none tracking-tighter text-transparent lg:block xl:right-8"
        style={{ WebkitTextStroke: "1.5px rgba(166,134,64,0.30)" }}
        aria-hidden
      >
        CV
      </span>

      {/* Logo sur hero — mobile uniquement */}
      <div className="absolute left-1/2 top-12 z-20 -translate-x-1/2 md:hidden">
        <Image src="/images/logo-navy.png" alt="Cabinet Vitali Expertises" width={180} height={81} priority />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-between px-4 pb-10 pt-44 md:pt-24 lg:px-8">
        <AnimatedText>
          <AnimatedLine>
            <p className="flex items-center gap-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark md:text-sm">
              <span className="h-px w-10 bg-gold-dark" aria-hidden />
              Marseille · Aix-en-Provence
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy md:text-6xl lg:text-7xl">
              Expertise immobilière <br className="hidden sm:block" />amiable et judiciaire
            </h1>
          </AnimatedLine>
          <AnimatedLine>
            <p className="mt-7 max-w-2xl font-sans text-base font-light leading-relaxed text-navy/75 md:text-lg">
              Serge Vitali, expert près la Cour d&apos;appel d&apos;Aix-en-Provence et la Cour administrative
              d&apos;appel de Marseille. Valeur vénale, valeur locative, baux commerciaux et indemnité d&apos;éviction.
            </p>
          </AnimatedLine>
          <AnimatedLine>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <Button href="/contact" variant="primary" className="!bg-navy px-8 py-3.5 text-base !text-ivory hover:!bg-gold hover:!text-navy">
                Prendre contact
              </Button>
              <Link
                href="/expertises"
                className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-navy transition hover:text-gold-dark"
              >
                Domaines d&apos;expertise
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </AnimatedLine>
        </AnimatedText>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-navy/15 pt-8 md:grid-cols-4 md:gap-0"
        >
          {credentials.map((c, i) => (
            <div key={c.k} className={`md:px-6 ${i === 0 ? "md:pl-0" : "md:border-l md:border-navy/15"}`}>
              <dt className="font-display text-2xl font-semibold text-gold-dark md:text-3xl">{c.k}</dt>
              <dd className="mt-1 font-sans text-xs leading-snug text-navy/70 md:text-sm">{c.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#intro"
        className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 text-navy/40 md:block"
        aria-label="Faire défiler vers le contenu"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
