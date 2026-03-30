"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type TimelineMilestone = {
  year: string;
  title: string;
  description: string;
};

export function Timeline({ items }: { items: TimelineMilestone[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const goldHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl pl-8 md:pl-12">
      <div
        className="absolute bottom-0 left-[11px] top-0 w-px bg-grey-light md:left-[15px]"
        aria-hidden
      />
      <motion.div
        className="absolute left-[11px] top-0 w-px origin-top bg-gold md:left-[15px]"
        style={{ height: goldHeight }}
        aria-hidden
      />
      <ol className="space-y-12">
        {items.map((m, i) => (
          <motion.li
            key={`${m.year}-${i}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-8 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gold bg-ivory font-sans text-xs font-bold text-navy md:-left-10 md:h-8 md:w-8">
              ●
            </span>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              {m.year}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-navy">
              {m.title}
            </h3>
            <p className="mt-2 font-sans text-sm font-light text-grey-mid">
              {m.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
