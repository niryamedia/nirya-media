import ApplyForm from "@/components/ApplyForm/ApplyForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#07070b] text-white py-24">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold">
            Become a <span className="text-purple-500">Creator</span>
          </h1>

          <p className="mt-4 text-gray-400">
            Join Nirya Media and start collaborating with top brands.
          </p>
        </div>

        <ApplyForm />

      </div>
    </main>
  );
}