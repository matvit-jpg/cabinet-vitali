/**
 * Contenus développés des pages d'expertise (référencement et information des visiteurs).
 * Rédaction : registre de l'expertise judiciaire, références de textes dans le corps.
 */

export type ExpertiseSection = {
  heading: string;
  paragraphs: string[];
};

export type ExpertiseSeo = {
  seoTitle: string;
  seoDescription: string;
  sections: ExpertiseSection[];
};

export const expertiseSections: Record<string, ExpertiseSeo> = {
  "evaluation-immobiliere": {
    seoTitle: "Valeur vénale immobilière — expert, Marseille, Aix",
    seoDescription:
      "Valeur vénale de tous biens immobiliers selon la Charte de l'expertise en évaluation immobilière, à Marseille, Aix-en-Provence, Aubagne et Toulon.",
    sections: [],
  },
  "prejudices-immobiliers": {
    seoTitle: "Préjudices immobiliers et perte de valeur — expert",
    seoDescription:
      "Préjudices immobiliers : troubles de voisinage, perte de vue ou d'ensoleillement, travaux publics, désordres, pertes de valeur. Marseille, Aix-en-Provence.",
    sections: [],
  },
  "valeurs-locatives": {
    seoTitle:
      "Valeur locative et baux commerciaux — Marseille",
    seoDescription:
      "Valeur locative de renouvellement, déplafonnement, révision triennale : expertise amiable et judiciaire par un expert près la Cour d'appel d'Aix-en-Provence.",
    sections: [
      {
        heading: "La valeur locative au sens de l'article L. 145-33 du Code de commerce",
        paragraphs: [
          "Le loyer du bail renouvelé ou révisé doit correspondre à la valeur locative, laquelle est déterminée, à défaut d'accord, d'après les caractéristiques du local, la destination des lieux, les obligations respectives des parties, les facteurs locaux de commercialité et les prix couramment pratiqués dans le voisinage. Les articles R. 145-3 à R. 145-8 du Code de commerce précisent le contenu de chacun de ces éléments.",
          "Le rapport les examine successivement : relevé et pondération des surfaces selon les usages consacrés par la Charte de l'expertise en évaluation immobilière, analyse des clauses du bail qui majorent ou minorent la valeur (impôt foncier, travaux, cession, destination), étude de la commercialité du secteur, puis recherche et homogénéisation des références de loyers de renouvellement, de loyers de marché et de décisions judiciaires. Le cabinet tient à jour une base de références propre au ressort de la Cour d'appel d'Aix-en-Provence.",
        ],
      },
      {
        heading: "Plafonnement et déplafonnement du loyer renouvelé",
        paragraphs: [
          "Pour les baux d'une durée n'excédant pas neuf ans, l'article L. 145-34 limite la variation du loyer renouvelé à celle de l'indice trimestriel applicable, sauf modification notable des éléments mentionnés aux 1° à 4° de l'article L. 145-33 au cours du bail expiré. Le plafonnement est également écarté lorsque la durée du bail excède douze ans par l'effet d'une tacite prolongation.",
          "Lorsque le déplafonnement résulte d'une modification notable de ces éléments ou de la durée du bail, l'augmentation du loyer qui en découle ne peut excéder, pour une année, 10 % du loyer acquitté au cours de l'année précédente (article L. 145-34, dernier alinéa). Les terrains (article R. 145-9), les locaux construits en vue d'une seule utilisation (article R. 145-10) et les locaux à usage exclusif de bureaux (article R. 145-11) relèvent d'un régime distinct : leur loyer est fixé selon les usages observés dans la branche d'activité ou par référence aux prix pratiqués pour des locaux équivalents, sans application de ce lissage.",
        ],
      },
      {
        heading: "Révision triennale",
        paragraphs: [
          "La révision du loyer peut être demandée trois ans au moins après la date d'entrée en jouissance ou le point de départ du bail renouvelé (articles L. 145-37 et L. 145-38). La variation qui en résulte est limitée à celle de l'indice, à moins que ne soit rapportée la preuve d'une modification matérielle des facteurs locaux de commercialité ayant entraîné par elle-même une variation de plus de 10 % de la valeur locative. L'expertise porte alors sur l'existence et l'incidence de cette modification autant que sur la valeur elle-même.",
        ],
      },
      {
        heading: "Expertise amiable et expertise judiciaire",
        paragraphs: [
          "En phase amiable, le rapport sert de base à la négociation entre bailleur et preneur, et peut être versé aux débats si le désaccord persiste. Devant le juge des loyers commerciaux, l'expert désigné conduit ses opérations au contradictoire des parties et dépose un rapport auquel sont annexés les dires des conseils. Serge Vitali intervient dans les deux cadres, pour les bailleurs comme pour les preneurs, à Marseille, Aix-en-Provence, Aubagne, Toulon et dans l'ensemble de la région.",
        ],
      },
    ],
  },

  "indemnite-eviction": {
    seoTitle: "Indemnité d'éviction commerciale — Marseille, Aix",
    seoDescription:
      "Indemnité d'éviction (art. L. 145-14 C. com.) et indemnité d'occupation : valeur du fonds, droit au bail, indemnités accessoires. Marseille, Aix-en-Provence.",
    sections: [
      {
        heading: "Le principe posé par l'article L. 145-14 du Code de commerce",
        paragraphs: [
          "Le bailleur peut refuser le renouvellement du bail, mais il doit alors payer au locataire évincé une indemnité égale au préjudice causé par le défaut de renouvellement. Cette indemnité comprend notamment la valeur marchande du fonds de commerce, déterminée suivant les usages de la profession, augmentée éventuellement des frais normaux de déménagement et de réinstallation, ainsi que des frais et droits de mutation à payer pour un fonds de même valeur, sauf si le bailleur fait la preuve que le préjudice est moindre.",
        ],
      },
      {
        heading: "Indemnité de remplacement ou indemnité de déplacement",
        paragraphs: [
          "Le premier travail de l'expert consiste à déterminer si l'éviction entraîne la perte du fonds ou permet son transfert sans perte significative de clientèle. Dans le premier cas, l'indemnité principale correspond à la valeur du fonds, appréciée au regard du chiffre d'affaires, de la rentabilité et des barèmes d'usage de l'activité ; dans le second, elle correspond à la valeur du droit au bail, qui constitue en toute hypothèse un plancher, et aux frais de réinstallation.",
          "S'y ajoutent les indemnités accessoires : frais de remploi, trouble commercial, frais de déménagement et de réinstallation, double loyer le cas échéant, indemnités de licenciement, perte sur stocks. Chacun de ces postes est chiffré à partir des pièces comptables et contractuelles communiquées par le preneur.",
        ],
      },
      {
        heading: "Indemnité d'occupation",
        paragraphs: [
          "Jusqu'au paiement de l'indemnité d'éviction, le locataire a droit au maintien dans les lieux aux conditions du bail expiré (article L. 145-28) et doit une indemnité d'occupation, fixée en principe par référence à la valeur locative, à laquelle un abattement de précarité est habituellement appliqué. L'expert la détermine dans la même mission : l'indemnité d'éviction s'apprécie à la date la plus proche de l'éviction, tandis que l'indemnité d'occupation est fixée en principe d'après la valeur locative à la date d'expiration du bail.",
        ],
      },
    ],
  },

  "parts-de-societes": {
    seoTitle:
      "Évaluation de parts de SCI et sociétés immobilières",
    seoDescription:
      "Évaluation de parts de SCI et de sociétés à prépondérance immobilière : actif net réévalué, fiscalité latente, décotes. Expert près la Cour d'appel d'Aix.",
    sections: [
      {
        heading: "Une compétence distincte de l'évaluation de l'immeuble",
        paragraphs: [
          "La valeur des parts d'une société civile immobilière ou d'une société à prépondérance immobilière ne se confond pas avec celle des immeubles qu'elle détient. Serge Vitali est inscrit dans la rubrique de la nomenclature des experts de justice consacrée aux droits sociaux à prépondérance immobilière, ce qui l'habilite à évaluer les parts elles-mêmes, et non seulement le patrimoine sous-jacent.",
          "Ces évaluations interviennent lors de cessions, de partages, de successions et de donations, de retraits ou d'exclusions d'associés, et, en cas de cession ou de rachat de droits sociaux prévus par la loi ou les statuts, lorsque le prix est fixé à dire d'expert (article 1843-4 du Code civil).",
        ],
      },
      {
        heading: "Méthode : actif net réévalué et ajustements",
        paragraphs: [
          "La méthode de référence est celle de l'actif net réévalué : chaque immeuble est estimé à sa valeur vénale à la date d'évaluation, puis l'actif est corrigé des dettes, des comptes courants d'associés et des autres éléments du passif. Pour les sociétés soumises à l'impôt sur les sociétés, la fiscalité latente attachée aux plus-values est prise en compte selon des modalités exposées et justifiées dans le rapport.",
          "La valeur obtenue peut enfin faire l'objet de décotes motivées, notamment pour défaut de liquidité des parts, clauses d'agrément ou position minoritaire, dont le taux est apprécié au regard des caractéristiques propres de la société et de la jurisprudence.",
        ],
      },
      {
        heading: "Enjeux fiscaux et patrimoniaux",
        paragraphs: [
          "La valeur des parts et celle des immeubles qu'elles représentent servent d'assiette à de nombreux dispositifs : impôt sur la fortune immobilière, droits de succession et de donation, droits d'enregistrement sur les cessions de parts, taxe de 3 % sur la valeur vénale des immeubles, taxation des plus-values. Le cabinet intervient dans ces différentes problématiques, en amont d'une opération de transmission, de cession ou de restructuration comme lors d'un contrôle ou d'une procédure de rectification, aux côtés des avocats fiscalistes, des notaires et des experts-comptables qui en assurent le conseil.",
        ],
      },
    ],
  },

  "successions-donations-partages": {
    seoTitle:
      "Évaluation pour succession, donation et partage",
    seoDescription:
      "Valeur vénale en succession ou donation, rapport des libéralités, partage et licitation, démembrement : expertise à Marseille et Aix-en-Provence.",
    sections: [
      {
        heading: "Valeur vénale à déclarer",
        paragraphs: [
          "En matière de droits de mutation à titre gratuit, les immeubles sont déclarés pour leur valeur vénale réelle au jour de la transmission (article 761 du Code général des impôts), c'est-à-dire au jour du décès ou de l'acte de donation. L'immeuble constituant la résidence principale du défunt bénéficie, lorsqu'il est occupé dans les conditions légales, d'un abattement de 20 % (article 764 bis du même code). Un rapport motivé, établi selon les méthodes reconnues par l'administration et la jurisprudence, sécurise la déclaration en cas de contrôle.",
        ],
      },
      {
        heading: "Rapport des libéralités et partage",
        paragraphs: [
          "Le rapport d'une donation à la succession est dû de la valeur du bien donné à l'époque du partage, d'après son état à l'époque de la donation (article 860 du Code civil). L'expert distingue donc l'état du bien au jour de la libéralité de sa valeur au jour du partage, en neutralisant les améliorations ou dégradations imputables au donataire.",
          "Dans les partages amiables ou judiciaires et les licitations, le cabinet évalue les biens indivis, propose le cas échéant la composition de lots et chiffre les indemnités d'occupation dues par l'indivisaire qui jouit privativement du bien.",
        ],
      },
      {
        heading: "Démembrement de propriété",
        paragraphs: [
          "Lorsque la propriété est démembrée, la valeur de l'usufruit et de la nue-propriété est déterminée, en matière fiscale, par le barème de l'article 669 du Code général des impôts. En dehors de ce cadre, notamment pour une cession ou une conversion d'usufruit, l'expert retient une valeur économique fondée sur les revenus attendus et la durée probable du démembrement.",
        ],
      },
    ],
  },

  "indemnites-expropriation": {
    seoTitle: "Indemnités d'expropriation — expert, Marseille, Aix",
    seoDescription:
      "Indemnités d'expropriation (principale, remploi, accessoires) dans les Bouches-du-Rhône, le Var, le Vaucluse, le Gard et les Alpes-de-Haute-Provence.",
    sections: [
      {
        heading: "Le cadre fixé par le Code de l'expropriation",
        paragraphs: [
          "Les indemnités allouées doivent couvrir l'intégralité du préjudice direct, matériel et certain causé par l'expropriation (article L. 321-1 du Code de l'expropriation pour cause d'utilité publique). Le juge fixe leur montant d'après la consistance des biens à la date de l'ordonnance portant transfert de propriété (article L. 322-1), et les biens sont estimés à la date de la décision de première instance, seul étant pris en considération l'usage effectif des immeubles un an avant l'ouverture de l'enquête publique (article L. 322-2).",
        ],
      },
      {
        heading: "Indemnité principale et indemnités accessoires",
        paragraphs: [
          "L'indemnité principale correspond à la valeur vénale du bien, appréciée par comparaison avec des mutations portant sur des biens de même nature et en tenant compte, pour les terrains, de leur qualification au regard des règles d'urbanisme applicables à la date de référence. S'y ajoutent l'indemnité de remploi, destinée à couvrir les frais d'acquisition d'un bien de remplacement, et, selon les cas, les indemnités pour dépréciation du surplus, pour éviction commerciale ou pour frais de déménagement.",
          "Le cabinet intervient aux côtés des expropriés comme des autorités expropriantes, en phase de négociation amiable comme devant le juge de l'expropriation.",
        ],
      },
    ],
  },
};
