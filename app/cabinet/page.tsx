import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { LogoCarousel } from "@/components/sections/LogoCarousel";

export const metadata = createMetadata({
  title: "Le Cabinet",
  description: `Présentation du cabinet ${SITE.cabinetFull} — expert judiciaire agréé, parcours, agréments et engagements.`,
  path: "/cabinet",
});

const affiliations = [
  { name: "Compagnie Nationale des Experts de Justice immobiliers", url: "https://www.cneji.fr", logo: "https://static.wixstatic.com/media/a80145_e4e3177667df41429487d916dcb617f2~mv2.jpg/v1/fill/w_89,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a80145_e4e3177667df41429487d916dcb617f2~mv2.jpg", small: true },
  { name: "Fédération Nationale des Experts Évaluateurs Fonciers", url: "https://eefic.eu/accueil.html", logo: "https://static.wixstatic.com/media/a80145_1f7b0e6bb51947fe88d2e446e4bb9920~mv2.png/v1/fill/w_101,h_101,al_c,q_85,enc_avif,quality_auto/EEFIC.png" },
  { name: "Confédération des Experts Fonciers (CNEFAF)", url: "https://www.experts-fonciers.com", logo: "https://static.wixstatic.com/media/a80145_7cb8c363d96b41f3b4e93d3d1effa9ba~mv2_d_4252_2186_s_2.jpg/v1/crop/x_298,y_153,w_3702,h_1903/fill/w_195,h_101,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20CEF%20expert.jpg" },
  { name: "Compagnie des experts près la CAA de Marseille", url: "https://www.cecaam.expert/page/181622-dernieres-nouvelles", logo: "https://static.wixstatic.com/media/a80145_4c0e85080d744f6aa8289b6dc5279f48~mv2.png/v1/fill/w_204,h_109,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20cecaam.png" },
  { name: "Recognised European Valuer (REV)", url: "https://www.tegova.org", logo: "https://static.wixstatic.com/media/2c5f6e_bd6fe5d4751649b89f15650a0d7c9d72~mv2.png/v1/fill/w_91,h_91,al_c,q_85,enc_avif,quality_auto/rev.png" },
  { name: "Centre de Formation à l'Expertise Immobilière", url: "https://www.cfei.fr", logo: "https://static.wixstatic.com/media/a80145_8b30c24bb61e4240b38010c6f48fb73f~mv2.jpeg/v1/fill/w_101,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Unknown.jpeg" },
];

const portrait = "/images/serge.jpg";

export default function CabinetPage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Le Cabinet" }]} />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">Le Cabinet</h1>
          <p className="mt-4 max-w-2xl font-sans text-lg font-light text-grey-mid">Rigueur méthodologique, indépendance et respect du contradictoire.</p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-start lg:px-8">
        <FadeInSection>
            <div className="relative aspect-[3/4] w-48 mx-auto overflow-hidden rounded-lg shadow-elevated">
              <Image src={portrait} alt="Portrait de Serge Vitali" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
            <div className="mt-4 flex justify-center">
              <a href="https://www.linkedin.com/in/sergevitali/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-sm text-navy hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Serge Vitali
              </a>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="space-y-4 font-sans text-lg font-light leading-relaxed text-text">
              <p>Notre cabinet d&apos;expertises et d&apos;ingénierie immobilière, établi à Marseille et Aubagne, est dirigé par Serge Vitali, expert près la Cour d&apos;Appel d&apos;Aix-en-Provence et la Cour Administrative d&apos;Appel de Marseille.</p>
              <p>Nous sommes spécialisés dans l&apos;expertise en valeur vénale ou locative des locaux commerciaux, professionnels et industriels.</p>
              <p>Notre cabinet est également spécialisé dans les problématiques liées aux baux commerciaux (déplafonnement, valeur locative, indemnité d&apos;éviction).</p>
              <p>Nous réalisons également des études d&apos;urbanisme afin d&apos;évaluer les terrains à bâtir. Nous pouvons intervenir sur le plan national.</p>
              <p>Nous nous conformons à la charte de l&apos;expertise en évaluation immobilière, établie par les principales compagnies nationales d&apos;experts immobiliers et consacrée par la jurisprudence ainsi qu&apos;aux normes européennes d&apos;expertise.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge>Agréé Cour d&apos;appel d&apos;Aix-en-Provence</Badge>
              <Badge>Normes REV</Badge>
              <Badge>Formateur CFEI</Badge>
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-t border-grey-light bg-ivory">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <FadeInSection>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">Affiliations & labels</p>
            <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-6">
              {affiliations.map((a) => (
                <a key={a.name} href={a.url} target="_blank" rel="noopener noreferrer" title={a.name} className="flex items-center justify-center rounded-sm border border-grey-light bg-white p-4 opacity-70 transition-opacity hover:opacity-100">
                  <div className="relative h-14 w-full">
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
            <h2 className="font-display text-2xl font-semibold text-navy">Membre de</h2>
            <ul className="mt-6 space-y-3 font-sans text-base font-light text-text">
              <li className="flex items-start gap-2"><span className="mt-1 text-gold">✦</span>La Compagnie Nationale des Experts de Justice immobiliers</li>
              <li className="flex items-start gap-2"><span className="mt-1 text-gold">✦</span>Fédération Nationale des Experts Évaluateurs Fonciers Immobiliers et Commerciaux</li>
              <li className="flex items-start gap-2"><span className="mt-1 text-gold">✦</span>La Confédération des Experts Fonciers et membre du conseil national (CNEFAF)</li>
              <li className="flex items-start gap-2"><span className="mt-1 text-gold">✦</span>La Compagnie des experts près la Cour Administrative d&apos;Appel de Marseille</li>
            </ul>
          </FadeInSection>
          <FadeInSection>
            <div className="mt-12 border-t border-grey-light pt-10">
              <h2 className="font-display text-2xl font-semibold text-navy">Inscriptions sur les listes</h2>
              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">Cour d&apos;appel d&apos;Aix-en-Provence</p>
                  <ul className="mt-4 space-y-2 font-sans text-sm font-light text-text">
                    <li>C.18.1 — Valeurs vénales de murs, terrains, indemnités d&apos;expropriation</li>
                    <li>C.18.2 — Valeurs locatives, indemnités d&apos;éviction, fonds de commerce</li>
                    <li>C.18.3 — Droits sociaux à prépondérance immobilière</li>
                    <li>C.18.4 — Préjudices immobiliers</li>
                  </ul>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">Cour Administrative d&apos;Appel de Marseille</p>
                  <ul className="mt-4 space-y-2 font-sans text-sm font-light text-text">
                    <li>C02-02 — Estimations immobilières</li>
                    <li>C02-03 — Gestion immobilière</li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 font-sans text-sm font-light italic text-grey-mid">Serge Vitali est formateur au Centre de Formation à l&apos;Expertise Immobilière (CFEI).</p>
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