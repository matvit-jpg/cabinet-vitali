import { createMetadata } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { AccordionFAQ } from "@/components/ui/AccordionFAQ";

export const metadata = createMetadata({
  title: "Expertise judiciaire",
  description:
    "Cadre légal (NCPC), processus d'expertise, expert désigné vs expert amiable — missions devant les tribunaux.",
  path: "/expertise-judiciaire",
});

const processSteps = [
  { title: "Saisine", description: "Désignation par le juge ou les parties." },
  { title: "Acceptation mission", description: "Cadre, délais et moyens." },
  {
    title: "Réunion d'expertise",
    description: "Organisation du contradictoire.",
  },
  { title: "Pré-rapport", description: "Premières conclusions partagées." },
  {
    title: "Observations des parties",
    description: "Réponses et compléments éventuels.",
  },
  { title: "Rapport définitif", description: "Remise au juge et au dossier." },
];

const faqItems = [
  {
    q: "Quelle est la valeur juridique du rapport ?",
    a: "Le rapport d'expertise est une pièce du dossier qui éclaire le juge. Le tribunal demeure libre d'adopter ou d'écarter les conclusions techniques, en les motivant.",
  },
  {
    q: "Puis-je choisir mon expert judiciaire ?",
    a: "La désignation relève en principe du juge. Les parties peuvent proposer des noms ou formuler des observations dans les formes prévues par la procédure.",
  },
  {
    q: "Combien de temps dure une expertise ?",
    a: "La durée varie selon la complexité, les investigations nécessaires et le calendrier judiciaire. Un échéancier est communiqué à l'acceptation de la mission.",
  },
  {
    q: "Quels sont les honoraires ?",
    a: "Les honoraires sont fixés selon la nature de la mission, le temps passé et les diligences. Une proposition détaillée est adressée avant acceptation.",
  },
  {
    q: "Comment contester un rapport d'expertise ?",
    a: "Les parties peuvent formuler des observations, demander des compléments ou, selon les cas, la nomination d'un contre-expert. C'est au juge d'apprécier la suite à donner.",
  },
];

export default function ExpertiseJudiciairePage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Expertise judiciaire" },
            ]}
          />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            L&apos;expertise judiciaire
          </h1>
          <p className="mt-4 max-w-3xl font-sans text-lg font-light text-grey-mid">
            Un cadre procédural strict pour éclairer le juge sur des questions
            techniques d&apos;évaluation immobilière.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Fondement légal
          </h2>
          <div className="mt-6 space-y-4 font-sans text-base font-light leading-relaxed text-text">
            <p>
              Le Nouveau Code de Procédure Civile encadre l&apos;expertise aux
              articles 232 et suivants : mission confiée à un technicien pour
              l&apos;éclairer sur des faits qui requièrent les lumières d&apos;un
              spécialiste. L&apos;expert agit sous le contrôle du juge et dans le
              respect du contradictoire.
            </p>
            <p>
              En matière immobilière, l&apos;expert peut être chargé
              d&apos;apprécier une valeur, un état des lieux technique, ou toute
              question nécessitant une analyse de marché documentée et
              vérifiable.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ProcessSteps
            title="Déroulement type d'une mission"
            steps={processSteps}
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
            Expert désigné par le juge vs expert amiable
          </h2>
          <div className="mt-10 overflow-hidden rounded-sm border border-grey-light">
            <div className="grid md:grid-cols-2">
              <div className="bg-ivory p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-navy">
                  Expert judiciaire
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 font-sans text-sm font-light text-text">
                  <li>Désignation par la juridiction</li>
                  <li>Mission encadrée par ordonnance</li>
                  <li>Rapport versé au dossier de justice</li>
                  <li>Contradictoire et débats formalisés</li>
                </ul>
              </div>
              <div className="bg-white p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-navy">
                  Expertise amiable
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 font-sans text-sm font-light text-text">
                  <li>Choix commun des parties</li>
                  <li>Cadre contractuel et confidentialité</li>
                  <li>Rapport utilisé hors procédure ou en amont</li>
                  <li>Flexibilité sur le calendrier</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-ivory">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Questions fréquentes
          </h2>
          <div className="mt-8">
            <AccordionFAQ items={faqItems} />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
