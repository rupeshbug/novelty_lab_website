"use client";

import { useEffect, useState } from "react";

import { TextParticle } from "@/components/ui/text-particle";

export default function FromOurLab() {
  const [fontSize, setFontSize] = useState(80);

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      setFontSize(width < 768 ? 60 : 80);
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);
  return (
    <div className="text-center mt-10 py-12 px-8 md:px-20 lg:px-40 lg:py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
        <TextParticle
          text="From Our Lab"
          fontSize={fontSize}
          particleColor="#09bbc8"
          particleSize={1}
          particleDensity={3}
        />
      </h2>
      <p className="text-lg text-slate-100 mb-12 max-w-3xl mx-auto">
        We love to share what we are learning. Check out a few recent ideas and
        insights straight from our lab notebooks.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {/* Blog Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition cursor-pointer border-t-4 border-[#09bbc8]">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              AI Bots & Agents for Social Media Businesses
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Learn how intelligent agents can automate DMs, content posting,
              and customer support while building community.
            </p>
          </div>
          <button className="text-[#09bbc8] font-medium hover:underline cursor-pointer text-sm">
            Read More →
          </button>
        </div>

        {/* Blog Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition cursor-pointer border-t-4 border-[#09bbc8]">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              The Role of AI Agents in Modern Software Systems
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              We explore how autonomous AI agents are becoming a new layer in
              software stacks and what that means for businesses.
            </p>
          </div>
          <button className="text-[#09bbc8] font-medium hover:underline cursor-pointer text-sm">
            Read More →
          </button>
        </div>

        {/* Blog Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition cursor-pointer border-t-4 border-[#09bbc8]">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Building Trust Through Content
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Discover why thoughtful blogs and videos still matter — and how
              they can set your brand apart in a noisy market.
            </p>
          </div>
          <button className="text-[#09bbc8] font-medium hover:underline cursor-pointer text-sm">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}
