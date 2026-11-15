import { createMetadata } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ExpertiseChat } from "@/components/sections/ExpertiseChat";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = createMetadata({
  title: "Expertise judiciaire",
  description:
    "Expert inscrit près la Cour d'appel d'Aix-en-Provence et la Cour administrative d'appel de Marseille — estimations immobilières, valeurs locatives, préjudices.",
  path: "/expertise-judiciaire",
});

const processSteps = [
  {
    title: "Désignation",
    description:
      "Le juge désigne l'expert par ordonnance, en fixant la mission et le délai de dépôt du rapport.",
  },
  {
    title: "Acceptation de la mission",
    description:
      "L'expert accepte la mission, prête serment et convoque les parties dans le respect du contradictoire.",
  },
  {
    title: "Réunions d'expertise",
    description:
      "Visites sur site, investigations techniques, recueil des observations de chaque partie.",
  },
  {
    title: "Pré-rapport",
    description:
      "Premières conclusions soumises aux parties pour observations écrites avant la version définitive.",
  },
  {
    title: "Réponse aux observations",
    description:
      "L'expert répond aux dires des parties et intègre les éléments pertinents au rapport.",
  },
  {
    title: "Rapport définitif",
    description:
      "Le rapport motivé est déposé au greffe et versé au dossier de la juridiction.",
  },
];



export default function ExpertiseJudiciairePage() {
  return (
    <>
      {/* Hero */}
      <PageHeader
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Expertise judiciaire" }]}
        eyebrow="Au service de la justice"
        title="Expertise judiciaire"
        intro="Expert inscrit près la Cour d'appel d'Aix-en-Provence et la Cour administrative d'appel de Marseille — une fonction au service de la justice, fondée sur la rigueur et l'indépendance."
        facts={[
          { k: "2017", v: "Inscrit sur la liste de la Cour d'appel d'Aix-en-Provence" },
          { k: "CAA", v: "Expert près la Cour administrative d'appel de Marseille" },
          { k: "C.18", v: "Valeurs vénales et locatives, droits sociaux, préjudices immobiliers" },
        ]}
      />

      {/* Serment */}
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <blockquote className="border-l-2 border-gold pl-6">
            <p className="font-display text-xl font-light italic leading-relaxed text-navy md:text-2xl">
              &ldquo;Je jure d&apos;apporter mon concours à la justice,
              d&apos;accomplir ma mission, de faire mon rapport et de donner mon
              avis en mon honneur et en ma conscience.&rdquo;
            </p>
            <footer className="mt-4 font-sans text-sm text-grey-mid">
              Serment de l&apos;expert — Décret n°2004-1463 du 23 décembre 2004
            </footer>
          </blockquote>
          <div className="mt-10 space-y-4 font-sans text-base font-light leading-relaxed text-text">
            <p>
              Les experts judiciaires sont des professionnels habilités chargés
              de donner aux juges un avis technique sur des faits, afin
              d&apos;apporter des éclaircissements sur une affaire. Leurs avis
              ne s&apos;imposent pas aux magistrats, qui ne sont pas liés par
              leurs appréciations.
            </p>
            <p>
              L&apos;expert judiciaire est assermenté. Il ne s&apos;agit pas
              d&apos;une profession mais d&apos;une fonction confiée à des
              professionnels en activité au sommet de leur compétence, inscrits
              sur une liste établie par la cour d&apos;appel dans le ressort de
              laquelle ils exercent leur activité principale. Compétence
              professionnelle de haut niveau, rigueur intellectuelle et morale
              sont indispensables à cette fonction.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Processus */}
      <SectionWrapper className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ProcessSteps
            title="Déroulement type d'une mission"
            steps={processSteps}
          />
        </div>
      </SectionWrapper>

      {/* Domaines d'inscription */}
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
            Domaines d&apos;inscription
          </h2>

          <div className="mt-8 space-y-8">
            {/* Cour d'appel d'Aix-en-Provence */}
            <div>
              <p className="font-sans text-base text-text">
                <strong>Serge VITALI est inscrit sur la liste des Experts près la cour d&apos;appel d&apos;Aix-en-Provence</strong> dans les rubriques suivantes&nbsp;:
              </p>
              <ul className="mt-4 space-y-2 font-sans text-sm font-light text-text">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.18.1.</strong> Estimations immobilières matérielles&nbsp;: valeurs vénales de murs, terrains non agricoles, indemnité d&apos;expropriation, droits réels immobiliers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.18.2.</strong> Estimations immobilières immatérielles&nbsp;: valeurs locatives, indemnités d&apos;éviction ou d&apos;expropriation, de fonds de commerce et d&apos;entreprises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.18.3.</strong> Droits sociaux à prépondérance immobilière.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.18.4.</strong> Préjudices immobiliers.</span>
                </li>
              </ul>
            </div>

            {/* Cour Administrative d'Appel de Marseille */}
            <div>
              <p className="font-sans text-base text-text">
                <strong>Serge Vitali est inscrit sur la liste des experts près la Cour administrative d&apos;appel de Marseille</strong> dans les rubriques suivantes&nbsp;:
              </p>
              <ul className="mt-4 space-y-2 font-sans text-sm font-light text-text">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.18.1.</strong> Estimations immobilières matérielles&nbsp;: valeurs vénales de murs, terrains non agricoles, indemnité d&apos;expropriation, droits réels immobiliers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.18.2.</strong> Estimations immobilières immatérielles&nbsp;: valeurs locatives, indemnités d&apos;éviction ou d&apos;expropriation, de fonds de commerce et d&apos;entreprises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.18.3.</strong> Droits sociaux à prépondérance immobilière.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.18.4.</strong> Préjudices immobiliers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-dark">•</span>
                  <span><strong>C.19.1.</strong> Administration d&apos;immeuble et de copropriété, baux d&apos;habitation, commerciaux, professionnels.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <ExpertiseChat />
        </div>
      </SectionWrapper>
    </>
  );
}
