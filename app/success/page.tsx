"use client";
import { useFetchData } from "@/utils/fetchData";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { ThreeDot } from "react-loading-indicators";

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const { loading, error } = useFetchData(
    `payment-success?session_id=${sessionId}`
  );

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 8000);

    return () => clearTimeout(timer);
  }, [router]);

  if (!sessionId) return null;

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

  if (error)
    return (
      <p
        className="fixed top-4 right-4 px-6 py-3 text-white text-lg bg-red-500 rounded-lg shadow-lg opacity-100 transition-all duration-300 transform translate-y-0 z-50"
        style={{
          animation: "slideIn 0.5s ease, fadeOut 0.5s 2.5s forwards",
        }}
      >
        {error}
      </p>
    );

  return (
    <div className="flex flex-col justify-center items-center my-10 space-y-2">
      <IoCheckmarkCircle size={100} color="green" />
      <p className="text-lg">Payment Successful!</p>
      <p className="text-lg">Thank you for choosing us!</p>
      <div className="flex space-x-4">
        <Link
          href="/"
          className="relative sm:mt-10 px-6 sm:px-8 py-3 bg-primary-100 text-white overflow-hidden rounded-lg group text-sm sm:text-base"
        >
          <span className="absolute inset-0 bg-secondary transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-1000"></span>
          <span className="relative transition-colors duration-100">HOME</span>
        </Link>

        <button
          onClick={handleGoBack}
          className="relative sm:mt-10 px-6 sm:px-8 py-3 bg-primary-100 text-white overflow-hidden rounded-lg group text-sm sm:text-base"
        >
          <span className="absolute inset-0 bg-secondary transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-1000"></span>
          <span className="relative transition-colors duration-100">
            GO BACK
          </span>
        </button>
      </div>
    </div>
  );
}
