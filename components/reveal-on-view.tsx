"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealOnViewProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  distance?: "sm" | "md"
  subtleBlur?: boolean
}

export function RevealOnView({
  children,
  className,
  delayMs = 0,
  distance = "sm",
  subtleBlur = false,
}: RevealOnViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof window === "undefined") return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.07, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const dist = distance === "sm" ? 14 : 22

  const style: CSSProperties = {
    transitionDelay: shown ? `${delayMs}ms` : "0ms",
    transitionProperty: "opacity, transform, filter",
    transitionDuration: "1000ms",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    ...(shown
      ? {
          opacity: 1,
          filter: subtleBlur ? "blur(0)" : undefined,
          /* Sin transform al estar visible — evita romper sticky en columnas */
          transform: "none",
        }
      : {
          opacity: 0,
          transform: `translate3d(0, ${dist}px, 0)`,
          ...(subtleBlur ? { filter: "blur(6px)" } : {}),
        }),
  }

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:!transition-none",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}
