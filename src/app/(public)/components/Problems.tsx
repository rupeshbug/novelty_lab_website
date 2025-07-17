"use client";

import { AlertTriangle, ShieldX, Wand2, Lightbulb, Zap } from "lucide-react";
import Image from "next/image";

export default function ProblemSection() {
  const problems = [
    {
      number: "01",
      icon: <AlertTriangle size={28} className="text-red-400" />,
      title: "Outdated Tools",
      desc: "Legacy platforms were designed for simpler times. They're rigid, slow, and require constant patchwork to keep up. Instead of propelling you forward, they slow your team down and eat up resources just to maintain basic functionality.",
      image: "/step1.png",
      color: "red",
    },
    {
      number: "02",
      icon: <ShieldX size={28} className="text-orange-400" />,
      title: "One-Size-Fits-All",
      desc: "Generic templates might get you started, but they can't evolve with your brand. You're stuck in a framework that wasn’t made for your business, limiting creativity, flexibility, and your ability to stand out in a competitive landscape.",
      image: "/step2.png",
      color: "orange",
    },
    {
      number: "03",
      icon: <Wand2 size={28} className="text-yellow-400" />,
      title: "Lack of Intelligence",
      desc: "Without built-in AI or smart automation, your team is left juggling repetitive tasks manually. This leads to inefficiency, human error, and wasted time — time that could be spent focusing on innovation and customer experience.",
      image: "/step3.png",
      color: "yellow",
    },
  ];

  return (
    <section className="px-6 py-12 md:px-20 lg:px-40 lg:py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mx-auto text-center relative z-10">
          <div className="flex items-center justify-center relative">
            <div className="relative">
              <Image
                src="/det_bot_1.png"
                alt="AI detective bot"
                width={120}
                height={120}
                className="opacity-90 drop-shadow-2xl"
                priority
              />
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-400 rounded-full opacity-60 animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-pulse" />
            </div>

            <h2 className="text-2xl md:text-5xl font-bold text-[#f5f5f5] mt-7">
              Why <span className="text-[#09bbc8]">Traditional</span> Tools Are
              Holding You Back
            </h2>
          </div>

          <p className="text-lg text-slate-100 mt-5 mb-10 mx-auto w-full xl:w-[60%] leading-relaxed">
            Older platforms like WordPress and generic website builders were
            never built for modern business needs. As your business grows, these
            tools start creating bottlenecks — from bloated plugins and poor
            performance to a lack of automation and disjointed branding.
          </p>
        </div>

        {/* Problems Section */}
        <div className="space-y-16 md:space-y-20 mt-5 md:mt-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl backdrop-blur-sm bg-${problem.color}-500/10 border border-${problem.color}-500/20 text-${problem.color}-400`}
                  >
                    {problem.number}
                  </div>
                  <div
                    className={`p-4 rounded-xl bg-${problem.color}-500/10 border border-${problem.color}-500/20`}
                  >
                    {problem.icon}
                  </div>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  {problem.title}
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {problem.desc}
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 bg-${problem.color}-400 rounded-full animate-pulse`}
                  />
                  <span
                    className={`text-${problem.color}-400 text-sm font-semibold uppercase tracking-wider`}
                  >
                    Critical Issue
                  </span>
                </div>
              </div>

              {/* Image */}
              <div>
                <div
                  className={`relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10 shadow-2xl shadow-${problem.color}-500/10 group`}
                >
                  <Image
                    src={problem.image || "/placeholder.svg"}
                    alt={problem.title}
                    fill
                    className="object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
                    {problem.icon}
                  </div>
                  <div
                    className={`absolute -top-3 -right-3 w-6 h-6 bg-${problem.color}-400 rounded-full shadow-lg shadow-${problem.color}-400/50 animate-pulse`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Lightbulb className="w-10 h-10 md:w-7 md:h-7 text-cyan-400 animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Ready for a <span className="text-cyan-400">Modern</span>{" "}
                Solution?
              </h3>
              <Zap className="w-10 h-10 md:w-7 md:h-7 text-yellow-400 animate-spin" />
            </div>
            <p className="text-lg text-slate-300 w-full md:max-w-3xl mx-auto leading-relaxed">
              Discover how AI-powered, purpose-built solutions eliminate these
              bottlenecks and unlock your business potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
