import { FaRobot, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingHeader = ({ handleConnect, isConnected, isLoading }: any) => {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md z-50 p-4">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaRobot className="text-3xl text-red-500" />
            <span className="text-xl font-bold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              DAX91
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              "Features",
              "How It Works",
              "Sub-AI Network",
              "Use Cases",
              "Benefits",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-red-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
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
