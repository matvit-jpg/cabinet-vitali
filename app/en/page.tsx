import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { languageAlternates } from "@/lib/i18n";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHeader } from "@/components/layout/PageHeader";

const base = createMetadata({
  title: "Real estate valuation in Marseille and Provence — court-registered expert",
  description:
    "Cabinet Vitali, Marseille: independent real estate valuations by Serge Vitali, court-registered expert (Aix-en-Provence Court of Appeal) and REV-certified valuer (TEGoVA).",
  path: "/en",
  languages: languageAlternates("/", "/en"),
});

export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "en_GB" } };

const h2 = "font-display text-2xl font-semibold text-navy md:text-3xl";
const prose = "space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base";
const more = "inline-block font-sans text-sm font-medium text-gold-dark hover:underline";

export default function EnglishHomePage() {
  return (
    <div lang="en">
      <PageHeader
        crumbs={[{ label: "Home" }]}
        eyebrow="Real estate valuation · Marseille · Provence"
        title="Cabinet Vitali"
        intro="Independent real estate valuations by a court-registered expert, for private clients, notaries, lawyers, banks and insurers."
        facts={[
          { k: "2017", v: "Registered expert, Aix-en-Provence Court of Appeal" },
          { k: "REV", v: "Recognised European Valuer — TEGoVA" },
          { k: "EEFIC", v: "Chair of the national valuers' federation" },
          { k: "6 years", v: "Décideurs Leaders League ranking, 2021–2026" },
        ]}
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl space-y-12 px-4 lg:px-8">
          <div className={prose}>
            <h2 className={h2}>About the practice</h2>
            <p>
              Cabinet Vitali is a real estate valuation practice based in Marseille and Aubagne, led by Serge Vitali. Serge Vitali has
              been registered as a court-appointed valuation expert with the Aix-en-Provence Court of Appeal since 2017, and also acts
              before the Marseille Administrative Court of Appeal. He holds the REV (Recognised European Valuer) designation awarded by
              TEGoVA, the European Group of Valuers&apos; Associations, and chairs EEFIC, the French national federation of land,
              property and business valuers.
            </p>
            <Link href="/en/firm" className={more}>About the firm →</Link>
          </div>

          <div className={prose}>
            <h2 className={h2}>Why it matters for international owners</h2>
            <p>
              French property law and tax rules have their own valuation requirements, notably for inheritance, gift and wealth tax
              returns and for commercial leases. A valuation prepared by a court-registered expert, following European valuation
              standards, carries weight with French notaries, tax authorities and courts.
            </p>
            <Link href="/en/expertise" className={more}>Our areas of expertise →</Link>
          </div>

          <div className={prose}>
            <h2 className={h2}>Working with us</h2>
            <p>
              Serge Vitali works in both English and French: you can discuss your matter with him in English, and reports can be
              written in English or in French, as their intended use requires. We cover the Bouches-du-Rhône and Var departments.
            </p>
            <Link href="/en/contact" className={more}>Contact us →</Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
