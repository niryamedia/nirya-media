"use client";

import { useEffect, useState } from "react";
import CreatorCard from "@/components/CreatorCard";
import { supabase } from "@/lib/supabase";
import type { Creator } from "@/types/creator";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function CreatorsPage() {
  const [search, setSearch] = useState("");
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchCreators();
  }, []);

  async function fetchCreators() {
  console.log("START");

  try {
    const { data, error } = await supabase
  .from("creators")
  .select("*")
  .eq("status", "approved");

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      console.error(error);
    } else {
      setCreators(data || []);
    }
  } catch (e) {
    console.error("Catch:", e);
  }

  setLoading(false);
}

  const filteredCreators = creators.filter((creator) => {
    return (
      creator.name.toLowerCase().includes(search.toLowerCase()) ||
      creator.niche.toLowerCase().includes(search.toLowerCase()) ||
      creator.platform.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main className="min-h-screen bg-[#07070b] text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
<div className="mb-10 flex items-center gap-2 text-sm">

  <Link
    href="/"
    className="text-gray-500 transition hover:text-purple-400"
  >
    Home
  </Link>

  <FiChevronRight className="text-gray-600" />

  <span className="font-medium text-white">
    Creators
  </span>

</div>
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-bold">
            Explore <span className="text-purple-500">Creators</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Discover creators across Gaming, Finance, Tech and Lifestyle.
          </p>
        </div>

        <div className="mb-12">
          <input
            type="text"
            placeholder="Search creators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-800 bg-[#16161d] px-5 py-4 outline-none text-white placeholder-gray-500 focus:border-purple-500 transition"
          />
        </div>

        {loading ? (
          <div className="py-20 text-center text-gray-400">
            Loading creators...
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCreators.map((creator) => (
              <CreatorCard
                key={creator.id}
                creator={creator}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}