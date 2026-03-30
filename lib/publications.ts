export type PublicationCategory =
  | "Presse"
  | "Conférences"
  | "Articles"
  | "Interviews";

export type Publication = {
  id: number;
  title: string;
  source: string;
  date: string;
  category: PublicationCategory;
  url: string;
  excerpt: string;
};

export const publications: Publication[] = [
  {
    id: 1,
    title: "L'expert immobilier face aux exigences de la Cour d'appel",
    source: "Décideurs Magazine",
    date: "2024-03",
    category: "Presse",
    url: "https://example.com/article-1",
    excerpt:
      "Retour sur les attentes des juridictions en matière de motivation des rapports et de méthodologie d'évaluation.",
  },
  {
    id: 2,
    title: "Valeur vénale et marché post-crise : méthodes et prudence",
    source: "Colloque IFEI",
    date: "2023-11",
    category: "Conférences",
    url: "https://example.com/conference-1",
    excerpt:
      "Intervention sur l'ajustement des comparables et la documentation des hypothèses dans un contexte incertain.",
  },
  {
    id: 3,
    title: "Normes REV et recevabilité des expertises",
    source: "Revue de droit immobilier",
    date: "2023-06",
    category: "Articles",
    url: "https://example.com/article-2",
    excerpt:
      "Analyse des points d'alignement entre les standards européens et la pratique judiciaire française.",
  },
  {
    id: 4,
    title: "Les loyers commerciaux à l'épreuve du contentieux",
    source: "Radio Patrimoine",
    date: "2024-01",
    category: "Interviews",
    url: "https://example.com/interview-1",
    excerpt:
      "Entretien sur la fixation des valeurs locatives et le rôle de l'expert dans la phase pré-procédurale.",
  },
  {
    id: 5,
    title: "Rapport d'expertise : forme, fond et contradictions",
    source: "Journée nationale des experts",
    date: "2022-09",
    category: "Conférences",
    url: "https://example.com/conference-2",
    excerpt:
      "Synthèse des bonnes pratiques pour la rédaction et la présentation des observations des parties.",
  },
  {
    id: 6,
    title: "Portrait — rigueur et indépendance",
    source: "Les Échos",
    date: "2021-05",
    category: "Presse",
    url: "https://example.com/article-3",
    excerpt:
      "Présentation du métier d'expert judiciaire immobilier et de son cadre déontologique.",
  },
];

export const publicationCategories: PublicationCategory[] = [
  "Presse",
  "Conférences",
  "Articles",
  "Interviews",
];
