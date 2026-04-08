"use client"

import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { TeamMember } from "@/lib/team"

type Props = {
  title: string
  members: TeamMember[]
  groupId: string
}

export function AboutTeamAccordion({ title, members, groupId }: Props) {
  return (
    <div className="mb-12">
      <h3 className="font-serif text-2xl text-slate-900 mb-4">{title}</h3>
      <Accordion type="single" collapsible className="w-full border border-slate-100 rounded-xl px-4 bg-slate-50/40">
        {members.map((m) => (
          <AccordionItem key={`${groupId}-${m.name}`} value={`${groupId}-${m.name}`}>
            <AccordionTrigger className="text-left font-medium text-slate-900 hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                  {m.photo ? (
                    <Image src={m.photo} alt={`${m.name} headshot`} fill className="object-cover" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-slate-500">
                      Foto
                    </span>
                  )}
                </span>
                <span>
                  {m.name}
                  <span className="block text-sm font-normal text-blue-600">{m.role}</span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 sm:h-36 sm:w-36">
                  {m.photo ? (
                    <Image src={m.photo} alt={`${m.name} portrait`} fill className="object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-500">
                      Espacio para foto
                    </div>
                  )}
                </div>
                <p className="text-slate-600 leading-relaxed">{m.bio}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
