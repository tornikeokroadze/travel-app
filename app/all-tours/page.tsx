"use client";
import { useState } from "react";
import ToursCard from "@/components/UI/ToursCard";
import { useFetchData } from "@/utils/fetchData";
import { ThreeDot } from "react-loading-indicators";

export default function Page() {
  const [page, setPage] = useState(1);
  const pageSize = 12;
  const {
    data: allTours,
    loading,
    error,
  } = useFetchData(`allTours?page=${page}`);

  if (loading) {
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
  }

  const hasMoreData = allTours && allTours.length === pageSize;

  if (error) {
    return <div>Error loading tours: {error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-0 mt-16">
      <ToursCard tours={allTours} hrefTo="all-tours" />

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-6 items-center">
        <button
          className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-primary-100 transition-colors duration-300 disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-xl font-semibold text-gray-900">Page {page}</span>
        <button
          className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-primary-100 transition-colors duration-300 disabled:opacity-50"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!hasMoreData}
        >
          Next
        </button>
      </div>
    </div>
  );
}
