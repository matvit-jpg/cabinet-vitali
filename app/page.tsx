import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { DecideursLogo } from "@/components/sections/DecideursLogo";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";

export const metadata = createMetadata({
  title: "Accueil",
  description:
    "Expert judiciaire inscrit près la Cour d'appel d'Aix-en-Provence — évaluations immobilières opposables devant les tribunaux. Clarté, rigueur et autorité.",
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