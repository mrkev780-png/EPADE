import React from 'react';
import { cn } from '@utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Composant Card réutilisable
 * Respecte les tokens d'Ontario Design System
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white border border-neutral-200 rounded shadow-sm hover:shadow-md transition-shadow duration-200',
          onClick && 'cursor-pointer',
          className
        )}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={(e) => {
          if (onClick && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
