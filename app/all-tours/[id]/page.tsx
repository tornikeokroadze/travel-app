"use client";

import { usefetchObj } from "@/utils/fetchObj";
import { notFound, useParams } from "next/navigation";
import { ThreeDot } from "react-loading-indicators";
import Book from "@/components/Book";
import { useFetchData } from "@/utils/fetchData";
import ToursCard from "@/components/UI/ToursCard";
import AllButton from "@/components/UI/AllButton";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  throw new Error("Stripe publishable key is not defined in the environment variables.");
}

const stripePromise = loadStripe(stripePublishableKey);

export default function TourDetail() {
  const params = useParams();

  const { data: tour, loading, error } = usefetchObj(`allTours/${params.id}`);
  const { data: tours } = useFetchData(`tours?limit=3&id=${params.id}`);

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
          <Elements stripe={stripePromise}>
            <Book tourId={tour.id} tourPrice={tour.price} />
          </Elements>
        </div>
      </div>
      <p className="text-md text-primary-100 font-semibold mt-4">
        Tour duration: {formatDate(tour.startDate)} - {formatDate(tour.endDate)}
      </p>
      <h1 className="text-2xl sm:text-4xl font-semibold my-2">{tour.title}</h1>
      <p className="text-sm text-primary-100">Location: {tour.location}</p>
      <p className="text-sm text-primary-100">Price: {tour.price}$</p>
      <p className="mt-4 text-lg">{tour.description}</p>

      <hr className="mt-20 h-1/2 border-filter" />
      <div className="mt-12">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center">
          ALL TOURS
        </h2>

        <div className="my-6">
          <ToursCard tours={tours} hrefTo="all-tours" />
        </div>

        <div className="flex justify-center items-center">
          <AllButton />
        </div>
      </div>
    </div>
  );
}
