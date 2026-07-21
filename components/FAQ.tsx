"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "How does your planning process work?",
    answer:
      "We begin with a detailed consultation to understand your vision, budget and preferences. From concept development to flawless execution, our team manages every detail while keeping you involved at every important step.",
  },
  {
    question: "Do you specialize in destination weddings?",
    answer:
      "Yes. We specialize in luxury destination weddings across Rajasthan and other premium locations, handling venue selection, décor, hospitality, logistics and guest management.",
  },
  {
    question: "Can you customize every event?",
    answer:
      "Absolutely. Every celebration is uniquely designed to reflect your personality, traditions and vision. We never rely on one-size-fits-all concepts.",
  },
  {
    question: "How early should we book Prime Event?",
    answer:
      "We recommend booking 6–12 months in advance for weddings and at least 2–3 months before other events to ensure the best planning experience.",
  },
  {
    question: "Do you handle décor, entertainment and hospitality?",
    answer:
      "Yes. Our team manages décor, entertainment, hospitality, guest experiences, vendor coordination and complete event execution under one roof.",
  },
];

type FAQProps = {
  standalone?: boolean;
};

export default function FAQ({
  standalone = false,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className=" section-padding flex items-center justify-center relative overflow-hidden bg-black pt-44 pb-32">


      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[220px]" />

      <div className="absolute -left-40 top-20 h-[350px] w-[350px] rounded-full bg-yellow-500/5 blur-[150px]" />

      <div className="absolute -right-40 bottom-20 h-[350px] w-[350px] rounded-full bg-yellow-500/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <Reveal>

          <div className="gap-3 relative mx-auto flex max-w-4xl flex-col items-center text-center">

             <span className="mt-8 flex w-[430px] h-[60px] whitespace-nowrap items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/5 text-base font-semibold uppercase tracking-[5px] text-yellow-400 backdrop-blur-md">

            Frequently Asked Questions

             </span>

            <h2 className="mt-16 mb-30 text-5xl font-black leading-[1.05] text-white md:text-6xl">

              Everything You Need

              <span className="mt-6 block text-yellow-400">

                To Know

              </span>

            </h2>

            <div className="mx-auto mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-300">

              We understand that planning a luxury celebration comes with
              many questions. Here are answers to the most common queries
              our clients ask before beginning their journey with Prime Event.

            </p>

          </div>

        </Reveal>

        {/* FAQ Cards */}

        <div className="mx-auto mt-26 max-w-[1100px] space-y-20">
        {faqs.map((faq, index) => (
          <Reveal key={index}>

       <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className={`overflow-hidden mb-10 rounded-[15px] border backdrop-blur-xl transition-all duration-500 ${
        openIndex === index
          ? "border-yellow-500/50 bg-white/[0.05] shadow-[0_0_45px_rgba(234,179,8,.08)]"
          : "border-white/10 bg-white/[0.03] hover:border-yellow-500/30"
      }`}
    >

      {/* Question */}

      <button
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
        className="flex w-full items-center justify-between px-8 py-7 text-left"
         >

        <div className="flex items-center gap-5">

          <div
            className={`h-10 w-1 rounded-full transition-all duration-300 ${
              openIndex === index
                ? "bg-yellow-500"
                : "bg-transparent"
            }`}
          />

          <h3 className="text-xl font-semibold text-white">

            {faq.question}

          </h3>

        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
            openIndex === index
              ? "border-yellow-500 bg-yellow-500 text-black"
              : "border-white/20 text-yellow-400"
          }`}
        >
          {openIndex === index ? <FaMinus /> : <FaPlus />}
        </div>

      </button>

      {/* Answer */}

      <AnimatePresence initial={false}>

        {openIndex === index && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >

            <div className="border-t border-yellow-500/10 px-14 pb-8 pt-7">

              <p className="leading-9 text-gray-300">

                {faq.answer}

              </p>
          </div>

                  </motion.div>

                 )}

                </AnimatePresence>

                          </motion.div>

               </Reveal>
               ))}

                      </div>

                       </div>
 
    </section>
  );
}
      