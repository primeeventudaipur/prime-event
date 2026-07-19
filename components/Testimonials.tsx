"use client";

import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
} from "react-icons/fa";

const reviews = [
  {
    name: "Rahul & Priya",
    event: "Destination Wedding",
    review:
      "Prime Event transformed our dream wedding into reality. Every detail was beautifully managed and our guests were amazed.",
  },
  {
    name: "Amit Sharma",
    event: "Corporate Event",
    review:
      "Professional team, luxury decorations and flawless execution. Everything was perfectly organized from start to finish.",
  },
  {
    name: "Neha Jain",
    event: "Royal Wedding",
    review:
      "The decoration, hospitality and management were beyond expectations. Highly recommended for premium weddings.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#111] to-black">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[6px] text-yellow-500 text-sm">
            Testimonials
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4 text-white">
            What Our
            <span className="text-yellow-500"> Clients Say</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Client satisfaction is at the heart of everything we do.
            Here's what our happy clients say about their experience
            with Prime Event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#181818] border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500 transition-all duration-500 hover:-translate-y-3 shadow-xl"
            >
              <FaQuoteLeft className="text-yellow-500 text-4xl mb-6 opacity-60" />

              <p className="text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="flex text-yellow-500 mt-8 gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="flex items-center mt-8">
                <FaUserCircle className="text-yellow-500 text-5xl" />

                <div className="ml-4">
                  <h3 className="font-bold text-xl text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.event}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}