"use client";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function MoreDetails({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-6">

      <input
        type="text"
        placeholder="📊 Monthly Views"
        value={formData.monthly_views}
        onChange={(e) =>
          setFormData({
            ...formData,
            monthly_views: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

      <input
        type="text"
        placeholder="🌍 Country"
        value={formData.country}
        onChange={(e) =>
          setFormData({
            ...formData,
            country: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

      <input
        type="text"
        placeholder="🗣 Content Language (Hindi, English...)"
        value={formData.language}
        onChange={(e) =>
          setFormData({
            ...formData,
            language: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

      <select
        value={formData.platform}
        onChange={(e) =>
          setFormData({
            ...formData,
            platform: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      >
        <option value="YouTube">YouTube</option>
        <option value="Instagram">Instagram</option>
        <option value="YouTube + Instagram">
          YouTube + Instagram
        </option>
      </select>

      <input
        type="text"
        placeholder="📈 Engagement (Example 6.5%)"
        value={formData.engagement}
        onChange={(e) =>
          setFormData({
            ...formData,
            engagement: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

      <textarea
        rows={5}
        placeholder="📝 Tell us about yourself..."
        value={formData.bio}
        onChange={(e) =>
          setFormData({
            ...formData,
            bio: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

    </div>
  );
}