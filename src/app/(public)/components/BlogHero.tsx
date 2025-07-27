"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  Calendar,
  Clock,
  ChevronRight,
  Brain,
  Database,
  Code,
} from "lucide-react";
import Head from "next/head";
import Navbar from "./Navbar";

interface BlogData {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  readTime: string;
  category: string;
}

export default function BlogHero({ blogData }: { blogData: BlogData }) {
  return (
    <>
      <Head>
        <title>{blogData.title} | Novelty Lab</title>
        <meta name="description" content={blogData.description} />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.description} />
        <meta property="og:type" content="article" />
      </Head>
      <Navbar />
      <motion.section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/80 to-cyan-900/90"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-1/4"
          >
            <Brain className="w-8 h-8 text-purple-400 opacity-60" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute top-32 right-1/3"
          >
            <Database className="w-6 h-6 text-cyan-400 opacity-50" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
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
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
