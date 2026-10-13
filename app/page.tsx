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

import { Button } from "@/components/ui/button"

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

const testimonials = [
  {
    quote:
      "Nos fuimos dos semanas y volvimos con nuestras plantas perfectas. Fue una tranquilidad enorme y el seguimiento visual nos encantó.",
    author: "Laura M.",
    detail: "Apartamento en Barcelona",
  },
  {
    quote:
      "La reserva fue súper fácil y la comunicación mucho más cercana de lo que esperaba. Un servicio útil y muy bien pensado.",
    author: "Mario P.",
    detail: "Propietario de jardín urbano",
  },
  {
    quote:
      "Tienen un trato muy cuidado con cada planta. Para especies más delicadas, la atención premium ha sido imprescindible.",
    author: "Elena G.",
    detail: "Dueña de plantas de interior",
  },
]

const faqs = [
  "¿Qué tipos de plantas aceptan?",
  "¿Cómo se realiza la recogida?",
  "¿Me mandáis fotos durante la estancia?",
  "¿Qué pasa si una planta necesita cuidados especiales?",
  "¿Cuánto dura la estancia típica?",
]

export default function Page() {
  return (
    <main className="bg-[#f7f4ee] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f4ee]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1b6a4a] text-lg font-bold text-white shadow-md shadow-emerald-900/20">
              H
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Hotel by Plants</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#planes">Planes</a>
            <a href="#opiniones">Opiniones</a>
            <a href="#faq">FAQ</a>
          </nav>

          <Button className="rounded-full bg-[#1b6a4a] px-5 text-sm font-semibold text-white hover:bg-[#14573b]">
            Reservar ahora
          </Button>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(41,122,88,0.18),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(172,181,96,0.18),_transparent_26%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-emerald-800 shadow-sm">
              <Leaf className="h-3.5 w-3.5" />
              Alojamiento temporal para plantas
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
              Tu planta no se queda sola cuando te vas.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              En Hotel by Plants cuidamos tus plantas como si fueran nuestras: con luz, humedad,
              riego y seguimiento visual para que vuelvan a casa felices.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-[#1b6a4a] px-6 py-6 text-base font-semibold text-white hover:bg-[#14573b]">
                Solicitar estancia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full border-slate-300 bg-white/80 px-6 py-6 text-base font-semibold text-slate-700 hover:bg-slate-50">
                Ver planes
              </Button>
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

            <div className="relative w-full max-w-lg rounded-[2rem] border border-emerald-100 bg-[#fffdf9] p-4 shadow-[0_30px_80px_rgba(27,106,74,0.14)]">
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#f1f9ef_0%,#ebf7ef_22%,#e8f3ed_100%)] p-5">
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
                  <div className="rounded-2xl bg-[#1b6a4a] p-4 text-white shadow-lg shadow-emerald-900/20">
                    <p className="text-2xl font-black">120+</p>
                    <p className="text-xs text-emerald-50">plantas cuidadas</p>
                  </div>
                  <div className="rounded-2xl bg-[#edf5d5] p-4 text-slate-800">
                    <p className="text-2xl font-black">99%</p>
                    <p className="text-xs text-slate-600">satisfacción</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          {[
            { value: "2.500+", label: "plantas alojadas" },
            { value: "24h", label: "respuesta a reservas" },
            { value: "4.9/5", label: "valoración media" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-[#f6f9f2] p-5 text-center">
              <p className="text-3xl font-black text-[#1b6a4a]">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Cómo funciona</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Un servicio sencillo para disfrutar de tus vacaciones sin estrés.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{step.number}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5d5] text-sm font-bold text-[#1b6a4a]">
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="bg-[#eef5eb] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Más que un hotel</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Cuidamos cada detalle para que tus plantas sigan creciendo mientras tú estás fuera.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#1b6a4a] p-8 text-white shadow-xl shadow-emerald-900/10">
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
                  <div key={reason.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5d5] text-[#1b6a4a]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">{reason.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{reason.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Planes</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">Elige la estancia que mejor encaja con tus plantas.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={[
                "rounded-[2rem] border p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1",
                pkg.featured ? "border-emerald-600 bg-[#1b6a4a] text-white shadow-lg shadow-emerald-900/20" : "border-slate-200 bg-white text-slate-900",
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
                          : "flex h-6 w-6 items-center justify-center rounded-full bg-[#edf5d5] text-[#1b6a4a]"
                      }
                    >
                      <Check className="h-4 w-4" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={pkg.featured ? "mt-8 w-full rounded-full bg-white text-[#1b6a4a] hover:bg-emerald-50" : "mt-8 w-full rounded-full bg-[#1b6a4a] text-white hover:bg-[#14573b]"}>
                Reservar
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f2efe8] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
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
            <div className="rounded-[1.5rem] bg-[linear-gradient(160deg,#eaf7ed_0%,#f7f5ee_100%)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Estadísticas</p>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>Salud de plantas</span>
                    <span className="font-semibold text-slate-800">96%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-emerald-100">
                    <div className="h-2.5 w-[96%] rounded-full bg-[#1b6a4a]" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>Tiempo de respuesta</span>
                    <span className="font-semibold text-slate-800">24h</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-emerald-100">
                    <div className="h-2.5 w-[88%] rounded-full bg-[#6d8b3d]" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>Clientes repetidos</span>
                    <span className="font-semibold text-slate-800">71%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-emerald-100">
                    <div className="h-2.5 w-[71%] rounded-full bg-[#a5b64d]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="opiniones" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Opiniones</p>
          <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">La tranquilidad de quienes se fueron y las devolvieron felices.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">{item.author}</p>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-[#f4f8f0] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">FAQ</p>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">Preguntas frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((question, index) => (
              <details key={question} open={index === 0} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">{question}</summary>
                <p className="mt-3 text-slate-600">
                  {index === 0 && "Aceptamos la mayoría de plantas de interior y algunas exteriores siempre que estén en buen estado y con una especie compatible con el espacio de alojamiento."}
                  {index === 1 && "El proceso es muy simple: reservas la estancia, te contactamos para confirmar la recogida y te entregamos la planta en un punto acordado o a domicilio según el servicio contratado."}
                  {index === 2 && "Sí. Durante la estancia te enviamos fotos de tu planta con información sobre estado, humedad y cuidados, para que puedas verla sin salir de casa."}
                  {index === 3 && "Para plantas muy especiales o sensibles, diseñamos un plan específico con revisiones adicionales y recomendaciones personalizadas."}
                  {index === 4 && "La estancia puede durar desde unos pocos días hasta varias semanas, y también ofrecemos planes largos para viajes de mayor duración."}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#173e2f_0%,#1b6a4a_45%,#6d8b3d_100%)] p-8 text-white shadow-[0_30px_70px_rgba(23,62,47,0.28)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">Reserva tu plaza</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.06em] sm:text-4xl">Deja tus plantas en manos expertas y disfruta del viaje sin preocupaciones.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button className="rounded-full bg-white px-6 py-6 text-base font-semibold text-[#1b6a4a] hover:bg-emerald-50">
                Solicitar información
              </Button>
              <Button variant="outline" className="rounded-full border-white/40 bg-white/5 px-6 py-6 text-base font-semibold text-white hover:bg-white/10">
                Hablar con nosotros
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1b6a4a] text-sm font-bold text-white">H</div>
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
  )
}
