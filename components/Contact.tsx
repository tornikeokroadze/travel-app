import { useState, useEffect } from 'react';
import Link from "next/link";
import { IoCall, IoMail } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`justify-around items-center bg-filter hidden lg:flex`}
    >
      <div className="flex gap-10">
        <a href="tel:+995 555 55 55 55" className="flex items-center gap-2">
          <IoCall size={20} className="text-primary" />
          <span className="text-sm text-gray-400 hover:text-white duration-1000">
            +995 555 55 55 55
          </span>
        </a>

        <a href="mailto:info@example.com" className="flex items-center gap-2">
          <IoMail size={20} className="text-primary" />
          <span className="text-sm text-gray-400 hover:text-white duration-1000">
            info@example.com
          </span>
        </a>
      </div>

      <div className="flex gap-6 items-center">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            size={15}
            className="text-white hover:text-primary transition duration-300"
          />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={15}
            className="text-white hover:text-primary transition duration-300"
          />
        </a>

        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube
            size={15}
            className="text-white hover:text-primary transition duration-300"
          />
        </a>

        <Link href="/contact">
          <button className="relative px-12 py-2 bg-primary-100 font-semibold text-white overflow-hidden group border border-primary-100">
            <span className="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-1000"></span>
            <span className="relative group-hover:text-black transition-colors duration-300">
              Contact
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
