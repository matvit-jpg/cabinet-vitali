import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { HomeIntro } from "@/components/sections/HomeIntro";
import { DecideursLogo } from "@/components/sections/DecideursLogo";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

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
      <HomeIntro />
      <DecideursLogo />
      <ExpertiseGrid />
      <HomeProcess />
      <Testimonials />
      <FinalCta />
    </>
  );
}