"use client";

import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Bot,
  Share2,
  Zap,
  Brain,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { TextParticle } from "@/components/ui/text-particle";

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fontSize, setFontSize] = useState(80);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [maxIndex, setMaxIndex] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "AI Agents in Modern Software Systems",
      description:
        "A comprehensive deep dive into the pivotal role of AI agents in enhancing intelligence, automation, and adaptability within modern software systems.",
      category: "AI Development",
      readTime: "8 min read",
      gradient: "from-blue-400 to-purple-600",
      icon: Bot,
      image: (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Bot size={32} className="text-white" />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full"></div>
          <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/20 rounded-full"></div>
        </div>
      ),
    },
    {
      id: 2,
      title:
        "How AI Bots and Agents Are Transforming Social Media for Businesses",
      description:
        "An insightful look into how AI bots and agents are transforming social media engagement for businesses.",
      category: "Social Media AI",
      readTime: "6 min read",
      gradient: "from-emerald-400 to-teal-600",
      icon: Share2,
      image: (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-2xl">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Share2 size={32} className="text-white" />
          </div>
          <div className="absolute top-1/3 right-6 w-12 h-12 bg-white/15 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/25 rounded-full"></div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Building AI-First Products: A Strategic Guide",
      description:
        "How to design and develop products that leverage AI from the ground up, creating competitive advantages and user value.",
      category: "AI Strategy",
      readTime: "8 min read",
      gradient: "from-orange-400 to-red-600",
      icon: Zap,
      image: (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-2xl">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Zap size={32} className="text-white" />
          </div>
          <div className="absolute bottom-12 left-12 w-20 h-4 bg-white/15 rounded-full"></div>
          <div className="absolute top-1/2 right-12 w-4 h-20 bg-white/15 rounded-full"></div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Building an AI Agent with Long-Term Memory Using Vector Database",
      description:
        "Learn how to build an AI assistant that remembers use input across sessons by using LangGraph and FAISS vector store.",
      category: "AI Engineering",
      readTime: "10 min read",
      gradient: "from-violet-400 to-purple-600",
      icon: Brain,
      image: (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-2xl">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Brain size={32} className="text-white" />
          </div>
          <div className="absolute bottom-8 left-1/3 w-8 h-8 bg-white/20 rounded-lg transform -rotate-12"></div>
          <div className="absolute top-1/3 right-8 w-6 h-16 bg-white/15 rounded-full"></div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const card = container.querySelector(".blog-card") as HTMLDivElement;
      if (!card) return;

      const fullCardWidth = card.offsetWidth + 24;
      setCardWidth(fullCardWidth);

      const containerWidth = container.offsetWidth;
      const visible = Math.floor(containerWidth / fullCardWidth) || 1;
      setVisibleCards(visible);

      const max = Math.max(0, blogPosts.length - visible);
      setMaxIndex(max);
      setCurrentIndex((i) => Math.min(i, max));
    };

    updateLayout();

    const resizeObserver = new ResizeObserver(updateLayout);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [blogPosts.length]);

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      setFontSize(width < 768 ? 45 : 80);
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 px-6 md:px-20 lg:px-40 lg:py-16 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
        <TextParticle
          text="From Our Lab"
          fontSize={fontSize}
          particleColor="#09bbc8"
          particleSize={1}
          particleDensity={3}
        />
      </h2>

      <div className="mx-auto border border-gray-600 px-4 py-10 md:px-12 md:py-12 rounded-lg">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-slate-300 w-full md:max-w-2xl">
              We love to share what we are learning. Check out a few recent
              ideas and insights straight from our lab notebooks.
            </p>
          </div>

          <div className="flex gap-2 mt-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/5 hover:bg-white/10 cursor-pointer border border-gray-200/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={20} className="text-slate-300" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/5 hover:bg-white/10 cursor-pointer border border-gray-200/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50"
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight size={20} className="text-slate-300" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden cursor-pointer" ref={containerRef}>
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card w-full sm:w-[90%] md:w-[400px] flex-shrink-0 group bg-white/5 border border-gray-200/20 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.03] hover:bg-white/10 hover:border-gray-200/40"
              >
                <div className="relative h-48">{post.image}</div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#09bbc8] font-medium bg-[#09bbc8]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#f5f5f5] group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-[#09bbc8] hover:text-[#07a3af] font-medium group/btn transition-colors pt-2">
                    Read more
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: blogPosts.length - visibleCards + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentIndex
                    ? "bg-[#09bbc8] w-8"
                    : "bg-gray-400/30 hover:bg-gray-400/50"
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
