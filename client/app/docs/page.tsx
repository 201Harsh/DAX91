"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaBook,
  FaCode,
  FaRocket,
  FaCogs,
  FaNetworkWired,
  FaBolt,
  FaServer,
  FaQuestionCircle,
  FaArrowRight,
  FaCopy,
  FaCheck,
  FaExternalLinkAlt,
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaCheckCircle,
} from "react-icons/fa";

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState<string>("getting-started");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedCode, setCopiedCode] = useState<string>("");
  const sidebarRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const navigation: {
    title: string;
    id: string;
    icon: any;
    items: string[];
  }[] = [
    {
      title: "Getting Started",
      id: "getting-started",
      icon: FaRocket,
      items: ["Introduction", "Quick Start", "Authentication", "First Request"],
    },
    {
      title: "Core Concepts",
      id: "core-concepts",
      icon: FaBook,
      items: [
        "Architecture Overview",
        "Master AI Orchestrator",
        "Sub-AI Network",
        "Parallel Execution",
      ],
    },
    {
      title: "API Reference",
      id: "api-reference",
      icon: FaCode,
      items: ["REST API", "WebSocket API", "Authentication", "Error Handling"],
    },
    {
      title: "Guides",
      id: "guides",
      icon: FaCogs,
      items: [
        "Task Delegation",
        "Custom Sub-AIs",
        "Performance Optimization",
        "Best Practices",
      ],
    },
    {
      title: "Network Architecture",
      id: "network-architecture",
      icon: FaNetworkWired,
      items: [
        "System Overview",
        "Sub-AI Specialists",
        "Real-time Communication",
        "Scalability",
      ],
    },
  ];

  const codeExamples = {
    basic: `// Initialize DAX91 Client
const dax = new DAX91({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Submit a task
const task = await dax.submitTask({
  type: 'development',
  description: 'Build a React component for user dashboard',
  priority: 'high'
});

// Monitor progress
task.on('progress', (update) => {
  console.log(\`Progress: \${update.percentage}%\`);
});`,

    websocket: `// WebSocket Connection
const socket = new WebSocket('wss://api.dax91.ai/live');

socket.onopen = () => {
  socket.send(JSON.stringify({
    action: 'authenticate',
    apiKey: 'your-api-key'
  }));
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'task_update') {
    console.log('Task update:', data.progress);
  }
};`,

    subAI: `// Custom Sub-AI Integration
const customSubAI = {
  name: 'data-analyst',
  capabilities: ['analysis', 'reporting'],
  execute: async (task) => {
    // Process task data
    const result = await analyzeData(task.data);
    return {
      success: true,
      data: result,
      metadata: { processedAt: new Date() }
    };
  }
};

// Register custom Sub-AI
dax.registerSubAI(customSubAI);`,
  };

  const documentationContent: any = {
    "getting-started": [
      {
        id: "introduction",
        title: "Introduction to DAX91",
        content: `DAX91 is a next-generation autonomous AI architecture designed to function as a fully agentic problem-solving system. Unlike traditional AI assistants that merely respond to prompts, DAX91 orchestrates a hidden network of specialized sub-AIs to complete complex tasks autonomously.`,
        features: [
          "Single master AI orchestrator coordinating all operations",
          "Parallel execution across multiple specialized sub-AIs",
          "Real-time WebSocket communication for live updates",
          "Serverless architecture deployed on modern cloud infrastructure",
        ],
      },
      {
        id: "quick-start",
        title: "Quick Start Guide",
        content: `Get started with DAX91 in under 5 minutes. This guide will walk you through setting up your first autonomous AI task.`,
        steps: [
          "Create an account and obtain your API key",
          "Install the DAX91 SDK",
          "Initialize the client with your credentials",
          "Submit your first task and watch it execute autonomously",
        ],
        code: codeExamples.basic,
      },
      {
        id: "authentication",
        title: "Authentication",
        content: `DAX91 uses API keys for authentication. Include your API key in the Authorization header of all requests.`,
        note: "Keep your API keys secure and never expose them in client-side code.",
      },
    ],
    "core-concepts": [
      {
        id: "architecture",
        title: "Architecture Overview",
        content: `DAX91 operates on a revolutionary architecture where a single Master AI coordinates multiple specialized Sub-AIs working in parallel.`,
        diagram: [
          "User Request → Master AI (DAX)",
          "Master AI analyzes and decomposes task",
          "Parallel execution across Sub-AI network",
          "Results synthesis and delivery",
        ],
      },
      {
        id: "master-ai",
        title: "Master AI Orchestrator",
        content: `The Master AI acts as the central intelligence that understands user intent, breaks down complex problems, and coordinates the entire Sub-AI network without any manager layers.`,
        capabilities: [
          "Natural language understanding",
          "Task decomposition and planning",
          "Intelligent resource allocation",
          "Real-time progress monitoring",
        ],
      },
      {
        id: "sub-ai-network",
        title: "Sub-AI Network",
        content: `A hidden network of specialized AI workers, each with unique capabilities, working together to complete tasks efficiently.`,
        specialists: [
          { name: "Planner AI", role: "Task decomposition and strategy" },
          { name: "Researcher AI", role: "Data gathering and analysis" },
          { name: "Designer AI", role: "UI/UX and creative solutions" },
          { name: "Builder AI", role: "Code generation and implementation" },
          { name: "Tester AI", role: "Quality assurance and validation" },
          { name: "Coordinator AI", role: "Workflow management" },
        ],
      },
    ],
    "api-reference": [
      {
        id: "rest-api",
        title: "REST API Endpoints",
        endpoints: [
          {
            method: "POST",
            path: "/v1/tasks",
            description: "Submit a new task for execution",
            parameters: [
              "type: Task category (development, research, design, etc.)",
              "description: Detailed task description",
              "priority: Task priority level",
              "metadata: Additional task parameters",
            ],
          },
          {
            method: "GET",
            path: "/v1/tasks/{id}",
            description: "Retrieve task status and results",
          },
          {
            method: "GET",
            path: "/v1/sub-ais",
            description: "List available Sub-AI specialists",
          },
        ],
      },
      {
        id: "websocket-api",
        title: "WebSocket API",
        content: `Real-time communication channel for live task updates and progress monitoring.`,
        code: codeExamples.websocket,
        events: [
          "task_created: New task submitted",
          "task_progress: Progress updates",
          "task_completed: Task finished",
          "sub_ai_activated: Sub-AI specialist engaged",
        ],
      },
    ],
  };

  const filteredNavigation = navigation
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-black/40 to-red-500/30">
      {/* Header */}
      <header className="border-b border-red-900/50 bg-black/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">
                DAX91 <span className="text-red-500">Docs</span>
              </h1>
              <div className="relative w-80">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-red-500/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-red-400 transition-colors">
                <FaGithub className="text-xl" />
              </button>
              <button className="text-gray-300 hover:text-red-400 transition-colors">
                <FaDiscord className="text-xl" />
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
                Get API Key
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <motion.div
            ref={sidebarRef}
            className="w-80 shrink-0 bg-black/40 rounded-2xl border border-red-500/20 p-6 h-fit sticky top-24"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <nav className="space-y-6">
              {filteredNavigation.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <section.icon className="text-lg" />
                    <span className="font-semibold">{section.title}</span>
                  </button>

                  <AnimatePresence>
                    {activeSection === section.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-8 mt-2 space-y-2"
                      >
                        {section.items.map((item) => (
                          <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block text-gray-400 hover:text-red-400 transition-colors py-2 text-sm"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-red-500/20">
              <h3 className="text-gray-300 font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { name: "API Reference", href: "#api-reference" },
                  { name: "Examples", href: "#examples" },
                  { name: "Troubleshooting", href: "#troubleshooting" },
                  { name: "Community", href: "#community" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
                  >
                    <FaArrowRight className="text-xs" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="flex-1 bg-black/40 rounded-2xl border border-red-500/20 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Current Section Content */}
            {documentationContent[
              activeSection as keyof typeof documentationContent
            ]?.map((section: any) => (
              <div
                key={section.id}
                id={section.id}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  {section.title}
                  <FaExternalLinkAlt className="ml-3 text-gray-400 text-sm" />
                </h2>

                {section.content && (
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}

                {/* Features List */}
                {section.features && (
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {section.features.map((feature: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-black/40 p-4 rounded-lg border border-red-500/10"
                      >
                        <FaCheckCircle className="text-green-500 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Steps */}
                {section.steps && (
                  <div className="space-y-3 mb-6">
                    {section.steps.map((step: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1 shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-300">{step}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Code Example */}
                {section.code && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-gray-300 font-semibold">
                        Code Example
                      </h4>
                      <button
                        onClick={() => copyToClipboard(section.code)}
                        className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        {copiedCode === section.code ? (
                          <FaCheck className="text-green-500" />
                        ) : (
                          <FaCopy />
                        )}
                        <span className="text-sm">
                          {copiedCode === section.code ? "Copied!" : "Copy"}
                        </span>
                      </button>
                    </div>
                    <pre className="bg-black/60 rounded-lg p-4 overflow-x-auto border border-red-500/20">
                      <code className="text-gray-200 text-sm">
                        {section.code}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Endpoints */}
                {section.endpoints && (
                  <div className="space-y-4">
                    {section.endpoints.map((endpoint: any, index: number) => (
                      <div
                        key={index}
                        className="bg-black/60 rounded-lg p-4 border border-red-500/20"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              endpoint.method === "POST"
                                ? "bg-green-500/20 text-green-400"
                                : endpoint.method === "GET"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {endpoint.method}
                          </span>
                          <code className="text-gray-200">{endpoint.path}</code>
                        </div>
                        <p className="text-gray-300 mb-3">
                          {endpoint.description}
                        </p>
                        {endpoint.parameters && (
                          <div className="space-y-2">
                            <h5 className="text-gray-400 font-semibold">
                              Parameters:
                            </h5>
                            {endpoint.parameters.map(
                              (param: string, paramIndex: number) => (
                                <div
                                  key={paramIndex}
                                  className="flex items-start space-x-2 text-sm"
                                >
                                  <span className="text-red-400 mt-1">•</span>
                                  <code className="text-gray-300">{param}</code>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Specialists Grid */}
                {section.specialists && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.specialists.map(
                      (specialist: any, index: number) => (
                        <div
                          key={index}
                          className="bg-black/40 p-4 rounded-lg border border-red-500/20"
                        >
                          <h4 className="text-red-400 font-semibold mb-2">
                            {specialist.name}
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {specialist.role}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Call to Action */}
            <div className="bg-linear-to-r from-red-500/20 to-red-700/20 rounded-2xl p-8 border border-red-500/30 text-center">
              <FaRocket className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6">
                Join the future of autonomous AI and start building with DAX91
                today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                  Get Your API Key
                </button>
                <button className="border border-red-500 text-red-400 hover:bg-red-500/10 px-6 py-3 rounded-lg transition-colors font-semibold">
                  View Examples
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
