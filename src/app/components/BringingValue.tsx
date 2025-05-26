import Image from "next/image";
import { Sparkles, Pencil, MessageCircle } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function BringingValue() {
  return (
    <section className="py-12 px-8 md:px-20 lg:px-40 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-15">
        <div className="text-center lg:text-left w-full lg:w-4/6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What <span className="text-[#09bbc8]">Novelty Lab</span> Brings to
            the Table
          </h2>
          <p className="text-lg text-slate-100 mb-10 max-w-3xl mx-auto lg:mx-0">
            At Novelty Lab, we blend cutting-edge AI with creative digital
            strategy. Whether it is intelligent automation or brand-building
            content, we make sure that your business connects, converts, and
            grows.
          </p>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {/* Card 1 */}
            <div className="relative rounded-xl border border-white/20 bg-black text-white p-6 shadow-md cursor-pointer">
              <GlowingEffect
                spread={50}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={5}
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
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <Pencil className="w-10 h-10 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-semibold mb-2">
                  Creative Content
                </h3>
                <p className="text-slate-300 max-w-xs">
                  Blogs, videos, and visuals that resonate with your audience
                  and turn followers into fans.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-xl border border-white/20 bg-black text-white p-6 shadow-md cursor-pointer">
              <GlowingEffect
                spread={50}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
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
          </div>
        </div>

        <div className="hidden lg:block w-2/6 rounded-xl animate-fade-in">
          <Image
            src="/futuristic_ai_lab.png"
            alt="AI bot in lab coat experimenting"
            width={400}
            height={400}
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
