"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

          {/* Titre de section */}
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
                className="group relative bg-white shadow-[0_2px_12px_rgba(13,27,42,0.08)] transition-shadow duration-300 hover:shadow-[0_6px_24px_rgba(13,27,42,0.14)]"
              >
                {/* Ruban doré en haut */}
                <div className="h-1 w-full bg-gold/60" />

                {/* Ornements d'angle */}
                {/* Haut-gauche */}
                <span className="pointer-events-none absolute left-2 top-3 h-4 w-4 border-l border-t border-gold/40" />
                {/* Haut-droit */}
                <span className="pointer-events-none absolute right-2 top-3 h-4 w-4 border-r border-t border-gold/40" />
                {/* Bas-gauche */}
                <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b border-l border-gold/40" />
                {/* Bas-droit */}
                <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b border-r border-gold/40" />

                <div className="relative h-64 w-full overflow-hidden p-2">
                  <Image
                    src={src}
                    alt={`Publication ${i + 1}`}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />
                </div>
                {/* Numéro discret */}
                <div className="absolute bottom-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-navy/8 font-sans text-[10px] font-medium text-navy/40">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
