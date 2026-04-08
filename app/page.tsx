import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { DecideursLogo } from "@/components/sections/DecideursLogo";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";

export const metadata = createMetadata({
  title: "Accueil",
  description:
    "Expert judiciaire agréé — évaluations immobilières opposables devant les tribunaux. Clarté, rigueur et autorité.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <ExpertiseGrid />
      <DecideursLogo />
    </>
  );
}