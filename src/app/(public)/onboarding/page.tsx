// app/onboarding/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";

const ecommerceTemplates = [
  {
    title: "AI-Powered Landing Page",
    description: "Generate personalized landing pages for your storefront.",
  },
  {
    title: "Product Recommendation Engine",
    description: "Suggest products based on customer behavior.",
  },
  {
    title: "Customer Support Agent",
    description: "Automate responses with a helpful AI assistant.",
  },
  {
    title: "Inventory Update Bot",
    description: "Sync stock levels across platforms automatically.",
  },
  {
    title: "Email Campaign Generator",
    description: "AI-generated email sequences for customer engagement.",
  },
];

export default function Onboarding() {
  const { user } = useUser();
  const [step, setStep] = useState(1);

  const [businessInfo, setBusinessInfo] = useState({
    name: "",
    domain: "",
    location: "",
  });

  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [customTemplate, setCustomTemplate] = useState("");

  const handleTemplateToggle = (template: string) => {
    setSelectedTemplates((prev) =>
      prev.includes(template)
        ? prev.filter((t) => t !== template)
        : [...prev, template]
    );
  };

  const handleNext = () => {
    if (step === 1 && businessInfo.name && businessInfo.domain) {
      setStep(2);
    } else if (step === 2) {
      const finalData = {
        ...businessInfo,
        selectedTemplates,
        customTemplate: customTemplate.trim(),
      };
      console.log("Submit to AI Agent:", finalData);
      // you can send `finalData` to LangChain setup or Convex
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-10 text-white flex flex-col items-center">
      {/* Top Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold">
          {user?.firstName
            ? `Welcome, ${user.firstName}`
            : "Welcome to Novelty Lab"}
        </h1>
        <p className="text-lg mt-2 text-gray-300">
          Let&apos;s kick off your AI setup journey.
        </p>
      </motion.div>

      {/* Card Container */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl w-full max-w-xl space-y-6">
        {/* Step Indicator */}
        <div className="text-sm text-gray-300 mb-4">Step {step} of 2</div>

        {step === 1 && (
          <div className="space-y-5">
            <h2 className="text-xl font-semibold text-white">
              Tell us about your business
            </h2>
            <div>
              <label className="block text-sm mb-1">Business Name</label>
              <input
                className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-400"
                value={businessInfo.name}
                onChange={(e) =>
                  setBusinessInfo({ ...businessInfo, name: e.target.value })
                }
                placeholder="e.g. FlowMart"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Domain / Industry</label>
              <input
                className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-400"
                value={businessInfo.domain}
                onChange={(e) =>
                  setBusinessInfo({ ...businessInfo, domain: e.target.value })
                }
                placeholder="e.g. IT, eCommerce, Logistics, Finance, Education"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Location</label>
              <input
                className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-400"
                value={businessInfo.location}
                onChange={(e) =>
                  setBusinessInfo({ ...businessInfo, location: e.target.value })
                }
                placeholder="e.g. Kathmandu, Nepal"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white">
              Based on your domain, here are some things we can build
            </h2>
            <div className="space-y-3">
              {ecommerceTemplates.map((template) => (
                <div
                  key={template.title}
                  onClick={() => handleTemplateToggle(template.title)}
                  className={`cursor-pointer border rounded-lg px-4 py-3 transition ${
                    selectedTemplates.includes(template.title)
                      ? "bg-purple-600 border-purple-400"
                      : "bg-white/10 border-white/20"
                  }`}
                >
                  <h3 className="font-medium">{template.title}</h3>
                  <p className="text-sm text-gray-300">
                    {template.description}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm mb-1 mt-4">
                Other needs? Tell us!
              </label>
              <input
                className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-400"
                value={customTemplate}
                onChange={(e) => setCustomTemplate(e.target.value)}
                placeholder="e.g. Supplier onboarding tool"
              />
            </div>
          </div>
        )}

        {/* Next Button */}
        <div className="pt-4">
          <button
            onClick={handleNext}
            className="w-full py-2 px-4 rounded bg-purple-600 hover:bg-purple-700 transition font-semibold"
          >
            {step === 1 ? "Next" : "Finish & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
