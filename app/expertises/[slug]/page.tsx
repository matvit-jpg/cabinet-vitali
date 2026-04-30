import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { expertises, getExpertiseBySlug } from "@/lib/expertises";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ExpertiseIcon } from "@/lib/icons-expertise";

export function generateStaticParams() {
  return expertises.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const e = getExpertiseBySlug(params.slug);
  if (!e) return {};
  return createMetadata({
    title: e.title,
    description: e.shortDescription,
    path: `/expertises/${e.slug}`,
  });
}

export default function ExpertiseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const expertise = getExpertiseBySlug(params.slug);
  if (!expertise) notFound();

  const parts = expertise.fullDescription.split("\n\n").filter(Boolean);
  const intro = parts[0] ?? expertise.fullDescription;
  const rest = parts.slice(1);

  return (
    <>
      <section className="border-b border-grey-light bg-navy py-16 text-ivory lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Expertises", href: "/expertises" },
              { label: expertise.title },
            ]}
          />
          <div className="mt-8 flex items-start gap-4">
            <ExpertiseIcon name={expertise.icon} className="h-8 w-8 text-gold md:h-12 md:w-12" />
            <h1 className="font-display text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {expertise.title}
            </h1>
          </div>
          <p className="mt-6 max-w-3xl font-sans text-sm font-light leading-relaxed text-ivory/70 md:text-lg">
            {expertise.shortDescription}
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_280px] lg:px-8">
          <div>
            {/* Paragraphe d'intro pleine largeur */}
            <p className="font-sans text-base leading-relaxed text-text border-l-2 border-gold pl-5">
              {intro}
            </p>

            {/* Paragraphes suivants en 2 colonnes si plusieurs, sinon pleine largeur */}
            {rest.length > 0 && (
              <div className={`mt-8 gap-8 font-sans text-sm font-light leading-relaxed text-text ${rest.length >= 2 ? "grid md:grid-cols-2" : ""}`}>
                {rest.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            <div className="mt-14 border-t border-grey-light pt-10">
              <h2 className="font-display text-2xl font-semibold text-navy">
                Cas d&apos;usage
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {expertise.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3 font-sans text-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <aside className="lg:block">
            <div className="sticky top-28 rounded-sm border border-gold/30 bg-ivory p-6 shadow-card">
              <p className="font-display text-xl font-semibold text-navy">
                Une mission à confier ?
              </p>
              <p className="mt-2 font-sans text-sm font-light text-grey-mid">
                Décrivez votre contexte : nous revenons vers vous sous 48h
                ouvrées.
              </p>
              <Button href="/contact" variant="primary" className="mt-6 w-full">
                Nous contacter pour ce besoin
              </Button>
              <Link
                href="/expertises"
                className="mt-4 block text-center font-sans text-sm text-navy underline decoration-gold underline-offset-4 hover:text-gold"
              >
                Toutes les expertises
              </Link>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </>
  );
}
