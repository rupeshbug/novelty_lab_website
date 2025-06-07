"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// 🔷 Shared shape used inside the animated background
export function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

// 🔷 The global wrapper with animated background
export function AnimatedBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#0f1115] overflow-hidden">
      {/* Glowy radial blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="hidden md:block md:absolute inset-0 overflow-hidden z-30 pointer-events-none">
        <ElegantShape
          delay={0.5}
          width={150}
          height={40}
          rotate={20}
          gradient="from-rose-500/[0.15]"
          className="right-[5%] md:right-[15%] top-[8vh] md:top-[12vh]"
        />
        <ElegantShape
          delay={0.5}
          width={150}
          height={40}
          rotate={-20}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[15%] top-[8vh] md:top-[12vh]"
        />
        <ElegantShape
          delay={0.6}
          width={150}
          height={40}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[5%] md:right-[15%] top-[85vh] md:top-[85vh]"
        />
        <ElegantShape
          delay={0.6}
          width={150}
          height={40}
          rotate={-20}
          gradient="from-cyan-500/[0.15]"
          className="left-[5%] md:left-[15%] top-[85vh] md:top-[85vh]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20">{children}</div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-[#0f1115]/80 pointer-events-none z-0" />
    </div>
  );
}
