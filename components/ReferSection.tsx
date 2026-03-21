"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function ReferSection() {
  return (
    <section className={`${poppins.className} relative bg-[#0B1F3B] text-white py-28 overflow-hidden`}>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F4A623]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B1A1A]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Earn While You Learn 💸
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Invite your friends to DreamsHelix and earn ₹500 for every successful referral.
          Build your income while growing your skills.
        </motion.p>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 mb-12"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-[#F4A623] mb-4">
            ₹500 Per Referral
          </h3>

          <p className="text-gray-400">
            No limits. No restrictions. The more you refer, the more you earn.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {[
            { icon: "🔗", title: "Get Your Link", desc: "Receive your unique referral link after joining." },
            { icon: "📤", title: "Share with Friends", desc: "Share it on WhatsApp, Instagram, or anywhere." },
            { icon: "💰", title: "Earn Money", desc: "Get ₹500 instantly for each successful signup." },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-[#F4A623] transition"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h4 className="text-lg font-semibold text-[#F4A623] mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #F4A623" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F4A623] text-black px-10 py-3 rounded-xl font-bold text-lg"
        >
          Start Earning Now 🚀
        </motion.button>

      </div>
    </section>
  );
}