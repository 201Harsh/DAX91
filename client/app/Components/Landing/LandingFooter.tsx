import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <>
      <footer className="bg-black/40 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <motion.div
                  className="flex items-center h-14 w-14"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/img/logo.png"
                    alt="DAX91 Logo"
                    width={100}
                    height={100}
                    priority
                  />
                  <span className="text-xl font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    DAX91
                  </span>
                </motion.div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mt-2">
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
                {[
                  {
                    Icon: FaInstagram,
                    href: "https://www.instagram.com/dax91.ai/",
                  },
                  {
                    Icon: FaGithub,
                    href: "https://github.com/dax91ai",
                  },
                  {
                    Icon: FaLinkedin,
                    href: "https://www.linkedin.com/company/dax91ai/",
                  },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-2 rounded-lg"
                    whileHover={{
                      scale: 1.2,
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
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-red-400 font-bold"> DAX91</span> Autonomous
              AI Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingFooter;
