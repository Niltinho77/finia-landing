"use client";

import React from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/testimonial-card";

const TESTIMONIALS = [
  {
    feedback:
      "Sempre tive dificuldade de controlar meus gastos. Com o FinIA é só mandar mensagem e tudo fica registrado automaticamente. Finalmente entendi meu dinheiro.",
    client: "Jonas Silva",
    title: "Autônomo",
    img: "/image/avatar1.jpeg",
  },
  {
    feedback:
      "No meu dia a dia corrido, eu nunca parava pra anotar nada. Agora eu só mando um áudio e pronto — o FinIA registra tudo e meu resumo fica sempre organizado.",
    client: "Jerferson Senra",
    title: "Empresário",
    img: "/image/avatar2.webp",
  },
  {
    feedback:
      "Eu me perdia no fim do mês. O resumo do FinIA me mostrou exatamente pra onde estava indo meu dinheiro. Simples, direto e muito útil.",
    client: "Alan Delon",
    title: "Profissional liberal",
    img: "/image/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-slate-950 px-4 py-20 md:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(16,185,129,0.07),transparent)]" />

      {/* Header */}
      <motion.div
        className="relative mx-auto mb-14 max-w-2xl text-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
          Depoimentos reais
        </p>
        <h2 className="text-balance text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          Pessoas que já organizam{" "}
          <span className="text-emerald-400">as finanças com IA</span>
        </h2>
        <p className="mt-4 text-sm text-slate-400 md:text-base">
          Sem planilhas, sem apps extras. Só o WhatsApp e a Lume.
        </p>

        {/* Badge simples */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-1.5 text-xs text-slate-400 backdrop-blur">
          Experiências reais de quem já usa o FinIA
        </div>
      </motion.div>

      {/* Cards */}
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3 lg:px-4">
        {TESTIMONIALS.map((props, index) => (
          <TestimonialCard key={props.client} index={index} {...props} />
        ))}
      </div>
    </section>
  );
}
