import React from 'react';
import { cn } from '@utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

/**
 * Composant Button réutilisable
 * Respecte les tokens d'Ontario Design System
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className,
    children,
    ...rest
  }, ref) => {
    const baseClasses = 'font-semibold rounded transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2';
    
    const variantClasses = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 focus-visible:outline-secondary-500',
      secondary: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus-visible:outline-primary-500',
      tertiary: 'text-primary-500 hover:bg-neutral-100 focus-visible:outline-primary-500',
    };

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
