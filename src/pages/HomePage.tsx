import { useRef, useState, useEffect } from 'react';
import { Button, Card } from '@components';

/**
 * Page d'accueil (Home)
 */
export const HomePage: React.FC = () => {
  const [stats, setStats] = useState([
    { value: 0, label: 'pays membres' },
    { value: 0, label: 'projets actifs' },
    { value: 0, label: 'bénéficiaires' },
    { value: 0, label: 'années d\'existence' },
  ]);

  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useRef(false);

  // Animation des compteurs
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible.current) {
          statsVisible.current = true;
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateStats = () => {
    const targets = [150, 500, 10000000, 25];
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      setStats(prev =>
        prev.map((stat, idx) => ({
          ...stat,
          value: Math.floor(targets[idx] * progress),
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setStats(prev =>
          prev.map((stat, idx) => ({
            ...stat,
            value: targets[idx],
          }))
        );
      }
    };

    animate();
  };

  const missions = [
    {
      icon: '☮️',
      title: 'Paix & Sécurité',
      description: 'Œuvrer pour la stabilité mondiale et la résolution pacifique des conflits.',
    },
    {
      icon: '⚕️',
      title: 'Santé Mondiale',
      description: 'Garantir l\'accès aux soins de santé pour tous les peuples.',
    },
    {
      icon: '📚',
      title: 'Éducation',
      description: 'Favoriser l\'éducation de qualité pour le développement humain.',
    },
    {
      icon: '🌍',
      title: 'Climat',
      description: 'Combattre le changement climatique pour protéger notre planète.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Construire un monde meilleur
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto">
            L'Organisation Mondiale pour la Paix et le Développement Durable unit les peuples pour créer un avenir prospère et juste.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">
              Découvrir nos missions
            </Button>
            <Button size="lg" variant="secondary">
              Nous rejoindre
            </Button>
          </div>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Nos Missions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Quatre piliers pour un développement durable et une paix mondiale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <Card key={index} className="p-6 hover:-translate-y-1 transition-transform">
                <div className="text-4xl mb-4">{mission.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {mission.title}
                </h3>
                <p className="text-neutral-600">
                  {mission.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2">
                  {stat.value >= 1000000
                    ? (stat.value / 1000000).toFixed(1) + 'M'
                    : stat.value >= 1000
                    ? (stat.value / 1000).toFixed(0) + 'K'
                    : stat.value}
                </div>
                <p className="text-primary-100 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Actualités Récentes
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Suivez nos dernières initiatives et réalisations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-lg"
              >
                <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-4xl">
                  📰
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs font-semibold text-secondary-600 mb-2">
                    PRESSE
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 flex-1">
                    Titre d'actualité important concernant nos missions
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Le {new Date().toLocaleDateString('fr-FR')}
                  </p>
                  <Button variant="tertiary" size="sm">
                    Lire plus →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" size="lg">
              Voir toutes les actualités
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Nos Partenaires
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-32 h-16 bg-white border border-neutral-200 rounded flex items-center justify-center text-2xl"
              >
                🌐
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez notre mouvement
          </h2>
          <p className="text-lg text-secondary-100 max-w-2xl mx-auto mb-8">
            Ensemble, nous pouvons créer un monde meilleur pour les générations futures.
          </p>
          <Button size="lg" variant="primary">
            Nous rejoindre maintenant
          </Button>
        </div>
      </section>
    </main>
  );
};
