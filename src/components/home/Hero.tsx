
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4 py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm animate-fade-in">
              Software Developer
            </div>
            
            <AnimatedText
              text="Hi, I'm Sarita Neupane"
              variant="heading-xl"
              animate="reveal"
              className="mb-4"
            />
            
            <AnimatedText 
              text="I build scalable and efficient web applications"
              variant="heading-md" 
              animate="slide"
              delay={200}
              className="mb-6 text-muted-foreground"
            />
            
            <p className="max-w-md text-muted-foreground mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              I specialize in creating elegant, high-performance solutions that solve real-world problems. With a passion for clean code and intuitive user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <Button href="/contact" size="lg">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-border">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sarita Neupane"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x400?text=Sarita+Neupane";
                  }}
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 inset-0 rounded-full blur-2xl bg-primary/10 animate-pulse-subtle" />
            <div className="absolute top-8 -right-4 w-12 h-12 rounded-full bg-secondary animate-spin-slow opacity-70" />
            <div className="absolute bottom-12 -left-8 w-16 h-16 rounded-full border border-border animate-spin-slow opacity-70" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
