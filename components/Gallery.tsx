"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const gallery = [
  {
    image: "/images/gallery1.webp",
    title: "Royal Wedding",
    category: "Wedding",
  },
  {
    image: "/images/gallery2.webp",
    title: "Haldi Ceremony",
    category: "Haldi",
  },
  {
    image: "/images/gallery3.webp",
    title: "Mehndi Celebration",
    category: "Mehndi",
  },
  {
    image: "/images/gallery4.webp",
    title: "Grand Reception",
    category: "Reception",
  },
  {
    image: "/images/gallery5.webp",
    title: "Luxury Decor",
    category: "Decoration",
  },
  {
    image: "/images/gallery6.webp",
    title: "Destination Wedding",
    category: "Destination",
  },
];

export default function Gallery() {
const [selectedIndex, setSelectedIndex] = useState<number | null>(null);  

useEffect(() => {
  if (selectedIndex === null) return;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSelectedIndex(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedIndex]);

return (
    <section className="min-h-screen py-36 bg-gradient-to-b from-[#0b0b0b] to-black">

      <div className="container mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-yellow-500 uppercase tracking-[6px] text-sm">
            Portfolio
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-4">
            Our Beautiful
            <span className="text-yellow-500"> Gallery</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Every event tells a story. Explore our collection of
            unforgettable weddings and luxury celebrations crafted
            with elegance and perfection.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111] shadow-xl hover:shadow-yellow-500/20 transition-all duration-500"
            >

             <Image
  src={item.image}
  alt={`${item.title} by Prime Event Udaipur`}
  width={700}
  height={900}
  loading="lazy"
  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
  onClick={() => setSelectedIndex(index)}
  className="w-full h-[420px] object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
/>

priority={index < 2}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition duration-500 pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition duration-500 z-20">                <span className="inline-block bg-yellow-500 text-black text-xs font-bold px-4 py-2 rounded-full mb-4">

                  {item.category}

                </span>

                <h3 className="text-3xl font-bold">

                  {item.title}

                </h3>

                <button
                aria-label={`View ${item.title}`}
  onClick={() => setSelectedIndex(index)}
  className="mt-6 border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 hover:bg-yellow-500 hover:text-black transition-all duration-500"
>
  View Project
</button>

              </div>

            </div>

          ))}

        </div>

      </div>

{selectedIndex !== null && (
    <div
    className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
onClick={() => setSelectedIndex(null)}  >
   
<button
aria-label="Previous Image"
  onClick={(e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev! - 1
    );
  }}
  className="absolute left-6 md:left-10 text-white text-5xl hover:text-yellow-400 transition"
>
  ❮
</button>

    <Image
src={gallery[selectedIndex].image}
      alt="Gallery"
      width={1400}
      height={900}
      onClick={(e) => e.stopPropagation()}
      sizes="100vw"
      className="max-h-[90vh] w-auto rounded-xl"
    />

<button
aria-label="Next Image"
  onClick={(e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === gallery.length - 1 ? 0 : prev! + 1
    );
  }}
  className="absolute right-6 md:right-10 text-white text-5xl hover:text-yellow-400 transition"
>
  ❯
</button>

    <button
onClick={() => setSelectedIndex(null)}
      className="absolute top-8 right-8 text-white text-5xl hover:text-yellow-400 transition duration-300"
    >
      ×
    </button>

<div className="absolute top-10 left-10 text-white text-lg font-medium">
  {selectedIndex + 1} / {gallery.length}
</div>

  </div>
)}

    </section>
  );
}
