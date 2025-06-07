"use client";

import Navbar from "../components/Navbar";
import { Brain, CalendarCheck, Landmark, Smile } from "lucide-react";

export default function OurApproachPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white mt-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-[#09bbc8]">Approach</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We understand that not every business has it all figured out — and
            thats where we thrive. Our process is designed to uncover your
            needs, clarify your vision, and build solutions that truly matter.
          </p>
        </section>

        {/* 4-Step Process */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Step 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="w-8 h-8 text-cyan-400" />
              <h2 className="text-2xl font-bold text-cyan-400">
                1. Get Onboarded
              </h2>
            </div>
            <p className="text-gray-300">
              Our smart AI onboarding agents will learn about your business,
              goals, and vision — even when you are still exploring what that
              vision looks like.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <CalendarCheck className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl font-bold text-purple-400">
                2. Meet In Person
              </h2>
            </div>
            <p className="text-gray-300">
              We set up in-person or remote meetings to align our understanding,
              share ideas, and co-create direction before any build begins.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Landmark className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-bold text-emerald-400">
                3. Define Milestones
              </h2>
            </div>
            <p className="text-gray-300">
              We break your project into clear, trackable milestones to ensure
              rapid progress and transparency from day one.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Smile className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-yellow-400">
                4. Deliver with Delight
              </h2>
            </div>
            <p className="text-gray-300">
              The result? Purpose-built software, automation, or team support
              that solves real problems and often goes beyond what you imagined.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
