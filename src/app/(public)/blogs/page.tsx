"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Lightbulb,
  Brain,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function BlogLandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const blogData = [
    {
      category: "Product & Business Innovation",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      blogs: [
        {
          id: 1,
          title:
            "How AI Bots and Agents Are Transforming Social Media for Businesses",
          description:
            "An insightful look into how AI bots and agents are transforming social media engagement for businesses.",
          image: "/ai-agents-social-media.png",
          author: "Rupesh Chaulagain",
          date: "2025-7-28",
          readTime: "6 min read",
          tags: [
            "AI Agents",
            "Chatbots",
            "Social Media",
            "Customer Engagement",
            "Business Automation",
          ],
          href: "/blogs/ai-agents-in-social-media",
          featured: true,
        },
        {
          id: 2,
          title: "Building AI-First Products: A Strategic Guide",
          description:
            "How to design and develop products that leverage AI from the ground up, creating competitive advantages and user value.",
          image: "/images/blog-2.jpg",
          author: "Rupesh Chaulagain",
          date: "2025-7-28",
          readTime: "8 min read",
          tags: [
            "AI Strategy",
            "Product Management",
            "AI-First",
            "Innovation",
            "Product Development",
          ],
          href: "/blogs/building-ai-first-products",
        },
        {
          id: 3,
          title: "Digital Transformation: Beyond the Buzzword",
          description:
            "Real-world strategies for implementing meaningful digital transformation that drives business growth and operational efficiency.",
          image: "/images/blog-3.jpg",
          author: "David Kim",
          date: "2024-12-07",
          readTime: "8 min read",
          tags: ["Digital Transformation", "Strategy", "Business"],
          href: "/blogs/ai-agents-in-modern-software",
        },
        {
          id: 4,
          title: "The Economics of Custom Software Development",
          description:
            "Understanding the ROI, cost factors, and strategic benefits of investing in custom software solutions for your business.",
          image: "/images/blog-4.jpg",
          author: "Rachel Torres",
          date: "2024-12-03",
          readTime: "7 min read",
          tags: ["Business", "ROI", "Custom Software"],
          href: "/blogs/ai-agents-in-modern-software",
        },
      ],
    },
    {
      category: "Engineering & Technology",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      blogs: [
        {
          id: 5,
          title: "AI Agents in Modern Software Systems",
          description:
            "A comprehensive deep dive into how long-term memory is implemented in AI agents using LangChain and Pinecone vector databases.",
          image: "/images/blog-5.jpg",
          author: "Dr. Sarah Chen",
          date: "2025-7-26",
          readTime: "8 min read",
          tags: [
            "AI Agents",
            "Machine Learning",
            "Automation",
            "Customer Experience",
            "Enterprise AI",
          ],
          href: "/blogs/ai-agents-in-modern-software",
          featured: true,
        },
        {
          id: 6,
          title:
            "Building an AI Agent with Long-Term Memory Using Vector Database",
          description:
            "Learn how to build an AI assistant that remembers use input across sessons by using LangGraph and FAISS vector store.",
          image: "/images/blog-6.jpg",
          author: "Rupesh Chaulagain",
          date: "2025-7-27",
          readTime: "8 min read",
          tags: ["LangGraph", "Agentic AI", "Vector Database", "LLM", "FAISS"],
          href: "/blogs/ai-agents-with-memory",
        },
        {
          id: 7,
          title: "Serverless Architectures with Next.js 14",
          description:
            "Master the art of scaling your Next.js applications with serverless functions, edge runtimes, and modern deployment strategies.",
          image: "/images/blog-7.jpg",
          author: "James Wilson",
          date: "2024-12-12",
          readTime: "7 min read",
          tags: ["Next.js", "Serverless", "Performance"],
          href: "/blogs/ai-agents-in-modern-software",
        },
        {
          id: 8,
          title: "Best Practices for Vector Databases",
          description:
            "How to structure, query, and manage vector stores like Pinecone and FAISS effectively for production applications.",
          image: "/images/blog-8.jpg",
          author: "Anna Thompson",
          date: "2024-12-08",
          readTime: "9 min read",
          tags: ["Vector DB", "Pinecone", "FAISS"],
          href: "/blogs/ai-agents-in-modern-software",
        },
      ],
    },
  ];

  const allBlogs = blogData.flatMap((section) => section.blogs);
  const featuredBlogs = allBlogs.filter((blog) => blog.featured);

  return (
    <>
      <Navbar />
      <main
        ref={containerRef}
        className="min-h-screen text-white mt-16 relative"
      >
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 md:px-12 text-center relative z-10">
          <div className="relative">
            {/* Floating Elements */}
            <div className="absolute -top-8 left-1/4 animate-float hidden sm:block">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-60"></div>
            </div>
            <div
              className="absolute -top-12 right-1/3 animate-float hidden sm:block"
              style={{ animationDelay: "1s" }}
            >
              <BookOpen className="w-6 h-6 text-cyan-400 opacity-70 animate-bounce" />
            </div>
            <div
              className="absolute -top-6 right-1/4 animate-float hidden sm:block"
              style={{ animationDelay: "2s" }}
            >
              <Lightbulb className="w-5 h-5 text-yellow-400 opacity-60 animate-pulse" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-7 leading-snug">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Innovation
                </span>
                <br />
                <span className="text-[#09bbc8] relative inline-block">
                  Chronicles
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#09bbc8] to-transparent animate-pulse"></div>
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-gray-200 text-base sm:text-xl leading-relaxed">
                Dive deep into the latest innovations, technical insights, and
                breakthrough discoveries from our laboratory of digital
                transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles Section */}
        {featuredBlogs.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Featured Articles
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={blog.href}>
                      <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm h-full">
                        {/* Image */}
                        <div className="relative h-48 md:h-64 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
                          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold">
                            FEATURED
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {blog.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                            {blog.title}
                          </h3>

                          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                            {blog.description}
                          </p>

                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <div className="flex items-center gap-4">
                              <span>{blog.author}</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(blog.date).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {blog.readTime}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Blog Categories */}
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-7xl mx-auto space-y-16">
            {blogData.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center`}
                  >
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {section.category}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.blogs
                    .filter((blog) => !blog.featured)
                    .map((blog, i) => (
                      <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        onMouseEnter={() => setHoveredCard(blog.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className="group"
                      >
                        <Link href={blog.href}>
                          <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm h-full flex flex-col">
                            {/* Image Placeholder */}
                            <div className="relative h-48 overflow-hidden flex-shrink-0">
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-20`}
                              ></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <section.icon className="w-16 h-16 text-white/30" />
                              </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                              <div className="flex items-center gap-2 mb-3 text-cyan-400">
                                <BookOpen size={16} />
                                <span className="text-xs font-medium">
                                  {blog.readTime}
                                </span>
                              </div>

                              <h3 className="font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2 flex-grow">
                                {blog.title}
                              </h3>

                              <p className="text-sm text-gray-300 mb-4 line-clamp-3 flex-grow">
                                {blog.description}
                              </p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {blog.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className={`px-2 py-1 bg-gradient-to-r ${section.color} bg-opacity-20 text-xs rounded-full`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                                <span>{blog.author}</span>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {new Date(blog.date).toLocaleDateString()}
                                </div>
                              </div>

                              {/* Read More Button */}
                              <motion.div
                                className="flex items-center gap-2 text-[#09bbc8] font-medium text-sm group-hover:gap-3 transition-all mt-auto"
                                animate={{
                                  x: hoveredCard === blog.id ? 5 : 0,
                                }}
                              >
                                Read Article
                                <ArrowRight
                                  size={16}
                                  className="group-hover:translate-x-1 transition-transform"
                                />
                              </motion.div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
