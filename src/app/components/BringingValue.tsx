import { TextParticle } from "@/components/ui/text-particle";

export default function BringingValue() {
  return (
    <section className="py-16 px-8 md:px-20 lg:px-40 bg-white">
      {/* What Novelty Lab Brings to the Table */}
      <div className="relative flex flex-col lg:flex-row items-center gap-15 mb-24">
        <div className="text-center lg:text-left w-full lg:w-4/6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            What Novelty Lab Brings to the Table
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto lg:mx-0">
            At Novelty Lab, we blend cutting-edge AI with creative digital
            strategy. Whether it is intelligent automation or brand-building
            content, we make sure that your business connects, converts, and
            grows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-b border-x border-gray-300 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center">
            {/* Card 1 */}
            <div className="px-6 py-10 flex flex-col items-center">
              <img
                src="/one.png"
                alt="Futuristic AI robot with glowing circuitry working on a laptop"
                className="w-30 h-30 mb-4 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Smart AI Solutions
              </h3>
              <p className="text-gray-600 text-md max-w-xs">
                From chatbots to full-blown AI agents, we craft intelligent
                systems that solve real business challenges.
              </p>
            </div>

            {/* Card 2 */}
            <div className="px-6 py-10 flex flex-col items-center">
              <img
                src="/two.png"
                alt="Creative workspace with a laptop, drawing tablet, and art supplies"
                className="w-30 h-30 mb-4 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Creative Content
              </h3>
              <p className="text-gray-600 text-md max-w-xs">
                Blogs, videos, and visuals that resonate with your audience and
                turn followers into fans.
              </p>
            </div>

            {/* Card 3 */}
            <div className="px-6 py-10 flex flex-col items-center">
              <img
                src="/three.png"
                alt="Person typing on smartphone, engaging on social media"
                className="w-30 h-30 mb-4 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Authentic Engagement
              </h3>
              <p className="text-gray-600 text-md max-w-xs">
                Digital strategies that spark conversations, build trust, and
                grow your brand organically.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-2/6 rounded-xl animate-fade-in">
          <img
            src="/futuristic_ai_lab.png"
            alt="AI bot in lab coat experimenting"
            className="w-100 max-w-md mx-auto"
          />
        </div>
      </div>

      {/* From Our Lab */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
          <TextParticle
            text="From Our Lab"
            fontSize={80}
            particleColor="#09bbc8"
            particleSize={1}
            particleDensity={3}
          />
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          We love to share what we are learning. Check out a few recent ideas
          and insights straight from our lab notebooks.
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
    </section>
  );
}
