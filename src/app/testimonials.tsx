"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "@/components/testimonial-card";

const TESTIMONIALS = [
  {
    feedback:
      "Sempre tive dificuldade de controlar meus gastos. Com o FinIA é só mandar mensagem e tudo fica registrado automaticamente. Finalmente entendi meu dinheiro.",
    client: "Jonas Silva",
    title: "",
    img: "/image/avatar1.jpeg",
  },
  {
    feedback:
      "No meu dia a dia corrido, eu nunca parava pra anotar nada. Agora eu só mando um áudio e pronto — o FinIA registra tudo e meu resumo fica sempre organizado.",
    client: "Jerferson Senra",
    title: "",
    img: "/image/avatar2.webp",
  },
  {
    feedback:
      "Eu me perdia no fim do mês. O resumo do FinIA me mostrou exatamente pra onde estava indo meu dinheiro. Simples, direto e muito útil.",
    client: "Alan Delon",
    title: "",
    img: "/image/avatar3.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative bg-slate-950 px-4 py-20 md:py-24 lg:px-8"
    >
      {/* Glow de fundo suave */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(34,197,94,0.12),_transparent_55%)]" />

      {/* Cabeçalho */}
      <motion.div
        className="relative container mx-auto mb-14 flex flex-col items-center text-center md:mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
          <UserIcon className="h-6 w-6" />
        </div>

        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          O que dizem{" "}
          <span style={{ color: "#34d399" }}>nossos usuários</span>
        </h2>

        <p className="mt-3 max-w-2xl text-sm text-slate-300/90 md:text-base">
          Pessoas reais usando o FinIA para registrar gastos e entender melhor
          seu dinheiro sem precisar abrir planilhas ou aplicativos complicados.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 lg:px-10">
        {TESTIMONIALS.map((props, index) => (
          <TestimonialCard key={props.client} index={index} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;