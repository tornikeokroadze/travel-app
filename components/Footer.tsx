"use client";
import Link from "next/link";
import { IoCall, IoMail, IoArrowUp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-secondary w-full mt-20">
      <div className="relative min-h-[400px] flex flex-col py-10">
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-7xl px-4 mx-auto mb-10 md:mb-0">
          {/* Left Section */}
          <div className="flex flex-col gap-10">
            <Link href="/">
              <img src="/logo.png" alt="logo" width={150} height={50} />
            </Link>

            <div className="flex flex-col gap-3">
              <a href="tel:+995555555555" className="flex items-center gap-2">
                <IoCall size={20} className="text-primary" />
                <span className="text-md text-gray-400 hover:text-primary-100 duration-300">
                  +995 555 55 55 55
                </span>
              </a>

              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2"
              >
                <IoMail size={20} className="text-primary" />
                <span className="text-md text-gray-400 hover:text-primary-100 duration-300">
                  info@example.com
                </span>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex gap-10 sm:gap-16 mt-6 lg:mt-0">
            <div className="flex flex-col">
              <ul className="text-gray-400 text-md">
                <Link href="">
                  <li className="relative group hover:translate-x-6 hover:text-white transition-all duration-500 mb-4">
                    Our Tours
                    <span className="absolute bottom-1/2 -left-4 w-3 h-[2px] bg-primary-100 scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  </li>
                </Link>
                <Link href="">
                  <li className="relative group hover:translate-x-6 hover:text-white transition-all duration-500 mb-4">
                    One Day Tours
                    <span className="absolute bottom-1/2 -left-4 w-3 h-[2px] bg-primary-100 scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  </li>
                </Link>
                <Link href="">
                  <li className="relative group hover:translate-x-6 hover:text-white transition-all duration-500 mb-4">
                    Experience
                    <span className="absolute bottom-1/2 -left-4 w-3 h-[2px] bg-primary-100 scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  </li>
                </Link>
                <Link href="">
                  <li className="relative group hover:translate-x-6 hover:text-white transition-all duration-500 mb-4">
                    Adventures
                    <span className="absolute bottom-1/2 -left-4 w-3 h-[2px] bg-primary-100 scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  </li>
                </Link>
              </ul>
            </div>

            <div className="flex flex-col">
              <ul className="text-gray-400 text-md">
                <Link href="">
                  <li className="relative group hover:translate-x-6 hover:text-white transition-all duration-500 mb-4">
                    All Tours
                    <span className="absolute bottom-1/2 -left-4 w-3 h-[2px] bg-primary-100 scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  </li>
                </Link>
                <Link href="">
                  <li className="relative group hover:translate-x-6 hover:text-white transition-all duration-500 mb-4">
                    Our Team
                    <span className="absolute bottom-1/2 -left-4 w-3 h-[2px] bg-primary-100 scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  </li>
                </Link>
                <Link href="">
                  <li className="relative group hover:translate-x-6 hover:text-white transition-all duration-500 mb-4">
                    About
                    <span className="absolute bottom-1/2 -left-4 w-3 h-[2px] bg-primary-100 scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  </li>
                </Link>
                <Link href="">
                  <li className="relative group hover:translate-x-6 hover:text-white transition-all duration-500 mb-4">
                    Contact
                    <span className="absolute bottom-1/2 -left-4 w-3 h-[2px] bg-primary-100 scale-x-0 group-hover:scale-x-100 transition-all"></span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Stays Bottom-Right on Large Screens, Adjusts on Mobile */}
        <div className="absolute bottom-0 right-0 w-5/6 bg-secondary-200 rounded-tl-lg overflow-hidden">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                className="bg-primary-100 px-6 py-6 rounded-tl-lg hover:bg-secondary-300 transition-all duration-500"
                onClick={scrollToTop}
              >
                <IoArrowUp size={24} className="text-white" />
              </button>

              <div className="hidden md:flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-secondary-300 p-4 rounded-full hover:scale-105 hover:bg-primary-100 hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
                    <FaFacebook size={14} className="text-white" />
                  </div>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-secondary-300 p-4 rounded-full hover:scale-105 hover:bg-primary-100 hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
                    <FaInstagram size={14} className="text-white" />
                  </div>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-secondary-300 p-4 rounded-full hover:scale-105 hover:bg-primary-100 hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
                    <FaYoutube size={14} className="text-white" />
                  </div>
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white font-semibold mt-4 sm:mt-0 pr-10 2xl:mr-72">
              Copyright © 2025 | Created By Tornike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
