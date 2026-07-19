"use client";

import Link from "next/link";
import {
  FaCamera,
  FaBuilding,
  FaMusic,
  FaLeaf,
  FaUtensils,
  FaVideo,
  FaPalette,
  FaMapMarkedAlt,
  FaHeart,
  FaStar,
  FaGlassMartini,
} from "react-icons/fa";

const services = [
  {
    title: "Royal Wedding",
    icon: <FaStar />,
    desc: "Luxury wedding planning with royal themes and unforgettable experiences.",
  },
  {
    title: "Destination Wedding",
    icon: <FaMapMarkedAlt />,
    desc: "Beautiful destination weddings planned with perfection.",
  },
  {
    title: "Haldi Ceremony",
    icon: <FaLeaf />,
    desc: "Traditional Haldi ceremonies with vibrant decoration.",
  },
  {
    title: "Mehndi Ceremony",
    icon: <FaHeart />,
    desc: "Creative Mehndi themes with elegant décor.",
  },
  {
    title: "Sangeet Night",
    icon: <FaMusic />,
    desc: "Spectacular musical evenings with stage setup.",
  },
  {
    title: "Reception",
    icon: <FaGlassMartini />,
    desc: "Luxury reception planning with premium hospitality.",
  },
  {
    title: "Birthday Party",
    icon: <FaHeart />,
    desc: "Creative birthday celebrations for all age groups.",
  },
  {
    title: "Corporate Event",
    icon: <FaBuilding />,
    desc: "Professional corporate event management services.",
  },
  {
    title: "Photography",
    icon: <FaCamera />,
    desc: "Capture every precious moment with our experts.",
  },
  {
    title: "Videography",
    icon: <FaVideo />,
    desc: "Cinematic wedding films and event coverage.",
  },
  {
    title: "Catering",
    icon: <FaUtensils />,
    desc: "Delicious catering with premium presentation.",
  },
  {
    title: "Decoration",
    icon: <FaPalette />,
    desc: "Luxury floral and theme-based decorations.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
            What We Offer
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4 text-white">
            Premium
            <span className="text-yellow-500"> Event Services</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            From royal destination weddings to luxury celebrations and
            corporate events, we create unforgettable experiences with
            creativity, elegance, and flawless execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full overflow-hidden rounded-3xl p-10
              bg-white/5 backdrop-blur-md
              border border-yellow-500/20
              hover:border-yellow-400
              transition-all duration-500
              hover:-translate-y-4
              hover:scale-[1.03]
              hover:shadow-[0_0_45px_rgba(212,175,55,.25)]"
            >
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-yellow-500/10 blur-3xl group-hover:bg-yellow-500/20 transition duration-700"></div>

              <div
                className="relative z-10 w-20 h-20 rounded-full
                bg-gradient-to-br
                from-yellow-400
                to-yellow-600
                text-black
                flex
                items-center
                justify-center
                text-4xl
                mb-8
                shadow-lg
                group-hover:scale-110
                group-hover:rotate-12
                transition-all duration-500"
              >
                {service.icon}
              </div>

              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="relative z-10 text-gray-400 leading-8 mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="relative z-10 inline-flex items-center gap-2
                  bg-yellow-500
                  text-black
                  font-semibold
                  px-6
                  py-3
                  rounded-full
                  hover:bg-yellow-400
                  hover:gap-4
                  transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}