
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/About";
import { useEffect } from "react";
import { CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Code, Layout, Server, Database, Star, MessageSquare, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "/projects",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Portfolio CMS",
    description: "A customizable content management system for developers to showcase their work and blog posts.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma"],
    link: "/projects",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "Material UI"],
    link: "/projects",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating responsive, accessible, and user-friendly interfaces with modern JavaScript frameworks.",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Building scalable APIs and server-side applications with focus on performance and security.",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "Django"],
  },
  {
    title: "Database Management",
    description: "Designing efficient database schemas and optimizing queries for better performance.",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Software Architecture",
    description: "Developing robust software architecture with focus on scalability, maintainability and performance.",
    icon: Code,
    skills: ["Microservices", "RESTful APIs", "GraphQL", "Docker"],
  },
];

const testimonials = [
  {
    text: "Working with Sarita was a game-changer. Her expertise and problem-solving abilities helped us deliver our project on time and under budget.",
    name: "John Smith",
    position: "CTO at TechCorp",
    icon: MessageSquare,
  },
  {
    text: "Sarita's dedication to quality and attention to detail made her an invaluable asset to our team. Highly recommended!",
    name: "Emma Williams",
    position: "Product Manager",
    icon: Star,
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Hero />
      
      <AboutPreview />
      
      {/* Skills Section with enhanced design */}
      <section className="section relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              My Expertise
            </div>
            
            <AnimatedText
              text="Skills & Technologies"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              I've worked with a variety of technologies and frameworks to create seamless digital experiences. Here are some areas where I excel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AnimatedCard key={category.title} delay={index * 100} gradient>
                  <div className="p-6 h-full flex flex-col">
                    <div className="p-4 rounded-full bg-primary/10 w-fit mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <CardTitle>{category.title}</CardTitle>
                    
                    <CardContent className="mt-2 p-0 flex-grow">
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span key={skill} className="py-1 px-2 rounded-full bg-secondary text-secondary-foreground text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/skills">
              <Button className="shadow-sm hover:shadow-md transition-shadow">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section with improved visuals */}
      <section className="section bg-secondary/50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden -z-10 bg-gradient-to-br from-secondary/50 to-secondary/10" />
        
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              My Work
            </div>
            
            <AnimatedText
              text="Featured Projects"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Here are some of my recent projects that showcase my skills and expertise in software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <AnimatedCard key={project.title} delay={index * 100}>
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4 aspect-video rounded-md overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <CardTitle>{project.title}</CardTitle>
                  
                  <CardContent className="mt-2 p-0 flex-grow">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="py-1 px-2 rounded-full bg-secondary text-secondary-foreground text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-0 pt-4">
                    <Link to={project.link} className="text-primary flex items-center hover:underline">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button className="shadow-sm hover:shadow-md transition-shadow">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section (New) */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
              Testimonials
            </div>
            
            <AnimatedText
              text="What Clients Say"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Don't just take my word for it - here's what others have to say about working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              return (
                <AnimatedCard key={testimonial.name} delay={index * 150}>
                  <div className="p-6 relative">
                    <div className="absolute -top-4 -left-4 p-3 rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <blockquote className="text-lg italic mb-4">"{testimonial.text}"</blockquote>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/testimonials">
              <Button variant="outline">
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section with enhanced design */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5" />
        
        <div className="container-tight">
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-secondary/10 blur-3xl" />
            </div>
            
            <AnimatedText
              text="Let's Work Together"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="text-muted-foreground mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              I'm currently available for freelance work and full-time opportunities. If you're interested in working together, let's connect!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <Link to="/contact">
                <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
                  View My Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
