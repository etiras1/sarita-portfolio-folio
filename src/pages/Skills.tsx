import { useEffect } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Card } from "@/components/ui/Card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Code, Database, Layout, Server, Terminal, GitBranch, Globe, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5 & CSS3", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "Python", level: 82 },
      { name: "Django", level: 78 },
      { name: "RESTful APIs", level: 92 },
      { name: "GraphQL", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Database Management",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 82 },
      { name: "Redis", level: 75 },
      { name: "SQLite", level: 85 },
      { name: "ORM (Prisma, Mongoose)", level: 87 },
      { name: "Data Modeling", level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "AWS", level: 78 },
      { name: "Netlify & Vercel", level: 90 },
      { name: "Linux", level: 82 },
      { name: "Jenkins", level: 75 },
      { name: "Kubernetes", level: 70 },
    ],
  },
];

const technicalSkills = [
  {
    category: "Software Development",
    icon: <Code className="h-6 w-6" />,
    skills: ["Object-Oriented Programming", "Functional Programming", "Design Patterns", "Clean Code", "Test-Driven Development", "Agile & Scrum", "Software Architecture"],
  },
  {
    category: "Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Branching Strategies", "Pull Requests", "Code Reviews"],
  },
  {
    category: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    skills: ["Progressive Web Apps", "Web Accessibility (WCAG)", "Web Performance", "Responsive Design", "SEO Optimization", "Browser APIs", "Authentication & Security"],
  },
  {
    category: "Data Analysis",
    icon: <LineChart className="h-6 w-6" />,
    skills: ["Data Visualization", "Basic Analytics", "Reporting Tools", "Debugging & Testing", "Performance Optimization", "Error Monitoring", "User Behavior Analytics"],
  },
];

const certifications = [
  { name: "AWS Certified Developer Associate", issuer: "Amazon Web Services", year: "2022" },
  { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", year: "2021" },
  { name: "MongoDB Certified Developer", issuer: "MongoDB, Inc.", year: "2021" },
  { name: "Google Cloud Platform Fundamentals", issuer: "Google Cloud", year: "2020" },
  { name: "React Developer Certification", issuer: "Meta", year: "2020" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2019" },
];

const Skills = () => {
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
              My Expertise
            </div>
            
            <AnimatedText
              text="Skills & Technologies"
              variant="heading-xl"
              animate="reveal"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              I've worked with a variety of technologies and frameworks throughout my career. Here's a comprehensive overview of my technical skills and expertise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Skills with Progress Bars */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {category.icon}
                  </div>
                  <AnimatedText
                    text={category.title}
                    variant="heading-lg"
                    animate="slide"
                    delay={categoryIndex * 100}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="opacity-0 animate-slide-up" 
                      style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Skills */}
      <section className="section bg-secondary/50">
        <div className="container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Other Technical Skills"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Beyond programming languages and frameworks, I've developed expertise in these areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card key={skill.category} delay={index * 100}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    {skill.icon}
                  </div>
                  <h3 className="heading-sm">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item) => (
                    <span key={item} className="py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="section">
        <div className="container-tight">
          <div className="text-center mb-16">
            <AnimatedText
              text="Certifications"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Professional certifications and credentials that validate my expertise and ongoing commitment to learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="glass-card p-6 rounded-lg opacity-0 animate-slide-up"
                style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Learning and Growth */}
      <section className="section bg-secondary/50">
        <div className="container-tight">
          <div className="text-center mb-16">
            <AnimatedText
              text="Continuous Learning"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              I believe in lifelong learning and constantly expanding my skill set. Here are some areas I'm currently focusing on.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="heading-sm mb-4">Currently Learning</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> Rust Programming
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> WebAssembly
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> Advanced System Design
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="heading-sm mb-4">Interested In</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> Blockchain Technology
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> AR/VR Development
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="heading-sm mb-4">Recent Courses</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> Microservices Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> Advanced React Patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" /> Data Structures & Algorithms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section">
        <div className="container-tight">
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
            <AnimatedText
              text="Looking for Technical Expertise?"
              variant="heading-lg"
              animate="slide"
              className="mb-4"
            />
            
            <p className="text-muted-foreground mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              If you need a developer with these skills for your project or team, I'd love to discuss how I can contribute.
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
    </div>
  );
};

export default Skills;
