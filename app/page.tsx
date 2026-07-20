import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedCreators from "@/components/FeaturedCreators";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07070A] text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[140px]" />

      <Navbar />

      <Hero />

      <FeaturedCreators />

      <Stats />

      <Testimonials />

      <WhyChoose />

      <Services />

      <Footer/>

          </main>
  );
}