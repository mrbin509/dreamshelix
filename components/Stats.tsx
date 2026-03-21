"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

export default function Stats() {
  return (
    <section className={`${poppins.className} relative bg-[#0B1F3B] text-white py-24 overflow-hidden`}>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F4A623]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B1A1A]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Our Impact in Numbers
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#F4A623] transition"
          >
            <h3 className="text-3xl font-bold text-[#F4A623]">
              <Counter target={10000} />+
            </h3>
            <p className="text-gray-400 mt-2">Students</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#F4A623] transition"
          >
            <h3 className="text-3xl font-bold text-[#F4A623]">
              ₹<Counter target={500000} />+
            </h3>
            <p className="text-gray-400 mt-2">Total Earnings</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#F4A623] transition"
          >
            <h3 className="text-3xl font-bold text-[#F4A623]">
              <Counter target={50} />+
            </h3>
            <p className="text-gray-400 mt-2">Modules</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#F4A623] transition"
          >
            <h3 className="text-3xl font-bold text-[#F4A623]">
              <Counter target={100} />%
            </h3>
            <p className="text-gray-400 mt-2">Practical Learning</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}