"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
 const pathname = usePathname();

const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-yellow-500/20 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 lg:px-12 py-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-bold tracking-wide text-yellow-400 hover:text-yellow-300 transition"
        >
          PRIME EVENT
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition duration-300 ${
                pathname === item.href
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* Book Button */}
<Link
  href="/contact"
  className="hidden lg:block bg-yellow-500 text-black px-8 py-3.5 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition duration-300"
>
  Book Now
</Link>

{/* Mobile Menu */}
<div
  className={`fixed top-0 right-0 h-screen w-72 bg-[#111] border-l border-yellow-500/20 shadow-2xl transform transition-transform duration-300 z-50 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex justify-between items-center p-6 border-b border-yellow-500/20">
    <h2 className="text-yellow-400 text-2xl font-bold">
      PRIME EVENT
    </h2>

    <button
      onClick={() => setMenuOpen(false)}
      className="text-yellow-400 text-2xl"
    >
      <FaTimes />
    </button>
  </div>

  <div className="flex flex-col p-6 gap-6">

    {navLinks.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className={`text-lg transition ${
          pathname === item.href
            ? "text-yellow-400"
            : "text-white hover:text-yellow-400"
        }`}
      >
        {item.name}
      </Link>
    ))}

    <Link
      href="/contact"
      onClick={() => setMenuOpen(false)}
      className="mt-4 bg-yellow-500 text-black text-center py-3 rounded-full font-semibold hover:bg-yellow-400"
    >
      Book Now
    </Link>

  </div>
</div>

{menuOpen && (
  <div
    onClick={() => setMenuOpen(false)}
    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
  />
)}





{/* Mobile Hamburger */}
<button
  onClick={() => setMenuOpen(true)}
  className="lg:hidden text-2xl text-yellow-400"
>
  <FaBars />
</button>

      </div>
    </nav>
    
  );
}
