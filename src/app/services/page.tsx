"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  CheckCircle,
  Sparkles,
  ArrowRight,
  Zap,
  Lightbulb,
  Rocket,
  HandPlatter,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white mt-15 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-ping"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-500/10 rounded-full blur-md animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Hero Section with Experimental Design */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:px-12 text-center relative z-10">
          <div className="relative">
            {/* Floating Lab Elements */}
            <div className="absolute -top-8 left-1/4 animate-float">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"></div>
            </div>
            <div
              className="absolute -top-12 right-1/3 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Lightbulb className="w-6 h-6 text-yellow-400 opacity-70" />
            </div>
            <div
              className="absolute -top-6 right-1/4 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <Zap className="w-5 h-5 text-cyan-400 opacity-60" />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-10 relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Our Laboratory of
              </span>
              <br />
              <span className="text-[#09bbc8] relative">
                Innovation
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#09bbc8] to-transparent animate-pulse"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mt-5">
              Where cutting-edge technology meets creative experimentation.
              <span className="text-cyan-400 font-semibold">
                {" "}
                Supercharge your business
              </span>{" "}
              with intelligent solutions, custom applications, and a world-class
              team—ready on demand.
            </p>
          </div>
        </section>

        {/* Service Cards with Experimental Layout */}
        <div className="relative z-10 mt-[-10]">
          {/* Service 1 - Tilted Card */}
          <section className="relative px-6 md:px-12 max-w-6xl mx-auto mb-16 md:mb-24 cursor-pointer">
            <div className="transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl relative z-20 p-8 md:p-16 overflow-hidden">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl animate-pulse"></div>
                <div className="absolute inset-1 bg-gray-900/80 rounded-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2 relative">
                    {/* Floating Elements Around Image */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-30 animate-bounce"></div>
                    <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-40 animate-pulse"></div>

                    <Image
                      src="/service1NoBg.png"
                      alt="Next-Gen Website Illustration"
                      width={800}
                      height={600}
                      className="rounded-2xl object-cover w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Next-Generation Business Website
                      </h2>
                    </div>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      We create websites that are more than just digital
                      brochures—they&apos;re
                      <span className="text-purple-400 font-semibold">
                        {" "}
                        intelligent, integrated platforms
                      </span>{" "}
                      that represent your brand and drive conversions. Our
                      AI-powered agents can connect and manage your social media
                      presence, while on-demand content keeps your message fresh
                      and SEO-optimized.
                    </p>
                    <div className="space-y-6 text-gray-300">
                      {[
                        "AI-managed social media integration",
                        "SEO-optimized by design",
                        "On-demand video, animation, and written content",
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                          <div className="p-2 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-colors">
                            <CheckCircle className="w-5 h-5 text-indigo-400 animate-pulse" />
                          </div>
                          <span className="group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 2 - Floating Card */}
          <section className="relative px-6 md:px-12 max-w-6xl mx-auto mb-16 md:mb-24 cursor-pointer">
            <div className="transform hover:scale-105 transition-all duration-700 hover:rotate-1">
              <div className="bg-gradient-to-bl from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl relative z-20 p-8 md:p-16 overflow-hidden">
                {/* Animated Border Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-sky-500/20 rounded-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="absolute inset-1 bg-gray-900/80 rounded-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row-reverse gap-12 items-center">
                  <div className="w-full md:w-1/2 relative">
                    {/* Floating Elements Around Image */}
                    <div
                      className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-30 animate-spin"
                      style={{ animationDuration: "8s" }}
                    ></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full opacity-40 animate-ping"></div>

                    <Image
                      src="/service2NoBg.png"
                      alt="Custom Solutions Illustration"
                      width={800}
                      height={600}
                      className="rounded-2xl object-cover w-full h-auto transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                        On-Demand Tailored Solutions
                      </h2>
                    </div>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Whether it&apos;s a CRM system, eCommerce backend, or
                      enterprise-grade workflow automation, we{" "}
                      <span className="text-cyan-400 font-semibold">
                        design, develop, and deploy
                      </span>{" "}
                      software that solves real problems. Our solutions are
                      fully customizable and scalable to meet your evolving
                      needs.
                    </p>
                    <div className="space-y-6 text-gray-300">
                      {[
                        "Custom application development",
                        "Automate manual processes",
                        "CRM, eCommerce, and enterprise solutions",
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                          <div className="p-2 bg-teal-500/20 rounded-lg group-hover:bg-teal-500/30 transition-colors">
                            <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
                          </div>
                          <span className="group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service 3 - Morphing Card */}
          <section className="relative px-6 md:px-12 max-w-6xl mx-auto mb-8 md:mb-16 cursor-pointer">
            <div className="transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
              <div className="bg-gradient-to-tr from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl relative z-20 p-8 md:p-16 overflow-hidden">
                {/* Animated Border Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-rose-500/20 rounded-3xl animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div className="absolute inset-1 bg-gray-900/80 rounded-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-full md:w-1/2 relative">
                    {/* Floating Elements Around Image */}
                    <div
                      className="absolute -top-8 -left-8 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div className="absolute -bottom-8 -right-8 w-10 h-10 bg-gradient-to-r from-orange-400 to-rose-400 rounded-full opacity-30 animate-pulse"></div>

                    <Image
                      src="/service3NoBg.png"
                      alt="HRaaS Illustration"
                      width={800}
                      height={600}
                      className="rounded-2xl object-cover w-full h-auto transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                        <HandPlatter className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                        Human Resource as a Service (HRaaS)
                      </h2>
                    </div>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Expand your capabilities with{" "}
                      <span className="text-orange-400 font-semibold">
                        top-tier professionals
                      </span>
                      —without the hassle of hiring. We provide you with
                      experienced software engineers, QA specialists, product
                      managers, and AI experts who integrate seamlessly with
                      your workflows.
                    </p>
                    <div className="space-y-6 text-gray-300">
                      {[
                        "Dedicated software engineering teams",
                        "QA engineers & product/project managers",
                        "AI engineers & data scientists",
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                          <div className="p-2 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                            <ArrowRight className="w-5 h-5 text-yellow-400 animate-pulse" />
                          </div>
                          <span className="group-hover:text-white transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </>
  );
}
