"use client";

import Navbar from "../components/Navbar";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, User, Target, Rocket } from "lucide-react";
import Image from "next/image";

const chapters = [
  {
    id: 1,
    title: "Our Origin",
    icon: <Lightbulb className="text-yellow-400 w-8 h-8" />,
    content:
      "It started with frustration — watching businesses get bogged down by bloated tools and generic solutions. We knew there had to be a smarter, faster, more intelligent way.",
    image: "/about1.png",
  },
  {
    id: 2,
    title: "Our Mission",
    icon: <Target className="text-red-400 w-8 h-8" />,
    content:
      "We build AI-powered, purpose-built digital experiences that help businesses scale with speed, intelligence, and custom precision.",
    image: "/about2.png",
  },
  {
    id: 3,
    title: "Our People",
    icon: <User className="text-cyan-400 w-8 h-8" />,
    content:
      "We’re a small, focused team of builders, designers, and engineers — working in sync to deliver elegant solutions that just work.",
    image: "/about3.png",
  },
  {
    id: 4,
    title: "Our Future",
    icon: <Rocket className="text-green-400 w-8 h-8" />,
    content:
      "We’re not just chasing trends — we’re building the next generation of tools that empower modern brands to own their identity and velocity.",
    image: "/about4.png",
  },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <Navbar />
      <main
        ref={containerRef}
        className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory"
      >
        {chapters.map((section, idx) => (
          <section
            key={section.id}
            className="h-screen w-full flex items-center justify-center px-6 md:px-20 lg:px-40 snap-start relative text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="max-w-5xl text-center space-y-8"
            >
              <div className="flex items-center justify-center gap-3">
                {section.icon}
                <h2 className="text-3xl md:text-5xl font-bold text-[#f5f5f5]">
                  {section.title}
                </h2>
              </div>
              <p className="text-lg md:text-xl =text-gray-200 leading-relaxed">
                {section.content}
              </p>
              <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden bg-slate-800 ring-1 ring-white/10 shadow-lg">
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  fill
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </section>
        ))}
      </main>
    </>
  );
}
