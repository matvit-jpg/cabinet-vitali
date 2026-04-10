import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInSection } from "@/components/motion/FadeInSection";

const quotes = [
  {
    text: "Inscrit sur les listes d'experts de la Cour d'appel d'Aix-en-Provence et de la Cour administrative d'appel de Marseille. Assermenté, avec compétence professionnelle de haut niveau, rigueur intellectuelle et morale.",
    author: "Expert judiciaire agréé",
  },
  {
    text: "Conforme à la charte de l'expertise en évaluation immobilière et aux normes européennes d'expertise — titulaire du label REV (Recognised European Valuer).",
    author: "Normes européennes d'expertise — label REV",
  },
  {
    text: "Inscrit sur la liste des arbitres du CMAP, leader en France en résolution des conflits pour les entreprises, offrant un mode alternatif rapide, confidentiel et maîtrisé en coûts.",
    author: "Arbitre — CMAP, Paris",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper className="bg-ivory">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeInSection>
          <h2 className="font-display text-xl font-semibold tracking-tight text-navy md:text-4xl">
            Accréditations & engagements
          </h2>
          <p className="mt-3 font-sans text-gold italic">
            Des garanties officielles au service de vos dossiers
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
                <p className="-mt-6 font-display text-sm font-normal italic leading-relaxed text-navy md:text-lg">
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