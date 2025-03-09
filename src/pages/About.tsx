
import { useEffect } from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { JourneySection } from "@/components/about/JourneySection";
import { ExperienceSection } from "@/components/about/ExperienceSection";
import { InterestsSection } from "@/components/about/InterestsSection";
import { CtaSection } from "@/components/about/CtaSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-12 md:py-20">
      {/* Hero Section */}
      <AboutHero />
      
      {/* Main Profile Section */}
      <JourneySection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Personal Interests */}
      <InterestsSection />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default About;
