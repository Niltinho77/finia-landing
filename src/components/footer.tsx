"use client";

import React from "react";

const WA_PREMIUM =
  "https://wa.me/5555991856277?text=" +
  encodeURIComponent(
    "Oi, cheguei pelo site e quero assinar o plano Premium do FinIA."
  );

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(16,185,129,0.05),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-6 lg:px-8">

        {/* CTA faixa */}
        <div className="mb-14 flex flex-col items-start justify-between gap-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-5 md:flex-row md:items-center">
          <div>
            <p className="font-semibold text-white md:text-lg">
              Ainda não começou? Teste grátis agora.
            </p>
            <p className="mt-1 text-sm text-slate-400">
              3 dias sem compromisso, sem cartão de crédito.
            </p>
          </div>
          <a
            href={WA_PREMIUM}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full px-6 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.3)] transition hover:opacity-90"
            style={{ backgroundColor: "#34d399" }}
          >
            Começar de graça →
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + descrição */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-sm font-black text-slate-950">
                F
              </span>
              <span className="text-base font-bold text-slate-100">
                Fin<span style={{ color: "#34d399" }}>IA</span>
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 md:text-sm">
              Seu assistente financeiro por IA direto no WhatsApp.
              Rápido, simples e sempre com você.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
              Navegação
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { label: "Início", href: "#topo" },
                { label: "Como funciona", href: "#beneficios" },
                { label: "Plano Premium", href: "#plano-premium" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Perguntas frequentes", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 transition hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
              Suporte
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5555992234690"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition hover:text-emerald-400"
                >
                  WhatsApp do suporte
                </a>
              </li>
              <li>
                <a
                  href="mailto:suporte@finia.app"
                  className="text-slate-400 transition hover:text-emerald-400"
                >
                  suporte@finia.app
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[11px] text-slate-600">
              Tempo médio de resposta: até 24h úteis.
            </p>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800/60 pt-6 text-[11px] text-slate-600 md:flex-row md:text-xs">
          <p>© {CURRENT_YEAR} FinIA. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/termos-uso" className="hover:text-emerald-400 transition">
              Termos de uso
            </a>
            <a href="/politica-privacidade" className="hover:text-emerald-400 transition">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
