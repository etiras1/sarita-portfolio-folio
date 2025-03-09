
import { useEffect } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Getting Started with React: A Beginner's Guide",
    excerpt: "Learn the fundamentals of React and how to create your first application with this step-by-step tutorial for beginners.",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "June 12, 2023",
    readTime: "8 min read",
    category: "React",
  },
  {
    title: "Understanding TypeScript Generics",
    excerpt: "Explore how to use TypeScript generics to create reusable, type-safe code components in your applications.",
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 24, 2023",
    readTime: "10 min read",
    category: "TypeScript",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt: "Discover the importance of web accessibility and learn practical techniques to make your applications more inclusive.",
    image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "August 8, 2023",
    readTime: "12 min read",
    category: "Accessibility",
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Learn advanced techniques for optimizing your React applications to improve loading times and user experience.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "September 15, 2023",
    readTime: "15 min read",
    category: "Performance",
  },
  {
    title: "Introduction to GraphQL",
    excerpt: "Understand the fundamentals of GraphQL and why it's becoming a popular alternative to traditional REST APIs.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "October 3, 2023",
    readTime: "9 min read",
    category: "API",
  },
  {
    title: "Deploying Applications with Docker",
    excerpt: "A comprehensive guide to containerizing your applications with Docker for easier deployment and scaling.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "November 20, 2023",
    readTime: "11 min read",
    category: "DevOps",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-16">
        <AnimatedText
          text="Latest Blog Posts"
          variant="heading-lg"
          animate="slide"
          className="mb-4"
        />
        
        <p className="max-w-2xl mx-auto text-muted-foreground opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          Insights, tutorials, and thoughts on development, design, and technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={post.title} delay={index * 100}>
            <div className="w-full aspect-video overflow-hidden rounded-t-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/800x450?text=Blog+Post+Image";
                }}
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="py-1 px-2 rounded-full bg-primary/10 text-primary text-xs">
                  {post.category}
                </span>
              </div>
              
              <CardTitle>{post.title}</CardTitle>
              
              <CardContent className="mt-2 p-0">
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              
              <CardFooter className="p-0">
                <Button variant="ghost" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
