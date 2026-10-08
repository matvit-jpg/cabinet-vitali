import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";
import { SITE } from "@/lib/site";

const bodySchema = z.object({
  name: z.string().min(2),
  organization: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  requestType: z.string(),
  message: z.string().min(10),
  rgpd: z.boolean().refine((v) => v === true),
});

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY missing — contact form not sent");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_EMAIL || SITE.email;

  const text = [
    `Nom: ${data.name}`,
    data.organization && `Structure: ${data.organization}`,
    `Email: ${data.email}`,
    data.phone && `Téléphone: ${data.phone}`,
    `Type: ${data.requestType}`,
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

    try {
      const { data: sent, error } = await resend.emails.send({
        from: process.env.RESEND_FROM || "Contact <onboarding@resend.dev>",
        to: [to],
        replyTo: data.email,
        subject: `[${SITE.cabinetFull}] Contact — ${data.requestType}`,
        text,
      });
  
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: "Send failed", detail: error }, { status: 502 });
      }
  
      console.log("Resend OK:", sent);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }

  return NextResponse.json({ ok: true });
}
