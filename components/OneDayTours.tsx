import Link from "next/link";
import Tours from "./UI/Tours";

export default function OneDayTours() {
  return (
    <div className="px-4 mt-20">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center">
        ONE DAY TOURS
      </h2>

      <div className="mt-20 mb-16 sm:mb-6">
        <Tours />
      </div>

      <div className="flex justify-center items-center">
        <Link
          href="/"
          className="relative sm:mt-10 px-6 sm:px-8 py-3 bg-primary-100 text-white overflow-hidden rounded-lg group text-sm sm:text-base"
        >
          <span className="absolute inset-0 bg-secondary transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-1000"></span>
          <span className="relative transition-colors duration-100">
            SEE ALL
          </span>
        </Link>
      </div>
    </div>
  );
}
