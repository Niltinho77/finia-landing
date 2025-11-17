"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PHRASES = [
  "registrando seus gastos em segundos",
  "criando tarefas com data e horário",
  "avisando você das contas antes do vencimento",
  "mostrando seu resumo financeiro na hora",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[currentIndex];
    const speed = isDeleting ? 45 : 90;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === phrase) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        const nextLength = text.length + (isDeleting ? -1 : 1);
        setText(phrase.slice(0, nextLength));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <section
      id="topo"
      className="relative min-h-screen w-full overflow-hidden bg-slate-950 pt-24"
    >
      {/* animação suave */}
      <style jsx global>{`
        @keyframes float-soft {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>

      {/* fundo leve */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.10),_transparent_60%)]" />

      <div
        className="
          relative mx-auto
          flex min-h-[calc(100vh-6rem)] max-w-6xl
          flex-col gap-12 px-6
          lg:flex-row lg:items-center lg:gap-16
        "
      >
        {/* TEXTO (no mobile fica embaixo, no desktop à esquerda) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-emerald-500/40 bg-slate-900/60 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300">
            Novo • Assistente financeira por IA no WhatsApp
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Organize suas finanças <br className="hidden sm:block" />
            conversando no{" "}
            <span style={{ color: "#34d399" }}>WhatsApp</span>.
          </h1>

          {/* TEXTO DIGITADO */}
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            o FinIA cuida de tudo,{" "}
            <span
              className="font-semibold"
              style={{ color: "#6ee7b7", opacity: 0.9 }}
            >
              {text}
              <span
                className="ml-1 inline-block h-5 w-[2px] translate-y-[2px] animate-pulse"
                style={{ backgroundColor: "#6ee7b7", opacity: 0.9 }}
              />
            </span>
          </p>

          <p className="mt-2 mx-auto max-w-md text-sm text-slate-400 md:text-[15px] md:leading-relaxed lg:mx-0">
            Sem planilhas, sem app complicado. Só você, seu{" "}
            <span className="font-medium text-emerald-300/90">WhatsApp</span> e a
            Lume organizando tudo automaticamente.
          </p>

          {/* BOTÕES */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={
                "https://wa.me/5555991856277?text=" +
                encodeURIComponent(
                  "Oi, quero testar o FinIA e organizar minhas finanças conversando pelo WhatsApp."
                )
              }
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold shadow-[0_0_25px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] sm:w-auto"
              style={{ backgroundColor: "#34d399", color: "#020617" }}
            >
              Falar com o FinIA no WhatsApp
            </a>

            <a
              href="#video-intro"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-emerald-400/50 hover:bg-slate-900/70 sm:w-auto"
            >
              Ver como funciona
            </a>
          </div>
        </motion.div>

        {/* VÍDEO / MOCKUP – no mobile fica em cima, no desktop à direita */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="relative flex flex-1 justify-center lg:justify-end"
        >
          <div
            className="relative"
            style={{ animation: "float-soft 6s ease-in-out infinite" }}
          >
            <div
              className="
                mx-auto overflow-hidden
                rounded-[32px] border border-slate-800
                bg-slate-900/90 p-3
                shadow-[0_24px_60px_rgba(15,23,42,0.65)]
                backdrop-blur
                w-full max-w-xs
                sm:max-w-sm
                md:max-w-md
                lg:max-w-[360px]
                h-[320px]
                sm:h-[360px]
                md:h-[420px]
                lg:h-[640px]
              "
            >
              <video
                src="/video-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}