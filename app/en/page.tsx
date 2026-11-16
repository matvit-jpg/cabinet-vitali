import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHeader } from "@/components/layout/PageHeader";

const base = createMetadata({
  title: "Real estate valuation in Marseille and Provence — court-registered expert",
  description:
    "Cabinet Vitali, Marseille: independent real estate valuations by Serge Vitali, court-registered expert (Aix-en-Provence Court of Appeal) and REV-certified valuer (TEGoVA).",
  path: "/en",
});

export const metadata = {
  ...base,
  openGraph: { ...base.openGraph, locale: "en_GB" },
  alternates: {
    canonical: "https://www.cabinetvitali.fr/en",
    languages: { fr: "https://www.cabinetvitali.fr/", en: "https://www.cabinetvitali.fr/en" },
  },
};

const services = [
  "Market value of residential, commercial and professional property",
  "Rental value on renewal of French commercial leases",
  "Eviction compensation under French commercial lease law",
  "Valuation of shares in property-holding companies (SCI and similar)",
  "Valuations for inheritance, gifts and estate partition",
  "Compensation in compulsory purchase proceedings",
];

export default function EnglishPage() {
  return (
    <div lang="en">
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "English" }]}
        eyebrow="Real estate valuation · Marseille · Provence"
        title="Cabinet Vitali"
        intro="Independent real estate valuations by a court-registered expert, for private clients, notaries, lawyers, banks and insurers."
        facts={[
          { k: "2017", v: "Registered expert, Aix-en-Provence Court of Appeal" },
          { k: "REV", v: "Recognised European Valuer — TEGoVA" },
          { k: "EEFIC", v: "Chair of the national valuers' federation" },
        ]}
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-4xl space-y-12 px-4 lg:px-8">
          <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">About the practice</h2>
            <p>
              Cabinet Vitali is a real estate valuation practice based in Marseille and Aubagne, led by Serge Vitali. Serge Vitali has
              been registered as a court-appointed valuation expert with the Aix-en-Provence Court of Appeal since 2017, and also acts
              before the Marseille Administrative Court of Appeal. He holds the REV (Recognised European Valuer) designation awarded by
              TEGoVA, the European Group of Valuers&apos; Associations, and chairs EEFIC, the French national federation of land,
              property and business valuers.
            </p>
          </div>

          <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">Our services</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="border-l-2 border-gold-dark/60 pl-4 text-navy/85">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">Why it matters for international owners</h2>
            <p>
              French property law and tax rules have their own valuation requirements, notably for inheritance, gift and wealth tax
              returns and for commercial leases. A valuation prepared by a court-registered expert, following European valuation
              standards, carries weight with French notaries, tax authorities and courts.
            </p>
          </div>

          <div className="space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">Working with us</h2>
            <p>
              Serge Vitali works in both English and French: you can discuss your matter with him in English, and reports can be
              written in English or in French, as their intended use requires. We cover the Bouches-du-Rhône and Var departments.
            </p>
          </div>

          <div className="border-t border-grey-light pt-10">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">Contact</h2>
            <ul className="mt-6 space-y-4 font-sans text-sm text-text">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
                <span>46b boulevard Sicard, 13008 Marseille, France</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-gold-dark">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-dark">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <a href="/serge-vitali.vcf" download className="mt-6 inline-block border border-gold-dark px-4 py-2 font-sans text-sm text-navy transition hover:bg-gold-dark hover:text-white">
              Add to my contacts (vCard)
            </a>
            <p className="mt-8 font-sans text-sm">
              <Link href="/" lang="fr" className="text-gold-dark hover:underline">
                Version française du site →
              </Link>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
