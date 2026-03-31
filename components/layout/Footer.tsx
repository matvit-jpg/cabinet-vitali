import Link from "next/link";
import { Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Le Cabinet" },
  { href: "/expertises", label: "Expertises" },
  { href: "/expertise-judiciaire", label: "Expertise judiciaire" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-2xl tracking-tight">{SITE.cabinetFull}</p>
          <p className="mt-2 font-sans text-sm font-light text-ivory/80">
            Expert judiciaire agréé — évaluations immobilières et rapports motivés
            pour les juridictions et les professionnels.
          </p>
        </div>
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            {nav.map((l) => (
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
            {SITE.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="mt-2 block hover:text-gold">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="mt-1 block hover:text-gold">
              {SITE.email}
            </a>
          </address>
        </div>
        <div>
  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
    Certifications
  </p>
  <div className="mt-4 flex flex-wrap items-center gap-4">
    <a href="https://www.cneji.fr" target="_blank" rel="noopener noreferrer">
      <img src="https://static.wixstatic.com/media/a80145_e4e3177667df41429487d916dcb617f2~mv2.jpg/v1/fill/w_89,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a80145_e4e3177667df41429487d916dcb617f2~mv2.jpg" alt="CNEJI" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
    </a>
    <a href="https://eefic.eu/accueil.html" target="_blank" rel="noopener noreferrer">
      <img src="https://static.wixstatic.com/media/a80145_1f7b0e6bb51947fe88d2e446e4bb9920~mv2.png/v1/fill/w_101,h_101,al_c,q_85,enc_avif,quality_auto/EEFIC.png" alt="EEFIC" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
    </a>
    <a href="https://www.tegova.org" target="_blank" rel="noopener noreferrer">
      <img src="https://static.wixstatic.com/media/2c5f6e_bd6fe5d4751649b89f15650a0d7c9d72~mv2.png/v1/fill/w_91,h_91,al_c,q_85,enc_avif,quality_auto/rev.png" alt="REV" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
    </a>
    <a href="https://www.cfei.fr" target="_blank" rel="noopener noreferrer">
      <img src="https://static.wixstatic.com/media/a80145_8b30c24bb61e4240b38010c6f48fb73f~mv2.jpeg/v1/fill/w_101,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Unknown.jpeg" alt="CFEI" className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
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
        </div>
      </div>
      <div className="border-t border-navy-light">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 font-sans text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Link href="/mentions-legales" className="hover:text-gold">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-gold">
              Politique de confidentialité
            </Link>
            <a href="/CGV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              CGV
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} {SITE.cabinetFull}. Réalisé par{" "}
            {SITE.studioCredit}.
          </p>
        </div>
      </div>
    </footer>
  );
}
