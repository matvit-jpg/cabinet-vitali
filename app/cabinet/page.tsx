import { GoldRule } from "@/components/motion/GoldRule";
import { languageAlternates } from "@/lib/i18n";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { FadeInSection } from "@/components/motion/FadeInSection";
import { LogoCarousel } from "@/components/sections/LogoCarousel";

export const metadata = createMetadata({
  title: "Serge Vitali, expert judiciaire immobilier — le cabinet",
  description: "Serge Vitali, expert judiciaire près la Cour d'appel d'Aix-en-Provence, certifié REV, président de l'EEFIC : expertise immobilière judiciaire et amiable.",
  path: "/cabinet",
  languages: languageAlternates("/cabinet", "/en/firm"),
});

const affiliations = [
  { name: "Compagnie nationale des experts de justice immobiliers (CNEJI)", url: "https://www.cneji.fr", logo: "/images/cneji.jpg", maxH: "h-24" },
  { name: "Fédération nationale des experts et experts de justice évaluateurs fonciers, immobiliers et commerciaux (EEFIC)", url: "https://eefic.eu/accueil", logo: "/images/eefic.png", maxH: "h-24" },
  { name: "Confédération des experts fonciers (CEF)", url: "https://www.experts-fonciers.com", logo: "/images/cnefaf.jpg", maxH: "h-24" },
  { name: "Compagnie des experts près la cour administrative d'appel de Marseille (CECAAM)", url: "https://www.cecaam.expert/page/181622-dernieres-nouvelles", logo: "/images/cecaam.png", maxH: "h-24" },
];

const portrait = "/images/serge.jpg";

export default function CabinetPage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-24 lg:px-8">
          <div>
            <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Le Cabinet" }]} />
            <p className="mt-8 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
              Expertise immobilière · Marseille · Aix-en-Provence
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy md:text-6xl lg:text-7xl">Le Cabinet</h1>
            <p className="mt-6 max-w-2xl text-left font-sans text-base font-light leading-relaxed text-navy/75 md:text-xl">
              Serge Vitali, expert judiciaire près la Cour d&apos;appel d&apos;Aix-en-Provence et la Cour administrative d&apos;appel de Marseille. Rigueur méthodologique et indépendance, en contentieux comme en amiable.
            </p>
            <GoldRule className="mt-8 h-px max-w-3xl bg-gold-dark/40" />
            <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
              {[
                { k: "2017", v: "Inscrit sur la liste de la Cour d'appel" },
                { k: "REV", v: "Recognised European Valuer — TEGoVA" },
                { k: "EEFIC", v: "Président de la fédération depuis 2026" },
                { k: "6 ans", v: "Pratique réputée Décideurs, 2021 – 2026" },
              ].map((r) => (
                <div key={r.k} className="flex flex-col-reverse gap-1.5">
                  <dd className="font-sans text-[13px] leading-snug text-navy/70">{r.v}</dd>
                  <dt className="font-display text-4xl font-semibold leading-none text-gold-dark">{r.k}</dt>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto w-44 sm:w-52 lg:w-[230px]">
            <div className="relative">
              <div className="absolute left-5 top-5 h-full w-full border border-gold/70" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={portrait} alt="Portrait de Serge Vitali" fill className="object-cover grayscale" sizes="(max-width: 1024px) 208px, 230px" priority />
              </div>
            </div>
            <a href="https://www.linkedin.com/in/sergevitali/" target="_blank" rel="noopener noreferrer" className="mt-10 flex items-center justify-center gap-2 font-sans text-sm text-navy transition-colors hover:text-gold-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Serge Vitali sur LinkedIn
            </a>
          </div>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <FadeInSection>
            <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
              <p>Le cabinet Vitali exerce depuis Marseille et Aubagne l&apos;expertise immobilière dans ses deux cadres, judiciaire et amiable. Il intervient à la demande des juridictions, des avocats, des notaires, des établissements financiers et des particuliers, dans le ressort de la Cour d&apos;appel d&apos;Aix-en-Provence comme sur l&apos;ensemble du territoire national.</p>
              <p>Ses missions portent sur la valeur vénale et la valeur locative des immeubles de toute nature, locaux commerciaux, professionnels et industriels comme biens résidentiels, ainsi que sur les terrains à bâtir, dont l&apos;évaluation s&apos;appuie sur l&apos;analyse des règles d&apos;urbanisme applicables. Le contentieux des baux commerciaux en constitue un domaine de prédilection : fixation du loyer renouvelé ou révisé, déplafonnement, indemnité d&apos;éviction et indemnité d&apos;occupation.</p>
              <p>Chaque rapport est établi conformément à la Charte de l&apos;expertise en évaluation immobilière, consacrée par la jurisprudence, et aux normes européennes d&apos;évaluation. La méthode y est exposée, les références de marché identifiées et les correctifs justifiés, de sorte que la conclusion puisse être discutée contradictoirement.</p>
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-t border-grey-light bg-ivory">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <FadeInSection>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-gold-dark">Serge Vitali est membre des compagnies suivantes :</p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {affiliations.map((a) => (
                <a key={a.name} href={a.url || undefined} target={a.url ? "_blank" : undefined} rel={a.url ? "noopener noreferrer" : undefined} title={a.name} className="group flex flex-col items-center rounded-sm border border-grey-light bg-white p-6 transition hover:border-gold-dark/50">
                  <div className={`relative ${a.maxH} w-full opacity-70 transition-opacity group-hover:opacity-100`}>
                    <Image src={a.logo} alt="" fill className="object-contain" />
                  </div>
                  <span className="mt-4 text-center font-sans text-xs leading-snug text-navy/75">{a.name}</span>
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FadeInSection>
            <div className="grid lg:grid-cols-3 lg:divide-x lg:divide-grey-light">
              {/* Colonne gauche — REV */}
              <div className="pr-0 lg:pr-10">
                <h2 className="font-display text-2xl font-semibold text-navy">Certifié par</h2>
                <a href="https://www.tegova.org" target="_blank" rel="noopener noreferrer" title="Recognised European Valuer (REV)" className="mt-6 inline-flex items-center justify-center rounded-sm border border-grey-light bg-white p-4 opacity-70 transition-opacity hover:opacity-100">
                <div className="relative h-20 w-20">
                    <Image src="/images/rev.png" alt="REV" fill className="object-contain" />
                  </div>
                </a>
                <div className="mt-6 space-y-2 font-sans text-base font-light leading-relaxed text-text">
                  <p>Serge Vitali est certifié <strong>REV</strong> par TEGoVA.</p>
                  <p>Le statut <strong>REV</strong> est un symbole d&apos;excellence en matière d&apos;évaluation immobilière.</p>
                  <p>L&apos;évaluateur est qualifié conformément aux standards européens d&apos;évaluation immobilière les plus stricts.</p>
                  <p>Depuis sa création, le statut REV a été décerné par les principales associations d&apos;experts en évaluation immobilière à travers l&apos;Europe.</p>
                </div>
              </div>
              {/* Colonne centrale — CNEFAF */}
              <div className="mt-12 lg:mt-0 lg:px-10">
                <h2 className="font-display text-2xl font-semibold text-navy">Expert foncier et agricole</h2>
                <div className="mt-6 inline-flex items-center justify-center rounded-sm border border-grey-light bg-white p-4">
                  <div className="relative h-20 w-48">
                    <Image src="/images/cnefaf-logo.png" alt="CNEFAF" fill className="object-contain" />
                  </div>
                </div>
                <div className="mt-6 space-y-2 font-sans text-base font-light leading-relaxed text-text">
                  <p>Serge Vitali est inscrit sur la liste nationale des experts fonciers et agricoles tenue par le Conseil national de l&apos;expertise foncière, agricole et forestière (<strong>CNEFAF</strong>).</p>
                  <p>Le titre d&apos;expert foncier et agricole est protégé par la loi (article L. 171-1 du code rural et de la pêche maritime) : seuls peuvent le porter les experts inscrits sur cette liste, soumis à un code de déontologie.</p>
                </div>
              </div>
              {/* Colonne droite — CFEI */}
              <div className="mt-12 lg:mt-0 lg:pl-10">
                <h2 className="font-display text-2xl font-semibold text-navy">Formateur</h2>
                <a href="https://www.cfei.fr" target="_blank" rel="noopener noreferrer" title="Centre de formation et de perfectionnement à l'expertise immobilière (CFEI)" className="mt-6 inline-flex items-center justify-center rounded-sm border border-grey-light bg-white p-4 opacity-70 transition-opacity hover:opacity-100">
                <div className="relative h-20 w-20">
                    <Image src="/images/cfei.jpeg" alt="CFEI" fill className="object-contain" />
                  </div>
                </a>
                <div className="mt-6 space-y-2 font-sans text-base font-light leading-relaxed text-text">
                  <p>Serge Vitali est formateur au Centre de formation et de perfectionnement à l&apos;expertise immobilière (CFEI).</p>
                  <p>Leader de la formation aux méthodes d&apos;évaluation immobilière, foncière et commerciale.</p>
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="mt-12 border-t border-grey-light pt-10 text-center">
              <h2 className="font-display text-2xl font-semibold text-navy">Inscription sur les listes dans les rubriques suivantes :</h2>
              <p className="mt-2 font-sans text-sm font-semibold uppercase tracking-widest text-gold-dark text-center">
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