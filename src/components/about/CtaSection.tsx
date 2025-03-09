
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container-tight">
        <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
          <AnimatedText
            text="Let's Build Something Amazing Together"
            variant="heading-md"
            animate="slide"
            className="mb-4"
          />
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <Link to="/contact">
              <Button size="lg">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View My Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
