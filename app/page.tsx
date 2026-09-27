import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyDevbit from "@/components/home/WhyDevbit";
import Process from "@/components/home/Process";
import AboutIntro from "@/components/home/AboutIntro";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import EnquirySection from "@/components/home/EnquirySection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <WhyDevbit />
      <Process />
      <AboutIntro />
      <Skills />
      <Testimonials />
      <FAQ />
      <CTASection />
      <EnquirySection />
    </>
  );
}
