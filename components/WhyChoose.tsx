import {
  ShieldCheck,
  Users,
  BarChart3,
  Rocket,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Creators",
    desc: "Every creator is manually reviewed for quality and authenticity.",
  },
  {
    icon: Users,
    title: "300+ Premium Creators",
    desc: "Access creators across Gaming, Finance, Tech and Lifestyle.",
  },
  {
    icon: Rocket,
    title: "Fast Campaign Launch",
    desc: "Launch influencer campaigns within days, not weeks.",
  },
  {
    icon: BadgeCheck,
    title: "Brand Safe",
    desc: "Work only with trusted creators that match your brand values.",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    desc: "Detailed analytics with reach, engagement and ROI insights.",
  },
  {
    icon: Headphones,
    title: "Dedicated Manager",
    desc: "A campaign manager handles everything from start to finish.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Why Choose <span className="text-purple-500">Nirya Media</span>
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          Everything your brand needs to execute successful influencer campaigns.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}