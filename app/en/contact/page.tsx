import { Mail, Phone, UserPlus } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { languageAlternates } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHeader } from "@/components/layout/PageHeader";

const base = createMetadata({
  title: "Contact — real estate expert in Marseille and Aix-en-Provence",
  description: "Contact Cabinet Vitali for a real estate valuation in Marseille, Aix-en-Provence and Provence. Serge Vitali works in English and French.",
  path: "/en/contact",
  languages: languageAlternates("/contact", "/en/contact"),
});

export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "en_GB" } };

export default function ContactPageEn() {
  return (
    <div lang="en">
      <PageHeader
        crumbs={[{ label: "Home", href: "/en" }, { label: "Contact" }]}
        eyebrow="Get in touch"
        title="Contact"
        intro="Tell us about your property and what the valuation is for: we will reply promptly, in English."
      />

      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <ul className="space-y-5 font-sans text-base text-text">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-gold-dark">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-dark">{SITE.email}</a>
            </li>
          </ul>
          <p className="mt-6 font-sans text-sm font-light text-text">Meetings by appointment only.</p>
          <a
            href="/serge-vitali.vcf"
            download
            className="mt-8 inline-flex items-center gap-2 border border-gold-dark px-4 py-2 font-sans text-sm text-navy transition hover:bg-gold-dark hover:text-white"
          >
            <UserPlus className="h-4 w-4" aria-hidden />
            Add to my contacts
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
}
