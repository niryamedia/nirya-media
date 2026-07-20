"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  open: boolean;
  onClose: () => void;
  creator: any;
};

export default function HireCreatorModal({
  open,
  onClose,
  creator,
}: Props) {
  const [formData, setFormData] = useState({
  brand_name: "",
  company: "",
  email: "",
  phone: "",
  budget: "",
  campaign_type: "",
  posting_date: "",
  campaign: "",
});

if (!open) return null;
const handleSubmit = async () => {
    console.log("Creator:", creator);
    console.log("INSERTING", {
  creator_id: creator.id,
  creator_name: creator.name,
  creator_email: creator.email,
  brand_name: formData.brand_name,
  company: formData.company,
  email: formData.email,
  phone: formData.phone,
  budget: formData.budget,
  campaign: formData.campaign,
  campaign_type: formData.campaign_type,
  posting_date: formData.posting_date,
});

if (!creator) {
  alert("Creator not found");
  return;
}
  const { error } = await supabase
  .from("inquiries")
  .insert([
    {
      creator_id: creator.id,
      creator_email: creator.email,
      creator_name: creator.name,
      brand_name: formData.brand_name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      budget: formData.budget,
      campaign: formData.campaign,
      campaign_type: formData.campaign_type,
      posting_date: formData.posting_date,
      status: "New",
    },
  ]);

  console.log(error);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Inquiry sent successfully!");
  onClose();
};
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

      <div className="w-full max-w-lg rounded-3xl bg-[#111118] border border-white/10 p-8">

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            Hire Creator
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        <p className="mt-2 text-gray-400">
          Fill the details below and our team will contact you shortly.
        </p>

        <div className="mt-8 space-y-5">

          <input
  placeholder="Brand Name"
  value={formData.brand_name}
  onChange={(e) =>
    setFormData({
      ...formData,
      brand_name: e.target.value,
    })
  }
  className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
/>

          <input
  placeholder="Company Name"
  value={formData.company}
  onChange={(e) =>
    setFormData({
      ...formData,
      company: e.target.value,
    })
  }
  className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
/>

          <input
  placeholder="Business Email"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
/>

          <input
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
/>

          <input
  placeholder="Campaign Budget"
  value={formData.budget}
  onChange={(e) =>
    setFormData({
      ...formData,
      budget: e.target.value,
    })
  }
  className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
/>
<input
  type="date"
  value={formData.posting_date}
  onChange={(e) =>
    setFormData({
      ...formData,
      posting_date: e.target.value,
    })
  }
  className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
/>
<select
  value={formData.campaign_type}
  onChange={(e) =>
    setFormData({
      ...formData,
      campaign_type: e.target.value,
    })
  }
  className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
>
  <option value="">Select Campaign Type</option>
  <option value="Dedicated YouTube Video">
    🎥 Dedicated YouTube Video
  </option>
  <option value="YouTube Shorts">
    📱 YouTube Shorts
  </option>
  <option value="Instagram Reel">
    📸 Instagram Reel
  </option>
  <option value="Instagram Story">
    📖 Instagram Story
  </option>
  <option value="Brand Integration">
    🤝 Brand Integration
  </option>
  <option value="Livestream">
    🔴 Livestream
  </option>
  <option value="UGC Content">
    🎬 UGC Content
  </option>
</select>

          <textarea
  rows={5}
  placeholder="Campaign Details..."
  value={formData.campaign}
  onChange={(e) =>
    setFormData({
      ...formData,
      campaign: e.target.value,
    })
  }
  className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
/>

          <button
  onClick={handleSubmit}
  className="w-full rounded-xl bg-purple-600 py-4 font-bold hover:bg-purple-700 transition"
>
  Send Inquiry
</button>

        </div>

      </div>

    </div>
  );
}