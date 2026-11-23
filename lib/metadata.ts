import type { Metadata } from "next";
import { SITE } from "./site";

const titleSuffix = SITE.cabinetFull;

export function createMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  languages?: Record<string, string>;
}): Metadata {
  const urlBase =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.cabinetvitali.fr";
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
    alternates: { canonical: pageUrl, ...(opts.languages ? { languages: opts.languages } : {}) },
  };
}

export function defaultLayoutMetadata(): Metadata {
  const urlBase =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.cabinetvitali.fr";
  return {
    metadataBase: new URL(urlBase),
    title: {
      default: `Accueil | ${titleSuffix}`,
      template: `%s | ${titleSuffix}`,
    },
    description: `${SITE.cabinetFull} — expert judiciaire inscrit, à ${SITE.city}. Évaluations immobilières et rapports opposables devant les tribunaux.`,
  };
}

export function jsonLdProfessionalService() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.cabinetvitali.fr";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#organization`,
        name: SITE.cabinetFull,
        legalName: "SARL Cabinet VITALI",
        description:
          "Cabinet d'expertise immobilière dirigé par Serge Vitali, expert judiciaire inscrit près la Cour d'appel d'Aix-en-Provence et la Cour administrative d'appel de Marseille : valeur vénale, valeur locative de renouvellement, indemnité d'éviction, préjudices immobiliers, évaluation de parts de sociétés immobilières.",
        url,
        logo: `${url}/images/logo.jpg`,
        image: `${url}/og`,
        telephone: SITE.phone,
        email: SITE.email,
        address: [
          {
            "@type": "PostalAddress",
            streetAddress: "22 avenue de Verdun",
            addressLocality: "Aubagne",
            postalCode: "13400",
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: "FR",
          },
          {
            "@type": "PostalAddress",
            streetAddress: "46b boulevard Sicard",
            addressLocality: "Marseille",
            postalCode: "13008",
            addressRegion: "Provence-Alpes-Côte d'Azur",
            addressCountry: "FR",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Marseille" },
          { "@type": "City", name: "Aix-en-Provence" },
          { "@type": "City", name: "Aubagne" },
          { "@type": "City", name: "Toulon" },
          { "@type": "AdministrativeArea", name: "Bouches-du-Rhône" },
          { "@type": "AdministrativeArea", name: "Var" },
          { "@type": "AdministrativeArea", name: "Vaucluse" },
          { "@type": "AdministrativeArea", name: "Gard" },
          { "@type": "AdministrativeArea", name: "Alpes-de-Haute-Provence" },
        ],
        knowsAbout: [
          "Expertise judiciaire immobilière",
          "Valeur vénale",
          "Valeur locative de renouvellement",
          "Baux commerciaux",
          "Déplafonnement",
          "Indemnité d'éviction",
          "Indemnité d'expropriation",
          "Préjudices immobiliers",
          "Évaluation de parts de sociétés à prépondérance immobilière",
        ],
        founder: { "@id": `${url}/#serge-vitali` },
        sameAs: [SITE.linkedInUrl],
      },
      {
        "@type": "Person",
        "@id": `${url}/#serge-vitali`,
        name: "Serge Vitali",
        jobTitle:
          "Expert judiciaire près la Cour d'appel d'Aix-en-Provence et la Cour administrative d'appel de Marseille",
        worksFor: { "@id": `${url}/#organization` },
        url: `${url}/cabinet`,
        sameAs: [SITE.linkedInUrl],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Recognised European Valuer (REV)",
            recognizedBy: { "@type": "Organization", name: "TEGoVA", url: "https://www.tegova.org" },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Expert foncier et agricole",
            recognizedBy: { "@type": "Organization", name: "Conseil national de l'expertise foncière, agricole et forestière (CNEFAF)" },
          },
        ],
        memberOf: [
          {
            "@type": "OrganizationRole",
            roleName: "Président",
            startDate: "2026-10",
            memberOf: {
              "@type": "Organization",
              name: "EEFIC — Fédération nationale des experts et experts de justice évaluateurs fonciers, immobiliers et commerciaux",
              url: "https://eefic.eu",
            },
          },
          { "@type": "Organization", name: "Compagnie nationale des experts de justice immobiliers (CNEJI)", url: "https://www.cneji.fr" },
          { "@type": "Organization", name: "Compagnie des experts près la cour administrative d'appel de Marseille (CECAAM)", url: "https://www.cecaam.expert" },
          { "@type": "Organization", name: "Confédération des experts fonciers (CEF)", url: "https://www.experts-fonciers.com" },
          { "@type": "Organization", name: "Conseil national de l'expertise foncière, agricole et forestière (CNEFAF)" },
        ],
        knowsAbout: [
          "Expertise judiciaire immobilière",
          "Valeur vénale",
          "Valeur locative de renouvellement",
          "Baux commerciaux",
          "Indemnité d'éviction",
          "Évaluation de parts de sociétés à prépondérance immobilière",
        ],
        image: `${url}/images/serge.jpg`,
        award: "Décideurs Leaders League — Immobilier, Expertise judiciaire – Commerce : Pratique réputée (2021-2026)",
      },
    ],
  };
}
