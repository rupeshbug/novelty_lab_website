import { NextResponse } from "next/server";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // destructure the data obtained
    const { businessInfo } = body;

    // determine if we have either selectedTemplates or customeTemplate
    const selectedTemplates = Array.isArray(body.selectedTemplates)
      ? body.selectedTemplates
      : [];

    const customTemplate =
      typeof body.customTemplate === "string" ? body.customTemplate.trim() : "";

    const { name, domain, location } = businessInfo;

    // define the model
    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.0-flash",
      maxOutputTokens: 2048,
      apiKey: process.env.GOOGLE_API_KEY,
    });

    const promptTemplate = PromptTemplate.fromTemplate(`
      You are an AI business assistant integrated into the platform of Novelty Lab — a startup that helps other businesses grow through AI-driven software 
      and innovative digital strategies.

      A new user/client with their own business has just completed the onboarding process. Your role is to welcome them and assist them based on the information they've shared.

      Here is the user's business information:
      - Business Name: {name}
      - Domain: {domain}
      - Location: {location}

      During the onboarding process, the user was asked to describe the features, services, or solutions they want for their business. 
      Here is the information they provided:
      {selected_templates}

      {custom_template}

      Based on this information, provide a warm, helpful, and tailored welcome message along with a short and concise summary of what you understand about their business needs.
    `);

    const prompt = await promptTemplate.invoke({
      name,
      domain,
      location,
      selected_templates: selectedTemplates.length
        ? selectedTemplates.map((t: any) => `- ${t}`).join("\n")
        : "- None",
      custom_template: customTemplate
        ? `Additionally, the user has described their need: "${customTemplate}"`
        : "",
    });

    const result = await model.invoke(prompt);
    console.log(result.content);

    return NextResponse.json({ message: "Agent received the query" });
  } catch (error) {
    console.error("Agent Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
