"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-100 transition-colors duration-500 ${
          isScrolled ? "bg-[#0f1115] shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="flex items-center px-6 py-4 md:px-20 lg:px-40 bg-[#0f1115]">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image alt="novelty_lab" width={40} height={40} src="/logo.png" />
            <Link href="/">
              <h1 className="text-2xl font-semibold text-white tracking-wide">
                Novelty Lab
              </h1>
            </Link>
          </div>

          {/* Spacer to push center links to center */}
          <div className="hidden md:flex flex-1 justify-center gap-10">
            {[
              { label: "Our Approach", href: "/approach" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Blogs", href: "/blogs" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-md font-medium text-white hover:text-[#09bbc8] transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right: CTA or Menu Icon */}
          <div className="ml-auto flex items-center">
            {/* Desktop CTA */}

            <SignedOut>
              <SignUpButton>
                <button className="hidden md:block cursor-pointer border border-[#09bbc8] px-5 py-2 rounded-lg text-base font-medium hover:bg-[#09bbc8] transition text-white">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* Mobile Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white cursor-pointer ml-4"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0f1115] shadow-xl z-50 px-6 py-5 animate-slideDown">
            <div className="flex flex-col gap-4">
              {[
                { label: "Our Approach", href: "/approach" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Blogs", href: "/blogs" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-[#09bbc8] transition"
                >
                  {label}
                </Link>
              ))}
              <SignedOut>
                <SignUpButton>
                  <button className="cursor-pointer border border-[#09bbc8] px-4 py-2 rounded-lg text-lg font-medium hover:bg-[#09bbc8] transition text-white">
                    Get Started
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
