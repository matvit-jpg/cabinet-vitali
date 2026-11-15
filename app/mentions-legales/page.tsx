import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${SITE.cabinetFull}.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mentions légales" },
            ]}
          />
          <h1 className="mt-6 font-display text-4xl font-semibold text-navy">
            Mentions légales
          </h1>
        </div>
      </section>
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl px-4 font-sans text-sm font-light leading-relaxed text-text lg:px-8">
          <p>
            <strong className="font-medium text-navy">Éditeur :</strong>{" "}
            Société d'exploitation du Cabinet Vitali (S.E.C.V.), exerçant sous le nom commercial « Cabinet Vitali », société à responsabilité limitée immatriculée au RCS de Marseille sous le numéro 800 115 974, TVA intracommunautaire FR96 800 115 974 — siège social : 22 avenue de Verdun, 13400 Aubagne ; adresse postale : 46b boulevard Sicard, 13008 Marseille.
          </p>
          <p className="mt-4">
            <strong className="font-medium text-navy">Directeur de la publication :</strong>{" "}
            Serge Vitali, gérant.
          </p>
          <p className="mt-4">
            <strong className="font-medium text-navy">Contact :</strong>{" "}
            {SITE.email} — {SITE.phone}.
          </p>
          <p className="mt-4">
            <strong className="font-medium text-navy">Hébergement :</strong>{" "}
            Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.
          </p>
          <p className="mt-4 text-grey-mid">
            Les informations présentes sont fournies à titre indicatif et ne
            constituent pas un conseil juridique personnalisé.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
