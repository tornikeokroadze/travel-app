"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Set initial visibility to true
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true); // Set mounted to true after component is mounted on client

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setIsVisible(true); // Scrolling down, hide header
        } else {
          setIsVisible(false); // Scrolling up, show header
        }
        setLastScrollY(window.scrollY); // Update last scroll position
      }
    };

    if (mounted) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, mounted]);

  const links = [
    { href: "/", label: "Our Tours" },
    { href: "/one-day-tours", label: "One Day Tours" },
    { href: "/experience", label: "Experience" },
    { href: "/transfers", label: "Transfers" },
    { href: "/destination", label: "Destination" },
    { href: "/about", label: "About" },
  ];

  if (!mounted) return null;

  return (
    <div
      className={`min-h-24 flex justify-around items-center bg-secondary
       ${isVisible ? "opacity-100" : "opacity-0 -z-10"} transition-opacity duration-300 fixed w-full top-0 left-0 z-50`}
    >
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
                  isActive
                    ? "border-b-2 border-primary"
                    : "border-b-2 border-transparent"
                } ${
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
  );
};

export default Header;
