"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type CSSProperties } from "react"

type Leaf = {
  id: string
  left: number
  size: number
  delay: number
  duration: number
  sway: number
  spin: number
}

type Burst = { id: number; leaves: Leaf[] }

export function ReservationRain() {
  const [bursts, setBursts] = useState<Burst[]>([])
  const nextId = useRef(0)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    function startRain() {
      const id = ++nextId.current
      const leaves = Array.from({ length: 24 }, (_, index) => ({
        id: `${id}-${index}`,
        left: Math.random() * 100,
        size: 22 + Math.random() * 32,
        delay: Math.random() * 0.8,
        duration: 2.6 + Math.random() * 1.8,
        sway: (Math.random() - 0.5) * 180,
        spin: (Math.random() - 0.5) * 900,
      }))

      setBursts((current) => [...current.slice(-1), { id, leaves }])
      timers.current.push(
        setTimeout(() => {
          setBursts((current) => current.filter((burst) => burst.id !== id))
        }, 6000),
      )
    }

    window.addEventListener("hotelbyplants:reserve", startRain)
    return () => {
      window.removeEventListener("hotelbyplants:reserve", startRain)
      timers.current.forEach(clearTimeout)
    }
  }, [])

  return bursts.map((burst) => (
    <div key={burst.id} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {burst.leaves.map((leaf) => {
        const style: CSSProperties & { "--leaf-sway": string; "--leaf-spin": string } = {
          left: `${leaf.left}%`,
          width: leaf.size,
          height: leaf.size,
          animationDelay: `${leaf.delay}s`,
          animationDuration: `${leaf.duration}s`,
          "--leaf-sway": `${leaf.sway}px`,
          "--leaf-spin": `${leaf.spin}deg`,
        }

        return (
          <Image
            key={leaf.id}
            src="/img/cannabis.webp"
            alt=""
            width={64}
            height={64}
            className="cannabis-rain-leaf absolute top-[-12vh] object-contain drop-shadow-sm"
            style={style}
          />
        )
      })}
    </div>
  ))
}
