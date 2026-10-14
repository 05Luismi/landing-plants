import {
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Droplets,
  Leaf,
  MapPin,
  ShieldCheck,
  Star,
  SunMedium,
} from "lucide-react"
import Image from "next/image"

import { ReservationForm } from "@/components/reservation-form"
import { FaqAccordion } from "@/components/faq-accordion"
import { ReservationButton } from "@/components/reservation-button"
import { ReservationRain } from "@/components/reservation-rain"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const benefitPoints = [
  "Recogida a domicilio sin complicarte la vida",
  "Control visual con fotos semanales",
  "Ambiente cuidado con luz, humedad y riego",
  "Devolución en perfectas condiciones al llegar",
]

const steps = [
  {
    number: "01",
    title: "Reserva online",
    text: "Indica tus fechas, el número de plantas y la dirección de recogida.",
  },
  {
    number: "02",
    title: "Recogida y alojamiento",
    text: "Nosotros recogemos tus plantas y las dejamos en un espacio pensado para cuidarlas.",
  },
  {
    number: "03",
    title: "Fotos y devolución",
    text: "Te enviamos actualizaciones para que veas que siguen en buen estado y te las devolvemos listas.",
  },
]

const packages = [
  {
    name: "Estancia breve",
    price: "desde 19€",
    description: "Ideal para vacaciones cortas o fines de semana largos.",
    features: ["Recogida y entrega", "1 foto semanal", "Seguimiento básico"],
  },
  {
    name: "Estancia completa",
    price: "desde 39€",
    description: "La opción más popular para viajes de 1 a 3 semanas.",
    features: ["Riego personalizado", "2 fotos semanales", "Control de humedad y luz"],
    featured: true,
  },
  {
    name: "Cuidado premium",
    price: "desde 59€",
    description: "Para plantas de colección, tropicales o espacios muy exigentes.",
    features: ["Consulta previa", "Reporte visual detallado", "Atención prioritaria"],
  },
]

const reasons = [
  {
    icon: SunMedium,
    title: "Ambiente optimizado",
    text: "Nuestras estancias están diseñadas para ofrecer luz, temperatura y ventilación adecuadas para cada especie.",
  },
  {
    icon: Droplets,
    title: "Riego inteligente",
    text: "No hay plantitas olvidadas: controlamos cada necesidad para mantenerlas sanas y equilibradas.",
  },
  {
    icon: Camera,
    title: "Seguimiento visual",
    text: "Cada cliente recibe fotografías para comprobar el estado de sus plantas y dormir tranquilo.",
  },
]

const galleryImages: Array<{
  src: string
  alt: string
  credit?: string
  creditUrl?: string
}> = [
  { src: "/img/plant.webp", alt: "Plantas cuidadas en un espacio luminoso" },
  { src: "/img/plante.webp", alt: "Plantas de interior durante su estancia" },
  { src: "/img/plant_1.webp", alt: "Un rincón verde preparado para las plantas" },
  {
    src: "/img/greenhouse.webp",
    alt: "Un invernadero luminoso lleno de plantas",
    credit: "Keith Mapeki / Unsplash",
    creditUrl: "https://unsplash.com/photos/a-bunch-of-plants-that-are-in-a-house-V5gqoJFhclM",
  },
]

export default function Page() {
  return (
    <>
    <main className="overflow-x-hidden bg-[#f0f2e9] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f0f2e9]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
          <a href="#inicio" aria-label="Hotel by Plants, inicio" className="flex min-w-0 items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#294e3b]">
            <Image src="/img/logowebp.webp" alt="" aria-hidden="true" width={48} height={48} preload className="h-10 w-10 shrink-0 rounded-2xl object-cover object-center shadow-md shadow-emerald-900/20" />
            <div>
              <p className="text-base font-semibold tracking-tight sm:text-lg">Hotel by Plants</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#planes">Planes</a>
            <a href="#opiniones">Opiniones</a>
            <a href="#faq">FAQ</a>
          </nav>

          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-emerald-900/15 bg-white/80 px-4 py-2 text-sm font-semibold text-[#294e3b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294e3b]">Menú</summary>
            <nav className="absolute right-0 top-full mt-3 grid min-w-48 gap-1 rounded-2xl border border-slate-200 bg-white p-2 text-sm text-slate-700 shadow-xl">
              <a className="rounded-xl px-3 py-2 hover:bg-emerald-50" href="#como-funciona">Cómo funciona</a>
              <a className="rounded-xl px-3 py-2 hover:bg-emerald-50" href="#beneficios">Beneficios</a>
              <a className="rounded-xl px-3 py-2 hover:bg-emerald-50" href="#planes">Planes</a>
              <a className="rounded-xl px-3 py-2 hover:bg-emerald-50" href="#opiniones">Opiniones</a>
              <a className="rounded-xl px-3 py-2 hover:bg-emerald-50" href="#faq">Preguntas frecuentes</a>
            </nav>
          </details>

          <ReservationButton className="h-auto shrink-0 rounded-full bg-[#294e3b] px-3 py-2 text-xs font-semibold text-white hover:bg-[#1c3b2c] sm:px-5 sm:py-2.5 sm:text-sm">
            <span className="sm:hidden">Reservar</span><span className="hidden sm:inline">Reservar ahora</span>
          </ReservationButton>
        </div>
      </header>

      <section id="inicio" className="relative h-auto min-h-[68svh] w-full overflow-hidden">
        <video autoPlay muted loop playsInline preload="metadata" poster="/img/fondo%20de%20hero.webp" aria-hidden="true" tabIndex={-1} className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden">
          <source src="/img/video/paisaje1.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f2e9]/90 via-[#f0f2e9]/65 to-[#f0f2e9]/25" />
        <div className="relative mx-auto grid min-h-[68svh] max-w-7xl gap-10 sm:min-h-[72svh] lg:min-h-[clamp(34rem,72svh,45rem)] px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1.5 text-xs font-medium text-emerald-800 shadow-sm">
              <Leaf className="h-3.5 w-3.5" />
              Alojamiento temporal para plantas
            </div>

            <h1 className="max-w-xl text-[clamp(2.35rem,6vw,3.75rem)] font-black leading-[1.05] tracking-[-0.06em] text-slate-900">
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

            <div className="relative w-full max-w-lg rounded-[2rem] border border-emerald-100 bg-[#f8faf4] p-4 shadow-[0_30px_80px_rgba(36,75,58,0.16)]">
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
      </section>

      <section className="mx-auto flex h-auto w-full items-center px-4 pb-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          {[
            { value: "2.500+", label: "plantas alojadas" },
            { value: "24h", label: "respuesta a reservas" },
            { value: "4.9/5", label: "valoración media" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-[#edf1e8] p-5 text-center">
              <p className="text-3xl font-black text-[#294e3b]">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Nuestro espacio para plantas" className="bg-[#e6ece2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 sm:text-sm">Un hogar lleno de verde</p>
              <h2 className="text-balance text-3xl font-black leading-tight tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">Un espacio pensado para que est&eacute;n a gusto.</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">Luz natural, rincones tranquilos y cuidados adaptados a cada planta durante toda su estancia.</p>
            </div>
            <ReservationButton className="h-auto w-fit shrink-0 rounded-full bg-[#294e3b] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-950/10 transition hover:-translate-y-0.5 hover:bg-[#1c3b2c] sm:px-6 sm:py-3.5">
              Reserva una estancia <ArrowRight className="ml-2 h-4 w-4" />
            </ReservationButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:auto-rows-[minmax(155px,1fr)] xl:grid-cols-[1.15fr_0.85fr] xl:gap-5">
            {galleryImages.map((image, index) => (
              <figure key={image.src} className={`group relative isolate min-h-[230px] overflow-hidden rounded-[1.75rem] bg-[#294e3b] shadow-md shadow-emerald-950/10 sm:min-h-[270px] ${index === 0 ? "xl:row-span-3 xl:min-h-[500px]" : "xl:min-h-0"}`}>
                <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Abrir imagen: ${image.alt}`} className="absolute inset-0 block focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#294e3b]">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 55vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#12291f]/85 via-[#12291f]/10 to-transparent transition duration-300 group-hover:from-[#12291f]/75" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <span className="max-w-md text-base font-semibold leading-snug text-white drop-shadow sm:text-lg">{image.alt}</span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/35 bg-white/15 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-[#294e3b]" aria-hidden="true"><ArrowRight className="h-4 w-4" /></span>
                  </span>
                </a>
                {image.credit && image.creditUrl && (
                  <figcaption className="pointer-events-none absolute right-4 top-4 rounded-full bg-[#12291f]/65 px-3 py-1.5 text-[11px] text-white/90 backdrop-blur-sm">
                    Foto: <a href={image.creditUrl} target="_blank" rel="noreferrer" className="pointer-events-auto underline underline-offset-2 hover:text-white">{image.credit}</a>
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto flex h-auto w-full items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Cómo funciona</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Un servicio sencillo para disfrutar de tus vacaciones sin estrés.
          </h2>
        </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.number} className="h-full rounded-[2rem] border-0 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{step.number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dfe6bd] text-sm font-bold text-[#294e3b]">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 leading-7 text-slate-600">{step.text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="relative isolate h-auto w-full overflow-hidden bg-[#e6ece2] py-20">
        <video autoPlay muted loop playsInline preload="none" poster="/img/plant_3.webp" aria-hidden="true" tabIndex={-1} className="absolute inset-0 h-full w-full object-cover opacity-80 motion-reduce:hidden">
          <source src="/img/video/jardin.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[#e6ece2]/75" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Más que un hotel</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Cuidamos cada detalle para que tus plantas sigan creciendo mientras tú estás fuera.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#294e3b] p-8 text-white shadow-xl shadow-emerald-900/10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Nuestra promesa</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]">Plantas sanas, hogar tranquilo.</h3>
              <p className="mt-5 leading-7 text-emerald-50/90">
                Las plantas no se quedan abandonadas ni a merced del calendario. Las tenemos vigiladas, hidratadas y atendidas con criterio.
              </p>
              <div className="mt-8 space-y-4">
                {benefitPoints.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white/8 p-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-emerald-900">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm leading-6 text-emerald-50">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {reasons.map((reason) => {
                const Icon = reason.icon
                return (
                  <Card key={reason.title} className="h-full rounded-[2rem] border-0 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dfe6bd] text-[#294e3b]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardHeader className="p-0 pt-3"><CardTitle className="text-xl font-bold text-slate-900">{reason.title}</CardTitle></CardHeader>
                    <CardContent className="p-0 leading-7 text-slate-600">{reason.text}</CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="planes" className="mx-auto flex h-auto w-full items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Planes</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">Elige la estancia que mejor encaja con tus plantas.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={[
                  "h-full rounded-[2rem] border-0 p-6 shadow-sm ring-0 transition duration-300 hover:-translate-y-1 hover:shadow-xl",
                  pkg.featured ? "border-emerald-600 bg-[#294e3b] text-white shadow-lg shadow-emerald-900/20" : "border-slate-200 bg-white text-slate-900",
                ].join(" ")}
              >
                <p className={pkg.featured ? "text-emerald-100" : "text-slate-500"}>{pkg.name}</p>
                <p className="mt-4 text-4xl font-black tracking-[-0.06em]">{pkg.price}</p>
                <p className={pkg.featured ? "mt-3 text-emerald-50/90" : "mt-3 text-slate-600"}>{pkg.description}</p>

                <ul className={pkg.featured ? "mt-6 space-y-3 text-emerald-50" : "mt-6 space-y-3 text-slate-700"}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={
                          pkg.featured
                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-emerald-900"
                            : "flex h-6 w-6 items-center justify-center rounded-full bg-[#dfe6bd] text-[#294e3b]"
                        }
                      >
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ReservationButton className={`mt-8 h-auto w-full rounded-full px-5 py-3 font-semibold ${pkg.featured ? "bg-white text-[#294e3b] hover:bg-emerald-50" : "bg-[#294e3b] text-white hover:bg-[#1c3b2c]"}`}>
                  Reservar
                </ReservationButton>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate h-auto w-full overflow-hidden bg-[#e9ece4] py-20">
        <video autoPlay muted loop playsInline preload="none" poster="/img/plant_4.webp" aria-hidden="true" tabIndex={-1} className="absolute inset-0 h-full w-full object-cover opacity-80 motion-reduce:hidden">
          <source src="/img/video/fondopersona.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-[#e9ece4]/80" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Por qué elegirnos</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">Un alojamiento pensado para responder a la realidad de las plantas de interior.</h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Muchas plantas no pueden quedarse desatendidas ni perderse en el piso de un vecino. Nuestro servicio está diseñado para cubrir ese hueco con una atención real, cercana y profesional.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Valoramos la especie, el tamaño y la necesidad de cada planta antes de aceptar la reserva.",
                "Nuestra logística está pensada para recoger y devolver sin ningún tipo de complicación para ti.",
                "No solo las cuidamos: te mantienes informado con fotos y recomendaciones útiles.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-slate-700">{line}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-200/80">
            <div className="rounded-[1.5rem] bg-[linear-gradient(160deg,#e2ebe1_0%,#f0f2e9_100%)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Estadísticas</p>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>Salud de plantas</span>
                    <span className="font-semibold text-slate-800">96%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-emerald-100">
                    <div className="h-2.5 w-[96%] rounded-full bg-[#294e3b]" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>Tiempo de respuesta</span>
                    <span className="font-semibold text-slate-800">24h</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-emerald-100">
                    <div className="h-2.5 w-[88%] rounded-full bg-[#65764f]" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>Clientes repetidos</span>
                    <span className="font-semibold text-slate-800">71%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-emerald-100">
                    <div className="h-2.5 w-[71%] rounded-full bg-[#8c9568]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="opiniones" className="mx-auto flex h-auto w-full items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Opiniones</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">La tranquilidad de quienes se fueron y las devolvieron felices.</h2>
          </div>

          <TestimonialsCarousel />
        </div>
      </section>

      <section id="faq" className="h-auto w-full bg-[#e9efe5] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">FAQ</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">Preguntas frecuentes</h2>
          </div>

          <FaqAccordion />
        </div>
      </section>

      <section id="reserva" className="mx-auto w-full max-w-5xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <Card className="rounded-[2.5rem] border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 ring-0 sm:p-10">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Reserva tu plaza</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-slate-900 sm:text-4xl">Cuéntanos cuándo cuidamos de tus plantas.</h2>
            <p className="mt-3 leading-7 text-slate-600">Completa los datos y revisa el precio orientativo. Prepararemos el mensaje en tu aplicación de correo para que puedas enviarlo.</p>
          </div>
          <ReservationForm />
        </Card>
      </section>

      <section id="cta" className="mx-auto flex h-auto w-full items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,#142f24_0%,#294e3b_52%,#65764f_100%)] p-8 text-white shadow-[0_30px_70px_rgba(20,47,36,0.3)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Reserva tu plaza</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.06em] sm:text-4xl">Deja tus plantas en manos expertas y disfruta del viaje sin preocupaciones.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ReservationButton className="h-auto rounded-full bg-white px-6 py-4 text-base font-semibold text-[#294e3b] hover:bg-emerald-50">
                Solicitar información
              </ReservationButton>
              <ReservationButton className="h-auto rounded-full border-white/40 bg-white/5 px-6 py-4 text-base font-semibold text-white hover:bg-white/10">
                Hablar con nosotros
              </ReservationButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
              <Image src="/img/logowebp.webp" alt="" aria-hidden="true" width={40} height={40} className="h-9 w-9 shrink-0 rounded-xl object-cover object-center" />
            <span className="font-semibold text-slate-900">Hotel by Plants</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#como-funciona">Servicio</a>
            <a href="#planes">Precios</a>
            <a href="#faq">FAQ</a>
            <a href="#cta">Contacto</a>
          </div>
          <p>© 2026 Hotel by Plants. Cuidamos tus plantas como si fueran nuestras.</p>
        </div>
      </footer>
    </main>
      <ReservationRain />
    </>
  )
}
