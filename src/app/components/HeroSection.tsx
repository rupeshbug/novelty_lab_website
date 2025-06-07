import { Cpu, Settings, BarChart } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 lg:px-40 overflow-hidden bg-[#0f1115]">
      <Spotlight className="z-50" size={100} />
      {/* Background Layer */}

      {/* Content Layer */}
      <div className="relative z-99 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        {/* LEFT SIDE */}
        <div className="text-center w-full lg:w-3/5 lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-tight tracking-wide mb-6">
            Supercharge Your Business with Next-Gen Smart{" "}
            <span className="text-[#09bbc8]">AI-Powered Solutions</span>
          </h1>
          <p className="text-xl text-white mb-8">
            Empowering businesses with AI-driven software and innovative digital
            strategies that deliver real-world impact.
          </p>
          <div className="flex flex-col justify-center items-center sm:flex-row flex-wrap gap-6 mb-10 lg:justify-start">
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg cursor-pointer bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                <Cpu className="text-yellow-400 w-5 h-5" />
              </div>
              <p className="text-gray-300 text-base font-medium">
                AI & Automation
              </p>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg cursor-pointer bg-emerald-400/10 group-hover:bg-emerald-400/20 transition-colors">
                <Settings className="text-emerald-400 w-5 h-5" />
              </div>
              <p className="text-gray-300 text-base font-medium">
                Custom IT Solutions
              </p>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg cursor-pointer bg-purple-400/10 group-hover:bg-purple-400/20 transition-colors">
                <BarChart className="text-purple-400 w-5 h-5" />
              </div>
              <p className="text-gray-300 text-base font-medium">
                Digital Marketing
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center lg:justify-start">
            <button className="bg-[#08a4af] text-white px-5 py-3 cursor-pointer rounded-lg text-base font-medium hover:bg-[#07a5b0] transition">
              Get Started
            </button>
            <button className="text-white border border-gray-600 hover:border-yellow-400 px-6 py-3.5 cursor-pointer rounded-lg text-base font-medium hover:bg-yellow-400/10 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block lg:w-2/5 h-[520px] relative z-50">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full pointer-events-auto"
          />
        </div>
      </div>
    </section>
  );
}
