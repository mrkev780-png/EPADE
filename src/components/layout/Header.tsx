import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@utils';

/**
 * Composant Header/Navigation
 */
export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/about' },
    { label: 'Missions', path: '/missions' },
    { label: 'Actualités', path: '/news' },
    { label: 'Ressources', path: '/resources' },
    { label: 'Contact', path: '/join' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-4">
        <nav
          className="flex justify-between items-center py-4"
          role="navigation"
          aria-label="Principal"
        >
          {/* Logo */}
          <RouterLink
            to="/"
            className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1"
          >
            <div className="w-10 h-10 bg-primary-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">Ω</span>
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-primary-700 leading-tight">OMPDD</div>
              <div className="text-xs text-neutral-600">Paix & Développement</div>
            </div>
          </RouterLink>

          {/* Navigation Desktop */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <RouterLink
                key={link.path}
                to={link.path}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500 rounded px-2 py-1"
              >
                {link.label}
              </RouterLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <RouterLink
              to="/join"
              className={cn(
                'px-4 py-2 bg-secondary-500 text-white rounded font-medium',
                'hover:bg-secondary-600 transition-colors',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500'
              )}
            >
              Nous rejoindre
            </RouterLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-neutral-100 rounded transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Basculer le menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-200 animate-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <RouterLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-neutral-700 hover:bg-neutral-50 rounded transition-colors font-medium"
                >
                  {link.label}
                </RouterLink>
              ))}
              <RouterLink
                to="/join"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'mx-4 px-4 py-2 bg-secondary-500 text-white rounded font-medium text-center',
                  'hover:bg-secondary-600 transition-colors'
                )}
              >
                Nous rejoindre
              </RouterLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
