"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { featuredArticle, galleryImages } from "@/lib/publications";
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

      {/* Revue de presse */}
      <SectionWrapper className="bg-[#F2F0EB]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-navy/15" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-navy/50">
              Revue de presse &amp; publications
            </span>
            <div className="h-px flex-1 bg-navy/15" />
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
            {galleryImages.map((src, i) => (
              <motion.div
                key={src}
                custom={i * 0.07}
                variants={itemVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                onClick={() => setActiveIndex(i)}
                className="group relative cursor-zoom-in bg-white shadow-[0_2px_12px_rgba(13,27,42,0.08)] transition-shadow duration-300 hover:shadow-[0_6px_24px_rgba(13,27,42,0.14)]"
              >
                <div className="h-1 w-full bg-gold/60" />
                <span className="pointer-events-none absolute left-2 top-3 h-4 w-4 border-l border-t border-gold/40" />
                <span className="pointer-events-none absolute right-2 top-3 h-4 w-4 border-r border-t border-gold/40" />
                <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b border-l border-gold/40" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b border-r border-gold/40" />
                <div className="relative h-64 w-full overflow-hidden p-2">
                  <Image
                    src={src}
                    alt={`Publication ${i + 1}`}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                </div>
                <div className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-navy/8 font-sans text-[10px] font-medium text-navy/40">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>

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
                alt={`Publication ${activeIndex + 1}`}
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
