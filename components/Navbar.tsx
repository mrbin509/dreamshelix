// =========================================
// FILE: components/Navbar.tsx
// PREMIUM NAVBAR (DreamsHelix Branding)
// =========================================

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`${poppins.className} fixed top-0 left-0 w-full z-50 bg-[#0B1F3B]/80 backdrop-blur-xl border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#F4A623] tracking-wide">
          DreamsHelix
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-[#F4A623] transition">Home</Link>
          <Link href="/courses" className="hover:text-[#F4A623] transition">Courses</Link>
          <Link href="/dashboard" className="hover:text-[#F4A623] transition">Dashboard</Link>
          <Link href="#" className="hover:text-[#F4A623] transition">Refer & Earn</Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden md:block border border-[#F4A623] text-[#F4A623] px-4 py-2 rounded-lg text-sm hover:bg-[#F4A623] hover:text-black transition"
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #F4A623" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4A623] text-black px-5 py-2 rounded-lg text-sm font-semibold"
          >
            Get Started
          </motion.button>

        </div>

      </div>
    </motion.nav>
  );
}

// =========================================
// ✅ FEATURES:
// - Sticky navbar
// - Blur glass effect
// - Brand colors applied
// - Hover animations
// - Responsive structure
// =========================================