"use client";

import { useState } from "react";
import HireCreatorModal from "@/components/HireCreatorModal";

type Props = {
  creator: any;
};

export default function CreatorActions({ creator }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-4">

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700 transition"
        >
          Hire Creator
        </button>

        <div className="flex gap-4">

  <a
    href={creator.youtube}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-red-500 px-8 py-4 font-semibold hover:bg-red-600/20 transition"
  >
    ▶ YouTube
  </a>

  <a
    href={creator.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-pink-500 px-8 py-4 font-semibold hover:bg-pink-600/20 transition"
  >
    📷 Instagram
  </a>

</div>

      </div>

      <HireCreatorModal
  open={open}
  onClose={() => setOpen(false)}
  creator={creator}
/>
    </>
  );
}