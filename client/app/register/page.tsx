"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import Axiosinstance from "@/config/AxiosInstance";

export default function AccountCreationPage() {
  const [activeMethod, setActiveMethod] = useState<"google" | "manual" | null>(
    null
  );
  const [showManualPopup, setShowManualPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Google Signup Function
  const handleGoogleSignup = async () => {
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
      };

      if (mockResponse.success) {
        setMessage("✅ Google account connected successfully!");
        setActiveMethod("google");
      }
    } catch (error) {
      setMessage("❌ Failed to connect Google account");
    } finally {
      setIsLoading(false);
    }
  };

  // Manual Signup Step 1: Create Account
  const handleManualSignup = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      setMessage("❌ Please fill all fields");
      return;
    }

    if (formData.name.length < 3) {
      setMessage("❌ Name must be at least 3 characters");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("❌ Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await Axiosinstance.post("/users/register", formData);
      if (res.status === 201) {
        setMessage(res.data.message);
        setActiveMethod("manual");
        setCurrentStep(2);
      }
      if (res.status === 202) {
        setCurrentStep(2);
        setActiveMethod("manual");
        setMessage(res.data.message);
      }
    } catch (error: any) {
      setMessage(
        error.response?.data?.error ||
          error.response.data.errors.forEach((e: { msg: string }) => {
            setMessage(e.msg);
          }) ||
          "❌ Failed to create account"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Verify OTP Function
  const verifyOTP = async () => {
    if (!formData.otp || formData.otp.length !== 6) {
      setMessage("❌ Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      // Simulate OTP verification API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockResponse = {
        success: true,
        user: {
          id: "manual_123",
          email: formData.email,
          name: formData.name,
        },
      };

      if (mockResponse.success) {
        setMessage("✅ Account created successfully!");
        setActiveMethod("manual");
        setTimeout(() => {
          setShowManualPopup(false);
          setCurrentStep(1);
          setFormData({ name: "", email: "", password: "", otp: "" });
        }, 2000);
      }
    } catch (error) {
      setMessage("❌ Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP Function
  const resendOTP = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("✅ New OTP sent to your email");
    } catch (error) {
      setMessage("❌ Failed to resend OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetPopup = () => {
    setShowManualPopup(false);
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
            Join <span className="text-red-500">DAX91</span>
          </h1>
          <p className="text-gray-300">
            Create your account and experience autonomous AI intelligence
          </p>
        </motion.div>

        {/* Signup Methods */}
        <div className="space-y-4">
          {/* Google Signup Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={`bg-black/40 rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 ${
              activeMethod === "google"
                ? "border-green-500 bg-green-500/10"
                : "border-red-500/20 hover:border-red-500/50"
            }`}
            onClick={handleGoogleSignup}
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

          {/* Manual Signup Card */}
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
                    Sign up with Email
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Create account manually
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
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              Login here
            </Link>
          </p>
        </motion.div>

        {/* Status Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-lg bg-black/80 border border-red-500/10 text-center"
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

        {/* Manual Signup Popup */}
        <AnimatePresence>
          {showManualPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2"
              onClick={(e) => e.target === e.currentTarget && resetPopup()}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-linear-to-br from-black via-black/40 to-red-500/10 backdrop-blur-lg rounded-2xl p-6 w-full max-w-2xl border border-red-500/30"
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
                        {currentStep === 1 ? "Create Account" : "Verify Email"}
                      </h2>
                      <div className="flex space-x-1 mt-1">
                        {[1, 2].map((step) => (
                          <div
                            key={step}
                            className={`w-2 h-2 rounded-full ${
                              step === currentStep
                                ? "bg-red-500"
                                : "bg-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 1: Account Creation Form */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    {/* Full Name */}
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Full Name
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          name="name"
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="w-full bg-black/40 border border-red-500/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

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
                          name="password"
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                          className="w-full bg-black/40 border border-red-500/20 rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                          placeholder="Create a password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                      <p className="text-gray-400 text-xs mt-1">
                        Must be at least 6 characters long
                      </p>
                    </div>

                    <button
                      onClick={handleManualSignup}
                      disabled={isLoading}
                      className="w-full bg-linear-to-r from-red-500 to-red-700 py-3 rounded-lg font-semibold text-white hover:from-red-600 hover:to-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Creating Account...</span>
                        </div>
                      ) : (
                        "Create Account"
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
                        onClick={handleGoogleSignup}
                        disabled={isLoading}
                        className="w-full bg-black/40 border border-red-500/20 py-3 rounded-lg font-semibold text-white hover:border-red-500/50 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-3"
                      >
                        <FaGoogle className="text-red-400" />
                        <span>Continue with Google</span>
                      </button>

                      {/* Sign Up Link */}
                      <div className="text-center">
                        <p className="text-gray-400 text-sm">
                          Already have an account?{" "}
                          <Link
                            href="/login"
                            className="text-red-400 hover:text-red-300 font-semibold"
                          >
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: OTP Verification */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaEnvelope className="text-2xl text-red-400" />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Verify Your Email
                      </h3>
                      <p className="text-gray-400 text-sm">
                        We sent a 6-digit code to <br />
                        <span className="text-red-400 font-medium">
                          {formData.email}
                        </span>
                      </p>
                    </div>

                    {/* OTP Input */}
                    <div>
                      <label className="text-gray-300 text-sm font-medium mb-2 block">
                        Enter OTP Code
                      </label>
                      <input
                        type="text"
                        maxLength={6}
                        value={formData.otp}
                        onChange={(e) =>
                          handleInputChange(
                            "otp",
                            e.target.value.replace(/\D/g, "")
                          )
                        }
                        className="w-full bg-black/40 border border-red-500/20 rounded-lg px-4 py-3 text-white text-center text-xl tracking-widest focus:border-red-500 focus:outline-none transition-colors"
                        placeholder="000000"
                      />
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={verifyOTP}
                        disabled={isLoading}
                        className="w-full bg-linear-to-r from-red-500 to-red-700 py-3 rounded-lg font-semibold text-white hover:from-red-600 hover:to-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Verifying...</span>
                          </div>
                        ) : (
                          "Verify & Complete"
                        )}
                      </button>

                      <div className="flex gap-5 items-center justify-center">
                        <button
                          onClick={resendOTP}
                          disabled={isLoading}
                          className="w-full text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm cursor-pointer"
                        >
                          Didn't receive code? Resend OTP
                        </button>
                        <button
                          onClick={()=>{
                            setCurrentStep(1)
                            setMessage('')
                          }}
                          disabled={isLoading}
                          className="w-full text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm cursor-pointer"
                        >
                          Wrong Email?{" "}
                          <span className="text-red-400">Change Email</span>
                        </button>
                      </div>
                    </div>
                    {message && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-4 rounded-lg bg-black/80 border border-red-500/10 text-center"
                      >
                        <p className="text-gray-300">{message}</p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
