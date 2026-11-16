import { createMetadata } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = createMetadata({
  title: "Ingénierie immobilière et conseil en baux commerciaux",
  description: "Avis de valeur et conseil aux bailleurs et preneurs avant renouvellement, acquisition ou cession, à Marseille et Aix-en-Provence.",
  path: "/ingenierie",
});

const missions = [
  {
    title: "Baux commerciaux : avis préalable au renouvellement",
    text: "Estimation du loyer de renouvellement ou de révision, analyse des clauses du bail et des chances de déplafonnement, avant l'envoi du congé ou de la demande de renouvellement, ou avant d'engager une procédure.",
  },
  {
    title: "Acquisition, cession et arbitrage patrimonial",
    text: "Valeur vénale et rendement d'un actif ou d'un portefeuille, par comparaison, capitalisation du revenu et actualisation des flux (DCF), pour éclairer une décision d'achat, de vente ou de restructuration.",
  },
  {
    title: "Terrains à bâtir et droits à construire",
    text: "Analyse des règles d'urbanisme applicables et bilan promoteur, pour déterminer la valeur d'une charge foncière ou d'un terrain à bâtir.",
  },
  {
    title: "Prise à bail et implantation",
    text: "Appréciation du loyer de marché d'un local au regard des références du secteur et de ses caractéristiques, avant la signature d'un bail.",
  },
];

export default function IngenieriePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Ingénierie immobilière" }]}
        eyebrow="Conseil · Aide à la décision"
        title="Ingénierie immobilière"
        intro="Des avis de valeur rendus en amont d'une décision, pour les bailleurs comme pour les preneurs."
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <FadeInSection>
            <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
              <p>
                En dehors de tout contentieux, le cabinet met ses méthodes d&apos;expertise au service de la décision : renouveler ou
                renégocier un bail, acquérir, céder ou restructurer un patrimoine, valoriser un terrain. L&apos;avis porte sur la valeur et
                sur les éléments qui la déterminent ; il est motivé comme un rapport d&apos;expertise et peut servir de base à une négociation.
              </p>
              <p>
                Ces missions sont conduites avec la même indépendance que les expertises. Le cabinet n&apos;intervient pas en conseil dans
                une affaire dont il est saisi comme expert judiciaire.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-12 grid gap-6 border-t border-grey-light pt-10 md:grid-cols-2">
              {missions.map((m) => (
                <div key={m.title} className="rounded-sm border border-grey-light bg-ivory p-6">
                  <h2 className="font-display text-xl font-semibold text-navy">{m.title}</h2>
                  <p className="mt-2 font-sans text-sm font-light leading-relaxed text-text">{m.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-12 border-t border-grey-light pt-10 text-center">
              <h2 className="font-display text-2xl font-semibold text-navy">Un projet à examiner ?</h2>
              <p className="mt-4 font-sans text-base font-light text-grey-mid">Décrivez votre situation : nous vous indiquerons la mission adaptée.</p>
              <a href="/contact" className="mt-6 inline-block rounded-sm bg-gold px-8 py-3 font-sans text-sm font-medium text-navy transition-colors hover:bg-gold-light">
                Prendre contact
              </a>
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>
    </>
  );
}
