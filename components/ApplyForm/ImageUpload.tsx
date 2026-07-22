"use client";

type Props = {
  uploading: boolean;
  image: string;
  uploadImage: (file: File) => void;
};

export default function ImageUpload({
  uploading,
  image,
  uploadImage,
}: Props) {
  return (
    <div className="space-y-3">

      <label className="text-sm font-medium text-gray-300">
        Creator Profile Image *
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            uploadImage(e.target.files[0]);
          }
        }}
        className="w-full rounded-xl border border-white/10 bg-[#16161d] p-4"
        required
      />

      {uploading && (
        <p className="text-sm text-purple-400">
          Uploading image...
        </p>
      )}

      {image && (
        <img
          src={image}
          alt="Profile"
          className="h-28 w-28 rounded-full border-2 border-purple-500 object-cover"
        />
      )}
    </div>
  );
}