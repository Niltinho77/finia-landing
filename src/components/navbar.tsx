"use client";

import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

function NavItem({ children, href = "#", onClick }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="text-sm font-medium text-slate-200 transition hover:text-emerald-400"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundClass = isScrolling
    ? "bg-slate-950/85 backdrop-blur border-b border-slate-800/60"
    : "bg-transparent";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 ${backgroundClass} transition-colors`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-slate-950">
            F
          </span>
          <span className="text-base">
            Fin<span className="text-emerald-400">IA</span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="ml-6 hidden items-center gap-6 lg:flex">
          <NavItem href="#inicio">Início</NavItem>
          <NavItem href="#video-intro">Como funciona</NavItem>
          <NavItem href="#plano-premium">Plano Premium</NavItem>
          <NavItem href="#depoimentos">Depoimentos</NavItem>
          <NavItem href="#faq">Perguntas</NavItem>
        </ul>

        {/* CTA desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/5555992234690"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-slate-300 transition hover:text-emerald-400"
          >
            Falar com suporte
          </a>
          <a
              href={
                "https://wa.me/5555991856277?text=" +
                encodeURIComponent(
                  "Oi, cheguei pelo site e quero assinar o plano Premium do FinIA."
                )
              }
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-emerald-500 px-4 py-2 text-center text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/25 transition hover:bg-emerald-400"
              style={{ backgroundColor: "#34d399", color: "#020617" }}
              onClick={() => setOpen(false)}
            >
              Assinar plano Premium
            </a>
        </div>

        {/* Menu mobile button */}
        <button
          type="button"
          onClick={handleOpen}
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-200 hover:bg-slate-800/70 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 backdrop-blur lg:hidden">
          <div className="mx-auto max-w-5xl px-4 py-4 md:px-6 lg:px-8">
            <ul className="flex flex-col gap-3">
              <NavItem
                href="#inicio"
                onClick={() => setOpen(false)}
              >
                Início
              </NavItem>
              <NavItem
                href="#video-intro"
                onClick={() => setOpen(false)}
              >
                Como funciona
              </NavItem>
              <NavItem
                href="#beneficios"
                onClick={() => setOpen(false)}
              >
                
                Plano Premium
              </NavItem>
              <NavItem
                href="#depoimentos"
                onClick={() => setOpen(false)}
              >
                Depoimentos
              </NavItem>
              <NavItem
                href="#faq"
                onClick={() => setOpen(false)}
              >
                Perguntas frequentes
              </NavItem>
            </ul>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://wa.me/5555992234690"
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full border border-slate-700 px-4 py-2 text-center text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900/70"
                onClick={() => setOpen(false)}
              >
                Falar com suporte
              </a>
             <a
              href={
                "https://wa.me/5555991856277?text=" +
                encodeURIComponent(
                  "Oi, cheguei pelo site e quero assinar o plano Premium do FinIA."
                )
              }
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-emerald-500 px-4 py-2 text-center text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/25 transition hover:bg-emerald-400"
              style={{ backgroundColor: "#34d399", color: "#020617" }}
              onClick={() => setOpen(false)}
            >
              Assinar plano Premium
            </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;