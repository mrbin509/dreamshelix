"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const menuItems = [
  { name: "Dashboard", icon: "📊", path: "/dashboard" },
  { name: "My Courses", icon: "🎓", path: "/courses" },
  { name: "Refer & Earn", icon: "💸", path: "/refer" },
  { name: "Wallet", icon: "💰", path: "/wallet" },
  { name: "Profile", icon: "👤", path: "/profile" },
];

export default function Sidebar() {
  return (
    <aside
      className={`${poppins.className} h-screen w-64 bg-[#0B1F3B] text-white fixed left-0 top-0 border-r border-white/10`}
    >
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-[#F4A623] border-b border-white/10">
        DreamsHelix
      </div>

      {/* Menu */}
      <div className="p-4 space-y-2">

        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-white/5 transition"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </motion.div>
          </Link>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-full p-4 border-t border-white/10">

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-[#F4A623] text-black py-2 rounded-lg font-semibold"
        >
          Logout
        </motion.button>

      </div>
    </aside>
  );
}