"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaPlay,
  FaPowerOff,
  FaPaperPlane,
  FaUser,
  FaNetworkWired,
  FaBolt,
  FaServer,
  FaBrain,
  FaCheckCircle,
  FaRegCopy,
  FaRegSmile,
} from "react-icons/fa";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export default function DAXAIPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionProgress, setConnectionProgress] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateConnection = async () => {
    setIsConnecting(true);
    setConnectionProgress(0);

    // Simulate connection steps
    const steps = [
      { progress: 25, message: "Initializing Master AI..." },
      { progress: 50, message: "Activating Sub-AI Network..." },
      { progress: 75, message: "Establishing WebSocket Bridge..." },
      { progress: 100, message: "Connection Established!" },
    ];

    for (const step of steps) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setConnectionProgress(step.progress);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsConnecting(false);
    setIsConnected(true);

    // Add welcome message
    addAIMessage(
      "Hello! I'm DAX91, your autonomous AI agent. I'm connected and ready to help you with planning, research, design, development, and testing tasks. What would you like me to work on?"
    );
  };

  const disconnect = () => {
    setIsConnected(false);
    setMessages([]);
    setConnectionProgress(0);
  };

  const addAIMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "ai",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateAIResponse = async (userMessage: string) => {
    setIsTyping(true);

    // Simulate AI processing time
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000)
    );

    // Simple response logic based on user input
    let response = "";

    if (
      userMessage.toLowerCase().includes("hello") ||
      userMessage.toLowerCase().includes("hi")
    ) {
      response =
        "Hello! I'm DAX91, your autonomous AI agent. I can help you with complex tasks by coordinating my specialized sub-AI network. What would you like to accomplish?";
    } else if (
      userMessage.toLowerCase().includes("build") ||
      userMessage.toLowerCase().includes("create")
    ) {
      response =
        "I can help you build that! My Builder AI is ready to generate code, while Designer AI can create the UI/UX. Would you like me to start planning the architecture?";
    } else if (userMessage.toLowerCase().includes("research")) {
      response =
        "My Researcher AI can gather and analyze information from various sources. What specific topic would you like me to research?";
    } else if (userMessage.toLowerCase().includes("plan")) {
      response =
        "I'll activate my Planner AI to break this down into actionable steps. Could you provide more details about your goals and requirements?";
    } else if (userMessage.toLowerCase().includes("test")) {
      response =
        "My Tester AI specializes in quality assurance and validation. I can help you test your project thoroughly. What specifically needs testing?";
    } else if (
      userMessage.toLowerCase().includes("how work") ||
      userMessage.toLowerCase().includes("what can")
    ) {
      response =
        "I coordinate multiple specialized AIs in parallel: Planner for strategy, Researcher for data, Designer for UI/UX, Builder for code, and Tester for quality. Just describe your task and I'll handle the rest!";
    } else {
      const responses = [
        "I understand. Let me coordinate my sub-AI network to handle this task efficiently.",
        "Interesting! I'll break this down and execute it through my specialized AI workforce.",
        "I can help with that. My parallel processing capabilities will ensure quick results.",
        "Let me analyze this and deploy the appropriate sub-AI specialists for your task.",
        "I'll orchestrate my AI network to tackle this challenge effectively.",
      ];
      response = responses[Math.floor(Math.random() * responses.length)];
    }

    addAIMessage(response);
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !isConnected) return;

    const message = inputMessage.trim();
    setInputMessage("");
    addUserMessage(message);
    await simulateAIResponse(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    "Plan a web application",
    "Research AI trends 2024",
    "Design a user dashboard",
    "Build a React component",
    "Test my API endpoints",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black/40 to-red-500/30">
      {/* Header */}
      <header className="border-b border-red-900/50 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaRobot className="text-3xl text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">DAX91 AI</h1>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"
                    }`}
                  />
                  <span className="text-sm text-gray-400">
                    {isConnected ? "Connected to AI Network" : "Disconnected"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {isConnected ? (
                <motion.button
                  onClick={disconnect}
                  className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-white font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPowerOff />
                  <span>Disconnect</span>
                </motion.button>
              ) : (
                <motion.button
                  onClick={simulateConnection}
                  disabled={isConnecting}
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg text-white font-semibold transition-colors disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay />
                  <span>
                    {isConnecting ? "Connecting..." : "Connect to AI"}
                  </span>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Connection Animation */}
        <AnimatePresence>
          {isConnecting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            >
              <div className="bg-black/90 border border-red-500/30 rounded-2xl p-8 max-w-md w-full mx-4">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-20 h-20 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-6"
                  />

                  <h3 className="text-2xl font-bold text-white mb-4">
                    Connecting to DAX91 AI
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Initializing autonomous AI network...
                  </p>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${connectionProgress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <p className="text-red-400 text-sm">
                    {connectionProgress}% Complete
                  </p>

                  {/* Connection Steps */}
                  <div className="mt-6 space-y-3 text-left">
                    {[
                      {
                        name: "Master AI Core",
                        active: connectionProgress >= 25,
                      },
                      {
                        name: "Sub-AI Network",
                        active: connectionProgress >= 50,
                      },
                      {
                        name: "WebSocket Bridge",
                        active: connectionProgress >= 75,
                      },
                      {
                        name: "Security Handshake",
                        active: connectionProgress >= 100,
                      },
                    ].map((step, index) => (
                      <div
                        key={step.name}
                        className="flex items-center space-x-3"
                      >
                        {step.active ? (
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-600 rounded-full flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            step.active ? "text-green-400" : "text-gray-400"
                          }`}
                        >
                          {step.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        {!isConnected && !isConnecting ? (
          // Pre-connection State
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-3xl flex items-center justify-center mx-auto mb-8"
              >
                <FaRobot className="text-6xl text-white" />
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                DAX91 <span className="text-red-500">AI Agent</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect to the next-generation autonomous AI system. One master
                intelligence coordinating multiple specialized sub-AIs to
                complete complex tasks in parallel.
              </p>

              <motion.button
                onClick={simulateConnection}
                className="bg-gradient-to-r from-red-500 to-red-700 px-8 py-4 rounded-2xl text-white font-bold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 shadow-2xl shadow-red-500/20"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-3">
                  <FaPlay className="text-sm" />
                  <span>Connect to DAX AI</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        ) : isConnected ? (
          // Chat Interface
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/40 rounded-2xl border border-red-500/20 overflow-hidden"
            >
              {/* Chat Header */}
              <div className="border-b border-red-500/20 p-6 bg-black/60">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <FaServer className="text-2xl text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      DAX91 AI Assistant
                    </h3>
                    <p className="text-green-400 text-sm">
                      Connected • Sub-AI Network Active
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages Container */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center py-12">
                    <FaRegSmile className="text-4xl text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">
                      Start a conversation with DAX91 AI
                    </p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-3/4 rounded-2xl p-4 ${
                          message.sender === "user"
                            ? "bg-red-500/20 border border-red-500/30 text-white"
                            : "bg-gray-800/60 border border-gray-700/50 text-gray-100"
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          {message.sender === "user" ? (
                            <FaUser className="text-red-400" />
                          ) : (
                            <FaRobot className="text-green-400" />
                          )}
                          <span className="text-sm font-medium">
                            {message.sender === "user" ? "You" : "DAX91 AI"}
                          </span>
                        </div>
                        <p className="whitespace-pre-wrap">{message.text}</p>
                        <div className="text-xs text-gray-400 mt-2 text-right">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-4">
                      <div className="flex items-center space-x-2">
                        <FaRobot className="text-green-400" />
                        <span className="text-sm font-medium text-gray-100">
                          DAX91 AI
                        </span>
                      </div>
                      <div className="flex space-x-1 mt-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length === 0 && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 text-sm mb-3">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={action}
                        onClick={() => {
                          setInputMessage(action);
                          setTimeout(() => handleSendMessage(), 100);
                        }}
                        className="text-xs bg-black/40 border border-red-500/20 text-gray-300 px-3 py-2 rounded-lg hover:border-red-500/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {action}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="border-t border-red-500/20 p-6 bg-black/60">
                <div className="flex space-x-4">
                  <div className="flex-1 relative">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Message DAX91 AI..."
                      className="w-full bg-black/40 border border-red-500/20 rounded-xl pl-4 pr-12 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none resize-none"
                      rows={1}
                      style={{ minHeight: "50px", maxHeight: "120px" }}
                    />
                  </div>
                  <motion.button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || !isConnected}
                    className="bg-red-500 hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPaperPlane />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
