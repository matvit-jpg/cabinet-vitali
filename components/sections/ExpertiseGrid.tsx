import { expertises } from "@/lib/expertises";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { Button } from "@/components/ui/Button";

export function ExpertiseGrid() {
  return (
    <SectionWrapper id="expertises" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeInSection>
          <h2 className="font-display text-xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">
            Domaines d&apos;expertise
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-sm font-light text-grey-mid md:text-lg">
            Une pratique structurée autour de l&apos;évaluation immobilière et
            du cadre judiciaire.
          </p>
        </FadeInSection>
        <Divider />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {["valeurs-locatives", "evaluation-immobiliere", "prejudices-immobiliers"].map((slug) => {
            const e = expertises.find((x) => x.slug === slug)!;
            return (
              <FadeInSection key={e.slug}>
                <ExpertiseCard expertise={e} href={`/expertises/${e.slug}`} />
              </FadeInSection>
            );
          })}
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/expertises" variant="secondary">
            Voir toutes nos expertises
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
