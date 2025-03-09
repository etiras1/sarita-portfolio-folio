
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  variant?: "heading-xl" | "heading-lg" | "heading-md" | "heading-sm" | "paragraph";
  animate?: "fade" | "slide" | "reveal" | "none";
  textGradient?: boolean;
  delay?: number;
  className?: string;
}

export function AnimatedText({
  text,
  variant = "paragraph",
  animate = "fade",
  textGradient = false,
  delay = 0,
  className,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  const animationClass = {
    fade: "opacity-0 [&.animated]:animate-fade-in",
    slide: "opacity-0 translate-y-4 [&.animated]:animate-slide-up",
    reveal: "overflow-hidden [&>span]:translate-y-full [&>span]:opacity-0 [&.animated>span]:animate-text-reveal [&.animated>span]:inline-block",
    none: "",
  };

  const getTagForVariant = () => {
    switch (variant) {
      case "heading-xl":
        return "h1";
      case "heading-lg":
        return "h2";
      case "heading-md":
        return "h3";
      case "heading-sm":
        return "h4";
      default:
        return "p";
    }
  };

  const Tag = getTagForVariant();

  return (
    <Tag
      ref={textRef}
      className={cn(
        variant,
        animationClass[animate],
        textGradient && "text-gradient",
        animate === "reveal" ? "inline-block" : "block",
        `transition-all duration-700 ease-out`,
        className
      )}
    >
      {animate === "reveal" ? (
        <span
          className="inline-block transition-all duration-700 ease-out"
          style={{ transitionDelay: `${delay}ms` }}
        >
          {text}
        </span>
      ) : (
        text
      )}
    </Tag>
  );
}
