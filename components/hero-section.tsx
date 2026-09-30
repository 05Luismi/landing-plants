"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const sunRef = useRef<HTMLImageElement>(null)
  const mongoRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      const sunWave = gsap.timeline({ repeat: -1 })
      sunWave
        .to(sunRef.current, {
          x: 32,
          y: -34,
          rotation: 2,
          duration: 1.2,
          ease: "sine.inOut",
        })
        .to(sunRef.current, {
          x: 54,
          y: 0,
          rotation: 0.5,
          duration: 1,
          ease: "sine.inOut",
        })
        .to(sunRef.current, {
          x: 24,
          y: 34,
          rotation: -1.5,
          duration: 1.2,
          ease: "sine.inOut",
        })
        .to(sunRef.current, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1,
          ease: "sine.inOut",
        })

      const sunLook = gsap.timeline({ repeat: -1, repeatDelay: 0.85 })
      sunLook
        .to(sunRef.current, {
          scaleX: -1,
          duration: 0.15,
          ease: "power1.inOut",
        })
        .to(
          sunRef.current,
          {
            scaleX: 1,
            duration: 0.15,
            ease: "power1.inOut",
          },
          1,
        )

      const mongoJump = gsap.timeline({ repeat: -1, repeatDelay: 0.25 })
      mongoJump
        .to(mongoRef.current, {
          y: -48,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(mongoRef.current, {
          y: 0,
          duration: 0.45,
          ease: "bounce.out",
        })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      timeline
        .to(sunRef.current, {
          xPercent: -200,
          autoAlpha: 0,
          ease: "power1.in",
        })
        .to(
          mongoRef.current,
          {
            xPercent: 200,
            autoAlpha: 0,
            ease: "power1.in",
          },
          0,
        )
    },
    { scope: heroRef },
  )

  return (
    <main
      ref={heroRef}
      id="inicio"
      className="hero-background relative isolate h-[max(900px,100vh)] w-full overflow-hidden"
    >
      <Image
        src="/img/cap.webp"
        alt=""
        aria-hidden="true"
        width={2944}
        height={1015}
        sizes="100vw"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-auto w-full object-contain"
      />
      <div className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-[1368px]">
        <Image
          ref={sunRef}
          src="/img/the-sun.webp"
          alt=""
          aria-hidden="true"
          width={860}
          height={1111}
          sizes="(max-width: 768px) 42vw, 28vw"
          className="absolute bottom-0 left-0 z-0 h-[68%] w-auto max-w-none object-contain object-bottom md:h-[78%]"
        />
        <Image
          ref={mongoRef}
          src="/img/mongo.webp"
          alt=""
          aria-hidden="true"
          width={1405}
          height={2313}
          sizes="(max-width: 768px) 48vw, 32vw"
          className="absolute right-0 bottom-0 z-20 h-[68%] w-auto max-w-none object-contain object-bottom md:h-[82%]"
        />
      </div>
    </main>
  )
}
