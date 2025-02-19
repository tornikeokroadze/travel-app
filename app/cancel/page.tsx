"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoCloseCircle } from "react-icons/io5";

export default function page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="flex flex-col justify-center items-center my-10 space-y-2">
      <IoCloseCircle size={100} color="green" />
      <p className="text-lg">Payment Failed!</p>
      <p className="text-lg">Please try again later</p>
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
