"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
const stats = [
  {
    end: 300,
    suffix: "+",
    title: "Creators",
    
  },
  {
    end: 120,
    suffix: "M+",
    title: "Subscribers",
    
  },
  {
    end: 500,
    suffix: "M+",
    title: "Monthly Views",
    
  },
  {
    end: 150,
    suffix: "+",
    title: "Brand Campaigns",
    
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16 text-center"
        >
          <p className="text-purple-400 font-semibold tracking-[0.3em] uppercase">
            NiryaMedia Network
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Built For
            <span className="text-purple-500"> Scale</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            One of India's fastest growing influencer marketing networks
            connecting premium creators with ambitious brands.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .6,
              }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="group rounded-3xl border border-purple-500/20 hover:border-purple-500/60 bg-white/[0.07] hover:bg-white/[0.10] p-8 backdrop-blur-xl transition-all"
            >
              

              <h3 className="text-5xl font-black text-purple-500">
                <CountUp
  end={item.end}
  suffix={item.suffix}
  duration={2.5}
  enableScrollSpy
  scrollSpyOnce
/>
              </h3>

              <p className="mt-3 text-lg text-gray-300">
                {item.title}
              </p>

              <div className="mt-6 h-[2px] w-0 bg-purple-500 transition-all duration-500 group-hover:w-full" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}