"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Désactive les animations pour les visiteurs ayant choisi « réduire les animations ». */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
