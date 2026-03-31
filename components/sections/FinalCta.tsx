import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ivory md:text-4xl">
          Prêt à sécuriser votre dossier ?
        </h2>
        <p className="mt-4 font-sans text-lg font-light text-ivory/85">
          Prendre contact — réponse sous 48h ouvrées.
        </p>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Prendre contact
          </Button>
        </div>
      </div>
      {/* Séparation dorée avant le footer */}
      <div className="mx-auto mt-20 max-w-7xl px-4 lg:px-8">
        <div className="border-t border-gold/30" />
      </div>
    </section>
  );
}