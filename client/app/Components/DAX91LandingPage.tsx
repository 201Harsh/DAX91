"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaNetworkWired,
  FaCode,
  FaSearch,
  FaPalette,
  FaBug,
  FaPlay,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaServer,
  FaBrain,
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
  FaTasks,
  FaRegCheckCircle,
  FaBolt,
  FaUsers,
  FaLock,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";
import LandingHeader from "./Landing/LandingHeader";

export default function DAX91LandingPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsConnected(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-black/40 to-red-500/30 text-white">
      {/* Header */}
      <LandingHeader
        handleConnect={handleConnect}
        isConnected={isConnected}
        isLoading={isLoading}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
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
              <span className="text-red-400 text-sm">
                Autonomous AI Network Live
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-linear-to-r mr-2 from-red-500 to-red-700 bg-clip-text text-transparent">
                DAX91 AI
              </span>
              — One AI. Many Minds.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              You give a task ⚡ It activates a hidden network of AIs 🧠🤖 that
              plan 🗂️, build 🏗️, and finish it for you — quietly, completely,
              and fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <motion.button
                onClick={handleConnect}
                className="bg-linear-to-r from-red-500 to-red-700 px-8 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 border border-red-600/50 shadow-lg shadow-red-500/20"
                whileTap={{ scale: 0.95 }}
              >
                Start with DAX AI
              </motion.button>

              <motion.button
                className="border border-red-500/50 px-8 py-4 rounded-full font-semibold text-lg hover:border-red-400 hover:bg-red-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Documentation
              </motion.button>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {[
                { icon: FaBrain, label: "Master AI Core", value: "1" },
                { icon: FaNetworkWired, label: "Sub-AI Network", value: "6+" },
                { icon: FaBolt, label: "Parallel Tasks", value: "∞" },
                { icon: FaServer, label: "Real-time Execution", value: "24/7" },
              ].map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  className="flex flex-col items-center p-6 bg-black/40 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="text-3xl mb-3 text-red-500" />
                  <span className="text-2xl font-bold text-red-400">
                    {value}
                  </span>
                  <span className="text-sm font-medium text-gray-300 mt-1">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="text-red-500">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the next generation of autonomous AI problem-solving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaBrain,
                title: "Master AI Orchestration",
                description:
                  "Single intelligent core that coordinates all sub-AI workers simultaneously",
              },
              {
                icon: FaNetworkWired,
                title: "Hidden AI Network",
                description:
                  "Specialized sub-AIs working in parallel, invisible to the end user",
              },
              {
                icon: FaBolt,
                title: "Parallel Execution",
                description:
                  "Multiple tasks executed simultaneously across the AI network",
              },
              {
                icon: FaCogs,
                title: "Automated Workflow",
                description:
                  "Complete task lifecycle from planning to execution and validation",
              },
              {
                icon: FaShieldAlt,
                title: "Intelligent Routing",
                description:
                  "Smart task delegation to the most suitable sub-AI specialist",
              },
              {
                icon: FaLightbulb,
                title: "Creative Problem Solving",
                description:
                  "Combines multiple AI perspectives for innovative solutions",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-black/40 p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-red-500/10 p-3 rounded-lg w-fit group-hover:bg-red-500/20 transition-colors duration-300">
                  <feature.icon className="text-3xl text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-red-400">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-red-500">DAX91</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The seamless orchestration of intelligent sub-AI networks
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  icon: FaTasks,
                  title: "Task Receipt",
                  description: "User submits task to DAX master AI",
                  color: "from-red-400 to-red-600",
                },
                {
                  step: "02",
                  icon: FaNetworkWired,
                  title: "AI Network Activation",
                  description:
                    "Master AI activates relevant sub-AI specialists",
                  color: "from-orange-400 to-orange-600",
                },
                {
                  step: "03",
                  icon: FaCogs,
                  title: "Parallel Execution",
                  description:
                    "Sub-AIs work simultaneously on their specialties",
                  color: "from-yellow-400 to-yellow-600",
                },
                {
                  step: "04",
                  icon: FaRegCheckCircle,
                  title: "Result Delivery",
                  description:
                    "Master AI synthesizes and delivers final output",
                  color: "from-green-400 to-green-600",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div
                    className={`w-20 h-20 bg-linear-to-r ${step.color} rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg`}
                  >
                    <step.icon className="text-white" />
                  </div>
                  <div className="bg-black/40 p-6 rounded-xl border border-red-500/20 mt-4">
                    <div className="text-red-400 font-bold text-lg mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-linear-to-r from-red-500 to-transparent transform translate-x-1/2"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-AI Network Section */}
      <section id="sub-ai-network" className="py-20 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-red-500">Sub-AI Network</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the specialized AI workforce powering DAX91's capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: FaSearch,
                name: "Research AI",
                role: "Data Gathering & Analysis",
                description:
                  "Specializes in finding and processing information from various sources",
              },
              {
                icon: FaPalette,
                name: "Design AI",
                role: "Creative & UX Planning",
                description:
                  "Handles visual design, user experience, and creative solutions",
              },
              {
                icon: FaCode,
                name: "Builder AI",
                role: "Development & Implementation",
                description:
                  "Transforms plans into functional code and implementations",
              },
              {
                icon: FaBug,
                name: "Tester AI",
                role: "Quality Assurance",
                description:
                  "Validates outputs, tests logic, and ensures quality standards",
              },
              {
                icon: FaTasks,
                name: "Planner AI",
                role: "Strategy & Roadmapping",
                description:
                  "Creates detailed execution plans and breaks down complex tasks",
              },
              {
                icon: FaUsers,
                name: "Coordinator AI",
                role: "Workflow Management",
                description:
                  "Ensures smooth collaboration between all sub-AI specialists",
              },
            ].map((ai, index) => (
              <motion.div
                key={ai.name}
                className="bg-black/40 p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors duration-300">
                    <ai.icon className="text-2xl text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-400">
                      {ai.name}
                    </h3>
                    <p className="text-sm text-gray-400">{ai.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {ai.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-red-500">DAX91</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: FaBolt,
                title: "Lightning Fast Execution",
                description:
                  "Parallel processing across multiple AI specialists means tasks get done in record time",
              },
              {
                icon: FaLock,
                title: "Reliable & Consistent",
                description:
                  "Multiple layers of validation and testing ensure high-quality outputs every time",
              },
              {
                icon: FaGlobe,
                title: "Comprehensive Solutions",
                description:
                  "Access to diverse AI specialties means complete end-to-end task execution",
              },
              {
                icon: FaChartLine,
                title: "Scalable Intelligence",
                description:
                  "The network architecture allows for unlimited scaling and specialization growth",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-4 p-6 bg-black/40 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-red-500/10 p-3 rounded-lg mt-1">
                  <benefit.icon className="text-2xl text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-400">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-r from-red-600/20 to-red-700/30 border-y border-red-500/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Autonomous AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Connect to DAX91 and witness the power of parallel AI
              problem-solving through our hidden network of specialized
              intelligences.
            </p>
            <motion.button
              onClick={handleConnect}
              className="bg-linear-to-r from-red-500 to-red-700 px-8 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 border border-red-600/50 shadow-lg shadow-red-500/20"
              whileTap={{ scale: 0.95 }}
            >
              {isConnected
                ? "Connected to DAX AI Network"
                : "Connect to DAX AI Network"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-red-900/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaRobot className="text-2xl text-red-500" />
                <span className="text-xl font-bold text-red-400">DAX91</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Next-generation autonomous AI architecture powered by a hidden
                network of specialized sub-AIs.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-400">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-red-400 transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-red-400 transition-colors duration-300"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#sub-ai-network"
                    className="hover:text-red-400 transition-colors duration-300"
                  >
                    Sub-AI Network
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-400">Technology</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition-colors duration-300"
                  >
                    AI Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition-colors duration-300"
                  >
                    Parallel Processing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition-colors duration-300"
                  >
                    Network Systems
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-red-400">Connect</h3>
              <div className="flex space-x-4">
                {[FaTwitter, FaGithub, FaLinkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 bg-black/50 p-2 rounded-lg"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-red-900/50 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DAX91 Autonomous AI Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
