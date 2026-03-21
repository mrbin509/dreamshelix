"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const courses = [
  {
    title: "Python Basics",
    level: "Beginner",
    duration: "4 Weeks",
    projects: "5+ Projects",
  },
  {
    title: "Advanced Python",
    level: "Intermediate",
    duration: "6 Weeks",
    projects: "8+ Projects",
  },
  {
    title: "Web Development with Python",
    level: "Advanced",
    duration: "8 Weeks",
    projects: "10+ Projects",
  },
];

export default function CoursesSection() {
  return (
    <section className={`${poppins.className} relative bg-[#0B1F3B] text-white py-28 overflow-hidden`}>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F4A623]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B1A1A]/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Explore Our Courses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Structured learning paths designed to take you from beginner to expert.
        </motion.p>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#F4A623] transition"
            >

              {/* Title */}
              <h3 className="text-xl font-bold text-[#F4A623] mb-4">
                {course.title}
              </h3>

              {/* Details */}
              <div className="text-gray-400 text-sm space-y-2 mb-6">
                <p>📘 Level: {course.level}</p>
                <p>⏳ Duration: {course.duration}</p>
                <p>🧠 Projects: {course.projects}</p>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-[#F4A623] text-black px-6 py-2 rounded-lg font-semibold"
              >
                View Details
              </motion.button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}