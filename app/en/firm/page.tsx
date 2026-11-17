import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { languageAlternates } from "@/lib/i18n";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHeader } from "@/components/layout/PageHeader";

const base = createMetadata({
  title: "The firm — Serge Vitali, court-registered real estate expert",
  description:
    "Cabinet Vitali, Marseille and Aubagne: Serge Vitali, court-registered expert with the Aix-en-Provence Court of Appeal, REV-certified valuer, chair of EEFIC.",
  path: "/en/firm",
  languages: languageAlternates("/cabinet", "/en/firm"),
});

export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "en_GB" } };

const memberships = [
  "CNEJI — French national association of court-registered real estate experts",
  "EEFIC — French national federation of land, property and business valuers (chair since 2026)",
  "CEF — Confédération des experts fonciers (French confederation of land experts)",
  "CNEFAF — French national council of land, agricultural and forestry valuation, which confers the protected title of expert foncier et agricole",
  "CECAAM — Association of experts of the Marseille Administrative Court of Appeal",
  "TEGoVA — Recognised European Valuer (REV)",
];

export default function FirmPage() {
  return (
    <div lang="en">
      <PageHeader
        crumbs={[{ label: "Home", href: "/en" }, { label: "The Firm" }]}
        eyebrow="Real estate valuation · Marseille · Aix-en-Provence"
        title="The Firm"
        intro="Serge Vitali, court-registered expert with the Aix-en-Provence Court of Appeal and the Marseille Administrative Court of Appeal. Methodological rigour and independence, in litigation as in out-of-court matters."
        facts={[
          { k: "2017", v: "Registered with the Court of Appeal" },
          { k: "REV", v: "Recognised European Valuer — TEGoVA" },
          { k: "EEFIC", v: "Chair of the federation since 2026" },
          { k: "6 years", v: "Décideurs Leaders League ranking, 2021–2026" },
        ]}
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:px-8">
          <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
            <p>
              Cabinet Vitali carries out real estate valuations from Marseille and Aubagne, both as court-appointed expert work and as
              out-of-court assignments. It acts for courts, lawyers, notaries, financial institutions and private clients, within the
              jurisdiction of the Aix-en-Provence Court of Appeal and throughout France.
            </p>
            <p>
              Its assignments cover the market value and rental value of all types of property — commercial, professional and
              industrial premises as well as residential property — and building land, whose valuation relies on an analysis of the
              applicable planning rules. French commercial lease disputes are a core area of practice: setting the renewed or revised
              rent, lifting of the rent cap, eviction compensation and occupancy compensation.
            </p>
            <p>
              Every report follows the French Charter of real estate valuation, recognised by case law, and European valuation
              standards. The method is set out, market evidence is identified and adjustments are justified, so that the conclusion
              can be discussed by all parties.
            </p>
            <h2 className="pt-6 font-display text-2xl font-semibold text-navy">Memberships and designations</h2>
            <ul className="space-y-2">
              {memberships.map((m) => (
                <li key={m} className="border-l-2 border-gold-dark/60 pl-4 text-navy/85">{m}</li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-44 sm:w-52 lg:w-full lg:max-w-[230px]">
            <div className="relative">
              <div className="absolute left-5 top-5 h-full w-full border border-gold/70" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src="/images/serge.jpg" alt="Portrait of Serge Vitali" fill className="object-cover grayscale" sizes="(max-width: 1024px) 288px, 300px" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
