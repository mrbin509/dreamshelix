"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="relative bg-[#0B1F3B] text-white py-28 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F4A623]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B1A1A]/20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Choose Your Plan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Invest once, learn lifetime skills, and start earning through referrals.
        </motion.p>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl relative"
        >

          {/* Badge */}
          <div className="absolute top-0 right-0 bg-[#F4A623] text-black px-4 py-1 rounded-bl-xl font-semibold">
            BEST VALUE
          </div>

          {/* Course Name */}
          <h3 className="text-2xl font-bold mb-4">
            Complete Python Mastery + Earning System
          </h3>

          {/* Price */}
          <div className="mb-6">
            <span className="text-gray-400 line-through text-lg">
              ₹14,999
            </span>
            <h2 className="text-5xl font-extrabold text-[#F4A623]">
              ₹6,999
            </h2>
            <p className="text-gray-400 text-sm">+ GST</p>
          </div>

          {/* Features */}
          <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
            <li>✔ Full Python Course (Beginner → Advanced)</li>
            <li>✔ Web Development with Python</li>
            <li>✔ Real Projects & Case Studies</li>
            <li>✔ Certificate of Completion</li>
            <li>✔ Lifetime Access</li>
            <li className="text-[#F4A623] font-semibold">
              ✔ Earn ₹500 per referral 💰
            </li>
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px #F4A623" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4A623] text-black px-10 py-3 rounded-xl font-bold text-lg"
          >
            Enroll Now 🚀
          </motion.button>

          {/* Trust Note */}
          <p className="text-gray-500 text-sm mt-4">
            🔒 Secure Payment | 🎓 Instant Access | 💸 Earn from Day 1
          </p>

        </motion.div>

        {/* Extra Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-gray-400 text-sm"
        >
          ⚡ Limited-time offer. Price may increase soon.
        </motion.div>

      </div>
    </section>
  );
}