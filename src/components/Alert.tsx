import React from 'react';
import { cn } from '@utils';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  onClose?: () => void;
  className?: string;
}

/**
 * Composant Alert réutilisable
 */
export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  message,
  onClose,
  className,
}) => {
  const typeClasses = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
  };

  const iconClasses = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <div
      className={cn(
        'border rounded p-4 flex gap-3',
        typeClasses[type],
        className
      )}
      role="alert"
    >
      <span className="font-bold text-lg flex-shrink-0">
        {iconClasses[type]}
      </span>
      <div className="flex-1">
        {title && <h3 className="font-semibold mb-1">{title}</h3>}
        <p>{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-lg hover:opacity-70 transition-opacity"
          aria-label="Fermer l'alerte"
        >
          ×
        </button>
      )}
    </div>
  );
};
