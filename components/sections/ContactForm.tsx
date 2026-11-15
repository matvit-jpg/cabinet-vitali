"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  organization: z.string().optional(),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  requestType: z.enum([
    "expertise_judiciaire",
    "evaluation_amiable",
    "valeur_locative",
    "conseil",
    "autre",
  ]),
  message: z.string().min(10, "Message trop court"),
  rgpd: z.boolean().refine((v) => v === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
});

export type ContactFormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      requestType: "expertise_judiciaire",
      rgpd: false,
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
      aria-label="Formulaire de contact"
    >
      <div>
        <label htmlFor="name" className="font-sans text-sm font-medium text-navy">
          Nom complet <span className="text-gold">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className="mt-2 w-full rounded-sm border border-grey-light bg-white px-4 py-3 font-sans text-sm outline-none transition focus:border-gold"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 font-sans text-xs text-red-700" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="organization"
          className="font-sans text-sm font-medium text-navy"
        >
          Société / Étude / Juridiction
        </label>
        <input
          id="organization"
          type="text"
          className="mt-2 w-full rounded-sm border border-grey-light bg-white px-4 py-3 font-sans text-sm outline-none transition focus:border-gold"
          {...register("organization")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="font-sans text-sm font-medium text-navy">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-sm border border-grey-light bg-white px-4 py-3 font-sans text-sm outline-none transition focus:border-gold"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 font-sans text-xs text-red-700" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="font-sans text-sm font-medium text-navy">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-sm border border-grey-light bg-white px-4 py-3 font-sans text-sm outline-none transition focus:border-gold"
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="requestType"
          className="font-sans text-sm font-medium text-navy"
        >
          Type de demande <span className="text-gold">*</span>
        </label>
        <select
          id="requestType"
          className="mt-2 w-full rounded-sm border border-grey-light bg-white px-4 py-3 font-sans text-sm outline-none transition focus:border-gold"
          {...register("requestType")}
        >
          <option value="expertise_judiciaire">Expertise judiciaire</option>
          <option value="evaluation_amiable">Évaluation amiable</option>
          <option value="valeur_locative">Valeur locative</option>
          <option value="conseil">Conseil</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-sans text-sm font-medium text-navy">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full rounded-sm border border-grey-light bg-white px-4 py-3 font-sans text-sm outline-none transition focus:border-gold"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 font-sans text-xs text-red-700" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="rgpd"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-grey-light text-gold focus:ring-gold"
          {...register("rgpd")}
        />
        <label htmlFor="rgpd" className="font-sans text-sm text-grey-mid">
          J&apos;accepte que mes données soient utilisées pour répondre à ma
          demande, conformément à la politique de confidentialité.{" "}
          <span className="text-gold">*</span>
        </label>
      </div>
      <p className="font-sans text-xs leading-relaxed text-grey-mid">
        Les informations recueillies sont traitées par la Société d&apos;exploitation
        du Cabinet Vitali, responsable du traitement, aux seules fins de répondre à
        votre demande et, le cas échéant, d&apos;établir une proposition
        d&apos;intervention. Elles sont conservées trois ans à compter du dernier
        contact. Vous pouvez exercer vos droits d&apos;accès, de rectification,
        d&apos;effacement, de limitation et d&apos;opposition en écrivant à
        sergevitali@cabinetvitali.fr, et introduire une réclamation auprès de la
        CNIL. Voir la{" "}
        <a href="/politique-confidentialite" className="underline decoration-gold underline-offset-2">
          politique de confidentialité
        </a>
        .
      </p>
      {errors.rgpd && (
        <p className="font-sans text-xs text-red-700" role="alert">
          {errors.rgpd.message}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "loading"}
        aria-label="Envoyer le message"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Envoi...
          </>
        ) : (
          "Envoyer"
        )}
      </Button>

      {status === "ok" && (
        <p className="font-sans text-sm text-navy" role="status">
          Message envoyé. Nous vous répondrons sous 48h ouvrées.
        </p>
      )}
      {status === "error" && (
        <p className="font-sans text-sm text-red-700" role="alert">
          Envoi impossible. Réessayez ou contactez-nous par téléphone.
        </p>
      )}
    </form>
  );
}
