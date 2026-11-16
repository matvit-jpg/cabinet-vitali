"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangSwitch } from "./LangSwitch";
import { isEnglishPath } from "@/lib/i18n";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const expertises = [
  { href: "/expertises", label: "Domaines d'expertise" },
  { href: "/expertise-judiciaire", label: "Expertise judiciaire" },
  { href: "/ingenierie", label: "Ingénierie immobilière" },
  { href: "/arbitrage", label: "Arbitrage" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expertisesOpen, setExpertisesOpen] = useState(false);
  const en = isEnglishPath(usePathname() || "/");
  const item = "font-display text-3xl tracking-tight text-ivory hover:text-gold";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-navy text-ivory lg:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div className="flex items-center justify-between border-b border-navy-light px-6 py-5">
            <span className="font-display text-xl text-ivory">{SITE.cabinetFull}</span>
            <button type="button" onClick={onClose} className="rounded-sm p-2 text-ivory hover:bg-navy-light" aria-label="Fermer le menu">
              <X className="h-7 w-7" />
            </button>
          </div>

          {en ? (
          <nav className="flex flex-1 flex-col justify-start gap-6 px-8 pt-12" aria-label="Main navigation" lang="en">
            <Link href="/en" onClick={onClose} className={item}>Home</Link>
            <Link href="/en/firm" onClick={onClose} className={item}>The Firm</Link>
            <Link href="/en/expertise" onClick={onClose} className={item}>Expertise</Link>
            <div onClick={onClose}><LangSwitch dark /></div>
          </nav>
          ) : (
          <nav className="flex flex-1 flex-col justify-start gap-6 px-8 pt-12" aria-label="Navigation principale">
            <Link href="/" onClick={onClose} className="font-display text-3xl tracking-tight text-ivory hover:text-gold">Accueil</Link>
            <Link href="/cabinet" onClick={onClose} className="font-display text-3xl tracking-tight text-ivory hover:text-gold">Le Cabinet</Link>

            {/* Expertises avec sous-menu */}
            <div>
              <button
                onClick={() => setExpertisesOpen(!expertisesOpen)}
                className="flex items-center gap-2 font-display text-3xl tracking-tight text-ivory hover:text-gold"
              >
                Expertises
                <ChevronDown className={`h-6 w-6 transition-transform duration-200 ${expertisesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {expertisesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 flex flex-col gap-4 border-l border-gold/30 pl-6">
                      {expertises.map((e) => (
                        <Link key={e.href} href={e.href} onClick={onClose} className="font-sans text-lg text-ivory/80 hover:text-gold">
                          {e.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/publications" onClick={onClose} className="font-display text-3xl tracking-tight text-ivory hover:text-gold">Publications</Link>
            <div onClick={onClose}><LangSwitch dark /></div>
          </nav>
          )}

          <div className="border-t border-navy-light p-8">
            <Button href={en ? "/en/contact" : "/contact"} variant="primary" className="w-full">Contact</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}