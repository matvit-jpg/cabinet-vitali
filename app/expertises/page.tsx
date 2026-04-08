import { createMetadata } from "@/lib/metadata";
import { expertises } from "@/lib/expertises";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ExpertiseListCard } from "@/components/sections/ExpertiseListCard";

export const metadata = createMetadata({
  title: "Nos missions",
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
              { label: "Nos missions" },
            ]}
          />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Nos missions
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-lg font-light text-grey-mid">
            Des missions adaptées aux enjeux patrimoniaux, amiables ou
            judiciaires.
          </p>
        </div>
      </section>

      <div className="bg-ivory py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 flex flex-col items-center gap-3">
          <div className="h-px w-full bg-gold/80" />
          <div className="h-1.5 w-16 rounded-full bg-gold" />
          <div className="h-px w-full bg-gold/80" />
        </div>
      </div>

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ul className="grid grid-cols-2 gap-4 md:gap-8">
            {expertises.map((e) => (
              <ExpertiseListCard key={e.slug} {...e} />
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </>
  );
}
