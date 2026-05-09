import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '@components/layout';
import { HomePage } from '@pages/HomePage';
import { AboutPage } from '@pages/AboutPage';
import { MissionsPage } from '@pages/MissionsPage';
import { NewsPage } from '@pages/NewsPage';
import { ResourcesPage } from '@pages/ResourcesPage';
import { JoinPage } from '@pages/JoinPage';

/**
 * Application principale
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        
        <Header />

        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/missions" element={<MissionsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/join" element={<JoinPage />} />
            
            {/* Fallback for undefined routes */}
            <Route 
              path="*" 
              element={
                <div className="container mx-auto px-4 py-20 text-center">
                  <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                    Page non trouvée
                  </h1>
                  <p className="text-neutral-600 mb-8">
                    Désolé, la page que vous cherchez n'existe pas.
                  </p>
                  <a href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                    Retour à l'accueil
                  </a>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
