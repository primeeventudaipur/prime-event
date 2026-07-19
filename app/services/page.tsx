import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24">
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}