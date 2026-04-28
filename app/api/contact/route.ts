import { NextResponse } from "next/server"
import { z } from "zod"
import { buildContactEmailContent, getContactFormRecipient } from "@/lib/contact-mail"
import { createSmtpTransport, getSmtpFromAddress } from "@/lib/smtp"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  topic: z.string().optional(),
  message: z.string().min(10, "Message should be at least 10 characters"),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    const flat = parsed.error.flatten()
    return NextResponse.json(
      {
        error: "Validation failed",
        fieldErrors: flat.fieldErrors,
      },
      { status: 400 },
    )
  }

  const transport = createSmtpTransport()
  if (!transport) {
    console.error(
      "[contact] Missing SMTP config — set SMTP_HOST, SMTP_USER, and SMTP_PASS (see .env.example)",
    )
    return NextResponse.json(
      {
        error:
          "This form cannot send email yet (server not configured). Please call (734) 429-7415 or email the office directly.",
      },
      { status: 503 },
    )
  }

  const recipient = getContactFormRecipient()
  const { subject, text, html } = buildContactEmailContent(parsed.data)
  const from = getSmtpFromAddress()

  try {
    await transport.sendMail({
      from,
      to: recipient,
      replyTo: parsed.data.email,
      subject,
      text,
      html,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error("[contact] SMTP send error:", message)
    return NextResponse.json(
      { error: "Could not send your message. Please call us or try again later." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
