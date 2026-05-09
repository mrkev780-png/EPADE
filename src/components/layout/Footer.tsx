import { Link as RouterLink } from 'react-router-dom';

/**
 * Composant Footer
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">OMPDD</h3>
            <p className="text-sm text-primary-100 mb-4">
              Organisation Mondiale pour la Paix et le Développement Durable, œuvrant pour un monde meilleur.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-1 9-5s-1-5-5-6z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <RouterLink
                  to="/"
                  className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1 inline-block"
                >
                  Accueil
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/about"
                  className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1 inline-block"
                >
                  À propos
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/missions"
                  className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1 inline-block"
                >
                  Missions
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/news"
                  className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1 inline-block"
                >
                  Actualités
                </RouterLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <RouterLink
                  to="/resources"
                  className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1 inline-block"
                >
                  Bibliothèque
                </RouterLink>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1 inline-block"
                >
                  Rapports annuels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1 inline-block"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-100 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-2 py-1 inline-block"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-sm text-primary-100 space-y-2">
              <p>
                <span className="font-medium">Email:</span>
                <br />
                <a
                  href="mailto:contact@ompdd.org"
                  className="hover:text-white focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-1"
                >
                  contact@ompdd.org
                </a>
              </p>
              <p>
                <span className="font-medium">Téléphone:</span>
                <br />
                <a
                  href="tel:+1234567890"
                  className="hover:text-white focus-visible:outline-2 focus-visible:outline-secondary-500 rounded px-1"
                >
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <span className="font-medium">Adresse:</span>
                <br />
                123 Rue de la Paix<br />
                Geneva, Suisse
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-100">
          <p>
            &copy; {currentYear} OMPDD. Tous droits réservés.
          </p>
          <p>
            Conçu et développé avec ❤️ pour la paix et le développement durable
          </p>
        </div>
      </div>
    </footer>
  );
};
