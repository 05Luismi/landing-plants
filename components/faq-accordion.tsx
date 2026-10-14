"use client"

import { useState } from "react"
import { ChevronDown, Leaf } from "lucide-react"

const questions = [
  {
    question: "¿Qué tipos de plantas aceptan?",
    answer: "Aceptamos la mayoría de plantas de interior y algunas especies de exterior, siempre que estén en buen estado y sean compatibles con el espacio de alojamiento.",
  },
  {
    question: "¿Cómo se realiza la recogida?",
    answer: "Reservas la estancia y coordinamos contigo la recogida. Podemos recoger tus plantas en casa o acordar un punto de entrega, según el servicio contratado.",
  },
  {
    question: "¿Me mandáis fotos durante la estancia?",
    answer: "Sí. Te enviamos fotos y actualizaciones para que puedas ver cómo está tu planta y conocer los cuidados que recibe.",
  },
  {
    question: "¿Qué pasa si una planta necesita cuidados especiales?",
    answer: "Preparamos un plan de cuidados adaptado a cada especie y podemos hacer revisiones adicionales para plantas delicadas o con necesidades concretas.",
  },
  {
    question: "¿Cuánto dura la estancia típica?",
    answer: "La estancia puede durar desde unos pocos días hasta varias semanas. También podemos organizar estancias más largas para viajes prolongados.",
  },
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
          <article key={item.question} className={`rounded-2xl transition-colors duration-300 ${isOpen ? "bg-[#f0f4ed]" : "bg-white hover:bg-[#f7f9f5]"}`}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left outline-none transition duration-200 hover:text-[#294e3b] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#54765a] sm:px-5 sm:py-5"
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition duration-300 ${isOpen ? "bg-[#294e3b] text-white" : "bg-[#e5ece3] text-[#41634a] group-hover:bg-[#d7e3d6]"}`}>
                  <Leaf className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="flex-1 text-sm font-semibold leading-6 text-slate-800 sm:text-base">{item.question}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#54765a] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pl-[4.25rem] pr-5 text-sm leading-7 text-slate-600 sm:pb-6 sm:pl-[4.75rem] sm:pr-8 sm:text-base">{item.answer}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
