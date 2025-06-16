import { Sparkles, Pencil, MessageCircle, BarChart2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function BringingValue() {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-40 xl:px-40">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What{" "}
            <span className="text-[#09bbc8] animate-pulse">Novelty Lab</span>{" "}
            Brings to the Table
          </h2>
          <p className="text-lg text-slate-100 mb-12 max-w-3xl mx-auto">
            At Novelty Lab, we blend cutting-edge AI with creative digital
            strategy. Whether it is intelligent automation or brand-building
            content, we make sure that your business connects, converts, and
            grows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-xl border border-white/20 bg-black text-white p-6 shadow-md cursor-pointer">
            <GlowingEffect
              spread={50}
              glow={true}
              proximity={64}
              borderWidth={5}
              disabled={false}
              inactiveZone={0.01}
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-yellow-400/15 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Smart AI Solutions
              </h3>
              <p className="text-slate-300 max-w-sm">
                From intelligent chatbots to advanced autonomous agents, we
                build tailored AI systems that automate, optimize, and innovate
                real business operations.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl border border-white/20 bg-black text-white p-6 shadow-md cursor-pointer">
            <GlowingEffect
              spread={50}
              glow={true}
              proximity={64}
              borderWidth={5}
              disabled={false}
              inactiveZone={0.01}
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-yellow-400/15 flex items-center justify-center mb-4">
                <Pencil className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Creative Content</h3>
              <p className="text-slate-300 max-w-sm">
                Engaging blogs, viral videos, and eye-catching visuals designed
                to capture attention, build brand voice, and keep your audience
                coming back.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl border border-white/20 bg-black text-white p-6 shadow-md cursor-pointer">
            <GlowingEffect
              spread={50}
              glow={true}
              proximity={64}
              borderWidth={5}
              disabled={false}
              inactiveZone={0.01}
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-yellow-400/15 flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Authentic Engagement
              </h3>
              <p className="text-slate-300 max-w-sm">
                We craft digital strategies that drive real conversations and
                build trust—turning passive audiences into loyal advocates.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-xl border border-white/20 bg-black text-white p-6 shadow-md cursor-pointer">
            <GlowingEffect
              spread={50}
              glow={true}
              proximity={64}
              borderWidth={5}
              disabled={false}
              inactiveZone={0.01}
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-lg bg-yellow-400/15 flex items-center justify-center mb-4">
                <BarChart2 className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Results Driven</h3>
              <p className="text-slate-300 max-w-sm">
                Every initiative is built for impact. We focus on tangible
                outcomes—whether it&apos;s conversions, engagement, or
                operational savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
