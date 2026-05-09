import React from 'react';
import { PaginationProps } from '@types';
import { Button } from './Button';
import { cn } from '@utils';

/**
 * Composant Pagination réutilisable
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pages.filter(
    (page) => Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages
  );

  return (
    <nav
      className="flex justify-center items-center gap-2"
      aria-label="Pagination"
    >
      <Button
        variant="secondary"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Page précédente"
      >
        ← Précédent
      </Button>

      <div className="flex gap-1">
        {visiblePages.map((page, index) => {
          const prevPage = visiblePages[index - 1];
          const showEllipsis = prevPage && page - prevPage > 1;

          return (
            <div key={page} className="flex gap-1 items-center">
              {showEllipsis && <span className="px-2">...</span>}
              <button
                onClick={() => onPageChange(page)}
                className={cn(
                  'px-3 py-2 rounded transition-colors duration-200',
                  'focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-secondary-500',
                  currentPage === page
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300'
                )}
                aria-current={currentPage === page ? 'page' : undefined}
                aria-label={`Aller à la page ${page}`}
              >
                {page}
              </button>
            </div>
          );
        })}
      </div>

      <Button
        variant="secondary"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
      >
        Suivant →
      </Button>
    </nav>
  );
};
