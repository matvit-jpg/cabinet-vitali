import Image from "next/image";

export function DecideursLogo() {
  return (
    <div className="relative overflow-hidden py-24">
      {/* Photo de fond */}
      <Image
        src="/images/fond-decideurs.jpg"
        alt=""
        fill
        className="object-cover"
      />
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 grid grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-0 lg:items-center">
        {/* Colonne gauche — texte */}
        <div className="lg:pl-16 xl:pl-24">
          <h2 className="font-display text-xl font-semibold tracking-tight text-ivory md:text-4xl">
            Expertise et Stratégie Immobilière
          </h2>
          <div className="mt-6 space-y-4 font-sans text-sm font-light leading-relaxed text-ivory/80 md:text-base">
            <p>
              Expert inscrit près la Cour d&apos;appel d&apos;Aix-en-Provence
              et la Cour administrative d&apos;appel de Marseille, Serge VITALI
              intervient dans tous les domaines de l&apos;expertise immobilière :
              évaluation de biens, fixation de valeurs locatives, détermination
              d&apos;indemnités, analyse de préjudices et accompagnement
              stratégique en contentieux ou en prévention des litiges.
            </p>
            <p>
              Rigueur juridique, connaissance approfondie du marché, rapports
              motivés et exploitables : nous vous apportons des conclusions
              fiables pour éclairer vos décisions.
            </p>
          </div>
        </div>

        {/* Colonne droite — badge Décideurs */}
        <div className="flex flex-col items-center lg:pr-16 xl:pr-24">
          {/* Ligne décorative dorée */}
          <div className="flex items-center gap-4 mb-8 w-full">
            <div className="h-px flex-1 bg-gold/60" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Reconnaissance professionnelle
            </span>
            <div className="h-px flex-1 bg-gold/60" />
          </div>

          <a
            href="https://www.leadersleague.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full max-w-xl"
            aria-label="Classement Décideurs Leaders League — Immobilier, Expertise judiciaire – Commerce, classé chaque année depuis 2021"
          >
            <div className="relative flex flex-col items-center overflow-hidden rounded-sm border border-gold/40 bg-navy/80 px-6 py-10 text-center shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.02] md:px-12">
              {/* Filets d'angle dorés */}
              <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-gold/70" />
              <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r border-t border-gold/70" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b border-l border-gold/70" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b border-r border-gold/70" />

              <div className="rounded-sm bg-white px-4 py-2 shadow-md">
                <Image
                  src="/images/leaders-league-logo.png"
                  alt="Décideurs Leaders League"
                  width={304}
                  height={106}
                  className="h-auto w-48 md:w-56"
                />
              </div>
              <p className="mt-5 font-display text-3xl font-semibold text-ivory md:text-4xl">
                Immobilier
              </p>
              <p className="mt-1 font-sans text-sm font-light uppercase tracking-widest text-ivory/80">
                Expertise judiciaire – Commerce
              </p>

              <div className="my-7 flex w-full max-w-xs items-center gap-3">
                <span className="h-px flex-1 bg-gold/50" />
                <span className="text-gold">✦</span>
                <span className="h-px flex-1 bg-gold/50" />
              </div>

              <p className="font-display text-2xl italic text-gold-light md:text-3xl">
                Pratique réputée
              </p>
              <p className="mt-2 font-sans text-xs font-light text-ivory/70">
                Classé chaque année depuis 2021
              </p>

              <ul className="mt-6 flex flex-wrap justify-center gap-1.5">
                {[2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
                  <li
                    key={y}
                    className={`rounded-sm border px-2.5 py-1 font-sans text-xs tracking-wider ${
                      y === 2026
                        ? "border-gold bg-gold font-semibold text-navy"
                        : "border-gold/40 text-ivory/80"
                    }`}
                  >
                    {y}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex w-full flex-col items-center justify-center gap-1 border-t border-ivory/10 pt-6 sm:flex-row sm:gap-6">
                <span className="font-display text-lg tracking-wide text-ivory">CABINET VITALI</span>
                <span className="hidden h-4 w-px bg-gold/50 sm:block" />
                <span className="font-display text-lg italic text-ivory/90">Serge Vitali</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
