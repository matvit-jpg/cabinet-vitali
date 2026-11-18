import { StaggerList } from "@/components/motion/Stagger";
import { expertises } from "@/lib/expertises";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Divider } from "@/components/ui/Divider";
import { ExpertiseListCard } from "@/components/sections/ExpertiseListCard";
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
        <StaggerList className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["expertises-judiciaires", "valeurs-locatives", "indemnite-eviction", "evaluation-immobiliere"].map((slug) => {
            const e = expertises.find((x) => x.slug === slug)!;
            return <ExpertiseListCard key={e.slug} {...e} />;
          })}
        </StaggerList>
        <div className="mt-14 flex justify-center">
          <Button href="/expertises" variant="secondary">
            Voir toutes nos expertises
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
