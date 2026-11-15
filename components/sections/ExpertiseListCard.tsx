"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Expertise } from "@/lib/expertises";
import { ExpertiseIcon } from "@/lib/icons-expertise";

export function ExpertiseListCard(e: Expertise) {
  return (
    <li className="group h-full">
      <Link
        href={`/expertises/${e.slug}`}
        className="flex h-full flex-col rounded-sm border border-grey-light bg-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-gold-dark/50 hover:shadow-elevated md:p-8"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-sm bg-ivory text-gold-dark transition-colors group-hover:bg-navy group-hover:text-gold-light">
          <ExpertiseIcon name={e.icon} className="h-6 w-6" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-navy">
          {e.title}
        </h2>
        <p className="mt-2 flex-1 font-sans text-sm font-light leading-relaxed text-navy/70 md:text-base">
          {e.shortDescription}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-gold-dark">
          Voir le détail
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </Link>
    </li>
  );
}
