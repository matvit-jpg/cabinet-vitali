import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <SectionWrapper className="bg-navy">
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
    </SectionWrapper>
  );
}