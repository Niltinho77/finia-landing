"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/outline";

export function VideoIntro() {
  return (
    <section
      className="relative bg-slate-950 px-6 py-20 md:py-24"
      id="video-intro"
    >
      {/* fundo suave */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.10),_transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: "#34d399" }}
          >
            no seu ritmo
          </p>

          <h2 className="mt-2 text-balance text-2xl font-semibold text-white md:text-3xl">
            A vida acontece no WhatsApp — e o FinIA também
          </h2>

          <p className="mt-3 mx-auto max-w-xl text-sm text-slate-300/90 md:text-base">
            Veja como o FinIA se encaixa naturalmente no seu dia a dia:  
            rápido, prático e presente exatamente onde você já está —  
            no seu celular.
          </p>
        </motion.div>

        {/* Container do vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          viewport={{ once: true, amount: 0.45 }}
          className="relative mx-auto mt-10 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.7)] backdrop-blur"
        >
          {/* overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

          {/* vídeo real */}
          <video
            src="/video-section.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-[1.02]"
          />

          {/* play decorativo */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/40 bg-slate-950/80 shadow-[0_0_35px_rgba(16,185,129,0.45)] backdrop-blur-md transition hover:scale-105 hover:border-emerald-300"
            >
              <PlayIcon className="h-8 w-8 text-emerald-300" />
            </button>
          </div>

          {/* legendinha */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
            <p className="inline-flex max-w-md items-center justify-center rounded-full bg-slate-950/70 px-3 py-1 text-[11px] text-slate-300/85 backdrop-blur">
              Um olhar natural de como o FinIA acompanha o seu dia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoIntro;