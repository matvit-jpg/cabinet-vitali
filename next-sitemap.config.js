/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.cabinetvitali.fr",
  generateRobotsTxt: true,
  exclude: ["/expertises/expertises-judiciaires", "/expertises/ingenierie-immobiliere", "/og", "/api/*"],
};
