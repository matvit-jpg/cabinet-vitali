import { createMetadata } from "@/lib/metadata";
import { languageAlternates } from "@/lib/i18n";
import { PublicationsGrid } from "@/components/sections/PublicationsGrid";
import { PageHeader } from "@/components/layout/PageHeader";

const base = createMetadata({
  title: "Publications and talks — Serge Vitali",
  description:
    "Articles by Serge Vitali in the AJDI (Dalloz), observatories of court-set commercial rents, and talks on commercial leases and court expertise.",
  path: "/en/publications",
  languages: languageAlternates("/publications", "/en/publications"),
});

export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "en_GB" } };

export default function PublicationsPageEn() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/en" }, { label: "Publications & talks" }]}
        eyebrow="Legal writing · Conferences"
        title="Publications & talks"
        intro="Articles, observatories of court-set commercial rents and conference talks on real estate valuation, French commercial leases and court expertise. The publications themselves are in French; titles are translated here for reference."
        facts={[
          { k: "AJDI", v: "Contributions to the French property law review since 2018" },
          { k: "Rents", v: "Observatory of court-set commercial rents, Aix-en-Provence – Marseille" },
          { k: "Conferences", v: "RNBC, Paris Bar, CECAAM" },
        ]}
      />
      <PublicationsGrid lang="en" />
    </>
  );
}
