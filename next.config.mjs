/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  async redirects() {
    // Anciennes adresses du précédent site, signalées en 404 par Google Search Console
    return [
      { source: "/le-cabinet", destination: "/cabinet", permanent: true },
      { source: "/nos-missions", destination: "/expertises", permanent: true },
      { source: "/projects-7", destination: "/expertises", permanent: true },
      { source: "/projects-3", destination: "/publications", permanent: true },
      { source: "/expertises/expertises-judiciaires", destination: "/expertise-judiciaire", permanent: true },
      { source: "/expertises/ingenierie-immobiliere", destination: "/ingenierie", permanent: true },
      { source: "/expertises-judiciaires", destination: "/expertise-judiciaire", permanent: true },
      { source: "/ingenierie-immobiliere", destination: "/ingenierie", permanent: true },
      { source: "/cgv", destination: "/CGV.pdf", permanent: true },
    ];
  },
};

export default nextConfig;