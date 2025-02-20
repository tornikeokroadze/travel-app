"use client";

import AllButton from "@/components/UI/AllButton";
import { usefetchObj } from "@/utils/fetchObj";
import { notFound } from "next/navigation";
import { ThreeDot } from "react-loading-indicators";

export default function page() {
  const { data: about, loading, error } = usefetchObj("about");
  if (!about || error) return notFound();

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
    <div className="container mx-auto mt-12 px-4 lg:px-32 space-y-8">
      <div className="flex flex-col justify-center items-center space-y-6 2xl:space-y-0 2xl:space-x-8">
        <img
          src={`/${about.image}`}
          alt={about.title}
          className="w-full max-h-[600px] object-cover rounded-lg shadow-xl"
        />
      </div>
      <h1 className="text-2xl sm:text-4xl font-semibold my-2">{about.title}</h1>
      <p className="mt-4 text-lg text-slate-500">{about.description}</p>

      <hr className="h-1/2 border-filter" />
      <div className="flex justify-center items-center w-full">
        <AllButton hrefTo="contact" text="CONTACT US" />
      </div>
    </div>
  );
}
