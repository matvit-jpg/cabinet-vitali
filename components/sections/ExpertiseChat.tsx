"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = [
  {
    question: "Quelle est la valeur juridique du rapport d'expertise ?",
    answer:
      "Le rapport est versé au dossier et sert de base technique à la décision du juge. Les avis de l'expert ne s'imposent pas aux magistrats, qui demeurent libres de statuer en fonction de l'ensemble des éléments du dossier.",
  },
  {
    question: "Puis-je choisir mon expert judiciaire ?",
    answer:
      "La désignation relève en principe du juge. Les parties peuvent toutefois formuler des observations sur la mission ou proposer des candidatures dans les formes prévues par la procédure civile.",
  },
  {
    question: "Quelle est la différence entre expert judiciaire et expert amiable ?",
    answer:
      "L'expert judiciaire est désigné par la juridiction dans un cadre procédural strict, avec principe du contradictoire obligatoire. L'expert amiable intervient à la demande des parties, avec davantage de souplesse sur le calendrier et la confidentialité des échanges.",
  },
  {
    question: "Combien de temps dure une expertise judiciaire ?",
    answer:
      "La durée varie selon la complexité de la mission, les investigations nécessaires et le calendrier judiciaire. Un échéancier est communiqué dès l'acceptation de la mission.",
  },
];

export function ExpertiseChat() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="h-px flex-1 bg-grey-light" />
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
          Questions fréquentes
        </span>
        <div className="h-px flex-1 bg-grey-light" />
      </div>

      <div className="divide-y divide-grey-light border-y border-grey-light">
        {FAQ.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-base font-medium text-navy md:text-lg">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="shrink-0 text-gold"
                  style={{ fontSize: "1.25rem", lineHeight: 1 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="pb-5 pr-10 font-sans text-sm font-light leading-relaxed text-text">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
