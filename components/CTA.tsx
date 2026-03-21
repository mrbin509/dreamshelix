"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function CTA() {
  return (
    <section className={`${poppins.className} relative bg-[#0B1F3B] text-white py-28 overflow-hidden`}>

      {/* Background Effects */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B] via-black to-[#0B1F3B]"
      />

      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F4A623]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B1A1A]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Ready to Start Your Journey?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mb-10 text-lg"
        >
          Join DreamsHelix today, learn powerful skills, and start earning from Day 1.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #F4A623" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4A623] text-black px-10 py-3 rounded-xl font-bold text-lg"
          >
            🚀 Enroll Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-[#F4A623] text-[#F4A623] px-10 py-3 rounded-xl hover:bg-[#F4A623] hover:text-black transition"
          >
            💸 Start Earning
          </motion.button>

        </motion.div>

        {/* Urgency Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-[#F4A623] text-sm"
        >
          ⚡ Limited Seats Available — Don’t Miss Out!
        </motion.p>

      </div>
    </section>
  );
}