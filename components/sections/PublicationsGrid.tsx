"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { publications } from "@/lib/publications";
import type { PublicationCategory } from "@/lib/publications";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { useMemo, useState } from "react";

export function PublicationsGrid({
  limit,
  showFilters = true,
  hideHeading = false,
}: {
  limit?: number;
  showFilters?: boolean;
  hideHeading?: boolean;
}) {
  const [cat, setCat] = useState<PublicationCategory | "Tous">("Tous");

  const categories: (PublicationCategory | "Tous")[] = [
    "Tous",
    "Presse",
    "Conférences",
    "Articles",
    "Interviews",
  ];

  const filtered = useMemo(() => {
    let list =
      cat === "Tous"
        ? publications
        : publications.filter((p) => p.category === cat);
    if (limit) list = list.slice(0, limit);
    return list;
  }, [cat, limit]);

  return (
    <SectionWrapper className="bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {!hideHeading && (
          <FadeInSection>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-navy">
              Publications & visibilité
            </h2>
          </FadeInSection>
        )}
        {showFilters && (
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filtrer par catégorie"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 font-sans text-sm transition ${
                  cat === c
                    ? "bg-navy text-ivory"
                    : "bg-grey-light text-navy hover:bg-gold/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}
        <div className="mt-12 columns-1 gap-8 md:columns-2 lg:columns-3">
          {filtered.map((p) => (
            <FadeInSection key={p.id}>
              <article className="mb-8 break-inside-avoid rounded-sm border border-grey-light bg-ivory p-6 shadow-card">
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-gold">
                  {p.category} · {p.date}
                </p>
                <p className="mt-1 font-sans text-sm text-grey-mid">{p.source}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 font-sans text-sm font-light leading-relaxed text-grey-mid">
                  {p.excerpt}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-medium text-navy hover:text-gold"
                >
                  Lire
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
              </article>
            </FadeInSection>
          ))}
        </div>
        {limit && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/publications"
              className="font-sans text-sm font-medium text-navy underline decoration-gold underline-offset-4 hover:text-gold"
            >
              Toutes les publications
            </Link>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
