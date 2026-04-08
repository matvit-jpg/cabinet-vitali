"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Expertise } from "@/lib/expertises";
import { ExpertiseIcon } from "@/lib/icons-expertise";

export function ExpertiseListCard(e: Expertise) {
  return (
    <motion.li
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="expertise-card group relative aspect-square md:aspect-auto md:min-h-[220px] overflow-hidden rounded-sm border border-grey-light shadow-card"
      style={{
        backgroundImage: "url('/images/justice.png')",
        backgroundSize: "var(--card-bg-size)",
        backgroundPosition: "var(--card-bg-pos)",
        transition: "background-size 0.5s ease",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60 transition group-hover:from-navy/95 group-hover:via-navy/75 group-hover:to-navy/50" />
      <Link
        href={`/expertises/${e.slug}`}
        className="relative z-10 flex h-full md:min-h-[220px] flex-col justify-end p-3 md:p-8 text-ivory"
      >
        <ExpertiseIcon name={e.icon} className="mb-2 h-6 w-6 md:mb-3 md:h-10 md:w-10 text-gold" />
        <h2 className="font-display text-xs md:text-2xl font-semibold tracking-tight">
          {e.title}
        </h2>
        <p className="hidden md:block mt-2 font-sans text-sm font-light text-ivory/85">
          {e.shortDescription}
        </p>
        <span className="mt-2 inline-flex md:mt-4 font-sans text-[10px] md:text-xs font-medium uppercase tracking-wider text-gold-light">
          Voir le détail
        </span>
      </Link>
    </motion.li>
  );
}