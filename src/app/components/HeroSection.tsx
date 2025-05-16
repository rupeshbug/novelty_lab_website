"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Mail, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        // `fill` prop is not used in your Spotlight, so I removed it
      />

      <div className="flex h-full">
        {/* Left content - from your original GetInTouch style but adapted */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build something bold?
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            Whether you have a specific idea or just want to explore what is
            possible with AI and digital strategy — we would love to hear from
            you. Let us create something novel together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@noveltylab.xyz"
              className="inline-flex items-center gap-2 bg-[#09bbc8] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
            >
              <Mail size={20} />
              Email us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-[#09bbc8] text-[#09bbc8] px-6 py-3 rounded-full font-semibold hover:bg-[#09bbc8]/10 transition"
            >
              <Rocket size={20} />
              Let’s Collaborate
            </a>
          </div>
        </div>

        {/* Right content - interactive 3D robot */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
