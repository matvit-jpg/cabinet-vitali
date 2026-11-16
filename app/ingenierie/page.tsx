import { createMetadata } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = createMetadata({
  title: "Ingénierie immobilière et conseil en baux commerciaux",
  description: "Conseil aux bailleurs et preneurs en immobilier commercial : analyse de la valeur locative, négociation et renouvellement des baux commerciaux, stratégie d'acquisition, à Marseille et Aix-en-Provence.",
  path: "/ingenierie",
});

export default function IngenieriePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Ingénierie immobilière" }]}
        eyebrow="Conseil · Stratégie"
        title="Ingénierie immobilière"
        intro="Services stratégiques complets pour les bailleurs et preneurs en immobilier commercial."
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <FadeInSection>
            <p className="font-sans text-sm font-light leading-relaxed text-text md:text-base">Notre cabinet propose des services stratégiques complets pour les bailleurs et preneurs en immobilier commercial. Notre expertise se concentre sur l&apos;analyse juridique et technique afin de maximiser la valeur des biens immobiliers et d&apos;optimiser les décisions prises.</p>
          </FadeInSection>

          {/* Bailleurs */}
          <FadeInSection>
            <div className="mt-12 border-t border-grey-light pt-10">
              <h2 className="font-display text-2xl font-semibold text-navy">Pour les Bailleurs (Propriétaires)</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">Analyse de la valeur locative et vénale</h3>
                  <p className="mt-2 font-sans text-sm font-light text-text">Évaluation des biens par méthodes reconnues (CMA, DCF, capitalisation des revenus). Études de marché détaillées incluant tendances économiques, taux de vacance et transactions récentes.</p>
                </div>
                <div className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">Optimisation des revenus locatifs</h3>
                  <p className="mt-2 font-sans text-sm font-light text-text">Stratégies basées sur l&apos;analyse de la demande locative, segmentation des locataires et optimisation des loyers en fonction des conditions du marché.</p>
                </div>
                <div className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">Négociation et renégociation de baux</h3>
                  <p className="mt-2 font-sans text-sm font-light text-text">Assistance dans la négociation de termes favorables : loyer échelonné, options de renouvellement, responsabilités de maintenance et conditions de résiliation.</p>
                </div>
                <div className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">Conseils en investissement immobilier</h3>
                  <p className="mt-2 font-sans text-sm font-light text-text">Évaluation de la rentabilité des investissements, analyse des flux de trésorerie, calcul des taux de rendement interne (TRI) et stratégie d&apos;acquisition/cession.</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Preneurs */}
          <FadeInSection>
            <div className="mt-12 border-t border-grey-light pt-10">
              <h2 className="font-display text-2xl font-semibold text-navy">Pour les Preneurs (Locataires)</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">Analyse des marchés locatifs</h3>
                  <p className="mt-2 font-sans text-sm font-light text-text">Études de marché détaillées, comparaisons interrégionales et analyses sectorielles pour identifier les opportunités de négociation.</p>
                </div>
                <div className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">Négociation des baux</h3>
                  <p className="mt-2 font-sans text-sm font-light text-text">Assistance dans la négociation des termes de bail favorables et revue juridique minutieuse pour identifier et atténuer les risques.</p>
                </div>
                <div className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">Stratégie de relocalisation</h3>
                  <p className="mt-2 font-sans text-sm font-light text-text">Développement de plans de transition détaillés pour minimiser les perturbations opérationnelles lors de la relocalisation.</p>
                </div>
                <div className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h3 className="font-display text-lg font-semibold text-navy">Gestion des relations avec les bailleurs</h3>
                  <p className="mt-2 font-sans text-sm font-light text-text">Résolution proactive des litiges, médiation, négociation de règlements amiables et conseils sur la maintenance et les réparations.</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* CTA */}
          <FadeInSection>
            <div className="mt-12 border-t border-grey-light pt-10 text-center">
              <h2 className="font-display text-2xl font-semibold text-navy">Travaillons ensemble</h2>
              <p className="mt-4 font-sans text-base font-light text-grey-mid">Une question ? Contactez-nous pour discuter de votre projet.</p>
              <a href="/contact" className="mt-6 inline-block rounded-sm bg-gold px-8 py-3 font-sans text-sm font-medium text-navy hover:bg-gold-light transition-colors">
                Prendre contact
              </a>
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>
    </>
  );
}