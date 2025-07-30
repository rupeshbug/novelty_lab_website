"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Building2,
  MapPin,
  Sparkles,
  Check,
  ArrowLeft,
  Zap,
  Brain,
  Globe,
  ShoppingCart,
  Truck,
  DollarSign,
  Heart,
  GraduationCap,
  Factory,
} from "lucide-react";

// Dynamic template mapping based on industry
const industryTemplates = {
  ecommerce: [
    {
      title: "AI-Powered Product Discovery",
      description:
        "Smart search and personalized product recommendations that boost conversions by 40%",
      icon: "🛍️",
      popular: true,
    },
    {
      title: "Intelligent Customer Support",
      description:
        "24/7 AI assistant that handles 80% of customer queries instantly",
      icon: "💬",
      popular: false,
    },
    {
      title: "Dynamic Pricing Engine",
      description:
        "Real-time price optimization based on demand, competition, and inventory",
      icon: "💰",
      popular: true,
    },
    {
      title: "Automated Email Campaigns",
      description:
        "Personalized email sequences that recover 25% more abandoned carts",
      icon: "📧",
      popular: false,
    },
    {
      title: "Inventory Forecasting",
      description:
        "Predict demand and optimize stock levels to reduce waste by 30%",
      icon: "📊",
      popular: false,
    },
  ],
  logistics: [
    {
      title: "Route Optimization Engine",
      description: "AI-powered delivery routing that cuts fuel costs by 20-35%",
      icon: "🗺️",
      popular: true,
    },
    {
      title: "Predictive Maintenance",
      description:
        "Prevent vehicle breakdowns before they happen with smart alerts",
      icon: "🔧",
      popular: true,
    },
    {
      title: "Customer Portal & Tracking",
      description:
        "Real-time shipment visibility that reduces support calls by 60%",
      icon: "📱",
      popular: false,
    },
    {
      title: "Demand Forecasting",
      description:
        "Predict shipping volumes and optimize fleet capacity planning",
      icon: "📈",
      popular: false,
    },
  ],
  finance: [
    {
      title: "Risk Assessment AI",
      description:
        "Automated credit scoring and fraud detection with 95% accuracy",
      icon: "🛡️",
      popular: true,
    },
    {
      title: "Client Onboarding Automation",
      description: "Streamline KYC processes and reduce approval time by 70%",
      icon: "👤",
      popular: true,
    },
    {
      title: "Investment Advisor Bot",
      description:
        "Personalized financial recommendations based on risk profile",
      icon: "💎",
      popular: false,
    },
    {
      title: "Compliance Monitoring",
      description: "Automated regulatory compliance tracking and reporting",
      icon: "📋",
      popular: false,
    },
  ],
  healthcare: [
    {
      title: "Patient Scheduling Assistant",
      description: "Smart appointment booking that reduces no-shows by 45%",
      icon: "📅",
      popular: true,
    },
    {
      title: "Symptom Assessment Tool",
      description: "AI-powered triage to prioritize patient care effectively",
      icon: "🩺",
      popular: true,
    },
    {
      title: "Medical Record Analysis",
      description:
        "Extract insights from patient data to improve treatment outcomes",
      icon: "📄",
      popular: false,
    },
    {
      title: "Telehealth Platform",
      description: "Integrated virtual consultation system with AI note-taking",
      icon: "💻",
      popular: false,
    },
  ],
  software: [
    {
      title: "Code Review Assistant",
      description: "AI-powered code analysis for better quality and security",
      icon: "👨‍💻",
      popular: true,
    },
    {
      title: "Bug Prediction Engine",
      description: "Identify potential issues before they reach production",
      icon: "🐛",
      popular: true,
    },
    {
      title: "Documentation Generator",
      description: "Automatically create and maintain technical documentation",
      icon: "📚",
      popular: false,
    },
    {
      title: "User Behavior Analytics",
      description: "Understand how users interact with your software",
      icon: "📊",
      popular: false,
    },
  ],
  education: [
    {
      title: "Adaptive Learning Platform",
      description: "Personalized curriculum that adapts to each student's pace",
      icon: "🎓",
      popular: true,
    },
    {
      title: "Automated Grading System",
      description: "AI-powered assessment tool that saves 80% grading time",
      icon: "✅",
      popular: true,
    },
    {
      title: "Student Support Chatbot",
      description: "24/7 academic assistance and campus information",
      icon: "🤖",
      popular: false,
    },
    {
      title: "Plagiarism Detection",
      description: "Advanced content originality verification system",
      icon: "🔍",
      popular: false,
    },
  ],
};

const industryOptions = [
  {
    value: "ecommerce",
    label: "E-commerce & Retail",
    icon: ShoppingCart,
    color: "from-emerald-500 to-teal-600",
  },
  {
    value: "logistics",
    label: "Logistics & Supply Chain",
    icon: Truck,
    color: "from-blue-500 to-cyan-600",
  },
  {
    value: "finance",
    label: "Finance & Banking",
    icon: DollarSign,
    color: "from-yellow-500 to-orange-600",
  },
  {
    value: "healthcare",
    label: "Healthcare & Medical",
    icon: Heart,
    color: "from-red-500 to-pink-600",
  },
  {
    value: "software",
    label: "Software & Technology",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
  },
  {
    value: "education",
    label: "Education & Training",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-600",
  },
];

export default function OnboardingPage() {
  // Mock user data
  const user = { firstName: "Alex" };

  const [step, setStep] = useState(1);
  const [businessInfo, setBusinessInfo] = useState({
    name: "",
    domain: "",
    location: "",
  });
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [customTemplate, setCustomTemplate] = useState("");

  const getCurrentTemplates = () => {
    const domainKey = businessInfo.domain.toLowerCase();
    return (
      industryTemplates[domainKey as keyof typeof industryTemplates] ||
      industryTemplates.software
    );
  };

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
      // Here you would typically navigate to the chat interface
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
  };

  const isStep1Valid =
    businessInfo.name.trim() &&
    businessInfo.domain.trim() &&
    businessInfo.location.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-25 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-40 right-20 w-36 h-36 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full opacity-15 animate-float"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl opacity-25 animate-float-delayed"></div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, 5px);
          }
          50% {
            transform: translate(-5px, 10px);
          }
          75% {
            transform: translate(5px, -5px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(90deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 px-4 py-8 flex flex-col items-center min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 max-w-2xl"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Novelty Lab
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {user?.firstName
              ? `Welcome aboard, ${user.firstName}! 🚀`
              : "Welcome to the Future! 🚀"}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Let&apos;s build something extraordinary together. We&apos;ll
            customize AI solutions that transform your business.
          </p>
        </motion.div>

        {/* Progress indicator */}
        <div className="flex items-center gap-4 mb-8">
          {[1, 2].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step >= stepNumber
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                {step > stepNumber ? <Check className="w-4 h-4" /> : stepNumber}
              </div>
              {stepNumber < 2 && (
                <div
                  className={`w-12 h-1 mx-2 rounded-full transition-all duration-300 ${
                    step > stepNumber
                      ? "bg-gradient-to-r from-purple-500 to-pink-500"
                      : "bg-gray-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl px-5 py-8 md:px-8 md:py-8 border border-white/20 shadow-2xl"
              >
                <div className="text-center mb-8">
                  <Building2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Tell us about your business
                  </h2>
                  <p className="text-gray-300">
                    This helps us understand your unique needs and recommend the
                    perfect AI solutions
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-md font-medium text-gray-200 mb-2">
                      What&apos;s your business called?
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                      value={businessInfo.name}
                      onChange={(e) =>
                        setBusinessInfo({
                          ...businessInfo,
                          name: e.target.value,
                        })
                      }
                      placeholder="e.g. TechFlow Solutions, Green Valley Logistics..."
                    />
                  </div>

                  <div>
                    <label className="block text-md font-medium text-gray-200 mb-3">
                      Which industry best describes your business?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {industryOptions.map((industry) => (
                        <motion.div
                          key={industry.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            setBusinessInfo({
                              ...businessInfo,
                              domain: industry.value,
                            })
                          }
                          className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 ${
                            businessInfo.domain === industry.value
                              ? "border-purple-400 bg-purple-500/20"
                              : "border-white/20 bg-white/5 hover:border-white/40"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${industry.color}`}
                            >
                              <industry.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-medium">
                              {industry.label}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-md font-medium text-gray-200 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Where are you located?
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                      value={businessInfo.location}
                      onChange={(e) =>
                        setBusinessInfo({
                          ...businessInfo,
                          location: e.target.value,
                        })
                      }
                      placeholder="e.g. Kathmandu, Nepal • London, UK • Tokyo, Japan"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl px-5 py-8 md:px-8 md:py-8 border border-white/20 shadow-2xl"
              >
                <div className="text-center mb-8">
                  <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Choose your AI superpowers
                  </h2>
                  <p className="text-gray-300">
                    Here are some best solutions that drive real results in{" "}
                    <span className="text-purple-400 font-semibold">
                      {businessInfo.domain}
                    </span>{" "}
                    domain.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  {getCurrentTemplates().map((template, index) => (
                    <motion.div
                      key={template.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleTemplateToggle(template.title)}
                      className={`cursor-pointer rounded-xl p-5 border-2 transition-all duration-200 relative ${
                        selectedTemplates.includes(template.title)
                          ? "border-purple-400 bg-purple-500/20"
                          : "border-white/20 bg-white/5 hover:border-white/40"
                      }`}
                    >
                      {template.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold px-2 py-1 rounded-full text-black">
                          POPULAR
                        </div>
                      )}
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{template.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white text-xl mb-1">
                            {template.title}
                          </h3>
                          <p className="text-gray-300 text-md leading-relaxed">
                            {template.description}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedTemplates.includes(template.title)
                              ? "border-purple-400 bg-purple-500"
                              : "border-gray-400"
                          }`}
                        >
                          {selectedTemplates.includes(template.title) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <label className="block text-md font-medium text-gray-200 mb-2">
                    Have something specific in mind? Tell us!
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all backdrop-blur-sm"
                    value={customTemplate}
                    onChange={(e) => setCustomTemplate(e.target.value)}
                    placeholder="e.g. Automated supplier onboarding, Custom analytics dashboard..."
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 gap-4">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                step === 1
                  ? "opacity-50 cursor-not-allowed bg-gray-400"
                  : "bg-white/10 hover:bg-white/20 text-white cursor-pointer"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <div className="flex-1" />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              disabled={step === 1 && !isStep1Valid}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all ${
                step === 1 && !isStep1Valid
                  ? "opacity-50 cursor-not-allowed bg-gray-600"
                  : "bg-gradient-to-r from-purple-500 to-yellow-500 text-white shadow-lg cursor-pointer"
              }`}
            >
              {step === 1 ? "Continue" : "Launch AI Assistant"}
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
