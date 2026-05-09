import React, { useState } from 'react';
import { Card, Button, Pagination } from '@components';
import { usePagination } from '@hooks';
import { NewsArticle } from '@types';

/**
 * Page Actualités (News)
 */
export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Tous' | 'Presse' | 'Rapports' | 'Événements'>('Tous');

  // Sample news data
  const allNews: NewsArticle[] = [
    {
      id: '1',
      title: 'Lancement du programme de santé en Afrique de l\'Ouest',
      excerpt: 'Un nouveau programme lancé pour améliorer l\'accès aux soins de santé dans 15 pays africains.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Presse',
      imageUrl: '/news-1.jpg',
      date: '2024-05-05',
      author: 'Dr. Marie Durand',
    },
    {
      id: '2',
      title: 'Rapport annuel 2024 : 10 millions de vies impactées',
      excerpt: 'Notre rapport annuel révèle des résultats exceptionnels dans tous les domaines.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Rapports',
      imageUrl: '/news-2.jpg',
      date: '2024-05-01',
      author: 'Équipe OMPDD',
    },
    {
      id: '3',
      title: 'Conférence mondiale sur le climat - Mai 2024',
      excerpt: 'Rejoignez-nous pour discuter de solutions durables pour la planète.',
      content: 'Lorem ipsum dolor sit amet...',
      category: 'Événements',
      imageUrl: '/news-3.jpg',
      date: '2024-04-28',
      author: 'Dr. Elena Rossi',
    },
  ];

  const filteredNews = selectedCategory === 'Tous' 
    ? allNews 
    : allNews.filter(news => news.category === selectedCategory);

  const { currentPage, totalPages, currentItems, goToPage } = usePagination(filteredNews, 6);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Actualités & Communiqués
          </h1>
          <p className="text-xl text-primary-100">
            Suivez nos dernières avancées et initiatives.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {['Tous', 'Presse', 'Rapports', 'Événements'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat as any);
                  goToPage(1);
                }}
                className={`px-6 py-2 rounded font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentItems.map((article) => (
              <Card key={article.id} className="overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-lg">
                <div className="h-40 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-5xl">
                  📰
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-semibold text-secondary-600 mb-2 uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2 flex-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-neutral-500 mb-4">
                    {new Date(article.date).toLocaleDateString('fr-FR')} • {article.author}
                  </p>
                  <Button variant="tertiary" size="sm">
                    Lire l'article complet →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Restez informé
          </h2>
          <p className="text-neutral-600 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités directement.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-2 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-500"
            />
            <Button size="lg" variant="primary">
              S'abonner
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
