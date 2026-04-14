"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "1.200+", label: "usuários ativos" },
  { value: "R$ 2M+", label: "registrado no app" },
  { value: "4.9★", label: "avaliação média" },
  { value: "3 seg", label: "para registrar um gasto" },
];

export default function Stats() {
  return (
    <section className="relative border-y border-slate-800/60 bg-slate-900/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(16,185,129,0.06),transparent)]" />

      <div className="relative mx-auto max-w-5xl px-5 py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-0.5 text-xs text-slate-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
