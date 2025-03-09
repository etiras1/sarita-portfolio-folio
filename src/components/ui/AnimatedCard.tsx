
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  children: React.ReactNode;
}

export const AnimatedCard = ({ 
  delay = 0, 
  children, 
  className, 
  ...props 
}: AnimatedCardProps) => {
  return (
    <div 
      className={cn(
        "opacity-0 animate-slide-up",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      {...props}
    >
      <Card>
        {children}
      </Card>
    </div>
  );
};
