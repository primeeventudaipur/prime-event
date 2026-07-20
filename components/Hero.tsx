"use client";

import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[400px] overflow-hidden">

      {/* Background */}

      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.72)),url('/images/hero.webp')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}

      <div className="relative z-10 flex h-full">

        <div className="mx-auto flex w-full max-w-7xl items-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >

            {/* Badge */}

            <span
              className=" relative -top-4 inline-flex w-[550px] h-13 px-6 translate-x-8 items-center justify-center rounded-full border border-yellow-500/50 bg-black/30 text-base uppercase tracking-[3px] text-yellow-500 backdrop-blur-md"
              >
                Luxury Wedding & Event Planner • Udaipur
                </span>

            {/* Heading */}

            <h1 className="mt-9 text-4xl translate-x-7 font-black tracking-x-5 leading-[1.1] text-white md:text-6xl xl:text-7xl">

              Crafting

              <span className="mt-3 block text-yellow-400">

                Timeless Celebrations

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 mb-20 translate-x-10 max-w-2xl text-lg md:text-xl leading-9 text-gray-300">

              Prime Event creates unforgettable destination weddings,
              luxury celebrations and premium corporate events with
              elegant décor, flawless planning and world-class execution.

            </p>
     

            {/* Buttons */}

            <motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.4,
    duration: 0.8,
  }}
  className="relative top-7 flex flex-wrap gap-5"
>

           <Link
            href="/contact"
            className="mt-12 relative inline-flex h-11 w-[200px] px-10 translate-x-8 items-center justify-center rounded-full border border-yellow-500 py-5 font-semibold text-yellow-400 transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black"
            >
            Book Consultation
            </Link>

            <Link
           href="/gallery"
           className="mt-12 relative inline-flex h-11 px-10 w-[200px] translate-x-18 items-center justify-center rounded-full border border-yellow-500 px-10 py-5 font-semibold text-yellow-400 transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black"
           >
          View Gallery
           </Link>

           </motion.div>

            {/* Floating Premium Stats */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="absolute left-1/2 bottom-6 w-[92%] max-w-6xl -translate-x-1/2"
             >

              <div className="grid grid-cols-2 md:grid-cols-4 rounded-[30px] border border-white/10 bg-black/45 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,.45)]">

                <div className="py-8 text-center border-b md:border-b-0 md:border-r border-white/10">

                  <h3 className="text-4xl font-bold text-yellow-400">
                    <Counter end={500} suffix="+" />
                  </h3>

                  <p className="mt-3 text-gray-300">
                    Events Completed
                  </p>

                </div>

                <div className="py-8 text-center border-b md:border-b-0 md:border-r border-white/10">

                  <h3 className="text-4xl font-bold text-yellow-400">
                    <Counter end={200} suffix="+" />
                  </h3>

                  <p className="mt-3 text-gray-300">
                    Luxury Weddings
                  </p>

                </div>

                <div className="py-8 text-center border-r border-white/10">

                  <h3 className="text-4xl font-bold text-yellow-400">
                    4.9★
                  </h3>

                  <p className="mt-3 text-gray-300">
                    Google Rating
                  </p>

                </div>

                <div className="py-8 text-center">

                  <h3 className="text-4xl font-bold text-yellow-400">
                    <Counter end={10} suffix="+" />
                  </h3>

                  <p className="mt-3 text-gray-300">
                    Years Experience
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">

        <FaArrowDown
          size={24}
          className="text-yellow-400"
        />

      </div>

    </section>
  );
}