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
import { useState, useEffect } from "react";
import { TextParticle } from "@/components/ui/text-particle";

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const blogPosts = [
    {
      id: 1,
      title: "The Role of AI Agents in Modern Software Systems",
      description:
        "Explore how AI agents are revolutionizing software architecture and transforming the way we build intelligent applications for the future.",
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
      title: "AI Bots and Agents in Social Media for Businesses",
      description:
        "Discover how businesses are leveraging AI-powered social media bots to enhance customer engagement and drive growth.",
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
      title: "Building Scalable Web Applications with Modern Frameworks",
      description:
        "Learn how Next.js, React, and modern development practices are shaping the future of web application development.",
      category: "Web Development",
      readTime: "10 min read",
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
      title: "The Future of Machine Learning in Business Intelligence",
      description:
        "Understand how ML algorithms are transforming data analysis and decision-making processes in modern enterprises.",
      category: "Machine Learning",
      readTime: "12 min read",
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(blogPosts.length / 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(blogPosts.length / 2)) %
        Math.ceil(blogPosts.length / 2)
    );
  };

  const getVisiblePosts = () => {
    const startIndex = currentIndex * 2;
    return blogPosts.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-12 px-8 md:px-20 lg:px-40 lg:py-16 relative">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
        <TextParticle
          text="From Our Lab"
          fontSize={fontSize}
          particleColor="#09bbc8"
          particleSize={1}
          particleDensity={3}
        />
      </h2>

      <div className="mx-auto border border-gray-600 px-4 py-10 md:px-12 md:py-12 rounded-lg">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl">
              We love to share what we are learning. Check out a few recent
              ideas and insights straight from our lab notebooks.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-gray-200/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft
                size={20}
                className="text-slate-300 cursor-pointer"
              />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-gray-200/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50"
              disabled={currentIndex === Math.ceil(blogPosts.length / 2) - 1}
            >
              <ChevronRight
                size={20}
                className="text-slate-300 cursor-pointer"
              />
            </button>
          </div>
        </div>

        {/* Blog cards container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(blogPosts.length / 2) }).map(
              (_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {blogPosts
                    .slice(slideIndex * 2, slideIndex * 2 + 2)
                    .map((post) => (
                      <div
                        key={post.id}
                        className="group bg-white/5 border border-gray-200/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-gray-200/40 hover:transform hover:scale-[1.02]"
                      >
                        {/* Image/Visual area */}
                        <div className="relative h-48 bg-gradient-to-br overflow-hidden">
                          {post.image}
                        </div>

                        {/* Content */}
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
              )
            )}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(blogPosts.length / 2) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
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
