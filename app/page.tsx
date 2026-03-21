import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CoursesSection from "@/components/CoursesSection";
import Pricing from "@/components/Pricing";
import ReferSection from "@/components/ReferSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Stats />
      <CoursesSection />
      <Pricing />
      <ReferSection />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}