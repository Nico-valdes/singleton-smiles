"use client"

import { useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Muy sutil al cargar páginas internas (SiteShell) */
export function PageEnter({ children, className }: { children: ReactNode; className?: string }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReady(true)
      return
    }
    const id = window.requestAnimationFrame(() => setReady(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <div
      className={cn(
        "motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:!transition-none",
        "transition-[opacity,transform] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        ready ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  )
}
