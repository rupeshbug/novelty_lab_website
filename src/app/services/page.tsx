"use client";

import Navbar from "../components/Navbar";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 min-h-screen text-white bg-[#0f1115]">
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Empower your business with our cutting-edge AI-powered solutions and
            expert teams.
          </p>
        </section>

        {/* Service 1 */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Next Generation Business Website
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>
              Connect with your social media accounts (let AI agents handle it
              for you)
            </li>
            <li>SEO friendly</li>
            <li>On-demand content: videos, animations, and written content</li>
          </ul>
          <p className="text-gray-400">
            Build a dynamic, future-proof website that automatically integrates
            and updates your social presence. Leverage AI to generate compelling
            content that engages your audience and drives conversions.
          </p>
        </section>

        {/* Service 2 */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            On-demand Tailored Solutions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>
              Automate and scale your business with custom feature/app
              development
            </li>
            <li>
              CRM, Ecommerce, and Enterprise solutions tailored to your needs
            </li>
          </ul>
          <p className="text-gray-400">
            Unlock growth with scalable, customized software solutions built on
            demand. From customer relationship management to full enterprise
            systems, we deliver features that help your business run smarter and
            faster.
          </p>
        </section>

        {/* Service 3 */}
        <section className="mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Human Resource as a Service
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
            <li>Software engineering teams</li>
            <li>QA engineers, Product managers</li>
            <li>AI engineers and Data scientists</li>
          </ul>
          <p className="text-gray-400">
            Access highly skilled professionals on demand, scaling your team
            with the expertise you need—whether its software development,
            quality assurance, product management, or AI and data science.
          </p>
        </section>
      </main>
    </>
  );
}
