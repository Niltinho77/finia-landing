"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "O que é o FinIA?",
    a: "É seu copiloto financeiro por IA no WhatsApp. Você registra gastos, cria tarefas, recebe lembretes e vê resumos completos apenas conversando.",
  },
  {
    q: "Preciso baixar algum app?",
    a: "Não! O FinIA funciona 100% no WhatsApp e você acessa seu painel financeiro pelo navegador quando quiser.",
  },
  {
    q: "Como funciona o período de testes?",
    a: "Você ganha acesso imediato ao plano TRIAL, com limite de operações para testar tudo antes de assinar.",
  },
  {
    q: "Como faço para virar Premium?",
    a: "Basta clicar no botão 'Começar no Premium' e realizar o pagamento via Stripe. A ativação é automática.",
  },
  {
    q: "Meus dados são seguros?",
    a: "Sim. Toda comunicação é criptografada e seu acesso é vinculado exclusivamente ao seu número de WhatsApp.",
  },
  {
    q: "O FinIA funciona com áudio?",
    a: "Sim! Você pode mandar mensagens de voz e ele entende tudo utilizando IA avançada.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-slate-950 px-6 py-20 md:px-10 md:py-24"
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),_transparent_65%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mt-3 text-sm text-slate-400 md:text-base">
          Tire suas dúvidas sobre como o FinIA funciona e como ele pode ajudar no seu dia a dia.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-3xl space-y-4">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-md backdrop-blur-md"
            >
              {/* Cabeçalho da pergunta */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-sm font-medium text-slate-200 md:text-base">
                  {item.q}
                </span>

                <motion.span
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-slate-400"
                >
                  ▼
                </motion.span>
              </button>

              {/* Resposta */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}