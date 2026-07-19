"use client";

import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0 hero-bg bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)), url('/images/hero.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 max-w-5xl"
        >

          <span className="inline-block -translate-y-6 border border-yellow-500/40 text-yellow-400 px-5 py-2 rounded-full text-sm tracking-[3px] uppercase backdrop-blur-sm">
            Luxury Wedding & Event Planner • Udaipur
          </span>

          <h1 className="mt-7 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Crafting
            <span className="block text-yellow-400">
              Timeless Celebrations
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 leading-9 max-w-3xl mx-auto">
            From royal destination weddings to premium corporate events,
            Prime Event transforms your vision into unforgettable memories
            with elegance, creativity and flawless execution.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-5"
          >

            <Link
              href="/contact"
              className="bg-yellow-500 text-black font-semibold px-9 py-4 rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/40"
            >
              Book Consultation
            </Link>

            <Link
              href="/gallery"
              className="border border-yellow-500 text-yellow-400 px-9 py-4 rounded-full hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all duration-300"
            >
              View Gallery
            </Link>

          </motion.div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 text-gray-300">

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">
                <Counter end={500} suffix="+" />
              </h3>
              <p className="text-sm mt-2">
                Events Completed
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">
                4.9★
              </h3>
              <p className="text-sm mt-2">
                Client Rating
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">
                <Counter end={8} suffix="+" />
              </h3>
              <p className="text-sm mt-2">
                Years Experience
              </p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-yellow-400">
        <FaArrowDown size={22} />
      </div>

    </section>
  );
}