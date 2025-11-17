"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  children: ReactNode;
  index?: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1 + i * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function FeatureCard({
  icon: Icon,
  title,
  children,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.article
      className="group relative h-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.65)] backdrop-blur-md md:p-6"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      custom={index}
    >
      {/* Glow hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.22),_transparent_55%)]" />

      <div className="relative flex flex-col gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30">
          <Icon className="h-5 w-5 text-emerald-400" />
        </div>

        <h3 className="text-base font-semibold text-slate-50 md:text-lg">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-slate-300/90">
          {children}
        </p>

        {/* Micro etiqueta embaixo */}
        <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Funciona direto no WhatsApp</span>
        </div>
      </div>
    </motion.article>
  );
}