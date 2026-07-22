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

           <p className="mt-5">
            <span className="text-red-500">⚠️ Important</span> <h1 className="text-1xl font-bold">Please provide accurate subscriber count, monthly views, engagement rate, email address, and contact number. Verified information helps brands discover your profile and increases your chances of receiving collaboration opportunities.</h1>
           </p>

        </div>

        <ApplyForm />

      </div>
    </main>
  );
}