"use client";

import React from "react";
import { motion } from "framer-motion";

const WA_PREMIUM =
  "https://wa.me/5555991856277?text=" +
  encodeURIComponent(
    "Oi, cheguei pelo site e quero assinar o plano Premium do FinIA."
  );

const WA_FREE =
  "https://wa.me/5555991856277?text=" +
  encodeURIComponent(
    "Oi, quero testar o FinIA gratuitamente pelo WhatsApp."
  );

const FEATURES_FREE = [
  "3 dias de acesso completo",
  "Até 10 transações registradas",
  "Consultas e resumos no WhatsApp",
  "Sem cartão de crédito",
];

const FEATURES_PREMIUM = [
  "Registros ilimitados de gastos e entradas",
  "Categorização automática por IA",
  "Resumos e gráficos ilimitados",
  "Painel web com filtros e relatórios",
  "Lembretes com data e horário",
  "Histórico completo de movimentações",
  "Suporte prioritário",
];

export default function MobileConvenience() {
  return (
    <section
      id="plano-premium"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 md:py-28 lg:px-8"
    >
      {/* Fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(16,185,129,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      {/* Header */}
      <motion.div
        className="relative mx-auto mb-14 max-w-2xl text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
          Planos e preços
        </p>
        <h2 className="text-balance text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Comece de graça.{" "}
          <span className="text-emerald-400">Evolua quando quiser.</span>
        </h2>
        <p className="mt-4 text-sm text-slate-400 md:text-base">
          Teste tudo por 3 dias sem compromisso. O Premium desbloqueia o potencial completo.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative mx-auto grid max-w-4xl gap-5 md:grid-cols-2">

        {/* TRIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur"
        >
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Teste grátis
            </p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">R$ 0</span>
              <span className="text-sm text-slate-400">por 3 dias</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Sem cartão. Ativa no WhatsApp.
            </p>
          </div>

          <ul className="flex flex-1 flex-col gap-2.5 text-sm text-slate-300">
            {FEATURES_FREE.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <svg viewBox="0 0 20 20" fill="#34d399" className="mt-0.5 h-4 w-4 shrink-0">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <a
            href={WA_FREE}
            target="_blank"
            rel="noreferrer"
            className="mt-7 block rounded-full border border-slate-700 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-emerald-500/50 hover:bg-emerald-500/5"
          >
            Começar de graça →
          </a>
        </motion.div>

        {/* PREMIUM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="relative flex flex-col overflow-hidden rounded-2xl border border-emerald-500/40 bg-slate-900/80 p-6 shadow-[0_0_60px_rgba(16,185,129,0.12)] backdrop-blur"
        >
          {/* Badge popular */}
          <div className="absolute right-4 top-4">
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-950">
              Mais popular
            </span>
          </div>

          {/* Glow interno */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(16,185,129,0.08),transparent)]" />

          <div className="relative mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
              Premium
            </p>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="mr-1 text-sm text-slate-500 line-through">R$ 29,90</span>
              <span className="text-4xl font-black text-white">R$ 9,90</span>
              <span className="text-sm text-slate-400">/ mês</span>
            </div>
            <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
              🔥 Oferta de lançamento
            </p>
          </div>

          <ul className="relative flex flex-1 flex-col gap-2.5 text-sm text-slate-200">
            {FEATURES_PREMIUM.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <svg viewBox="0 0 20 20" fill="#34d399" className="mt-0.5 h-4 w-4 shrink-0">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <a
            href={WA_PREMIUM}
            target="_blank"
            rel="noreferrer"
            className="relative mt-7 block rounded-full py-3.5 text-center text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(52,211,153,0.4)] transition hover:opacity-90"
            style={{ backgroundColor: "#34d399" }}
          >
            Assinar o Premium agora →
          </a>

          <p className="relative mt-3 text-center text-[11px] text-slate-500">
            Cancele quando quiser. Sem burocracia.
          </p>
        </motion.div>
      </div>

      {/* Garantias */}
      <div className="relative mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-600"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
          Pagamento seguro via Stripe
        </span>
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-600"><path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zM2 8.5h16v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7z"/></svg>
          Ativação automática
        </span>
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-600"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          Cancele quando quiser
        </span>
      </div>
    </section>
  );
}
