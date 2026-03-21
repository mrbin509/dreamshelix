// =========================================
// FILE: components/Hero.tsx
// ULTRA PREMIUM HERO (ANIMATED + NEXT LEVEL UI)
// =========================================

"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Hero() {
  return (
    <section className={`${poppins.className} relative overflow-hidden bg-[#0B1F3B] text-white`}>

      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Animated gradient overlay */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-[#0B1F3B] via-[#0B1F3B] to-black"
      />

      {/* Floating gold glow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#F4A623]/20 blur-3xl rounded-full"
      />

      {/* Floating red accent */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#8B1A1A]/20 blur-3xl rounded-full"
      />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 border border-[#F4A623] text-[#F4A623] rounded-full text-sm backdrop-blur-md"
        >
          🚀 Learn • Build • Earn
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Build Your Future with
          <br />
          <span className="text-[#F4A623] relative">
            Python & Earnings
            <span className="absolute left-0 bottom-0 w-full h-1 bg-[#F4A623] animate-pulse"></span>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg mb-10"
        >
          A powerful EdTech ecosystem where you don’t just learn — you monetize your knowledge. Join DreamsHelix and unlock skills + income together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #F4A623" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4A623] text-black px-8 py-3 rounded-xl font-semibold transition"
          >
            🎓 Start Learning
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#F4A623] text-[#F4A623] px-8 py-3 rounded-xl hover:bg-[#F4A623] hover:text-black transition"
          >
            💸 Refer & Earn
          </motion.button>

        </motion.div>

        {/* ================= STATS ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >

          {["10K+ Students", "₹5L+ Earnings", "50+ Modules", "100% Practical"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-[#F4A623] transition"
            >
              <h3 className="text-xl font-bold text-[#F4A623]">{item.split(" ")[0]}</h3>
              <p className="text-gray-400">{item.split(" ").slice(1).join(" ")}</p>
            </motion.div>
          ))}

        </motion.div>

        {/* ================= TRUST ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <p className="text-gray-400 mb-4">Trusted by learners across India 🇮🇳</p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✔ Certification</span>
            <span>✔ Lifetime Access</span>
            <span>✔ Earn While Learn</span>
            <span>✔ Real Projects</span>
          </div>
        </motion.div>

      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm"
      >
        ↓ Scroll Down
      </motion.div>

    </section>
  );
}

// =========================================
// 🚀 ULTRA FEATURES ADDED:
// - Floating animations
// - Glow + grid overlay
// - Premium font (Poppins)
// - Button hover effects (glow)
// - Animated underline
// - Smooth entry transitions
// - Responsive + modern
// =========================================