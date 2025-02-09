"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FindTrip() {
  const [city, setCity] = useState("");
  const [direction, setDirection] = useState("");
  const [tripType, setTripType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      city,
      direction,
      tripType,
      startDate,
      endDate,
    });
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-white text-7xl font-semibold mb-6">Find Your Trip</h1>

      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center py-6"
      >
        <div className="flex items-center shadow-lg">
          {/* City Selection */}
          <div className="w-48 h-24 border-r-[1px] border-filter bg-white rounded-l-lg text-lg flex flex-col justify-center px-10 text-gray-500">
            <span className="text-sm ml-1 mb-2">City</span>
            <select
              className="bg-white text-lg"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="Tbilisi">Tbilisi</option>
              <option value="Batumi">Batumi</option>
              <option value="Kutaisi">Kutaisi</option>
            </select>
          </div>

          {/* Direction Selection */}
          <div className="w-48 h-24 border-r-[1px] border-filter bg-white text-lg flex flex-col justify-center px-10 text-gray-500">
            <span className="text-sm ml-1 mb-2">Direction</span>
            <select
              className="bg-white text-lg"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              required
            >
              <option value="Tbilisi">Tbilisi</option>
              <option value="Batumi">Batumi</option>
              <option value="Kutaisi">Kutaisi</option>
            </select>
          </div>

          {/* Type Selection */}
          <div className="w-48 h-24 border-r-[1px] border-filter bg-white text-lg flex flex-col justify-center px-10 text-gray-500">
            <span className="text-sm ml-1 mb-2">Type</span>
            <select
              className="bg-white text-lg"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Cultural">Cultural</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="w-48 h-24 border-r-[1px] border-filter bg-white text-lg flex flex-col justify-center px-6 text-gray-500">
            <span className="text-sm mb-2">Start Date</span>
            <input
              type="date"
              className="bg-white text-lg"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          {/* End Date */}
          <div className="w-48 h-24 border-r-[1px] border-filter bg-white text-lg flex flex-col justify-center px-6 text-gray-500">
            <span className="text-sm mb-2">End Date</span>
            <input
              type="date"
              className="bg-white text-lg"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          {/* Explore Button */}
          <button
            type="submit"
            className="relative min-h-24 min-w-48 bg-primary-100 font-semibold text-white overflow-hidden rounded-r-lg group"
          >
            <span className="absolute inset-0 bg-secondary transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-1000"></span>
            <span className="relative transition-colors duration-300">
              Explore
            </span>
          </button>
        </div>
      </form>
      <Link href="/">
        <p className="text-white text-lg font-semibold mt-6 hover:text-primary transition-colors duration-1000">
          SEE ALL TOURS NOW
        </p>
      </Link>
    </div>
  );
}
