"use client";
import { useFetchData } from "@/utils/fetchData";
import AllButton from "./UI/AllButton";
import { ThreeDot } from "react-loading-indicators";
import Link from "next/link";

export default function BestOffers() {
  const {
    data: tours,
    loading,
    error,
  } = useFetchData("tours?bestOffer=true&limit=4");

  if (loading)
    return (
      <div className="flex justify-center items-center mt-20">
        <ThreeDot
          variant="bounce"
          color="#313041"
          size="small"
          text=""
          textColor=""
        />
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center">
        BEST OFFERS
      </h2>

      <div className="mt-6 sm:mt-10 space-y-4 px-4 xl:px-0">
        <div className="flex flex-col sm:flex-row gap-4">
          {tours.slice(0, 2).map((tour, index) => (
            <Link
              key={tour.id}
              href={`/all-tours/${tour.id}`}
              className={`w-full ${
                index === 0 ? "sm:w-2/3" : "sm:w-1/3"
              } relative group overflow-hidden cursor-pointer`}
            >
              <img
                className="h-64 sm:h-96 w-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
                src={`/tours/${tour.image}`}
                alt={tour.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg">
                <span className="text-white text-lg sm:text-xl font-semibold">
                  {tour.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {tours.slice(2, 4).map((tour, index) => (
            <Link
              key={tour.id}
              href={`/all-tours/${tour.id}`}
              className={`w-full ${
                index === 0 ? "sm:w-1/3" : "sm:w-2/3"
              } relative group overflow-hidden cursor-pointer`}
            >
              <img
                className="h-64 sm:h-96 w-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
                src={`/tours/${tour.image}`}
                alt={tour.title}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-end p-4 sm:p-6 rounded-lg">
                <span className="text-white text-lg sm:text-xl font-semibold">
                  {tour.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-12 lg:mt-0">
        <AllButton hrefTo="all-tours"/>
      </div>
    </div>
  );
}
