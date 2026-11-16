import { GoldRule } from "@/components/motion/GoldRule";
import { StaggerItem, StaggerList } from "@/components/motion/Stagger";
import Link from "next/link";
import { ArrowRight, Award, FileText, Gift, Home, MapPin, Scale, Store, Users } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { languageAlternates } from "@/lib/i18n";

const base = createMetadata({
  title: "Real estate valuation in Marseille and Provence — court-registered expert",
  description:
    "Independent real estate valuations in Provence by Serge Vitali, court-registered expert and REV-certified valuer. Reports in English or French.",
  path: "/en",
  languages: languageAlternates("/", "/en"),
});

export const metadata = { ...base, openGraph: { ...base.openGraph, locale: "en_GB" } };

const eyebrow = "font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-dark";
const h2 = "mt-3 font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl";
const rule = <GoldRule />;

const credentials = [
  { icon: Scale, title: "Court-appointed valuation expert", text: "Registered with the Aix-en-Provence Court of Appeal since 2017. Also acts before the Marseille Administrative Court of Appeal." },
  { icon: Award, title: "REV — Recognised European Valuer", text: "Designation awarded by TEGoVA, the European Group of Valuers' Associations." },
  { icon: Users, title: "Chair of EEFIC", text: "The French national federation of land, property and business valuers." },
];

const situations = [
  { icon: Home, title: "Inheritance", text: "Valuations for French inheritance tax returns and estate settlement." },
  { icon: Gift, title: "Gifts", text: "Valuations for gift tax returns and family transfers." },
  { icon: FileText, title: "Wealth tax", text: "Valuations for French real estate wealth tax (IFI) returns." },
  { icon: Store, title: "Commercial leases", text: "Rental value on lease renewal and eviction compensation under French commercial lease law." },
];

export default function EnglishHomePage() {
  return (
    <div lang="en">
      {/* Hero */}
      <section className="bg-navy text-ivory">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">Real estate valuation · Marseille &amp; Aubagne</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ivory md:text-5xl lg:text-6xl">
              Court-registered valuations for international owners of French property
            </h1>
            <p className="mt-6 max-w-xl text-left font-sans text-sm font-light leading-relaxed text-ivory/80 md:text-base">
              Led by Serge Vitali. Reports prepared to European valuation standards, in English or in French.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/en/contact" className="inline-flex items-center rounded-sm bg-gold px-5 py-3 font-sans text-sm font-semibold text-navy transition hover:bg-gold-light">
                Discuss your matter
              </Link>
              <Link href="/en/expertise" className="inline-flex items-center rounded-sm border border-ivory/60 px-5 py-3 font-sans text-sm font-semibold text-ivory transition hover:border-ivory hover:bg-white/10">
                Our areas of expertise
              </Link>
            </div>
          </div>
          <dl className="self-center border-t border-gold/60">
            {[
              { k: "2017", v: "Registered with the Aix-en-Provence Court of Appeal since" },
              { k: "5", v: "Departments covered: Bouches-du-Rhône and its neighbours" },
              { k: "EN·FR", v: "Working languages" },
            ].map((f) => (
              <div key={f.k} className="flex items-center gap-4 border-b border-ivory/15 py-5">
                <dt className="w-24 shrink-0 font-display text-4xl font-semibold leading-none text-gold">{f.k}</dt>
                <dd className="font-sans text-xs leading-snug text-ivory/75">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className={eyebrow}>The practice</p>
            <h2 className={h2}>About the practice</h2>
            {rule}
            <p className="mt-6 font-sans text-sm font-light leading-relaxed text-text md:text-base">
              Cabinet Vitali is a real estate valuation practice based in Marseille and Aubagne, led by Serge Vitali.
            </p>
            <Link href="/en/firm" className="mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-gold-dark hover:underline">
              About the firm <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <StaggerList className="space-y-4">
            {credentials.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="flex gap-4 rounded-sm border border-grey-light bg-ivory p-5 transition-[border-color,box-shadow] duration-300 hover:border-gold-dark/50 hover:shadow-elevated">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-ivory">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-navy md:text-base">{title}</h3>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-text/80 md:text-sm">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* International owners */}
      <section className="border-y border-grey-light bg-ivory">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <p className={eyebrow}>International owners</p>
          <h2 className={h2}>Why it matters for international owners</h2>
          {rule}
          <p className="mt-6 max-w-2xl font-sans text-sm font-light leading-relaxed text-text md:text-base">
            French property law and tax rules have their own valuation requirements, notably in four situations.
          </p>
          <StaggerList className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {situations.map(({ icon: Icon, title, text }) => (
              <StaggerItem key={title} className="rounded-sm border border-grey-light bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-gold-dark/50 hover:shadow-elevated">
                <Icon className="h-6 w-6 text-gold-dark" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">{title}</h3>
                <p className="mt-2 font-sans text-xs leading-relaxed text-text/80 md:text-sm">{text}</p>
              </StaggerItem>
            ))}
          </StaggerList>
          <div className="mt-8 flex flex-col gap-4 rounded-sm bg-navy px-6 py-5 md:flex-row md:items-center md:justify-between">
            <p className="font-sans text-sm text-ivory/90">
              A valuation prepared by a court-registered expert, following European valuation standards, carries weight with:
            </p>
            <ul className="flex flex-wrap gap-2">
              {["French notaries", "Tax authorities", "Courts"].map((t) => (
                <li key={t} className="rounded-full border border-gold/60 px-3 py-1 font-sans text-xs text-gold-light">{t}</li>
              ))}
            </ul>
          </div>
          <Link href="/en/expertise" className="mt-8 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-gold-dark hover:underline">
            Our areas of expertise <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Working with us */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <p className={eyebrow}>How we work</p>
          <h2 className={h2}>Working with us</h2>
          {rule}
          <StaggerList className="mt-10 grid gap-4 md:grid-cols-3">
            <StaggerItem className="rounded-sm border border-grey-light bg-ivory p-6 transition-[border-color,box-shadow] duration-300 hover:border-gold-dark/50 hover:shadow-elevated">
              <div className="flex gap-2">
                {["EN", "FR"].map((l) => (
                  <span key={l} className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-sans text-xs font-semibold text-ivory">{l}</span>
                ))}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">Speak to us in English</h3>
              <p className="mt-2 font-sans text-sm font-light leading-relaxed text-text">
                Serge Vitali works in both English and French: you can discuss your matter with him in English.
              </p>
            </StaggerItem>
            <StaggerItem className="rounded-sm border border-grey-light bg-ivory p-6 transition-[border-color,box-shadow] duration-300 hover:border-gold-dark/50 hover:shadow-elevated">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-ivory"><FileText className="h-5 w-5" aria-hidden /></span>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">Reports in either language</h3>
              <p className="mt-2 font-sans text-sm font-light leading-relaxed text-text">
                Reports can be written in English or in French, as their intended use requires.
              </p>
            </StaggerItem>
            <StaggerItem className="rounded-sm border border-grey-light bg-ivory p-6 transition-[border-color,box-shadow] duration-300 hover:border-gold-dark/50 hover:shadow-elevated">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-ivory"><MapPin className="h-5 w-5" aria-hidden /></span>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">Where we work</h3>
              <ul className="mt-3 space-y-2 font-sans text-sm font-light text-text">
                <li className="flex items-center gap-3">
                  <span className="rounded-sm border border-gold-dark/60 px-1.5 py-0.5 font-sans text-xs font-semibold text-gold-dark">13</span>
                  Bouches-du-Rhône · offices in Marseille and Aubagne
                </li>
                {[
                  ["83", "Var"],
                  ["84", "Vaucluse"],
                  ["30", "Gard"],
                  ["04", "Alpes-de-Haute-Provence"],
                ].map(([n, d]) => (
                  <li key={n} className="flex items-center gap-3">
                    <span className="rounded-sm border border-gold-dark/60 px-1.5 py-0.5 font-sans text-xs font-semibold text-gold-dark">{n}</span>
                    {d}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          </StaggerList>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ivory">Need a valuation for a French property?</h2>
            <p className="mt-2 font-sans text-sm text-ivory/75">Tell us about your matter, in English or in French.</p>
          </div>
          <Link href="/en/contact" className="inline-flex items-center gap-2 self-start rounded-sm bg-gold px-5 py-3 font-sans text-sm font-semibold text-navy transition hover:bg-gold-light md:self-auto">
            Contact us <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
