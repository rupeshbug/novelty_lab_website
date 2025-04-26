import { XCircle, CheckCircle } from "lucide-react";

export default function NoveltyWay() {
  return (
    <section className="py-16 px-8 md:px-20 lg:px-40 bg-[#f0fbfc]">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          The &quot;Old Way&quot; of growing online is holding you back
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Many businesses waste months juggling disconnected tools, slow content
          cycles, and outdated automation. Novelty Lab blends AI, creativity,
          and strategy — helping you move faster and smarter without the usual
          roadblocks.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg">
        {/* Old Way */}
        <div className="bg-white w-full lg:w-1/2 p-8 flex flex-col justify-between relative">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <XCircle className="text-red-400" size={28} /> Old Way
            </h3>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-3">
                <XCircle className="text-red-400" size={20} />
                Disconnected apps and slow manual processes
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-400" size={20} />
                Generic branding that fails to connect
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-400" size={20} />
                Content that feels like an afterthought
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="text-red-400" size={20} />
                Expensive agencies with no real innovation
              </li>
            </ul>
          </div>
          <div className="mt-10 text-center">
            {/* Optional: put an image of "confused AI" or "frustrated robot" */}
            <img
              src="/det_bot1.png"
              alt="Frustrated Robot"
              className="w-32 mx-auto"
            />
          </div>
        </div>

        {/* Novelty Lab Way */}
        <div className="bg-[#09bbc8]/10 w-full lg:w-1/2 p-8 flex flex-col justify-between relative">
          <div>
            <h3 className="text-2xl font-bold text-[#09bbc8] mb-6 flex items-center gap-2">
              <CheckCircle className="text-[#09bbc8]" size={28} /> The Novelty
              Lab Way
            </h3>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#09bbc8]" size={20} />
                Smart, AI-driven workflows that scale with you
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#09bbc8]" size={20} />
                Authentic, memorable digital branding
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#09bbc8]" size={20} />
                Content that builds trust and drives growth
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#09bbc8]" size={20} />
                Agile teams that innovate with you — not after you
              </li>
            </ul>
          </div>
          <div className="mt-10 text-center">
            {/* Optional: put an image of "happy AI" or "innovative robot" */}
            <img src="/img2.png" alt="Happy Robot" className="w-32 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
