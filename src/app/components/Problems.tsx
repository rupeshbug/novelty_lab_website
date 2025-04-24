import { AlertTriangle, ShieldX, Wand2 } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-20 px-6 md:px-40 relative">
      <div className="max-w-5xl mx-auto text-center z-10 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Why Traditional Tools Are Holding You Back
        </h2>
        <p className="text-lg text-gray-700 mb-10 mx-auto">
          Older platforms like WordPress and generic website builders were never
          built for scale. As your business grows, these tools create
          bottlenecks— from bloated plugins and poor performance to limited
          automation and disjointed branding.
        </p>
      </div>

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block z-0 pl-40">
        <img
          src="/det_bot_3.png"
          alt="AI detective bot"
          className="w-[220px] h-auto opacity-90"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#09bbc8] hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4 mb-4 text-[#09bbc8]">
            <AlertTriangle size={28} />
            <h3 className="text-xl font-semibold">Outdated Tools</h3>
          </div>
          <p className="text-gray-600">
            Old platforms were not built for speed, scale, or flexibility. You
            end up fighting your tech instead of growing your business.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#09bbc8] hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4 mb-4 text-[#09bbc8]">
            <ShieldX size={28} />
            <h3 className="text-xl font-semibold">One-Size-Fits-All</h3>
          </div>
          <p className="text-gray-600">
            Cookie-cutter websites will not capture your brand or adapt to your
            evolving business needs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#09bbc8] hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center gap-4 mb-4 text-[#09bbc8]">
            <Wand2 size={28} />
            <h3 className="text-xl font-semibold">Lack of Intelligence</h3>
          </div>
          <p className="text-gray-600">
            No built-in AI or automation means more manual work and less time to
            focus on growth.
          </p>
        </div>
      </div>
    </section>
  );
}
