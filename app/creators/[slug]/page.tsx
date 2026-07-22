import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import CreatorActions from "./CreatorActions";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CreatorProfile({ params }: Props) {
  const { slug } = await params;

  const { data: creator, error } = await supabase
  .from("creators")
  .select("*")
  .or(`slug.eq.${slug},id.eq.${slug}`)
  .eq("status", "approved")
  .single();

  if (error || !creator) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07070b] text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 overflow-hidden">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

  <img
    src={creator.image}
    alt={creator.name}
    className="h-28 w-28 rounded-full object-cover border border-purple-500 shrink-0"
  />

  <div className="flex-1 min-w-0 text-center md:text-left">

    <h1 className="text-3xl md:text-5xl font-bold break-words">
      {creator.name}
    </h1>

    <div className="mt-3 inline-flex rounded-full bg-purple-600/20 px-4 py-2 text-sm font-medium text-purple-300">
      🎮 {creator.niche}
    </div>

    <p className="mt-3 text-purple-400 break-all">
      {creator.username}
    </p>

    <p className="mt-4 text-gray-400 leading-7 break-words">
      {creator.bio}
    </p>

  </div>

</div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-xl bg-white/5 p-6">
              <p className="text-gray-400">Subscribers</p>
              <h2 className="mt-2 text-3xl font-bold">
                {creator.subscribers}
              </h2>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <p className="text-gray-400">Monthly Views</p>
              <h2 className="mt-2 text-3xl font-bold">
                {creator.monthly_views}
              </h2>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <p className="text-gray-400">Engagement</p>
              <h2 className="mt-2 text-3xl font-bold">
                {creator.engagement}
              </h2>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <p className="text-gray-400">Platform</p>
              <h2 className="mt-2 text-3xl font-bold">
                {creator.platform}
              </h2>
            </div>

          </div>

          <CreatorActions creator={creator} />

        </div>

      </div>
    </main>
  );
}