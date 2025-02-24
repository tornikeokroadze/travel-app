"use client";
import AllButton from "./UI/AllButton";
import { useFetchData } from "@/utils/fetchData";
import ToursCard from "./UI/ToursCard";
import { useParams } from "next/navigation";

export default function Experience({moreStyle}: {moreStyle: String}) {
  const params = useParams();
  const { data: tours, loading, error } = useFetchData(`tours?experience=true&limit=3${params.id ? `&id=${params.id}` : ''}`);

  return (
    <div className={`mx-auto ${moreStyle}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center sm:text-left">
          EXPERIENCE
        </h2>
        <AllButton hrefTo="experience" />
      </div>

      <ToursCard tours={tours} hrefTo="experience" showDetail={false} showDuration={false} />
      
    </div>
  );
}
