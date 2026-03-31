"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Expertise } from "@/lib/expertises";
import { ExpertiseIcon } from "@/lib/icons-expertise";

const photos: Record<string, string> = {
  // Colonnes de palais de justice — pierre sombre, très sobre
  "expertises-judiciaires":
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
  // Façade d'immeuble résidentiel sobre — tons neutres, architecture épurée
  "evaluation-immobiliere":
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  // Couloir sombre d'immeuble de bureaux — minimal
  "valeurs-locatives":
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  // Skyline urbaine de nuit — sombre, épuré
  "indemnites-expropriation":
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
  // Façade abstraite en béton — texture, très sobre
  "prejudices-immobiliers":
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  // Bureau minimaliste sombre — stylo, document
  "ingenierie-immobiliere":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
};

export function ExpertiseListCard(e: Expertise) {
  const photo = photos[e.slug] ?? "https://images.unsplash.com/photo-1486406146926-c627a92ad378?auto=format&fit=crop&w=1200&q=80";

  return (
    <motion.li
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group relative min-h-[220px] overflow-hidden rounded-sm border border-grey-light shadow-card"
    >
      <Image
        src={photo}
        alt=""
        fill
        className="object-cover opacity-20 transition group-hover:opacity-30"
        sizes="(max-width:768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
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
