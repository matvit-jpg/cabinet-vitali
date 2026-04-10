"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function HomeIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <SectionWrapper id="intro" className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8 lg:gap-16">
          <FadeInSection>
            <h2 className="font-display text-xl font-semibold tracking-tight text-navy md:text-4xl">
              Une mission au service de la justice
            </h2>
            <div className="mt-6 space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
              <p>
                Expert inscrit près la Cour d&apos;appel d&apos;Aix-en-Provence
                et la Cour administrative d&apos;appel de Marseille, Serge VITALI
                intervient dans tous les domaines de l&apos;expertise immobilière :
                évaluation de biens, fixation de valeurs locatives, détermination
                d&apos;indemnités, analyse de préjudices et accompagnement
                stratégique en contentieux ou en prévention des litiges.
              </p>
              <p>
                Rigueur juridique, connaissance approfondie du marché, rapports
                motivés et exploitables : nous vous apportons des conclusions
                fiables pour éclairer vos décisions.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection>
            <aside className="border border-gold/50 bg-white p-8 shadow-card">
              <p className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
                Engagement
              </p>
              <p className="mt-4 font-display text-base font-normal italic leading-snug text-navy md:text-2xl">
                &ldquo;Le rapport d&apos;expertise doit éclairer le juge sans le
                substituer : clarté des faits, rigueur des méthodes, prudence des
                conclusions.&rdquo;
              </p>
            </aside>
          </FadeInSection>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
