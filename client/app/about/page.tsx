"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaRocket,
  FaEye,
  FaMobile,
  FaPython,
  FaGraduationCap,
  FaLightbulb,
  FaHistory,
  FaCalendarAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import LandingHeader from "../Components/Landing/LandingHeader";
import LandingFooter from "../Components/Landing/LandingFooter";

export default function AboutPage() {
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
      {/* Hero Section */}
      <LandingHeader />
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
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
              <FaBrain className="text-red-400" />
              <span className="text-red-400 text-sm">
                Autonomous Intelligence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-red-500">DAX91</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              DAX91 isn't just an AI. It's an evolving intelligence built to
              think, plan, build, test, and execute — completely on its own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-0 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the <span className="text-red-500">Developer</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid md:grid-cols-3 gap-8 items-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {/* Profile Card */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-1 bg-black/40 p-8 rounded-2xl border border-red-500/20 text-center"
              >
                <div className="w-32 h-32 bg-linear-to-br from-red-500 to-red-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">HP</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-red-400">
                  Harsh Pandey
                </h3>
                <p className="text-gray-400 mb-4">
                  Full Stack Developer & AI Enthusiast
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                  {[FaGithub, FaLinkedin, FaTwitter, FaGlobe].map(
                    (Icon, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="text-gray-400 hover:text-red-400 transition-colors duration-300 bg-black/50 p-2 rounded-lg"
                        whileHover={{
                          scale: 1.2,
                          backgroundColor: "rgba(239, 68, 68, 0.1)",
                        }}
                      >
                        <Icon className="text-xl" />
                      </motion.a>
                    )
                  )}
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-400">
                  <FaGraduationCap className="text-red-500" />
                  <span>BCA Student</span>
                </div>
              </motion.div>

              {/* Skills & Expertise */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-2 bg-black/40 p-8 rounded-2xl border border-red-500/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-red-400">
                  Expertise & Skills
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-bold mb-4 text-gray-300">Tech Stack</h4>
                    <div className="space-y-3">
                      {[
                        {
                          icon: SiReact,
                          name: "React.js",
                          color: "text-blue-400",
                        },
                        {
                          icon: SiNextdotjs,
                          name: "Next.js",
                          color: "text-white",
                        },
                        {
                          icon: SiNodedotjs,
                          name: "Node.js",
                          color: "text-green-500",
                        },
                        {
                          icon: SiMongodb,
                          name: "MongoDB",
                          color: "text-green-400",
                        },
                        {
                          icon: FaMobile,
                          name: "React Native",
                          color: "text-blue-300",
                        },
                        {
                          icon: FaPython,
                          name: "Python",
                          color: "text-yellow-400",
                        },
                      ].map((tech, index) => (
                        <div
                          key={tech.name}
                          className="flex items-center space-x-3"
                        >
                          <tech.icon className={`text-xl ${tech.color}`} />
                          <span className="text-gray-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div>
                    <h4 className="font-bold mb-4 text-gray-300">
                      Specializations
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Full Stack Development",
                        "AI/ML Integration",
                        "Mobile App Development",
                        "Database Design",
                        "Real-time Systems",
                        "Autonomous Systems",
                      ].map((skill, index) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Current Focus */}
                <div className="mt-8 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                  <h4 className="font-bold mb-2 text-red-400">Current Focus</h4>
                  <p className="text-gray-300 text-sm">
                    Building autonomous AI systems while pursuing{" "}
                    <span className="font-semibold text-red-400">
                      Bachelor of Computer Applications - BCA
                    </span>
                    . Passionate about creating intelligent systems that can
                    think and execute independently.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-6 bg-black/30">
        <div className="container mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* Vision */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-red-500/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                <FaEye className="text-4xl text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To create a world where AI doesn't just answer questions — it
                finishes the job.
              </p>
              <div className="space-y-4 text-left">
                {[
                  "Tasks complete themselves",
                  "Ideas turn into outcomes",
                  "Intelligence flows, invisibly, in parallel",
                  "Anyone can command complex work with a single sentence",
                  "No forms. No coding. No waiting. Just pure autonomous execution.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div variants={itemVariants} className="text-center">
              <div className="bg-red-500/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                <FiTarget className="text-4xl text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Build the first true autonomous AI chain that understands your
                intent and executes completely.
              </p>
              <div className="space-y-4 text-left">
                {[
                  "Understands your intent naturally",
                  "Breaks complex tasks into actionable steps",
                  "Assigns work to specialized sub-AIs",
                  "Runs every step in parallel for maximum speed",
                  "Returns results that just work, every time",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-red-500/10 p-4 rounded-2xl w-fit mx-auto mb-6">
              <FaHistory className="text-4xl text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
              How It Started
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We looked at AI tools — and saw only assistants. They wait for
                prompts. They give suggestions. They rely on you.
              </p>
              <p>
                So we asked:{" "}
                <span className="text-red-400 font-semibold">
                  "What if AI didn't need help?"
                </span>
              </p>
              <p>
                <span className="text-red-400 font-semibold">
                  "What if it could work — not just talk?"
                </span>
              </p>
              <p>
                That question became the blueprint. The blueprint became DAX91.
                An AI not built for conversation — but for action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-red-500/10 p-4 rounded-2xl w-fit mx-auto mb-6">
              <FaCalendarAlt className="text-4xl text-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
              What's Coming Next
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The future of autonomous intelligence is being built today
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {[
              {
                title: "Multi-agent Orchestration",
                description:
                  "Full autopilot for complex task management across AI networks",
              },
              {
                title: "Adaptive Memory System",
                description:
                  "AI that grows and learns from every task, building contextual understanding",
              },
              {
                title: "Live Execution Command Center",
                description:
                  "Real-time monitoring and control interface for all AI operations",
              },
              {
                title: "Expanded Toolchains",
                description:
                  "Specialized AI workers for research, design, testing & deployment",
              },
              {
                title: "Personalized AI Adaptation",
                description:
                  "System that learns your style and preferences over time",
              },
              {
                title: "Self-Evolving Architecture",
                description:
                  "AI that can improve and optimize its own capabilities autonomously",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-black/40 p-6 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-red-500/10 p-3 rounded-lg w-fit group-hover:bg-red-500/20 transition-colors duration-300 mb-4">
                  <FaLightbulb className="text-xl text-red-500" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Callout */}
          <motion.div
            className="text-center mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-linear-to-r from-red-500/20 to-red-700/20 p-8 rounded-2xl border border-red-500/30">
              <FaRocket className="text-4xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-400">
                We're Building the Future of Autonomous Intelligence
              </h3>
              <p className="text-xl text-gray-300">
                Not someday.{" "}
                <span className="text-red-400 font-bold">Now.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
