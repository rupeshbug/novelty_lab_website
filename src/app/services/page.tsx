"use client";

import Navbar from "../components/Navbar";
import { Briefcase, Rocket, Users } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white mt-10">
        <section className="max-w-7xl mx-auto px-6 py-24 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-[#09bbc8]">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Supercharge your business with intelligent solutions, custom
            applications, and a world-class team—ready on demand.
          </p>
        </section>

        {/* Service 1 */}
        <section className="relative px-6 md:px-12 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl py-10 px-6 md:p-16 border border-white/10 shadow-lg relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-10 h-10 text-indigo-400" />
              <h2 className="text-2xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Next-Generation Business Website
              </h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              We create websites that are more than just digital
              brochures—they&apos;re intelligent, integrated platforms that
              represent your brand and drive conversions. Our AI-powered agents
              can connect and manage your social media presence, while on-demand
              content keeps your message fresh and SEO-optimized.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-indigo-400">✔</span>
                <span>AI-managed social media integration</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-indigo-400">✔</span>
                <span>SEO-optimized by design</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-indigo-400">✔</span>
                <span>
                  On-demand video, animation, and written content generation
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2 */}
        <section className="relative py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl py-10 px-6 md:p-16 border border-white/10 shadow-lg relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-10 h-10 text-teal-400" />
              <h2 className="text-2xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                On-Demand Tailored Solutions
              </h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Whether it&apos;s a CRM system, eCommerce backend, or
              enterprise-grade workflow automation, we design, develop, and
              deploy software that solves real problems. Our solutions are fully
              customizable and scalable to meet your evolving needs.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-teal-400">•</span>
                <span>
                  Custom application development tailored to your business
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-400">•</span>
                <span>
                  Automate manual processes to save time and resources
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-400">•</span>
                <span>CRM, eCommerce, and enterprise-grade platforms</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3 */}
        <section className="relative px-6 md:px-12 max-w-5xl mx-auto mb-20">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl py-10 px-6 md:p-16 border border-white/10 shadow-lg relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-10 h-10 text-yellow-400" />
              <h2 className="text-2xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-yellow-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                Human Resource as a Service (HRaaS)
              </h2>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Expand your capabilities with top-tier professionals—without the
              hassle of hiring. We provide you with experienced software
              engineers, QA specialists, product managers, and AI experts who
              integrate seamlessly with your workflows.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-yellow-400">→</span>
                <span>Dedicated software engineering teams</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400">→</span>
                <span>QA engineers and product/project managers</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400">→</span>
                <span>
                  AI engineers and data scientists for intelligent solutions
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
