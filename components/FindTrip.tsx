"use client";
import Link from "next/link";
import { useState } from "react";

export default function FindTrip() {
  const [city, setCity] = useState("");
  const [direction, setDirection] = useState("");
  const [tripType, setTripType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ city, direction, tripType, startDate, endDate });
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-auto w-full h-96 lg:h-auto px-4 lg:px-0">
      <h1 className="text-white text-3xl lg:text-7xl font-semibold text-center mb-6">
        Find Your Trip
      </h1>

      <form
        onSubmit={handleSearch}
        className="flex flex-col lg:flex-row p-4 lg:p-0"
      >
        <div className="grid grid-cols-2 lg:flex shadow-lg rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none overflow-hidden bg-white">
          {/* City Selection */}
          <div className="flex flex-col w-full lg:w-48 h-24 border-b sm:border-b-0 lg:border-r border-gray-300 px-6 justify-center">
            <span className="text-sm text-gray-500 mb-2">City</span>
            <select
              className="bg-white text-lg outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Tbilisi">Tbilisi</option>
              <option value="Batumi">Batumi</option>
              <option value="Kutaisi">Kutaisi</option>
            </select>
          </div>

          {/* Direction Selection */}
          <div className="flex flex-col w-full lg:w-48 h-24 border-b sm:border-b-0 lg:border-r border-gray-300 px-6 justify-center">
            <span className="text-sm text-gray-500 mb-2">Direction</span>
            <select
              className="bg-white text-lg outline-none"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Tbilisi">Tbilisi</option>
              <option value="Batumi">Batumi</option>
              <option value="Kutaisi">Kutaisi</option>
            </select>
          </div>

          {/* Type Selection */}
          <div className="flex flex-col w-full lg:w-48 h-24 border-b sm:border-b-0 lg:border-r border-gray-300 px-6 justify-center">
            <span className="text-sm text-gray-500 mb-2">Type</span>
            <select
              className="bg-white text-lg outline-none"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Cultural">Cultural</option>
            </select>
          </div>

          {/* Start Date */}
          <div className="flex flex-col w-full lg:w-48 h-24 border-b sm:border-b-0 lg:border-r border-gray-300 px-6 justify-center">
            <span className="text-sm text-gray-500 mb-2">Start Date</span>
            <input
              type="date"
              className="bg-white text-lg outline-none"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          {/* End Date */}
          <div className="flex flex-col w-full lg:w-48 h-24 border-gray-300 px-6 justify-center">
            <span className="text-sm text-gray-500 mb-2">End Date</span>
            <input
              type="date"
              className="bg-white text-lg outline-none"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Explore Button */}
        <button
          type="submit"
          className="relative w-full lg:w-48 min-h-12 lg:min-h-24 px-6 bg-primary-100 font-semibold text-white overflow-hidden rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none group"
        >
          <span className="absolute inset-0 bg-secondary transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-1000"></span>
          <span className="relative transition-colors duration-100">
            Explore
          </span>
        </button>
      </form>

      <Link href="/">
        <p className="text-white text-lg font-semibold text-center mt-6 hover:text-primary transition-colors duration-1000">
          SEE ALL TOURS NOW
        </p>
      </Link>
    </div>
  );
}
