"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

export default function NoveltyJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Simple, smooth parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  // Generate particles once for consistency
  const particles = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: (i * 23 + 15) % 100,
      top: (i * 31 + 10) % 100,
      duration: 4 + (i % 2),
      delay: i * 0.3,
    }));
  }, []);

  const storyBeats = [
    {
      id: 1,
      title: "The Spark",
      subtitle: "It all started with a question",
      description:
        "What if we could make intelligent systems more human? More creative? More useful? That question launched our journey into building tools that empower creators and businesses alike.",
      icon: "💡",
    },
    {
      id: 2,
      title: "The Struggle",
      subtitle: "Great ideas met friction",
      description:
        "We saw people with powerful ideas get stuck—juggling tools, frameworks, and dead ends. The path from thought to product was broken. So we set out to fix it.",
      icon: "⚙️",
    },
    {
      id: 3,
      title: "The Breakthrough",
      subtitle: "Clarity from complexity",
      description:
        "By combining AI, design, and smart automation, we created workflows where creativity flows, ideas ship faster, and teams stay focused on what matters.",
      icon: "🚀",
    },
    {
      id: 4,
      title: "The Mission",
      subtitle: "To empower innovation at the edges",
      description:
        "From solo creators to global teams, we build tools that help you go from zero to magic—with speed, clarity, and joy. That's the Novelty Lab promise.",
      icon: "✨",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-12 md:px-20 lg:px-40 lg:py-16 overflow-hidden"
    >
      {/* Simple background with subtle parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0" />

      {/* Minimal floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#09bbc8]/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Clean header animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-200px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20 md:mb-28 lg:mb-36"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            The Journey Behind{" "}
            <span className="text-[#09bbc8] relative">
              Novelty Lab
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#09bbc8] to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, margin: "-200px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            How our story unfolded—from friction to flow, from scattered ideas
            to real solutions.
          </p>
        </motion.div>

        {/* Timeline with clean animations */}
        <div className="space-y-32 md:space-y-40">
          {storyBeats.map((beat, index) => (
            <motion.div
              key={beat.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-150px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="text-5xl md:text-6xl mb-6">{beat.icon}</div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3">
                  {beat.title}
                </h3>
                <p className="text-[#09bbc8] text-lg md:text-xl font-medium mb-6">
                  {beat.subtitle}
                </p>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {beat.description}
                </p>
              </div>

              {/* Clean Orb Animation */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileInView={{ scale: [0.9, 1] }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Outer glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#09bbc8]/10 to-purple-500/10 blur-xl"
                  />

                  {/* Main orb */}
                  <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#09bbc8]/20 to-purple-500/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    {/* Simple rotating rings */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-44 h-44 md:w-52 md:h-52 rounded-full border-2 border-dashed border-[#09bbc8]/30"
                    />
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute w-32 h-32 md:w-36 md:h-36 rounded-full border border-purple-400/20"
                    />

                    {/* Center icon */}
                    <motion.div
                      className="absolute text-4xl md:text-5xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {beat.icon}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-40 md:mt-48"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
            Your Story Starts Here
          </h3>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re starting from scratch or scaling up—we&apos;re
            here to co-write the next chapter with you.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(9, 187, 200, 0.4)",
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-gradient-to-r from-[#09bbc8] to-purple-500 text-white font-semibold rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Begin Your Journey</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#09bbc8] opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
