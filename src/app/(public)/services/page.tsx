"use client";

import { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Rocket,
  Zap,
  Smartphone,
  Search,
  Video,
  Settings,
  Database,
  Code,
  CheckCircle,
  Brain,
  Users,
  Lightbulb,
} from "lucide-react";

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      title: "Next-Generation Business Website",
      description:
        "We create websites that are more than just digital brochures—they're intelligent, integrated platforms that represent your brand and drive conversions. Our AI-powered agents can connect and manage your social media presence, while on-demand content keeps your message fresh and SEO-optimized.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      features: [
        {
          title: "AI-managed social media integration",
          description:
            "Automated posting, engagement tracking, and content optimization across all platforms",
          icon: Smartphone,
        },
        {
          title: "SEO-optimized by design",
          description:
            "Built-in SEO best practices with real-time optimization and performance monitoring",
          icon: Search,
        },
        {
          title: "On-demand video, animation, and written content",
          description:
            "Fresh content creation powered by AI and human creativity",
          icon: Video,
        },
      ],
    },
    {
      id: 2,
      title: "On-Demand Tailored Solutions",
      description:
        "Whether it's a CRM system, eCommerce backend, or enterprise-grade workflow automation, we design, develop, and deploy software that solves real problems. Our solutions are fully customizable and scalable to meet your evolving needs.",
      icon: Settings,
      color: "from-teal-500 to-cyan-500",
      features: [
        {
          title: "Custom application development",
          description:
            "Bespoke software solutions tailored to your specific business requirements",
          icon: Code,
        },
        {
          title: "Automate manual processes",
          description:
            "Streamline workflows and eliminate repetitive tasks with intelligent automation",
          icon: Zap,
        },
        {
          title: "CRM, eCommerce, and enterprise solutions",
          description:
            "Comprehensive business systems that scale with your growth",
          icon: Database,
        },
      ],
    },
    {
      id: 3,
      title: "Human Resource as a Service (HRaaS)",
      description:
        "Expand your capabilities with top-tier professionals—without the hassle of hiring. We provide you with experienced software engineers, QA specialists, product managers, and AI experts who integrate seamlessly with your workflows.",
      icon: Users,
      color: "from-yellow-500 to-orange-500",
      features: [
        {
          title: "Dedicated software engineering teams",
          description:
            "Full-stack developers, frontend specialists, and backend architects",
          icon: Code,
        },
        {
          title: "QA engineers & product/project managers",
          description:
            "Quality assurance experts and experienced project leadership",
          icon: CheckCircle,
        },
        {
          title: "AI engineers & data scientists",
          description: "Machine learning experts and data analysis specialists",
          icon: Brain,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main
        ref={containerRef}
        className="min-h-screen text-white mt-16 relative "
      >
        {/* Heading Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 text-center relative z-10">
          <div className="relative">
            {/* Floating Lab Elements */}
            <div className="absolute -top-8 left-1/4 animate-float hidden sm:block">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-60"></div>
            </div>
            <div
              className="absolute -top-12 right-1/3 animate-float hidden sm:block"
              style={{ animationDelay: "1s" }}
            >
              <Lightbulb className="w-6 h-6 text-yellow-400 opacity-70 animate-bounce" />
            </div>
            <div
              className="absolute -top-6 right-1/4 animate-float hidden sm:block"
              style={{ animationDelay: "2s" }}
            >
              <Zap className="w-5 h-5 text-cyan-400 opacity-60 animate-spin" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-7 leading-snug">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Our Laboratory of
                </span>
                <br />
                <span className="text-[#09bbc8] relative inline-block">
                  Innovation
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#09bbc8] to-transparent animate-pulse"></div>
                </span>
              </h1>
              <p className="max-w-xl mx-auto text-gray-200 text-base sm:text-xl leading-relaxed">
                From intelligent websites to custom software solutions and
                expert teams— we provide everything you need to accelerate your
                business growth in the digital age.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-12 md:px-20 lg:px-40 lg:py-16 w-full md:w-[90%] mx-auto">
          <div className="space-y-16 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                    amount: 0.1,
                  }}
                  className={`relative flex flex-col md:flex-col lg:flex-row items-center gap-16`}
                >
                  {/* Content Side */}
                  <div
                    className={`flex-1 w-full space-y-8 z-99 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} text-white`}
                    >
                      <service.icon className="w-7 h-7" />
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                      {service.title}
                    </h3>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center animate-pulse`}
                          >
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1 text-base sm:text-lg">
                              {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm sm:text-base">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div
                    className={`relative flex flex-col items-center flex-1 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="relative w-64 sm:w-80 h-64 sm:h-80 flex items-center justify-center"
                    >
                      {/* Main rotating icon */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center z-10`}
                      >
                        <service.icon className="w-12 h-12 text-white" />
                      </motion.div>

                      {/* Floating feature icons */}
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}
                          style={{
                            top: `${20 + i * 25}%`,
                            left: i % 2 === 0 ? "5%" : "80%",
                            transform: "translateX(-50%)",
                          }}
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        >
                          <feature.icon className="w-5 h-5 text-white" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
