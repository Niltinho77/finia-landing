"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_LINK =
  "https://wa.me/5555991856277?text=" +
  encodeURIComponent(
    "Oi, quero testar o FinIA e organizar minhas finanças conversando pelo WhatsApp."
  );

const PHRASES = [
  "registrando seus gastos em segundos",
  "criando tarefas com data e horário",
  "avisando antes do vencimento",
  "mostrando seu resumo financeiro na hora",
];

// Mensagens do chat simulado
const CHAT_MESSAGES = [
  { from: "user", text: "Gastei 45 reais no almoço", delay: 0.4 },
  {
    from: "lume",
    text: "✅ *Registrado!*\n📤 Saída · R$ 45,00\n🏷️ Alimentação",
    delay: 1.2,
  },
  { from: "user", text: "Quanto gastei esse mês?", delay: 2.2 },
  {
    from: "lume",
    text: "📊 *Resumo de abril*\n💵 Saldo: R$ 1.850,00\n📉 Gastos: R$ 1.350,00",
    delay: 3.0,
  },
  { from: "user", text: "Pagar boleto sexta 18h", delay: 4.0 },
  { from: "lume", text: "📅 *Lembrete criado!*\nSexta às 18:00 ✔️", delay: 4.8 },
];

function ChatBubble({
  from,
  text,
  delay,
  visible,
}: {
  from: "user" | "lume";
  text: string;
  delay: number;
  visible: boolean;
}) {
  const isUser = from === "user";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`flex ${isUser ? "justify-end" : "justify-start"}`}
        >
          {!isUser && (
            <div className="mr-1.5 mt-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-slate-950">
              L
            </div>
          )}
          <div
            className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-md whitespace-pre-line ${
              isUser
                ? "rounded-tr-sm bg-emerald-500 text-slate-950 font-medium"
                : "rounded-tl-sm bg-slate-800 text-slate-100 border border-slate-700/60"
            }`}
            dangerouslySetInnerHTML={{
              __html: text.replace(/\*(.*?)\*/g, "<strong>$1</strong>"),
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<boolean[]>(
    new Array(CHAT_MESSAGES.length).fill(false)
  );

  // Typing effect
  useEffect(() => {
    const phrase = PHRASES[currentIndex];
    const speed = isDeleting ? 40 : 80;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText === phrase) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        const next = typedText.length + (isDeleting ? -1 : 1);
        setTypedText(phrase.slice(0, next));
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex]);

  // Chat animation — mostra mensagens progressivamente e reinicia
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    function runCycle() {
      // mostra cada mensagem no delay definido
      CHAT_MESSAGES.forEach((msg, i) => {
        const t = setTimeout(() => {
          setVisibleMessages((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, msg.delay * 1000);
        timers.push(t);
      });

      // após a última mensagem + 3s, reseta e recomeça
      const lastDelay = CHAT_MESSAGES[CHAT_MESSAGES.length - 1].delay;
      const resetTimer = setTimeout(() => {
        setVisibleMessages(new Array(CHAT_MESSAGES.length).fill(false));
        // pequena pausa antes de recomeçar
        const restartTimer = setTimeout(runCycle, 800);
        timers.push(restartTimer);
      }, lastDelay * 1000 + 3000);
      timers.push(resetTimer);
    }

    runCycle();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="topo"
      className="relative min-h-screen w-full overflow-hidden bg-slate-950 pt-20"
    >
      {/* Grade de fundo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.18),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center gap-10 px-5 py-12 lg:flex-row lg:gap-16 lg:py-0">

        {/* ── ESQUERDA: Texto ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge de lançamento */}
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Assistente financeira por IA no WhatsApp
          </motion.span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Organize suas finanças{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-emerald-400">conversando</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-full -mt-1 w-full fill-emerald-500/20"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </span>{" "}
            no{" "}
            <span className="text-emerald-400">WhatsApp</span>.
          </h1>

          {/* Texto digitado */}
          <p className="mt-5 text-base text-slate-300 md:text-lg">
            A Lume cuida de tudo,{" "}
            <span className="font-semibold text-emerald-300">
              {typedText}
              <span className="ml-px inline-block h-5 w-0.5 translate-y-[3px] animate-pulse bg-emerald-300" />
            </span>
          </p>

          <p className="mt-3 max-w-md mx-auto text-sm text-slate-400 lg:mx-0 md:text-[15px]">
            Sem planilhas, sem app complicado. Só você, seu WhatsApp e a Lume
            organizando tudo automaticamente com IA.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(52,211,153,0.4)] transition hover:shadow-[0_0_45px_rgba(52,211,153,0.65)] sm:w-auto"
              style={{ backgroundColor: "#34d399" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Começar grátis no WhatsApp
              </span>
            </a>

            <a
              href="#plano-premium"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-emerald-500/50 hover:bg-emerald-500/5 sm:w-auto"
            >
              Ver planos →
            </a>
          </div>

          {/* Prova social micro */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500 lg:justify-start">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 20 20" fill="#34d399" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              3 dias grátis
            </span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 20 20" fill="#34d399" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Sem cartão para testar
            </span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 20 20" fill="#34d399" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Cancele quando quiser
            </span>
          </div>
        </motion.div>

        {/* ── DIREITA: Mockup chat WhatsApp ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative flex w-full flex-1 justify-center lg:justify-end"
        >
          {/* Glow atrás do celular */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          {/* Dispositivo */}
          <div
            className="relative w-[260px] sm:w-[288px]"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
            `}</style>

            {/* Frame do celular */}
            <div className="relative overflow-hidden rounded-[36px] border-2 border-slate-700/80 bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)]">

              {/* Notch */}
              <div className="flex justify-center pt-2.5 pb-1">
                <div className="h-1 w-16 rounded-full bg-slate-700/60" />
              </div>

              {/* Header WhatsApp */}
              <div className="flex items-center gap-2.5 border-b border-slate-800 bg-slate-900 px-3.5 py-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-slate-950">
                  L
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-100">Lume FinIA</p>
                  <p className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online agora
                  </p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-slate-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                </svg>
              </div>

              {/* Área do chat */}
              <div
                className="flex h-[320px] flex-col gap-2.5 overflow-hidden px-3 py-3"
                style={{
                  background:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\"), linear-gradient(180deg, #0f172a 0%, #0d1526 100%)",
                }}
              >
                {CHAT_MESSAGES.map((msg, i) => (
                  <ChatBubble
                    key={i}
                    from={msg.from as "user" | "lume"}
                    text={msg.text}
                    delay={msg.delay}
                    visible={visibleMessages[i]}
                  />
                ))}
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2 border-t border-slate-800 bg-slate-900/80 px-3 py-2.5">
                <div className="flex-1 rounded-full bg-slate-800 px-3 py-1.5 text-[11px] text-slate-500">
                  Mensagem
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-slate-950">
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </div>
              </div>

              {/* Home bar */}
              <div className="flex justify-center py-2">
                <div className="h-1 w-24 rounded-full bg-slate-700/60" />
              </div>
            </div>

            {/* Badge flutuante – "economize tempo" */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute -right-4 top-16 rounded-2xl border border-emerald-500/30 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur"
            >
              <p className="text-[11px] font-semibold text-emerald-300">⚡ 3s</p>
              <p className="text-[10px] text-slate-400">para registrar</p>
            </motion.div>

            {/* Badge flutuante – IA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="absolute -left-4 bottom-24 rounded-2xl border border-slate-700/60 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur"
            >
              <p className="text-[11px] text-emerald-400">🤖 IA avançada</p>
              <p className="text-[10px] text-slate-400">GPT-4o-mini</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Seta scroll down */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-slate-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
