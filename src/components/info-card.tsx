"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  index?: number;
}

export function InfoCard({ title, children, index = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)] backdrop-blur-md"
    >
      <p className="text-xl font-semibold text-emerald-300">{title}</p>

      <p className="mt-1 text-sm text-slate-300 leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
}

export default InfoCard;