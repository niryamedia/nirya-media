"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import EditCreatorModal from "@/components/EditCreatorModal";
import { useRouter } from "next/navigation";
import type { Creator } from "@/types/creator";

type Inquiry = {
  id: number;
  brand_name: string;
  company: string;
  email: string;
  phone: string;
  creator_name: string;
  creator_email: string;
  budget: string;
  campaign_type: string;
  posting_date: string;
  campaign: string;
  status: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [creators, setCreators] = useState<Creator[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
const [editingCreator, setEditingCreator] = useState<Creator | null>(null);
  const [activeTab, setActiveTab] = useState<"creators" | "inquiries">("creators");
  const [creatorSearch, setCreatorSearch] = useState("");
const [inquirySearch, setInquirySearch] = useState("");
const [creatorFilter, setCreatorFilter] = useState<
  "all" | "featured" | "pending"
>("all");

  useEffect(() => {
  async function checkUser() {

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.replace("/login");
      return;
    }

    fetchCreators();
    fetchInquiries();
  }

  checkUser();
}, [router]);
async function logout() {
  await supabase.auth.signOut();
  router.replace("/login");
}

async function approveCreator(id: number) {
  const { error } = await supabase
    .from("creators")
    .update({
      status: "approved",
    })
    .eq("id", id);

  if (error) {
    alert("Something went wrong!");
    console.error(error);
    return;
  }

  fetchCreators();
}
 async function toggleFeatured(
  id: number,
  currentValue: boolean
) {
  // Agar feature kar rahe hain
  if (!currentValue) {
    const { count } = await supabase
      .from("creators")
      .select("*", { count: "exact", head: true })
      .eq("featured", true);

    if ((count ?? 0) >= 3) {
      alert("Maximum 3 featured creators allowed.");
      return;
    }
  }
  const { error } = await supabase
    .from("creators")
    .update({
      featured: !currentValue,
    })
    .eq("id", id);

  if (error) {
    console.error(error);
    alert("Something went wrong!");
    return;
  }

  fetchCreators();
}
async function fetchInquiries() {
  const { data, error } = await supabase
  .from("inquiries")
  .select("*")
  .neq("status", "Rejected")
  .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  console.log("Fetched:", data);

  setInquiries(data || []);
}
async function fetchCreators() {
  const { data, error } = await supabase
    .from("creators")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  setCreators(data || []);
}
  async function rejectCreator(id: number) {
  await supabase
    .from("creators")
    .delete()
    .eq("id", id);

  fetchCreators();
}
async function saveCreator() {
  if (!editingCreator) return;

  const { error } = await supabase
    .from("creators")
    .update({
      name: editingCreator.name,
      email: editingCreator.email,
      phone: editingCreator.phone,
      subscribers: editingCreator.subscribers,
      monthly_views: editingCreator.monthly_views,
      engagement: editingCreator.engagement,
      youtube: editingCreator.youtube,
      instagram: editingCreator.instagram,
      country: editingCreator.country,
      language: editingCreator.language,
      bio: editingCreator.bio,
    })
    .eq("id", editingCreator.id);

  if (error) {
    console.error(error);
    alert(error.message);
    return;
  }

  await fetchCreators();

  setEditingCreator(null);

  alert("Creator updated successfully");
}
async function updateInquiryStatus(
  id: number,
  status: string
) {
  const inquiry = inquiries.find((i) => i.id === id);
  console.log("Passed ID:", id);
console.log("Inquiry:", inquiry);

  if (!inquiry) {
    alert("Inquiry not found");
    return;
  }

  const { data, error } = await supabase
  .from("inquiries")
  .update({ status })
  .eq("id", inquiry.id)
  .select();

console.log("UPDATED DATA:", data);
console.log("UPDATE ERROR:", error);
  if (error) {
    console.error(error);
    alert(error.message);
    return;
  }

  await fetchInquiries();

  // ✅ Brand Email
  await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: inquiry.email,
      subject:
        status === "Accepted"
          ? "Your Collaboration Request has been Accepted"
          : "Your Collaboration Request Status",

      html: `
        <h2>Hello ${inquiry.brand_name},</h2>

        <p>Your collaboration request with <b>${inquiry.creator_name}</b> has been <b>${status}</b>.</p>

        <p>Thank you for choosing NiryaMedia ❤️</p>
      `,
    }),
  });

  // ✅ Creator Email
  await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: inquiry.creator_email,
      subject:
        status === "Accepted"
          ? "New Brand Collaboration"
          : "Collaboration Status Update",

      html: `
        <h2>Hello ${inquiry.creator_name},</h2>

        <p>You have received a collaboration request from <b>${inquiry.brand_name}</b>.</p>

        <p>Status: <b>${status}</b></p>

        <p>Campaign Type: ${inquiry.campaign_type}</p>

        <p>Budget: ₹${inquiry.budget}</p>

        <br/>

        <b>NiryaMedia Team</b>
      `,
    }),
  });

  alert("Updated Successfully");
}
console.log("Inquiries:", inquiries);

  return (
    <main className="min-h-screen bg-[#07070b] text-white p-10">
      <div className="mb-8 flex items-center justify-between">

  <h1 className="text-4xl font-bold">
    Admin Dashboard
  </h1>

  <button
    onClick={logout}
    className="rounded-xl bg-red-600 px-5 py-2 font-semibold hover:bg-red-700"
  >
    Logout
  </button>

</div>
<div className="mb-10 grid gap-5 md:grid-cols-4">

  <div
  onClick={() => {
  setActiveTab("creators");
  setCreatorFilter("all");
}}
  className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500 hover:bg-purple-500/10"
>
    <p className="text-gray-400">Total Creators</p>

    <h2 className="mt-2 text-4xl font-bold text-purple-500">
      {creators.length}
    </h2>
  </div>

  <div
  onClick={() => {
  setActiveTab("creators");
  setCreatorFilter("featured");
}}
  className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-yellow-500 hover:bg-yellow-500/10"
>
    <p className="text-gray-400">Featured Creators</p>

    <h2 className="mt-2 text-4xl font-bold text-yellow-400">
      {creators.filter(c => c.featured).length}
    </h2>
  </div>

  <div
  onClick={() => {
  setActiveTab("creators");
  setCreatorFilter("pending");
}}
  className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-green-500 hover:bg-green-500/10"
>
    <p className="text-gray-400">Pending Creators</p>

    <h2 className="mt-2 text-4xl font-bold text-green-400">
      {creators.filter(c => c.status === "pending").length}
    </h2>
  </div>

  <div
  onClick={() => setActiveTab("inquiries")}
  className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500 hover:bg-blue-500/10"
>
    <p className="text-gray-400">New Inquiries</p>

    <h2 className="mt-2 text-4xl font-bold text-blue-400">
      {inquiries.filter(i => i.status === "New").length}
    </h2>
  </div>

</div>
<div className="mb-10 flex gap-4">

  <button
    onClick={() => setActiveTab("creators")}
    className={`rounded-xl px-6 py-3 font-semibold transition ${
      activeTab === "creators"
        ? "bg-purple-600 text-white"
        : "bg-white/10"
    }`}
  >
    👤 Creators
  </button>

  <button
    onClick={() => setActiveTab("inquiries")}
    className={`rounded-xl px-6 py-3 font-semibold transition ${
      activeTab === "inquiries"
        ? "bg-purple-600 text-white"
        : "bg-white/10"
    }`}
  >
    📩 Brand Inquiries
  </button>

</div>
      {activeTab === "creators" && (

<>

<input
  type="text"
  placeholder="🔍 Search creators..."
  value={creatorSearch}
  onChange={(e) => setCreatorSearch(e.target.value)}
  className="mb-6 w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none focus:border-purple-500"
/>

<div className="space-y-6">
  {creators
  .filter((creator) => {
    const matchesSearch = creator.name
      ?.toLowerCase()
      .includes(creatorSearch.toLowerCase());

    const matchesFilter =
      creatorFilter === "all"
        ? true
        : creatorFilter === "featured"
        ? creator.featured
        : creator.status === "pending";

    return matchesSearch && matchesFilter;
  })
  .map((creator) => (

          <div
            key={creator.id}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6"
          >

            <div className="flex items-center gap-5">

              <img
                src={creator.image}
                className="h-16 w-16 rounded-full object-cover"
                alt={creator.name}
              />

              <div>
                <h2 className="text-xl font-bold">
                  {creator.name}
                </h2>

                <p>{creator.email}</p>

                <p>{creator.subscribers} Subscribers</p>

                <p className="text-purple-400">
                  {creator.status}
                </p>
              </div>

            </div>

            <div className="flex gap-3">

  {creator.status === "pending" && (
    <button
      onClick={() => approveCreator(creator.id)}
      className="rounded-xl bg-green-600 px-5 py-2"
    >
      Approve
    </button>
  )}
<button
  onClick={() => toggleFeatured(creator.id, creator.featured)}
  className={`rounded-xl px-4 py-2 font-semibold ${
    creator.featured
      ? "bg-yellow-500 text-black"
      : "bg-purple-600 text-white"
  }`}
>
  {creator.featured ? "⭐ Featured" : "☆ Make Featured"}
</button>
<button
  onClick={() => setSelectedCreator(creator)}
  className="rounded-xl bg-blue-600 px-5 py-2"
>
  View
</button>
<button
  onClick={() => setEditingCreator(creator)}
  className="rounded-xl bg-purple-600 px-5 py-2"
>
  Edit
</button>
  <button
    onClick={() => rejectCreator(creator.id)}
    className="rounded-xl bg-red-600 px-5 py-2"
  >
    Delete
  </button>
</div>

          </div>

        ))}
</div>
</>
)}

{activeTab === "inquiries" && (
  <>

    <h2 className="mt-16 mb-6 text-3xl font-bold">
      Brand Inquiries
    </h2>

    <div className="space-y-6">

      {inquiries.map((item) => (
    <div
      key={item.id}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold">
            {item.brand_name}
          </h3>

          <p className="text-gray-400">
            {item.company}
          </p>

          <p className="mt-2">
            Status:
            <span className="ml-2 text-purple-400">
              {item.status}
            </span>
          </p>

          <p className="mt-2">
            Creator:
            <span className="ml-2 text-purple-400">
              {item.creator_name}
            </span>
          </p>

          <p className="mt-2">
            Budget: ₹{item.budget}
          </p>

           <p className="mt-2">
             Status:
             <span className="ml-2 text-purple-400">
               {item.status}
              </span>
            </p>

          <p>
            {item.campaign_type}
          </p>
           
        </div>

        <div className="flex gap-2">

  {item.status === "New" && (
    <>
      <button
        onClick={() => updateInquiryStatus(item.id, "Accepted")}
        className="rounded-xl bg-green-600 px-4 py-2"
      >
        Accept
      </button>

      <button
        onClick={() => updateInquiryStatus(item.id, "Rejected")}
        className="rounded-xl bg-red-600 px-4 py-2"
      >
        Reject
      </button>
    </>
  )}

  <button
    onClick={() => setSelectedInquiry(item)}
    className="rounded-xl bg-purple-600 px-5 py-2"
  >
    View
  </button>

</div>

      </div>
    </div>
  ))}
</div>
</>
)}
    {selectedInquiry && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div className="w-full max-w-xl rounded-3xl bg-[#111118] p-8">

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Brand Inquiry
        </h2>

        <button
          onClick={() => setSelectedInquiry(null)}
          className="text-2xl"
        >
          ✕
        </button>
        
      </div>

      <div className="mt-8 space-y-4">

        <p><b>Brand:</b> {selectedInquiry.brand_name}</p>

        <p><b>Company:</b> {selectedInquiry.company}</p>

        <p><b>Email:</b> {selectedInquiry.email}</p>

        <p><b>Phone:</b> {selectedInquiry.phone}</p>

        <p><b>Creator:</b> {selectedInquiry.creator_name}</p>

        <p><b>Budget:</b> ₹{selectedInquiry.budget}</p>

        <p><b>Campaign Type:</b> {selectedInquiry.campaign_type}</p>

        <p><b>Posting Date:</b> {selectedInquiry.posting_date}</p>

        <p><b>Campaign:</b></p>

        <div className="rounded-xl bg-white/5 p-4">
          {selectedInquiry.campaign}
        </div>

      </div>

    </div>
  </div>
)}
{selectedCreator && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

    <div className="w-full max-w-2xl rounded-3xl bg-[#111118] p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          Creator Details
        </h2>

        <button
          onClick={() => setSelectedCreator(null)}
          className="text-2xl"
        >
          ✕
        </button>

      </div>

      <div className="mt-8 flex items-center gap-6">

        <img
          src={selectedCreator.image}
          className="h-28 w-28 rounded-full object-cover"
        />

        <div>

          <h2 className="text-3xl font-bold">
            {selectedCreator.name}
          </h2>

          <p className="text-purple-400">
            {selectedCreator.niche}
          </p>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-5">

        <p><b>Email:</b> {selectedCreator.email}</p>

        <p><b>Phone:</b> {selectedCreator.phone}</p>

        <p><b>Subscribers:</b> {selectedCreator.subscribers}</p>

        <p><b>Monthly Views:</b> {selectedCreator.monthly_views}</p>

        <p><b>Platform:</b> {selectedCreator.platform}</p>

        <p><b>Engagement:</b> {selectedCreator.engagement}</p>

        <p><b>Country:</b> {selectedCreator.country}</p>

        <p><b>Language:</b> {selectedCreator.language}</p>

      </div>

      <div className="mt-8">

        <p className="font-bold">
          Bio
        </p>

        <div className="mt-3 rounded-xl bg-white/5 p-4">

          {selectedCreator.bio}

        </div>

      </div>

    </div>

  </div>
)}
{editingCreator && (
  <EditCreatorModal
    creator={editingCreator}
    setCreator={setEditingCreator}
    onClose={() => setEditingCreator(null)}
    onSave={saveCreator}
  />
)}
    </main>
  );
}