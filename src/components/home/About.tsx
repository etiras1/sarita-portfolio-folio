
import { ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="section bg-secondary/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden glass">
              <img
                src="http://saritaneupane.com.np/assets/images/about.jpg"
                alt="Sarita Neupane working"
                className="w-full h-full object-cover opacity-0 animate-scale-up"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1573497019236-61f323342eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 -z-10 -translate-y-4 translate-x-4 rounded-lg border border-border" />
          </div>
          
          <div>
            <div className="inline-block mb-3 py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              About Me
            </div>
            
            <AnimatedText
              text="Software Developer with a passion for elegant solutions"
              variant="heading-lg"
              animate="slide"
              className="mb-6"
            />
            
            <div className="space-y-4 text-muted-foreground">
              <p className="opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                I'm a dedicated software developer with expertise in building scalable web applications and solving complex problems. With a strong foundation in both frontend and backend technologies, I create cohesive, user-centered digital experiences.
              </p>
              <p className="opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                My background in computer science and continuous learning approach keeps me at the forefront of emerging technologies. I'm passionate about crafting clean, maintainable code and delivering solutions that exceed expectations.
              </p>
            </div>
            
            <div className="mt-8 opacity-0 animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <Button href="/about" variant="outline">
                More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
