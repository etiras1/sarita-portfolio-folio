
import { AnimatedText } from "@/components/ui/AnimatedText";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const JourneySection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden glass">
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
            
            {/* Decorative elements */}
            <div className="absolute top-4 -right-4 w-1/2 h-1/2 -z-10 rounded-lg border border-border bg-secondary/30" />
            <div className="absolute -bottom-4 -left-4 w-1/2 h-1/2 -z-10 rounded-lg border border-border" />
          </div>
          
          <div>
            <AnimatedText
              text="My Journey"
              variant="heading-lg"
              animate="slide"
              className="mb-6"
            />
            
            <div className="space-y-4 text-muted-foreground">
              <p className="opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                With over 5 years of experience in software development, I specialize in building scalable web applications, responsive designs, and intuitive user interfaces. My journey in technology began with a Bachelor's degree in Computer Science, where I developed a strong foundation in programming principles and problem-solving.
              </p>
              <p className="opacity-0 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
                Throughout my career, I've worked with diverse teams on projects ranging from e-commerce platforms to content management systems. I'm passionate about clean code, accessibility, and staying current with emerging technologies and best practices.
              </p>
              <p className="opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                When I'm not coding, I enjoy contributing to open-source projects, writing technical blog posts, and mentoring aspiring developers. I believe in continuous learning and regularly pursue new certifications and skills to enhance my expertise.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:sneupane5@gmail.com"
                className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
