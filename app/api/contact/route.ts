import { NextResponse } from "next/server"
import { z } from "zod"

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

  // Production: integrate email (e.g. Resend), CRM, or ticketing.
  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", parsed.data)
  }

  return NextResponse.json({ ok: true })
}
