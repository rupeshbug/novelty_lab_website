import { NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { ChatMessageHistory } from "langchain/memory";
import { AIMessage, HumanMessage } from "@langchain/core/messages";

const model = new ChatGroq({
  model: "llama3-70b-8192",
  apiKey: process.env.GROQ_API_KEY,
});

const memory = new ChatMessageHistory();

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    await memory.addMessage(new HumanMessage(prompt));
    const messages = await memory.getMessages();

    const modelResponse = await model.invoke(messages);

    await memory.addMessage(new AIMessage(modelResponse.content));

    return NextResponse.json({ response: modelResponse.content });
  } catch (error) {
    console.error("Agent error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
