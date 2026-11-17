"use client";

import Link from "next/link";
import { LangSwitch } from "./LangSwitch";
import { isEnglishPath } from "@/lib/i18n";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Le Cabinet" },
  {
    label: "Expertises",
    dropdown: [
      { href: "/expertises", label: "Domaines d'expertise" },
      { href: "/expertise-judiciaire", label: "Expertise judiciaire" },
      { href: "/ingenierie", label: "Ingénierie immobilière" },
      { href: "/arbitrage", label: "Arbitrage" },
    ],
  },
  { href: "/publications", label: "Publications" },
];

const linksEn: { href: string; label: string; dropdown?: undefined }[] = [
  { href: "/en", label: "Home" },
  { href: "/en/firm", label: "The Firm" },
  { href: "/en/expertise", label: "Expertise" },
  { href: "/en/publications", label: "Publications" },
];

export function Header() {
  const pathname = usePathname();
  const en = isEnglishPath(pathname);
  const navLinks = en ? linksEn : links;
  const home = en ? "/en" : "/";
  const contactHref = en ? "/en/contact" : "/contact";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header lang={en ? "en" : undefined} className={`sticky top-0 z-40 border-b transition-colors duration-300 ${scrolled ? "border-grey-light/60 bg-ivory/85 backdrop-blur-md" : "border-transparent bg-ivory/70 backdrop-blur-sm"}`}>
        <div className="grid grid-cols-3 items-center px-4 py-4 lg:px-6">

          {/* Gauche — Hamburger sur mobile, logo sur desktop */}
          <div className="justify-self-start">
            <button type="button" className="rounded-sm p-2 text-navy hover:bg-grey-light lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu de navigation" aria-expanded={menuOpen}>
              <Menu className="h-6 w-6" />
            </button>
            <Link href={home} aria-label={`${SITE.cabinetFull} — ${en ? "Home" : "Accueil"}`} className="hidden lg:block">
              <Image
                src="/images/logo-navy.png"
                alt={SITE.cabinetFull}
                width={260}
                height={117}
                className={`h-auto object-contain transition-[width] duration-300 ${scrolled ? "w-[180px]" : "w-[210px] xl:w-[250px]"}`}
                priority
              />
            </Link>
          </div>

          {/* Centre — Navigation desktop uniquement */}
          <nav className="hidden items-center justify-center gap-7 whitespace-nowrap lg:flex xl:gap-10" aria-label="Navigation principale">
            {navLinks.map((l) => {
              if (l.dropdown) {
                const isActive = l.dropdown.some(d => pathname.startsWith(d.href));
                return (
                  <div key="expertises" className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <button className={`group relative flex items-center gap-1.5 whitespace-nowrap font-sans text-lg font-medium xl:text-xl transition hover:text-gold ${isActive ? "text-gold" : "text-navy"}`}>
                      {l.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                      <span className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gold transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} aria-hidden />
                    </button>
                    <div className={`absolute left-0 top-full pt-2 transition-all duration-200 ${dropdownOpen ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-1"}`}>
                      <div className="w-64 overflow-hidden rounded-sm border border-grey-light bg-white shadow-elevated">
                        {l.dropdown.map((d, i) => (
                          <Link
                            key={d.href}
                            href={d.href}
                            onClick={() => setDropdownOpen(false)}
                            className={`group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-ivory ${i < l.dropdown.length - 1 ? "border-b border-grey-light/60" : ""} ${pathname.startsWith(d.href) ? "bg-ivory" : ""}`}
                          >
                            <span className={`h-1 w-1 rounded-full bg-gold transition-transform duration-200 group-hover:scale-150 ${pathname.startsWith(d.href) ? "scale-150" : ""}`} />
                            <span className={`font-sans text-sm font-medium transition-colors group-hover:text-gold ${pathname.startsWith(d.href) ? "text-gold" : "text-navy"}`}>
                              {d.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              const active = l.href === "/" || l.href === "/en" ? pathname === l.href : pathname.startsWith(l.href);
              return (
                <Link key={l.href} href={l.href} className={`group relative inline-flex items-center gap-2 whitespace-nowrap font-sans text-lg font-medium xl:text-xl transition hover:text-gold ${active ? "text-gold" : "text-navy"}`}>
                  {l.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gold transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} aria-hidden />
                </Link>
              );
            })}
          </nav>

          {/* Droite — bouton Contact */}
          <div className="flex items-center justify-end gap-3 col-start-3">
            <LangSwitch />
            <Button href={contactHref} variant="primary" className="lg:hidden !text-[10px] !px-2.5 !py-1.5" aria-label={en ? "Go to the contact page" : "Aller à la page contact"}>
              Contact
            </Button>
            <Button href={contactHref} variant="primary" className="hidden lg:inline-flex" aria-label={en ? "Go to the contact page" : "Aller à la page contact"}>
              Contact
            </Button>
          </div>

        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
