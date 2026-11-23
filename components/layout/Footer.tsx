"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isEnglishPath } from "@/lib/i18n";
import { Linkedin, UserPlus } from "lucide-react";
import { SITE } from "@/lib/site";
import { GoogleRating } from "@/components/ui/GoogleRating";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Le Cabinet" },
  { href: "/expertises", label: "Expertises" },
  { href: "/expertise-judiciaire", label: "Expertise judiciaire" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

const domaines = [
  { href: "/expertises/valeurs-locatives", label: "Valeur locative et baux commerciaux" },
  { href: "/expertises/indemnite-eviction", label: "Indemnité d'éviction" },
  { href: "/expertises/evaluation-immobiliere", label: "Valeur vénale" },
  { href: "/expertises/parts-de-societes", label: "Sociétés à prépondérance immobilière" },
  { href: "/expertises/successions-donations-partages", label: "Successions, donations, partages" },
  { href: "/expertises/indemnites-expropriation", label: "Expropriation" },
];

const navEn = [
  { href: "/en", label: "Home" },
  { href: "/en/firm", label: "The Firm" },
  { href: "/en/expertise", label: "Expertise" },
  { href: "/en/publications", label: "Publications" },
  { href: "/en/contact", label: "Contact" },
];

const domainesEn = [
  { href: "/en/expertise", label: "Rental value and commercial leases" },
  { href: "/en/expertise", label: "Eviction compensation" },
  { href: "/en/expertise", label: "Market value" },
  { href: "/en/expertise", label: "Property-holding companies" },
  { href: "/en/expertise", label: "Inheritance, gifts and estate partition" },
  { href: "/en/expertise", label: "Compulsory purchase" },
];

export function Footer() {
  const en = isEnglishPath(usePathname() || "/");
  const navItems = en ? navEn : nav;
  const domainItems = en ? domainesEn : domaines;
  return (
    <footer lang={en ? "en" : undefined} className="bg-navy text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-2xl tracking-tight">{SITE.cabinetFull}</p>
          <p className="mt-2 font-sans text-sm font-light text-ivory/80">
            {en
              ? "Court-registered expert — real estate valuation and strategy."
              : "Expert judiciaire — évaluation immobilière et stratégie immobilière."}
          </p>
          <p className="mt-8 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            {en ? "Areas of expertise" : "Domaines"}
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            {domainItems.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-ivory/85 transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            {navItems.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-ivory/85 transition hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            Contact
          </p>
          <address className="mt-4 not-italic font-sans text-sm leading-relaxed text-ivory/85">
            <span className="block text-xs font-semibold uppercase tracking-widest text-gold/70 mb-0.5">{en ? "Postal address" : "Adresse postale"}</span>
            <span className="block">46b boulevard Sicard</span>
            <span className="block">13008 Marseille</span>
            <span className="block mt-3 text-xs font-semibold uppercase tracking-widest text-gold/70 mb-0.5">{en ? "Registered office" : "Siège"}</span>
            <span className="block">22 avenue de Verdun</span>
            <span className="block">13400 Aubagne</span>
            <span className="block">France</span>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="mt-2 block hover:text-gold">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="mt-1 block hover:text-gold">
              {SITE.email}
            </a>
            <a href="/serge-vitali.vcf" download className="mt-3 inline-flex items-center gap-2 hover:text-gold">
              <UserPlus className="h-4 w-4" aria-hidden />
              {en ? "Add to my contacts" : "Ajouter à mes contacts"}
            </a>
          </address>
        </div>
        <div>
  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
    Certifications
  </p>
  <div className="mt-4 flex flex-wrap items-center gap-4">
    <a href="https://www.cneji.fr" target="_blank" rel="noopener noreferrer">
      <img src="/images/cneji-white.png" width={128} height={170} loading="lazy" decoding="async" alt="CNEJI" className="h-9 w-auto opacity-75 transition-opacity hover:opacity-100" />
    </a>
    <a href="https://eefic.eu/accueil" target="_blank" rel="noopener noreferrer">
      <img src="/images/eefic-white.png" width={257} height={257} loading="lazy" decoding="async" alt="EEFIC" className="h-9 w-auto opacity-75 transition-opacity hover:opacity-100" />
    </a>
    <a href="https://www.tegova.org" target="_blank" rel="noopener noreferrer">
      <img src="/images/rev-white.png" width={286} height={286} loading="lazy" decoding="async" alt="REV" className="h-9 w-auto opacity-75 transition-opacity hover:opacity-100" />
    </a>
    <a href="https://www.cfei.fr" target="_blank" rel="noopener noreferrer">
      <img src="/images/cfei-white.png" width={185} height={130} loading="lazy" decoding="async" alt="CFEI" className="h-9 w-auto opacity-75 transition-opacity hover:opacity-100" />
    </a>
  </div>
          <a
            href={SITE.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-ivory/85 hover:text-gold"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <div className="mt-4">
            <GoogleRating dark lang={en ? "en" : "fr"} />
          </div>
        </div>
      </div>
      <div className="border-t border-navy-light">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 font-sans text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="hover:text-gold">
              {en ? "Legal notice (FR)" : "Mentions légales"}
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-gold">
              {en ? "Privacy policy (FR)" : "Politique de confidentialité"}
            </Link>
            <a href="/CGV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              {en ? "Terms of business (FR)" : "CGV"}
            </a>
            {en ? (
              <Link href="/" lang="fr" hrefLang="fr" className="hover:text-gold">
                Version française
              </Link>
            ) : (
              <Link href="/en" lang="en" hrefLang="en" className="hover:text-gold">
                English
              </Link>
            )}
          </div>
          <p>
          © {new Date().getFullYear()} {SITE.cabinetFull}.
            
          </p>
        </div>
      </div>
    </footer>
  );
}
