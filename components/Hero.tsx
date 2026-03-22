"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation"; // ✅ import router

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Hero() {
  const router = useRouter(); // ✅ initialize router

  return (
    <section className={`${poppins.className} relative overflow-hidden bg-[#0B1F3B] text-white`}>

      {/* ... your background effects ... */}

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
          {/* ✅ Register */}
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #F4A623" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F4A623] text-black px-8 py-3 rounded-xl font-semibold transition"
            onClick={() => router.push("/register")} // ✅ navigate to register
          >
            Register
          </motion.button>

          {/* ✅ Login */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#F4A623] text-[#F4A623] px-8 py-3 rounded-xl hover:bg-[#F4A623] hover:text-black transition"
            onClick={() => router.push("/login")} // ✅ navigate to login
          >
            Login
          </motion.button>
        </motion.div>

      </div>

      {/* ... your stats and other content ... */}

    </section>
  );
}