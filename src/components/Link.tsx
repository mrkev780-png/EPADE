import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  external?: boolean;
  children: React.ReactNode;
  underline?: boolean;
}

/**
 * Composant Link réutilisable
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, external = false, className, children, underline = true, ...rest }, ref) => {
    const baseClasses = cn(
      'text-primary-600 hover:text-primary-700 transition-colors duration-200',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500',
      underline && 'underline',
      className
    );

    if (external || !to) {
      return (
        <a
          ref={ref}
          className={baseClasses}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <RouterLink
        to={to}
        className={baseClasses}
        {...rest}
      >
        {children}
      </RouterLink>
    );
  }
);

Link.displayName = 'Link';
