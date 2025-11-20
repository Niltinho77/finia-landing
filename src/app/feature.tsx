"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChatBubbleOvalLeftIcon,
  PencilSquareIcon,
  ChartPieIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

const STEPS = [
  {
    icon: ChatBubbleOvalLeftIcon,
    title: "1. Fale com o FinIA no WhatsApp",
    description:
      "Envie algo como “gastei 32 reais no mercado” ou “anote pagar academia dia 10”. É só conversar normalmente.",
  },
  {
    icon: PencilSquareIcon,
    title: "2. Ele registra tudo sozinho",
    description:
      "Gastos e anotações viram registros organizados em poucos segundos, sem planilhas ou formulários chatos.",
  },
  {
    icon: ChartPieIcon,
    title: "3. Peça um resumo na hora",
    description:
      "Pergunte “resumo da semana” ou “quanto gastei no cartão” e receba totais e categorias direto no WhatsApp.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "4. Veja tudo no painel web",
    description:
      "Quando quiser enxergar em tela grande, é só entrar no painel e ver tudo com filtros e visão completa.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Features() {
  return (
    <section
      id="beneficios"
      className="relative bg-slate-950 px-5 py-20 md:px-6 md:py-24"
    >
      {/* fundo com glow suave */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),_transparent_60%)]" />

      {/* Cabeçalho */}
      <motion.div
        className="relative mx-auto mb-12 max-w-3xl text-center md:mb-14"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <p
          className="mb-2 text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: "#34d399" }}
        >
          Simples como mandar um áudio
        </p>

        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl lg:text-[2rem]">
          Como usar o{" "}
          <span style={{ color: "#34d399" }}>FinIA</span> em 4 passos
        </h2>

        <p className="text-sm text-slate-300/90 md:text-base">
          Você conversa pelo WhatsApp, o FinIA faz o trabalho pesado.
          Veja o fluxo completo em poucos passos:
        </p>
      </motion.div>

      {/* Grid de passos – focado em responsividade */}
      <div className="relative mx-auto flex max-w-5xl flex-col gap-5 sm:gap-6 md:grid md:grid-cols-2">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="
                flex flex-1 flex-col rounded-2xl border border-emerald-500/25 
                bg-slate-900/70 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.8)]
                backdrop-blur-sm sm:p-5
              "
            >
              {/* Ícone + título */}
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                  <Icon className="h-6 w-6" style={{ color: "#34d399" }} />
                </div>
                <h3 className="text-sm font-semibold text-white md:text-base">
                  
                  {step.title}
                </h3>
              </div>

              {/* Texto */}
              <p className="text-xs leading-relaxed text-slate-300/90 md:text-sm">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Nota final pequena */}
      <div className="relative mx-auto mt-6 max-w-3xl text-center">
        <p className="text-[11px] text-slate-500 md:text-xs">
          Em todas as etapas você continua no WhatsApp. O painel web entra
          quando você quiser enxergar o cenário completo.
        </p>
      </div>
    </section>
  );
}

export default Features;