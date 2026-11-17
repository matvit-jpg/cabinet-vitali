import { createMetadata } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeInSection } from "@/components/motion/FadeInSection";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = createMetadata({
  title: "Arbitrage et résolution amiable des litiges",
  description: "Serge Vitali, arbitre inscrit au CMAP — mode alternatif de résolution des litiges immobiliers, rapide, confidentiel et maîtrisé.",
  path: "/arbitrage",
});

export default function ArbitragePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Arbitrage" }]}
        eyebrow="Modes amiables"
        title="Arbitrage"
        intro="Mode alternatif de résolution des différends — rapide, confidentiel, maîtrisé."
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <FadeInSection>
            <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
              <p>L&apos;arbitrage est un mode alternatif de résolution des différends (MARD). Il permet aux parties de faire trancher leur litige par un arbitre compétent et indépendant.</p>
              <p>Le tribunal arbitral est une juridiction et la sentence oblige les parties, permettant les voies d&apos;exécution via la procédure simplifiée de l&apos;exequatur.</p>
              <p>L&apos;arbitrage permet de réduire considérablement la durée globale de règlement du litige par rapport à un contentieux étatique. Il offre une prévisibilité et une maîtrise des coûts avec des barèmes adaptés pour les litiges relatifs aux baux commerciaux.</p>
              <p>Dans un contexte économique incertain, le caractère confidentiel des débats et de la sentence, ainsi que la possibilité de solliciter une sentence en amiable composition, sont autant d&apos;atouts au service des parties.</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-12 border-t border-grey-light pt-10">
              <h2 className="font-display text-2xl font-semibold text-navy">Accréditation</h2>
              <p className="mt-4 font-sans text-base font-light leading-relaxed text-text">
                Serge Vitali a suivi la formation à l&apos;arbitrage délivrée par l&apos;Institut 131 et est inscrit sur la liste des arbitres du <strong>CMAP</strong> — leader en France et l&apos;un des principaux centres européens de gestion et de résolution des conflits pour les entreprises.
              </p>
              <div className="mt-8">
                <a href="https://www.cmap.fr" target="_blank" rel="noopener noreferrer">
                <img src="/images/cmap.png" alt="CMAP" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>
    </>
  );
}