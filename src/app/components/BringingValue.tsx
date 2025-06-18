"use client";

// Animated AI Solutions Illustration
const AIIllustration = () => (
  <div className="relative w-full h-40 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg overflow-hidden">
    {/* Neural Network Nodes */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-32 h-32">
        {/* Central Brain */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>

        {/* Orbiting Nodes */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full animate-spin"
          style={{ animationDuration: "10s" }}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
          <div
            className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-400 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        {/* Connection Lines */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <line
              x1="50"
              y1="10"
              x2="50"
              y2="50"
              stroke="cyan"
              strokeWidth="1"
              className="animate-pulse"
            />
            <line
              x1="90"
              y1="50"
              x2="50"
              y2="50"
              stroke="cyan"
              strokeWidth="1"
              className="animate-pulse"
            />
            <line
              x1="50"
              y1="90"
              x2="50"
              y2="50"
              stroke="cyan"
              strokeWidth="1"
              className="animate-pulse"
            />
            <line
              x1="10"
              y1="50"
              x2="50"
              y2="50"
              stroke="cyan"
              strokeWidth="1"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Floating Particles */}
    <div className="absolute top-4 left-4 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
    <div
      className="absolute top-8 right-6 w-1 h-1 bg-blue-300 rounded-full animate-ping"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="absolute bottom-6 left-8 w-1 h-1 bg-purple-300 rounded-full animate-ping"
      style={{ animationDelay: "2s" }}
    ></div>
  </div>
);

// Animated Creative Content Illustration
const CreativeIllustration = () => (
  <div className="relative w-full h-40 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg overflow-hidden">
    {/* Design Canvas */}
    <div className="absolute inset-4 bg-white/10 rounded border-2 border-dashed border-purple-400/50">
      {/* Animated Brush Stroke */}
      <div className="absolute top-4 left-4 w-16 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
      <div
        className="absolute top-8 left-6 w-12 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-12 left-4 w-20 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Floating Design Elements */}
      <div
        className="absolute bottom-8 right-8 w-8 h-8 border-4 border-yellow-400 rounded-full animate-spin"
        style={{ animationDuration: "3s" }}
      ></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 bg-pink-400 rotate-45 animate-bounce"></div>
      <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
    </div>

    {/* Color Palette */}
    <div className="absolute bottom-2 left-2 flex gap-1">
      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
      <div
        className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  </div>
);

// Animated Engagement Illustration
const EngagementIllustration = () => (
  <div className="relative w-full h-40 bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-lg overflow-hidden">
    {/* Chat Bubbles */}
    <div className="absolute top-4 left-4 w-16 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl rounded-bl-sm animate-bounce">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-1">
        <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div
          className="w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>

    <div
      className="absolute top-12 right-4 w-20 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl rounded-br-sm animate-bounce"
      style={{ animationDelay: "1s" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-1">
        <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div
          className="w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>

    <div
      className="absolute bottom-8 left-6 w-14 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl rounded-bl-sm animate-bounce"
      style={{ animationDelay: "2s" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-1">
        <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div
          className="w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.6s" }}
        ></div>
      </div>
    </div>

    {/* Connection Hearts */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-6 h-6 text-red-400 animate-pulse">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>

    {/* Engagement Ripples */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-teal-400/30 rounded-full animate-ping"></div>
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-green-400/40 rounded-full animate-ping"
      style={{ animationDelay: "0.5s" }}
    ></div>
  </div>
);

// Animated Results Illustration
const ResultsIllustration = () => (
  <div className="relative w-full h-40 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg overflow-hidden">
    {/* Animated Chart Bars */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-end gap-2">
      <div
        className="w-4 bg-gradient-to-t from-red-500 to-orange-400 rounded-t animate-pulse"
        style={{ height: "30px", animationDelay: "0s" }}
      ></div>
      <div
        className="w-4 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-t animate-pulse"
        style={{ height: "45px", animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-4 bg-gradient-to-t from-yellow-500 to-green-400 rounded-t animate-pulse"
        style={{ height: "60px", animationDelay: "0.4s" }}
      ></div>
      <div
        className="w-4 bg-gradient-to-t from-green-500 to-cyan-400 rounded-t animate-pulse"
        style={{ height: "40px", animationDelay: "0.6s" }}
      ></div>
      <div
        className="w-4 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t animate-pulse"
        style={{ height: "70px", animationDelay: "0.8s" }}
      ></div>
    </div>

    {/* Trending Arrow */}
    <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center">
      <div className="w-8 h-8 text-green-400 animate-bounce">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14l5-5 5 5z" />
        </svg>
      </div>
    </div>

    {/* Success Indicators */}
    <div className="absolute top-6 left-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
    <div
      className="absolute top-12 left-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="absolute top-8 left-12 w-2 h-2 bg-cyan-400 rounded-full animate-ping"
      style={{ animationDelay: "2s" }}
    ></div>

    {/* Growth Line */}
    <div className="absolute top-8 left-4 w-20 h-16 opacity-50">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 10 90 Q 30 70 50 50 Q 70 30 90 10"
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

export default function BringingValue() {
  const cards = [
    {
      id: 1,
      illustration: AIIllustration,
      title: "Smart AI Solutions",
      description:
        "From advanced chatbots to full-blown autonomous agents, we build AI systems that adapt, learn, and deliver results. Whether it's automating customer support, optimizing workflows, or creating predictive models, our solutions are built to solve real business problems—not just check boxes. We make AI practical, scalable, and aligned with your goals.",
    },
    {
      id: 2,
      illustration: CreativeIllustration,
      title: "Creative Content",
      description:
        "We produce high-impact content that resonates—blogs that inform, videos that go viral, and visuals that stop the scroll. Our creative team combines storytelling, design, and strategy to amplify your brand's voice across platforms. It's not just about being seen; it's about being remembered, shared, and followed.",
    },
    {
      id: 3,
      illustration: EngagementIllustration,
      title: "Authentic Engagement",
      description:
        "In a world full of noise, we help you spark real conversations. Through thoughtful messaging, interactive experiences, and community-driven strategies, we turn passive audiences into active participants. It's not about likes—it's about loyalty, trust, and long-term relationships with your audience.",
    },
    {
      id: 4,
      illustration: ResultsIllustration,
      title: "Results Driven",
      description:
        "Every project we take on is guided by outcomes. We define clear KPIs and build toward measurable success—whether that's higher conversions, deeper engagement, or operational efficiencies. No fluff, no vanity metrics. Just strategies that move the needle and prove their worth.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 lg:px-40 xl:px-40">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What{" "}
            <span className="text-[#09bbc8] animate-pulse">Novelty Lab</span>{" "}
            Brings to the Table
          </h2>
          <p className="text-lg text-slate-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Novelty Lab, we blend cutting-edge AI with creative digital
            strategy. Whether it is intelligent automation or brand-building
            content, we make sure that your business connects, converts, and
            grows.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card) => {
            const IllustrationComponent = card.illustration;

            return (
              <div key={card.id} className="relative h-full">
                {/* Main card - removed all hover effects */}
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl overflow-hidden py-8">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="20"
                        cy="20"
                        r="2"
                        fill="currentColor"
                        className="text-[#09bbc8]"
                      />
                      <circle
                        cx="80"
                        cy="30"
                        r="1.5"
                        fill="currentColor"
                        className="text-[#09bbc8]"
                      />
                      <circle
                        cx="60"
                        cy="80"
                        r="1"
                        fill="currentColor"
                        className="text-[#09bbc8]"
                      />
                      <path
                        d="M20,20 Q50,10 80,30"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        className="text-[#09bbc8]"
                      />
                    </svg>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Animated Illustration */}
                    <div className="mb-6">
                      <IllustrationComponent />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-200 leading-relaxed flex-grow">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
