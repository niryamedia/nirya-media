"use client";

import { motion } from "framer-motion";
import HeroCreators from "./HeroCreators";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  return (
    
    <section
  id="home"
  className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-28 pb-12 md:min-h-screen"
>
      {/* Purple Glow */}
      <div className="absolute left-1/2 top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px] pointer-events-none" />
<motion.div
  animate={{
    scale: [1, 1.15, 1],
    opacity: [0.15, 0.3, 0.15],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-10 top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px] pointer-events-none"
/>

<motion.div
  animate={{
    y: [-20, 20, -20],
    x: [-15, 15, -15],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-10 bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"
/>
      {/* Blue Glow */}
      <div className="absolute bottom-1 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      <>
  {/* Mobile Hero */}
  <HeroMobile />

  {/* Desktop Hero */}
  <div className="relative z-10 mx-auto hidden w-full max-w-[1700px] items-center justify-center gap-28 px-20 lg:flex">
        <div className="relative z-30 ml-58 flex max-w-4xl flex-col items-center text-center">
        <div className="group inline-flex items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-500/10 px-6 py-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-400 hover:shadow-[0_0_60px_rgba(168,85,247,.55)]">
  {/* Shield Icon */}
  <div
    className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-xl
      border
      border-purple-500/40
      bg-purple-500/15
      transition-all
      duration-500
      group-hover:rotate-12
      group-hover:scale-110
      group-hover:bg-purple-500/25
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7 text-purple-400 transition-all duration-500 group-hover:text-purple-300"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  </div>

  {/* Text */}
  <div>
    <p className="font-semibold text-yellow-400 transition-colors duration-500 group-hover:text-yellow-300">
      Officially Registered MSME Enterprise
    </p>

    <p className="text-sm text-gray-300 transition-colors duration-500 group-hover:text-white">
      Recognized by Government of India
    </p>
  </div>

  {/* Verified Badge */}
  <span
    className="
      rounded-full
      border
      border-emerald-500/40
      bg-emerald-500/10
      px-3
      py-1
      text-xs
      font-semibold
      text-emerald-400
      transition-all
      duration-500
      group-hover:scale-110
      group-hover:bg-emerald-500/20
      group-hover:shadow-[0_0_25px_rgba(34,197,94,.45)]
    "
  >
    Verified
  </span>

</div>

        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-8 text-4xl font-black leading-tight sm:text-5xl md:mt-10 md:text-8xl"
>
          Connecting
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
  Brands
</span>

          <br />

          With
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
  Creators
</span>
        </motion.h1>

        <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
>
          Connecting premium creators with ambitious brands through powerful
          influencer campaigns, creator management and long-term partnerships.
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="mt-12 flex flex-wrap items-center justify-center gap-5"
>
          <a
  href="/creators"
  className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold transition hover:scale-105 md:px-8 md:py-4 shadow-[0_0_25px_rgba(168,85,247,.35)] text-center"
>
  Hire Creators
</a>

          <a
  href="/apply"
  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl transition hover:border-purple-500 hover:bg-purple-600/10 md:px-8 md:py-4 text-center"
>
  Join Network
</a>
          </motion.div>
        </div>
        <HeroCreators />
      </div>
      </>
      {/* Animated Grid Background */}
<div
  className="absolute inset-0 opacity-[0.06]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
  }}
/>
    </section>
  );
}
