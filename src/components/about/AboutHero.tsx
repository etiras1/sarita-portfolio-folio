
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

export const AboutHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <AnimatedText
          text="About Me"
          variant="heading-lg"
          animate="slide"
          className="mb-6"
        />
        
        <div className="space-y-4 text-muted-foreground mb-8">
          <p className="opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Hello! I'm Sarita Neupane, a passionate software developer with over 5 years of experience in creating digital solutions that solve real-world problems. I specialize in full-stack development with a focus on creating scalable, maintainable, and user-friendly applications.
          </p>
          <p className="opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            My journey in technology began during my undergraduate studies in Computer Science, where I discovered my passion for building software. Since then, I've worked with various organizations, from startups to established companies, helping them achieve their technological goals.
          </p>
          <p className="opacity-0 animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Beyond coding, I'm passionate about mentoring junior developers, contributing to open-source projects, and staying updated with the latest industry trends. I believe in the power of technology to create positive change, and I'm always looking for opportunities to make an impact.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <Link to="/contact">
            <Button size="lg">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full aspect-square rounded-lg overflow-hidden glass">
          <img
            src="https://saritaneupane.com.np/assets/images/Sarita.jpg"
            alt="Sarita Neupane"
            className="w-full h-full object-cover opacity-0 animate-scale-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
            }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 -z-10 -translate-y-4 -translate-x-4 rounded-lg border border-border" />
      </div>
    </div>
  );
};
