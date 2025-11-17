"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaShieldAlt,
  FaBrain,
} from "react-icons/fa";

const LandingFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Sub-AI Network", href: "/sub-ai-network" },
        { name: "Use Cases", href: "/use-cases" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Documentation", href: "/docs" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy", href: "/privacy" },
      ],
    },
    {
      title: "Technology",
      links: [
        { name: "AI Architecture", href: "/architecture" },
        { name: "Parallel Processing", href: "/parallel-processing" },
        { name: "Network Systems", href: "/network" },
        { name: "API Docs", href: "/api" },
      ],
    },
  ];

  const socialLinks = [
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/dax91.ai/",
      label: "Instagram",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/dax91ai",
      label: "GitHub",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/company/dax91ai/",
      label: "LinkedIn",
    },
  ];

  const features = [
    { icon: FaBrain, text: "Autonomous AI" },
    { icon: FaRocket, text: "Parallel Execution" },
    { icon: FaShieldAlt, text: "Secure & Reliable" },
  ];

  return (
    <footer className="bg-black/60 border-t border-red-900/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-14 h-14">
                  <Image
                    src="/img/logo.png"
                    alt="DAX91 Logo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  DAX91
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Next-generation autonomous AI architecture powered by a hidden
              network of specialized sub-AIs. Think, plan, build, and execute —
              completely autonomously.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center space-x-2 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className="text-red-400 text-xs" />
                  <span className="text-red-400 text-xs font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-2 rounded-lg bg-black/40 hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-red-900/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>
                &copy; {currentYear}{" "}
                <span className="text-red-400 font-semibold">DAX91</span>. All
                rights reserved.
              </p>
            </div>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Accent */}
      <div className="h-1 bg-linear-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
    </footer>
  );
};

export default LandingFooter;
