"use client";

import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const WA_PREMIUM =
  "https://wa.me/5555991856277?text=" +
  encodeURIComponent(
    "Oi, cheguei pelo site e quero assinar o plano Premium do FinIA."
  );

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
        className="text-sm font-medium text-slate-300 transition hover:text-emerald-400"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 960) setOpen(false); };
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70 shadow-[0_1px_0_rgba(255,255,255,0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#topo"
          className="flex items-center gap-2 text-sm font-bold tracking-tight text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-sm font-black text-slate-950 shadow-[0_0_16px_rgba(52,211,153,0.4)]">
            F
          </span>
          <span className="text-[15px]">
            Fin<span className="text-emerald-400">IA</span>
          </span>
        </a>

        {/* Links desktop */}
        <ul className="ml-8 hidden items-center gap-7 lg:flex">
          <NavItem href="#topo">Início</NavItem>
          <NavItem href="#beneficios">Como funciona</NavItem>
          <NavItem href="#plano-premium">Planos</NavItem>
          <NavItem href="#depoimentos">Depoimentos</NavItem>
          <NavItem href="#faq">FAQ</NavItem>
        </ul>

        {/* CTA desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://wa.me/5555992234690"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-slate-400 transition hover:text-emerald-400"
          >
            Suporte
          </a>
          <a
            href={WA_PREMIUM}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-2 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.3)] transition hover:shadow-[0_0_28px_rgba(52,211,153,0.5)]"
            style={{ backgroundColor: "#34d399" }}
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-20" style={{ backgroundColor: "#34d399" }} />
            Começar grátis
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-800 p-2 text-slate-300 transition hover:bg-slate-800/60 lg:hidden"
        >
          {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-slate-800/70 bg-slate-950/98 backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-6xl px-5 py-5">
            <ul className="flex flex-col gap-4">
              <NavItem href="#topo" onClick={() => setOpen(false)}>Início</NavItem>
              <NavItem href="#beneficios" onClick={() => setOpen(false)}>Como funciona</NavItem>
              <NavItem href="#plano-premium" onClick={() => setOpen(false)}>Planos e preços</NavItem>
              <NavItem href="#depoimentos" onClick={() => setOpen(false)}>Depoimentos</NavItem>
              <NavItem href="#faq" onClick={() => setOpen(false)}>Perguntas frequentes</NavItem>
            </ul>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://wa.me/5555992234690"
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full border border-slate-700 px-4 py-2.5 text-center text-sm font-medium text-slate-200 transition hover:border-slate-500"
                onClick={() => setOpen(false)}
              >
                Falar com suporte
              </a>
              <a
                href={WA_PREMIUM}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-full py-3 text-center text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                style={{ backgroundColor: "#34d399" }}
                onClick={() => setOpen(false)}
              >
                Começar grátis →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
