
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
}

export const AnimatedCard = ({ 
  delay = 0, 
  children, 
  className, 
  hover = true,
  gradient = false,
  ...props 
}: AnimatedCardProps) => {
  return (
    <div 
      className={cn(
        "opacity-0 animate-slide-up",
        hover && "transition-all duration-300 hover:-translate-y-2",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      {...props}
    >
      <Card className={cn(
        "h-full transition-all duration-300",
        hover && "hover:shadow-lg",
        gradient && "bg-gradient-to-br from-card to-card/50 dark:from-card/80 dark:to-card"
      )}>
        {children}
      </Card>
    </div>
  );
};
