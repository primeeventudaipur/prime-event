import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import Whatsapp from "@/components/Whatsapp";
import BackToTop from "@/components/BackToTop";

// Dynamic Imports
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Stats = dynamic(() => import("@/components/Stats"));
const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTA = dynamic(() => import("@/components/CTA"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="-mt-28">
  <Hero />
</div>

      <About />

      <Services />

      <Stats />

      <WhyChoose />

      <Gallery />

      <Testimonials />

      <CTA />

      <Contact />

      <FAQ />

      <Footer />

      <Whatsapp />

      <BackToTop />

    </main>
  );
}