"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Eye,
  Heart,
  ChevronRight,
  Code,
  Database,
  Brain,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function AIAgentsBlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Blog metadata
  const blogData = {
    title: "AI Agents in Modern Software Systems",
    description:
      "A comprehensive deep dive into the role of AI agents in modern software systems.",
    author: "Dr. Sarah Chen",
    publishedDate: "2024-12-15",
    readTime: "8 min read",
    views: "2.3k",
    likes: 147,
    tags: [
      "AI",
      "LangChain",
      "Pinecone",
      "Vector Databases",
      "Machine Learning",
    ],
    category: "Engineering & Technology",
    image: "/images/ai-agents-hero.jpg",
  };

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="min-h-screen text-white mt-16">
        {/* Hero Section with Parallax */}
        <motion.section
          style={{ y: headerY, opacity: headerOpacity }}
          className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background with Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/80 to-cyan-900/90"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

          {/* Floating Tech Icons */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-20 left-1/4"
            >
              <Brain className="w-8 h-8 text-purple-400 opacity-60" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-32 right-1/3"
            >
              <Database className="w-6 h-6 text-cyan-400 opacity-50" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 8, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              className="absolute bottom-32 left-1/3"
            >
              <Code className="w-7 h-7 text-pink-400 opacity-40" />
            </motion.div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-300">
                <Link
                  href="/blogs"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-cyan-400">{blogData.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  {blogData.title}
                </span>
              </h1>

              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                {blogData.description}
              </p>

              {/* Author & Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span>{blogData.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogData.publishedDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogData.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {blogData.views} views
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Article Content */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          {/* Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between mb-12 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
          >
            <Link
              href="/blogs"
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full hover:bg-red-500/30 transition-colors">
                <Heart className="w-4 h-4" />
                {blogData.likes}
              </button>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {blogData.tags.map((tag, index) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Featured Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-cyan-900/50"></div>
              <Zap className="w-16 h-16 text-white/30 relative z-10" />
            </div>

            {/* Article Content */}
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <h2 className="text-2xl font-bold text-white mb-4">
                Introduction
              </h2>
              <p>
                In the rapidly evolving landscape of artificial intelligence, AI
                agents have become the cornerstone of modern software systems.
                These intelligent entities are revolutionizing how we interact
                with technology, bringing unprecedented levels of automation and
                decision-making capabilities to applications across industries.
              </p>

              <p>
                At the heart of effective AI agents lies their ability to
                maintain context and learn from interactions over time. This
                capability, known as long-term memory, is what separates truly
                intelligent agents from simple reactive systems. In this
                comprehensive guide, we'll explore how to implement robust
                memory systems using cutting-edge tools like LangChain and
                Pinecone vector databases.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Understanding AI Agent Architecture
              </h2>
              <p>
                Modern AI agents operate on a sophisticated architecture that
                combines multiple components working in harmony. The core
                components include:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Perception Layer:</strong> Processes and interprets
                  input from various sources
                </li>
                <li>
                  <strong>Reasoning Engine:</strong> Makes decisions based on
                  current context and historical data
                </li>
                <li>
                  <strong>Memory System:</strong> Stores and retrieves relevant
                  information efficiently
                </li>
                <li>
                  <strong>Action Interface:</strong> Executes decisions and
                  interacts with external systems
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Implementing Long-term Memory with LangChain
              </h2>
              <p>
                LangChain provides a powerful framework for building AI
                applications with memory capabilities. The library offers
                several memory types, each suited for different use cases:
              </p>

              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 my-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                  Memory Types in LangChain
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong>ConversationBufferMemory:</strong> Stores the entire
                    conversation history
                  </li>
                  <li>
                    <strong>ConversationSummaryMemory:</strong> Maintains a
                    running summary of conversations
                  </li>
                  <li>
                    <strong>ConversationBufferWindowMemory:</strong> Keeps only
                    the last K interactions
                  </li>
                  <li>
                    <strong>VectorStoreRetrieverMemory:</strong> Uses vector
                    similarity for memory retrieval
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Vector Databases: The Foundation of Semantic Memory
              </h2>
              <p>
                Vector databases like Pinecone have revolutionized how AI
                systems store and retrieve information. Unlike traditional
                databases that rely on exact matches, vector databases enable
                semantic search capabilities that understand context and
                meaning.
              </p>

              <p>
                When implementing memory systems for AI agents, vector databases
                provide several key advantages:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Semantic similarity search for contextually relevant
                  information retrieval
                </li>
                <li>
                  Scalable storage for large volumes of conversational data
                </li>
                <li>
                  Fast query performance even with millions of stored vectors
                </li>
                <li>Integration capabilities with popular ML frameworks</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Best Practices for Memory Implementation
              </h2>
              <p>
                Successful implementation of AI agent memory systems requires
                careful consideration of several factors:
              </p>

              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  Key Considerations
                </h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Memory Capacity:</strong> Balance between
                    comprehensive storage and performance
                  </li>
                  <li>
                    <strong>Retrieval Strategy:</strong> Optimize for relevance
                    and speed
                  </li>
                  <li>
                    <strong>Privacy and Security:</strong> Implement proper data
                    protection measures
                  </li>
                  <li>
                    <strong>Memory Decay:</strong> Consider implementing
                    forgetting mechanisms for outdated information
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Future Directions
              </h2>
              <p>
                As AI agents continue to evolve, we can expect significant
                advancements in memory systems. Emerging trends include
                multimodal memory capabilities, improved efficiency through
                advanced compression techniques, and more sophisticated
                reasoning over stored information.
              </p>

              <p>
                The integration of AI agents with modern software systems
                represents a paradigm shift in how we build and interact with
                technology. By leveraging advanced memory systems, developers
                can create more intelligent, context-aware applications that
                truly understand and adapt to user needs.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                Conclusion
              </h2>
              <p>
                The implementation of long-term memory in AI agents using tools
                like LangChain and Pinecone opens up exciting possibilities for
                creating more intelligent and responsive software systems. As
                these technologies continue to mature, we can expect to see even
                more sophisticated AI agents that can learn, adapt, and provide
                increasingly valuable assistance across a wide range of
                applications.
              </p>
            </div>
          </motion.article>

          {/* Related Articles */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blogs/langgraph-workflows" className="group">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all hover:scale-[1.02]">
                  <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    LangGraph Workflows Explained
                  </h4>
                  <p className="text-sm text-gray-400">
                    Understand how LangGraph helps orchestrate complex
                    multi-step AI pipelines...
                  </p>
                </div>
              </Link>
              <Link
                href="/blogs/vector-databases-best-practices"
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all hover:scale-[1.02]">
                  <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    Best Practices for Vector Databases
                  </h4>
                  <p className="text-sm text-gray-400">
                    How to structure, query, and manage vector stores
                    effectively...
                  </p>
                </div>
              </Link>
            </div>
          </motion.section>
        </section>
      </main>
    </>
  );
}
