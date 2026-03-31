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

function buildColumns(images: string[], count: number): string[][] {
  const cols: string[][] = Array.from({ length: count }, () => []);
  const evenTotal = Math.floor(images.length / count) * count;
  images.forEach((src, i) => {
    // Les images "en trop" vont dans la colonne du milieu (col 1)
    cols[i >= evenTotal ? 1 : i % count].push(src);
  });
  return cols;
}

export function PublicationsGrid() {
  const cols3 = buildColumns(galleryImages, 3);
  const cols2 = buildColumns(galleryImages, 2);

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

      {/* Galerie masonry */}
      <SectionWrapper className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* Desktop : 3 colonnes */}
          <div className="hidden gap-5 lg:flex lg:items-start">
            {cols3.map((col, ci) => (
              <div key={ci} className="flex flex-1 flex-col gap-5">
                {col.map((src, ri) => {
                  const delay = ci * 0.1 + ri * 0.15;
                  return (
                    <motion.div
                      key={ri}
                      custom={delay}
                      variants={itemVariant}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-60px" }}
                      className="group overflow-hidden rounded-sm bg-grey-light shadow-card"
                    >
                      <Image
                        src={src}
                        alt={`Publication ${ci + ri * 3 + 1}`}
                        width={600}
                        height={800}
                        className="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile / tablette : 2 colonnes */}
          <div className="flex gap-4 lg:hidden">
            {cols2.map((col, ci) => (
              <div key={ci} className="flex flex-1 flex-col gap-4">
                {col.map((src, ri) => {
                  const delay = ci * 0.08 + ri * 0.12;
                  return (
                    <motion.div
                      key={ri}
                      custom={delay}
                      variants={itemVariant}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-40px" }}
                      className="group overflow-hidden rounded-sm bg-grey-light shadow-card"
                    >
                      <Image
                        src={src}
                        alt={`Publication ${ci + ri * 2 + 1}`}
                        width={400}
                        height={600}
                        className="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
