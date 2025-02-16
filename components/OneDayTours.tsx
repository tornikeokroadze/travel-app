"use client";

import Tours from "./UI/Tours";
import AllButton from "./UI/AllButton";
import { useFetchData } from "@/utils/fetchData";

export default function OneDayTours() {
  const {
    data: tours,
    loading,
    error,
  } = useFetchData("tours?duration=1&limit=6");

  return (
    <div className="px-4 mt-20">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center">
        ONE DAY TOURS
      </h2>

      <div className="mt-20 mb-16 sm:mb-6">
        <Tours haveBorder={true} tours={tours} />
      </div>

      <div className="flex justify-center items-center">
        <AllButton />
      </div>
    </div>
  );
}
