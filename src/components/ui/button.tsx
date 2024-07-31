// src/components/ui/button.tsx
import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", className, ...props }, ref) => {
    const baseClasses = "px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
      default: "bg-gray-200 hover:bg-gray-300 text-black",
      primary: "bg-blue-500 hover:bg-blue-600",
      secondary: "bg-green-500 hover:bg-green-600",
      outline: "border border-gray-300 text-gray-700",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
      destructive: "bg-red-500 hover:bg-red-600",
    };

    const sizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg px-6 py-3",
      icon: "p-2",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
