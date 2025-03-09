
import { AnimatedText } from "@/components/ui/AnimatedText";

interface InterestCardProps {
  title: string;
  description: string;
  delay: number;
}

const InterestCard = ({ title, description, delay }: InterestCardProps) => (
  <div className="glass-card p-6 rounded-lg opacity-0 animate-slide-up" style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}>
    <h3 className="heading-sm mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export const InterestsSection = () => {
  return (
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
          <InterestCard 
            title="Open Source"
            description="I actively contribute to open-source projects and believe in giving back to the developer community. Some of my contributions include documentation improvements and bug fixes."
            delay={300}
          />
          
          <InterestCard 
            title="Technical Writing"
            description="I enjoy writing about software development, sharing tutorials, and explaining complex concepts in accessible ways through blog posts and documentation."
            delay={400}
          />
          
          <InterestCard 
            title="Mentoring"
            description="I'm passionate about helping new developers grow their skills through mentorship, code reviews, and sharing resources and best practices."
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};
