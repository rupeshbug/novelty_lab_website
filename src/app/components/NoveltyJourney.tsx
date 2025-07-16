"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

export default function NoveltyJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Ultra-smooth parallax effects with multiple layers
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 1, 1.05, 1.15]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.3, 1, 1, 0.4]
  );
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const orbsY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Additional smooth parallax layers
  const contentScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 1.08]
  );
  const headerScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.9, 1, 1.1]);

  // Pre-calculated parallax effects for story beats
  const storyBeatParallax = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-12%"]
  );
  const storyBeatParallaxReverse = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );
  const storyBeatScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.98, 1, 1.02]
  );
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);
  const orbRotateY = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const ctaScale = useTransform(scrollYProgress, [0.7, 1], [0.98, 1.03]);

  // Generate consistent particle positions for SSR
  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: (i * 17 + 13) % 100, // Deterministic positioning
      top: (i * 23 + 7) % 100,
      duration: 3 + (i % 3),
      delay: (i * 0.5) % 2,
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
      delay: 0.2,
    },
    {
      id: 2,
      title: "The Struggle",
      subtitle: "Great ideas met friction",
      description:
        "We saw people with powerful ideas get stuck—juggling tools, frameworks, and dead ends. The path from thought to product was broken. So we set out to fix it.",
      icon: "⚙️",
      delay: 0.4,
    },
    {
      id: 3,
      title: "The Breakthrough",
      subtitle: "Clarity from complexity",
      description:
        "By combining AI, design, and smart automation, we created workflows where creativity flows, ideas ship faster, and teams stay focused on what matters.",
      icon: "🚀",
      delay: 0.6,
    },
    {
      id: 4,
      title: "The Mission",
      subtitle: "To empower innovation at the edges",
      description:
        "From solo creators to global teams, we build tools that help you go from zero to magic—with speed, clarity, and joy. That's the Novelty Lab promise.",
      icon: "✨",
      delay: 0.8,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0f1115] px-6 md:px-20 lg:px-40 py-32 overflow-hidden"
    >
      {/* Enhanced background with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09bbc8]/5 to-transparent opacity-50"
      />

      {/* Floating particles for depth */}
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
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
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
      <motion.div
        style={{ y: textY, scale, opacity }}
        className="relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Header with ultra-smooth scaling */}
          <motion.div
            style={{ y: headerY, scale: headerScale }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{
              duration: 1.6,
              ease: [0.19, 1, 0.22, 1],
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            className="text-center mb-20 md:mb-28 lg:mb-36"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 80,
                damping: 25,
              }}
            >
              The Journey Behind{" "}
              <span className="text-[#09bbc8] relative">
                Novelty Lab
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#09bbc8] to-purple-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              </span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 70,
                damping: 25,
              }}
            >
              How our story unfolded—from friction to flow, from scattered ideas
              to real solutions.
            </motion.p>
          </motion.div>

          {/* Timeline with ultra-smooth parallax */}
          <motion.div
            style={{ scale: contentScale }}
            className="space-y-32 md:space-y-40"
          >
            {storyBeats.map((beat, index) => (
              <motion.div
                key={beat.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                  scale: 0.9,
                }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: beat.delay,
                  ease: [0.25, 0.1, 0.25, 1],
                  type: "spring",
                  stiffness: 60,
                  damping: 25,
                }}
                viewport={{ once: false, margin: "-50px", amount: 0.3 }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Section with enhanced parallax */}
                <motion.div
                  style={{
                    y:
                      index % 2 === 0
                        ? storyBeatParallax
                        : storyBeatParallaxReverse,
                    scale: storyBeatScale,
                  }}
                  className="flex-1 text-center lg:text-left"
                >
                  <motion.div
                    className="text-5xl md:text-6xl mb-6"
                    initial={{ scale: 0.4, opacity: 0, rotateY: 90 }}
                    whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                    transition={{
                      duration: 1.0,
                      delay: beat.delay + 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                    }}
                  >
                    {beat.icon}
                  </motion.div>
                  <motion.h3
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                      duration: 0.8,
                      delay: beat.delay + 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {beat.title}
                  </motion.h3>
                  <motion.p
                    className="text-[#09bbc8] text-lg md:text-xl font-medium mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                      duration: 0.8,
                      delay: beat.delay + 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {beat.subtitle}
                  </motion.p>
                  <motion.p
                    className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                      duration: 0.8,
                      delay: beat.delay + 0.7,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {beat.description}
                  </motion.p>
                </motion.div>

                {/* Ultra-smooth Orb Animation with enhanced parallax */}
                <motion.div
                  style={{
                    y: orbsY,
                    scale: orbScale,
                    rotateY: orbRotateY,
                  }}
                  className="flex-1 flex justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotateX: 45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: beat.delay + 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                      type: "spring",
                      stiffness: 50,
                      damping: 25,
                    }}
                    viewport={{ once: false, amount: 0.4 }}
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
                      {/* Smoother rotating rings */}
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
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#09bbc8]/40"
                      />

                      {/* Ultra-smooth center icon */}
                      <motion.div
                        className="absolute text-4xl md:text-5xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Ultra-smooth CTA with enhanced parallax */}
          <motion.div
            style={{
              y: headerY,
              scale: ctaScale,
            }}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              type: "spring",
              stiffness: 60,
              damping: 25,
            }}
            className="text-center mt-40 md:mt-48"
          >
            <motion.h3
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 70,
                damping: 25,
              }}
            >
              Your Story Starts Here
            </motion.h3>
            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 70,
                damping: 25,
              }}
            >
              Whether you&apos;re starting from scratch or scaling up—we&apos;re
              here to co-write the next chapter with you.
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(9, 187, 200, 0.4)",
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                type: "spring",
                stiffness: 70,
                damping: 20,
              }}
              className="px-10 py-5 bg-gradient-to-r from-[#09bbc8] to-purple-500 text-white font-semibold rounded-full text-lg md:text-xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10">Begin Your Journey</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#09bbc8] opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
