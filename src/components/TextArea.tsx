import React from 'react';
import { cn } from '@utils';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Composant TextArea réutilisable
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helperText, className, ...rest }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {label}
            {rest.required && <span className="text-red-600 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-3 py-2 border border-neutral-300 rounded',
            'bg-white text-neutral-900 font-sans',
            'hover:border-neutral-400 transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent',
            'resize-vertical min-h-32',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${rest.id}-error` : undefined}
          {...rest}
        />
        {error && (
          <p
            id={`${rest.id}-error`}
            className="text-sm text-red-600 mt-1"
            role="alert"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-neutral-500 mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
