import React, { useEffect, useRef, useState } from "react";

export default function HeroCarousel() {
  const slides = [
    {
      img: "/images/bg-image1.png",
      title: "Ethiopian Traditional Dress!",
      subtitle:
        "Free size beautiful Ethiopian Traditional dress. 100% cotton and Handmade. Fikerfashion traditional clothing",
    },
    {
      img: "/images/bg-image2.png",
      title: "Hand Woven Cotton Clothing!",
      subtitle:
        "Habesha Kemis is a white hand-woven cotton clothing that is made from shemma. The shemma is hand-woven by traditional weavers and Hand-made patterns known as Tibeb (ጢቤቤ) are made using woven shiny threads and are added to the Kemis on the waistband and edges.",
    },
    {
      img: "/images/bg-image3.png",
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
    }, 7000);
    return () => resetTimeout();
  }, [current, slides.length]);

  return (
    <div className="relative w-full h-[380px] overflow-hidden rounded-t-md mb-4">
      {/* Image Section with diagonal clip */}
      <div className="hidden absolute inset-0 z-10 clip-right bg-blue-700/60 md:block">
        <div className="flex justify-end items-center z-50 h-full w-full">
          <img
            src={slides[current].img}
            alt="Hero"
            className="w-[85%] h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Text Section with diagonal clip */}
      <div className="absolute inset-0 bg-gradient-to-l from-white to-gray-300/40 text-green-900/70 z-5 md:clip-left p-10 flex flex-col justify-center w-full ">
        <div className=" w-[90%] sm:w-[80%] md:w-[65%] h-full flex flex-col justify-center items-start">
          <h1 className="text-md sm:text-xl md:text-2xl font-bold mb-4 w-[80%] z-100">
            {slides[current].title}
          </h1>
          <p className="text-md md:text-lg mb-6 max-w-md line-clamp-2 md:line-clamp-none text-gray-500/80">
            {slides[current].subtitle}
          </p>
          <div className="space-x-4">
            <button className="px-3 py-2 md:px-6 bg-green-600 text-gray-100 font-semibold rounded-md hover:bg-green-500 transition">
              Shop Now
            </button>
            <button className="px-3  md:px-6 py-2 border-[1px] border-green-400 text-green-400 bg-transparent font-semibold rounded-md hover:border-green-500 transition">
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
