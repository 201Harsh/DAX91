import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const LandingHeader = ({ handleConnect, isConnected, isLoading }: any) => {
  return (
    <header className="fixed top-0 right-0 left-0 backdrop-blur-md z-50 p-4 max-w-screen">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="flex items-center space-x-1 h-14 w-14"
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

          <nav className="hidden md:flex items-center space-x-8">
            {["Features", "About", "Contact", "Use Cases", "Documentation"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-red-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>

          <motion.button
            onClick={handleConnect}
            disabled={isLoading}
            className="bg-linear-to-r from-red-500 to-red-700 px-6 py-2 rounded-full font-semibold hover:from-red-600 hover:to-red-800 transition-all duration-300 disabled:opacity-50 border border-red-600/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Connecting...</span>
              </div>
            ) : isConnected ? (
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Connected</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <FaPlay className="text-sm" />
                <span>Connect to DAX AI</span>
              </div>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
