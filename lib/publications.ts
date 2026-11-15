export type FeaturedArticle = {
  title: string;
  subtitle: string;
  excerpt: string;
  source: string;
  date: string;
  photo: string;
  logo: string;
};

export const featuredArticle: FeaturedArticle = {
  title: "Article sur le nouveau rôle de l'expert",
  subtitle: "L'expert, nouvelle clé de voûte du procès civil",
  excerpt:
    "Tribune libre parue dans l'Argus de l'enseigne. Serge VITALI y analyse l'évolution du rôle de l'expert judiciaire immobilier : d'auxiliaire technique, il devient un acteur central du règlement des litiges, dont les conclusions structurent de plus en plus la décision du juge.",
  source: "Argus de l'enseigne",
  date: "Novembre 2025",
  photo: "/images/article-photo.jpg",
  logo: "/images/article-logo.png",
};

export type PublicationEntry = {
  kind: "publication" | "intervention";
  date: string;
  source: string;
  title: string;
  reference?: string;
  image?: string;
};

/** Publications (plus récentes d'abord) */
export const publications: PublicationEntry[] = [
  {
    kind: "publication",
    date: "Novembre 2025",
    source: "Actualité juridique Droit immobilier (Lefebvre Dalloz)",
    title:
      "Dossier « Les nouveaux visages de l'expert judiciaire après le décret du 18 juillet 2025 » — contribution",
    reference: "AJDI 2025, n° 11, p. 745",
    image: "/images/pub-1.png",
  },
  {
    kind: "publication",
    date: "Juillet-août 2025",
    source: "Actualité juridique Droit immobilier (Lefebvre Dalloz)",
    title:
      "Accès à la fonction d'expert judiciaire : pour une exigence d'expérience au service de la qualité de la justice",
    reference: "AJDI 2025, n° 7-8, p. 497",
    image: "/images/pub-3.jpg",
  },
  {
    kind: "publication",
    date: "Septembre 2021",
    source: "Actualité juridique Droit immobilier (Dalloz)",
    title: "L'évaluation de l'indemnité d'occupation due à l'indivision postcommunautaire",
    reference: "AJDI 2021, n° 9, p. 581",
    image: "/images/pub-8.jpg",
  },
  {
    kind: "publication",
    date: "Décembre 2019",
    source: "Actualité juridique Droit immobilier, spécial baux commerciaux (Dalloz)",
    title: "Observatoire des loyers judiciaires — Aix-en-Provence – Marseille, 2e édition",
    reference: "AJDI 2019, n° 12, cahier 2, p. 952",
    image: "/images/pub-9.png",
  },
  {
    kind: "publication",
    date: "Décembre 2018",
    source: "Actualité juridique Droit immobilier, spécial baux commerciaux (Dalloz)",
    title: "Observatoire des loyers judiciaires — Aix-en-Provence – Marseille, 1re édition",
    reference: "AJDI 2018, n° 12, cahier 2, p. 922",
    image: "/images/pub-2.jpg",
  },
];

/** Conférences et interventions (plus récentes d'abord) */
export const interventions: PublicationEntry[] = [
  {
    kind: "intervention",
    date: "30 octobre 2026",
    source: "Colloque « Les usages de l'IA pour les experts de justice » — visioconférence ouverte aux experts de toute la France",
    title: "Les risques de l'IA dans l'évaluation immobilière",
  },
  {
    kind: "intervention",
    date: "17 septembre 2025",
    source: "Barreau de Paris — sous-commission des baux commerciaux",
    title:
      "Le rôle renforcé de l'expert selon le décret n° 2025-660 du 18 juillet 2025 relatif à l'instruction conventionnelle et aux modes amiables de résolution des différends",
    image: "/images/pub-5.jpg",
  },
  {
    kind: "intervention",
    date: "2 juin 2022",
    source: "Rencontres nationales des baux commerciaux (RNBC), 2e édition — Aix-en-Provence",
    title: "Le contentieux Covid, la révision et les valeurs locatives",
    image: "/images/rnbc-2022.jpeg",
  },
  {
    kind: "intervention",
    date: "3 décembre 2021",
    source: "RNEI, 7e édition (Edilaix)",
    title: "Atelier « Les commerces »",
    image: "/images/pub-6.jpg",
  },
  {
    kind: "intervention",
    date: "3 juin 2021",
    source: "Rencontres nationales des baux commerciaux (RNBC), 1re édition — Aix-en-Provence",
    title: "Le loyer révisé : la révision du loyer en cours de bail après le Covid",
    image: "/images/pub-7.png",
  },
];

export const galleryEntries: PublicationEntry[] = [...publications, ...interventions].filter((p) => p.image);
export const galleryImages: string[] = galleryEntries.map((p) => p.image as string);
