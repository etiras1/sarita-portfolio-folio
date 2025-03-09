import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/About";
import { useEffect } from "react";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Code, Layout, Server, Database } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and secure checkout.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "/projects",
  },
  {
    title: "Portfolio CMS",
    description: "A customizable content management system for developers to showcase their work and blog posts.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma"],
    link: "/projects",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    technologies: ["React", "Firebase", "Material UI"],
    link: "/projects",
  },
];

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating responsive, accessible, and user-friendly interfaces with modern JavaScript frameworks.",
    icon: <Layout className="h-6 w-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Building scalable APIs and server-side applications with focus on performance and security.",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "Python", "Django"],
  },
  {
    title: "Database Management",
    description: "Designing efficient database schemas and optimizing queries for better performance.",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Software Architecture",
    description: "Developing robust software architecture with focus on scalability, maintainability and performance.",
    icon: <Code className="h-6 w-6" />,
    skills: ["Microservices", "RESTful APIs", "GraphQL", "Docker"],
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Hero />
      
      <AboutPreview />
      
      {/* Skills Section */}
      <section className="section">
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
            {skillCategories.map((category, index) => (
              <Card key={category.title} delay={index * 100}>
                <div className="p-4 rounded-full bg-primary/10 w-fit mb-4">
                  {category.icon}
                </div>
                
                <CardTitle>{category.title}</CardTitle>
                
                <CardContent className="mt-2">
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="py-1 px-2 rounded-full bg-secondary text-secondary-foreground text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/skills">
              <Button>
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="section bg-secondary/50">
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
              <Card key={project.title} delay={index * 100}>
                <CardTitle>{project.title}</CardTitle>
                
                <CardContent className="mt-2">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="py-1 px-2 rounded-full bg-secondary text-secondary-foreground text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link to={project.link} className="text-primary flex items-center hover:underline">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button>
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container-tight">
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
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
                <Button size="lg">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">
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
