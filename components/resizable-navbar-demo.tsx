"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const Brand = () => (
  <a
    href="#inicio"
    className="relative z-20 mr-4 flex items-center gap-2 px-2 py-1 text-sm font-semibold tracking-tight text-neutral-900 dark:text-white"
  >
    <span className="flex size-8 items-center justify-center rounded-full bg-[#17bebb] text-sm font-bold text-white">
      P
    </span>
    PorPas
  </a>
);

export default function NavbarDemo() {
  const navItems = [
    {
      name: "Inicio",
      link: "#inicio",
    },
    {
      name: "Servicios",
      link: "#servicios",
    },
    {
      name: "Contacto",
      link: "#contacto",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Brand />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="#servicios" variant="secondary">Explorar</NavbarButton>
            <NavbarButton href="#contacto" variant="dark">Hablemos</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Brand />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                href="#servicios"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                Explorar
              </NavbarButton>
              <NavbarButton
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="dark"
                className="w-full"
              >
                Hablemos
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
