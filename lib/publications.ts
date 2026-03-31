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
  photo:
    "https://static.wixstatic.com/media/a80145_0cb9745259ea4013af4a62c08c937fff~mv2.jpg",
  logo: "https://static.wixstatic.com/media/a80145_45e00eca20a34031add9fff45335768d~mv2.png",
};

// AJDI en premier, puis les autres publications
export const galleryImages: string[] = [
  // AJDI
  "https://static.wixstatic.com/media/a80145_84c46ce6896548c2bb2b1c643af9efd1~mv2.png",
  "https://static.wixstatic.com/media/a80145_c052542463b3436b801163f897b819b6~mv2.jpg",
  "https://static.wixstatic.com/media/a80145_4b6fb27f090a44d6a6503d844e8c28f3~mv2.jpg",
  "/article-rnbc-2022.jpeg",
  "https://static.wixstatic.com/media/a80145_223e48ee5ffa43e6a3d68ff447426936~mv2.jpg",
  // Autres publications
  "https://static.wixstatic.com/media/a80145_63a6101bbea643ac8af6f4df269ecd8e~mv2.jpg",
  "https://static.wixstatic.com/media/a80145_80684e6494844ab198b6212225e5a5b9~mv2.jpg",
  "https://static.wixstatic.com/media/a80145_0a2e27fc02aa4b4f8a7ce40b49fa0477~mv2.png",
  "https://static.wixstatic.com/media/a80145_7e3eada4ceb445f182e7c66fa32becb8~mv2.jpg",
  "https://static.wixstatic.com/media/a80145_956086ba37db4f40b8edaa28afa68684~mv2.png",
];
