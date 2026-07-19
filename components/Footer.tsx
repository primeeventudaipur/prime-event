import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
  className="relative overflow-hidden
  bg-gradient-to-b
  from-[#050505]
  via-[#0b0b0b]
  to-black
  border-t border-yellow-500/20"
>

{/* Background Glow */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div
    className="absolute -top-40 left-1/2 -translate-x-1/2
    w-[650px] h-[650px]
    bg-yellow-300/10
    blur-[170px]"
  />

  <div
    className="absolute bottom-0 right-0
    w-72 h-72
    bg-yellow-300/5
    blur-[120px]"
  />

</div>
      <div className="relative z-10 container mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <div>

  <h2 className="text-4xl lg:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">
    PRIME EVENT
  </h2>

  <p className="mt-2 text-sm uppercase tracking-[5px] text-yellow-500/80">
    Luxury Wedding & Event Planner
  </p>

</div>

            <p className="text-gray-400 mt-6 leading-8 text-[15px]">
  Prime Event is a premium wedding and event management company
  based in Udaipur, Rajasthan. From royal weddings and destination
  celebrations to luxury receptions and corporate events, we design
  unforgettable experiences with creativity, elegance and flawless execution.
</p>

<div className="mt-8 flex flex-wrap gap-3">

  <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
    Luxury Events
  </span>

  <span className="rounded-full border border-yellow-100/30 px-4 py-2 text-sm text-yellow-400">
    @Since 2021
  </span>

</div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

  <li>
    <Link
      href="/"
      className="group inline-flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300"
    >
      <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        →
      </span>
      Home
    </Link>
  </li>

  <li>
    <Link
      href="/about"
      className="group inline-flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300"
    >
      <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        →
      </span>
      About
    </Link>
  </li>

  <li>
    <Link
      href="/services"
      className="group inline-flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300"
    >
      <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        →
      </span>
      Services
    </Link>
  </li>

  <li>
    <Link
      href="/gallery"
      className="group inline-flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300"
    >
      <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        →
      </span>
      Gallery
    </Link>
  </li>

  <li>
    <Link
      href="/contact"
      className="group inline-flex items-center text-gray-400 hover:text-yellow-400 transition-all duration-300"
    >
      <span className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        →
      </span>
      Contact
    </Link>
  </li>

</ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

  {/* Address */}

  <a
    href="https://maps.google.com/?q=Udaipur,Rajasthan"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 text-gray-400 hover:text-yellow-400 transition-all duration-300"
  >
    <div className="w-11 h-11 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
      <FaMapMarkerAlt />
    </div>

    <span>Udaipur, Rajasthan</span>
  </a>

  {/* Phone */}

  <a
    href="tel:+919876543210"
    className="group flex items-center gap-4 text-gray-400 hover:text-yellow-400 transition-all duration-300"
  >
    <div className="w-11 h-11 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
      <FaPhoneAlt />
    </div>

    <span>+91 9829534564</span>
  </a>

  {/* Email */}

  <a
    href="mailto:info@primeeventudaipur.in"
    className="group flex items-center gap-4 text-gray-400 hover:text-yellow-400 transition-all duration-300"
  >
    <div className="w-11 h-11 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
      <FaEnvelope />
    </div>

    <span>info@primeeventudaipur.in</span>
  </a>

  {/* Working Hours */}

  <div className="flex items-center gap-4 text-gray-400">

    <div className="w-11 h-11 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
      🕒
    </div>

    <span>Mon – Sun : 9:00 AM – 8:00 PM</span>

  </div>

            </div>

          </div>

          {/* Social */}

          <div>

<a
  href="https://wa.me/919829534564"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center mt-0
  rounded-full
  bg-gradient-to-r
  from-green-500
  to-green-600
  px-6 py-3
  font-semibold
  text-white
  hover:scale-105
  transition-all duration-500"
>
  <FaWhatsapp className="mr-2 text-xl" />
  Chat on WhatsApp
</a>

            <h3 className="text-2xl font-bold text-white mb-3">
  Follow Us
</h3>

<p className="text-gray-400 leading-7 mb-8">
  Follow us for wedding inspirations, luxury event highlights,
  behind-the-scenes moments and exclusive updates.
</p>


            <div className="flex gap-4">

  {/* Facebook */}

  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="group w-14 h-14 rounded-full
    bg-white/5
    border border-yellow-500/20
    flex items-center justify-center
    hover:bg-yellow-500
    hover:text-black
    hover:scale-110
    transition-all duration-500"
  >
    <FaFacebookF className="text-xl group-hover:rotate-12 transition-all duration-500" />
  </a>

  {/* Instagram */}

  <a
    href="https://instagram.com/prime_event___"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="group w-14 h-14 rounded-full
    bg-white/5
    border border-yellow-500/20
    flex items-center justify-center
    hover:bg-yellow-500
    hover:text-black
    hover:scale-110
    transition-all duration-500"
  >
    <FaInstagram className="text-xl group-hover:rotate-12 transition-all duration-500" />
  </a>

  {/* WhatsApp */}

  <a
    href="https://wa.me/919829534564"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="group w-14 h-14 rounded-full
    bg-white/5
    border border-yellow-500/20
    flex items-center justify-center
    hover:bg-green-500
    hover:text-white
    hover:scale-110
    transition-all duration-500"
  >
    <FaWhatsapp className="text-2xl group-hover:rotate-12 transition-all duration-500" />
  </a>

</div>

          </div>

        </div>

        <div className="mt-20 border-t border-yellow-500/20 pt-8">

  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

    {/* Copyright */}

    <p className="text-sm text-gray-500 text-center lg:text-left">

      © {new Date().getFullYear()} Prime Event. All Rights Reserved.

    </p>

    {/* Footer Links */}

    <div className="flex flex-wrap justify-center gap-6 text-sm">

      <a
        href="#"
        className="text-gray-400 hover:text-yellow-400 transition"
      >
        Privacy Policy
      </a>

      <a
        href="#"
        className="text-gray-400 hover:text-yellow-400 transition"
      >
        Terms & Conditions
      </a>

      <a
        href="#"
        className="text-gray-400 hover:text-yellow-400 transition"
      >
        Refund Policy
      </a>

    </div>

    {/* Credit */}

    <p className="text-sm text-gray-500">

      Designed & Developed by

      <span className="ml-2 font-semibold text-yellow-500">

        Prime Event

      </span>

    </p>

  </div>

</div>

      </div>

    </footer>
  );
}
