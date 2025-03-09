
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useEffect } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export function Card({ children, className, animate = true, delay = 0 }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animated");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [animate, delay]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card rounded-lg p-6 transition-all duration-500 ease-out",
        animate && "opacity-0 translate-y-4 [&.animated]:opacity-100 [&.animated]:translate-y-0",
        className
      )}
      style={animate ? { transitionDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h3 className={cn("heading-sm mb-2", className)}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn("mt-4 flex items-center gap-2", className)}>
      {children}
    </div>
  );
}
