import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "ghost";
  size?: "icon";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "ghost", size = "icon", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`btn ${variant} ${size} ${className}`}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button'; // Set display name for debugging

export { Button }; // Use named export
