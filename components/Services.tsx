const services = [
  {
    title: "Discover Creators",
    desc: "Explore verified creators across Gaming, Lifestyle, Tech and multiple other categories.",
    icon: "🔍",
  },
  {
    title: "Collaboration Requests",
    desc: "Send collaboration requests directly to creators through a simple and organized process.",
    icon: "🤝",
  },
  {
    title: "Instant Notifications",
    desc: "Brands and creators receive real-time email updates for every collaboration request.",
    icon: "⚡",
  },
  {
    title: "Creator Management",
    desc: "We help creators manage partnerships, communication and collaboration opportunities.",
    icon: "💼",
  },
  {
    title: "Campaign Coordination",
    desc: "From inquiry to confirmation, every collaboration stays organized and transparent.",
    icon: "📈",
  },
  {
    title: "Transparent Process",
    desc: "No hidden platform charges. Creators pay a 15% service commission only after receiving payment from the brand.",
    icon: "🛡️",
  },
];

export default function Services() {
  return (
    <section
  id="services"
  className="relative overflow-hidden py-32 px-6"
>
  <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[180px]" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-center text-5xl font-black md:text-6xl">
          Everything You Need For Successful <span className="text-purple-500">Collaborations</span>
        </h2>
<p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
  WHY NIRYAMEDIA
</p>
        <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
          Whether you&apos;re a brand looking for creators or a creator looking for opportunities, NiryaMedia brings both together through one seamless platform.
        </p>
<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-600/10 blur-3xl transition-all duration-500 group-hover:scale-150" />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-9 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-500 hover:bg-white/[0.08] hover:shadow-[0_0_50px_rgba(168,85,247,.25)]"
            >
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-3xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
  {service.icon}
</div>
<h3 className="mb-3 text-2xl font-bold">
  {service.title}
</h3>
              <p className="mt-4 text-gray-400 leading-7">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}