"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Learn Python",
    desc: "Start from basics and become industry-ready with our structured Python courses.",
    icon: "📚",
  },
  {
    title: "Share Referral",
    desc: "Invite your friends using your unique referral link.",
    icon: "🔗",
  },
  {
    title: "Earn Money",
    desc: "Get ₹500 for every successful referral and grow your income.",
    icon: "💰",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0B1F3B] text-white py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F4A623]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8B1A1A]/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          How DreamsHelix Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          A simple 3-step process to learn valuable skills and start earning
          money while you grow.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#F4A623] transition"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-[#F4A623]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">{step.desc}</p>
            </motion.div>
          ))}

        </div>

        {/* Flow Arrow Line */}
        <div className="hidden md:flex justify-between mt-10 px-20 text-[#F4A623] text-2xl">
          <span>→</span>
          <span>→</span>
        </div>

      </div>
    </section>
  );
}