export type PublicationEntry = {
  kind: "publication" | "intervention";
  date: string;
  source: string;
  title: string;
  reference?: string;
  /** Visuel cliquable (photo, affiche). */
  image?: string;
  /** Pastille sobre à la place d'un visuel (ex. couverture de revue). */
  badge?: string;
  /** Date ISO pour le tri. */
  iso: string;
  /** Résumé (deux lignes). */
  summary?: string;
  /** Version anglaise. */
  en: { date: string; source: string; title: string; summary?: string };
};

const AJDI_EN = "Actualité juridique Droit immobilier (Dalloz), French property law review";

/** Publications (plus récentes d'abord) */
export const publications: PublicationEntry[] = [
  {
    kind: "publication",
    iso: "2025-11-30",
    date: "Novembre 2025",
    source: "Actualité juridique Droit immobilier (Lefebvre Dalloz)",
    title:
      "Dossier « Les nouveaux visages de l'expert judiciaire après le décret du 18 juillet 2025 » — contribution",
    reference: "AJDI 2025, n° 11, p. 745",
    image: "/images/pub-1.png",
    en: {
      date: "November 2025",
      source: AJDI_EN,
      title: "Contribution to the special report “The new faces of the court expert after the decree of 18 July 2025”",
    },
  },
  {
    kind: "publication",
    iso: "2025-11-01",
    date: "Novembre 2025",
    source: "L'Argus de l'enseigne — tribune libre",
    title: "L'expert, nouvelle clé de voûte du procès civil",
    summary: "Tribune consacrée à l'évolution du rôle de l'expert judiciaire immobilier : d'auxiliaire technique, il devient un acteur central du règlement des litiges, dont les conclusions structurent de plus en plus la décision du juge.",
    image: "/images/article-photo.jpg",
    en: {
      date: "November 2025",
      source: "L'Argus de l'enseigne, retail property magazine — opinion piece",
      title: "The expert, new cornerstone of civil proceedings",
      summary: "How the court-appointed property expert is moving from technical assistant to a central player in dispute resolution, whose findings increasingly shape the court's decision.",
    },
  },
  {
    kind: "publication",
    iso: "2025-07-01",
    date: "Juillet-août 2025",
    source: "Actualité juridique Droit immobilier (Lefebvre Dalloz)",
    title:
      "Accès à la fonction d'expert judiciaire : pour une exigence d'expérience au service de la qualité de la justice",
    reference: "AJDI 2025, n° 7-8, p. 497",
    image: "/images/pub-3.jpg",
    en: {
      date: "July-August 2025",
      source: AJDI_EN,
      title: "Becoming a court expert: requiring experience in the interest of the quality of justice",
    },
  },
  {
    kind: "publication",
    iso: "2021-09-01",
    date: "Septembre 2021",
    source: "Actualité juridique Droit immobilier (Dalloz)",
    title: "L'évaluation de l'indemnité d'occupation due à l'indivision postcommunautaire",
    summary: "À partir d'une centaine de décisions de tous degrés, l'article rappelle le régime de l'indemnité due par l'indivisaire qui jouit privativement du bien (C. civ., art. 815-9), puis en étudie la méthode d'évaluation : valeur locative de référence, point de départ et abattement pour précarité.",
    reference: "AJDI 2021, n° 9, p. 581",
    image: "/images/pub-8.jpg",
    en: {
      date: "September 2021",
      source: AJDI_EN,
      title: "Valuing the occupancy compensation owed to the joint ownership (indivision) following a divorce",
      summary: "Drawing on some hundred court decisions, the article sets out the rules governing the compensation owed by a co-owner in sole occupation (Civil Code, art. 815-9), then its valuation method: reference rental value, starting date and discount for precarious occupation.",
    },
  },
  {
    kind: "publication",
    iso: "2019-12-01",
    date: "Décembre 2019",
    source: "Actualité juridique Droit immobilier, spécial baux commerciaux (Dalloz)",
    title: "Observatoire des loyers judiciaires — Aix-en-Provence – Marseille, 2e édition",
    summary: "Deuxième édition, élargie à l'ensemble des valeurs locatives judiciaires, qu'elles procèdent ou non d'un déplafonnement. Elle relève une contraction probable du contentieux sur le secteur Aix-Marseille et en expose les causes propres à chaque ville.",
    reference: "AJDI 2019, n° 12, cahier 2, p. 952",
    image: "/images/pub-9.png",
    en: {
      date: "December 2019",
      source: `${AJDI_EN}, commercial leases issue`,
      title: "Observatory of court-set commercial rents — Aix-en-Provence – Marseille, 2nd edition",
      summary: "Second edition, extended to all court-set rental values, whether or not the rent cap was lifted. It notes a likely decline in litigation in the Aix-Marseille area and sets out the causes specific to each city.",
    },
  },
  {
    kind: "publication",
    iso: "2018-12-01",
    date: "Décembre 2018",
    source: "Actualité juridique Droit immobilier, spécial baux commerciaux (Dalloz)",
    title: "Observatoire des loyers judiciaires — Aix-en-Provence – Marseille, 1re édition",
    summary: "Première édition, consacrée aux loyers de renouvellement fixés à la valeur locative après modification notable des facteurs locaux de commercialité (C. com., art. R. 145-6). L'étude, fondée sur une centaine de décisions, analyse les effets des mutations urbaines de Marseille et d'Aix-en-Provence sur le déplafonnement.",
    reference: "AJDI 2018, n° 12, cahier 2, p. 922",
    image: "/images/pub-2.jpg",
    en: {
      date: "December 2018",
      source: `${AJDI_EN}, commercial leases issue`,
      title: "Observatory of court-set commercial rents — Aix-en-Provence – Marseille, 1st edition",
      summary: "First edition, devoted to renewal rents set at rental value following a material change in local trading factors (Commercial Code, art. R. 145-6). Based on some hundred decisions, it analyses how urban change in Marseille and Aix-en-Provence has affected the lifting of the rent cap.",
    },
  },
];

/** Conférences et interventions (plus récentes d'abord) */
export const interventions: PublicationEntry[] = [
  {
    kind: "intervention",
    iso: "2026-10-30",
    date: "30 octobre 2026",
    source: "Compagnie des experts près la cour administrative d'appel de Marseille (CECAAM) — colloque « Les usages de l'IA pour les experts de justice », en visioconférence",
    title: "Les risques de l'IA dans l'évaluation immobilière",
    image: "/images/cecaam.png",
    en: {
      date: "30 October 2026",
      source: "Association of experts at the Marseille administrative court of appeal (CECAAM) — conference “Uses of AI for court experts”, online",
      title: "The risks of AI in real estate valuation",
    },
  },
  {
    kind: "intervention",
    iso: "2025-09-17",
    date: "17 septembre 2025",
    source: "Barreau de Paris — sous-commission des baux commerciaux",
    title:
      "Le rôle renforcé de l'expert selon le décret n° 2025-660 du 18 juillet 2025 relatif à l'instruction conventionnelle et aux modes amiables de résolution des différends",
    image: "/images/pub-5.jpg",
    en: {
      date: "17 September 2025",
      source: "Paris Bar — commercial leases sub-committee",
      title:
        "The expert's enhanced role under decree no. 2025-660 of 18 July 2025 on party-led case preparation (instruction conventionnelle) and amicable dispute resolution",
    },
  },
  {
    kind: "intervention",
    iso: "2022-06-02",
    date: "2 juin 2022",
    source: "Rencontres nationales des baux commerciaux (RNBC), 2e édition — Aix-en-Provence",
    title: "Le contentieux Covid, la révision et les valeurs locatives",
    image: "/images/rnbc-2022.jpeg",
    en: {
      date: "2 June 2022",
      source: "French national commercial leases conference (RNBC), 2nd edition — Aix-en-Provence",
      title: "Covid-related litigation, rent revision and rental values",
    },
  },
  {
    kind: "intervention",
    iso: "2021-12-03",
    date: "3 décembre 2021",
    source: "RNEI, 7e édition (Edilaix)",
    title: "Atelier « Les commerces »",
    image: "/images/pub-6.jpg",
    en: {
      date: "3 December 2021",
      source: "RNEI, 7th edition (Edilaix)",
      title: "Workshop on retail premises",
    },
  },
  {
    kind: "intervention",
    iso: "2021-06-03",
    date: "3 juin 2021",
    source: "Rencontres nationales des baux commerciaux (RNBC), 1re édition — Aix-en-Provence",
    title: "Le loyer révisé : la révision du loyer en cours de bail après le Covid",
    image: "/images/pub-7.png",
    en: {
      date: "3 June 2021",
      source: "French national commercial leases conference (RNBC), 1st edition — Aix-en-Provence",
      title: "Rent revision during the lease after Covid",
    },
  },
];

export const galleryEntries: PublicationEntry[] = [...publications, ...interventions].filter((p) => p.image);
export const galleryImages: string[] = galleryEntries.map((p) => p.image as string);
