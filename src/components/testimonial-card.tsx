"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
  index?: number;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur transition hover:border-emerald-500/20"
    >
      {/* Aspas decorativas */}
      <span className="absolute right-5 top-4 select-none text-5xl font-black leading-none text-emerald-500/10">
        &ldquo;
      </span>

      {/* Estrelas */}
      <div className="mb-4 flex gap-0.5 text-yellow-400 text-sm">
        {"★★★★★".split("").map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>

      {/* Feedback */}
      <p className="flex-1 text-sm leading-relaxed text-slate-300 italic">
        &ldquo;{feedback}&rdquo;
      </p>

      {/* Autor */}
      <div className="mt-5 flex items-center gap-3 border-t border-slate-800/60 pt-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-700">
          <Image src={img} alt={client} fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-100">{client}</p>
          {title && <p className="text-xs text-slate-500">{title}</p>}
        </div>

      </div>
    </motion.div>
  );
}

export default TestimonialCard;
