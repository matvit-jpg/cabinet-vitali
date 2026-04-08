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

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 lg:grid-cols-2 lg:px-8 lg:items-center">
        {/* Colonne gauche — texte */}
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ivory md:text-4xl">
            Une mission au service de la justice
          </h2>
          <div className="mt-6 space-y-4 font-sans text-base font-light leading-relaxed text-ivory/80">
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
        <div className="flex flex-col items-center">
          {/* Ligne décorative dorée */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-16 bg-gold/60" />
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Reconnaissance professionnelle
            </span>
            <div className="h-px w-16 bg-gold/60" />
          </div>

          <a
            href="https://www.decideurs-magazine.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            aria-label="Classement Décideurs Magazine 2025"
          >
            <div className="rounded-sm border border-gold/30 bg-white/95 p-1 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/decideurs.jpg"
                alt="Décideurs Magazine — Pratique réputée 2025, Immobilier / Expertise judiciaire"
                width={480}
                height={240}
                className="block object-contain"
              />
            </div>
          </a>

          <p className="mt-8 font-sans text-sm font-light text-ivory/70">
            Classement <span className="text-ivory/90">Décideurs Leaders League</span> · Édition 2025
          </p>
        </div>
      </div>
    </div>
  );
}
