"use client";

import Navbar from "../components/Navbar";
import {
  Brain,
  CalendarCheck,
  Landmark,
  Smile,
  Sparkles,
  Zap,
  Target,
  Rocket,
} from "lucide-react";
import { useState, useEffect } from "react";

// Blinking particles component
const BlinkingParticles = () => {
  const particles = [
    { id: 1, x: 15, y: 25, color: "cyan-400", delay: 0 },
    { id: 2, x: 85, y: 40, color: "purple-400", delay: 1 },
    { id: 3, x: 25, y: 70, color: "emerald-400", delay: 2 },
    { id: 4, x: 70, y: 80, color: "yellow-400", delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-2 h-2 bg-${particle.color} rounded-full animate-ping`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Animated background grid
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse" />
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          className="text-cyan-400/20"
        />
      </svg>
    </div>
  );
};

// Interactive step card component
const StepCard = ({
  step,
  icon: Icon,
  title,
  description,
  color,
  index,
}: {
  step: number;
  icon: never;
  title: string;
  description: string;
  color: "cyan" | "purple" | "emerald" | "yellow";
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const colorClasses = {
    cyan: "from-cyan-400 to-cyan-600 shadow-cyan-400/25",
    purple: "from-purple-400 to-purple-600 shadow-purple-400/25",
    emerald: "from-emerald-400 to-emerald-600 shadow-emerald-400/25",
    yellow: "from-yellow-400 to-yellow-600 shadow-yellow-400/25",
  };

  return (
    <div
      className={`relative group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${colorClasses[color]} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000`}
      />

      {/* Main card */}
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="20"
              cy="20"
              r="2"
              fill="currentColor"
              className={`text-${color}-400`}
            />
            <circle
              cx="80"
              cy="30"
              r="1.5"
              fill="currentColor"
              className={`text-${color}-400`}
            />
            <circle
              cx="60"
              cy="80"
              r="1"
              fill="currentColor"
              className={`text-${color}-400`}
            />
            <path
              d="M20,20 Q50,10 80,30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className={`text-${color}-400`}
            />
          </svg>
        </div>

        {/* Step number */}
        <div
          className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
        >
          {step}
        </div>

        {/* Icon with animation */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${
              colorClasses[color]
            } shadow-lg transform transition-transform duration-300 ${
              isHovered ? "rotate-12 scale-110" : ""
            }`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2
            className={`text-2xl font-bold bg-gradient-to-r ${colorClasses[color]} bg-clip-text text-transparent`}
          >
            {title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed transition-all duration-300 group-hover:text-gray-200">
          {description}
        </p>

        {/* Animated border */}
        <div
          className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${colorClasses[color]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        />
      </div>
    </div>
  );
};

export default function OurApproachPage() {
  const steps = [
    {
      step: 1,
      icon: Brain,
      title: "Get Onboarded",
      description:
        "Our intelligent AI onboarding agents dive deep into your business DNA, understanding your goals, challenges, and aspirations — even when you're still discovering what your vision could become.",
      color: "cyan",
    },
    {
      step: 2,
      icon: CalendarCheck,
      title: "Meet In Person",
      description:
        "We bridge the digital divide with meaningful face-to-face connections, whether in-person or virtually, to align our understanding and co-create your path forward.",
      color: "purple",
    },
    {
      step: 3,
      icon: Landmark,
      title: "Define Milestones",
      description:
        "Your project transforms into a series of clear, achievable milestones with transparent tracking, ensuring rapid progress and complete visibility every step of the way.",
      color: "emerald",
    },
    {
      step: 4,
      icon: Smile,
      title: "Deliver with Delight",
      description:
        "Experience purpose-built solutions that don't just meet expectations — they exceed them, delivering software and automation that solves real problems in ways you never imagined.",
      color: "yellow",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Navbar />
      <AnimatedGrid />

      <main className="relative z-10 mt-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:px-12 text-center relative">
          <BlinkingParticles />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">
                Innovation Meets Implementation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Our <span className="text-[#09bbc8]">Approach</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              We understand that not every business has it all figured out — and{" "}
              <span className="text-cyan-400 font-semibold">
                that&apos;s where we thrive
              </span>
              . Our process is designed to uncover your needs, clarify your
              vision, and build solutions that truly matter.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Precision Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-purple-400" />
                <span>Future Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our 4-Step Innovation Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From initial discovery to final delivery, every step is crafted to
              maximize impact and minimize uncertainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <StepCard key={step.step} {...step} index={index} />
            ))}
          </div>

          {/* Process flow visualization */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <span className="text-sm text-gray-300">
                  Seamless Flow, Exceptional Results
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 pb-24 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 animate-pulse" />
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Start Your Innovation Journey?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Let&apos;s explore what&apos;s possible when cutting-edge
                technology meets your unique vision.
              </p>
              <button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="relative z-10">Begin Your Project</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
