"use client";

type Props = {
  creator: any;
  setCreator: (creator: any) => void;
  onSave: () => void;
  onClose: () => void;
};

export default function EditCreatorModal({
  creator,
  setCreator,
  onSave,
  onClose,
}: Props) {
  if (!creator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#111118] p-8">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Edit Creator
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <input
            value={creator.name}
            onChange={(e) =>
              setCreator({ ...creator, name: e.target.value })
            }
            placeholder="Name"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.email}
            onChange={(e) =>
              setCreator({ ...creator, email: e.target.value })
            }
            placeholder="Email"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.phone}
            onChange={(e) =>
              setCreator({ ...creator, phone: e.target.value })
            }
            placeholder="Phone"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.subscribers}
            onChange={(e) =>
              setCreator({
                ...creator,
                subscribers: e.target.value,
              })
            }
            placeholder="Subscribers"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.monthly_views}
            onChange={(e) =>
              setCreator({
                ...creator,
                monthly_views: e.target.value,
              })
            }
            placeholder="Monthly Views"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.engagement}
            onChange={(e) =>
              setCreator({
                ...creator,
                engagement: e.target.value,
              })
            }
            placeholder="Engagement"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.youtube}
            onChange={(e) =>
              setCreator({
                ...creator,
                youtube: e.target.value,
              })
            }
            placeholder="YouTube"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.instagram}
            onChange={(e) =>
              setCreator({
                ...creator,
                instagram: e.target.value,
              })
            }
            placeholder="Instagram"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.country}
            onChange={(e) =>
              setCreator({
                ...creator,
                country: e.target.value,
              })
            }
            placeholder="Country"
            className="rounded-xl bg-white/10 p-3"
          />

          <input
            value={creator.language}
            onChange={(e) =>
              setCreator({
                ...creator,
                language: e.target.value,
              })
            }
            placeholder="Language"
            className="rounded-xl bg-white/10 p-3"
          />

        </div>

        <textarea
          value={creator.bio}
          onChange={(e) =>
            setCreator({
              ...creator,
              bio: e.target.value,
            })
          }
          rows={5}
          placeholder="Bio"
          className="mt-5 w-full rounded-xl bg-white/10 p-4"
        />

        <button
          onClick={onSave}
          className="mt-8 w-full rounded-xl bg-purple-600 py-4 text-lg font-bold hover:bg-purple-700"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}