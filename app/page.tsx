import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CoursesSection from "@/components/CoursesSection";
import ReferSection from "@/components/ReferSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CoursesSection />
      <ReferSection />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}