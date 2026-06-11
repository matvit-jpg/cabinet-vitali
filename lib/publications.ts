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

// AJDI en premier, puis les autres publications
export const galleryImages: string[] = [
  // AJDI
  "/images/pub-1.png",
  "/images/pub-2.jpg",
  "/images/pub-3.jpg",
  "/article-rnbc-2022.jpeg",
  "/images/pub-4.jpg",
  // Autres publications
  "/images/pub-5.jpg",
  "/images/pub-6.jpg",
  "/images/pub-7.png",
  "/images/pub-8.jpg",
  "/images/pub-9.png",
];
