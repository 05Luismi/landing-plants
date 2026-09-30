import { HeroSection } from "@/components/hero-section"
import NavbarDemo from "@/components/resizable-navbar-demo"

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
            <p className="text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
    </>
  )
}
