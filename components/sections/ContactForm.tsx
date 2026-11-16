"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

type Lang = "fr" | "en";

const T = {
  fr: {
    formLabel: "Formulaire de contact",
    name: "Nom complet",
    organization: "Société / Étude / Juridiction",
    email: "Email",
    phone: "Téléphone",
    requestType: "Type de demande",
    types: {
      expertise_judiciaire: "Expertise judiciaire",
      evaluation_amiable: "Évaluation amiable",
      valeur_locative: "Valeur locative",
      conseil: "Conseil",
      autre: "Autre",
    },
    message: "Message",
    errName: "Nom requis",
    errEmail: "Email invalide",
    errMessage: "Message trop court",
    errRgpd: "Vous devez accepter la politique de confidentialité",
    consent:
      "J'accepte que mes données soient utilisées pour répondre à ma demande, conformément à la politique de confidentialité.",
    notice:
      "Les informations recueillies sont traitées par la Société d'exploitation du Cabinet Vitali, responsable du traitement, aux seules fins de répondre à votre demande et, le cas échéant, d'établir une proposition d'intervention. Elles sont conservées trois ans à compter du dernier contact. Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, de limitation et d'opposition en écrivant à sergevitali@cabinetvitali.fr, et introduire une réclamation auprès de la CNIL. Voir la",
    policy: "politique de confidentialité",
    send: "Envoyer",
    sendAria: "Envoyer le message",
    sending: "Envoi...",
    ok: "Message envoyé. Nous vous répondrons dans les meilleurs délais.",
    error: "Envoi impossible. Réessayez ou contactez-nous par téléphone.",
  },
  en: {
    formLabel: "Contact form",
    name: "Full name",
    organization: "Company / Firm",
    email: "Email",
    phone: "Phone",
    requestType: "Type of request",
    types: {
      expertise_judiciaire: "Court-appointed expertise",
      evaluation_amiable: "Private valuation",
      valeur_locative: "Rental value",
      conseil: "Advice",
      autre: "Other",
    },
    message: "Message",
    errName: "Name required",
    errEmail: "Invalid email address",
    errMessage: "Message too short",
    errRgpd: "You must accept the privacy policy",
    consent: "I agree that my data may be used to answer my request, in accordance with the privacy policy.",
    notice:
      "Your information is processed by the Société d'exploitation du Cabinet Vitali, as data controller, solely to answer your request and, where appropriate, to prepare a proposal. It is kept for three years from the last contact. You may exercise your rights of access, rectification, erasure, restriction and objection by writing to sergevitali@cabinetvitali.fr, and lodge a complaint with the CNIL (French data protection authority). See the",
    policy: "privacy policy (in French)",
    send: "Send",
    sendAria: "Send the message",
    sending: "Sending...",
    ok: "Message sent. We will reply as soon as possible.",
    error: "The message could not be sent. Please try again or call us.",
  },
} as const;

function makeSchema(t: (typeof T)[Lang]) {
  return z.object({
    name: z.string().min(2, t.errName),
    organization: z.string().optional(),
    email: z.string().email(t.errEmail),
    phone: z.string().optional(),
    requestType: z.enum(["expertise_judiciaire", "evaluation_amiable", "valeur_locative", "conseil", "autre"]),
    message: z.string().min(10, t.errMessage),
    rgpd: z.boolean().refine((v) => v === true, { message: t.errRgpd }),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof makeSchema>>;

const field =
  "mt-2 w-full rounded-sm border border-grey-light bg-white px-4 py-3 font-sans text-sm outline-none transition focus:border-gold";

export function ContactForm({ lang = "fr" }: { lang?: Lang }) {
  const t = T[lang];
  const schema = useMemo(() => makeSchema(t), [t]);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { requestType: lang === "en" ? "evaluation_amiable" : "expertise_judiciaire", rgpd: false },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("loading");
    try {
      const payload = lang === "en" ? { ...data, message: `[Formulaire anglais]\n${data.message}` } : data;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate aria-label={t.formLabel}>
      <div>
        <label htmlFor="name" className="font-sans text-sm font-medium text-navy">
          {t.name} <span className="text-gold-dark">*</span>
        </label>
        <input id="name" type="text" autoComplete="name" className={field} {...register("name")} />
        {errors.name && (
          <p className="mt-1 font-sans text-xs text-red-700" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="organization" className="font-sans text-sm font-medium text-navy">
          {t.organization}
        </label>
        <input id="organization" type="text" className={field} {...register("organization")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="font-sans text-sm font-medium text-navy">
            {t.email} <span className="text-gold-dark">*</span>
          </label>
          <input id="email" type="email" autoComplete="email" className={field} {...register("email")} />
          {errors.email && (
            <p className="mt-1 font-sans text-xs text-red-700" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="font-sans text-sm font-medium text-navy">
            {t.phone}
          </label>
          <input id="phone" type="tel" autoComplete="tel" className={field} {...register("phone")} />
        </div>
      </div>

      <div>
        <label htmlFor="requestType" className="font-sans text-sm font-medium text-navy">
          {t.requestType} <span className="text-gold-dark">*</span>
        </label>
        <select id="requestType" className={field} {...register("requestType")}>
          {(Object.keys(t.types) as (keyof typeof t.types)[]).map((k) => (
            <option key={k} value={k}>
              {t.types[k]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-sans text-sm font-medium text-navy">
          {t.message} <span className="text-gold-dark">*</span>
        </label>
        <textarea id="message" rows={5} className={field} {...register("message")} />
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
          className="mt-1 h-4 w-4 rounded border-grey-light text-gold-dark focus:ring-gold"
          {...register("rgpd")}
        />
        <label htmlFor="rgpd" className="font-sans text-sm text-grey-mid">
          {t.consent} <span className="text-gold-dark">*</span>
        </label>
      </div>
      <p className="font-sans text-xs leading-relaxed text-grey-mid">
        {t.notice}{" "}
        <a href="/politique-confidentialite" className="underline decoration-gold underline-offset-2">
          {t.policy}
        </a>
        .
      </p>
      {errors.rgpd && (
        <p className="font-sans text-xs text-red-700" role="alert">
          {errors.rgpd.message}
        </p>
      )}

      <Button type="submit" variant="primary" disabled={status === "loading"} aria-label={t.sendAria}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            {t.sending}
          </>
        ) : (
          t.send
        )}
      </Button>

      {status === "ok" && (
        <p className="font-sans text-sm text-navy" role="status">
          {t.ok}
        </p>
      )}
      {status === "error" && (
        <p className="font-sans text-sm text-red-700" role="alert">
          {t.error}
        </p>
      )}
    </form>
  );
}
