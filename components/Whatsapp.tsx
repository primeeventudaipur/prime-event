"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20Prime%20Event,%20I%20want%20to%20book%20an%20event."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white text-4xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/60 animate-bounce"
    >
      <FaWhatsapp />
    </a>
  );
}