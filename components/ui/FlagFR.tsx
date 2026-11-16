/** Petit drapeau français pour le retour vers la version française. */
export function FlagFR({ className = "h-3.5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 2" className={`inline-block shrink-0 rounded-[2px] ${className}`} aria-hidden="true">
      <rect width="1" height="2" x="0" fill="#002395" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#ED2939" />
    </svg>
  );
}
