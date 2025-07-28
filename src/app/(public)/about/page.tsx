"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  BrainCircuit,
  Lightbulb,
  Rocket,
  Heart,
  Globe,
  Zap,
  ArrowRight,
  Quote,
} from "lucide-react";
import Navbar from "../components/Navbar";

const storyChapters = [
  {
    id: 1,
    title: "Why We Started",
    subtitle: "Tailored software meets the new age of AI",
    content:
      "We noticed a gap—businesses wanted smarter, more adaptive tools, but off-the-shelf solutions couldn't keep up. So we set out to build personalized software powered by the latest in AI, helping businesses grow faster and smarter.",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    title: "What Drives Us",
    subtitle: "A lean, collaborative mindset",
    content:
      "We don't believe in bloated roadmaps or one-size-fits-all platforms. We're builders at heart—designing, iterating, and validating ideas alongside founders to create what actually matters for their users.",
    icon: BrainCircuit,
    color: "from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    title: "Where We're Going",
    subtitle: "AI-native products for ambitious teams",
    content:
      "Novelty Lab is evolving into a home for AI-driven product development. Whether you're starting from scratch or refining a vision, we’re here to help you move fast, adapt confidently, and stay ahead of the curve.",
    icon: Rocket,
    color: "from-purple-400 to-pink-500",
  },
];

const values = [
  {
    title: "AI-First Innovation",
    description:
      "We use AI where it matters—solving real problems, not just chasing hype.",
    icon: BrainCircuit,
  },
  {
    title: "Rapid Prototyping",
    description:
      "Ideas shouldn't wait. We move from concept to prototype in days, not months.",
    icon: Zap,
  },
  {
    title: "Founder-Focused",
    description:
      "Our work starts with your vision. We build like your business depends on it—because it does.",
    icon: Heart,
  },
  {
    title: "Open Innovation",
    description:
      "We believe in sharing—tools, learnings, and momentum. Progress grows faster when it’s open.",
    icon: Globe,
  },
];

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const midgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="relative">
        {/* Enhanced Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#0f1115] text-white overflow-hidden mt-[-12]">
          {/* Beautiful Background Gradient */}
          <motion.div style={{ y: backgroundY }} className="absolute inset-0" />

          {/* Enhanced Floating Particles */}
          <motion.div
            style={{ y: midgroundY }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(60)].map((_, i) => {
              const colors = [
                "bg-blue-400/40",
                "bg-purple-400/40",
                "bg-cyan-400/40",
                "bg-pink-400/40",
                "bg-amber-400/40",
                "bg-emerald-400/40",
              ];
              const sizes = ["w-2 h-2", "w-3 h-3", "w-4 h-4", "w-1 h-1"];

              return (
                <motion.div
                  key={i}
                  className={`absolute ${colors[i % colors.length]} ${
                    sizes[i % sizes.length]
                  } rounded-full`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </motion.div>

          {/* Additional decorative elements */}
          <motion.div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  rotate: `${Math.random() * 360}deg`,
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scaleY: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-6 pt-40 pb-24 text-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-2xl">
                <BrainCircuit className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Novelty Lab
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            >
              We are a team of technologists, designers, and builders dedicated
              to helping visionary founders transform bold ideas into impactful,
              AI-powered products. At Novelty Lab, we combine innovation, craft,
              and execution to bring the future to life—one breakthrough at a
              time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Story Timeline */}
        <section className="relative py-16 md:py-24 bg-[#0f1115] text-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                Every great company has a story. Ours is about turning
                frustration into innovation, challenges into opportunities, and
                dreams into reality.
              </p>
            </motion.div>

            <div className="relative">
              {/* Desktop Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />

              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />

              {storyChapters.map((chapter, index) => {
                const Icon = chapter.icon;
                return (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`relative mb-16 md:mb-32 ${
                      // Desktop layout
                      index % 2 === 0
                        ? "md:flex md:items-center md:flex-row"
                        : "md:flex md:items-center md:flex-row-reverse"
                    }`}
                  >
                    {/* Desktop Icon */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${chapter.color} flex items-center justify-center shadow-xl`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden absolute left-8 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${chapter.color} flex items-center justify-center shadow-xl`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`
                      pl-20 md:pl-0 md:w-5/12 
                      ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}
                    `}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-2xl backdrop-blur-xl border shadow-2xl overflow-hidden"
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(20px)",
                          borderImage:
                            "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05)) 1",
                          border: "1px solid rgba(255,255,255,0.1)",
                          boxShadow:
                            "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {/* Glass reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

                        {/* Inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl" />

                        <div className="relative p-6 md:p-8">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white">
                            {chapter.title}
                          </h3>
                          <p className="text-sm md:text-base lg:text-lg font-medium text-slate-300 mb-4">
                            {chapter.subtitle}
                          </p>
                          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                            {chapter.content}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section with Better Gradient Flow */}
        <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-cyan-600">
          <motion.div className="absolute inset-0 opacity-10">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.1, 0.6, 0.1],
                  scale: [1, 2, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                These principles guide every decision, every line of code, and
                every client interaction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 h-full hover:bg-white/20 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mb-6 shadow-xl"
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section with Perfect Blend */}
        <section className="relative bg-gradient-to-b from-cyan-600 to-blue-600 text-white py-32 px-6 text-center overflow-hidden">
          <motion.div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to write your story?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Let&apos;s bring your idea to life—faster, better, smarter. Every
              great partnership begins with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-slate-800 font-medium rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
              >
                Start Your Project
                <Rocket className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
