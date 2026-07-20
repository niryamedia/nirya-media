"use client";

const brands = [
  "ASUS",
  "Intel",
  "NVIDIA",
  "Samsung",
  "Logitech",
  "MSI",
  "Corsair",
  "AMD",
];

export default function BrandSlider() {
  return (
    <section className="py-16 overflow-hidden">
      <h3 className="text-center text-gray-400 uppercase tracking-[0.3em] text-sm mb-10">
        Trusted By Brands
      </h3>

      <div className="flex gap-8 whitespace-nowrap animate-pulse justify-center flex-wrap">
        {brands.map((brand) => (
          <div
            key={brand}
            className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-gray-300"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}