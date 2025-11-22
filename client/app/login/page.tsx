"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import AxiosProxyInstance from "@/config/AxiosProxyInstance";

export default function LoginPage() {
  const [activeMethod, setActiveMethod] = useState<"google" | "manual" | null>(
    null
  );
  const [showManualPopup, setShowManualPopup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Google Login Function
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      // Simulate Google OAuth API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate successful response
      const mockResponse = {
        success: true,
        user: {
          id: "google_123",
          email: "user@gmail.com",
          name: "Google User",
        },
        token: "google_auth_token_123",
      };

      if (mockResponse.success) {
        setMessage("✅ Successfully logged in with Google!");
        setActiveMethod("google");
        // Here you would typically store the token and redirect
      }
    } catch (error) {
      setMessage("❌ Failed to login with Google");
    } finally {
      setIsLoading(false);
    }
  };

  // Manual Login Function
  const handleManualLogin = async () => {
    if (!formData.email || !formData.password) {
      setMessage("❌ Please fill all fields");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("❌ Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await AxiosProxyInstance.post("/api/login", formData);
      if (res.status === 200) {
        setMessage(res.data.message);
        setActiveMethod("manual");
        setShowManualPopup(false);
        setFormData({ email: "", password: "" });
      }
    } catch (error: any) {
      console.log(error);
      if (Array.isArray(error.response.data.error)) {
        const errors = error.response.data.error.forEach(
          (e: { msg: string }) => {
            setMessage(e.msg);
          }
        );
        return;
      }
      setMessage(error.response.data.error || "❌ Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  // Forgot Password Function
  const handleForgotPassword = async () => {
    if (!formData.email) {
      setMessage("❌ Please enter your email address");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage(`✅ Password reset link sent to ${formData.email}`);
    } catch (error) {
      setMessage("❌ Failed to send reset link");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetPopup = () => {
    setShowManualPopup(false);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-black/40 to-red-500/30 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to <span className="text-red-500">DAX91</span>
          </h1>
          <p className="text-gray-300">
            Sign in to access autonomous AI intelligence
          </p>
        </motion.div>

        {/* Login Methods */}
        <div className="space-y-4">
          {/* Google Login Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={`bg-black/40 rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 ${
              activeMethod === "google"
                ? "border-green-500 bg-green-500/10"
                : "border-red-500/20 hover:border-red-500/50"
            }`}
            onClick={handleGoogleLogin}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <FaGoogle className="text-2xl text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Continue with Google
                  </h3>
                  <p className="text-gray-400 text-sm">Fast and secure login</p>
                </div>
              </div>
              {activeMethod === "google" && (
                <FaCheckCircle className="text-green-500 text-xl" />
              )}
            </div>
          </motion.div>

          {/* Manual Login Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`bg-black/40 rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 ${
              activeMethod === "manual"
                ? "border-green-500 bg-green-500/10"
                : "border-red-500/20 hover:border-red-500/50"
            }`}
            onClick={() => setShowManualPopup(true)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <FaEnvelope className="text-2xl text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Log in with Email
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Use your email and password
                  </p>
                </div>
              </div>
              {activeMethod === "manual" && (
                <FaCheckCircle className="text-green-500 text-xl" />
              )}
            </div>
          </motion.div>
        </div>

        {/* Sign Up Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6"
        >
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              Register here
            </Link>
          </p>
        </motion.div>

        {/* Status Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-lg bg-black/40 border border-red-500/30 text-center"
          >
            <p className="text-gray-300">{message}</p>
          </motion.div>
        )}

        {/* Loading Overlay for Google */}
        {isLoading && activeMethod === "google" && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-black/80 p-8 rounded-2xl border border-red-500/30 text-center">
              <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white">Connecting to Google...</p>
            </div>
          </div>
        )}

        {/* Manual Login Popup */}
        <AnimatePresence>
          {showManualPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={(e) => e.target === e.currentTarget && resetPopup()}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-linear-to-br from-black to-gray-900 rounded-2xl p-6 w-full max-w-2xl border border-red-500/30"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={resetPopup}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <FaArrowLeft className="text-gray-400" />
                    </button>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Log In to DAX91
                      </h2>
                      <p className="text-gray-400 text-sm mt-1">
                        Enter your credentials to continue
                      </p>
                    </div>
                  </div>
                </div>

                {/* Login Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  {/* Email */}
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        name="email"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full bg-black/40 border border-red-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="text-gray-300 text-sm font-medium mb-2 block">
                      Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className="w-full bg-black/40 border border-red-500/20 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-red-500 bg-black/40 border-red-500/30 rounded focus:ring-red-500 focus:ring-2"
                      />
                      <span className="text-gray-300 text-sm">Remember me</span>
                    </label>

                    <button
                      onClick={handleForgotPassword}
                      className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Login Button */}
                  <button
                    onClick={handleManualLogin}
                    disabled={isLoading}
                    className="w-full bg-linear-to-r from-red-500 to-red-700 py-3 rounded-lg font-semibold text-white hover:from-red-600 hover:to-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Signing In...</span>
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                  {/* Popup Message */}
                  {message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-3 rounded-lg bg-black/40 border border-red-500/30 text-center"
                    >
                      <p className="text-gray-300 text-sm">{message}</p>
                    </motion.div>
                  )}

                  {/* Divider */}
                  <div className="relative flex items-center py-4">
                    <div className="grow border-t border-gray-600"></div>
                    <span className="shrink mx-4 text-gray-400 text-sm">
                      or
                    </span>
                    <div className="grow border-t border-gray-600"></div>
                  </div>

                  {/* Alternative Sign In Options */}
                  <div className="space-y-3">
                    <button
                      onClick={handleGoogleLogin}
                      disabled={isLoading}
                      className="w-full bg-black/40 border border-red-500/20 py-3 rounded-lg font-semibold text-white hover:border-red-500/50 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-3"
                    >
                      <FaGoogle className="text-red-400" />
                      <span>Continue with Google</span>
                    </button>

                    {/* Sign Up Link */}
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">
                        Don't have an account?{" "}
                        <Link
                          href="/register"
                          className="text-red-400 hover:text-red-300 font-semibold"
                        >
                          Create one
                        </Link>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
