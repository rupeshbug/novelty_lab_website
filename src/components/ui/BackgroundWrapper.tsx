// src/components/ui/BackgroundWrapper.tsx
"use client";

import { ReactNode } from "react";
import { ElegantShape } from "./HeroBackground";

export function BackgroundWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#030303] overflow-hidden">
      {/* Glowy radial blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.5}
          width={250}
          height={80}
          rotate={12}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[5%] top-[70%] md:top-[80%]"
        />
        <ElegantShape
          delay={0.5}
          width={250}
          height={80}
          rotate={-12}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={150}
          height={40}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.6}
          width={150}
          height={40}
          rotate={-20}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[10%] md:top-[15%]"
        />
      </div>

      {/* Content goes on top */}
      <div className="relative z-10">{children}</div>

      {/* Optional dark overlay for consistency */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none z-0" />
    </div>
  );
}
