import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata = createMetadata({
  title: "Politique de confidentialité",
  description: `Traitement des données personnelles — ${SITE.cabinetFull}.`,
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Politique de confidentialité" },
            ]}
          />
          <h1 className="mt-6 font-display text-4xl font-semibold text-navy">
            Politique de confidentialité
          </h1>
        </div>
      </section>
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl space-y-4 px-4 font-sans text-sm font-light leading-relaxed text-text lg:px-8">
          <p>
            Les données transmises via le formulaire de contact sont utilisées
            uniquement pour répondre à votre demande, dans le respect du RGPD.
          </p>
          <p>
            Responsable du traitement : {SITE.cabinetFull}, {SITE.email}.
          </p>
          <p>
            Durée de conservation : le temps nécessaire au traitement de la
            demande, puis archivage éventuel selon obligations légales.
          </p>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification et
            d&apos;effacement en nous écrivant à l&apos;adresse ci-dessus.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
