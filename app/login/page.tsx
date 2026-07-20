"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent) {
  e.preventDefault();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert(error.message);
    return;
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session);

  router.push("/admin");
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07070A] px-6 text-white">
      <form
        onSubmit={login}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="text-center text-3xl font-bold">
          Admin Login
        </h1>

        <p className="mt-3 text-center text-gray-400">
          Sign in to access NiryaMedia Admin Panel
        </p>

        <input
          type="email"
          placeholder="Email"
          className="mt-8 w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 outline-none focus:border-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-4 w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 outline-none focus:border-purple-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 py-3 font-semibold transition hover:scale-105"
        >
          Login
        </button>
      </form>
    </main>
  );
}