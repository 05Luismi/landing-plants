"use client"

import { useState, type FormEvent } from "react"

const plans = [
  { name: "Estancia breve", price: 19 },
  { name: "Estancia completa", price: 39 },
  { name: "Cuidado premium", price: 59 },
]

function getLocalDate() {
  const date = new Date()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${date.getFullYear()}-${month}-${day}`
}

export function ReservationForm() {
  const [plan, setPlan] = useState(plans[1].name)
  const [plantCount, setPlantCount] = useState(1)
  const [startDate, setStartDate] = useState("")
  const today = getLocalDate()

  const selectedPlan = plans.find((item) => item.name === plan) ?? plans[1]
  const estimate = selectedPlan.price

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const details = [
      `Nombre: ${formData.get("name")}`,
      `Correo: ${formData.get("email")}`,
      `Plan: ${plan}`,
      `Número de plantas: ${plantCount}`,
      `Recogida: ${formData.get("start")}`,
      `Devolución: ${formData.get("end")}`,
      `Dirección de recogida: ${formData.get("address")}`,
      `Cuidados especiales: ${formData.get("notes") || "Ninguno indicado"}`,
      `Precio orientativo: ${estimate} €`,
    ].join("\n")

    window.location.href = `mailto:?subject=${encodeURIComponent("Solicitud de estancia para mis plantas")}&body=${encodeURIComponent(details)}`
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Nombre
        <input required name="name" autoComplete="name" className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Correo electrónico
        <input required name="email" type="email" autoComplete="email" className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Plan
        <select value={plan} onChange={(event) => setPlan(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15">
          {plans.map((item) => <option key={item.name}>{item.name}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Número de plantas
        <input required min={1} max={99} name="plants" type="number" value={plantCount} onChange={(event) => setPlantCount(Math.max(1, Number(event.target.value)))} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Fecha de recogida
        <input required name="start" type="date" min={today} value={startDate} onChange={(event) => setStartDate(event.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Fecha de devolución
        <input required name="end" type="date" min={startDate || today} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
        Dirección de recogida
        <input required name="address" autoComplete="street-address" className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
        Cuidados especiales (opcional)
        <textarea name="notes" rows={3} className="resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15" />
      </label>
      <div className="flex flex-col gap-4 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm text-slate-600">
          Desde <strong className="text-lg text-[#1b6a4a]">{estimate} €</strong>
          <span className="block text-xs">El precio final depende de la cantidad, duración y cuidados.</span>
        </p>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#1b6a4a] px-6 py-3 font-semibold text-white transition hover:bg-[#14573b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b6a4a]">
          Preparar solicitud
        </button>
      </div>
      <p className="text-xs leading-5 text-slate-500 md:col-span-2">
        Se abrirá tu aplicación de correo con estos datos. Añade el correo de contacto del hotel y envía la solicitud.
      </p>
    </form>
  )
}
