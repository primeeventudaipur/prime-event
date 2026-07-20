"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  return (
    <section className="section-padding bg-black text-white overflow-hidden">
      <div className="container-premium">

        {/* Section Header */}

        <Reveal>

          <div className="text-center max-w-5xl mx-auto mb-28 -translate-y-10">

            <span className="uppercase tracking-[7px] text-yellow-500 text-base font-semibold">
              About Us
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

              Creating

              <span className="text-yellow-500">
                {" "}Luxury Celebrations
              </span>

            </h2>

            <p className="mt-12 text-gray-400 text-lg leading-10 max-w-4xl mx-auto">

              Prime Event is a luxury wedding and event management company
              based in Udaipur, creating unforgettable celebrations with
              creativity, elegance, flawless execution and timeless
              experiences for every client.

            </p>

          </div>

        </Reveal>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-32 xl:gap-32 items-center">

          {/* Left Image */}

          <Reveal>

  <div className="relative group">

    {/* Golden Glow */}
    <div className="absolute -inset-8 rounded-full bg-yellow-500/10 blur-3xl opacity-70 transition duration-700 group-hover:opacity-100"></div>

    {/* Image Container */}
    <div className="relative h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden rounded-[36px] border border-yellow-500/20 shadow-[0_25px_80px_rgba(0,0,0,.45)]">

      <Image
        src="/images/about.webp"
        alt="Prime Event Wedding"
        fill
        priority
        sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 45vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

    </div>

  </div>

</Reveal>

          {/* Right Story */}

          <Reveal>

            <div>

              <span className="relative + -top-8 text-yellow-600 uppercase tracking-[6px] text-base font-semibold">
                Our Story
              </span>

              <h3 className="mt-5 text-4xl lg:text-6xl font-bold leading-tight">

                Every Celebration

                <span className="text-yellow-500">
                  {" "}Should Feel Royal
                </span>

              </h3>

              <p className="mt-8 text-gray-400 leading-10 text-lg">
                                From intimate weddings to grand destination celebrations,
                birthdays, receptions and corporate events, our team focuses
                on every detail to deliver an unforgettable experience that
                reflects elegance, luxury and perfection.

                <br />
                <br />

                We believe every event tells a unique story. Our creative
                planning, premium décor and flawless coordination ensure that
                every guest leaves with beautiful memories that last forever.

              </p>

              <Link
               href="/services"
                className="mt-15 h-9 w-[160px] px-10 translate-x-35 translate-y-9 inline-flex items-center justify-center rounded-full border border-green-500 py-15 gap-3 bg-yellow-500 text-black px-8 rounded-full font-semibold hover:bg-yellow-400 hover:gap-10 transition-all duration-300"
              >
                Discover More →
              </Link>

            </div>

          </Reveal>

        </div>

        {/* Stats */}

        <Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40 translate-y-12">

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-md p-10 text-center hover:border-yellow-400 hover:-translate-y-3 transition-all duration-500">

              <h3 className="text-5xl font-bold text-yellow-400">

                <Counter end={500} suffix="+" />

              </h3>

              <p className="mt-4 text-gray-400 text-lg">

                Successful Events

              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-md p-10 text-center hover:border-yellow-400 hover:-translate-y-3 transition-all duration-500">

              <h3 className="text-5xl font-bold text-yellow-400">

                <Counter end={200} suffix="+" />

              </h3>

              <p className="mt-4 text-gray-400 text-lg">

                Luxury Weddings

              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 backdrop-blur-md p-10 text-center hover:border-yellow-400 hover:-translate-y-3 transition-all duration-500">

              <h3 className="text-5xl font-bold text-yellow-400">

                <Counter end={10} suffix="+" />

              </h3>

              <p className="mt-4 text-gray-400 text-lg">

                Years Experience

              </p>

            </div>

          </div>

        </Reveal>
              

      </div>

    </section>
  );
}