import { useEffect } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <section className="pt-20 pb-16">
        <div className="container">
          <div className="text-center">
            <div className="inline-block mb-3 py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              About Me
            </div>
            
            <AnimatedText
              text="Passionate Software Developer"
              variant="heading-xl"
              animate="reveal"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              I'm Sarita Neupane, a software developer with a passion for creating elegant, efficient, and user-friendly applications.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Profile Section */}
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
                    src="http://saritaneupane.com.np/assets/images/profile.jpg"
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
      
      {/* Experience Section */}
      <section className="section bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Experience & Education"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              My professional journey and educational background in the field of software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <div className="mb-8">
                <h3 className="heading-md mb-2 opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  Professional Experience
                </h3>
                <div className="w-16 h-1 bg-primary rounded-full opacity-0 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}></div>
              </div>
              
              <div className="space-y-8">
                {/* Experience 1 */}
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="heading-sm">Senior Software Developer</h4>
                  <div className="text-sm text-muted-foreground mb-2">TechInnovate Solutions • 2020 - Present</div>
                  <p className="text-muted-foreground">
                    Led the development of enterprise web applications using React, Node.js, and MongoDB. Collaborated with design and product teams to implement user-friendly interfaces and optimize performance.
                  </p>
                </div>
                
                {/* Experience 2 */}
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border opacity-0 animate-slide-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="heading-sm">Web Developer</h4>
                  <div className="text-sm text-muted-foreground mb-2">Digital Craft Agency • 2018 - 2020</div>
                  <p className="text-muted-foreground">
                    Developed responsive websites and e-commerce platforms for clients across various industries. Worked with JavaScript frameworks, HTML5, CSS3, and backend technologies like PHP and MySQL.
                  </p>
                </div>
                
                {/* Experience 3 */}
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border opacity-0 animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="heading-sm">Junior Developer</h4>
                  <div className="text-sm text-muted-foreground mb-2">Tech Startup • 2017 - 2018</div>
                  <p className="text-muted-foreground">
                    Assisted in building web applications and implementing UI components. Gained hands-on experience with modern JavaScript frameworks and agile development methodologies.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div>
              <div className="mb-8">
                <h3 className="heading-md mb-2 opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  Education
                </h3>
                <div className="w-16 h-1 bg-primary rounded-full opacity-0 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}></div>
              </div>
              
              <div className="space-y-8">
                {/* Education 1 */}
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="heading-sm">Master of Computer Science</h4>
                  <div className="text-sm text-muted-foreground mb-2">University of Technology • 2015 - 2017</div>
                  <p className="text-muted-foreground">
                    Specialized in software engineering and data structures. Completed a thesis on optimizing database queries for large-scale web applications.
                  </p>
                </div>
                
                {/* Education 2 */}
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border opacity-0 animate-slide-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="heading-sm">Bachelor of Computer Science</h4>
                  <div className="text-sm text-muted-foreground mb-2">City University • 2011 - 2015</div>
                  <p className="text-muted-foreground">
                    Studied programming fundamentals, algorithms, data structures, and web development. Participated in coding competitions and hackathons.
                  </p>
                </div>
                
                {/* Certifications */}
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border opacity-0 animate-slide-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2"></div>
                  <h4 className="heading-sm">Certifications</h4>
                  <div className="text-sm text-muted-foreground mb-2">Professional Development</div>
                  <ul className="text-muted-foreground list-disc pl-4 space-y-1">
                    <li>AWS Certified Developer Associate</li>
                    <li>Professional Scrum Master I (PSM I)</li>
                    <li>MongoDB Certified Developer</li>
                    <li>Google Cloud Platform Fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <AnimatedText
              text="Beyond Coding"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              When I'm not immersed in code, here are some things I enjoy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <h3 className="heading-sm mb-3">Open Source</h3>
              <p className="text-muted-foreground">
                I actively contribute to open-source projects and believe in giving back to the developer community. Some of my contributions include documentation improvements and bug fixes.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <h3 className="heading-sm mb-3">Technical Writing</h3>
              <p className="text-muted-foreground">
                I enjoy writing about software development, sharing tutorials, and explaining complex concepts in accessible ways through blog posts and documentation.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
              <h3 className="heading-sm mb-3">Mentoring</h3>
              <p className="text-muted-foreground">
                I'm passionate about helping new developers grow their skills through mentorship, code reviews, and sharing resources and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-secondary/50">
        <div className="container-tight">
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
            <AnimatedText
              text="Interested in Working Together?"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="text-muted-foreground mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <Button href="/contact" size="lg">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/projects" variant="outline" size="lg">
                View My Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
