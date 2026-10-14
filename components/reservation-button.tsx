"use client"

import type { ReactNode } from "react"

import { Button } from "@/components/ui/button"

type ReservationButtonProps = {
  children: ReactNode
  className?: string
}

export function ReservationButton({ children, className }: ReservationButtonProps) {
  return (
    <Button
      render={
        <a
          href="#reserva"
          onClick={() => window.dispatchEvent(new Event("hotelbyplants:reserve"))}
        />
      }
      className={className}
    >
      {children}
    </Button>
  )
}
