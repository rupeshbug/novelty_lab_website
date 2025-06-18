"use client";

import Navbar from "../components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Lightbulb, User, Target, Rocket } from "lucide-react";

const chapters = [
  {
    id: 1,
    title: "Our Origin",
    icon: <Lightbulb className="text-yellow-400 w-6 h-6" />,
    content:
      "It started with frustration — watching businesses get bogged down by bloated tools and generic solutions. We knew there had to be a smarter, faster, more intelligent way.",
    image: "/step3.png",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 2,
    title: "Our Mission",
    icon: <Target className="text-red-400 w-6 h-6" />,
    content:
      "We build AI-powered, purpose-built digital experiences that help businesses scale with speed, intelligence, and custom precision.",
    image: "/step3.png",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Our People",
    icon: <User className="text-cyan-400 w-6 h-6" />,
    content:
      "We're a small, focused team of builders, designers, and engineers — working in sync to deliver elegant solutions that just work.",
    image: "/step3.png",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: 4,
    title: "Our Future",
    icon: <Rocket className="text-green-400 w-6 h-6" />,
    content:
      "We're not just chasing trends — we're building the next generation of tools that empower modern brands to own their identity and velocity.",
    image: "/step3.png",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Safe: hook calls outside loops
  // First card is fully visible initially
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
  const s1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  // Other cards start partially visible from bottom, become fully visible when active
  const y2 = useTransform(scrollYProgress, [0, 0.25, 0.5], [350, 0, -50]);
  const s2 = useTransform(scrollYProgress, [0.15, 0.25, 0.5], [0.8, 1, 0.95]);

  const y3 = useTransform(scrollYProgress, [0, 0.5, 0.75], [400, 0, -50]);
  const s3 = useTransform(scrollYProgress, [0.4, 0.5, 0.75], [0.8, 1, 0.95]);

  const y4 = useTransform(scrollYProgress, [0, 0.75, 1], [450, 0, -50]);
  const s4 = useTransform(scrollYProgress, [0.65, 0.75, 1], [0.8, 1, 0.95]);

  const yArray = [y1, y2, y3, y4];
  const sArray = [s1, s2, s3, s4];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * chapters.length);
      setActiveSection(Math.min(index, chapters.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <Navbar />

      <main className="pt-20 py-12 px-6 md:px-20 lg:px-40 lg:py-16 relative min-h-screen">
        {/* Sidebar */}
        <div className="fixed top-1/2 -translate-y-1/2 left-6 md:left-20 lg:left-40 z-40 hidden lg:block">
          <div className="space-y-6 max-w-xs">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Our Story
            </h3>
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index <= activeSection ? 1 : 0.3,
                  x: index <= activeSection ? 0 : -20,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    index <= activeSection
                      ? "bg-gradient-to-r " +
                        chapter.color +
                        " ring-2 ring-white/20"
                      : "bg-gray-800/50"
                  }`}
                >
                  {chapter.icon}
                </div>
                <p
                  className={`font-medium transition-colors duration-300 ${
                    index <= activeSection ? "text-white" : "text-gray-500"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}. {chapter.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scrollable Section */}
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${chapters.length * 100}vh` }}
        >
          {/* Fixed centered container for cards */}
          <div className="fixed inset-0 flex items-center justify-center z-30 pointer-events-none">
            <div className="flex items-center justify-center w-full h-full">
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  style={{
                    y: yArray[index],
                    scale: sArray[index],
                    zIndex: index + 10,
                  }}
                  className="absolute"
                >
                  <div
                    className={`relative w-[600px] h-[500px] max-w-[90vw] max-h-[80vh] bg-gradient-to-br ${chapter.color} 
                      backdrop-blur-sm border border-white/20 rounded-2xl 
                      shadow-2xl overflow-hidden bg-gray-900/95
                    `}
                    style={{ transform: `translateY(${index * 8}px)` }}
                  >
                    {/* Background */}
                    <div className="absolute inset-0">
                      <Image
                        src={chapter.image}
                        alt={chapter.title}
                        fill
                        className="object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                            {chapter.icon}
                          </div>
                          <p className="text-xs text-gray-400 font-medium">
                            Chapter {String(index + 1).padStart(2, "0")}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {chapter.title}
                        </h2>
                        <p className="text-lg text-gray-200 leading-relaxed">
                          {chapter.content}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-white/50 to-transparent" />
                          <span>Continue scrolling</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          {index + 1} of {chapters.length}
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile indicator */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          {chapters.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= activeSection ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
