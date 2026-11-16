import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { languageAlternates } from "@/lib/i18n";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHeader } from "@/components/layout/PageHeader";

const base = createMetadata({
  title: "Areas of expertise — market value, rental value, eviction compensation",
  description:
    "Real estate valuation in Provence: market value, commercial lease rent, eviction compensation, property companies, inheritance, compulsory purchase.",
  path: "/en/expertise",
  languages: languageAlternates("/expertises", "/en/expertise"),
});

export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "en_GB" } };

const areas = [
  {
    title: "Market value",
    text: "Valuation of residential, commercial, professional and industrial property, and of building land, for sale, purchase, financing, litigation or tax purposes.",
    fr: "/expertises/evaluation-immobiliere",
  },
  {
    title: "Rental value and commercial leases",
    text: "Rental value on renewal or revision of French commercial leases (baux commerciaux), including cases where the rent cap may be lifted.",
    fr: "/expertises/valeurs-locatives",
  },
  {
    title: "Eviction compensation",
    text: "Compensation due to a commercial tenant when the landlord refuses to renew the lease, and occupancy compensation for the period that follows.",
    fr: "/expertises/indemnite-eviction",
  },
  {
    title: "Property-holding companies",
    text: "Valuation of shares in companies whose assets are mainly real estate (SCI and similar), for transfers, partner disputes and tax returns.",
    fr: "/expertises/parts-de-societes",
  },
  {
    title: "Inheritance, gifts and estate partition",
    text: "Valuations for French inheritance and gift tax returns, and for the partition of estates or jointly owned property.",
    fr: "/expertises/successions-donations-partages",
  },
  {
    title: "Compulsory purchase",
    text: "Assessment of the compensation due to owners and occupiers in compulsory purchase proceedings.",
    fr: "/expertises/indemnites-expropriation",
  },
  {
    title: "Property damage and loss of value",
    text: "Assessment of losses caused by neighbourhood disturbance, loss of view or sunlight, public or private works, defects or non-conformity.",
    fr: "/expertises/prejudices-immobiliers",
  },
];

export default function ExpertisePage() {
  return (
    <div lang="en">
      <PageHeader
        crumbs={[{ label: "Home", href: "/en" }, { label: "Expertise" }]}
        eyebrow="Areas of expertise"
        title="Expertise"
        intro="Valuations prepared in court-appointed assignments and for private clients, following European valuation standards."
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <li key={a.title} className="flex flex-col border border-grey-light bg-white p-6">
                <h2 className="font-display text-xl font-semibold text-navy">{a.title}</h2>
                <p className="mt-3 flex-1 font-sans text-sm font-light leading-relaxed text-text">{a.text}</p>
                <Link href={a.fr} lang="fr" hrefLang="fr" className="mt-4 font-sans text-xs font-medium text-gold-dark hover:underline">
                  Detailed page (in French) →
                </Link>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-16 max-w-4xl space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">Court-appointed and private assignments</h2>
            <p>
              As a court-registered expert, Serge Vitali is appointed by French civil, commercial and administrative courts to report on
              the value of property. He also acts for private clients, notaries, lawyers, banks and insurers, applying the same method
              and the same standards of independence.
            </p>
            <Link href="/en/contact" className="inline-block font-sans text-sm font-medium text-gold-dark hover:underline">Contact us →</Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
