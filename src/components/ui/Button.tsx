
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean;
  href?: string;
  isExternal?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    asChild = false,
    href,
    isExternal = false,
    children,
    ...props 
  }, ref) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
      {
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle": variant === "default",
        "border border-border bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "text-primary underline-offset-4 hover:underline": variant === "link",
        "h-9 px-4 py-2 text-sm": size === "sm",
        "h-10 px-5 py-2": size === "default",
        "h-11 px-6 py-3 text-base": size === "lg",
        "h-9 w-9 p-0 flex items-center justify-center": size === "icon",
      },
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
          >
            {children}
          </a>
        );
      }
      
      return (
        <Link to={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button
        className={baseStyles}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
