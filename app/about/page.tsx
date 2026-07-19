import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import BackToTop from "@/components/BackToTop";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <About />
      <Stats />
      <WhyChoose />
      <Footer />

      <Whatsapp />
      <BackToTop />
    </main>
  );
}