"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { CheckCircle, Sparkles, ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white mt-10">
        <section className="max-w-7xl mx-auto px-6 py-24 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-[#09bbc8]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Supercharge your business with intelligent solutions, custom
            applications, and a world-class team—ready on demand.
          </p>
        </section>

        {/* Service 1 */}
        <section className="relative px-6 md:px-12 max-w-6xl mx-auto mb-20">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg relative z-20 p-6 md:p-12">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <Image
                  src="/service1NoBg.png"
                  alt="Next-Gen Website Illustration"
                  width={800}
                  height={600}
                  className="rounded-xl object-cover w-full h-auto"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Next-Generation Business Website
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  We create websites that are more than just digital
                  brochures—they&apos;re intelligent, integrated platforms that
                  represent your brand and drive conversions. Our AI-powered
                  agents can connect and manage your social media presence,
                  while on-demand content keeps your message fresh and
                  SEO-optimized.
                </p>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 animate-pulse" />
                    <span>AI-managed social media integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 animate-pulse" />
                    <span>SEO-optimized by design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 animate-pulse" />
                    <span>On-demand video, animation, and written content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2 */}
        <section className="relative px-6 md:px-12 max-w-6xl mx-auto mb-20">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg relative z-20 p-6 md:p-12">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <Image
                  src="/service2NoBg.png"
                  alt="Custom Solutions Illustration"
                  width={800}
                  height={600}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                    On-Demand Tailored Solutions
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Whether it&apos;s a CRM system, eCommerce backend, or
                  enterprise-grade workflow automation, we design, develop, and
                  deploy software that solves real problems. Our solutions are
                  fully customizable and scalable to meet your evolving needs.
                </p>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-teal-400 mt-1 animate-pulse" />
                    <span>Custom application development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-teal-400 mt-1 animate-pulse" />
                    <span>Automate manual processes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-teal-400 mt-1 animate-pulse" />
                    <span>CRM, eCommerce, and enterprise solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3 */}
        <section className="relative px-6 md:px-12 max-w-6xl mx-auto mb-20">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg relative z-20 p-6 md:p-12">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <Image
                  src="/service3NoBg.png"
                  alt="HRaaS Illustration"
                  width={800}
                  height={600}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                    Human Resource as a Service (HRaaS)
                  </h2>
                </div>
                <p className="text-gray-300 mb-6 text-lg">
                  Expand your capabilities with top-tier professionals—without
                  the hassle of hiring. We provide you with experienced software
                  engineers, QA specialists, product managers, and AI experts
                  who integrate seamlessly with your workflows.
                </p>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-yellow-400 mt-1 animate-pulse" />
                    <span>Dedicated software engineering teams</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-yellow-400 mt-1 animate-pulse" />
                    <span>QA engineers & product/project managers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-yellow-400 mt-1 animate-pulse" />
                    <span>AI engineers & data scientists</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
