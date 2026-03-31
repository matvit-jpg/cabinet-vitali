"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Expertise } from "@/lib/expertises";
import { ExpertiseIcon } from "@/lib/icons-expertise";

const positions = [
  "0% 0%",
  "100% 0%",
  "0% 50%",
  "100% 50%",
  "0% 100%",
  "100% 100%",
];

const slugOrder = [
  "expertises-judiciaires",
  "evaluation-immobiliere",
  "valeurs-locatives",
  "indemnites-expropriation",
  "prejudices-immobiliers",
  "ingenierie-immobiliere",
];

export function ExpertiseListCard(e: Expertise) {
  const index = slugOrder.indexOf(e.slug);
  const position = positions[index] ?? "50% 50%";

  return (
    <motion.li
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group relative min-h-[220px] overflow-hidden rounded-sm border border-grey-light shadow-card hover:[background-size:220%_320%]"
      style={{
        backgroundImage: "url('/images/justice.png')",
backgroundSize: "200% 300%",
backgroundPosition: position,
transition: "background-size 0.5s ease",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60 transition group-hover:from-navy/95 group-hover:via-navy/75 group-hover:to-navy/50" />
      <Link
        href={`/expertises/${e.slug}`}
        className="relative z-10 flex h-full min-h-[220px] flex-col justify-end p-8 text-ivory"
      >
        <ExpertiseIcon name={e.icon} className="mb-3 h-10 w-10 text-gold" />
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          {e.title}
        </h2>
        <p className="mt-2 font-sans text-sm font-light text-ivory/85">
          {e.shortDescription}
        </p>
        <span className="mt-4 inline-flex font-sans text-xs font-medium uppercase tracking-wider text-gold-light">
          Voir le détail
        </span>
      </Link>
    </motion.li>
  );
}