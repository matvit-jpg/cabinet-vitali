"use client";

import { motion } from "framer-motion";

/** Filet doré qui se trace de gauche à droite lorsqu'il entre à l'écran. */
export function GoldRule({ className = "mt-5 h-px w-12 bg-gold" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={`origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    />
  );
}
