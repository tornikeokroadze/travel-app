"use client";
import { useState, useEffect } from "react";
import Tours from "./UI/Tours";
import AllButton from "./UI/AllButton";

export default function Adventures() {
  const [scrollY, setScrollY] = useState(0);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Parallax effect calculation
  const parallaxEffect = scrollY * 0.2;

  return (
    <div className="relative mt-20 min-h-[1600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat brightness-50"
        style={{
          backgroundImage: `url('/2.jpg')`,
          transform: `translateY(-${parallaxEffect}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="relative z-0 py-8 flex flex-col justify-center items-center text-center min-h-screen w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-10 px-4 sm:px-8">
          ADVENTURES
        </h2>

        <div className="mt-8 sm:mt-20 mb-16 sm:mb-6 px-7 sm:px-8 w-full">
          <Tours haveBorder={false} />
        </div>

        <div className="flex justify-center items-center mb-8 w-full">
          <AllButton />
        </div>
      </div>
    </div>
  );
}
