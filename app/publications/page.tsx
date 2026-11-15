import { createMetadata } from "@/lib/metadata";
import { PublicationsGrid } from "@/components/sections/PublicationsGrid";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = createMetadata({
  title: "Publications & interventions",
  description:
    "Articles de Serge Vitali dans l'AJDI (Lefebvre Dalloz), observatoires des loyers judiciaires d'Aix-en-Provence et Marseille, conférences sur les baux commerciaux et l'expertise judiciaire.",
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Publications & interventions" }]}
        eyebrow="Doctrine · Conférences"
        title="Publications & interventions"
        intro="Articles, observatoires des loyers judiciaires et conférences consacrés à l'évaluation immobilière, aux baux commerciaux et à l'expertise de justice."
        facts={[
          { k: "AJDI", v: "Contributions à l'Actualité juridique Droit immobilier depuis 2018" },
          { k: "Loyers", v: "Observatoire des loyers judiciaires Aix-en-Provence – Marseille" },
          { k: "Colloques", v: "RNBC, barreau de Paris, CECAAM" },
        ]}
      />
      <PublicationsGrid />
    </>
  );
}
