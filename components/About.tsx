"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Image */}

        <Reveal>

          <div className="relative group">

            {/* Golden Glow */}

            <div className="absolute -inset-6 bg-yellow-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition duration-700"></div>

            <div className="relative overflow-hidden rounded-3xl">

              <Image
                src="/images/about.webp"
                alt="Prime Event Wedding"
                width={700}
                height={850}
                priority
                sizes="(max-width:768px) 100vw, 50vw"
                className="rounded-3xl object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

          </div>

        </Reveal>

        {/* Right Content */}

        <Reveal>

          <div>

            <span className="uppercase tracking-[6px] text-yellow-500 text-sm">
              About Us
            </span>

            <h2 className="text-5xl lg:text-6xl font-bold mt-4 leading-tight">

              Creating

              <span className="text-yellow-500">

                {" "}Luxury Celebrations

              </span>

            </h2>

            <p className="text-gray-400 text-lg leading-9 mt-8">

              Prime Event is a luxury wedding and event management company
              based in Udaipur, dedicated to designing unforgettable
              celebrations with creativity, elegance and flawless execution.

              <br /><br />

              From intimate ceremonies to grand royal weddings, destination
              weddings, birthdays, corporate events and receptions,
              every celebration is crafted with perfection.

            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-md p-6 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-500">

                <h3 className="text-4xl font-bold text-yellow-400">
               <Counter end={500} suffix="+" />
                </h3>

                <p className="text-gray-400 mt-2">
                  Events
                </p>

              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-md p-6 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-500">

                <h3 className="text-4xl font-bold text-yellow-400">
               <Counter end={200} suffix="+" />                </h3>

                <p className="text-gray-400 mt-2">
                  Weddings
                </p>

              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-md p-6 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-500">

                <h3 className="text-4xl font-bold text-yellow-400">
                <Counter end={10} suffix="+" />                </h3>

                <p className="text-gray-400 mt-2">
                  Years
                </p>

              </div>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}