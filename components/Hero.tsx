"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Contact from "./Contact";

const Hero = ({ addStyle }: { addStyle?: string }) => {
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(false);
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
    <div className={`relative ${addStyle}`}>
      <div className="absolute inset-0 z-0">
        <img
          src="/background.jpg"
          alt="background"
          className="w-full h-full object-cover filter brightness-75"
        />
      </div>

      <div className="relative z-10">
        <Contact />

        <div className={`flex justify-around items-center px-28 py-6`}>
          {/* Logo */}
          <Link href="/">
            <img src="/logo.png" alt="logo" width={150} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-12 text-white font-semibold py-6">
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

          {/* mobile Navigation */}
          <div className="lg:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? "/close.svg" : "/menu.svg"}
              alt="menu"
              width={30}
              height={30}
              className="object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !mounted || !toggle ? "hidden" : "show"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-secondary`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 text-white">
                {links.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <li key={link.href} className="relative">
                      <Link
                        href={link.href}
                        className={`relative pb-2 transition duration-300 ${
                          mounted && isActive
                            ? "border-b-2 border-primary"
                            : "border-b-2 border-transparent"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <hr className="h-1/2 border-t-1 border-filter" />
      </div>
    </div>
  );
};

export default Hero;
