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
          <h2 className="text-2xl md:text-5xl font-bold text-[#f5f5f5] mt-7">
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
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-yellow-400 z-0 hidden md:block" />

        {[
          {
            number: "1",
            icon: <AlertTriangle size={28} className="text-[#09bbc8]" />,
            title: "Outdated Tools",
            desc: "Old platforms were not built for speed, scale, or flexibility. You end up fighting your tech instead of growing your business.",
            image: "/step1.png",
          },
          {
            number: "2",
            icon: <ShieldX size={28} className="text-[#09bbc8]" />,
            title: "One-Size-Fits-All",
            desc: "Cookie-cutter websites will not capture your brand or adapt to your evolving business needs.",
            image: "/step2.png",
          },
          {
            number: "3",
            icon: <Wand2 size={28} className="text-[#09bbc8]" />,
            title: "Lack of Intelligence",
            desc: "No built-in AI or automation means more manual work and less time to focus on growth.",
            image: "/step3.png",
          },
        ].map((step, index) => (
          <div key={index} className="relative flex gap-6 mb-16">
            {/* Step number */}
            <div className="relative z-10 w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-[#09bbc8] text-white bg-black flex items-center justify-center font-bold text-lg">
              {step.number}
            </div>

            {/* Step content */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#f5f5f5] mb-3 flex items-center gap-3">
                  {step.icon}
                  {step.title}
                </h3>
                <p className="text-slate-100 text-lg">{step.desc}</p>
              </div>
              <div className="relative h-48 w-full bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
