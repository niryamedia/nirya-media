"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

import BasicFields from "./BasicFields";
import ImageUpload from "./ImageUpload";
import MoreDetails from "./MoreDetails";

export default function ApplyForm() {
  const [showMore, setShowMore] = useState(false);
  const [uploading, setUploading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase
    .from("creators")
    .insert([
      {
        ...formData,
        status: "pending",
      },
    ]);

  if (error) {
    console.error(error);
    alert("Application failed!");
    return;
  }

  alert("Application Submitted!");

  setFormData({
    name: "",
    email: "",
    phone: "",
    youtube: "",
    instagram: "",
    subscribers: "",
    monthly_views: "",
    niche: "",
    country: "",
    language: "",
    platform: "YouTube",
    engagement: "",
    image: "",
    bio: "",
  });

  setShowMore(false);
};
const uploadImage = async (file: File) => {
  try {
    setUploading(true);

    const fileExt = file.name.split(".").pop();

    const fileName = `${Date.now()}.${fileExt}`;

    const { error } = await supabase.storage
      .from("creator-images")
      .upload(fileName, file);

    if (error) throw error;

    const { data } = supabase.storage
      .from("creator-images")
      .getPublicUrl(fileName);

    setFormData((prev) => ({
      ...prev,
      image: data.publicUrl,
    }));

  } catch (err) {
    console.error(err);
    alert("Image upload failed.");
  } finally {
    setUploading(false);
  }
};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    youtube: "",
    instagram: "",
    subscribers: "",
    monthly_views: "",
    niche: "",
    country: "",
    language: "",
    platform: "YouTube",
    engagement: "",
    image: "",
    bio: "",
  });

  return (
  <form
    onSubmit={handleSubmit}
    className="space-y-6"
  >

      <BasicFields
        formData={formData}
        setFormData={setFormData}
      />

      <div className="mt-6">

        <ImageUpload
          uploading={uploading}
          image={formData.image}
          uploadImage={uploadImage}
        />

      </div>

      <button
        type="button"
        onClick={() => setShowMore(!showMore)}
        className="mt-6 w-full rounded-xl border border-purple-500 py-3 font-semibold"
      >
        {showMore ? "- Hide More Details" : "+ More Details"}
      </button>

      {showMore && (

        <div className="mt-6">

          <MoreDetails
            formData={formData}
            setFormData={setFormData}
          />

        </div>

      )}

      <button
  type="submit"
  className="mt-8 w-full rounded-xl bg-purple-600 py-4 font-bold hover:bg-purple-700 transition"
>
  Apply Now →
</button>

    </form>
  );
}