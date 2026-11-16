"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlagGB } from "@/components/ui/FlagGB";
import { FlagFR } from "@/components/ui/FlagFR";
import { counterpartPath, isEnglishPath } from "@/lib/i18n";

/** Bouton de bascule français / anglais : renvoie vers la page équivalente dans l'autre langue. */
export function LangSwitch({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const pathname = usePathname() || "/";
  const en = isEnglishPath(pathname);
  const target = counterpartPath(pathname);
  const color = dark ? "border-ivory/40 text-ivory hover:border-gold hover:text-gold" : "border-navy/25 text-navy hover:border-gold-dark hover:text-gold-dark";
  return (
    <Link
      href={target}
      hrefLang={en ? "fr" : "en"}
      lang={en ? "fr" : "en"}
      aria-label={en ? "Version française du site" : "English version of the website"}
      className={`inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-sans text-xs font-semibold tracking-wide transition ${color} ${className}`}
    >
      {en ? <FlagFR className="h-3 w-auto" /> : <FlagGB className="h-3 w-auto" />}
      {en ? "FR" : "EN"}
    </Link>
  );
}
