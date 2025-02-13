"use client";
import Link from "next/link";
import AllButton from "./UI/AllButton";
import { useFetchData } from "@/utils/fetchData";

export default function Experience() {
  const { data: tours, loading, error } = useFetchData("tours?limit=3");

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-2">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
          EXPERIENCE
        </h2>
        <AllButton />
      </div>

      <Link href="/experience">
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="group relative">
              <div className="h-[350px] sm:h-[450px] lg:h-[550px] w-full shadow-sm overflow-hidden rounded-lg relative">
                <img
                  src={`/tours/${tour.image}`}
                  alt={tour.title}
                  className="rounded-lg object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg" />
              </div>

              <p className="text-xl sm:text-2xl font-semibold mt-4 text-center hover:text-primary transition-colors duration-500">
                {tour.title}
              </p>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
