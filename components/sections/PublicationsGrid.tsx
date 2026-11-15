"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { featuredArticle, galleryImages, galleryEntries, publications, interventions, type PublicationEntry } from "@/lib/publications";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInSection } from "@/components/motion/FadeInSection";

const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function PublicationsGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      {/* Article vedette */}
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
              <div className="relative w-full shrink-0 md:w-64">
                <Image
                  src={featuredArticle.photo}
                  alt={featuredArticle.title}
                  width={256}
                  height={342}
                  className="w-full rounded-sm object-cover shadow-card"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-sans text-sm font-medium uppercase tracking-wider text-gold">
                  {featuredArticle.date}
                </p>
                <p className="mt-2 font-sans text-sm font-light italic text-grey-mid">
                  {featuredArticle.title}
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-snug text-navy md:text-4xl">
                  {featuredArticle.subtitle}
                </h2>
                <p className="mt-4 max-w-prose font-sans text-base font-light leading-relaxed text-grey-mid">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-8">
                  <Image
                    src={featuredArticle.logo}
                    alt={featuredArticle.source}
                    width={245}
                    height={102}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>

      {/* Publications et interventions */}
      {[
        { label: "Publications", items: publications, offset: 0, bg: "bg-[#F2F0EB]" },
        { label: "Conférences & interventions", items: interventions, offset: publications.length, bg: "bg-white" },
      ].map((group) => (
        <SectionWrapper key={group.label} className={group.bg}>
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-navy/15" />
              <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-navy/60">
                {group.label}
              </h2>
              <div className="h-px flex-1 bg-navy/15" />
            </div>
            <ul className="space-y-6">
              {group.items.map((item: PublicationEntry, i: number) => (
                <motion.li
                  key={item.title}
                  custom={i * 0.05}
                  variants={itemVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-col gap-5 rounded-sm border border-navy/10 bg-white p-5 shadow-[0_2px_12px_rgba(13,27,42,0.06)] sm:flex-row sm:items-center sm:gap-8"
                >
                  {item.image ? (
                    <button
                      type="button"
                      onClick={() => setActiveIndex(galleryEntries.indexOf(item))}
                      className="group relative h-40 w-full shrink-0 cursor-zoom-in overflow-hidden rounded-sm bg-[#F2F0EB] sm:h-36 sm:w-44"
                      aria-label={`Agrandir : ${item.title}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="176px"
                        className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </button>
                  ) : (
                    <div className="flex h-40 w-full shrink-0 flex-col items-center justify-center rounded-sm bg-navy px-3 text-center sm:h-36 sm:w-44">
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gold">
                        {item.kind === "intervention" ? "Intervention" : "Publication"}
                      </span>
                      <span className="mt-2 font-display text-lg leading-tight text-ivory">{item.date}</span>
                    </div>
                  )}
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                      {item.date}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-navy md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm font-light text-grey-mid">
                      {item.source}
                      {item.reference ? ` — ${item.reference}` : ""}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      ))}

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
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Flèche gauche */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-ivory transition hover:bg-white/20"
              aria-label="Précédent"
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
                alt={galleryEntries[activeIndex]?.title ?? "Publication"}
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
              aria-label="Suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
