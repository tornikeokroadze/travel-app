"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Contact from "./Contact";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/", label: "Our Tours" },
    { href: "/one-day-tours", label: "One Day Tours" },
    { href: "/experience", label: "Experience" },
    { href: "/transfers", label: "Transfers" },
    { href: "/destination", label: "Destination" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <Contact />
      <div className="min-h-24 flex justify-around items-center mt-2">
        <Link href="/">
          <img src="/logo.png" alt="logo" width={150} height={50} />
        </Link>
        <ul className="flex gap-12 text-white font-semibold">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`relative pb-9 transition duration-300 ${
                    mounted && isActive
                      ? "border-b-2 border-primary"
                      : "border-b-2 border-transparent"
                  } ${
                    mounted &&
                    !isActive &&
                    "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Hero;
