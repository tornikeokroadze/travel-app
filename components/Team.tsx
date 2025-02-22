"use client";

import AllButton from "./UI/AllButton";
import { useFetchData } from "@/utils/fetchData";
import TeamCard from "./UI/TeamCard";

export default function Team() {
  const { data: teams } = useFetchData("teams?limit=4");

  return (
    <div className="relative overflow-hidden mt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src="/team-one-map.png"
          className="w-full h-full object-cover opacity-100"
          alt="Background Shape"
        />
      </div>
      <div className="realtive px-4 mt-20">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center">
          OUR TEAM
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="mt-20 mb-16 sm:mb-6 px-4 lg:px-2">
            <TeamCard teams={teams} />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <AllButton hrefTo="our-team" />
        </div>
      </div>
    </div>
  );
}
