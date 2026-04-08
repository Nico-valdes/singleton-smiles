"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl")
    if (!gl) return

    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fragmentShaderSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        float noise1 = snoise(vec2(uv.x * 1.2 + u_time * 0.03, uv.y * 1.2 - u_time * 0.02));
        float noise2 = snoise(vec2(uv.x * 1.8 - u_time * 0.025, uv.y * 1.8 + u_time * 0.015));
        float noise3 = snoise(vec2(uv.x * 0.6 + u_time * 0.015, uv.y * 0.9 - u_time * 0.01));
        
        float combined = (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2);
        
        vec3 pureWhite = vec3(1.0, 1.0, 1.0);
        vec3 softWhite = vec3(0.98, 0.99, 1.0);
        vec3 paleBlue = vec3(0.94, 0.97, 1.0);
        vec3 lightBlue = vec3(0.85, 0.92, 0.98);
        vec3 softBlue = vec3(0.75, 0.85, 0.95);
        
        vec3 color = pureWhite;
        
        float wave1 = smoothstep(-0.4, 0.6, combined + uv.y * 0.2 - 0.1);
        color = mix(color, softWhite, wave1 * 0.7);
        
        float wave2 = smoothstep(-0.3, 0.7, noise1 * 0.6 + noise3 * 0.4 + (1.0 - uv.x) * 0.3);
        color = mix(color, paleBlue, wave2 * 0.5);
        
        float wave3 = smoothstep(-0.2, 0.8, noise2 + (1.0 - uv.y) * 0.4 + uv.x * 0.2 - 0.3);
        color = mix(color, lightBlue, wave3 * 0.35);
        
        float wave4 = smoothstep(0.1, 0.9, noise1 * 0.5 + noise2 * 0.5 + (1.0 - uv.y) * 0.6 - 0.2);
        color = mix(color, softBlue, wave4 * 0.2);
        
        float vignette = 1.0 - length((uv - 0.5) * vec2(0.5, 0.4)) * 0.15;
        color *= vignette;
        
        color = clamp(color, 0.0, 1.0);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program)
      return
    }
    gl.useProgram(program)

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, "a_position")
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution")
    const timeLocation = gl.getUniformLocation(program, "u_time")

    function resize() {
      if (!canvas) return
      const displayWidth = canvas.clientWidth
      const displayHeight = canvas.clientHeight
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth
        canvas.height = displayHeight
        gl?.viewport(0, 0, displayWidth, displayHeight)
      }
    }

    let animationId: number
    const startTime = Date.now()

    function render() {
      resize()
      const time = (Date.now() - startTime) / 1000
      gl?.uniform2f(resolutionLocation, canvas?.width ?? 0, canvas?.height ?? 0)
      gl?.uniform1f(timeLocation, time)
      gl?.drawArrays(gl.TRIANGLES, 0, 6)
      animationId = requestAnimationFrame(render)
    }

    render()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-x-hidden">
      {/* Shader Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-4 pb-24 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:py-32 lg:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge — hidden on small screens */}
          <div
            className="animate-hero-enter mb-0 hidden max-w-[95vw] items-center gap-2 rounded-full border border-slate-200/50 bg-white/85 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur-sm sm:mb-10 sm:inline-flex"
            style={{ animationDelay: "40ms" }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500 animate-pulse motion-reduce:animate-none" />
            <span className="text-slate-700">Trusted dental care in Saline since 1985</span>
          </div>

          {/* Main Heading */}
          <h1
            className="animate-hero-enter mb-6 font-serif text-[2.35rem] leading-[1.08] tracking-tight text-slate-900 sm:mb-8 sm:mt-0 sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: "120ms" }}
          >
            Modern, <span className="italic text-blue-600">Compassionate</span>
            <br />
            Dentistry
          </h1>

          {/* Subtitle */}
          <p
            className="animate-hero-enter mx-auto mb-10 max-w-2xl px-1 text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
            style={{ animationDelay: "200ms" }}
          >
            Anxiety-free care with advanced technology — same-day crowns, gentle sedation, 
            and a team that treats you like family.
          </p>

          {/* CTAs — relleno izquierda → derecha al hover (un solo hijo con asChild) */}
          <style jsx global>{`
            /* Sin transition-all del Button: solo sombra/translate; el único “relleno” animado es .hero-cta-fill */
            .hero-cta {
              position: relative;
              overflow: hidden;
              isolation: isolate;
              transition-property: transform, box-shadow !important;
              transition-duration: 500ms;
              transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
            }
            .hero-cta--primary,
            .hero-cta--primary:hover,
            .hero-cta--primary:focus-visible {
              background-color: #2563eb !important;
            }
            .hero-cta--outline,
            .hero-cta--outline:hover,
            .hero-cta--outline:focus-visible {
              background-color: rgb(255 255 255 / 0.85) !important;
            }
            .hero-cta-fill {
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              width: 0;
              z-index: 0;
              border-radius: inherit;
              transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
            }
            @media (prefers-reduced-motion: reduce) {
              .hero-cta-fill {
                transition-duration: 0.15s;
              }
            }
            .hero-cta--primary .hero-cta-fill {
              background: #fff;
            }
            .hero-cta--outline .hero-cta-fill {
              background: #2563eb;
            }
            .hero-cta--primary:hover .hero-cta-fill,
            .hero-cta--primary:focus-visible .hero-cta-fill,
            .hero-cta--outline:hover .hero-cta-fill,
            .hero-cta--outline:focus-visible .hero-cta-fill {
              width: 100%;
            }
            .hero-cta-content {
              position: relative;
              z-index: 1;
            }
            .hero-cta--primary .hero-cta-content {
              color: #fff;
            }
            .hero-cta--outline .hero-cta-content {
              color: #2563eb;
            }
            .hero-cta--primary:hover .hero-cta-content,
            .hero-cta--primary:focus-visible .hero-cta-content {
              color: #2563eb;
            }
            .hero-cta--outline:hover .hero-cta-content,
            .hero-cta--outline:focus-visible .hero-cta-content {
              color: #fff;
            }
            .hero-cta--outline:hover,
            .hero-cta--outline:focus-visible {
              border-color: rgb(255 255 255);
            }
          `}</style>
          <div
            className="animate-hero-enter mx-auto mb-14 flex w-full max-w-lg flex-row items-stretch gap-2 sm:mb-16 sm:max-w-none sm:items-center sm:justify-center sm:gap-4"
            style={{ animationDelay: "280ms" }}
          >
            <Button
              asChild
              size="lg"
              className="hero-cta hero-cta--primary h-14 min-w-0 flex-1 rounded-full border border-blue-600/20 px-4 text-sm shadow-lg shadow-blue-600/25 hover:translate-y-px hover:shadow-md motion-reduce:hover:translate-y-0 sm:w-auto sm:flex-none sm:px-10 sm:text-base"
            >
              <Link href="/contact" className="relative inline-flex min-w-0 items-center justify-center gap-1">
                <span className="hero-cta-fill pointer-events-none" aria-hidden />
                <span className="hero-cta-content flex min-w-0 items-center justify-center gap-1">
                  <span className="min-w-0 truncate sm:whitespace-normal">Book your appointment</span>
                  <ArrowRight className="h-5 w-5 shrink-0 max-sm:hidden" strokeWidth={2} />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hero-cta hero-cta--outline h-14 min-w-0 flex-1 rounded-full border-2 border-white/90 px-3 text-xs tabular-nums shadow-sm shadow-slate-900/5 backdrop-blur-sm hover:translate-y-px hover:shadow-md motion-reduce:hover:translate-y-0 sm:w-auto sm:flex-none sm:px-10 sm:text-base hover:!bg-white/85"
            >
              <Link
                href="tel:+17344297415"
                className="relative inline-flex items-center justify-center whitespace-nowrap"
              >
                <span className="hero-cta-fill pointer-events-none" aria-hidden />
                <span className="hero-cta-content">(734) 429-7415</span>
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div
            className="animate-hero-enter border-t border-slate-200/50 pt-8 sm:pt-10"
            style={{ animationDelay: "360ms" }}
          >
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-5 sm:w-5" />
                ))}
                <span className="ml-2 text-sm font-semibold text-slate-900">5.0 Google</span>
              </div>
              <p className="max-w-[20rem] text-center text-xs leading-relaxed text-slate-600 sm:max-w-none sm:text-sm">
                <span>150+ reviews</span>
                <span className="text-slate-300"> · </span>
                <span>Since 1985</span>
                <span className="text-slate-300"> · </span>
                <span>Same-day visits</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="pointer-events-none absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 max-sm:bottom-4">
        <span className="text-[10px] uppercase tracking-widest motion-reduce:opacity-70 sm:text-xs">
          Scroll
        </span>
        <div className="animate-scroll-hint h-6 w-px bg-gradient-to-b from-slate-400 to-transparent sm:h-8 motion-reduce:animate-none" />
      </div>
    </section>
  )
}
