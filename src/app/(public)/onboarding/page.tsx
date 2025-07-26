"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  Globe,
  MapPin,
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  ShoppingCart,
  BarChart3,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Define proper types
interface BusinessData {
  name: string;
  domain: string;
  location: string;
}

interface SoftwareOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [businessData, setBusinessData] = useState<BusinessData>({
    name: "",
    domain: "",
    location: "",
  });
  const [selectedSoftware, setSelectedSoftware] = useState<string[]>([]);

  const softwareOptions: SoftwareOption[] = [
    {
      id: "web-dev",
      name: "Web Development",
      icon: Code,
      description: "Custom websites and web applications",
    },
    {
      id: "mobile-dev",
      name: "Mobile Apps",
      icon: Smartphone,
      description: "iOS and Android applications",
    },
    {
      id: "database",
      name: "Database Management",
      icon: Database,
      description: "Data storage and analytics",
    },
    {
      id: "cloud",
      name: "Cloud Services",
      icon: Cloud,
      description: "Scalable cloud infrastructure",
    },
    {
      id: "design",
      name: "UI/UX Design",
      icon: Palette,
      description: "User interface and experience design",
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: ShoppingCart,
      description: "Online store and payment systems",
    },
    {
      id: "analytics",
      name: "Analytics & BI",
      icon: BarChart3,
      description: "Business intelligence and reporting",
    },
    {
      id: "crm",
      name: "CRM Systems",
      icon: Users,
      description: "Customer relationship management",
    },
  ];

  const handleBusinessSubmit = () => {
    if (businessData.name && businessData.domain && businessData.location) {
      setCurrentStep(2);
    }
  };

  const toggleSoftware = (softwareId: string) => {
    setSelectedSoftware((prev: string[]) =>
      prev.includes(softwareId)
        ? prev.filter((id: string) => id !== softwareId)
        : [...prev, softwareId]
    );
  };

  const handleFinalSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Business Data:", businessData);
    console.log("Selected Software:", selectedSoftware);
    alert("Onboarding complete! Your AI agent is being prepared...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= 1 ? "bg-purple-500" : "bg-gray-600"
              } text-white font-semibold`}
            >
              1
            </div>
            <div
              className={`h-1 w-24 ${
                currentStep >= 2 ? "bg-purple-500" : "bg-gray-600"
              } rounded`}
            ></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= 2 ? "bg-purple-500" : "bg-gray-600"
              } text-white font-semibold`}
            >
              2
            </div>
          </div>
          <div className="text-center text-gray-300">
            Step {currentStep} of 2
          </div>
        </div>

        {/* Step 1: Business Information */}
        {currentStep === 1 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome to Your AI Journey
              </h1>
              <p className="text-gray-300 text-lg">
                Let's start by learning about your business so our AI agent can
                provide personalized assistance
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center text-white font-medium">
                    <Building2 className="w-5 h-5 mr-2 text-purple-400" />
                    Business Name
                  </div>
                  <input
                    type="text"
                    value={businessData.name}
                    onChange={(e) =>
                      setBusinessData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your business name"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-white font-medium">
                    <Globe className="w-5 h-5 mr-2 text-purple-400" />
                    Industry/Domain
                  </div>
                  <input
                    type="text"
                    value={businessData.domain}
                    onChange={(e) =>
                      setBusinessData((prev) => ({
                        ...prev,
                        domain: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="e.g., E-commerce, Healthcare"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-white font-medium">
                    <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                    Location
                  </div>
                  <input
                    type="text"
                    value={businessData.location}
                    onChange={(e) =>
                      setBusinessData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <button
                  onClick={handleBusinessSubmit}
                  className="flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Software Requirements */}
        {currentStep === 2 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Choose Your Tech Stack
              </h1>
              <p className="text-gray-300 text-lg">
                Select the software solutions you need. Our AI agent will tailor
                the experience based on your choices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8">
              {softwareOptions.map((option: SoftwareOption) => {
                const IconComponent = option.icon;
                const isSelected = selectedSoftware.includes(option.id);

                return (
                  <div
                    key={option.id}
                    onClick={() => toggleSoftware(option.id)}
                    className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                      isSelected
                        ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-400 shadow-lg shadow-purple-500/25"
                        : "bg-white/5 border-2 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                      </div>
                    )}

                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg ${
                          isSelected ? "bg-purple-500" : "bg-white/10"
                        }`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {option.name}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-6">
                Selected {selectedSoftware.length} solution
                {selectedSoftware.length !== 1 ? "s" : ""}
              </p>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={selectedSoftware.length === 0}
                  className="flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Launch AI Agent
                  <Sparkles className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingFlow;
