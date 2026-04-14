"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    emoji: "💬",
    number: "01",
    title: "Fale com a Lume no WhatsApp",
    description:
      "Mande qualquer coisa em linguagem natural: \u201cGastei 32 reais no mercado\u201d ou \u201cMe lembra de pagar academia dia 10\u201d. Ela entende tudo.",
    highlight: "100% em português natural",
  },
  {
    emoji: "⚡",
    number: "02",
    title: "Ela registra em 3 segundos",
    description:
      "Gastos, entradas e lembretes viram registros organizados automaticamente. Zero planilhas, zero formulários chatos.",
    highlight: "Categorização automática por IA",
  },
  {
    emoji: "📊",
    number: "03",
    title: "Peça um resumo quando quiser",
    description:
      "Pergunte \u201cquanto gastei esse m\u00eas\u201d ou \u201cresumo da semana\u201d e receba totais, categorias e an\u00e1lises direto na conversa.",
    highlight: "Resposta instantânea no chat",
  },
  {
    emoji: "🖥️",
    number: "04",
    title: "Veja tudo no painel web",
    description:
      "Quando precisar de uma visão completa, acesse o painel pelo navegador com gráficos, filtros e histórico completo.",
    highlight: "Link enviado automaticamente",
  },
];

export default function Feature() {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(16,185,129,0.07),transparent)]" />

      {/* Header */}
      <motion.div
        className="relative mx-auto mb-16 max-w-2xl text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
          Como funciona
        </p>
        <h2 className="text-balance text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Do WhatsApp ao controle total em{" "}
          <span className="text-emerald-400">4 passos simples</span>
        </h2>
        <p className="mt-4 text-sm text-slate-400 md:text-base">
          Você continua usando o WhatsApp normalmente. A Lume faz o trabalho pesado.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative mx-auto max-w-4xl">
        {/* Linha vertical (desktop) */}
        <div className="absolute left-[calc(50%-1px)] top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-emerald-500/40 via-slate-700/40 to-transparent md:block" />

        <div className="flex flex-col gap-6 md:gap-0">
          {STEPS.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                className={`relative flex items-center gap-0 md:gap-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="flex-1">
                  <div
                    className={`group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 backdrop-blur transition hover:border-emerald-500/30 hover:bg-slate-900/90 md:p-6 ${
                      isLeft ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Número decorativo */}
                    <span className="pointer-events-none absolute right-4 top-3 select-none text-6xl font-black text-white/[0.03]">
                      {step.number}
                    </span>

                    {/* Emoji */}
                    <div
                      className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                    >
                      {step.emoji}
                    </div>

                    <h3 className="text-base font-bold text-white md:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {step.description}
                    </p>

                    {/* Highlight badge */}
                    <div
                      className={`mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300`}
                    >
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      {step.highlight}
                    </div>
                  </div>
                </div>

                {/* Nó central (desktop) */}
                <div className="relative z-10 hidden shrink-0 md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-500/40 bg-slate-950 text-sm font-bold text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    {step.number}
                  </div>
                </div>

                {/* Espaço oposto (desktop) */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
