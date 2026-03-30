export type ExpertiseIconName =
  | "Scale"
  | "Building2"
  | "Store"
  | "Gavel"
  | "AlertCircle"
  | "ShieldCheck";

export type Expertise = {
  slug: string;
  title: string;
  icon: ExpertiseIconName;
  shortDescription: string;
  fullDescription: string;
  useCases: string[];
  faq?: { q: string; a: string }[];
};

export const expertises: Expertise[] = [
  {
    slug: "expertise-judiciaire",
    title: "Expertise judiciaire",
    icon: "Scale",
    shortDescription:
      "Désigné par le juge pour éclairer la juridiction sur des questions d'évaluation.",
    fullDescription:
      "L'expert judiciaire intervient dans le cadre fixé par le juge se contradictoire, investigations sur le terrain et rapport motivé opposable.\n\nLa mission vise à fournir des éléments techniques et chiffrés permettant au tribunal de statuer en toute connaissance de cause sur la valeur ou l'état des biens concernés.",
    useCases: [
      "Litige entre copropriétaires",
      "Expropriation",
      "Succession et partage",
      "Contentieux locatif complexe",
    ],
    faq: [
      {
        q: "Quelle est la valeur juridique du rapport ?",
        a: "Le rapport d'expertise judiciaire est versé au dossier et sert de base technique à la décision du juge, sous son libre appréciation.",
      },
      {
        q: "Puis-je choisir mon expert judiciaire ?",
        a: "En principe, la désignation relève du juge. Les parties peuvent formuler des observations sur la mission et proposer des candidatures selon les règles de procédure.",
      },
    ],
  },
  {
    slug: "evaluation-immobiliere",
    title: "Évaluation immobilière",
    icon: "Building2",
    shortDescription:
      "Estimation de la valeur vénale ou de remplacement selon les normes professionnelles.",
    fullDescription:
      "Évaluations patrimoniales pour opérations de cession, transmission, bilan ou arbitrage. Méthodes comparables, capitalisation ou coût selon la nature du bien et son marché.\n\nRapports structurés, traçables et conformes aux exigences des instances financières ou juridiques.",
    useCases: [
      "Due diligence",
      "Transmission d'entreprise",
      "État des lieux patrimonial",
      "Révision de valeur",
    ],
  },
  {
    slug: "valeurs-locatives",
    title: "Valeurs locatives commerciales",
    icon: "Store",
    shortDescription:
      "Détermination de loyers de marché pour baux commerciaux et contentieux.",
    fullDescription:
      "Analyse des surfaces, de l'emplacement et des comparables pour fixer ou contester une valeur locative.\n\nPrise en compte des clauses (pas-de-porte, indexation, statut des lieux) et du contexte économique local.",
    useCases: [
      "Renouvellement de bail commercial",
      "Fixation d'indemnité d'éviction",
      "Révision triennale",
      "Négociation amiable",
    ],
  },
  {
    slug: "indemnites-expropriation",
    title: "Indemnités d'expropriation",
    icon: "Gavel",
    shortDescription:
      "Évaluation des biens et droits pour procédures d'utilité publique.",
    fullDescription:
      "Accompagnement dans les phases de DUP, enquêtes parcellaires et négociations avec l'expropriant.\n\nChiffrage des terrains, droits attachés et préjudices éventuels, dans le respect du code de l'expropriation pour cause d'utilité publique.",
    useCases: [
      "Projet d'aménagement",
      "Contestation d'offre d'indemnité",
      "Évaluation de fonds de commerce",
      "Servitudes et délaissements",
    ],
  },
  {
    slug: "prejudices-litiges",
    title: "Préjudices & litiges",
    icon: "AlertCircle",
    shortDescription:
      "Quantification des atteintes immobilières dans un cadre contentieux.",
    fullDescription:
      "Évaluation des préjudices liés à des troubles de jouissance, vices cachés, désordres ou défauts de conformité.\n\nRapports adaptés aux échanges entre parties ou à la procédure devant le juge.",
    useCases: [
      "Vices de construction",
      "Troubles de voisinage",
      "Malfaçons",
      "Pertes de valeur",
    ],
  },
  {
    slug: "conseil-prevention",
    title: "Conseil & prévention",
    icon: "ShieldCheck",
    shortDescription:
      "Accompagnement amiable pour sécuriser vos opérations et anticiper les risques.",
    fullDescription:
      "Audits patrimoniaux, avis de valeur préalables et stratégies d'évitement du litige.\n\nIntervention en amont des procédures pour clarifier les positions et documenter les dossiers.",
    useCases: [
      "Avis avant achat",
      "Structuration de groupement",
      "Médiation amiable",
      "Documentation pré-contentieuse",
    ],
  },
];

export function getExpertiseBySlug(slug: string) {
  return expertises.find((e) => e.slug === slug);
}
