// src/app/page.tsx

// components compartilhados
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navbar fixa no topo */}
      <Navbar />

      <main className="flex flex-col">
        {/* HERO – dobra principal */}
        <Hero />

        {/* VÍDEO EXPLICATIVO */}
        <VideoIntro />

        {/* BENEFÍCIOS / FEATURES */}
        <Feature />

        {/* COMO FUNCIONA (âncora do botão do Hero) */}
        <MobileConvenience />

        {/* PROVA SOCIAL */}
        <Testimonials />

        {/* PERGUNTAS FREQUENTES */}
        <Faqs />
      </main>

      <Footer />
    </div>
  );
}