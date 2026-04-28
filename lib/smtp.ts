import nodemailer from "nodemailer"

/** Returns a transporter if `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` are set; otherwise `null`. */
export function createSmtpTransport(): nodemailer.Transporter | null {
  const host = process.env.SMTP_HOST?.trim()
  const user = process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS?.trim()
  if (!host || !user || !pass) return null

  const port = Number.parseInt(process.env.SMTP_PORT?.trim() || "587", 10)
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })
}

/** Visible "From" in the inbox; should match what your SMTP provider allows (often the same as SMTP_USER). */
export function getSmtpFromAddress(): string {
  const explicit = process.env.CONTACT_FROM_EMAIL?.trim()
  if (explicit) return explicit
  const user = process.env.SMTP_USER?.trim()
  if (user) return `Singleton Smiles <${user}>`
  return "Singleton Smiles <noreply@invalid>"
}
