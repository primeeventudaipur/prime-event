"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`fixed bottom-[105px] right-6 z-50 w-14 h-14 rounded-full bg-yellow-500 text-black flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-yellow-400 hover:shadow-yellow-500/60 ${
  show
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10 pointer-events-none"
}`}
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}
