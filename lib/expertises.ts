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
};

export const expertises: Expertise[] = [
  {
    slug: "expertises-judiciaires",
    title: "Expertises judiciaires",
    icon: "Scale",
    shortDescription:
      "Expert inscrit près la Cour d'appel d'Aix-en-Provence et la Cour administrative d'appel de Marseille.",
    fullDescription:
      "Les experts judiciaires sont des professionnels habilités chargés de donner aux juges un avis technique sur des faits, afin d'apporter des éclaircissements sur une affaire. Leurs avis ne s'imposent pas aux magistrats, qui ne sont pas liés par leurs appréciations.\n\nSerge VITALI est assermenté et inscrit sur les listes d'experts des deux cours. Compétence professionnelle de haut niveau, rigueur intellectuelle et morale sont indispensables à la fonction d'expert de justice.",
    useCases: [
      "Estimations immobilières matérielles : valeurs vénales de murs, terrains non agricoles, indemnité d'expropriation, droits réels immobiliers",
      "Estimations immobilières immatérielles : valeurs locatives, indemnités d'éviction ou d'expropriation, de fonds de commerce et d'entreprises",
      "Droits sociaux à prépondérance immobilière",
      "Préjudices immobiliers",
    ],
  },
  {
    slug: "evaluation-immobiliere",
    title: "Évaluation immobilière",
    icon: "Building2",
    shortDescription:
      "Estimation de la valeur vénale ou locative de tous types de biens immobiliers, selon les normes européennes d'expertise.",
    fullDescription:
      "Le cabinet VITALI évalue l'ensemble des biens immobiliers résidentiels, commerciaux et industriels.\n\nL'immobilier urbain : terrains et droits à construire, logements, immeubles de rapport, ensembles immobiliers. Les immeubles industriels et commerciaux : terrains industriels, boutiques, centres commerciaux, locaux d'activité, ateliers, entrepôts ou usines.\n\nLe cabinet se conforme à la charte de l'expertise en évaluation immobilière et aux normes européennes d'expertise (label REV).",
    useCases: [
      "Successions et donations",
      "Séparation et divorce",
      "Bilan promoteur / lotisseur pour évaluer les terrains à bâtir",
      "Litige avec l'administration fiscale (taxe foncière, IFI)",
      "Valeur hypothécaire",
      "Expertise avant achat",
    ],
  },
  {
    slug: "valeurs-locatives",
    title: "Valeurs locatives & baux commerciaux",
    icon: "Store",
    shortDescription:
      "Spécialisation dans les problématiques liées aux baux commerciaux : déplafonnement, valeur locative, indemnité d'éviction.",
    fullDescription:
      "Le cabinet est spécialisé dans l'expertise en valeur vénale ou locative des locaux commerciaux, professionnels et industriels.\n\nAnalyse des valeurs locatives, valeur vénale des fonds de commerce et d'industrie, droit au bail, valeurs locatives d'hôtels et de restaurants.\n\nPrise en compte des litiges liés aux baux commerciaux : renouvellement, indemnités d'éviction.",
    useCases: [
      "Renouvellement de bail commercial",
      "Déplafonnement du loyer",
      "Fixation d'indemnité d'éviction",
      "Révision triennale",
      "Litige bailleur / locataire",
    ],
  },
  {
    slug: "indemnites-expropriation",
    title: "Indemnités d'expropriation",
    icon: "Gavel",
    shortDescription:
      "Évaluation des biens et droits, chiffrage des indemnités d'expropriation.",
    fullDescription:
      "Accompagnement dans les phases de DUP, enquêtes parcellaires et négociations avec l'expropriant.\n\nChiffrage des terrains, droits attachés et préjudices éventuels, dans le respect du code de l'expropriation pour cause d'utilité publique.",
    useCases: [
      "Projet d'aménagement",
      "Contestation d'offre d'indemnité",
      "Évaluation de fonds de commerce",
      "Servitudes et délaissements",
      "Indemnités d'éviction commerciale",
    ],
  },
  {
    slug: "prejudices-immobiliers",
    title: "Préjudices immobiliers",
    icon: "AlertCircle",
    shortDescription:
      "Évaluation des indemnités dans un cadre contentieux ou amiable.",
    fullDescription:
      "Évaluation des préjudices liés à des troubles de jouissance, vices cachés, désordres ou défauts de conformité.\n\nLe cabinet traite également les préjudices de travaux publics ou privés, les troubles de voisinage (perte de vue, ensoleillement).\n\nRapports adaptés aux échanges entre parties ou à la procédure devant le juge.",
    useCases: [
      "Perte de vue et/ou d'ensoleillement",
      "Troubles de voisinage",
      "Préjudices de travaux publics",
      "Pertes de valeur",
    ],
  },
  {
    slug: "ingenierie-immobiliere",
    title: "Ingénierie & conseil",
    icon: "ShieldCheck",
    shortDescription:
      "Services stratégiques pour bailleurs et preneurs, et résolution amiable des litiges immobiliers.",
    fullDescription:
      "Le cabinet propose une expertise concentrée sur l'analyse juridique et technique afin de maximiser la valeur des biens immobiliers et d'optimiser les décisions prises.\n\nPour les bailleurs : analyse de la valeur locative et vénale (méthode CMA, DCF, capitalisation des revenus), optimisation des revenus locatifs, négociation et renégociation de baux, conseils en investissement.\n\nPour les preneurs : analyse des marchés locatifs, négociation des baux (termes, durées, options de renouvellement), stratégie de relocalisation.\n\nSerge VITALI est également inscrit sur la liste des arbitres du CMAP (leader en France en résolution des conflits pour les entreprises), offrant un mode alternatif de résolution des différends (MARD) — plus rapide, confidentiel et maîtrisé en coûts qu'un contentieux classique.",
    useCases: [
      "Analyse de rentabilité (TRI, DSCR)",
      "Négociation et renégociation de baux commerciaux",
      "Stratégie d'acquisition et de cession",
      "Arbitrage de litiges immobiliers (CMAP)",
      "Études d'urbanisme et terrains à bâtir",
      "Documentation pré-contentieuse",
    ],
  },
];

export function getExpertiseBySlug(slug: string) {
  return expertises.find((e) => e.slug === slug);
}
