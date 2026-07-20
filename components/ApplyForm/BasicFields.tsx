"use client";

import NicheSelector from "./NicheSelector";

type Props = {
  formData: {
    name: string;
    email: string;
    phone: string;
    niche: string;
    youtube: string;
    instagram: string;
    subscribers: string;
  };

  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function BasicFields({
  formData,
  setFormData,
}: Props) {
  return (
    <div className="space-y-6">

      <input
        type="text"
        placeholder="👤 Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

      <input
        type="email"
        placeholder="📧 Email Address"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

      <input
        type="tel"
        placeholder="📱 Phone Number"
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

      <NicheSelector
        value={formData.niche}
        onChange={(value) =>
          setFormData({
            ...formData,
            niche: value,
          })
        }
      />

      <input
        type="url"
        placeholder="🎥 YouTube Channel Link"
        value={formData.youtube}
        onChange={(e) =>
          setFormData({
            ...formData,
            youtube: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
      />

      <input
        type="url"
        placeholder="📷 Instagram Profile Link"
        value={formData.instagram}
        onChange={(e) =>
          setFormData({
            ...formData,
            instagram: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
      />

      <input
        type="text"
        placeholder="👥 Subscribers"
        value={formData.subscribers}
        onChange={(e) =>
          setFormData({
            ...formData,
            subscribers: e.target.value,
          })
        }
        className="w-full rounded-xl bg-[#16161d] p-4 outline-none"
        required
      />

    </div>
  );
}