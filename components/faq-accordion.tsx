"use client"

import { useState } from "react"
import { ChevronDown, Leaf } from "lucide-react"

const questions = [
  {
    "question": "\u00bfQu\u00e9 tipos de plantas aceptan?",
    "answer": "Aceptamos la mayor\u00eda de plantas de interior y algunas especies de exterior, siempre que est\u00e9n en buen estado y sean compatibles con el espacio de alojamiento."
  },
  {
    "question": "\u00bfC\u00f3mo se realiza la recogida?",
    "answer": "Reservas la estancia y coordinamos contigo la recogida. Podemos recoger tus plantas en casa o acordar un punto de entrega, seg\u00fan el servicio contratado."
  },
  {
    "question": "\u00bfMe mand\u00e1is fotos durante la estancia?",
    "answer": "S\u00ed. Te enviamos fotos y actualizaciones para que puedas ver c\u00f3mo est\u00e1 tu planta y conocer los cuidados que recibe."
  },
  {
    "question": "\u00bfQu\u00e9 pasa si una planta necesita cuidados especiales?",
    "answer": "Preparamos un plan de cuidados adaptado a cada especie y podemos hacer revisiones adicionales para plantas delicadas o con necesidades concretas."
  },
  {
    "question": "\u00bfCu\u00e1nto dura la estancia t\u00edpica?",
    "answer": "La estancia puede durar desde unos pocos d\u00edas hasta varias semanas. Tambi\u00e9n podemos organizar estancias m\u00e1s largas para viajes prolongados."
  }
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-white p-2 shadow-lg shadow-emerald-950/5 sm:p-3">
      {questions.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `faq-question-${index}`
        const panelId = `faq-answer-${index}`

        return (
          <article key={item.question} className="group relative isolate overflow-hidden rounded-2xl border border-white/20 shadow-sm">
            <video autoPlay muted loop playsInline preload="none" poster={`/img/plant_${index + 1}.webp`} aria-hidden="true" tabIndex={-1} className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden">
              <source src={`/img/video/paisaje${index + 2}.webm`} type="video/webm" />
            </video>
            <div className={`absolute inset-0 transition-colors duration-300 ${isOpen ? "bg-[#10241b]/65" : "bg-[#10241b]/55 group-hover:bg-[#10241b]/45"}`} aria-hidden="true" />
            <h3 className="relative z-10">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left outline-none transition duration-200 hover:bg-white/10 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80 sm:px-5 sm:py-5"
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/30 transition duration-300 ${isOpen ? "bg-white/25 text-white" : "bg-white/10 text-white group-hover:bg-white/20"}`}>
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="flex-1 text-sm font-semibold leading-6 text-white drop-shadow sm:text-base">{item.question}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-white/90 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`relative z-10 grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pl-[4.25rem] pr-5 text-sm leading-7 text-white/90 drop-shadow sm:pb-6 sm:pl-[4.75rem] sm:pr-8 sm:text-base">{item.answer}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
