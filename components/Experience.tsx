"use client";
import AllButton from "./UI/AllButton";
import { useFetchData } from "@/utils/fetchData";
import ToursCard from "./UI/ToursCard";

export default function Experience() {
  const { data: tours, loading, error } = useFetchData("tours?limit=3");

  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-2">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
          EXPERIENCE
        </h2>
        <AllButton />
      </div>

      <ToursCard tours={tours} hrefTo="experience" />
      
    </div>
  );
}
