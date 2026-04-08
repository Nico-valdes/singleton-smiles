"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please share a bit more detail (at least 10 characters)"),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setStatus("idle")
    setErrorMessage(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus("error")
        setErrorMessage(
          typeof json?.error === "string" ? json.error : "Something went wrong. Please call us or try again.",
        )
        return
      }
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setErrorMessage("Network error. Please try again or call (734) 429-7415.")
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name</Label>
          <Input id="contact-name" autoComplete="name" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input id="contact-email" type="email" autoComplete="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-phone">Phone (optional)</Label>
        <Input id="contact-phone" type="tel" autoComplete="tel" {...form.register("phone")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">How can we help?</Label>
        <Textarea
          id="contact-message"
          className="min-h-[140px] resize-y"
          {...form.register("message")}
        />
        {form.formState.errors.message && (
          <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>

      {status === "success" && (
        <p className="text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
          Thank you — we received your message and will be in touch soon.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="text-sm text-destructive bg-destructive/5 border border-destructive/20 rounded-lg px-4 py-3">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        className="h-12 w-full rounded-full bg-blue-600 px-8 hover:bg-blue-700"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
      <p className="text-xs text-slate-500">
        For urgent needs, call{" "}
        <a href="tel:+17344297415" className="text-blue-600 hover:underline">
          (734) 429-7415
        </a>
        .
      </p>
    </form>
  )
}
