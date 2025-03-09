
import { AnimatedText } from "@/components/ui/AnimatedText";
import { ExperienceCard } from "./ExperienceCard";
import { CertificationList } from "./CertificationList";

export const ExperienceSection = () => {
  return (
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
              <ExperienceCard 
                title="Senior Software Developer"
                company="TechInnovate Solutions"
                period="2020 - Present"
                description="Led the development of enterprise web applications using React, Node.js, and MongoDB. Collaborated with design and product teams to implement user-friendly interfaces and optimize performance."
                delay={400}
              />
              
              <ExperienceCard 
                title="Web Developer"
                company="Digital Craft Agency"
                period="2018 - 2020"
                description="Developed responsive websites and e-commerce platforms for clients across various industries. Worked with JavaScript frameworks, HTML5, CSS3, and backend technologies like PHP and MySQL."
                delay={500}
              />
              
              <ExperienceCard 
                title="Junior Developer"
                company="Tech Startup"
                period="2017 - 2018"
                description="Assisted in building web applications and implementing UI components. Gained hands-on experience with modern JavaScript frameworks and agile development methodologies."
                delay={600}
              />
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
              <ExperienceCard 
                title="Master of Computer Science"
                company="University of Technology"
                period="2015 - 2017"
                description="Specialized in software engineering and data structures. Completed a thesis on optimizing database queries for large-scale web applications."
                delay={400}
              />
              
              <ExperienceCard 
                title="Bachelor of Computer Science"
                company="City University"
                period="2011 - 2015"
                description="Studied programming fundamentals, algorithms, data structures, and web development. Participated in coding competitions and hackathons."
                delay={500}
              />
              
              <CertificationList delay={600} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
