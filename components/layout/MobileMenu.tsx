"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/cabinet", label: "Le Cabinet" },
  { href: "/expertises", label: "Nos missions" },
  { href: "/expertise-judiciaire", label: "Savoir-faire" },
  { href: "/arbitrage", label: "Arbitrage" },
  { href: "/ingenierie", label: "Ingénierie immobilière" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
            <span className="font-display text-xl text-ivory">
              {SITE.cabinetFull}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-sm p-2 text-ivory hover:bg-navy-light"
              aria-label="Fermer le menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-8 px-8" aria-label="Navigation principale">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={onClose}
                className="font-display text-3xl tracking-tight text-ivory hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-navy-light p-8">
            <Button href="/contact" variant="primary" className="w-full">
              Contact
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
