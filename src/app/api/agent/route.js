import { NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  model: "llama3-70b-8192",
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const modelResponse = await model.invoke(prompt);
    const response = modelResponse.content;
    console.log(response);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Agent error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
