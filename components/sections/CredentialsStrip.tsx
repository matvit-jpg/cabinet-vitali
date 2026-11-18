import Image from "next/image";
import Link from "next/link";

const items = [
  { name: "CNEJI", logo: "/images/cneji.jpg" },
  { name: "EEFIC", logo: "/images/eefic.png" },
  { name: "CECAAM", logo: "/images/cecaam.png" },
  { name: "Confédération des experts fonciers", logo: "/images/cnefaf.jpg" },
  { name: "CNEFAF", logo: "/images/cnefaf-logo.png" },
  { name: "REV — TEGoVA", logo: "/images/rev.png" },
  { name: "CFEI", logo: "/images/cfei.jpeg" },
];

/** Bandeau sobre des compagnies et certifications (accueil). */
export function CredentialsStrip() {
  return (
    <section className="border-t border-grey-light bg-ivory py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center font-sans text-xs font-semibold uppercase tracking-widest text-gold-dark">
          Compagnies et certifications
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {items.map((i) => (
            <li
              key={i.name}
              className="relative h-16 w-28 rounded-sm border border-grey-light bg-white p-2 md:h-20 md:w-36"
              title={i.name}
            >
              <Image src={i.logo} alt={i.name} fill sizes="144px" className="object-contain p-2" />
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link href="/cabinet" className="font-sans text-sm text-navy underline-offset-4 hover:text-gold-dark hover:underline">
            Voir le détail sur la page Le Cabinet
          </Link>
        </div>
      </div>
    </section>
  );
}
