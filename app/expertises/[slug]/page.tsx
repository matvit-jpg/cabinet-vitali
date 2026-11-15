import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { expertises, getExpertiseBySlug } from "@/lib/expertises";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ExpertiseIcon } from "@/lib/icons-expertise";
import { expertiseSections } from "@/lib/expertise-sections";
import { PageHeader } from "@/components/layout/PageHeader";

export function generateStaticParams() {
  return expertises.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const e = getExpertiseBySlug(params.slug);
  if (!e) return {};
  const seo = expertiseSections[e.slug];
  const meta = createMetadata({
    title: e.title,
    description: seo?.seoDescription ?? e.shortDescription,
    path: `/expertises/${e.slug}`,
  });
  return seo ? { ...meta, title: { absolute: `${seo.seoTitle} | Cabinet Vitali` } } : meta;
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
  const sections = expertiseSections[expertise.slug]?.sections ?? [];

  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Expertises", href: "/expertises" },
          { label: expertise.title },
        ]}
        eyebrow="Domaine d'expertise"
        title={expertise.title}
        intro={expertise.shortDescription}
      />

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

            {sections.map((sec) => (
              <div key={sec.heading} className="mt-12">
                <h2 className="font-display text-2xl font-semibold text-navy">
                  {sec.heading}
                </h2>
                <div className="mt-4 space-y-4 font-sans text-sm font-light leading-relaxed text-text md:text-base">
                  {sec.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-14 border-t border-grey-light pt-10">
              <h2 className="font-display text-2xl font-semibold text-navy">
                Cas d&apos;usage
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {expertise.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3 font-sans text-sm">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
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
