"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full transition-colors duration-500 z-100",
        isScrolled ? "bg-[#0f1115] shadow-xl" : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center px-8 py-4 md:px-20 lg:px-40 transition-all duration-500">
        <div className="flex items-center gap-2">
          <Image alt="novelty_lab" width={50} height={50} src="/logo.png" />
          <h1
            className={clsx(
              "text-2xl tracking-wider font-semibold transition-colors duration-500 text-white"
            )}
          >
            Novelty Lab
          </h1>
        </div>
        <div className="hidden md:flex gap-10">
          {["Services", "About", "Contact"].map((label) => (
            <Link
              key={label}
              href="/"
              className={clsx(
                "text-md font-medium transition-colors duration-500 text-white"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <div>
          <button
            className={clsx(
              "border border-[#09bbc8] px-5 py-3 cursor-pointer rounded-lg text-base font-medium hover:bg-[#09bbc8] transition text-white"
            )}
          >
            Connect With Us
          </button>
        </div>
      </div>
    </nav>
  );
}
