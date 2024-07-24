"use client";

import React from 'react';
import { cn } from '@/lib/utils'; // Utility function for conditional classnames

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'; // Add 'ghost' here
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-200',
  };
  const sizes = {
    default: 'px-4 py-2',
    sm: 'px-3 py-1',
    lg: 'px-6 py-3',
    icon: 'p-2', // Add custom size for icon buttons
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  return <button className={classes} {...props} />;
};

export { Button };
