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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
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
              <Sparkles className="w-10 h-10 mb-4 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2">
                Smart AI Solutions
              </h3>
              <p className="text-slate-300 max-w-xs">
                From chatbots to full-blown AI agents, we craft intelligent
                systems that solve real business challenges.
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
              <Pencil className="w-10 h-10 mb-4 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2">Creative Content</h3>
              <p className="text-slate-300 max-w-xs">
                Blogs, videos, and visuals that resonate with your audience and
                turn followers into fans.
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
              <MessageCircle className="w-10 h-10 mb-4 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2">
                Authentic Engagement
              </h3>
              <p className="text-slate-300 max-w-xs">
                Digital strategies that spark conversations, build trust, and
                grow your brand organically.
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
              <BarChart2 className="w-10 h-10 mb-4 text-yellow-400" />
              <h3 className="text-2xl font-semibold mb-2">Results Driven</h3>
              <p className="text-slate-300 max-w-xs">
                Every solution we create is designed to deliver measurable
                results and real business impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
