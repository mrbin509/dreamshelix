// =========================================
// FILE: components/Features.tsx
// PREMIUM FEATURES SECTION (USP - DREAMSHELIX)
// =========================================

"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const features = [
  {
    icon: "📚",
    title: "Complete Python Mastery",
    desc: "Learn Python from basics to advanced with real-world projects and industry-level curriculum.",
  },
  {
    icon: "💸",
    title: "Earn While Learning",
    desc: "Earn ₹500 per referral and build a side income while upgrading your skills.",
  },
  {
    icon: "🎓",
    title: "Certified Courses",
    desc: "Get recognized certificates after course completion to boost your career opportunities.",
  },
  {
    icon: "⚡",
    title: "Lifetime Access",
    desc: "Access all course content anytime, anywhere with no expiration.",
  },
  {
    icon: "🧠",
    title: "Real Projects",
    desc: "Work on real-world projects to gain practical experience and build a strong portfolio.",
  },
  {
    icon: "🚀",
    title: "Career Growth",
    desc: "Prepare for jobs, freelancing, or startups with industry-ready skills.",
  },
];

export default function Features() {
  return (
    <section className={`${poppins.className} relative bg-[#0B1F3B] text-white py-28 overflow-hidden`}>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F4A623]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B1A1A]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Why Choose DreamsHelix?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          We combine learning with earning to create a powerful ecosystem for students to grow skills and income together.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#F4A623] transition group"
            >

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-[#F4A623]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

// =========================================
// ✅ FEATURES:
// - 6 premium USP cards
// - Motion animation on scroll
// - Hover zoom + border glow
// - Brand colors applied
// - EdTech messaging focused
// =========================================
