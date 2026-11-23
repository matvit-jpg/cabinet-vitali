import { languageAlternates } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { DecideursLogo } from "@/components/sections/DecideursLogo";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";

const homeTitle =
  "Expert immobilier et expert judiciaire à Marseille | Cabinet Vitali";

export const metadata = {
  ...createMetadata({
    title: "Accueil",
    description:
      "Expert immobilier à Marseille, Serge Vitali, expert de justice près la Cour d'appel d'Aix-en-Provence : valeur vénale, valeur locative, indemnité d'éviction.",
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
      <CredentialsStrip />
      <DecideursLogo />
    </>
  );
}