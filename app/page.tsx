import { HeroSection } from "@/components/hero-section"
import NavbarDemo from "@/components/resizable-navbar-demo"
import Image from "next/image"

export default function Page() {
  return (
    <>
      <NavbarDemo />
      <HeroSection />
      <section
        id="servicios"
        className="relative h-[max(900px,100vh)] w-screen overflow-hidden pt-[75px]"
      >
        <video
          className="absolute inset-0 h-full w-full -scale-x-100 object-cover"
          src="/img/caballo.webm"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#6665DD]/45" />
        <div className="relative mx-auto grid h-full w-full max-w-[1368px] grid-cols-2">
          <div className="flex items-center justify-center text-left">
            <h1 className="font-playfair text-balance text-[45px] font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
          </div>
          <div className="flex items-center justify-end">
            <video
              className="max-w-[90%] rounded-[15px] shadow-[0_12px_30px_rgba(0,0,0,0.28)]"
              src="/img/caballo.webm"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
      <section className="relative isolate h-[600px] w-screen bg-[#B7E4C7]">
        <Image
          src="/img/monster.webp"
          alt="Monstruo"
          width={1000}
          height={1000}
          className="absolute right-0 bottom-0 z-10 mr-[75px] h-auto max-h-[500px] w-auto max-w-none scale-x-[-1] invert"
        />
      </section>
    </>
  )
}
