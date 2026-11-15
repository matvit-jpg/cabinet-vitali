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
          <h2 className="font-display text-xl font-semibold text-navy">Responsable du traitement</h2>
          <p>
            Société d&apos;exploitation du Cabinet Vitali (S.E.C.V.), SARL immatriculée au RCS de
            Marseille sous le numéro 800 115 974, 22 avenue de Verdun, 13400 Aubagne, représentée
            par son gérant, Serge Vitali — {SITE.email}.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy">Formulaire de contact</h2>
          <p>
            Les données saisies dans le formulaire (identité, structure, coordonnées, objet et
            contenu de la demande) sont traitées pour répondre à votre demande et, le cas échéant,
            établir une proposition d&apos;intervention. Ce traitement repose sur votre consentement
            et sur les mesures précontractuelles prises à votre demande (article 6.1, a et b, du
            RGPD). Les données sont destinées au seul cabinet ; elles transitent par le prestataire
            d&apos;envoi de courriels du site et ne sont ni cédées ni utilisées à des fins de
            prospection. Elles sont conservées trois ans à compter du dernier contact, sauf
            ouverture d&apos;un dossier, auquel cas les règles de conservation du dossier
            s&apos;appliquent.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy">Mesure d&apos;audience</h2>
          <p>
            Le site utilise des outils de mesure d&apos;audience sans cookie (Umami et Vercel
            Analytics), qui produisent des statistiques agrégées et anonymes de fréquentation. Aucun
            cookie publicitaire ou de traçage n&apos;est déposé ; aucun bandeau de consentement
            n&apos;est donc requis.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy">Hébergement</h2>
          <p>
            Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
            États-Unis.
          </p>
          <h2 className="font-display text-xl font-semibold text-navy">Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
            limitation, d&apos;opposition et de portabilité, ainsi que du droit de retirer votre
            consentement à tout moment, en écrivant à {SITE.email}. Vous pouvez introduire une
            réclamation auprès de la Commission nationale de l&apos;informatique et des libertés
            (CNIL), 3 place de Fontenoy, 75007 Paris, www.cnil.fr.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
