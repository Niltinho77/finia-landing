"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  SparklesIcon,
  ChartBarIcon,
  BellAlertIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: SparklesIcon,
    title: "IA que entende você",
    children:
      "Registre gastos e organize seu dia apenas conversando. O FinIA entende linguagem natural e transforma suas mensagens em informações úteis.",
  },
  {
    icon: ChartBarIcon,
    title: "Resumo financeiro inteligente",
    children:
      "Descubra para onde seu dinheiro está indo com resumos claros, organizados por categorias e períodos — direto no WhatsApp ou no painel web.",
  },
  {
    icon: BellAlertIcon,
    title: "Organização simples e rápida",
    children:
      "Crie anotações, marque compromissos ou registre lembretes pessoais dentro do WhatsApp, sem precisar abrir outro app ou planilha.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Privacidade e segurança",
    children:
      "Acesso por link mágico seguro, sem senha. Todos os seus dados ficam protegidos e associados apenas ao seu telefone.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Features() {
  return (
    <section
      id="beneficios"
      className="relative bg-slate-950 px-6 py-20 md:py-24"
    >
      {/* fundo com glow suave, combinando com o hero */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),_transparent_60%)]" />

      {/* cabeçalho da sessão */}
      <motion.div
        className="relative mx-auto mb-14 max-w-3xl text-center md:mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#34d399" }}>
          Seu copiloto financeiro
        </p>

        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl lg:text-[2rem]">
          Tudo o que você precisa em um único fluxo
        </h2>

        <p className="text-sm text-slate-300/90 md:text-base">
          O FinIA combina inteligência artificial com controle financeiro
          prático: registre transações, organize tarefas e consulte resumos
          completos direto pelo WhatsApp ou painel web.
        </p>
      </motion.div>

      {/* grid de cards */}
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} index={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Features;