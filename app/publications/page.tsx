import { createMetadata } from "@/lib/metadata";
import { PublicationsGrid } from "@/components/sections/PublicationsGrid";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata = createMetadata({
  title: "Publications & interventions",
  description:
    "Articles, presse et interventions du cabinet Vitali.",
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Publications & interventions" },
            ]}
          />
          <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">
            Publications & interventions
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-sm font-light text-grey-mid md:text-lg">
            Presse, conférences et analyses — veille professionnelle et
            transmission.
          </p>
        </div>
      </section>
      <PublicationsGrid />
    </>
  );
}
