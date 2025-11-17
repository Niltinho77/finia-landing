"use client";

import React from "react";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative mt-24 bg-slate-950/95 border-t border-slate-800/60">
      {/* Glow suave de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.08),_transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-4 py-14 md:px-6 lg:px-8">
        {/* CTA principal */}
        <div className="flex flex-col gap-4 border-b border-slate-800/60 pb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-100 md:text-base">
              Pronto para organizar suas finanças sem esforço?
            </p>
            <p className="mt-1 text-xs text-slate-400 md:text-sm">
              Ative o FinIA Premium e deixe o FinIA cuidar de registros,
              lembretes e resumos automáticos.
            </p>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {/* Logo + descrição */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-slate-950">
                F
              </span>

              <span className="text-base font-semibold text-slate-100">
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400" style={{ color: "#34d399"}}>
              Navegação
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="text-slate-300 transition hover:text-emerald-400"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-slate-300 transition hover:text-emerald-400"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#plano-premium"
                  className="text-slate-300 transition hover:text-emerald-400"
                >
                  Plano Premium
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-slate-300 transition hover:text-emerald-400"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-300 transition hover:text-emerald-400"
                >
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contato / Suporte */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400" style={{ color: "#34d399"}}>
              Suporte
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/SEU_NUMERO_AQUI"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 transition hover:text-emerald-400"
                >
                  WhatsApp do FinIA
                </a>
              </li>
              <li>
                <a
                  href="mailto:suporte@finia.app"
                  className="text-slate-300 transition hover:text-emerald-400"
                >
                  suporte@finia.app
                </a>
              </li>
            </ul>

            <p className="mt-4 text-[11px] text-slate-500">
              Tempo médio de resposta: até 24h úteis.
            </p>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800/60 pt-6 text-[11px] text-slate-500 md:flex-row md:text-xs">
          <p>&copy; {CURRENT_YEAR} FinIA. Todos os direitos reservados.</p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-emerald-400 transition">
              Termos de uso
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-emerald-400 transition">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;