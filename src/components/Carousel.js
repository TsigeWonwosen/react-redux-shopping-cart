import React, { useEffect, useRef, useState } from "react";

export default function HeroCarousel() {
  const slides = [
    {
      img: "/images/product1.jpg",
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      subtitle: "Explore our latest shoe collection",
    },
    {
      img: "/images/product2.jpg",
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      subtitle: "Industrial shoes made for your safety",
    },
    {
      img: "/images/product3.jpg",
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      subtitle: "Find the perfect pair for every occasion",
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
    <div className="relative w-full h-[350px] overflow-hidden rounded-t-md ">
      {/* Image Section with diagonal clip */}
      <div className="absolute inset-0 z-0 clip-right">
        <img
          src={slides[current].img}
          alt="Hero"
          className="w-full h-full  object-cover object-right-top"
        />
      </div>

      {/* Text Section with diagonal clip */}
      <div className="absolute inset-0 bg-black/90 text-white z-10 clip-left p-10 flex flex-col justify-center w-full ">
        <div className="w-[70%] h-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 w-[80%] z-100">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-md">
            {slides[current].subtitle}
          </p>
          <div className="space-x-4">
            <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-yellow-300 transition">
              Shop Now
            </button>
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
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
