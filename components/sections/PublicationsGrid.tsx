"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages, galleryEntries, publications, interventions, type PublicationEntry } from "@/lib/publications";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInSection } from "@/components/motion/FadeInSection";


export function PublicationsGrid({ lang = "fr" }: { lang?: "fr" | "en" }) {
  const en = lang === "en";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "publication" | "intervention">("all");
  const all = [...publications, ...interventions].sort((a, b) => b.iso.localeCompare(a.iso));
  const shown = filter === "all" ? all : all.filter((p) => p.kind === filter);
  const filters = [
    { id: "all" as const, label: en ? "All" : "Tout", count: all.length },
    { id: "publication" as const, label: "Publications", count: publications.length },
    { id: "intervention" as const, label: en ? "Talks" : "Interventions", count: interventions.length },
  ];
  const tagOf = (p: PublicationEntry) =>
    p.kind === "intervention" ? (en ? "Talk" : "Intervention") : p.reference ? "AJDI" : en ? "Opinion piece" : "Tribune";

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  return (
    <>
      {/* Publications et interventions */}
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label={en ? "Filter" : "Filtrer"}>
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-widest transition-colors ${
                  filter === f.id
                    ? "border-navy bg-navy text-ivory"
                    : "border-navy/15 bg-white text-navy/70 hover:border-gold-dark hover:text-navy"
                }`}
              >
                {f.label}
                <span className={`ml-2 ${filter === f.id ? "text-gold" : "text-navy/40"}`}>{f.count}</span>
              </button>
            ))}
          </div>

          <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((item) => (
                <motion.li
                  key={item.iso + item.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col overflow-hidden rounded-sm border border-navy/10 bg-white transition-[border-color,box-shadow] duration-300 hover:border-gold-dark/40 hover:shadow-elevated"
                >
                  {item.image && (
                    <button
                      type="button"
                      onClick={() => setActiveIndex(galleryEntries.indexOf(item))}
                      className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-ivory"
                      aria-label={`${en ? "Enlarge" : "Agrandir"} : ${en ? item.en.title : item.title}`}
                    >
                      <Image
                        src={item.image}
                        alt={en ? item.en.title : item.title}
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-5 drop-shadow-[0_6px_14px_rgba(13,27,42,0.18)] transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </button>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-widest text-gold-dark">
                        {tagOf(item)}
                      </span>
                      <span className="font-sans text-xs uppercase tracking-wider text-navy/50">
                        {en ? item.en.date : item.date}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-navy">
                      {en ? item.en.title : item.title}
                    </h3>
                    <p className="mt-auto pt-5 font-sans text-xs font-light leading-relaxed text-grey-mid">
                      {en ? item.en.source : item.source}
                      {item.reference ? (
                        <span className="mt-1 block font-medium text-navy/70">{item.reference}</span>
                      ) : null}
                    </p>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 backdrop-blur-sm"
            onClick={close}
          >
            {/* Bouton fermer */}
            <button
              onClick={close}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ivory transition hover:bg-white/20"
              aria-label={en ? "Close" : "Fermer"}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Flèche gauche */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-ivory transition hover:bg-white/20"
              aria-label={en ? "Previous" : "Précédent"}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-20 flex max-h-[85vh] max-w-3xl flex-1 items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeIndex]}
                alt={(en ? galleryEntries[activeIndex]?.en.title : galleryEntries[activeIndex]?.title) ?? "Publication"}
                width={900}
                height={1200}
                className="max-h-[85vh] w-auto rounded-sm object-contain shadow-elevated"
              />
              {/* Compteur */}
              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-sans text-xs text-ivory/50">
                {activeIndex + 1} / {galleryImages.length}
              </p>
            </motion.div>

            {/* Flèche droite */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-ivory transition hover:bg-white/20"
              aria-label={en ? "Next" : "Suivant"}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
