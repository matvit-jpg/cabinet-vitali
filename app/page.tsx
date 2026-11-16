import { languageAlternates } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { DecideursLogo } from "@/components/sections/DecideursLogo";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";

const homeTitle =
  "Expert judiciaire immobilier à Marseille et Aix-en-Provence | Cabinet Vitali";

export const metadata = {
  ...createMetadata({
    title: "Accueil",
    description:
      "Serge Vitali, expert judiciaire près la Cour d'appel d'Aix-en-Provence : valeur vénale, valeur locative de renouvellement, indemnité d'éviction, préjudices.",
    path: "/",
    languages: languageAlternates("/", "/en"),
  }),
  title: { absolute: homeTitle },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <ExpertiseGrid />
      <DecideursLogo />
    </>
  );
}