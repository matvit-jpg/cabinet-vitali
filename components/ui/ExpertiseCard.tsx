"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExpertiseIcon } from "@/lib/icons-expertise";
import type { Expertise } from "@/lib/expertises";

export function ExpertiseCard({
  expertise,
  href,
}: {
  expertise: Expertise;
  href: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
      <Link
        href={href}
        className="group flex h-full flex-row items-start gap-4 rounded-sm border border-grey-light bg-white p-5 shadow-card transition-colors hover:border-gold hover:bg-navy hover:text-ivory hover:shadow-elevated md:flex-col md:p-12"
        aria-label={`${expertise.title} — voir le détail`}
      >
        <ExpertiseIcon
          name={expertise.icon}
          className="mt-0.5 h-8 w-8 shrink-0 text-gold transition group-hover:text-gold-light md:mb-6 md:h-14 md:w-14"
        />
        <div className="flex flex-col">
          <h3 className="font-display text-lg font-semibold tracking-tight text-navy group-hover:text-ivory md:text-2xl">
            {expertise.title}
          </h3>
          <p className="mt-1 font-sans text-sm font-light leading-relaxed text-grey-mid group-hover:text-ivory/85 md:mt-4 md:text-base">
            {expertise.shortDescription}
          </p>
          <span className="mt-3 inline-flex font-sans text-xs font-medium uppercase tracking-wider text-gold group-hover:text-gold-light md:mt-8 md:text-sm">
            En savoir plus
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
