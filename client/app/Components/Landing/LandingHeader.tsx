"use client";

import { useState } from "react";
import { FaPlay, FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LandingHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Use Cases", href: "/useases" },
    { name: "Documentation", href: "/documentation" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 right-0 left-0 backdrop-blur-md z-50 bg-black/40">
        <div className="container mx-auto px-10 py-8">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/img/logo.png"
                    alt="DAX91 Logo"
                    width={40}
                    height={40}
                    priority
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  DAX91
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Connect Button */}
              <button className="hidden sm:flex bg-linear-to-r from-red-500 to-red-700 px-6 py-2 rounded-full font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-300 disabled:opacity-50 border border-red-600/50 items-center space-x-2">
                <FaPlay className="text-sm" />
                <span>Connect to DAX AI</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-gray-300 hover:text-red-400 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-linear-to-b from-black via-black/95 to-red-900/20 z-50 md:hidden border-l border-red-900/50"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-red-900/50">
                  <Link href="/" onClick={toggleMobileMenu}>
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 relative">
                        <Image
                          src="/img/logo.png"
                          alt="DAX91 Logo"
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-lg font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                        DAX91
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-gray-300 hover:text-red-400 transition-colors duration-300"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <div className="space-y-4">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={toggleMobileMenu}
                          className="block py-4 px-4 text-xl font-medium text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-red-500/30"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Connect Button */}
                <div className="p-6 border-t border-red-900/50">
                  <button
                    onClick={() => {
                      toggleMobileMenu();
                    }}
                    className="w-full bg-linear-to-r from-red-500 to-red-700 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-300 disabled:opacity-50 border border-red-600/50 flex items-center justify-center space-x-2"
                  >
                    <FaPlay className="text-sm" />
                    <span className="text-lg">Connect to DAX AI</span>
                  </button>
                </div>

                {/* Footer Info */}
                <div className="p-6 text-center text-gray-400 text-sm">
                  <p>Autonomous AI Network</p>
                  <p className="mt-1">Powered by Hidden Sub-AI Technology</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingHeader;
