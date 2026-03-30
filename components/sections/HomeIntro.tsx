import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FadeInSection } from "@/components/motion/FadeInSection";

export function HomeIntro() {
  return (
    <SectionWrapper id="intro" className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8 lg:gap-16">
        <FadeInSection>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Une mission au service de la justice
          </h2>
          <div className="mt-6 space-y-4 font-sans text-base font-light leading-relaxed text-text">
            <p>
              Le cabinet accompagne les juridictions et les parties dans les
              procédures où la valeur des biens immobiliers est déterminante.
              Chaque mission est conduite avec exigence : méthodes documentées,
              investigations sur le terrain et rapport motivé.
            </p>
            <p>
              L&apos;indépendance, la transparence des hypothèses et la
              cohérence avec les normes professionnelles constituent les
              piliers de notre engagement.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <aside className="border border-gold/50 bg-white p-8 shadow-card">
            <p className="font-sans text-sm font-medium uppercase tracking-widest text-gold">
              Engagement
            </p>
            <p className="mt-4 font-display text-2xl font-normal italic leading-snug text-navy">
              &ldquo;Le rapport d&apos;expertise doit éclairer le juge sans le
              substituer : clarté des faits, rigueur des méthodes, prudence des
              conclusions.&rdquo;
            </p>
          </aside>
        </FadeInSection>
      </div>
    </SectionWrapper>
  );
}