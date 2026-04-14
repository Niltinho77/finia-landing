// src/app/page.tsx

import { Navbar, Footer } from "@/components";

import Hero from "./hero";
import Stats from "./stats";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import CtaSection from "./cta-section";

export default function Campaign() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="flex flex-col">
        {/* Dobra principal */}
        <Hero />

        {/* Números de prova social */}
        <Stats />

        {/* Como funciona — timeline de 4 passos */}
        <Feature />

        {/* Planos: Trial vs Premium */}
        <MobileConvenience />

        {/* Depoimentos reais */}
        <Testimonials />

        {/* FAQ */}
        <Faqs />

        {/* CTA final antes do footer */}
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
