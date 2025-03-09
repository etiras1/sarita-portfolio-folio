
import { useEffect } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and secure checkout.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Portfolio CMS",
    description: "A customizable content management system for developers to showcase their work and blog posts.",
    image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered tool that helps users generate various types of content like blog posts and social media captions.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "OpenAI API", "React", "Flask"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Finance Tracker",
    description: "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns.",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Node.js", "MySQL", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Health & Fitness App",
    description: "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress monitoring.",
    image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux", "NativeBase"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16">
        <AnimatedText
          text="My Projects"
          variant="heading-lg"
          animate="slide"
          className="mb-4"
        />
        
        <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          Here's a selection of my recent work. Each project represents a unique challenge and solution.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={project.title} delay={index * 100}>
            <div className="w-full aspect-video overflow-hidden rounded-t-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x450?text=Project+Image";
                }}
              />
            </div>
            
            <div className="p-6">
              <CardTitle>{project.title}</CardTitle>
              
              <CardContent className="mt-2 p-0">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="py-1 px-2 rounded-full bg-secondary text-secondary-foreground text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-0 flex justify-between">
                <Button href={project.liveLink} isExternal variant="ghost" size="sm">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button href={project.githubLink} isExternal variant="ghost" size="sm">
                  GitHub
                  <Github className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
