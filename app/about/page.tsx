import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07070A] text-white">
<div className="mx-auto max-w-7xl px-6 pt-8">

  <Link
    href="/"
    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-purple-500 hover:bg-purple-500/10"
  >
    <ArrowLeft size={18} />
    Home
  </Link>

</div>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-40 pb-32">

        {/* Purple Glow */}
        <div className="absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[180px]" />

        <div className="relative mx-auto max-w-6xl text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2">

            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

            <span className="text-sm font-medium text-purple-300">
              ABOUT NIRYAMEDIA
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-10 text-5xl font-black leading-tight md:text-7xl">

            Building Meaningful

            <br />

            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Brand & Creator
            </span>

            <br />

            Relationships

          </h1>

          {/* Description */}

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400">

            NiryaMedia is an officially registered MSME influencer marketing
            agency helping brands discover verified creators and build
            authentic, high-performing campaigns through transparency,
            technology and long-term partnerships.

          </p>

          {/* Trust Badge */}

          <div className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-500/10 px-6 py-4 backdrop-blur-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/40 bg-purple-500/15">

              🛡

            </div>

            <div className="text-left">

              <p className="font-semibold text-sm md:text-base text-yellow-400">
                Officially Registered MSME Enterprise
              </p>

              <p className="text-sm text-gray-300">
                Recognized by Government of India
              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link
              href="/creators"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 font-semibold transition hover:scale-105"
            >
              Explore Creators
            </Link>

            </div>

        </div>

      </section>
{/* ================================================= */}
{/*              FOUNDER'S JOURNAL                     */}
{/* ================================================= */}

<section className="relative py-1 px-6">

  <div className="mx-auto max-w-5xl">

    {/* Heading */}

    <div className="mb-24 text-center">

      <p className="uppercase tracking-[0.45em] text-purple-400">

        Founder Journal

      </p>

      <h2 className="mt-6 text-4xl md:text-6xl font-black">

        The Story Behind

        <span className="text-purple-500">
          {" "}NiryaMedia
        </span>

      </h2>

      <p className="mt-8 text-gray-500">

        Every company has a beginning.
        This is ours.

      </p>

    </div>


    {/* Paper */}

    <div className="relative overflow-hidden rounded-[40px] border border-[#4b3d24] bg-gradient-to-b from-[#2a2117] via-[#1f1812] to-[#18130f] p-6 md:p-16 shadow-[0_0_100px_rgba(0,0,0,.5)]">

      {/* Paper Texture */}

      <div className="absolute inset-0 opacity-[0.05]">

        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle,#ffffff 1px,transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

      </div>

      {/* Title */}

      <h3 className="relative text-center font-serif text-5xl text-[#f2dfb5]">

        Chapter I

      </h3>

      <p className="relative mt-3 text-center text-lg italic text-[#c9b183]">

        The Beginning

      </p>

      {/* Divider */}

      <div className="relative mx-auto my-10 h-px w-52 bg-[#8b6b35]" />

      {/* Story */}

      <div className="relative space-y-8 font-serif text-lg md:text-[22px] leading-9 md:leading-[2.2] text-[#e7d3aa]">

        <p>

          <span className="float-left mr-3 text-5xl md:text-7xl font-bold leading-none text-[#ffdd8b]">

            M

          </span>

          y name is <strong>Sunil Kumar</strong>, and I come from
          Sri Ganganagar, Rajasthan.

          Back in <strong>2021</strong>, during the lockdown,
          I made one of the biggest decisions of my life.

          I left my central government job and stepped into a world
          I knew almost nothing about.

        </p>

        <p>

          At that time I started my own gaming channel.

          A friend introduced me to Discord, and what looked like
          just another chatting platform slowly became the place
          where everything changed.

        </p>

        <p>

          I began helping creators manage their Discord communities.

          One of my earliest opportunities came while working with

          <strong> Jasus King </strong>

          where I closed my very first Minecraft sponsorship.

          I didn't realize it then...

          but that single deal quietly changed the direction of my career.

        </p>
{/* ========================================== */}
{/* Chapter II */}
{/* ========================================== */}

<div className="relative mt-24">

  <div className="mx-auto mb-10 h-px w-60 bg-[#8b6b35]" />

  <h3 className="text-center font-serif text-5xl text-[#f2dfb5]">
    Chapter II
  </h3>

  <p className="mt-3 text-center text-lg italic text-[#c9b183]">
    Learning The Creator Economy
  </p>

  <div className="mt-12 space-y-10 font-serif text-[22px] leading-[2.2] text-[#e7d3aa]">

    <p>

      What started as a hobby soon became a passion.

      Every day on Discord introduced me to new creators,
      new communities and new opportunities.

      I wasn't just watching the creator economy...

      I was becoming a small part of it.

    </p>

    <p>

      As time passed, I began working behind the scenes
      with some of India's fastest-growing gaming creators.

      My role wasn't always visible on camera.

      I worked as a recording manager,
      helped creators with production,
      community management and campaign coordination.

    </p>

    <p>

      Working alongside creators like

      <strong> Niz Gamer </strong>

      and continuing my journey with

      <strong> SenpaiSpider </strong>

      taught me something no course or book ever could.

      I learned how creators actually receive sponsorships,
      how negotiations happen,
      how outreach works,
      and what brands truly expect before investing in a campaign.

    </p>

    <p>

      Every creator had a different story.

      Every brand had different expectations.

      But one thing remained the same...

      <span className="italic">

        Great collaborations always started with trust.

      </span>

    </p>

    <p>

      During this journey,
      I also started collaborating with several outreach professionals.

      Together,
      we successfully facilitated

      <strong> 150+ brand collaborations </strong>

      across gaming and creator communities.

      Every campaign gave me another lesson.

      Every conversation helped me understand the industry even better.

    </p>
{/* ========================================== */}
{/* Chapter III */}
{/* ========================================== */}

<div className="relative mt-24">

  <div className="mx-auto mb-10 h-px w-60 bg-[#8b6b35]" />

  <h3 className="text-center font-serif text-5xl text-[#f2dfb5]">
    Chapter III
  </h3>

  <p className="mt-3 text-center text-lg italic text-[#c9b183]">
    The Birth of NiryaMedia
  </p>

  <div className="mt-12 space-y-10 font-serif text-[22px] leading-[2.2] text-[#e7d3aa]">

    <p>

      By 2026, after years of working behind the scenes with creators,
      brands and outreach professionals, I had learned how the creator
      economy actually worked.

      I had seen successful collaborations, but I had also witnessed
      something that kept bothering me.

    </p>

    <p>

      Many creators never even knew when a brand had contacted their agency.

      Brands often had no visibility into what happened after submitting
      a campaign.

      Sometimes prices were inflated far beyond the creator's actual rate,
      leaving both brands and creators disappointed.

    </p>

    <p>

      The industry didn't need another agency.

      It needed transparency.

    </p>

    <p>

      Around the same time, my partner
      <strong> Riya Pathak </strong>
      became part of this journey.

      We spent countless hours discussing how influencer marketing
      should actually work.

      Every conversation led us back to one simple question...

    </p>

  </div>

  {/* Main Quote */}

  <div className="my-20 rounded-[40px] border border-[#8b6b35]/40 bg-[#2d241b]/60 p-14 text-center">

    <p className="font-serif text-3xl md:text-5xl italic leading-relaxed text-[#ffe3a1]">

      "What if complete transparency
      <br />
      became the standard?"

    </p>

  </div>

  <div className="space-y-10 font-serif text-[22px] leading-[2.2] text-[#e7d3aa]">

    <p>

      That single question became the foundation of
      <strong> NiryaMedia.</strong>

    </p>

    <p>

      Together, we decided to build an agency where
      creators never have to wonder whether a sponsorship
      opportunity arrived, and brands never have to wonder
      what is happening after they submit a campaign.

    </p>

    <p>

      That's why NiryaMedia includes a transparent workflow
      supported by an automated email system.

      Every campaign submission,
      every approval,
      every rejection,
      and every important update is shared with the people involved.

    </p>

    <p>

      We believe trust should never depend on assumptions.

      It should be built directly into the process.

    </p>

    <p>

      Today, NiryaMedia continues to grow with one mission—

      <span className="italic">

        To help every brand find the right creator,
        and every creator find the right opportunity,
        through honesty, transparency and long-term partnerships.

      </span>

    </p>

  </div>

</div>

{/* ========================================== */}
{/* MSME Registration */}
{/* ========================================== */}

<div className="mt-32 rounded-[40px] ... p-6 md:p-14 text-center">

  <p className="uppercase tracking-[0.45em] text-[#c9b183]">
    Official Registration
  </p>

  <h2 className="mt-6 font-serif text-5xl text-[#ffe3a1]">
    Officially Registered
    <br />
    MSME Enterprise
  </h2>

  <div className="mx-auto mt-10 h-px w-56 bg-[#8b6b35]" />

  <p className="mt-10 text-xl text-[#e7d3aa]">
    Government of India
  </p>

  <p className="mt-6 font-mono text-xl md:text-3xl font-bold text-white break-all">
    UDYAM-RJ-15-0123201
  </p>

  <p className="mt-6 text-lg text-[#c9b183]">
    Registered under the Ministry of Micro, Small & Medium Enterprises
  </p>

</div>

{/* ========================================== */}
{/* Founders */}
{/* ========================================== */}

<div className="mt-28 text-center">

  <div className="mx-auto h-px w-40 bg-[#8b6b35]" />

  <p className="mt-14 font-serif text-4xl italic text-[#ffe3a1]">

    "We're not building another influencer marketing agency.

    <br /><br />

    We're building trust between brands and creators."

  </p>

  <div className="mt-16">

    <h3 className="text-3xl font-bold text-white">
      Sunil Kumar & Riya Pathak
    </h3>

    <p className="mt-3 text-gray-400">
      Founders • NiryaMedia
    </p>

  </div>

</div>
  </div>

</div>
      </div>

    </div>

  </div>

</section>
    </main>
  );
}