"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
  index?: number; // <- agora é opcional
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
  index = 0, // valor padrão caso não seja passado
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.45)] backdrop-blur-md"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-3 h-14 w-14 overflow-hidden rounded-full border border-slate-700">
          <Image src={img} alt={client} fill className="object-cover" />
        </div>

        <p className="text-sm font-semibold text-slate-100">{client}</p>
        <p className="text-xs text-slate-400">{title}</p>

        <p className="mt-4 text-sm leading-relaxed italic text-slate-300">
          “{feedback}”
        </p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;