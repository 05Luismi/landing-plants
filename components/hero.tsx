import {
  ArrowRight,
  Clock3,
  Droplets,
  Leaf,
  MapPin,
  ShieldCheck,
  Star,
  SunMedium,
} from "lucide-react"

import { ReservationButton } from "@/components/reservation-button"

export function Hero() {
  return (
    <header id="inicio" className="relative isolate h-auto w-full overflow-hidden">
      <video autoPlay muted loop playsInline preload="metadata" poster="/img/fondo%20de%20hero.webp" aria-hidden="true" tabIndex={-1} className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden">
        <source src="/img/video/paisaje1.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f0f2e9]/90 via-[#f0f2e9]/65 to-[#f0f2e9]/25" />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-[min(92vw,90rem)] gap-10 sm:min-h-[calc(100svh-4.5rem)] lg:min-h-[min(calc(100svh-5rem),54rem)] px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[clamp(2rem,4vw,4rem)] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1.5 text-xs font-medium text-emerald-800 shadow-sm">
            <Leaf className="h-3.5 w-3.5" />
            Alojamiento temporal para plantas
          </div>

          <h1 className="max-w-[clamp(34rem,44vw,48rem)] text-[clamp(2.5rem,4.8vw,4.5rem)] font-black leading-[1.05] tracking-[-0.06em] text-slate-900">
            Tu planta no se queda sola cuando te vas.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            En Hotel by Plants cuidamos tus plantas como si fueran nuestras: con luz, humedad,
            riego y seguimiento visual para que vuelvan a casa felices.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ReservationButton className="h-auto rounded-full bg-[#294e3b] px-6 py-4 text-base font-semibold text-white hover:bg-[#1c3b2c]">
              Solicitar estancia
              <ArrowRight className="ml-2 h-4 w-4" />
            </ReservationButton>
            <a href="#planes" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/85 px-6 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50">
              Ver planes
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-700" />
              Cuidado profesional
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-700" />
              Recogida a domicilio
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute left-8 top-10 h-32 w-32 rounded-full bg-emerald-200/60 blur-3xl" />
          <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-lime-200/70 blur-3xl" />

          <div className="relative w-full max-w-[clamp(28rem,34vw,38rem)] rounded-[2rem] border border-emerald-100 bg-[#f8faf4] p-4 shadow-[0_30px_80px_rgba(36,75,58,0.16)]">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#eef2e8_0%,#e5ece3_45%,#dfe8dd_100%)] p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-emerald-800">
                  Plant care home
                </span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800">
                  <Star className="h-3.5 w-3.5 fill-current" /> 4.9/5
                </span>
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-white/80 p-5 shadow-inner shadow-emerald-100">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Estancia</p>
                    <h2 className="mt-1 text-2xl font-bold">Casa Verde</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                    <Leaf className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                    <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-emerald-700" />Duración</span>
                    <strong className="font-semibold text-slate-800">15 días</strong>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                    <span className="flex items-center gap-2"><SunMedium className="h-4 w-4 text-emerald-700" />Luz</span>
                    <strong className="font-semibold text-slate-800">Óptima</strong>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                    <span className="flex items-center gap-2"><Droplets className="h-4 w-4 text-emerald-700" />Humedad</span>
                    <strong className="font-semibold text-slate-800">Controlada</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl bg-[#294e3b] p-4 text-white shadow-lg shadow-emerald-900/20">
                  <p className="text-2xl font-black">120+</p>
                  <p className="text-xs text-emerald-50">plantas cuidadas</p>
                </div>
                <div className="rounded-2xl bg-[#dfe6bd] p-4 text-slate-800">
                  <p className="text-2xl font-black">99%</p>
                  <p className="text-xs text-slate-600">satisfacción</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}
