"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MenuIcon, X } from "lucide-react";

import { menu } from "@/data/menu";
import { getCurrentYear } from "@/lib/utils";

import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useEscapeKey } from "@/hooks/useEscapeKey";

import { Button } from "@/components/button";
import { Social } from "@/components/social";
import { Topbar } from "./topbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(menuRef as RefObject<HTMLElement>, isOpen);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    toggleRef.current?.focus();
  };

  useEscapeKey(() => {
    if (isOpen) {
      closeMenu();
    }
  });

  // Block scroll when menu is open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu when window is resized to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1028) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`grid grid-rows-[auto_1fr] ${isOpen ? "h-svh overflow-auto" : "h-auto"}`}>
      <Topbar />
      <div className={`grid py-6`} ref={menuRef}>
        <div className="container flex flex-col">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-1 items-center justify-between">
              <div className="flex gap-4">
                <Link href="/">
                  <Image className={`origin-top-left ${isOpen ? "md:scale-150" : ""}`} src="/2025/images/logos/gotex-show-horizontal.svg" alt="Logo" width={120} height={46} />
                  <span className="sr-only">Página inicial</span>
                </Link>
                {isOpen && (
                  <p className="ml-6 hidden translate-x-10 translate-y-4 text-sm lg:block">
                    <span className="text-default">05 a 07 de agosto de 2025</span> <br /> Distrito Anhembi, Expo 2 - São Paulo
                  </p>
                )}
              </div>
              <nav className={`hidden ${isOpen ? "h-svh overflow-auto" : "lg:block"}`}>
                <ul className="flex items-center">
                  <li>
                    <Button size="sm" variant="subtle" asChild>
                      <Link href="/">Para visitantes</Link>
                    </Button>
                  </li>
                  <li>
                    <Button size="sm" variant="subtle" asChild>
                      <Link href="/">Para expositores</Link>
                    </Button>
                  </li>
                  <li className="ml-2">
                    <Button size="sm" variant="primary" asChild>
                      <Link href="/">Inscreva-se gratuitamente</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
            <button className="text-default flex size-8 cursor-pointer items-center justify-center" type="button" ref={toggleRef} onClick={toggleMenu} aria-label={isOpen ? "Fechar" : "Abrir"} aria-controls="menu" {...(isOpen ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}>
              {isOpen ? <X className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
          {isOpen && (
            <div className="flex h-full flex-1 basis-full flex-col items-center gap-10" id="menu">
              <div className="flex w-full flex-1 flex-col gap-10 pt-10 md:grid-cols-2 lg:grid lg:flex-1 lg:grid-cols-3 lg:pt-24">
                {menu.map((section) => (
                  <div className="space-y-2" key={section.title}>
                    <h2 className="border-default text-default-secondary border-b pb-3 font-semibold">{section.title}</h2>
                    <ul className="-translate-x-3">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Button size="sm" variant="subtle" className="w-full justify-start text-left" onClick={closeMenu} asChild>
                            <Link href={item.href}>{item.label}</Link>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
                <p className="text-sm">
                  © {getCurrentYear()} Gotex Show. <br /> Todos os direitos reservados.
                </p>
                <Social />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
