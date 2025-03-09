
import { useEffect } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Card, CardContent } from "@/components/ui/Card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    position: "CTO at TechCorp",
    testimonial: "Working with Sarita was a game-changer for our project. Her technical expertise and problem-solving skills helped us deliver a complex application on time and under budget.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Emma Williams",
    position: "Founder at StartupX",
    testimonial: "Sarita is an exceptional developer with a keen eye for detail. She not only implemented our requirements perfectly but also suggested improvements that enhanced the overall user experience.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "David Chen",
    position: "Product Manager at InnovateCo",
    testimonial: "I've worked with many developers, but Sarita stands out for her ability to understand business requirements and translate them into elegant technical solutions. Her code is clean, well-documented, and maintainable.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sarah Johnson",
    position: "UX Director at DesignHub",
    testimonial: "Sarita has an impressive ability to bridge the gap between design and development. She implemented our complex UI designs with precision and suggested practical improvements that enhanced user interactions.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Michael Rodriguez",
    position: "Engineering Lead at TechSolutions",
    testimonial: "As a team lead, I value developers who can work independently and deliver quality code. Sarita consistently exceeded expectations, demonstrating strong problem-solving skills and an ability to mentor junior team members.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Jennifer Lee",
    position: "Project Manager at WebDev Agency",
    testimonial: "Sarita's technical skills are matched only by her communication abilities. She kept stakeholders informed, set realistic expectations, and delivered on her commitments. I would work with her again without hesitation.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16">
        <AnimatedText
          text="Client Testimonials"
          variant="heading-lg"
          animate="slide"
          className="mb-4"
        />
        
        <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          What my clients and colleagues have to say about working with me.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={testimonial.name} delay={index * 100} className="flex flex-col">
            <CardContent className="pt-6 flex-grow flex flex-col">
              <div className="mb-4 text-primary">
                <QuoteIcon className="h-6 w-6" />
              </div>
              
              <p className="italic mb-6 flex-grow">"{testimonial.testimonial}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/200x200?text=Profile";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
