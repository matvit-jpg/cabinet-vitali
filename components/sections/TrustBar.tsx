const items = [
  "Inscrit près la Cour d'appel",
  "+20 ans d'expérience",
  "+500 rapports délivrés",
  "Normes européennes REV",
];

export function TrustBar() {
  return (
    <div className="border-y border-gold/20 bg-ivory">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch divide-y divide-gold/30 px-4 py-8 sm:flex-row sm:divide-x sm:divide-y-0 lg:px-8">
        {items.map((text) => (
          <div
            key={text}
            className="flex flex-1 items-center justify-center gap-2 px-4 py-4 text-center font-sans text-sm font-medium text-navy sm:py-0"
          >
            <span className="text-gold" aria-hidden>
              ✦
            </span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}