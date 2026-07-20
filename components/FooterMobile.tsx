export default function FooterMobile() {
  return (
    <footer className="block lg:hidden border-t border-white/10 bg-[#07070A]">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative px-6 py-14">

        {/* Logo */}
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-tight">
            Nirya<span className="text-purple-500">Media</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-400">
            Connecting Brands With Creators
          </p>
        </div>

        <div className="my-10 h-px bg-white/10"></div>
{/* Company */}
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10">

  <h3 className="text-lg font-bold text-white">
    Company
  </h3>

  <div className="space-y-3">

    <a
      href="/"
      className="block text-gray-400 transition hover:text-purple-400"
    >
      Home
    </a>

    <a
      href="/#services"
      className="block text-gray-400 transition hover:text-purple-400"
    >
      Services
    </a>

    <a
      href="/about"
      className="block text-gray-400 transition hover:text-purple-400"
    >
      About
    </a>

  </div>
{/* Divider */}
<div className="my-6" />

{/* Creators */}
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10">

  <h3 className="text-lg font-bold text-white">
    Creators
  </h3>

  <div className="space-y-3">

    <a
      href="/creators"
      className="block text-gray-400 transition hover:text-purple-400"
    >
      Explore Creators
    </a>

    <a
      href="/apply"
      className="block text-gray-400 transition hover:text-purple-400"
    >
      Join Network
    </a>

  </div>
{/* Divider */}
<div className="my-6" />

{/* Contact */}
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10">

  <h3 className="text-lg font-bold text-white">
    Contact
  </h3>

  <div className="space-y-3 text-gray-400">

    <p>Sri Ganganagar, Rajasthan</p>

    <a
      href="mailto:sunil@niryamedia.com"
      className="block break-all transition hover:text-purple-400"
    >
      sunil@niryamedia.com
    </a>

    <a
      href="mailto:riyapathak@niryamedia.com"
      className="block break-all transition hover:text-purple-400"
    >
      riyapathak@niryamedia.com
    </a>

  </div>
{/* Divider */}
<div className="my-6" />

{/* Social */}
<div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10">

  <h3 className="text-lg font-bold text-white">
    Social
  </h3>

  <div className="space-y-3">

    <a
      href="https://instagram.com/niryamedia"
      target="_blank"
      className="block text-gray-400 transition hover:text-pink-400"
    >
      📷 Instagram
    </a>

    <a
      href="https://chat.whatsapp.com/LkycdfMRhHUGQqiWF7qiXm"
      target="_blank"
      className="block text-gray-400 transition hover:text-green-400"
    >
      💬 WhatsApp
    </a>

    <a
      href="https://www.linkedin.com/in/niryamedia56"
      target="_blank"
      className="block text-gray-400 transition hover:text-blue-400"
    >
      💼 LinkedIn
    </a>

  </div>
<div className="mt-12 border-t border-white/10 pt-8 text-center">

  <p className="text-sm leading-7 text-gray-500">
    © 2026 <span className="font-semibold text-white">NiryaMedia</span>
    <br />

    <span className="text-yellow-400">
      Officially Registered MSME Enterprise
    </span>

    <br />

    <span className="text-gray-400">
      Made in India 🇮🇳
    </span>
  </p>

</div>
</div>
</div>
</div>
</div>
      </div>
    </footer>
  );
}