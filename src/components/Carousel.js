import React, { useEffect, useRef, useState } from "react";

export default function HeroCarousel() {
  const slides = [
    {
      img: "/images/ethiopia1.png",
      title: "Ethiopian Traditional Dress!",
      subtitle:
        "Free size beautiful Ethiopian Traditional dress. 100% cotton and Handmade. Fikerfashion traditional clothing",
    },
    {
      img: "/images/ethiopia2.png",
      title: "Wand Woven Cotton Clothing!",
      subtitle:
        "Habesha Kemis is a white hand-woven cotton clothing that is made from shemma. The shemma is hand-woven by traditional weavers and Hand-made patterns known as Tibeb (ጢቤቤ) are made using woven shiny threads and are added to the Kemis on the waistband and edges.",
    },
    {
      img: "/images/ethiopia3.png",
      title:
        "Eritrean and Ethiopian habesha traditional dress Chiffon / Shiffon",
      subtitle: "Fabric details: - Cotton fabric with full lining Length",
    },
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => resetTimeout();
  }, [current, slides.length]);

  return (
    <div className="relative w-full h-[380px] overflow-hidden rounded-t-md mb-4">
      {/* Image Section with diagonal clip */}
      <div className="absolute inset-0 z-10 clip-right bg-blue-700/60">
        <div className="flex justify-end items-center z-50 h-full w-full">
          <img
            src={slides[current].img}
            alt="Hero"
            className="w-[85%] h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Text Section with diagonal clip */}
      <div className="absolute inset-0 bg-gradient-to-l from-white to-[#0c2570] text-gray-300 z-10 clip-left p-10 flex flex-col justify-center w-full ">
        <div className="w-[65%] h-full flex flex-col justify-center items-start">
          <h1 className="text-xl md:text-2xl font-bold mb-4 w-[80%] z-100">
            {slides[current].title}
          </h1>
          <p className="text-md md:text-lg mb-6 max-w-md">
            {slides[current].subtitle}
          </p>
          <div className="space-x-4">
            <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-yellow-300 transition">
              Shop Now
            </button>
            <button className="px-6 py-2 border-[1px] border-white text-white bg-transparent font-semibold rounded-md hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-green-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
