import Image from "next/image";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-[856px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/background.jpg"
            alt="background"
            className="w-full h-full object-cover filter"
          />
        </div>

        <div className="relative z-10">
          <Hero />
          <hr className="h-1/2 border-t-1 border-filter" />
        </div>
      </div>
      <div className="min-h-[1000px]">page</div>
    </div>
  );
}
