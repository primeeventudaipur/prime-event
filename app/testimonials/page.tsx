import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function TestimonialsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}