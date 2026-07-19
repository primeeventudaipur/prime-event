"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Contact() {
const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.phone || !form.email) {
    toast.error("Please fill all required fields.");
    return;
  }

  if (!form.email.includes("@")) {
    toast.error("Invalid Email Address");
    return;
  }

  if (form.phone.length < 10) {
    toast.error("Invalid Mobile Number");
    return;
  }

  setLoading(true);

  try {
    await emailjs.send(
      "service_p8dtenm",
      "template_y8rbblj",
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        event: form.event,
        location: form.location,
        date: form.date,
        guests: form.guests,
        budget: form.budget,
        message: form.message,
      },
      "g5XmgIylMg_SxqWju"
    );

    setSuccess(true);
    

    setForm({
      name: "",
      phone: "",
      email: "",
      date: "",
      event: "",
      location: "",
      guests: "",
      budget: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    toast.error("Failed to send inquiry.");
  }

  setLoading(false);
};

const [success, setSuccess] = useState(false);
const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  date: "",
  event: "",
  location: "",
  guests: "",
  budget: "",
  message: "",
});

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-[#0b0b0b] to-[#111]"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

  <span className="uppercase tracking-[6px] text-yellow-500 text-sm">
    Contact Us
  </span>

  <h2 className="text-5xl lg:text-6xl font-bold mt-4 text-white">
    Book Your
    <span className="text-yellow-500"> Dream Event</span>
  </h2>

  <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
    Every unforgettable celebration starts with a conversation.
    Tell us about your event and our experts will help transform
    your vision into an extraordinary experience.
  </p>

</div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT */}

          <div>

            <div className="space-y-6">

              <div className="group flex items-start gap-5 p-7 rounded-3xl
bg-white/5
backdrop-blur-md
border border-yellow-500/20
hover:border-yellow-400
hover:-translate-y-2
hover:shadow-[0_0_35px_rgba(212,175,55,.18)]
transition-all duration-500">

                <div className="w-16 h-16 rounded-full
bg-gradient-to-br
from-yellow-400
to-yellow-600
flex
items-center
justify-center
text-black
text-2xl
group-hover:scale-110
transition-all duration-500">


                  <FaMapMarkerAlt />
                </div>

                <div>

                  <h3 className="text-2xl font-semibold">
                    Office Address
                  </h3>

                  <a
  href="https://maps.google.com/?q=Udaipur,Rajasthan"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 mt-2 hover:text-yellow-500 transition"
>
  Udaipur, Rajasthan
</a>

                </div>

              </div>

              <div className="group flex items-start gap-5 p-7 rounded-3xl
bg-white/5
backdrop-blur-md
border border-yellow-500/20
hover:border-yellow-400
hover:-translate-y-2
hover:shadow-[0_0_35px_rgba(212,175,55,.18)]
transition-all duration-500">

                <div className="w-16 h-16 rounded-full
bg-gradient-to-br
from-yellow-400
to-yellow-600
flex
items-center
justify-center
text-black
text-2xl
group-hover:scale-110
transition-all duration-500">


                  <FaPhoneAlt />
                </div>

                <div>

                  <h3 className="text-2xl font-semibold">
                    Call Us
                  </h3>

                  <a
                    href="tel:+919829534564"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    +91 9829534564
                  </a>

                </div>

              </div>

              <div className="group flex items-start gap-5 p-7 rounded-3xl
bg-white/5
backdrop-blur-md
border border-yellow-500/20
hover:border-yellow-400
hover:-translate-y-2
hover:shadow-[0_0_35px_rgba(212,175,55,.18)]
transition-all duration-500">

                <div className="w-16 h-16 rounded-full
bg-gradient-to-br
from-yellow-400
to-yellow-600
flex
items-center
justify-center
text-black
text-2xl
group-hover:scale-110
transition-all duration-500">

                  <FaEnvelope />
                </div>

                <div>

                  <h3 className="text-2xl font-semibold">
                    Email
                  </h3>

                  <a
                    href="mailto:info@primeeventudaipur.in"
                    className="text-gray-400 hover:text-yellow-500"
                  >
                    info@primeeventudaipur.in
                  </a>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="mt-10">

              <h4 className="text-xl font-semibold mb-5">
                Follow Us
              </h4>

              <div className="flex gap-4">

                <a
                  href="https://instagram.com/prime_event___"
                  target="_blank"
  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://facebook.com/primeevent"
                   target="_blank"
  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
                >
                  <FaFacebookF />
                </a>

                <a
                 href="https://wa.me/9829534564"
                  target="_blank"
  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1c1c1c] border border-yellow-500/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition"
                >
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative overflow-hidden
bg-white/5
backdrop-blur-md
rounded-[32px]
p-10
border
border-yellow-500/20
shadow-2xl">

            <h3 className="text-3xl font-bold mb-8">
              Send Inquiry
            </h3>

            <form
onSubmit={handleSubmit}
className="grid md:grid-cols-2 gap-5"
>

              <input
  type="text"
  placeholder="Full Name"
  value={form.name}
  onChange={(e) =>
    setForm({ ...form, name: e.target.value })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition"
/>

              <input
  type="tel"
  placeholder="Mobile Number"
  value={form.phone}
  onChange={(e) =>
    setForm({ ...form, phone: e.target.value })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition"
/>

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e)=>
                setForm({...form,email:e.target.value})
                }
                className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 transition"
              />

              <input
                type="date"
                onChange={(e) =>
    setForm({ ...form, date: e.target.value })
  }
                className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 transition"
/>

              <select
                value={form.event}
  onChange={(e) =>
    setForm({ ...form, event: e.target.value })
  }
                className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 transition"
              >
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Haldi</option>
                <option>Mehndi</option>
                <option>Reception</option>
                <option>Corporate Event</option>
                <option>Birthday</option>
              </select>

<input
  type="text"
  placeholder="Event Location"
  value={form.location}
  onChange={(e) =>
    setForm({ ...form, location: e.target.value })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 transition"
/>

                <input
  type="number"
  placeholder="Expected Guests"
  value={form.guests}
  onChange={(e) =>
    setForm({ ...form, guests: e.target.value })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 transition"
/>

<select
value={form.budget}
  onChange={(e) =>
    setForm({ ...form, budget: e.target.value })
  }
  className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 transition"
>

  <option>Budget Range</option>

  <option>₹1 Lakh - ₹5 Lakh</option>

  <option>₹5 Lakh - ₹10 Lakh</option>

  <option>₹10 Lakh - ₹20 Lakh</option>

  <option>₹20 Lakh+</option>

</select>


              <textarea
                
              rows={5}
  placeholder="Tell us about your event..."
  value={form.message}
  onChange={(e) =>
    setForm({ ...form, message: e.target.value })
  }
                className="w-full rounded-xl border border-yellow-500/20 bg-[#111] px-5 py-4 outline-none focus:border-yellow-500 transition"
              />

              <button
              disabled={loading}
className="md:col-span-2 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-full hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(212,175,55,.45)] transition-all duration-500"
>
{loading
? "Sending..."
: "Book Consultation"}
</button>

            </form>

          </div>

        </div>

      </div>

{success && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]">

<div className="bg-[#181818] p-10 rounded-3xl border border-yellow-500 text-center max-w-md">

<h3 className="text-3xl font-bold text-yellow-500">

Thank You!

</h3>

<p className="text-gray-300 mt-4">

Your Inquiry has been submitted successfully.

We'll contact you shortly.

</p>

<button

onClick={()=>setSuccess(false)}

className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-full font-bold"

>

Close

</button>

</div>

</div>

)}

{/* Google Map */}

<div className="mt-20">

  <h3 className="text-3xl font-bold text-center mb-8">

    Find Us

  </h3>

  <div className="overflow-hidden rounded-3xl border border-yellow-500/20 shadow-2xl">

    <iframe
      src="https://www.google.com/maps?q=Udaipur,Rajasthan&output=embed"
      width="100%"
      height="450"
      loading="lazy"
      style={{ border: 0 }}
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />

  </div>

</div>
    </section>
  );
}
