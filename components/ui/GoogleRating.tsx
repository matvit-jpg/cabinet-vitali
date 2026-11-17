import { Star } from "lucide-react";

/** Note de la fiche Google du cabinet — à mettre à jour à la main. */
export const GOOGLE_RATING = {
  value: "4,6",
  valueEn: "4.6",
  count: 21,
  url: "https://www.google.com/maps/search/?api=1&query=Cabinet%20VITALI%20Expert%20de%20justice%20immobilier%20Aubagne",
};

export function GoogleRating({ lang = "fr", dark = false, className = "" }: { lang?: "fr" | "en"; dark?: boolean; className?: string }) {
  const en = lang === "en";
  return (
    <a
      href={GOOGLE_RATING.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-sans text-sm underline-offset-4 transition hover:underline ${
        dark ? "text-ivory/85 hover:text-gold" : "text-navy hover:text-gold-dark"
      } ${className}`}
    >
      <span className="flex" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-gold text-gold" : "fill-gold/40 text-gold"}`} />
        ))}
      </span>
      <span>
        {en ? GOOGLE_RATING.valueEn : GOOGLE_RATING.value}/5 · {GOOGLE_RATING.count} {en ? "Google reviews" : "avis Google"}
      </span>
    </a>
  );
}
