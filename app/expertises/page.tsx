import { createMetadata } from "@/lib/metadata";
import { expertises } from "@/lib/expertises";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ExpertiseListCard } from "@/components/sections/ExpertiseListCard";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = createMetadata({
  title: "Expertise immobilière : valeur vénale, valeur locative, indemnité d'éviction",
  description:
    "Domaines d'intervention : expertise judiciaire, évaluation immobilière, valeurs locatives, expropriation, préjudices et conseil.",
  path: "/expertises",
});

export default function ExpertisesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Domaines d'expertise" }]}
        eyebrow="Amiable · Judiciaire"
        title="Domaines d'expertise"
        intro="Des missions adaptées aux enjeux patrimoniaux, amiables ou judiciaires, conduites selon la Charte de l'expertise en évaluation immobilière et les normes européennes d'évaluation."
        links={[
          { label: "Valeur locative et baux commerciaux", href: "/expertises/valeurs-locatives" },
          { label: "Indemnité d'éviction", href: "/expertises/indemnite-eviction" },
          { label: "Évaluation immobilière", href: "/expertises/evaluation-immobiliere" },
          { label: "Sociétés à prépondérance immobilière", href: "/expertises/parts-de-societes" },
          { label: "Successions, donations, partages", href: "/expertises/successions-donations-partages" },
          { label: "Expropriation", href: "/expertises/indemnites-expropriation" },
          { label: "Préjudices immobiliers", href: "/expertises/prejudices-immobiliers" },
        ]}
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertises
              .filter((e) => !["expertises-judiciaires", "ingenierie-immobiliere"].includes(e.slug))
              .map((e) => (
                <ExpertiseListCard key={e.slug} {...e} />
              ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
