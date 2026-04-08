"use client"

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
              <span>
                {m.name}
                <span className="block text-sm font-normal text-blue-600">{m.role}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 leading-relaxed pb-4">{m.bio}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
