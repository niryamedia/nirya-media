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

    <section className="hidden lg:block relative overflow-hidden py-100">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 h-10 bottom-90">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-purple-400">
            OUR PROCESS
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">

            <span className="relative inline-block">

              Our Workflow

              {/* Animated Underline */}
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
      
<div className="relative mx-auto mt-24 flex h-180 w-72 items-center justify-center">

  {/* Outer Glow */}
  <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-[90px]" />

  {/* Pulse Ring */}
  <div className="absolute h-72 w-72 animate-ping rounded-full border border-purple-500/20 opacity-20" />

  {/* Ring */}
  <div className="absolute h-80 w-80 rounded-full border-2 border-dashed border-purple-500/20 animate-[spin_18s_linear_infinite]" />
  {/* Orbit Icons */}

<div className="absolute h-83 w-83 animate-[spin_10s_linear_infinite]">

  {/* Top */}
  <Building2
    size={18}
    className="absolute left-1/2 top-0 -translate-x-1/2 text-blue-400 drop-shadow-[0_0_10px_#60a5fa]"
  />

  {/* Right */}
  <Mail
    size={18}
    className="absolute right-0 top-1/2 -translate-y-1/2 text-emerald-400 drop-shadow-[0_0_10px_#34d399]"
  />

  {/* Bottom */}
  <Handshake
    size={18}
    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-amber-400 drop-shadow-[0_0_10px_#fbbf24]"
  />

  {/* Left */}
  <Users
    size={18}
    className="absolute left-0 top-1/2 -translate-y-1/2 text-violet-400 drop-shadow-[0_0_10px_#a855f7]"
  />

</div>

  {/* Ring */}
  <div className="absolute h-60 w-60 rounded-full border border-purple-500/30 border-dashed animate-[spinReverse_12s_linear_infinite]" />
  <div className="absolute h-61 w-61 animate-[spinReverse_10s_linear_infinite]">

  {/* Top */}
  <Users
    size={16}
    className="absolute left-1/2 top-0 -translate-x-1/2 text-cyan-400"
  />

  {/* Right */}
  <Handshake
    size={16}
    className="absolute right-0 top-1/2 -translate-y-1/2 text-pink-400"
  />

  {/* Bottom */}
  <Building2
    size={16}
    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-indigo-400"
  />

  {/* Left */}
  <Mail
    size={16}
    className="absolute left-0 top-1/2 -translate-y-1/2 text-orange-400"
  />

</div>

  {/* Center Hub */}
  <div className="relative z-20 flex h-40 w-40 items-center justify-center rounded-full border border-purple-500/40 bg-[#121218]/90 backdrop-blur-2xl shadow-[0_0_80px_rgba(168,85,247,.45)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_120px_rgba(168,85,247,.75)]">

    <div className="text-center">

      <div className="mx-auto mb-3 h-3 w-3 animate-pulse rounded-full bg-purple-500 shadow-[0_0_25px_#a855f7]" />

      <h3 className="text-3xl font-black tracking-wide">
        NiryaMedia
      </h3>

      <p className="mt-2 text-xs uppercase tracking-[0.40em] text-purple-300">
        The way 
        <br/>
        to work
      </p>

    </div>

  </div>

</div>
{/* Left Branch */}
<div className="absolute left-249 top-110 h-[2px] w-260 -translate-y-1/2 overflow-hidden rounded-full bg-white/10">
  <div className="h-full w-full animate-[flowX_1s_linear_infinite] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
</div>

{/* Long Energy Rope */}

<div
  className="absolute left-235 top-120 -translate-x-1/2"
  style={{
    height: "510px",   // 👈 Rope Height (change anytime)
    width: "24px",     // 👈 Rope Width (change anytime)
  }}
>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 400"
    preserveAspectRatio="none"
    className="overflow-visible"
  >
    {/* Rope */}
    <path
  d="
  M12 0
  C4 60,20 120,12 180
  C4 240,20 300,12 360
  C4 420,20 480,12 540
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
    M12 0 C4 60,20 120,12 180 C4 240,20 300,12 360 C4 420,20 480,12 540;
    M12 0 C20 60,4 120,12 180 C20 240,4 300,12 360 C20 420,4 480,12 540;
    M12 0 C4 60,20 120,12 180 C4 240,20 300,12 360 C4 420,20 480,12 540
    "
  />

</path>

    {/* Energy Particle 2 */}
    <circle r="2.5" fill="#22d3ee">
      <animateMotion
        begin="0.8s"
        dur="2s"
        repeatCount="indefinite"
        path="M12 0 C5 70,19 140,12 210 C5 280,19 350,12 420 C5 470,19 500,12 520"
      />
    </circle>

    {/* Energy Particle 3 */}
    <circle r="2" fill="#ffffff">
      <animateMotion
        begin="1.5s"
        dur="2s"
        repeatCount="indefinite"
        path="M12 0 C5 70,19 140,12 210 C5 280,19 350,12 420 C5 470,19 500,12 520"
      />
    </circle>
  </svg>
</div>
{/* Long Energy Rope */}

<div
  className="absolute left-485 top-120 -translate-x-1/2"
  style={{
    height: "510px",   // 👈 Rope Height (change anytime)
    width: "24px",     // 👈 Rope Width (change anytime)
  }}
>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 400"
    preserveAspectRatio="none"
    className="overflow-visible"
  >
    {/* Rope */}
    <path
  d="
  M12 0
  C4 60,20 120,12 180
  C4 240,20 300,12 360
  C4 420,20 480,12 540
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
    M12 0 C4 60,20 120,12 180 C4 240,20 300,12 360 C4 420,20 480,12 540;
    M12 0 C20 60,4 120,12 180 C20 240,4 300,12 360 C20 420,4 480,12 540;
    M12 0 C4 60,20 120,12 180 C4 240,20 300,12 360 C4 420,20 480,12 540
    "
  />

</path>

    {/* Energy Particle 2 */}
    <circle r="2.5" fill="#22d3ee">
      <animateMotion
        begin="0.8s"
        dur="2s"
        repeatCount="indefinite"
        path="M12 0 C5 70,19 140,12 210 C5 280,19 350,12 420 C5 470,19 500,12 520"
      />
    </circle>

    {/* Energy Particle 3 */}
    <circle r="2" fill="#ffffff">
      <animateMotion
        begin="1.5s"
        dur="2s"
        repeatCount="indefinite"
        path="M12 0 C5 70,19 140,12 210 C5 280,19 350,12 420 C5 470,19 500,12 520"
      />
    </circle>

  </svg>
</div>
{/* Brand Node */}

<div className="absolute left-207 top-110 -translate-y-1/2">

  <div className="group relative">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Glass Orb */}
    <div className="relative flex h-30 w-60 items-center justify-center rounded-full border border-blue-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-[0_0_60px_rgba(59,130,246,.7)]">

      <span className="text-4xl font-black tracking-wide text-white">
      🏢 
      Brand
      </span>

    </div>

  </div>

</div>
{/* Creator Node */}

<div className="absolute left-455 top-110 -translate-y-1/2">

  <div className="group relative">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Glass Orb */}
    <div className="relative flex h-30 w-60 items-center justify-center rounded-full border border-blue-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-blue-300 group-hover:shadow-[0_0_60px_rgba(59,130,246,.7)]">

      <span className="text-4xl font-black tracking-wide text-white">
      🎬 
      Creator
      </span>

    </div>

  </div>

</div>
{/* Browse Creators Node */}

<div className="absolute left-220 top-147 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Glass Orb */}
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_60px_rgba(34,211,238,.7)]">

      <span className="px-3 text-center text-sm font-bold leading-5 text-white">
      🔍
        <br /> 
      Browse
        <br />
        Creators
      </span>

    </div>

  </div>

</div>
{/* Apply to join NiryaMedia Node */}

<div className="absolute left-470 top-147 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Glass Orb */}
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-300 group-hover:shadow-[0_0_60px_rgba(34,211,238,.7)]">

      <span className="px-3 text-center text-sm font-bold leading-5 text-white">
      📝
        <br /> 
      Apply
        <br />
        to
        <br />
        Join
      </span>

    </div>

  </div>

</div>
{/* Open Creator Profile */}

<div className="absolute left-220 top-185 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Orb */}
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-violet-300 group-hover:shadow-[0_0_60px_rgba(168,85,247,.7)]">

      <span className="px-3 text-center text-[13px] font-bold leading-5 text-white">
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

</div>
{/* Profile Review */}

<div className="absolute left-470 top-185 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Orb */}
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-violet-300 group-hover:shadow-[0_0_60px_rgba(168,85,247,.7)]">

      <span className="px-3 text-center text-[13px] font-bold leading-5 text-white">
        🪪
        <br /> 
        Profile
        <br />
        Review
      </span>

    </div>

  </div>

</div>
{/* Send Collaboration Request */}

<div className="absolute left-220 top-220 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-fuchsia-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Orb */}
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-fuchsia-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-fuchsia-300 group-hover:shadow-[0_0_60px_rgba(217,70,239,.7)]">

      <span className="px-2 text-center text-[12px] font-bold leading-5 text-white">
        📨
        <br/>
        Send
        <br />
        Collaboration
        <br />
        Request
      </span>

    </div>

  </div>

</div>
{/* Get Approved */}

<div className="absolute left-470 top-220 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-fuchsia-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Orb */}
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-fuchsia-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-fuchsia-300 group-hover:shadow-[0_0_60px_rgba(217,70,239,.7)]">

      <span className="px-2 text-center text-[12px] font-bold leading-5 text-white">
        ✅️
        <br/>
        Get
        <br />
        Approved
       </span>

    </div>

  </div>

</div>
{/* Creator Receives Email Node */}

<div className="absolute left-220 top-260 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-emerald-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Glass Orb */}
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-300 group-hover:shadow-[0_0_60px_rgba(16,185,129,.7)]">

      <span className="px-2 text-center text-[12px] font-bold leading-5 text-white">
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

</div>
{/* Receive Brand Requests Node */}

<div className="absolute left-470 top-260 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-emerald-500/25 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

    {/* Glass Orb */}
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-emerald-400/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-300 group-hover:shadow-[0_0_60px_rgba(16,185,129,.7)]">

      <span className="px-2 text-center text-[12px] font-bold leading-5 text-white">
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

</div>
{/* Start Collaborating Node */}

<div className="absolute left-470 top-296 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
<div className="absolute inset-0 rounded-full bg-orange-400/20 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

{/* Glass Orb */}
<div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-orange-300/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-orange-300 group-hover:shadow-[0_0_60px_rgba(251,146,60,.7)]">
  <span className="px-2 text-center text-[12px] font-bold leading-5 text-white">
    🤝
    <br />
    Start
    <br />
    Collaborating
  </span>

</div>

  </div>

</div>
{/* Collaboration Begins Node */}

<div className="absolute left-220 top-296 -translate-y-1/2">

  <div className="group relative animate-[floatX_7s_ease-in-out_infinite]">

    {/* Glow */}
<div className="absolute inset-0 rounded-full bg-orange-400/20 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:blur-[70px]" />

{/* Glass Orb */}
<div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-orange-300/40 bg-white/5 backdrop-blur-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-orange-300 group-hover:shadow-[0_0_60px_rgba(251,146,60,.7)]">
  <span className="px-2 text-center text-[12px] font-bold leading-5 text-white">
    🤝
    <br />
    Collaboration
    <br />
    Begins
  </span>

</div>

  </div>

</div>
    </section>
</>
    );
}