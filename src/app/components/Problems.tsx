import { AlertTriangle, ShieldX, Wand2 } from "lucide-react";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="py-16 px-8 md:px-20 lg:px-40 relative">
      <div className="mx-auto text-center z-10 relative">
        <div className="flex items-center justify-center">
          <Image
            src="/det_bot_1.png"
            alt="AI detective bot"
            width={120}
            height={120}
            className="opacity-90"
            priority
          />
          <h2 className="text-3xl md:text-5xl font-bold text-[#f5f5f5] mt-7">
            Why Traditional Tools Are Holding You Back
          </h2>
        </div>
        <p className="text-lg text-slate-100 mb-10 mx-auto w-full xl:w-[60%]">
          Older platforms like WordPress and generic website builders were never
          built for scale. As your business grows, these tools create
          bottlenecks— from bloated plugins and poor performance to limited
          automation and disjointed branding.
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Step 1 */}
        <div className="flex items-start gap-8 mb-12">
          <div className="flex flex-col items-center pt-8">
            <div className="w-12 h-12 bg-[#09bbc8] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
              1
            </div>
            <div className="w-0.5 h-32 bg-gray-300"></div>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center gap-3">
                <AlertTriangle size={28} className="text-[#09bbc8]" />
                Outdated Tools
              </h3>
              <p className="text-slate-100 text-lg">
                Old platforms were not built for speed, scale, or flexibility.
                You end up fighting your tech instead of growing your business.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center h-48">
              <div className="w-20 h-20 bg-black rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded transform rotate-12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-8 mb-12">
          <div className="flex flex-col items-center pt-8">
            <div className="w-12 h-12 bg-[#09bbc8] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
              2
            </div>
            <div className="w-0.5 h-32 bg-gray-300"></div>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center gap-3">
                <ShieldX size={28} className="text-[#09bbc8]" />
                One-Size-Fits-All
              </h3>
              <p className="text-slate-100 text-lg">
                Cookie-cutter websites will not capture your brand or adapt to
                your evolving business needs.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center h-48">
              <div className="relative">
                <div className="w-16 h-16 bg-black rounded border-4 border-gray-800"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded border-2 border-black"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-8">
          <div className="flex flex-col items-center pt-8">
            <div className="w-12 h-12 bg-[#09bbc8] text-white rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center gap-3">
                <Wand2 size={28} className="text-[#09bbc8]" />
                Lack of Intelligence
              </h3>
              <p className="text-slate-100 text-lg">
                No built-in AI or automation means more manual work and less
                time to focus on growth.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center h-48">
              <div className="relative">
                <div className="w-18 h-16 bg-black rounded-lg"></div>
                <div className="absolute inset-2 bg-white rounded border-l-4 border-black"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
