import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInSection } from "@/components/motion/FadeInSection";

const quotes = [
  {
    text: "Un rapport d'une clarté rare, parfaitement exploitable en audience. La méthodologie est limpide.",
    author: "Avocat au barreau de Paris",
  },
  {
    text: "Réactivité et rigueur dans une procédure sensible : l'expertise a permis de débloquer le dossier.",
    author: "Magistrat, tribunal judiciaire",
  },
  {
    text: "Documentation exhaustive et chiffrages défendables devant notre comité de direction.",
    author: "Direction juridique, groupe coté",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper className="bg-ivory">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeInSection>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-navy">
            Références
          </h2>
          <p className="mt-3 font-sans text-gold italic">
            La confiance des professionnels du droit et des entreprises
          </p>
        </FadeInSection>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {quotes.map((q) => (
            <FadeInSection key={q.author}>
              <blockquote className="relative">
                <span
                  className="font-display text-7xl leading-none text-gold/40"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="-mt-6 font-display text-lg font-normal italic leading-relaxed text-navy">
                  {q.text}
                </p>
                <footer className="mt-4 font-sans text-xs font-medium uppercase tracking-wider text-grey-mid">
                  {q.author}
                </footer>
              </blockquote>
            </FadeInSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}