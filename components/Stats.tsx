"use client";

import {
  FaHeart,
  FaUsers,
  FaStar,
  FaGlassCheers,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaGlassCheers />,
    number: "500+",
    title: "Events Managed",
  },
  {
    icon: <FaHeart />,
    number: "300+",
    title: "Happy Couples",
  },
  {
    icon: <FaUsers />,
    number: "50+",
    title: "Professional Team",
  },
  {
    icon: <FaStar />,
    number: "4.9★",
    title: "Google Rating",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0b0b0b] to-[#141414]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-yellow-500">
            Our Journey in Numbers
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Every celebration we create reflects our passion,
            creativity, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#171717] border border-yellow-500/20 rounded-3xl p-8 text-center hover:border-yellow-500 hover:-translate-y-3 transition-all duration-500 shadow-lg"
            >
              <div className="text-yellow-500 text-5xl flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-4 text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}