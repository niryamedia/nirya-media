"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import HeroMobile from "./HeroMobile";
export default function HeroCreators() {
  const [creators, setCreators] = useState<any[]>([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  async function fetchCreators() {
    const { data } = await supabase
      .from("creators")
      .select("*")
      .eq("featured", true)
      .limit(3);

    setCreators(data || []);
  }

  if (!creators.length) return null;

  return (
    <div className="hidden lg:flex relative z-20 h-[450px] w-[1700px] items-center justify-center">
      {creators.map((creator, index) => (
        <motion.div
          key={creator.id}
          animate={{
            x:
              index === 5
                ? [30, -1700, 20, 10]
                : index === 1
                ? [30, -1700, 20, 10]
                : [30, -1700, 20, 10],

            y:
              index === 5
                ? [100, -250, 150, 100]
                : index === 1
                ? [100, 250, -200, 200]
                : [-200, -250, 205, 150],

            rotate:
              index === 5
                ? [10, 3, -20, 10]
                : index === 1
                ? [10, -40, 20, 0]
                : [-10, 22, -30, 0],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute w-80 rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_0_40px_rgba(168,85,247,.18)]"
          style={{
            top: `${index * 100}px`,
            left: `${index % 3 === 0 ? 20 : 300}px`,
          }}
        >
          <div className="flex items-center gap-4">
            <img
              src={creator.image}
              className="h-16 w-16 rounded-full object-cover"
              alt={creator.name}
            />

            <div>
              <h3 className="font-bold text-lg">{creator.name}</h3>

              <p className="text-sm text-gray-400">
                {creator.niche}
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <div>
              <p className="text-xs text-gray-500">
                Subscribers
              </p>

              <h4 className="font-bold">
                {creator.subscribers}
              </h4>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Engagement
              </p>

              <h4 className="font-bold">
                {creator.engagement}
              </h4>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}