import FooterMobile from "./FooterMobile";
export default function Footer() {
  return (
  <>
    {/* Desktop Footer */}
    <div className="hidden lg:block">
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#07070A]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <h2 className="text-5xl font-black tracking-tight">
            Nirya<span className="text-purple-500">Media</span>
          </h2>

          <p className="mt-5 max-w-xl text-center text-lg leading-8 text-gray-400">
            Connecting Brands With Creators
          </p>

        </div>

        {/* Divider */}

        <div className="my-16 h-px w-full bg-white/10" />

      </div>
      {/* ================= LEFT SIDE ================= */}

<div
  className="
    relative

    left-[285px]     /* Left / Right */
    top-[-90px]      /* Up / Down */

    w-full
    max-w-550px
  "
>
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

  {/* Company */}

  <div>

    <h3 className="mb-6 text-lg font-bold text-white">
      Company
    </h3>

    <div className="space-y-4">

      <a href="/" className="block text-gray-400 transition hover:text-purple-400">
        Home
      </a>

      <a href="/#services" className="block text-gray-400 transition hover:text-purple-400">
        Services
      </a>

      <a href="/about" className="block text-gray-400 transition hover:text-purple-400">
        About
      </a>
         
    </div>

  </div>

  {/* Creators */}

  <div>

    <h3 className="mb-6 text-lg font-bold text-white">
      Creators
    </h3>

    <div className="space-y-4">

      <a href="/creators" className="block text-gray-400 transition hover:text-purple-400">
        Explore Creators
      </a>

      <a href="/apply" className="block text-gray-400 transition hover:text-purple-400">
        Join Network
      </a>

    </div>

  </div>

  {/* Contact */}

  <div>

    <h3 className="mb-6 text-lg font-bold text-white">
      Contact
    </h3>

    <div className="space-y-4 text-gray-400">

      <p>Sri Ganganagar, Rajasthan</p>

      <a
        href="mailto:sunil@niryamedia.com"
        className="block transition hover:text-purple-400"
      >
        sunil@niryamedia.com
      </a>

      <a
        href="mailto:riyapathak@niryamedia.com"
        className="block transition hover:text-purple-400"
      >
        riyapathak@niryamedia.com
      </a>

    </div>

  </div>

  {/* Social */}

  <div>

    <h3 className="mb-6 text-lg font-bold text-white">
      Social
    </h3>

    <div className="space-y-4">

      <a
        href="https://instagram.com/niryamedia"
        target="_blank"
        className="block text-gray-400 transition hover:text-pink-400"
      >
        Instagram
      </a>

      <a
        href="https://chat.whatsapp.com/LkycdfMRhHUGQqiWF7qiXm"
        target="_blank"
        className="block text-gray-400 transition hover:text-green-400"
      >
        WhatsApp
      </a>

      <a
        href="https://www.linkedin.com/in/niryamedia56"
        target="_blank"
        className="block text-gray-400 transition hover:text-green-400"
      >
        Limkedin
      </a>      

    </div>

  </div>

</div>
</div>
<div
  className="
    relative

    left-[25px]     /* Left / Right */
    top-[-50px]      /* Up / Down */

    w-full
    max-w-400px
  "
>
<div className="mt-16 border-t border-white/10 pt-8 text-center">

  <p className="text-sm text-gray-500">
    © 2026 <span className="font-semibold text-white">NiryaMedia</span>
    <span className="mx-2 text-gray-700">•</span>

    <span className="text-yellow-400">
      Officially Registered MSME Enterprise
    </span>

    <span className="mx-2 text-gray-700">•</span>

    <span className="text-gray-400">
      Made in India 🇮🇳
    </span>

  </p>

</div>
</div>
          </footer>
    </div>

    {/* Mobile Footer */}
    <FooterMobile />
  </>
);
}