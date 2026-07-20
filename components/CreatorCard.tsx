import Link from "next/link";
import type { Creator } from "@/types/creator";

type Props = {
  creator: Creator;
};

export default function CreatorCard({ creator }: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">

      {/* Avatar */}
      <div className="h-20 w-20 overflow-hidden rounded-full border border-purple-500">
  {creator.image ? (
    <img
      src={creator.image}
      alt={creator.name}
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-purple-600 to-fuchsia-500 text-3xl font-bold">
      {creator.name.charAt(0)}
    </div>
  )}
</div>

      {/* Creator Name */}
      <h2 className="mt-6 text-2xl font-bold">
        {creator.name}
      </h2>

      {/* Username */}
      <p className="mt-2 text-sm text-gray-500">
        {creator.username || "@creator"}
      </p>

      {/* Niche */}
      <div className="mt-4 inline-flex rounded-full bg-purple-600/20 px-3 py-1 text-sm text-purple-300">
        {creator.niche}
      </div>

      {/* Stats */}
      <div className="mt-6 space-y-2 text-sm text-gray-300">
        <p>📺 {creator.platform}</p>
        <p>👥 {creator.subscribers} Subscribers</p>
        <p>📈 {creator.monthly_views} Monthly Views</p>
        <p>❤️ {creator.engagement} Engagement</p>
      </div>

      {/* Button */}
      <Link
  href={`/creators/${creator.slug || creator.id}`}
  className="mt-8 block w-full rounded-xl bg-purple-600 py-3 text-center font-semibold transition hover:bg-purple-700"
>
  View Profile
</Link>
    </div>
  );
}