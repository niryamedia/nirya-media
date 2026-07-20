import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07070A] px-6 text-white">

      <div className="text-center">

        <h1 className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-8xl font-black text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-lg text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold transition hover:scale-105"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

      </div>

    </main>
  );
}