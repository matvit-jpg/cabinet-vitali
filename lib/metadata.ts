import type { Metadata } from "next";
import { SITE } from "./site";

const titleSuffix = `${SITE.cabinetFull} — Expert Judiciaire Immobilier ${SITE.city}`;

export function createMetadata(opts: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const urlBase =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://cabinet-expert.example.com";
  const pageUrl = opts.path ? `${urlBase}${opts.path}` : urlBase;

  return {
    title: opts.title,
    description: opts.description,
    openGraph: {
      title: `${opts.title} | ${titleSuffix}`,
      description: opts.description,
      url: pageUrl,
      siteName: SITE.cabinetFull,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: `${urlBase}/og`,
          width: 1200,
          height: 630,
          alt: SITE.cabinetFull,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${titleSuffix}`,
      description: opts.description,
    },
    alternates: { canonical: pageUrl },
  };
}

export function defaultLayoutMetadata(): Metadata {
  const urlBase =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://cabinet-expert.example.com";
  return {
    metadataBase: new URL(urlBase),
    title: {
      default: `Accueil | ${titleSuffix}`,
      template: `%s | ${titleSuffix}`,
    },
    description: `${SITE.cabinetFull} — expert judiciaire agréé à ${SITE.city}. Évaluations immobilières et rapports opposables devant les tribunaux.`,
  };
}

export function jsonLdProfessionalService() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://cabinet-expert.example.com";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#organization`,
        name: SITE.cabinetFull,
        description:
          "Expert judiciaire agréé — évaluations immobilières et rapports opposables devant les tribunaux.",
        url,
        telephone: SITE.phone,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.addressLines[0],
          addressLocality: SITE.city,
          postalCode: "75002",
          addressCountry: "FR",
        },
        areaServed: { "@type": "City", name: SITE.city },
      },
      {
        "@type": "LegalService",
        "@id": `${url}/#legal`,
        name: `${SITE.cabinetFull} — Expertise judiciaire`,
        parentOrganization: { "@id": `${url}/#organization` },
        serviceType: "Expertise judiciaire en évaluation immobilière",
      },
    ],
  };
}
