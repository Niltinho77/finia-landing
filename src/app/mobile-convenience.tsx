"use client";

import React from "react";
import { motion } from "framer-motion";

const BENEFICIOS_PREMIUM = [
  "Registros ilimitados de gastos.",
  "Classificação automática por categorias.",
  "Resumos financeiros completos direto no WhatsApp.",
  "Acesso ao painel web com gráficos e relatórios detalhados.",
  "Histórico completo das suas movimentações.",
  "Organização simples sem planilhas e sem aplicativos extras."
];

const PARA_QUEM_E = [
  "Quem quer controlar melhor o próprio dinheiro sem planilhas.",
  "Quem gosta de resolver tudo pelo WhatsApp de forma rápida.",
  "Quem mistura gastos pessoais e do trabalho e precisa de clareza.",
  "Quem quer um resumo simples de quanto entrou, saiu e sobrou no mês.",
  "Quem quer economizar tempo organizando a vida financeira."
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

export function MobileConvenience() {
  return (
    <section
      id="plano-premium"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 md:py-24 lg:px-8"
    >
      {/* fundo suave com glows na mesma identidade do site */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.14),_transparent_55%)]" />

      <motion.div
        className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* badge */}
        <p
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: "#34d399" }}
        >
          plano premium finIA
        </p>

        {/* título principal */}
        <h2 className="text-balance text-2xl font-semibold text-white md:text-3xl">
          Pare de se perder no dinheiro e tenha{" "}
          <span style={{ color: "#34d399" }}>clareza total das suas finanças</span>.
        </h2>

        {/* subtítulo */}
        <p className="mt-3 max-w-2xl text-sm text-slate-300/90 md:text-base">
          O plano Premium desbloqueia todo o potencial do FinIA: mais registros,
          mais lembretes e uma visão completa do seu mês, sem depender de planilhas.
        </p>
      </motion.div>

      {/* CARD PRINCIPAL */}
      <motion.div
        className="relative mx-auto mt-10 max-w-4xl"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.85)] backdrop-blur md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.7fr_minmax(0,1.2fr)] md:items-center">
            {/* LADO ESQUERDO – benefícios */}
            <div className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                o que você leva no premium
              </p>

              <ul className="mt-3 space-y-2 text-sm text-slate-200 md:text-[15px]">
                {BENEFICIOS_PREMIUM.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-[5px] inline-flex h-1.5 w-1.5 flex-none rounded-full"
                      style={{ backgroundColor: "#34d399" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                ideal para
              </p>

              <ul className="mt-2 space-y-1.5 text-xs text-slate-400 md:text-[13px]">
                {PARA_QUEM_E.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] inline-flex h-1 w-3 flex-none rounded-full bg-slate-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LADO DIREITO – preço + CTA */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/70 px-5 py-6 text-center">
              <p className="text-xs font-medium text-slate-400">
                investimento mensal
              </p>

              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm text-slate-300">R$ </span>
                <span className="text-3xl font-semibold text-white md:text-4xl">
                  9,90
                </span>
                <span className="text-xs text-slate-400">/ mês</span>
              </div>

              

              {/* CTA PRINCIPAL */}
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
            
            >
              Assinar plano Premium
            </a>

              <p className="mt-3 text-[11px] text-slate-500">
                Você pode cancelar quando quiser.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default MobileConvenience;