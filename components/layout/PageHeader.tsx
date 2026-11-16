import Link from "next/link";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

type Crumb = { label: string; href?: string };

/**
 * En-tête commun des pages intérieures (modèle de la page « Le Cabinet ») :
 * fond ivoire, surtitre, titre, introduction, filet doré, puis repères ou liens rapides.
 */
export function PageHeader({
  crumbs,
  eyebrow,
  title,
  intro,
  facts,
  links,
  compact = false,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: string;
  facts?: { k: string; v: string }[];
  links?: { label: string; href: string }[];
  compact?: boolean;
}) {
  const base = "https://www.cabinetvitali.fr";
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${base}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };
  return (
    <section className={`border-b border-grey-light bg-ivory ${compact ? "py-14" : "py-16 lg:py-24"}`}>
      <div className={`mx-auto px-4 lg:px-8 ${compact ? "max-w-3xl" : "max-w-7xl"}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        <Breadcrumb items={crumbs} />
        {eyebrow && (
          <p className="mt-8 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
            {eyebrow}
          </p>
        )}
        <h1
          className={`font-display font-semibold tracking-tight text-navy ${eyebrow ? "mt-4" : "mt-6"} ${
            compact ? "text-4xl" : "text-4xl md:text-6xl lg:text-7xl"
          }`}
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-3xl font-sans text-base font-light leading-relaxed text-navy/75 md:text-xl">
            {intro}
          </p>
        )}
        {(facts || links) && <div className="mt-8 h-px max-w-4xl bg-gold-dark/40" />}
        {facts && (
          <dl className={`mt-8 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 ${facts.length >= 3 ? "md:grid-cols-3" : ""}`}>
            {facts.map((f) => (
              <div key={f.k} className="flex flex-col-reverse gap-1.5">
                <dd className="font-sans text-sm leading-snug text-navy/70">{f.v}</dd>
                <dt className="font-display text-3xl font-semibold leading-none text-gold-dark md:text-4xl">{f.k}</dt>
              </div>
            ))}
          </dl>
        )}
        {links && (
          <ul className="mt-8 flex max-w-5xl flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center rounded-sm border border-gold-dark/40 bg-white px-4 py-2.5 font-sans text-sm text-navy transition-colors hover:border-navy hover:bg-navy hover:text-ivory"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
