import React from 'react';
import { Card, Button } from '@components';

/**
 * Page Missions
 */
export const MissionsPage: React.FC = () => {
  const missions = [
    {
      id: 'peace',
      icon: '☮️',
      title: 'Paix & Sécurité Internationale',
      description: 'Promotion de la stabilité mondiale et résolution pacifique des conflits',
      objectives: [
        'Médiation et dialogue interculturel',
        'Renforcement des institutions internationales',
        'Désarmement et contrôle des armes',
      ],
      projects: 12,
      beneficiaries: 2500000,
    },
    {
      id: 'health',
      icon: '⚕️',
      title: 'Santé Mondiale',
      description: 'Accès universel aux soins de santé de qualité',
      objectives: [
        'Lutte contre les maladies épidémiques',
        'Renforcement des systèmes de santé',
        'Éducation sanitaire communautaire',
      ],
      projects: 45,
      beneficiaries: 5000000,
    },
    {
      id: 'education',
      icon: '📚',
      title: 'Éducation pour Tous',
      description: 'Éducation de qualité accessible à tous les niveaux',
      objectives: [
        'Construction d\'écoles et universités',
        'Formation des enseignants',
        'Apprentissage numérique et inclusif',
      ],
      projects: 156,
      beneficiaries: 2000000,
    },
    {
      id: 'climate',
      icon: '🌍',
      title: 'Action Climatique',
      description: 'Lutte contre le changement climatique et protection environnementale',
      objectives: [
        'Transition énergétique durable',
        'Conservation des écosystèmes',
        'Adaptation aux changements climatiques',
      ],
      projects: 89,
      beneficiaries: 500000,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Missions
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Quatre piliers stratégiques pour transformer le monde et créer un avenir durable.
          </p>
        </div>
      </section>

      {/* Missions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {missions.map((mission, index) => (
              <div
                key={mission.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:auto-cols-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-5xl mb-4">{mission.icon}</div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    {mission.title}
                  </h2>
                  <p className="text-lg text-neutral-600 mb-6">
                    {mission.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-bold text-neutral-900 mb-3">
                      Objectifs clés :
                    </h3>
                    <ul className="space-y-2">
                      {mission.objectives.map((obj, i) => (
                        <li key={i} className="flex gap-2 text-neutral-700">
                          <span className="text-secondary-500 font-bold">✓</span>
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg" variant="primary">
                    En savoir plus
                  </Button>
                </div>

                {/* Stats Card */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <Card className="p-8 bg-gradient-to-br from-neutral-50 to-neutral-100">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="text-3xl font-bold text-primary-600">
                          {mission.projects}
                        </div>
                        <p className="text-sm text-neutral-600">
                          Projets actifs
                        </p>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary-600">
                          {(mission.beneficiaries / 1000000).toFixed(1)}M
                        </div>
                        <p className="text-sm text-neutral-600">
                          Bénéficiaires
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded p-4 border border-neutral-200">
                      <p className="text-xs text-neutral-500 mb-2 font-semibold">
                        OBJECTIFS DE DÉVELOPPEMENT DURABLE
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-xs font-bold"
                          >
                            ODD
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Notre Impact Mensuel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Vies sauvées', value: 15420 },
              { label: 'Enfants scolarisés', value: 2800 },
              { label: 'Hectares protégés', value: 45000 },
              { label: 'Programmes lancés', value: 124 },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {item.value.toLocaleString('fr-FR')}
                </div>
                <p className="text-neutral-600">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soutenez nos missions
          </h2>
          <p className="text-lg text-secondary-100 max-w-2xl mx-auto mb-8">
            Votre contribution peut changer des vies et construire un avenir meilleur.
          </p>
          <Button size="lg" variant="primary">
            Faire un don ou participer
          </Button>
        </div>
      </section>
    </main>
  );
};
