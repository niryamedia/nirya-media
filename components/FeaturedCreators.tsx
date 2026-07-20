"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import type { Creator } from "@/types/creator";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function FeaturedCreators() {
  const [creators, setCreators] = useState<Creator[]>([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  async function fetchCreators() {
    const { data, error } = await supabase
  .from("creators")
  .select("*")
  .eq("status", "approved")
  .eq("featured", true)
  .limit(3);

    if (!error && data) {
      setCreators(data as Creator[]);
    }
  }

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-7xl">

        <h2 className="text-center text-5xl font-bold">
          Featured <span className="text-purple-500">Creators</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
          Discover top-performing creators across multiple niches.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">

          {creators.map((creator) => (

            <div
              key={creator.id}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/60 hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]"
            >
<div className="absolute right-5 top-5 rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold text-purple-300">
  ⭐ Featured Creator
</div>
              <img
                src={creator.image}
                alt={creator.name}
                className="h-24 w-24 rounded-full border-4 border-purple-500 object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_30px_rgba(168,85,247,.6)]"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {creator.name}
              </h3>

              <p className="mt-2 text-purple-400">
                {creator.niche}
              </p>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-white/5 p-3">

  <div>

    <p className="text-xs text-gray-400">
      Subscribers
    </p>

    <p className="font-bold">
      {creator.subscribers}
    </p>

  </div>

  <div>

  <p className="text-xs text-gray-400">
    Platforms
  </p>

  <div className="mt-2 flex items-center gap-3">

    {creator.youtube && (
      <a
        href={creator.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:scale-110"
      >
        <FaYoutube className="text-[26px] text-red-500 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
      </a>
    )}

    {creator.instagram && (
      <a
        href={creator.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:scale-110"
      >
        <FaInstagram className="text-[24px] text-pink-500 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
      </a>
    )}

  </div>

</div>
</div>
<div className="mt-5 flex gap-2">

  <span className="rounded-full bg-purple-500/15 px-3 py-1 text-xs text-purple-300">
    Verified
  </span>

  <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-300">
    Active
  </span>

</div>
              <Link
                href={`/creators/${creator.slug || creator.id}`}
                className="mt-8 block w-full rounded-xl bg-purple-600 py-3 text-center font-semibold transition hover:bg-purple-700"
              >
                Hire Creator   →
              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}