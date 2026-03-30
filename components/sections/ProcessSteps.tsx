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
  return (
    <div className={className}>
      {title && (
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
          {title}
        </h2>
      )}
      <div className="relative mt-12">
        <div
          className="absolute left-0 top-8 hidden h-[calc(100%-2rem)] w-full md:block"
          aria-hidden
        >
          <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>
        <ol
          className={`grid gap-10 md:grid-cols-2 ${
            steps.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {steps.map((step, i) => (
            <FadeInSection key={step.title}>
              <li className="relative flex flex-col items-center text-center">
                <motion.span
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-ivory font-display text-lg font-semibold text-navy"
                  whileHover={{ scale: 1.05 }}
                >
                  {i + 1}
                </motion.span>
                <span className="font-display text-xl font-semibold text-navy">
                  {step.title}
                </span>
                {step.description && (
                  <p className="mt-2 font-sans text-sm font-light text-grey-mid">
                    {step.description}
                  </p>
                )}
              </li>
            </FadeInSection>
          ))}
        </ol>
      </div>
    </div>
  );
}
