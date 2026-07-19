"use client";

import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const faqs = [
  {
    question: "Do you organize destination weddings across India?",
    answer:
      "Yes. Prime Event specializes in destination weddings across Udaipur, Jaipur, Jodhpur and many other locations in India. We manage everything from planning to flawless execution.",
  },
  {
    question: "Can I customize my wedding package?",
    answer:
      "Absolutely. Every wedding is unique, so we create fully customized packages according to your budget, theme, guest count and preferences.",
  },
  {
    question: "How early should I book Prime Event?",
    answer:
      "We recommend booking at least 3–6 months before your event to ensure the best venues, vendors and smooth planning.",
  },
  {
    question: "Do you provide decoration only?",
    answer:
      "Yes. We provide luxury wedding decoration services separately as well as complete event planning solutions.",
  },
  {
    question: "Do you arrange photography & videography?",
    answer:
      "Yes. We offer premium photography, cinematic videography, drone shoots, reels and complete wedding films.",
  },
  {
    question: "Do you provide catering services?",
    answer:
      "Yes. We work with experienced catering partners offering delicious multi-cuisine menus for every type of event.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-gradient-to-b from-[#0d0d0d] to-black">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-yellow-500 text-sm">
            FAQ
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Frequently Asked
            <span className="text-yellow-500"> Questions</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Here are answers to some of the most common questions our
            clients ask before booking their dream wedding or event.
          </p>

        </div>

        {/* FAQ */}

        <div className="max-w-4xl mx-auto">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="mb-5 rounded-2xl border border-yellow-500/20 bg-[#171717] overflow-hidden transition hover:border-yellow-500"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-7 py-6 text-left"
              >

                <span className="text-lg md:text-xl font-semibold">
                  {item.question}
                </span>

                <span className="text-yellow-500 text-xl">

                  {open === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}

                </span>

              </button>

              {open === index && (

                <div className="px-7 pb-6 text-gray-400 leading-8 border-t border-yellow-500/10">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="text-center mt-20">

          <h3 className="text-3xl font-bold mb-4">

            Still Have Questions?

          </h3>

          <p className="text-gray-400 mb-8">

            Our team is always ready to help you plan your perfect celebration.

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-3 bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition duration-300"
            >
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
