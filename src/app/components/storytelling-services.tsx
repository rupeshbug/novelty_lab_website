"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorytellingParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  // Story beats data
  const storyBeats = [
    {
      id: 1,
      title: "The Beginning",
      subtitle: "Every great story starts with a single line of code",
      description:
        "In a world where ideas flow like rivers, developers stood at the crossroads of possibility. They had visions, dreams, and the burning desire to create something extraordinary.",
      icon: "💡",
      delay: 0.2,
    },
    {
      id: 2,
      title: "The Challenge",
      subtitle: "But the path was filled with obstacles",
      description:
        "Complex deployments, scattered tools, endless configurations. The journey from idea to reality seemed impossible. Many gave up, but the brave ones pressed forward.",
      icon: "⚡",
      delay: 0.4,
    },
    {
      id: 3,
      title: "The Discovery",
      subtitle: "Until they found the missing piece",
      description:
        "A platform that understood their struggles. One that could transform chaos into clarity, complexity into simplicity. The tools they needed, unified in perfect harmony.",
      icon: "🚀",
      delay: 0.6,
    },
    {
      id: 4,
      title: "The Transformation",
      subtitle: "Everything changed in an instant",
      description:
        "What once took weeks now took minutes. Ideas flowed freely from mind to reality. The impossible became inevitable, and dreams became deployments.",
      icon: "✨",
      delay: 0.8,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] overflow-hidden bg-slate-900"
    >
      {/* Background Layers */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-purple-900/20"
      />

      {/* Floating Background Elements */}
      <motion.div style={{ y: layer1Y }} className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ y: layer2Y }} className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex items-center justify-center min-h-screen"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center my-80"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Your Journey With
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Novelty Lab
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Every line of code tells a story. Every deployment writes a
                chapter. This is the tale of transformation.
              </p>
            </motion.div>

            {/* Story Timeline */}
            <div className="space-y-32">
              {storyBeats.map((beat, index) => (
                <motion.div
                  key={beat.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: beat.delay }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Story Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: beat.delay + 0.2 }}
                      viewport={{ once: true }}
                      className="text-6xl mb-6"
                    >
                      {beat.icon}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: beat.delay + 0.3 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                      {beat.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: beat.delay + 0.4 }}
                      viewport={{ once: true }}
                      className="text-xl text-blue-300 mb-6 font-medium"
                    >
                      {beat.subtitle}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: beat.delay + 0.5 }}
                      viewport={{ once: true }}
                      className="text-lg text-slate-300 leading-relaxed"
                    >
                      {beat.description}
                    </motion.p>
                  </div>

                  {/* Visual Element */}
                  <div className="flex-1 flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.8, delay: beat.delay + 0.6 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="w-48 h-48 rounded-full border-2 border-dashed border-blue-400/30"
                        />
                        <motion.div
                          animate={{
                            rotate: [360, 0],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="absolute w-32 h-32 rounded-full border border-purple-400/30"
                        />
                        <div className="absolute text-4xl">{beat.icon}</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-32"
            >
              <h3 className="text-4xl font-bold text-white mb-6">
                Your Story Starts Here
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have already begun their
                transformation. What will your story be?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Begin Your Journey
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900" />
    </section>
  );
}
