"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Expertise } from "@/lib/expertises";
import { ExpertiseIcon } from "@/lib/icons-expertise";

const bg =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad378?auto=format&fit=crop&w=1200&q=80";

export function ExpertiseListCard(e: Expertise) {
  return (
    <motion.li
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group relative min-h-[220px] overflow-hidden rounded-sm border border-grey-light shadow-card"
    >
      <Image
        src={bg}
        alt=""
        fill
        className="object-cover opacity-25 transition group-hover:opacity-35"
        sizes="(max-width:768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-transparent" />
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
