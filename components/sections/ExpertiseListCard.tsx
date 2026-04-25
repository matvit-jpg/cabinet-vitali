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
      className="expertise-card group relative aspect-square overflow-hidden rounded-sm border border-grey-light shadow-card"
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
        className="relative z-10 flex h-full flex-col justify-end p-4 md:p-8 text-ivory"
      >
        <ExpertiseIcon name={e.icon} className="mb-2 h-5 w-5 md:mb-3 md:h-8 md:w-8 text-gold" />
        <h2 className="font-display text-[11px] md:text-xl font-semibold tracking-tight">
          {e.title}
        </h2>
        <p className="mt-1 md:mt-2 font-sans text-[9px] md:text-sm font-light text-ivory/85 line-clamp-2">
          {e.shortDescription}
        </p>
        <span className="mt-1 inline-flex md:mt-3 font-sans text-[9px] md:text-xs font-medium uppercase tracking-wider text-gold-light">
          Voir le détail
        </span>
      </Link>
    </motion.li>
  );
}