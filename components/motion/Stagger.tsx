"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem } from "@/lib/motion-variants";

/** Liste dont les éléments apparaissent l'un après l'autre au défilement. */
export function StaggerList({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.ul
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.ul>
  );
}

/** Élément d'une StaggerList. */
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.li className={className} variants={staggerItem}>
      {children}
    </motion.li>
  );
}
