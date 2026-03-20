"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">DreamsHelix</h2>

      <ul className="space-y-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/courses">My Courses</Link></li>
        <li><Link href="/dashboard/referrals">Referrals</Link></li>
        <li><Link href="/dashboard/wallet">Wallet</Link></li>
      </ul>
    </aside>
  );
}