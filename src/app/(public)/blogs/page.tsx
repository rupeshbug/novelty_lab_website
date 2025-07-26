// BlogLandingPage.tsx

import { BadgeCheck, BookOpen } from "lucide-react";
import Link from "next/link";

export default function BlogLandingPage() {
  const blogData = [
    {
      category: "Engineering",
      blogs: [
        {
          title: "AI Agents in Software Systems",
          description:
            "A deep dive into how long-term memory is implemented in AI agents using LangChain and Pinecone.",
          href: "/blogs/ai-agents-in-modern-software",
        },
        {
          title: "LangGraph Workflows Explained",
          description:
            "Understand how LangGraph helps orchestrate multi-step AI pipelines with persistent state.",
          href: "/blogs/ai-agents-in-modern-software",
        },
      ],
    },
    {
      category: "Technology",
      blogs: [
        {
          title: "Serverless Architectures with Next.js",
          description:
            "Learn how to scale your Next.js apps with serverless functions and edge runtimes.",
          href: "/blogs/ai-agents-in-modern-software",
        },
        {
          title: "Best Practices for Vector Databases",
          description:
            "How to structure, query, and manage vector stores like Pinecone and FAISS effectively.",
          href: "/blogs/ai-agents-in-modern-software",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">🚀 Our Blogs</h1>

      <div className="space-y-12">
        {blogData.map((section) => (
          <div key={section.category}>
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck className="text-blue-500" />
              <h2 className="text-2xl font-semibold">{section.category}</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.blogs.map((blog, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 transition-all shadow-md backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-3 text-blue-400">
                    <BookOpen size={18} />
                    <h3 className="font-semibold text-lg">{blog.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{blog.description}</p>
                  <Link href={blog.href}>
                    <button>Read</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
