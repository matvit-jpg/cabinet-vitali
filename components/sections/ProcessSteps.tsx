"use client";

import { motion } from "framer-motion";
import { FadeInSection } from "@/components/motion/FadeInSection";

export type ProcessStep = { title: string; description?: string };

export function ProcessSteps({
  steps,
  title,
  className = "",
}: {
  steps: ProcessStep[];
  title?: string;
  className?: string;
}) {
  const colCount = steps.length > 4 ? 3 : 4;
  const rows: ProcessStep[][] = [];
  for (let i = 0; i < steps.length; i += colCount) {
    rows.push(steps.slice(i, i + colCount));
  }

  return (
    <div className={className}>
      {title && (
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl text-center">
          {title}
        </h2>
      )}
      <div className="mt-12 space-y-16">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            {/* Ligne navy continue traversant tous les cercles, avec flèche finale */}
            <div
              className="absolute top-6 hidden -translate-y-1/2 lg:flex items-center"
              style={{
                left: `calc(100% / ${colCount * 2})`,
                width: `calc(100% - 100% / ${colCount} - 28px)`,
              }}
              aria-hidden
            >
              <motion.div
                className="h-px flex-1 bg-navy"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
                transition={{
                  duration: 1.0,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: rowIndex * 0.1,
                }}
              />
              <motion.svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                className="shrink-0"
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: rowIndex * 0.1 + 1.0 }}
              >
                <path d="M0 0 L8 6 L0 12 Z" fill="#0D1B2A" />
              </motion.svg>
            </div>

            <ol
              className={`grid gap-10 md:grid-cols-2 ${
                colCount === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
              }`}
            >
              {row.map((step, i) => {
                const globalIndex = rowIndex * colCount + i;
                return (
                  <FadeInSection key={step.title}>
                    <li className="relative flex flex-col items-center text-center">
                      <motion.span
                        className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-navy bg-ivory font-display text-lg font-semibold text-navy"
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          ease: "backOut",
                          delay: rowIndex * 0.1,
                        }}
                        whileHover={{ scale: 1.08 }}
                      >
                        {globalIndex + 1}
                      </motion.span>
                      <motion.span
                        className="font-display text-xl font-semibold text-navy"
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: rowIndex * 0.1 + 0.06,
                        }}
                      >
                        {step.title}
                      </motion.span>
                      {step.description && (
                        <motion.p
                          className="mt-2 font-sans text-sm font-light text-grey-mid"
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: rowIndex * 0.1 + 0.12,
                          }}
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </li>
                  </FadeInSection>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
