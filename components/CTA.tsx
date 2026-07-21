import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="items-center relative flex min-h-[110vh] items-center justify-center overflow-hidden bg-black px-6 py-20">

      {/* Cinematic Background */}
      <div className="absolute inset-0">

        {/* Luxury Glow */}
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[220px]" />

        {/* Left Glow */}
        <div className="absolute -left-48 top-24 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[180px]" />

        {/* Right Glow */}
        <div className="absolute -right-48 bottom-20 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[180px]" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#090909] to-black" />

      </div>

      {/* Content */}
      <div className="items-center relative z-10 w-full max-w-7xl">

        {/* Luxury Glass Card */}
        <div className="translate-x-16 items-center mx-auto w-full max-w-[1100px] rounded-[48px] border border-yellow-500/20 bg-white/[0.04] px-8 h-[470px] shadow-[0_35px_120px_rgba(0,0,0,.45)] backdrop-blur-2xl hover:border-yellow-400/40 hover:shadow-[0_40px_120px_rgba(234,179,8,.12)]">

          {/* Inner Container */}
          <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center text-center">

            {/* Small Label */}

            <span className="w-[300px] flex items-center justify-center translate-y-1 rounded-full border border-yellow-500/30 bg-yellow-500/5 px-16 py-2 text-base font-semibold uppercase tracking-[8px] text-yellow-400 backdrop-blur-md">

              Book Your Event

            </span>

            {/* Heading */}

            <h2 className="mt-10 text-5xl font-black leading-[1.05] text-white md:text-6xl xl:text-7xl">

              Let's Create Your

              <span className="mt-2 block text-yellow-400">

                Dream Celebration

              </span>

            </h2>

            {/* Description */}

            <p className="translate-y-3 mt-10 max-w-3xl text-xl leading-10 text-gray-300">

              Every unforgettable celebration begins with a conversation.
              Whether you are planning a luxury destination wedding, corporate event,
              our team is ready to transform your vision into reality.

            </p>

            {/* Luxury Divider */}

            <div className="translate-y-3 mt-12 h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

            {/* ---------- PART 2 STARTS FROM HERE ---------- */}
                        {/* Buttons */}

            <div className="translate-y-4 mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">

              <button className="group inline-flex min-h-[68px] w-[270px] items-center justify-center gap-4 rounded-full bg-yellow-500 px-10 text-lg font-semibold text-black shadow-[0_20px_60px_rgba(234,179,8,.25)] transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_25px_80px_rgba(234,179,8,.45)]">

                <FaPhoneAlt className="transition-transform duration-300 group-hover:rotate-12" />

                Schedule Consultation

              </button>

              <button className="group inline-flex min-h-[68px] w-[270px] items-center justify-center gap-4 rounded-full border border-yellow-500/60 bg-transparent px-10 text-lg font-semibold text-yellow-400 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-yellow-400 hover:bg-yellow-500 hover:text-black">

                <FaWhatsapp className="text-xl transition-transform duration-300 group-hover:scale-110" />

                WhatsApp Now

              </button>

            </div>

            {/* Bottom Text */}

            <p className="translate-y-6 mt-14 max-w-2xl text-base leading-8 text-gray-500">

              Let's create something unforgettable together.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}