"use client";
import { motion } from "framer-motion";
import {
  FaNetworkWired,
  FaBolt,
  FaBrain,
  FaCode,
  FaSearch,
  FaPalette,
  FaBug,
  FaTasks,
  FaUsers,
  FaServer,
  FaSync,
  FaRocket,
  FaChartLine,
  FaLock,
  FaMagic,
  FaCubes,
  FaExpand,
  FaEye,
  FaCheckCircle,
  FaLayerGroup,
} from "react-icons/fa";
import LandingHeader from "../Components/Landing/LandingHeader";

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: FaBrain,
      title: "Master AI Orchestrator",
      description:
        "Single intelligent core that acts as the central brain, coordinating all sub-AI workers simultaneously without any manager layer.",
      highlights: [
        "Intelligent task analysis and delegation",
        "Real-time coordination of all sub-AIs",
        "No redundant manager layers",
        "Centralized decision making",
      ],
    },
    {
      icon: FaNetworkWired,
      title: "Hidden Sub-AI Network",
      description:
        "A fleet of specialized AI workers operating in parallel, completely invisible to the end user but working together seamlessly.",
      highlights: [
        "6+ specialized sub-AI workers",
        "Completely hidden from users",
        "Parallel execution capabilities",
        "Seamless collaboration",
      ],
    },
    {
      icon: FaBolt,
      title: "Native Parallel Function Calling",
      description:
        "Execute multiple AI workers simultaneously through advanced parallel processing capabilities, dramatically reducing task completion time.",
      highlights: [
        "Simultaneous task execution",
        "No sequential bottlenecks",
        "Optimized resource allocation",
        "Real-time synchronization",
      ],
    },
    {
      icon: FaSync,
      title: "Real-time WebSocket Bridge",
      description:
        "Live persistent connection between client, backend, and AI servers enabling true real-time communication and execution.",
      highlights: [
        "Persistent live connections",
        "Instant data streaming",
        "Real-time progress updates",
        "Seamless client-backend-AI bridge",
      ],
    },
  ];

  const subAIFeatures = [
    {
      icon: FaTasks,
      title: "Planner AI",
      description:
        "Specializes in breaking down complex goals into actionable steps and creating detailed execution roadmaps.",
      capabilities: [
        "Goal decomposition",
        "Task sequencing",
        "Resource planning",
        "Timeline creation",
      ],
    },
    {
      icon: FaSearch,
      title: "Researcher AI",
      description:
        "Gathers and processes external data from multiple sources to provide comprehensive information analysis.",
      capabilities: [
        "Data collection",
        "Source verification",
        "Information synthesis",
        "Trend analysis",
      ],
    },
    {
      icon: FaPalette,
      title: "Designer AI",
      description:
        "Handles all creative aspects including UI/UX planning, visual design, and user experience optimization.",
      capabilities: [
        "UI/UX design",
        "Visual planning",
        "Experience mapping",
        "Creative solutions",
      ],
    },
    {
      icon: FaCode,
      title: "Builder AI",
      description:
        "Transforms plans and designs into functional code, implementing solutions and generating necessary assets.",
      capabilities: [
        "Code generation",
        "Implementation",
        "Asset creation",
        "Prototype building",
      ],
    },
    {
      icon: FaBug,
      title: "Tester AI",
      description:
        "Validates logic, tests functionality, and ensures quality standards are met across all outputs.",
      capabilities: [
        "Quality assurance",
        "Logic validation",
        "Performance testing",
        "Bug detection",
      ],
    },
    {
      icon: FaUsers,
      title: "Coordinator AI",
      description:
        "Manages workflow between all sub-AIs ensuring smooth collaboration and optimal resource usage.",
      capabilities: [
        "Workflow management",
        "Resource allocation",
        "Conflict resolution",
        "Progress tracking",
      ],
    },
  ];

  const technicalFeatures = [
    {
      icon: FaServer,
      title: "Serverless Architecture",
      description:
        "Fully deployed on modern cloud infrastructure enabling both AI and tools to run serverlessly while maintaining live connections.",
      benefits: [
        "Auto-scaling",
        "Zero maintenance",
        "High availability",
        "Cost effective",
      ],
    },
    {
      icon: FaCubes,
      title: "MCP-style Tool Routing",
      description:
        "Advanced tool routing system that efficiently manages communication between the master AI and specialized workers.",
      benefits: [
        "Efficient routing",
        "Low latency",
        "Reliable delivery",
        "Flexible integration",
      ],
    },
    {
      icon: FaExpand,
      title: "Scalable Network Design",
      description:
        "Architecture designed for unlimited scaling, allowing addition of new sub-AI specialists as needed.",
      benefits: [
        "Unlimited scaling",
        "Easy expansion",
        "Modular design",
        "Future-proof",
      ],
    },
    {
      icon: FaEye,
      title: "Transparent Execution",
      description:
        "Complete visibility into the AI network operations while maintaining a simple user interface.",
      benefits: [
        "Execution monitoring",
        "Progress tracking",
        "Debugging tools",
        "Performance analytics",
      ],
    },
  ];

  const benefitFeatures = [
    {
      icon: FaRocket,
      title: "Lightning Fast Execution",
      description:
        "Complete tasks in record time through parallel processing across multiple AI specialists.",
      metrics: [
        "70% faster completion",
        "24/7 operation",
        "Zero downtime",
        "Instant scaling",
      ],
    },
    {
      icon: FaChartLine,
      title: "Intelligent Optimization",
      description:
        "Continuous learning and optimization of task execution patterns for maximum efficiency.",
      metrics: [
        "Smart resource allocation",
        "Learning algorithms",
        "Performance analytics",
        "Auto-optimization",
      ],
    },
    {
      icon: FaLock,
      title: "Reliable & Consistent",
      description:
        "Multiple layers of validation and testing ensure high-quality, consistent outputs every time.",
      metrics: [
        "99.9% reliability",
        "Quality assurance",
        "Consistent outputs",
        "Error reduction",
      ],
    },
    {
      icon: FaMagic,
      title: "Autonomous Problem Solving",
      description:
        "End-to-end task execution from initial planning to final delivery without human intervention.",
      metrics: [
        "Full automation",
        "End-to-end execution",
        "Zero manual steps",
        "Complete solutions",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-black/40 to-red-500/30 text-white pt-20">
      {/* Header */}
      <LandingHeader />
      <div className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaNetworkWired className="text-red-400" />
            <span className="text-red-400 text-sm">Autonomous AI Features</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            DAX91 <span className="text-red-500">Features</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover the powerful capabilities of our next-generation autonomous
            AI architecture and its hidden network of specialized intelligences.
          </p>
        </motion.div>
      </div>

      {/* Main Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core <span className="text-red-500">Architecture</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The fundamental building blocks that make DAX91 revolutionary
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-black/40 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/10 p-4 rounded-xl group-hover:bg-red-500/20 transition-colors duration-300">
                    <feature.icon className="text-3xl text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-red-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="grid gap-2">
                      {feature.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-sm text-gray-400"
                        >
                          <FaCheckCircle className="text-red-500 text-xs" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sub-AI Network Features */}
      <section className="py-16 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Specialized <span className="text-red-500">Sub-AI Network</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the hidden workforce of AI specialists powering every task
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {subAIFeatures.map((ai, index) => (
              <motion.div
                key={ai.title}
                variants={itemVariants}
                className="bg-black/40 p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors duration-300">
                    <ai.icon className="text-2xl text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-red-400">{ai.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {ai.description}
                </p>
                <div className="space-y-2">
                  {ai.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-gray-400">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-red-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced infrastructure powering the AI network
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-black/40 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors duration-300">
                    <feature.icon className="text-2xl text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-red-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefit Features */}
      <section className="py-16 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              User <span className="text-red-500">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience unprecedented efficiency and capability
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {benefitFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-black/40 p-8 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors duration-300">
                    <feature.icon className="text-2xl text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {feature.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="text-center p-3 bg-red-500/5 rounded-lg border border-red-500/10"
                    >
                      <div className="text-xs text-gray-400">{metric}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black/40 rounded-2xl p-12 border border-red-500/20 max-w-4xl mx-auto">
              <FaLayerGroup className="text-5xl text-red-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Leverage the{" "}
                <span className="text-red-500">Full Power</span> of DAX91?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the future of autonomous AI problem-solving with our
                complete feature set and hidden sub-AI network.
              </p>
              <motion.button
                className="bg-linear-to-r from-red-500 to-red-700 px-8 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 border border-red-600/50 shadow-lg shadow-red-500/20"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Using All Features
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
