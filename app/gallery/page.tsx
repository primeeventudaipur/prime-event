import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Gallery />
      <Footer />
    </main>
  );
}


