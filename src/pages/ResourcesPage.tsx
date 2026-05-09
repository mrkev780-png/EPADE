import React from 'react';
import { Card, Button } from '@components';

/**
 * Page Ressources
 */
export const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: 'Rapports',
      items: [
        { title: 'Rapport Annuel 2023', size: '5.2 MB', year: 2023 },
        { title: 'Rapport Annuel 2022', size: '4.8 MB', year: 2022 },
        { title: 'Rapport Annuel 2021', size: '4.5 MB', year: 2021 },
      ],
    },
    {
      category: 'Infographies',
      items: [
        { title: 'Impact global 2024', size: '2.1 MB', year: 2024 },
        { title: 'Statistiques ODD', size: '1.8 MB', year: 2024 },
        { title: 'Partenariats stratégiques', size: '1.5 MB', year: 2024 },
      ],
    },
    {
      category: 'Guides & Manuels',
      items: [
        { title: 'Guide de bonnes pratiques', size: '3.4 MB', year: 2024 },
        { title: 'Manuel de mise en œuvre', size: '2.9 MB', year: 2024 },
        { title: 'Framework de durabilité', size: '2.2 MB', year: 2024 },
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ressources
          </h1>
          <p className="text-xl text-primary-100">
            Accédez à notre bibliothèque de documents, rapports et outils.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {resources.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.items.map((item, i) => (
                    <Card key={i} className="p-6 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">📄</div>
                        <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 flex-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-4">
                        {item.size}
                      </p>
                      <Button variant="secondary" size="sm" fullWidth>
                        Télécharger
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12">
            Vidéos Institutionnelles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg h-64 bg-neutral-200 flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">Titre vidéo {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Base de Données Statistiques
          </h2>
          <p className="text-neutral-600 mb-6">
            Explorez nos données interactives sur l'impact global et les objectifs de développement durable.
          </p>
          <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-primary-700 mb-2">
                  Tableau de Bord Interactif
                </h3>
                <p className="text-neutral-600">
                  Analysez en temps réel nos indicateurs de performance et impact.
                </p>
              </div>
              <Button size="lg" variant="primary">
                Accéder au tableau de bord →
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};
