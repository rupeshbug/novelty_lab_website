"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BlogHero from "../../components/BlogHero";
import Link from "next/link";
import {
  Database,
  Brain,
  Code,
  Zap,
  Settings,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function AIAgentLongTermMemoryBlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Blog metadata
  const blogData = {
    title: "Building an AI Agent with Long-Term Memory Using Vector Database",
    description:
      "Learn how to build an AI assistant that remembers user input across sessions by using LangGraph and FAISS vector store.",
    author: "Rupesh Chaulagain",
    publishedDate: "2025-7-27",
    readTime: "8 min read",
    tags: ["LangGraph", "Agentic AI", "Vector Database", "LLM", "Memory"],
    category: "Engineering & Technology",
  };

  return (
    <main ref={containerRef} className="min-h-screen text-white mt-16">
      <BlogHero blogData={blogData} />

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Go Back Button */}
        <div className="mb-8 text-lg">
          <Link
            href="/blogs"
            className="inline-block text-[#09bbc8] hover:text-cyan-600 font-semibold"
          >
            ← Back to Blogs
          </Link>
        </div>

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
            <Image
              src="/ai_agent_memory.png"
              alt="Illustration of an AI chatbot in a terminal with memory recall features"
              fill
              className="opacity-90 drop-shadow-2xl"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="space-y-6 text-gray-200 leading-relaxed text-justify">
            <p className="text-slate-300 font-medium">
              This tutorial shows how to implement an agent with long-term
              memory capabilities using LangGraph. The agent can store,
              retrieve, and use memories to enhance its interactions with users.
            </p>

            <p className="text-slate-300">
              We&apos;ll build a terminal-based chatbot that remembers important
              details using a vector database (FAISS) for persistent memory. The
              agent uses LangGraph, Gemini (via LangChain), and Google
              embeddings to manage conversations across sessions.
            </p>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <Brain className="text-cyan-400" size={28} />
              Why Long-Term Memory?
            </h2>
            <p className="text-slate-300">
              Typical LLM agents are stateless. That means they forget what you
              said the last time. To simulate memory, we can persist selected
              memories in a vector database and retrieve them contextually in
              the next conversation.
            </p>
            <p className="text-slate-300">
              This way, when you tell the AI your name today, it&apos;ll
              remember it tomorrow.
            </p>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <Settings className="text-purple-400" size={28} />
              Setting Up the Project
            </h2>
            <p className="text-slate-300">Install the required dependencies:</p>
            <div className="bg-gray-900 rounded-lg p-4 my-4 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>
                  pip install langchain langgraph langchain-community
                  langchain-google-genai faiss-cpu python-dotenv
                </code>
              </pre>
            </div>

            <p className="text-slate-300">
              We&apos;ll need an API key from{" "}
              <a
                href="https://makersuite.google.com/app"
                className="text-cyan-400 hover:text-cyan-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google AI Studio
              </a>
              . It&apos;s free to sign up and lets us use LLMs like Gemini.
            </p>

            <p className="text-slate-300">
              Create a{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                .env
              </code>{" "}
              file:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-6 border border-gray-700">
              <pre className="text-green-400 text-sm">
                <code>GOOGLE_API_KEY=your_google_api_key</code>
              </pre>
            </div>

            <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
              📦 Required Imports
            </h3>
            <p className="text-slate-300">
              Before we begin, make sure to include the following imports. These
              cover everything from environment setup and embeddings to
              LangGraph nodes and memory management:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-6 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>
                  {`import os
import uuid
from typing import List
from dotenv import load_dotenv

from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain_core.messages import get_buffer_string
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableConfig
from langchain_core.tools import tool
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import END, START, MessagesState, StateGraph
from langgraph.prebuilt import ToolNode

load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")`}
                </code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-slate-200 mb-4">
              1. Initializing the LLM and Embeddings
            </h2>
            <p className="text-slate-300">
              We use Gemini (via{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                langchain_google_genai
              </code>
              ) and Google&apos;s embedding model.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-6 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash")
embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-exp-03-07")`}</code>
              </pre>
            </div>
            <p className="text-slate-300">
              These two components are key: the LLM handles the responses, and
              the embedding model helps convert memory text into vectors for
              storage/retrieval.
            </p>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <Database className="text-cyan-400" size={28} />
              2. Setting Up FAISS for Persistent Memory
            </h2>
            <p className="text-slate-300">
              We use FAISS to store memory vectors locally on disk.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-4 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`FAISS_INDEX_PATH = "faiss_index"

if os.path.exists(FAISS_INDEX_PATH):
    vector_store = FAISS.load_local(FAISS_INDEX_PATH, embeddings, allow_dangerous_deserialization=True)
else:
    vector_store = FAISS.from_texts(["init"], embeddings)  # avoid creating empty index`}</code>
              </pre>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 my-4">
              <p className="text-blue-300 flex items-start gap-2">
                <span className="text-blue-400 font-bold">💡</span>
                We need at least one document to create the FAISS index
                initially. Later, this gets overwritten.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <Code className="text-purple-400" size={28} />
              3. Creating Tools to Save and Search Memory
            </h2>
            <p className="text-slate-300">We create two tools:</p>
            <ul className="text-slate-300 list-disc list-inside space-y-2 ml-4">
              <li>
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                  save_recall_memory
                </code>
                : to save important text as memory
              </li>
              <li>
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                  search_recall_memories
                </code>
                : to find past relevant memories
              </li>
            </ul>
            <p className="text-slate-300">
              These tools rely on the{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                user_id
              </code>{" "}
              for scoped memory.
            </p>

            <div className="bg-gray-900 rounded-lg p-4 my-6 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`@tool
def save_recall_memory(memory: str, config: RunnableConfig) -> str:
  """
    Save a memory string to the vector store for future semantic retrieval.

    Args:
        memory (str): The piece of information the agent wants to remember.
        config (RunnableConfig): Runtime configuration including user_id.

    Returns:
        str: The same memory string that was saved.
    """
    user_id = config["configurable"].get("user_id")
    doc = Document(page_content=memory, metadata={"user_id": user_id})
    vector_store.add_documents([doc])
    vector_store.save_local(FAISS_INDEX_PATH)
    return memory

@tool
def search_recall_memories(query: str, config: RunnableConfig) -> List[str]:
  """
    Perform a semantic search in the vector store to retrieve relevant user memories.

    Args:
        query (str): The current conversation context or query to search against.
        config (RunnableConfig): Runtime configuration including user_id.

    Returns:
        List[str]: A list of memory strings most relevant to the current query.
    """
    user_id = config["configurable"].get("user_id")
    results = vector_store.similarity_search(query, k=10)
    filtered = [
        doc.page_content for doc in results
        if doc.metadata.get("user_id") == user_id
    ]
    return filtered[:3]`}</code>
              </pre>
            </div>

            <p className="text-slate-300">
              <strong>Note</strong>: We need to provide a{" "}
              <strong>docstring</strong> for functions defined using{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                @tool
              </code>
              . This is required by LangChain to generate the tool&apos;s
              description.
            </p>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 my-4">
              <p className="text-yellow-300 flex items-start gap-2">
                <span className="text-yellow-400 font-bold">❓</span>
                <span>
                  <strong>Common Question</strong>:{" "}
                  <em>&quot;What does the agent decide to remember?&quot;</em>
                  <br />
                  That depends on the model. When the prompt tells the model it
                  has a memory-saving tool, it decides what to save via tool
                  calls.
                </span>
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4">
              4. Writing the Prompt
            </h2>
            <p className="text-slate-300">
              We use a detailed prompt that instructs the agent how to behave:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-6 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a helpful assistant with advanced long-term memory"
            " capabilities. Powered by a stateless LLM, you must rely on"
            " external memory to store information between conversations."
            " Utilize the available memory tools to store and retrieve"
            " important details that will help you better attend to the user's"
            " needs and understand their context.\\n\\n"
            "Memory Usage Guidelines:\\n"
            "1. Actively use memory tools (save_core_memory, save_recall_memory)"
            " to build a comprehensive understanding of the user.\\n"
            "2. Make informed suppositions and extrapolations based on stored"
            " memories.\\n"
            "3. Regularly reflect on past interactions to identify patterns and"
            " preferences.\\n"
            "4. Update your mental model of the user with each new piece of"
            " information.\\n"
            "5. Cross-reference new information with existing memories for"
            " consistency.\\n"
            "6. Prioritize storing emotional context and personal values"
            " alongside facts.\\n"
            "7. Use memory to anticipate needs and tailor responses to the"
            " user's style.\\n"
            "8. Recognize and acknowledge changes in the user's situation or"
            " perspectives over time.\\n"
            "9. Leverage memories to provide personalized examples and"
            " analogies.\\n"
            "10. Recall past challenges or successes to inform current"
            " problem-solving.\\n\\n"
            "## Recall Memories\\n"
            "Recall memories are contextually retrieved based on the current"
            " conversation:\\n{recall_memories}\\n\\n"
            "## Instructions\\n"
            "Engage with the user naturally, as a trusted colleague or friend."
            " There's no need to explicitly mention your memory capabilities."
            " Instead, seamlessly incorporate your understanding of the user"
            " into your responses. Be attentive to subtle cues and underlying"
            " emotions. Adapt your communication style to match the user's"
            " preferences and current emotional state. Use tools to persist"
            " information you want to retain in the next conversation. If you"
            " do call tools, all text preceding the tool call is an internal"
            " message. Respond AFTER calling the tool, once you have"
            " confirmation that the tool completed successfully.\\n\\n",
        ),
        ("placeholder", "{messages}"),
    ]
)`}</code>
              </pre>
            </div>

            <p className="text-slate-300">
              This part plays a huge role. A shallow prompt might fail to guide
              the model to use memory properly, which we discovered during
              testing. I used the prompt provided by the documentation of
              LangChain about a long-term memory agent.
            </p>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <Zap className="text-cyan-400" size={28} />
              5. Defining the LangGraph State and Nodes
            </h2>
            <p className="text-slate-300">
              We define a custom{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                State
              </code>{" "}
              with{" "}
              <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                recall_memories
              </code>{" "}
              added to it.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-4 border border-gray-700">
              <pre className="text-green-400 text-sm">
                <code>
                  class State(MessagesState): recall_memories: List[str]
                </code>
              </pre>
            </div>

            <p className="text-slate-300">Define 3 nodes:</p>
            <ul className="text-slate-300 list-disc list-inside space-y-2 ml-4">
              <li>
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                  load_memories
                </code>
                : retrieves memory based on current conversation
              </li>
              <li>
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                  agent
                </code>
                : runs the LLM with prompt
              </li>
              <li>
                <code className="bg-gray-800 px-2 py-1 rounded text-cyan-300">
                  tools
                </code>
                : processes any tool calls (like saving memory)
              </li>
            </ul>

            <div className="bg-gray-900 rounded-lg p-4 my-6 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`def load_memories(state: State, config: RunnableConfig) -> State:
    convo = get_buffer_string(state["messages"])
    convo = convo[:2048]  # truncate
    recall = search_recall_memories.invoke(convo, config)
    return {"recall_memories": recall}

def agent(state: State) -> State:
    recall_str = "<recall_memory>\\n" + "\\n".join(state["recall_memories"]) + "\\n</recall_memory>"
    response = (prompt | llm_with_tools).invoke({
        "messages": state["messages"],
        "recall_memories": recall_str,
    })
    return {"messages": [response]}`}</code>
              </pre>
            </div>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4">
              6. Assembling the Graph
            </h2>
            <p className="text-slate-300">
              We use LangGraph to wire up the steps:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-6 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`builder = StateGraph(State)
builder.add_node(load_memories)
builder.add_node(agent)
builder.add_node("tools", ToolNode(tools))

builder.add_edge(START, "load_memories")
builder.add_edge("load_memories", "agent")
builder.add_conditional_edges("agent", lambda s: "tools" if s["messages"][-1].tool_calls else END, ["tools", END])
builder.add_edge("tools", "agent")

graph = builder.compile(checkpointer=MemorySaver())`}</code>
              </pre>
            </div>

            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden my-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
              <Image
                src="/agent_workflow.png"
                alt="Agent workflow diagram"
                fill
                className="opacity-90 drop-shadow-2xl object-contain"
              />
            </div>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <MessageSquare className="text-purple-400" size={28} />
              7. Terminal Chat Interface
            </h2>
            <p className="text-slate-300">
              Finally, we create a basic terminal interface.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 my-6 border border-gray-700">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`def terminal_chat():
    user_id = input("Enter your user_id: ") or "1"
    config = {"configurable": {"user_id": user_id, "thread_id": str(uuid.uuid4())}}
    history = []
    print("\\nYou can start chatting. Type 'exit' to quit.\\n")
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["exit", "quit"]:
            break
        history.append(("user", user_input))
        for chunk in graph.stream({"messages": history}, config=config):
            if "agent" in chunk and "messages" in chunk["agent"]:
                last_msg = chunk["agent"]["messages"][-1]
                if last_msg.content:
                    print("AI:", last_msg.content)
                    history.append(("ai", last_msg.content))`}</code>
              </pre>
            </div>

            <hr className="border-gray-600 my-8" />

            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <ArrowRight className="text-cyan-400" size={28} />
              Final Thoughts
            </h2>
            <p className="text-slate-300">
              We&apos;ve built a terminal-based AI assistant that remembers past
              interactions — a step closer to truly personalized AI experiences.
              Unlike typical chatbots that forget everything after a session
              ends, this agent recalls meaningful details, adapts over time, and
              grows with each conversation.
            </p>

            <p className="text-slate-300">
              This chatbot can be further enhanced in multiple ways like:
            </p>
            <ul className="text-slate-300 list-disc list-inside space-y-2 ml-4">
              <li>Expanding memory scope (e.g., per-project or per-topic)</li>
              <li>Logging interactions</li>
              <li>Running the same memory architecture in a web app</li>
            </ul>

            <p className="text-slate-300">
              This was a great intro to combining{" "}
              <strong>LangGraph + LangChain + FAISS</strong> for{" "}
              <strong>agentic memory</strong> in a real, persistent way.
            </p>
          </div>
        </motion.article>

        {/* Go Back Button */}
        <div className="mt-8 text-lg">
          <Link
            href="/blogs"
            className="inline-block text-[#09bbc8] hover:text-[#07a5b0] font-semibold"
          >
            ← Back to Blogs
          </Link>
        </div>
      </section>
    </main>
  );
}
