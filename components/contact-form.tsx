"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  topic: z.string().optional(),
  message: z.string().min(10, "Please share a bit more detail (at least 10 characters)"),
})

export type ContactFormValues = z.infer<typeof contactSchema>

const field = cn(
  "h-10 rounded-md border-slate-200/90 bg-white px-3 text-sm text-slate-900",
  "placeholder:text-slate-400",
  "focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/20",
)

const labelClass = "text-xs font-medium text-slate-600"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
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
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-name" className={labelClass}>
            Name
          </Label>
          <Input id="contact-name" autoComplete="name" className={field} {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-email" className={labelClass}>
            Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            className={field}
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="contact-phone" className={labelClass}>
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </Label>
          <Input id="contact-phone" type="tel" autoComplete="tel" className={field} {...form.register("phone")} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-topic" className={labelClass}>
            Topic <span className="font-normal text-slate-400">(optional)</span>
          </Label>
          <select id="contact-topic" className={cn(field, "cursor-pointer py-0")} {...form.register("topic")}>
            <option value="">General</option>
            <option value="appointment">Appointment</option>
            <option value="new-patient">New patient</option>
            <option value="treatment">Treatment question</option>
            <option value="billing">Billing / insurance</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-message" className={labelClass}>
          Message
        </Label>
        <Textarea
          id="contact-message"
          className={cn(field, "min-h-[120px] resize-y py-2.5 sm:min-h-[140px]")}
          placeholder="How can we help?"
          {...form.register("message")}
        />
        {form.formState.errors.message && (
          <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>

      {status === "success" && (
        <div className="flex gap-2.5 rounded-md border border-emerald-200 bg-emerald-50/90 px-3 py-2.5 text-sm text-emerald-900">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
          <p>
            <span className="font-medium">Sent.</span>{" "}
            <span className="hidden sm:inline">We&apos;ll reply soon — usually within one business day.</span>
            <span className="sm:hidden">We&apos;ll reply soon.</span>
          </p>
        </div>
      )}
      {status === "error" && errorMessage && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-900">{errorMessage}</p>
      )}

      <Button
        type="submit"
        className="h-11 w-full rounded-md bg-primary text-sm font-medium text-primary-foreground shadow-[0_10px_24px_-12px_hsl(var(--primary))] hover:bg-primary/90"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send"
        )}
      </Button>
      <p className="text-center text-[11px] leading-relaxed text-slate-500 sm:text-xs">
        Emergency? Call{" "}
        <a href="tel:+17344297415" className="font-medium text-primary hover:underline">
          (734) 429-7415
        </a>
      </p>
    </form>
  )
}
