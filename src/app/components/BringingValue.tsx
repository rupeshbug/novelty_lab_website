import { Lightbulb, PenTool, MessageCircle } from "lucide-react";

export default function BringingValue() {
  return (
    <section className="py-16 px-8 md:px-20 lg:px-40 bg-white">
      {/* What Novelty Lab Brings to the Table */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          What Novelty Lab Brings to the Table
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          At Novelty Lab, we blend cutting-edge AI with creative digital
          strategy. Whether it's intelligent automation or brand-building
          content, we make sure your business connects, converts, and grows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-4 mb-4 text-[#09bbc8]">
              <Lightbulb size={28} />
              <h3 className="text-xl font-semibold text-gray-800">
                Smart AI Solutions
              </h3>
            </div>
            <p className="text-gray-600">
              From chatbots to full-blown AI agents, we craft intelligent
              systems that solve real business challenges.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-4 mb-4 text-[#09bbc8]">
              <PenTool size={28} />
              <h3 className="text-xl font-semibold text-gray-800">
                Creative Content
              </h3>
            </div>
            <p className="text-gray-600">
              Blogs, videos, and visuals that resonate with your audience and
              turn followers into fans.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition cursor-pointer">
            <div className="flex items-center gap-4 mb-4 text-[#09bbc8]">
              <MessageCircle size={28} />
              <h3 className="text-xl font-semibold text-gray-800">
                Authentic Engagement
              </h3>
            </div>
            <p className="text-gray-600">
              Digital strategies that spark conversations, build trust, and grow
              your brand organically.
            </p>
          </div>
        </div>
      </div>

      {/* From Our Lab */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          From Our Lab
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          We love to share what we're learning. Check out a few recent ideas and
          insights straight from our lab notebooks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border-t-4 border-[#09bbc8]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              AI Bots & Agents for Social Media Businesses
            </h3>
            <p className="text-gray-600 text-sm">
              Learn how intelligent agents can automate DMs, content posting,
              and customer support while building community.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border-t-4 border-[#09bbc8]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              The Role of AI Agents in Modern Software Systems
            </h3>
            <p className="text-gray-600 text-sm">
              We explore how autonomous AI agents are becoming a new layer in
              software stacks and what that means for businesses.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border-t-4 border-[#09bbc8]">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Building Trust Through Content
            </h3>
            <p className="text-gray-600 text-sm">
              Discover why thoughtful blogs and videos still matter — and how
              they can set your brand apart in a noisy market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
