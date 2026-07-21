import {
  Building2,
  Users,
  Mail,
  Handshake,
} from "lucide-react";
import WorkflowMobile from "./WorkflowMobile";

export default function Testimonials() {
  return (
    <>
      <WorkflowMobile />

      <section className="hidden lg:block relative overflow-hidden py-2">

        {/* Background Glow */}
        <div className="absolute left-1/2 top-24 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[160px]" />

        {/* Header */}
        <div className="relative mx-auto max-w-7xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-purple-400">
              OUR PROCESS
            </p>

            <h2 className="mt-6 text-5xl font-black md:text-7xl">

              <span className="relative inline-block">

                Our Workflow

                <span className="absolute -bottom-4 left-0 h-[3px] w-full overflow-hidden rounded-full bg-white/10">

                  <span className="absolute inset-0 animate-[workflow_3s_linear_infinite] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

                </span>

              </span>

            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-gray-400">

              From discovering creators to delivering successful campaigns,
              every collaboration follows one seamless workflow.

            </p>

          </div>

        </div>

        {/* Main Workflow Area */}
        <div className="relative mx-auto mt-0 h-[900px] max-w-[1700px]">

          {/* Outer Glow */}
          <div className="absolute left-1/2 top-[420px] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

          {/* Outer Ring */}
          <div className="absolute left-1/2 top-[420px] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-purple-500/20 animate-[spin_18s_linear_infinite]" />

          {/* Orbit Icons */}
          <div className="absolute left-1/2 top-[420px] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]">

            <Building2
              size={18}
              className="absolute left-1/2 top-0 -translate-x-1/2 text-blue-400"
            />

            <Mail
              size={18}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-400"
            />

            <Handshake
              size={18}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 text-amber-400"
            />

            <Users
              size={18}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-violet-400"
            />

          </div>

          {/* Inner Ring */}
          <div className="absolute left-1/2 top-[420px] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/30 border-dashed animate-[spinReverse_12s_linear_infinite]" />
{/* Inner Orbit Icons */}

<div className="absolute left-1/2 top-[420px] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 animate-[spinReverse_12s_linear_infinite]">

  {/* Top */}
  <Users
    size={16}
    className="absolute left-1/2 top-0 -translate-x-1/2 text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]"
  />

  {/* Right */}
  <Handshake
    size={16}
    className="absolute right-0 top-1/2 -translate-y-1/2 text-pink-400 drop-shadow-[0_0_10px_#ec4899]"
  />

  {/* Bottom */}
  <Building2
    size={16}
    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-indigo-400 drop-shadow-[0_0_10px_#818cf8]"
  />

  {/* Left */}
  <Mail
    size={16}
    className="absolute left-0 top-1/2 -translate-y-1/2 text-orange-400 drop-shadow-[0_0_10px_#fb923c]"
  />

</div>
          {/* Center Hub */}
          <div className="absolute left-1/2 top-[420px] z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-500/40 bg-[#121218]/90 backdrop-blur-2xl shadow-[0_0_80px_rgba(168,85,247,.45)]">

            <div className="text-center">

              <div className="mx-auto mb-3 h-3 w-3 animate-pulse rounded-full bg-purple-500" />

              <h3 className="text-3xl font-black tracking-wide">
                NiryaMedia
              </h3>

              <p className="mt-2 text-xs uppercase tracking-[0.40em] text-purple-300">
                THE WAY
                <br />
                TO WORK
              </p>

            </div>

          </div>

          {/* LEFT WORKFLOW - PART 2 */}
{/* ================= LEFT WORKFLOW (2A) ================= */}

<div className="absolute left-[5%] top-[20px] flex flex-col items-center">

  {/* Brand Card */}
  <div className="group relative">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Glass Card */}
    <div className="relative flex h-28 w-64 items-center justify-center rounded-full border border-blue-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-[0_0_60px_rgba(59,130,246,.7)]">

      <span className="mr-4 text-5xl">
        🏢
      </span>

      <span className="text-4xl font-black tracking-wide text-white">
        Brand
      </span>

    </div>

  </div>

  {/* Energy Rope */}
  <div
    className="relative mt-3"
    style={{
      width: "24px",
      height: "640px",
    }}
  >

    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 640"
      preserveAspectRatio="none"
      className="overflow-visible"
    >

      <path
        d="
        M12 0
        C4 80,20 160,12 240
        C4 320,20 400,12 480
        C4 560,20 600,12 640
        "
        fill="none"
        stroke="rgba(168,85,247,.35)"
        strokeWidth="2.5"
        strokeLinecap="round"
      >

        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="
          M12 0 C4 80,20 160,12 240 C4 320,20 400,12 480 C4 560,20 600,12 640;
          M12 0 C20 80,4 160,12 240 C20 320,4 400,12 480 C20 560,4 600,12 640;
          M12 0 C4 80,20 160,12 240 C4 320,20 400,12 480 C4 560,20 600,12 640
          "
        />

      </path>

      {/* Particle 1 */}
      <circle r="2.5" fill="#a855f7">

        <animateMotion
          dur="2.5s"
          repeatCount="indefinite"
          path="M12 0 C5 80,19 160,12 240 C5 320,19 400,12 480 C5 560,19 600,12 640"
        />

      </circle>

      {/* Particle 2 */}
      <circle r="2" fill="#22d3ee">

        <animateMotion
          begin="0.8s"
          dur="2.5s"
          repeatCount="indefinite"
          path="M12 0 C5 80,19 160,12 240 C5 320,19 400,12 480 C5 560,19 600,12 640"
        />

      </circle>

      {/* Particle 3 */}
      <circle r="2" fill="#ffffff">

        <animateMotion
          begin="1.5s"
          dur="2.5s"
          repeatCount="indefinite"
          path="M12 0 C5 80,19 160,12 240 C5 320,19 400,12 480 C5 560,19 600,12 640"
        />

      </circle>

    </svg>

  </div>
{/* ================= LEFT NODES (2B) ================= */}

{/* Browse Creators */}
<div className="absolute left-1/2 top-[150px] -translate-x-1/2 group">

  <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_60px_rgba(34,211,238,.7)]">

    <span className="text-center text-sm font-bold leading-5 text-white">
      🔍
      <br />
      Browse
      <br />
      Creators
    </span>

  </div>

</div>

{/* Open Creator Profile */}
<div className="absolute left-1/2 top-[300px] -translate-x-1/2 group">

  <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-violet-300 group-hover:shadow-[0_0_60px_rgba(168,85,247,.7)]">

    <span className="text-center text-[13px] font-bold leading-5 text-white">
      👤
      <br />
      Open
      <br />
      Creator
      <br />
      Profile
    </span>

  </div>

</div>

{/* Send Collaboration Request */}
<div className="absolute left-1/2 top-[450px] -translate-x-1/2 group">

  <div className="absolute inset-0 rounded-full bg-fuchsia-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-fuchsia-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-fuchsia-300 group-hover:shadow-[0_0_60px_rgba(217,70,239,.7)]">

    <span className="text-center text-[12px] font-bold leading-5 text-white">
      📨
      <br />
      Send
      <br />
      Collaboration
      <br />
      Request
    </span>

  </div>

</div>
{/* ================= LEFT NODES (2C) ================= */}

{/* Creator Receives Email */}
<div
  className="absolute left-1/2 top-[600px] -translate-x-1/2 group animate-[floatX_7s_ease-in-out_infinite]"
>
  <div className="absolute inset-0 rounded-full bg-emerald-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-300 group-hover:shadow-[0_0_60px_rgba(16,185,129,.7)]">

    <span className="text-center text-[12px] font-bold leading-5 text-white">
      📧
      <br />
      Creator
      <br />
      Receives
      <br />
      Email
    </span>

  </div>
</div>

{/* Collaboration Begins */}
<div
  className="absolute left-1/2 top-[750px] -translate-x-1/2 group animate-[floatX_7s_ease-in-out_infinite]"
>
  <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-orange-300/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-orange-300 group-hover:shadow-[0_0_60px_rgba(251,146,60,.7)]">

    <span className="text-center text-[12px] font-bold leading-5 text-white">
      🤝
      <br />
      Collaboration
      <br />
      Begins
    </span>

  </div>
</div>

{/* Rope Glow Points */}
<div className="absolute left-1/2 top-[120px] -translate-x-1/2">

  <div className="flex h-[640px] flex-col justify-between">

    {[1,2,3,4,5].map((i) => (
      <div
        key={i}
        className="h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7] animate-pulse"
      />
    ))}

  </div>

</div>
</div>
          {/* RIGHT WORKFLOW - PART 3 */}
{/* ================= RIGHT WORKFLOW (3A) ================= */}

<div className="absolute right-[5%] top-[20px] flex flex-col items-center">

  {/* Creator Card */}
  <div className="group relative">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Glass Card */}
    <div className="relative flex h-28 w-64 items-center justify-center rounded-full border border-pink-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-pink-300 group-hover:shadow-[0_0_60px_rgba(236,72,153,.7)]">

      <span className="mr-4 text-5xl">
        🎬
      </span>

      <span className="text-4xl font-black tracking-wide text-white">
        Creator
      </span>

    </div>

  </div>

  {/* Energy Rope */}
  <div
    className="relative mt-3"
    style={{
      width: "24px",
      height: "640px",
    }}
  >

    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 640"
      preserveAspectRatio="none"
      className="overflow-visible"
    >

      <path
        d="
        M12 0
        C20 80,4 160,12 240
        C20 320,4 400,12 480
        C20 560,4 600,12 640
        "
        fill="none"
        stroke="rgba(236,72,153,.35)"
        strokeWidth="2.5"
        strokeLinecap="round"
      >

        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="
          M12 0 C20 80,4 160,12 240 C20 320,4 400,12 480 C20 560,4 600,12 640;
          M12 0 C4 80,20 160,12 240 C4 320,20 400,12 480 C4 560,20 600,12 640;
          M12 0 C20 80,4 160,12 240 C20 320,4 400,12 480 C20 560,4 600,12 640
          "
        />

      </path>

      {/* Particle 1 */}
      <circle r="2.5" fill="#ec4899">
        <animateMotion
          dur="2.5s"
          repeatCount="indefinite"
          path="M12 0 C20 80,4 160,12 240 C20 320,4 400,12 480 C20 560,4 600,12 640"
        />
      </circle>

      {/* Particle 2 */}
      <circle r="2" fill="#ffffff">
        <animateMotion
          begin="0.8s"
          dur="2.5s"
          repeatCount="indefinite"
          path="M12 0 C20 80,4 160,12 240 C20 320,4 400,12 480 C20 560,4 600,12 640"
        />
      </circle>

      {/* Particle 3 */}
      <circle r="2" fill="#f472b6">
        <animateMotion
          begin="1.5s"
          dur="2.5s"
          repeatCount="indefinite"
          path="M12 0 C20 80,4 160,12 240 C20 320,4 400,12 480 C20 560,4 600,12 640"
        />
      </circle>

    </svg>

  </div>
{/* ================= RIGHT NODES (3B) ================= */}

{/* Apply to Join */}
<div className="absolute left-1/2 top-[150px] -translate-x-1/2 group">

  <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_60px_rgba(34,211,238,.7)]">

    <span className="text-center text-sm font-bold leading-5 text-white">
      📝
      <br />
      Apply
      <br />
      To Join
    </span>

  </div>

</div>

{/* Profile Review */}
<div className="absolute left-1/2 top-[300px] -translate-x-1/2 group">

  <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-violet-300 group-hover:shadow-[0_0_60px_rgba(168,85,247,.7)]">

    <span className="text-center text-[13px] font-bold leading-5 text-white">
      🪪
      <br />
      Profile
      <br />
      Review
    </span>

  </div>

</div>

{/* Get Approved */}
<div className="absolute left-1/2 top-[450px] -translate-x-1/2 group">

  <div className="absolute inset-0 rounded-full bg-fuchsia-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-fuchsia-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-fuchsia-300 group-hover:shadow-[0_0_60px_rgba(217,70,239,.7)]">

    <span className="text-center text-[12px] font-bold leading-5 text-white">
      ✅
      <br />
      Get
      <br />
      Approved
    </span>

  </div>

</div>
{/* ================= RIGHT NODES (3C) ================= */}

{/* Receive Brand Requests */}
<div
  className="absolute left-1/2 top-[600px] -translate-x-1/2 group animate-[floatX_7s_ease-in-out_infinite]"
>
  <div className="absolute inset-0 rounded-full bg-emerald-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-300 group-hover:shadow-[0_0_60px_rgba(16,185,129,.7)]">

    <span className="text-center text-[12px] font-bold leading-5 text-white">
      📩
      <br />
      Receive
      <br />
      Brand
      <br />
      Requests
    </span>

  </div>
</div>

{/* Start Collaborating */}
<div
  className="absolute left-1/2 top-[750px] -translate-x-1/2 group animate-[floatX_7s_ease-in-out_infinite]"
>
  <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-orange-300/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-orange-300 group-hover:shadow-[0_0_60px_rgba(251,146,60,.7)]">

    <span className="text-center text-[12px] font-bold leading-5 text-white">
      🚀
      <br />
      Start
      <br />
      Collaborating
    </span>

  </div>
</div>

{/* Rope Glow Points */}
<div className="absolute left-1/2 top-[120px] -translate-x-1/2 pointer-events-none">

  <div className="flex h-[640px] flex-col justify-between">

    {[1,2,3,4,5].map((i) => (
      <div
        key={i}
        className="h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_20px_#ec4899] animate-pulse"
      />
    ))}

  </div>

</div>
</div>
{/* ================= CONNECTION LINES ================= */}

{/* Left → Center */}
<div
  className="absolute top-[76px] h-[2px] overflow-hidden rounded-full bg-white/10"
  style={{
    left: "calc(5% + 256px)",
    width: "calc(50% - 340px)",
  }}
>
  <div className="h-full w-full animate-[workflow_2s_linear_infinite] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
</div>

{/* Center → Right */}
<div
  className="absolute top-[76px] h-[2px] overflow-hidden rounded-full bg-white/10"
  style={{
    left: "50%",
    width: "calc(50% - 340px)",
  }}
>
  <div className="h-full w-full animate-[workflow_2s_linear_infinite] bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
</div>

{/* Center Glow Pulse */}
<div className="absolute left-1/2 top-[76px] -translate-x-1/2">

  <div className="h-4 w-4 rounded-full bg-purple-500 shadow-[0_0_35px_#a855f7] animate-ping" />

  <div className="absolute inset-0 h-4 w-4 rounded-full bg-white animate-pulse" />

</div>
        </div>

      </section>
    </>
  );
}