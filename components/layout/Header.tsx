"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Le Cabinet" },
  { href: "/expertises", label: "Nos missions" },
  { href: "/expertise-judiciaire", label: "Savoir-faire" },
  { href: "/publications", label: "Publications" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
          scrolled
            ? "border-grey-light/60 bg-ivory/85 backdrop-blur-md"
            : "border-transparent bg-ivory/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:px-8">
          <Link
            href="/"
            className="group flex flex-col"
            aria-label={`${SITE.cabinetFull} — Accueil`}
          >
            <span className="font-display text-2xl tracking-tight text-navy">
              {SITE.cabinetFull}
            </span>
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-gold">
              {SITE.tagline}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navigation principale"
          >
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group relative font-sans text-sm font-medium transition hover:text-gold ${
                    active ? "text-gold" : "text-navy"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gold transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              className="hidden sm:inline-flex"
              aria-label="Aller à la page contact"
            >
              Contact
            </Button>
            <button
              type="button"
              className="rounded-sm p-2 text-navy hover:bg-grey-light lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={menuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
