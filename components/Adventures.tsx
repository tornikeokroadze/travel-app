"use client";
import { useState, useEffect } from "react";
import Tours from "./UI/Tours";
import AllButton from "./UI/AllButton";
import { useFetchData } from "@/utils/fetchData";

export default function Adventures() {
  const [scrollY, setScrollY] = useState(0);

  //fetch tours
  const { data: tours, loading, error } = useFetchData("tours?limit=6");

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
  const parallaxEffect = scrollY * 0.07;

  return (
    <div className="relative mt-20 min-h-[1100px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat brightness-50"
        style={{
          backgroundImage: `url('/2.jpg')`,
          transform: `translateY(-${parallaxEffect}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <div className="relative z-0 py-8 flex flex-col justify-center items-center text-center min-h-screen w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white mb-10 px-4 sm:px-8">
          ADVENTURES
        </h2>

        <div className="mt-8 sm:mt-20 mb-8 sm:mb-4 px-7 sm:px-8 w-full">
          <Tours haveBorder={false} tours={tours} hrefTo="adventures" />
        </div>

        <div className="flex justify-center items-center w-full">
          <AllButton hrefTo="adventures"/>
        </div>
      </div>
    </div>
  );
}
