
import { ArrowRight, Code, Coffee, Github } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-secondary/20 blur-2xl animate-pulse-subtle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-20 right-20 w-24 h-24 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-32 left-20 w-32 h-32 rounded-full border border-secondary/30 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-4 py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm animate-fade-in">
              Frontend & Backend Developer
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
            
            <div className="space-y-4 max-w-md">
              <p className="text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                I specialize in creating elegant, high-performance solutions that solve real-world problems. With a passion for clean code and intuitive user experiences.
              </p>
              
              <div className="flex flex-wrap gap-3 opacity-0 animate-slide-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm flex items-center">
                  <Code className="mr-1 h-3 w-3" /> React
                </span>
                <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm flex items-center">
                  <Code className="mr-1 h-3 w-3" /> TypeScript
                </span>
                <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm flex items-center">
                  <Code className="mr-1 h-3 w-3" /> Node.js
                </span>
                <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm flex items-center">
                  <Code className="mr-1 h-3 w-3" /> MongoDB
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 opacity-0 animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <Link to="/contact">
                <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
                  View Projects
                </Button>
              </Link>
              <a href="https://github.com/saritaneupane" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-4 py-2 text-sm font-medium bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 transition-colors">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-border shadow-xl">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <img
                  src="https://saritaneupane.com.np/assets/images/Sarita.jpg"
                  alt="Sarita Neupane"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </motion.div>
            </div>
            
            {/* Decorative elements with more visual interest */}
            <div className="absolute -z-10 inset-0 rounded-full blur-3xl bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse-subtle" />
            <div className="absolute top-8 -right-4 w-12 h-12 rounded-full bg-secondary animate-spin-slow opacity-70" />
            <div className="absolute bottom-12 -left-8 w-16 h-16 rounded-full border border-border animate-spin-slow opacity-70" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
            
            {/* Stats cards floating around the profile image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="absolute -bottom-4 -right-8 bg-background/70 backdrop-blur-lg p-2 rounded-lg border border-border shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">5+ Years Experience</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="absolute -top-4 -left-8 bg-background/70 backdrop-blur-lg p-2 rounded-lg border border-border shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">30+ Projects</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
