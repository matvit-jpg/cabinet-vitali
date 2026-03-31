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
        className="group flex h-full flex-col rounded-sm border border-grey-light bg-white p-8 shadow-card transition-colors hover:border-gold hover:bg-navy hover:text-ivory hover:shadow-elevated"
        aria-label={`${expertise.title} — voir le détail`}
      >
        <ExpertiseIcon
          name={expertise.icon}
          className="mb-4 h-10 w-10 text-gold transition group-hover:text-gold-light"
        />
        <h3 className="font-display text-xl font-semibold tracking-tight text-navy group-hover:text-ivory">
          {expertise.title}
        </h3>
        <p className="mt-3 flex-1 font-sans text-sm font-light leading-relaxed text-grey-mid group-hover:text-ivory/85">
          {expertise.shortDescription}
        </p>
        <span className="mt-6 inline-flex font-sans text-xs font-medium uppercase tracking-wider text-gold group-hover:text-gold-light">
          En savoir plus
        </span>
      </Link>
    </motion.div>
  );
}
