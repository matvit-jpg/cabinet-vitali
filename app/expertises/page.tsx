import { createMetadata } from "@/lib/metadata";
import { expertises } from "@/lib/expertises";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ExpertiseListCard } from "@/components/sections/ExpertiseListCard";

export const metadata = createMetadata({
  title: "Domaines d'expertises",
  description:
    "Domaines d'intervention : expertise judiciaire, évaluation immobilière, valeurs locatives, expropriation, préjudices et conseil.",
  path: "/expertises",
});

export default function ExpertisesPage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Domaines d'expertises" },
            ]}
          />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Domaines d&apos;expertises
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-lg font-light text-grey-mid">
            Des missions adaptées aux enjeux patrimoniaux, amiables ou
            judiciaires.
          </p>
        </div>
      </section>

      <div className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="h-px w-full bg-gold/40" />
        </div>
      </div>

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-5xl px-1 lg:px-8">
          <ul className="grid grid-cols-2 gap-1 md:gap-2">
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
