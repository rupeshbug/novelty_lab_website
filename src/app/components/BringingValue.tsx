export default function BringingValue() {
  return (
    <section className="py-16 px-8 md:px-20 lg:px-40">
      {/* What Novelty Lab Brings to the Table */}
      <div className="relative flex flex-col lg:flex-row items-center gap-15">
        <div className="text-center lg:text-left w-full lg:w-4/6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What Novelty Lab Brings to the Table
          </h2>
          <p className="text-lg text-slate-100 mb-10 max-w-3xl mx-auto lg:mx-0">
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
              <h3 className="text-2xl font-semibold text-slate-100 mb-2">
                Smart AI Solutions
              </h3>
              <p className="text-slate-200 max-w-xs">
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
              <h3 className="text-2xl font-semibold text-slate-100 mb-2">
                Creative Content
              </h3>
              <p className="text-slate-200 text-md max-w-xs">
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
              <h3 className="text-2xl font-semibold text-slate-100 mb-2">
                Authentic Engagement
              </h3>
              <p className="text-slate-200 text-md max-w-xs">
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
    </section>
  );
}
