"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full border-b border-white/10 bg-[#07070b]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold md:text-4xl">
          Nirya<span className="text-purple-500">Media</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-gray-300 md:flex">
  <a href="#home" className="hover:text-purple-400 transition">
    Home
  </a>

  <Link href="/creators">Creators</Link>

  <a href="#services" className="hover:text-purple-400 transition">
    Services
  </a>

  <Link
  href="/about"
  className="hover:text-purple-400 transition"
>
  About Us
</Link>
</nav>

        {/* Desktop Button */}
        <Link
          href="/apply"
          className="hidden rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-700 md:block"
        >
          Become a Creator
        </Link>

        {/* Mobile Menu Button */}
        <button
  onClick={() => setOpen(!open)}
  className="md:hidden relative z-[10000] pointer-events-auto"
>
  {open ? <X size={32} /> : <Menu size={32} />}
</button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#07070b] md:hidden">
          <div className="flex flex-col p-6">

            <Link href="/" className="py-3" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/creators" className="py-3" onClick={() => setOpen(false)}>
              Creators
            </Link>

            <a
  href="#services"
  className="py-3"
  onClick={() => setOpen(false)}
>
  Services
</a>

            <a
  href="#About"
  className="py-3"
  onClick={() => setOpen(false)}
>
  About Us
</a>

            <Link
              href="/apply"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-xl bg-purple-600 px-6 py-3 text-center font-semibold"
            >
              Become a Creator
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}