"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import HeroCreators from "./HeroCreators";
import Link from "next/link";
export default function HeroMobile() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-28 pb-16 lg:hidden"
    >
      {/* Mobile Hero */}
      {/* Purple Glow */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 flex max-w-sm items-center gap-3 rounded-2xl border border-purple-500/30 bg-purple-500/10 px-4 py-3 backdrop-blur-xl">

  {/* Shield */}

  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/15">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-6 w-6 text-purple-400"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>

  </div>

  {/* Text */}

  <div className="text-left">

    <p className="text-sm font-semibold text-yellow-400">
      Officially Registered MSME
    </p>

    <p className="text-xs text-gray-300">
      Government of India
    </p>

  </div>

</div>
<h1 className="mt-8 text-center text-5xl font-black leading-tight">

  Connecting

  <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Brands
  </span>

  With

  <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    Creators
  </span>

</h1>
<p className="mt-6 max-w-sm text-center text-gray-400 leading-8">

  Connecting premium creators with ambitious brands through
  powerful influencer campaigns, creator management and
  long-term partnerships.

</p>
<div className="mt-10 flex w-full flex-col gap-4">

  <Link
    href="/creators"
    className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-4 text-center font-semibold shadow-[0_0_25px_rgba(168,85,247,.35)]"
  >
    Hire Creators
  </Link>

  <Link
    href="/apply"
    className="rounded-xl border border-white/10 bg-white/5 py-4 text-center font-semibold backdrop-blur-xl"
  >
    Join Network
  </Link>

</div>
</div>
<div className="absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

{/* Blue Glow */}
<div className="absolute bottom-0 left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

{/* Grid Background */}
<div
  className="absolute inset-0 opacity-[0.06]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
    `,
    backgroundSize: "45px 45px",
  }}
/>
    </section>
  );
}
