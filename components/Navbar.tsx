"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold text-blue-600">
        DreamsHelix
      </h1>

      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}