import {
  FaAward,
  FaHeart,
  FaUsers,
  FaCamera,
  FaGem,
  FaMapMarkedAlt,
  FaGlassCheers,
  FaRegSmileBeam,
} from "react-icons/fa";

const data = [
  {
    icon: <FaGem size={42} />,
    title: "Luxury Experience",
    desc: "Premium planning with royal décor and flawless execution for unforgettable celebrations.",
  },
  {
    icon: <FaHeart size={42} />,
    title: "Personalized Planning",
    desc: "Every wedding is designed according to your style, traditions, and dream vision.",
  },
  {
    icon: <FaUsers size={42} />,
    title: "Expert Team",
    desc: "Experienced planners, decorators, coordinators, and event specialists under one roof.",
  },
  {
    icon: <FaCamera size={42} />,
    title: "Beautiful Memories",
    desc: "Professional photography & videography to capture every magical moment.",
  },
  {
    icon: <FaMapMarkedAlt size={42} />,
    title: "Destination Weddings",
    desc: "Specialized in luxury destination weddings across Udaipur and Rajasthan.",
  },
  {
    icon: <FaGlassCheers size={42} />,
    title: "Complete Event Management",
    desc: "From venue setup to guest coordination, we handle every detail professionally.",
  },
  {
    icon: <FaAward size={42} />,
    title: "Trusted Excellence",
    desc: "Hundreds of successful events managed with a strong reputation for quality.",
  },
  {
    icon: <FaRegSmileBeam size={42} />,
    title: "Happy Clients",
    desc: "Creating joyful experiences that leave lasting impressions on every guest.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section-padding relative py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-yellow-500 uppercase tracking-[3px] text-sm font-semibold mb-3">
            Why Clients Trust Us
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Why Choose <span className="text-yellow-500">Prime Event</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 mt-6 text-lg leading-8">
            We combine creativity, luxury, and professional management to deliver weddings and events that are elegant, stress-free, and truly unforgettable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#161616] rounded-3xl p-8 border border-yellow-500/10 hover:border-yellow-500/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 group-hover:bg-yellow-500/15 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-[#151515] border border-yellow-500/10">
            <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
            <p className="text-gray-400 mt-2">Events Managed</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-[#151515] border border-yellow-500/10">
            <h3 className="text-3xl font-bold text-yellow-500">300+</h3>
            <p className="text-gray-400 mt-2">Happy Couples</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-[#151515] border border-yellow-500/10">
            <h3 className="text-3xl font-bold text-yellow-500">4.9★</h3>
            <p className="text-gray-400 mt-2">Client Rating</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-[#151515] border border-yellow-500/10">
            <h3 className="text-3xl font-bold text-yellow-500">8+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
