/** Correspondance entre les pages françaises et leur version anglaise. */
export const LANG_PAIRS: [fr: string, en: string][] = [
  ["/", "/en"],
  ["/cabinet", "/en/firm"],
  ["/expertises", "/en/expertise"],
  ["/publications", "/en/publications"],
  ["/contact", "/en/contact"],
];

export const isEnglishPath = (p: string) => p === "/en" || p.startsWith("/en/");

/** Page équivalente dans l'autre langue (à défaut, l'accueil de l'autre langue). */
export function counterpartPath(pathname: string): string {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (isEnglishPath(clean)) {
    return LANG_PAIRS.find(([, en]) => en === clean)?.[0] ?? "/";
  }
  return LANG_PAIRS.find(([fr]) => fr === clean)?.[1] ?? "/en";
}

/** Balises hreflang pour une paire de pages. */
export function languageAlternates(frPath: string, enPath: string) {
  const base = "https://www.cabinetvitali.fr";
  const abs = (p: string) => (p === "/" ? `${base}/` : `${base}${p}`);
  return { fr: abs(frPath), en: abs(enPath), "x-default": abs(frPath) };
}
