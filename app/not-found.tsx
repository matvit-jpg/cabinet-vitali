import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-navy">Page introuvable</h1>
      <p className="mt-4 max-w-md font-sans text-grey-mid">
        La page demandée n&apos;existe pas ou a été déplacée.
      </p>
      <Button href="/" variant="primary" className="mt-8">
        Retour à l&apos;accueil
      </Button>
      <Link
        href="/contact"
        className="mt-4 font-sans text-sm text-navy underline decoration-gold underline-offset-4"
      >
        Contact
      </Link>
    </div>
  );
}
