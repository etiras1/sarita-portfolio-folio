
import React from "react";
import { Card, CardProps } from "@/components/ui/card";

interface AnimatedCardProps extends CardProps {
  delay?: number;
  children: React.ReactNode;
}

export const AnimatedCard = ({ delay = 0, children, className, ...props }: AnimatedCardProps) => {
  return (
    <div 
      className={`opacity-0 animate-slide-up ${className}`} 
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <Card {...props}>
        {children}
      </Card>
    </div>
  );
};
