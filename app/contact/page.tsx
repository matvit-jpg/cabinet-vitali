import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ContactForm } from "@/components/sections/ContactForm";
import MapEmbed from "@/components/sections/MapEmbed";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contacter ${SITE.cabinetFull} — formulaire sécurisé, réponse sous 48h ouvrées.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-grey-light bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contact" },
            ]}
          />
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl font-sans text-lg font-light text-grey-mid">
            Expliquez votre contexte : nous vous répondons dans les meilleurs
            délais.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Formulaire
            </h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">
                Coordonnées
              </h2>
              <ul className="mt-6 space-y-4 font-sans text-sm text-text">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span>
                    <span className="block font-medium text-navy">Bureau Marseille</span>
                    <span className="block">46b Boulevard Sicard</span>
                    <span className="block">13008 Marseille</span>
                    <span className="mt-3 block font-medium text-navy">Bureau Aubagne</span>
                    <span className="block">22 avenue de Verdun</span>
                    <span className="block">13400 Aubagne</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="hover:text-gold"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span>Réponse sous 48h ouvrées.</span>
                </li>
              </ul>
            </div>
            <MapEmbed />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
