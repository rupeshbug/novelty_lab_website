import { NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";
import {
  START,
  END,
  MessagesAnnotation,
  StateGraph,
  MemorySaver,
} from "@langchain/langgraph";
import { v4 as uuidv4 } from "uuid";

const model = new ChatGroq({
  model: "llama3-70b-8192",
  apiKey: process.env.GROQ_API_KEY,
});

// Define the function that calls the model
const callModel = async (state: typeof MessagesAnnotation.State) => {
  const response = await model.invoke(state.messages);

  return { messages: [...state.messages, response] };
};

// Define a new graph
const workflow = new StateGraph(MessagesAnnotation)
  // Define the node and edge
  .addNode("model", callModel)
  .addEdge(START, "model")
  .addEdge("model", END);

// Add memory
const memory = new MemorySaver();
const app = workflow.compile({ checkpointer: memory });

export async function POST(request: any) {
  try {
    // Generate thread_id once (client-side) on first message then send it with every subsequent request to the backend......
    const { prompt, thread_id } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const inputMessages = [{ role: "user", content: prompt }];
    const config = { configurable: { thread_id: thread_id || uuidv4() } };

    const output = await app.invoke({ messages: inputMessages }, config);

    const messages = output.messages;
    const lastMessage = messages[messages.length - 1];

    return NextResponse.json({
      response: lastMessage.content,
      thread_id: config.configurable.thread_id,
    });
  } catch (error) {
    console.error("Agent error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
