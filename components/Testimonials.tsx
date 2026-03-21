// =========================================
// FILE: components/Testimonials.tsx
// PREMIUM TESTIMONIALS SECTION (TRUST BUILDER)
// =========================================

"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "B.Tech Student",
    text: "DreamsHelix completely changed my learning journey. I not only learned Python but also earned ₹3000 through referrals!",
  },
  {
    name: "Priya Das",
    role: "College Student",
    text: "Best platform for students! The course is amazing and the earning system is real. Highly recommended.",
  },
  {
    name: "Amit Kumar",
    role: "Beginner",
    text: "I started with zero knowledge. Now I have skills + income source. DreamsHelix is truly unique.",
  },
];

export default function Testimonials() {
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
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What Our Students Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Real students. Real results. Real earnings.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#F4A623] transition"
            >

              {/* Stars */}
              <div className="text-[#F4A623] text-lg mb-3">★★★★★</div>

              {/* Text */}
              <p className="text-gray-300 mb-6">“{t.text}”</p>

              {/* User */}
              <div>
                <h4 className="font-semibold text-[#F4A623]">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

// =========================================
// ADD TO HOME PAGE:
// import Testimonials from "@/components/Testimonials";
// <Testimonials />
// =========================================

// =========================================
// NEXT: FOOTER (FINAL TOUCH)
// =========================================