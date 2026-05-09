import React, { useState } from 'react';
import { cn } from '@utils';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

/**
 * Composant Accordion réutilisable
 * Respecte l'accessibilité WCAG
 */
export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-neutral-200 rounded"
        >
          <button
            className={cn(
              'w-full px-4 py-3 text-left font-semibold bg-white',
              'hover:bg-neutral-50 transition-colors duration-200',
              'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-secondary-500',
              openId === item.id && 'bg-primary-50 text-primary-700'
            )}
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            aria-expanded={openId === item.id}
            aria-controls={`accordion-content-${item.id}`}
          >
            <div className="flex justify-between items-center">
              <span>{item.title}</span>
              <svg
                className={cn(
                  'w-5 h-5 transition-transform duration-200',
                  openId === item.id && 'rotate-180'
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </button>

          {openId === item.id && (
            <div
              id={`accordion-content-${item.id}`}
              className="px-4 py-3 bg-neutral-50 border-t border-neutral-200"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
