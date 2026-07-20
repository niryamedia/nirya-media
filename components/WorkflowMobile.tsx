"use client";
import {
  Building2,
  Users,
  Mail,
  Handshake,
} from "lucide-react";
export default function WorkflowMobile() {
  return (
    <section className="block lg:hidden relative overflow-hidden py-24 px-5 bg-[#07070A]">

      <div className="mx-auto max-w-sm px-6 text-center">

        <p className="text-xs uppercase tracking-[8px] text-purple-400">
          OUR PROCESS
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          Our Workflow
        </h2>

        <div className="mx-auto mt-6 h-[3px] w-40 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        <p className="mt-8 text-lg leading-9 text-gray-400">
          From discovering creators to delivering successful campaigns,
          every collaboration follows one seamless workflow.
        </p>

      </div>
<div className="relative mx-auto mt-16 flex h-72 w-72 items-center justify-center">

  {/* Glow */}
  <div className="absolute h-72 w-72 rounded-full bg-purple-600/20 blur-[90px]" />

  {/* Outer Ring */}
<div className="absolute h-72 w-72 rounded-full border border-dashed border-purple-500/20 animate-[spin_18s_linear_infinite]" />
<div className="absolute h-76 w-76 animate-[spin_18s_linear_infinite]">

  {/* Top */}
  <Building2
    size={22}
    className="absolute left-1/2 top-0 -translate-x-1/2 text-cyan-400"
  />

  {/* Right */}
  <Mail
    size={22}
    className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-400"
  />

  {/* Bottom */}
  <Handshake
    size={22}
    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-yellow-400"
  />

  {/* Left */}
  <Users
    size={22}
    className="absolute left-0 top-1/2 -translate-y-1/2 text-purple-400"
  />

</div>

{/* Inner Ring */}
<div className="absolute h-56 w-56 rounded-full border border-dashed border-purple-500/20 animate-[spinReverse_12s_linear_infinite]" />
<div className="absolute h-59 w-59 animate-[spinReverse_12s_linear_infinite]">

  <Users
    size={18}
    className="absolute left-1/2 top-0 -translate-x-1/2 text-pink-400"
  />

  <Handshake
    size={18}
    className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-400"
  />

  <Building2
    size={18}
    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-blue-400"
  />

  <Mail
    size={18}
    className="absolute left-0 top-1/2 -translate-y-1/2 text-green-400"
  />

</div>

  {/* Center */}
  <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border border-purple-500/30 bg-[#121218]/90 shadow-[0_0_60px_rgba(168,85,247,.45)] backdrop-blur-xl">

    <div className="mb-3 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7]" />

    <h3 className="text-3xl font-black">
      NiryaMedia
    </h3>

    <p className="mt-2 text-center text-xs uppercase tracking-[0.45em] text-purple-300">
      THE WAY
      <br />
      TO WORK
    </p>

  </div>

</div>
<div className="relative top-10 mb-10 flex items-start gap-5">

  {/* Dot */}
  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 shadow-[0_0_25px_rgba(168,85,247,.6)]">
    🏢
  </div>

  {/* Card */}
  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl animate-[floatCard_4s_ease-in-out_infinite]">

    <h3 className="text-lg font-bold">
      Brand Joins NiryaMedia
    </h3>

    <p className="mt-2 text-sm leading-7 text-gray-400">
      Brands browse verified creators and submit campaign details directly through the platform.
    </p>

  </div>

</div>
<div className="relative top-10 mb-10 flex items-start gap-5">

  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_25px_rgba(34,211,238,.6)]">
    🔍
  </div>

  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl animate-[floatCard_4s_ease-in-out_infinite]">
    <h3 className="text-lg font-bold">
      Browse Creators
    </h3>

    <p className="mt-2 text-sm leading-7 text-gray-400">
      Filter creators by niche, language, platform and audience to find the perfect match.
    </p>
  </div>

</div>
<div className="relative top-10 mb-10 flex items-start gap-5">

  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-violet-500 shadow-[0_0_25px_rgba(168,85,247,.6)]">
    👤
  </div>

  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl animate-[floatCard_4s_ease-in-out_infinite]">
    <h3 className="text-lg font-bold">
      View Creator Profile
    </h3>

    <p className="mt-2 text-sm leading-7 text-gray-400">
      Check audience insights, engagement, previous collaborations and pricing before sending a request.
    </p>
  </div>

</div>
<div className="relative top-10 mb-10 flex items-start gap-5">

  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500 shadow-[0_0_25px_rgba(217,70,239,.6)]">
    📨
  </div>

  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl animate-[floatCard_4s_ease-in-out_infinite]">
    <h3 className="text-lg font-bold">
      Send Collaboration Request
    </h3>

    <p className="mt-2 text-sm leading-7 text-gray-400">
      Brands submit campaign details, deliverables and budget directly through NiryaMedia.
    </p>
  </div>

</div>
<div className="relative top-10 mb-10 flex items-start gap-5">

  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,.6)]">
    ✅
  </div>

  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl animate-[floatCard_4s_ease-in-out_infinite]">
    <h3 className="text-lg font-bold">
      Review & Approval
    </h3>

    <p className="mt-2 text-sm leading-7 text-gray-400">
      Our team verifies every request before forwarding it, ensuring complete transparency for both sides.
    </p>
  </div>

</div>
<div className="relative top-10 mb-10 flex items-start gap-5">

  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,.6)]">
    📧
  </div>

  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl animate-[floatCard_4s_ease-in-out_infinite]">
    <h3 className="text-lg font-bold">
      Automatic Email Updates
    </h3>

    <p className="mt-2 text-sm leading-7 text-gray-400">
      Both brand and creator receive instant email notifications for approvals, rejections and every status update.
    </p>
  </div>

</div>
<div className="relative top-10 mb-10 flex items-start gap-5">

  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 shadow-[0_0_25px_rgba(234,179,8,.6)]">
    🤝
  </div>

  <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl animate-[floatCard_4s_ease-in-out_infinite]">
    <h3 className="text-lg font-bold">
      Collaboration Begins
    </h3>

    <p className="mt-2 text-sm leading-7 text-gray-400">
      Once both parties agree, the collaboration starts with complete transparency from beginning to end.
    </p>
  </div>

</div>
    </section>
  );
}