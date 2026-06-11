import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { LogoCarousel } from "@/components/sections/LogoCarousel";

export const metadata = createMetadata({
  title: "Le Cabinet",
  description: `Présentation du cabinet ${SITE.cabinetFull} — expert judiciaire agréé, parcours, agréments et engagements.`,
  path: "/cabinet",
});

const affiliations = [
  { name: "Compagnie Nationale des Experts de Justice immobiliers", url: "https://www.cneji.fr", logo: "/images/cneji.jpg", maxH: "h-24" },
  { name: "Fédération Nationale des Experts Évaluateurs Fonciers", url: "https://eefic.eu/accueil.html", logo: "/images/eefic.png", maxH: "h-24" },
  { name: "Confédération des Experts Fonciers (CNEFAF)", url: "https://www.experts-fonciers.com", logo: "/images/cnefaf.jpg", maxH: "h-24" },
  { name: "Compagnie des experts près la CAA de Marseille", url: "https://www.cecaam.expert/page/181622-dernieres-nouvelles", logo: "/images/cecaam.png", maxH: "h-24" },
];

const portrait = "/images/serge.jpg";

export default function CabinetPage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Le Cabinet" }]} />
          <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">Le Cabinet</h1>
          <p className="mt-4 max-w-2xl font-sans text-sm font-light text-grey-mid md:text-lg">Rigueur méthodologique et indépendance.</p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-start lg:px-8">
        <FadeInSection>
            <div className="mx-auto w-32 lg:w-80">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-elevated">
                <Image src={portrait} alt="Portrait de Serge Vitali" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              </div>
              <div className="mt-3">
                <a href="https://www.linkedin.com/in/sergevitali/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-navy hover:text-gold transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Serge Vitali
                </a>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text text-justify md:text-base">
              <p>Notre cabinet d&apos;expertises et d&apos;ingénierie immobilière, établi à Marseille et Aubagne, est dirigé par Serge Vitali, expert près la Cour d&apos;Appel d&apos;Aix-en-Provence et la Cour Administrative d&apos;Appel de Marseille.</p>
              <p>Nous sommes spécialisés dans l&apos;expertise en valeur vénale ou locative des locaux commerciaux, professionnels et industriels, ainsi que tous types de biens immobiliers résidentiels.</p>
              <p>Notre cabinet est également spécialisé dans les problématiques liées aux baux commerciaux (déplafonnement, valeur locative, indemnité d&apos;éviction).</p>
              <p>Nous réalisons également des études d&apos;urbanisme afin d&apos;évaluer les terrains à bâtir.</p>
              <p>Nous pouvons intervenir sur le plan national.</p>
              <p>Nous nous conformons à la charte de l&apos;expertise en évaluation immobilière, établie par les principales compagnies nationales d&apos;experts immobiliers et consacrée par la jurisprudence ainsi qu&apos;aux normes européennes d&apos;expertise.</p>
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-t border-grey-light bg-ivory">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <FadeInSection>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">Le cabinet Vitali est membre des compagnies suivantes</p>
            <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {affiliations.map((a) => (
                <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" title={a.name} className="flex items-center justify-center rounded-sm border border-grey-light bg-white p-6 opacity-70 transition-opacity hover:opacity-100">
                  <div className={`relative ${a.maxH} w-full`}>
                    <Image src={a.logo} alt={a.name} fill className="object-contain" />
                  </div>
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-grey-light">
              {/* Colonne gauche — REV */}
              <div className="pr-0 lg:pr-12">
                <h2 className="font-display text-2xl font-semibold text-navy">Certifié par</h2>
                <a href="https://www.tegova.org" target="_blank" rel="noopener noreferrer" title="Recognised European Valuer (REV)" className="mt-6 inline-flex items-center justify-center rounded-sm border border-grey-light bg-white p-4 opacity-70 transition-opacity hover:opacity-100">
                <div className="relative h-20 w-20">
                    <Image src="/images/rev.png" alt="REV" fill className="object-contain" />
                  </div>
                </a>
                <div className="mt-6 space-y-2 font-sans text-base font-light leading-relaxed text-text">
                  <p>Le cabinet Vitali est certifié <strong>REV</strong> par TEGOVA.</p>
                  <p>Le statut <strong>REV</strong> est symbole d&apos;excellence en matière d&apos;évaluation immobilière.</p>
                  <p>L&apos;évaluateur est qualifié conformément aux standards Européens d&apos;évaluation immobilière les plus stricts.</p>
                  <p>Depuis sa création, le statut REV a été décerné par les principales associations d&apos;experts en évaluation immobilière à travers l&apos;Europe.</p>
                </div>
              </div>
              {/* Colonne droite — CFEI */}
              <div className="mt-12 lg:mt-0 lg:pl-12">
                <h2 className="font-display text-2xl font-semibold text-navy">Formateur</h2>
                <a href="https://www.cfei.fr" target="_blank" rel="noopener noreferrer" title="Centre de Formation à l'Expertise Immobilière" className="mt-6 inline-flex items-center justify-center rounded-sm border border-grey-light bg-white p-4 opacity-70 transition-opacity hover:opacity-100">
                <div className="relative h-20 w-20">
                    <Image src="/images/cfei.jpeg" alt="CFEI" fill className="object-contain" />
                  </div>
                </a>
                <div className="mt-6 space-y-2 font-sans text-base font-light leading-relaxed text-text">
                  <p>Serge Vitali est formateur au Centre de Formation et de perfectionnement à l&apos;Expertise Immobilière (CFEI).</p>
                  <p>Leader de la formation aux méthodes d&apos;évaluation immobilière, foncière et commerciale.</p>
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="mt-12 border-t border-grey-light pt-10 text-center">
              <h2 className="font-display text-2xl font-semibold text-navy">Inscription sur les listes dans les rubriques suivantes :</h2>
              <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-widest text-gold text-center">
                Cour d&apos;appel d&apos;Aix-en-Provence &amp; Cour administrative d&apos;appel de Marseille
              </p>
              <ul className="mt-6 space-y-2 font-sans text-sm font-light text-text">
                <li>C.18.1 — Valeurs vénales de murs, terrains, indemnités d&apos;expropriation</li>
                <li>C.18.2 — Valeurs locatives, indemnités d&apos;éviction, fonds de commerce</li>
                <li>C.18.3 — Droits sociaux à prépondérance immobilière</li>
                <li>C.18.4 — Préjudices immobiliers</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-t border-grey-light bg-ivory">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <LogoCarousel />
        </div>
      </SectionWrapper>
    </>
  );
}