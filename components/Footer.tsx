// =========================================
// FILE: components/Footer.tsx
// PREMIUM FOOTER (FINAL SECTION - DREAMSHELIX)
// =========================================

"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1F3B] text-white pt-20 pb-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F4A623]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8B1A1A]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-[#F4A623] mb-4">
              DreamsHelix
            </h2>
            <p className="text-gray-400 text-sm">
              Learn Python. Build Skills. Earn Money. <br />
              India's first Learn & Earn EdTech platform.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-[#F4A623] cursor-pointer">Home</li>
              <li className="hover:text-[#F4A623] cursor-pointer">Courses</li>
              <li className="hover:text-[#F4A623] cursor-pointer">Dashboard</li>
              <li className="hover:text-[#F4A623] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-[#F4A623] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#F4A623] cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-[#F4A623] cursor-pointer">Refund Policy</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 text-xl">
              <span className="hover:text-[#F4A623] cursor-pointer">📷</span>
              <span className="hover:text-[#F4A623] cursor-pointer">📘</span>
              <span className="hover:text-[#F4A623] cursor-pointer">🐦</span>
              <span className="hover:text-[#F4A623] cursor-pointer">💼</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        >
          <p>© 2026 DreamsHelix. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Made with ❤️ for Students in India 🇮🇳
          </p>
        </motion.div>

      </div>
    </footer>
  );
}

// =========================================
// ADD TO HOME PAGE:
// import Footer from "@/components/Footer";
// <Footer />
// =========================================

// =========================================
// 🎯 NOW YOUR WEBSITE IS COMPLETE:
// Hero ✅
// Features ✅
// How It Works ✅
// Pricing ✅
// Testimonials ✅
// Footer ✅
// =========================================