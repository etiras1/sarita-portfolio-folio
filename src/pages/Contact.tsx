
import { useEffect, useState } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16">
        <AnimatedText
          text="Get In Touch"
          variant="heading-lg"
          animate="slide"
          className="mb-4"
        />
        
        <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="p-8">
          <h3 className="heading-sm mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:sneupane5@gmail.com" className="hover:text-primary transition-colors">
                  sneupane5@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+9779841322649" className="hover:text-primary transition-colors">
                  +977 9841322649
                </a>
              </div>
            </div>
          </div>
          
          <h3 className="heading-sm mt-10 mb-6">Connect With Me</h3>
          
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </Card>
        
        <Card className="p-8">
          <h3 className="heading-sm mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
