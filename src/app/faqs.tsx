"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "O que é o FinIA?",
    a: "É seu copiloto financeiro por IA no WhatsApp. Você registra gastos, cria tarefas, recebe lembretes e vê resumos completos apenas conversando com a Lume.",
  },
  {
    q: "Preciso baixar algum aplicativo?",
    a: "Não! O FinIA funciona 100% no WhatsApp. Quando quiser ver gráficos e relatórios, acesse o painel web pelo navegador — a Lume te envia o link direto na conversa.",
  },
  {
    q: "Como funciona o período de teste gratuito?",
    a: "Você tem 3 dias de acesso completo ao FinIA, com até 10 transações registradas. Não precisa de cartão de crédito — é só começar a conversar.",
  },
  {
    q: "Como ativo o plano Premium?",
    a: "Clique em 'Assinar o Premium' e conclua o pagamento via Stripe. A ativação é automática e você já pode usar sem limites em segundos.",
  },
  {
    q: "Meus dados são seguros?",
    a: "Sim. Todo o acesso é vinculado ao seu número de WhatsApp, toda comunicação é criptografada e seus dados financeiros são privados e acessíveis apenas por você.",
  },
  {
    q: "O FinIA entende mensagens de voz?",
    a: "Sim! Mande um áudio de até 10 segundos e a Lume transcreve e interpreta tudo usando IA avançada. Ideal para quando suas mãos estão ocupadas.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem burocracia. Você cancela diretamente pelo painel do Stripe a qualquer momento, sem precisar falar com ninguém.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-950 px-5 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
            Dúvidas frequentes
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Tudo que você precisa saber
          </h2>
          <p className="mt-3 text-sm text-slate-400 md:text-base">
            Não encontrou o que precisava?{" "}
            <a
              href="https://wa.me/5555992234690"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
            >
              Fale com o suporte no WhatsApp.
            </a>
          </p>
        </motion.div>

        {/* Acordeão */}
        <div className="space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-emerald-500/30 bg-slate-900/80"
                    : "border-slate-800/80 bg-slate-900/40 hover:border-slate-700"
                } backdrop-blur`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={`text-sm font-semibold transition-colors md:text-base ${
                      isOpen ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {item.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-colors ${
                      isOpen
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                        : "border-slate-700 text-slate-500"
                    }`}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400 md:text-[15px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
