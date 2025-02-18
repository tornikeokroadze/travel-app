"use client";


import { usefetchObj } from "@/utils/fetchObj";
import { notFound, useParams } from "next/navigation";
import { ThreeDot } from "react-loading-indicators";
import Book from "@/components/Book";

export default function TourDetail() {
  const params = useParams();

  const { data: tour, loading, error } = usefetchObj(`allTours/${params.id}`);

  if (!tour || error) return notFound();

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

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return `${formattedDate} at ${formattedTime}`;
  };

  return (
    <div className="container mx-auto mt-12 px-4 lg:px-24">
      <div className="flex flex-col 2xl:flex-row justify-between items-start space-y-6 2xl:space-y-0 2xl:space-x-8">
        <img
          src={`/tours/${tour.image}`}
          alt={tour.title}
          className="w-full max-h-[500px] object-cover rounded-lg shadow-xl"
        />
        <div className="flex-grow">
          <Book />
        </div>
      </div>
      <p className="text-md text-primary-100 font-semibold mt-4">
        Tour duration: {formatDate(tour.startDate)} - {formatDate(tour.endDate)}
      </p>
      <h1 className="text-2xl sm:text-4xl font-semibold my-2">
        {tour.title}
      </h1>
      <p className="text-sm text-primary-100">Location: {tour.location}</p>
      <p className="text-sm text-primary-100">Price: {tour.price}$</p>
      <p className="mt-4 text-lg">{tour.description}</p>
    </div>
  );
}
