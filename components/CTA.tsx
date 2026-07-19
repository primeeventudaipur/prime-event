import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-r from-[#0b0b0b] via-[#171717] to-[#0b0b0b]">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] -top-32 -left-20"></div>
      <div className="absolute w-[450px] h-[450px] bg-yellow-500/10 rounded-full blur-[120px] bottom-0 -right-20"></div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          <span className="uppercase tracking-[6px] text-yellow-500 text-sm">
            Book Your Event
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">

            Let's Create Your

            <span className="text-yellow-500"> Dream Celebration</span>

          </h2>

          <p className="text-gray-300 text-lg mt-8 leading-8">

            From intimate weddings to grand destination celebrations,
            Prime Event transforms your dreams into unforgettable memories
            with creativity, elegance, and flawless execution.

          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <button className="flex items-center justify-center gap-3 bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition duration-300 shadow-lg hover:shadow-yellow-500/40">

              <FaPhoneAlt />

              Book Free Consultation

            </button>

            <button className="flex items-center justify-center gap-3 border border-yellow-500 text-yellow-500 px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">

              <FaWhatsapp />

              Chat on WhatsApp

            </button>

          </div>

          {/* Trust Text */}

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">

            <span>✔ Free Consultation</span>

            <span>✔ Customized Planning</span>

            <span>✔ Luxury Decoration</span>

            <span>✔ 500+ Successful Events</span>

          </div>

        </div>

      </div>

    </section>
  );
}
