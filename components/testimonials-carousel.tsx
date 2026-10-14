"use client"

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Nos fuimos dos semanas y volvimos con nuestras plantas perfectas. Fue una tranquilidad enorme y el seguimiento visual nos encantó.",
    author: "Laura M.",
    detail: "Apartamento en Barcelona",
  },
  {
    quote: "La reserva fue súper fácil y la comunicación mucho más cercana de lo que esperaba. Un servicio útil y muy bien pensado.",
    author: "Mario P.",
    detail: "Propietario de jardín urbano",
  },
  {
    quote: "Tienen un trato muy cuidado con cada planta. Para especies más delicadas, la atención premium ha sido imprescindible.",
    author: "Elena G.",
    detail: "Dueña de plantas de interior",
  },
  {
    quote: "Pude viajar tranquila sabiendo que mis plantas tenían luz y riego adaptados. Las recibí en casa tal como las dejé.",
    author: "Clara R.",
    detail: "Colección de plantas tropicales",
  },
  {
    quote: "La recogida fue puntual y las actualizaciones con fotos me ayudaron a disfrutar del viaje sin preocuparme por el riego.",
    author: "Javier T.",
    detail: "Viaje de dos semanas",
  },
  {
    quote: "Por fin encontré una opción cómoda para mis plantas grandes. La entrega fue sencilla y todo llegó en muy buen estado.",
    author: "Marta L.",
    detail: "Piso en Valencia",
  },
  {
    quote: "Me explicaron cómo cuidar mejor una especie delicada y estuvieron pendientes durante toda la estancia.",
    author: "Diego S.",
    detail: "Plantas de interior",
  },
  {
    quote: "Un servicio cercano y práctico. La reserva, la recogida y la devolución fueron muy fáciles de coordinar.",
    author: "Nerea C.",
    detail: "Escapada de fin de semana",
  },
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const pointerStart = useRef<number | null>(null)
  const active = testimonials[activeIndex]

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [isPaused])

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      showPrevious()
    }
    if (event.key === "ArrowRight") {
      event.preventDefault()
      showNext()
    }
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return
    const distance = event.clientX - pointerStart.current
    pointerStart.current = null
    if (Math.abs(distance) < 50) return
    if (distance > 0) showPrevious()
    else showNext()
  }

  return (
    <div
      className="group/carousel relative mx-auto max-w-4xl px-11 sm:px-16"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Opiniones de clientes"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false)
      }}
      onKeyDown={handleKeyDown}
      onPointerDown={(event) => { pointerStart.current = event.clientX }}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { pointerStart.current = null }}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon-lg"
        onClick={showPrevious}
        aria-label="Ver opinión anterior"
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-emerald-900/10 bg-white/90 text-[#294e3b] opacity-25 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#294e3b] hover:opacity-100 focus-visible:opacity-100 group-hover/carousel:opacity-100"
      >
        <ArrowLeft aria-hidden="true" />
      </Button>

      <Card key={active.author} className="testimonial-slide min-h-[300px] rounded-[2rem] border-0 bg-white shadow-lg shadow-emerald-950/5 ring-1 ring-emerald-950/5 sm:min-h-[260px]">
        <CardContent className="flex h-full min-h-[300px] flex-col justify-between p-7 sm:min-h-[260px] sm:p-10" aria-live="polite">
          <div>
            <div className="mb-5 flex gap-1 text-amber-400" aria-label="5 de 5 estrellas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="text-lg leading-8 text-slate-700 sm:text-xl">“{active.quote}”</p>
          </div>
          <div className="mt-7 border-t border-slate-200 pt-5">
            <p className="font-bold text-slate-900">{active.author}</p>
            <p className="text-sm text-slate-500">{active.detail}</p>
          </div>
        </CardContent>
      </Card>

      <Button
        type="button"
        variant="ghost"
        size="icon-lg"
        onClick={showNext}
        aria-label="Ver opinión siguiente"
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-emerald-900/10 bg-white/90 text-[#294e3b] opacity-25 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#294e3b] hover:opacity-100 focus-visible:opacity-100 group-hover/carousel:opacity-100"
      >
        <ArrowRight aria-hidden="true" />
      </Button>

      <div className="mt-6 flex items-center justify-center gap-2" aria-label="Seleccionar opinión">
        {testimonials.map((item, index) => (
          <button
            key={item.author}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver opinión ${index + 1} de ${testimonials.length}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294e3b] ${index === activeIndex ? "w-7 bg-[#294e3b]" : "w-2.5 bg-emerald-900/20 hover:bg-emerald-700/50"}`}
          />
        ))}
        <span className="sr-only">Opinión {activeIndex + 1} de {testimonials.length}</span>
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">Opiniones de ejemplo: sustitúyelas por reseñas verificadas antes de publicar.</p>
    </div>
  )
}
