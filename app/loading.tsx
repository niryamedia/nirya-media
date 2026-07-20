export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07070A]">

      <div className="flex flex-col items-center">

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-purple-600/30 blur-2xl animate-pulse" />

          <div className="relative h-20 w-20 animate-spin rounded-full border-[5px] border-purple-600 border-t-transparent" />

        </div>

        <h1 className="mt-10 text-5xl font-black">
          Nirya<span className="text-purple-500">Media</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Connecting Brands With Creators...
        </p>

      </div>

    </main>
  );
}