import React from 'react';
import { Card, Button } from '@components';

/**
 * Page À propos (About)
 */
export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Marie Durand',
      role: 'Secrétaire Générale',
      bio: 'Experte en relations internationales avec 25 ans d\'expérience',
    },
    {
      name: 'Dr. Ahmed Hassan',
      role: 'Directeur des Missions',
      bio: 'Spécialiste du développement durable et de la coopération',
    },
    {
      name: 'Dr. Elena Rossi',
      role: 'Responsable Santé',
      bio: 'Médecin et humanitaire reconnue mondialement',
    },
    {
      name: 'Dr. James Smith',
      role: 'Responsable Éducation',
      bio: 'Pionnier de l\'éducation accessible et de qualité',
    },
  ];

  const values = [
    {
      icon: '🤝',
      title: 'Solidarité',
      description: 'Nous croyons à l\'entraide et à la coopération mondiale.',
    },
    {
      icon: '🌱',
      title: 'Durabilité',
      description: 'Notre action respecte l\'environnement pour les générations futures.',
    },
    {
      icon: '⚖️',
      title: 'Équité',
      description: 'L\'égalité et la justice pour tous sont au cœur de notre mission.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À Propos de l'OMPDD
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Découvrez l'histoire, la vision et les valeurs qui nous animent.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">Notre Histoire</h2>

          <div className="space-y-8 mb-12">
            <div className="flex gap-6">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-4 h-4 bg-secondary-500 rounded-full"></div>
                <div className="w-1 h-24 bg-secondary-200 my-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">1999 - Fondation</h3>
                <p className="text-neutral-600">
                  L'OMPDD a été fondée par un groupe de leaders internationaux convaincus que la paix et le développement durable sont inséparables.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-4 h-4 bg-secondary-500 rounded-full"></div>
                <div className="w-1 h-24 bg-secondary-200 my-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">2010 - Expansion Globale</h3>
                <p className="text-neutral-600">
                  Nous avons étendu nos opérations à 150 pays, établissant des bureaux régionaux et des partenariats stratégiques.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-4 h-4 bg-secondary-500 rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Aujourd'hui</h3>
                <p className="text-neutral-600">
                  Nous continuons notre travail vers un monde plus juste et durable, avec un réseau de 10 millions de bénéficiaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Notre Engagement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-secondary-600 mb-4">Vision</h3>
              <p className="text-neutral-700">
                Un monde où la paix règne, où chaque individu a accès aux ressources nécessaires pour s'épanouir, et où la durabilité environnementale est garantie.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-secondary-600 mb-4">Mission</h3>
              <p className="text-neutral-700">
                Unir les nations et les peuples pour promouvoir la paix, la santé, l'éducation et le développement durable à travers des programmes innovants et collaboratifs.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-secondary-600 mb-4">Valeurs</h3>
              <p className="text-neutral-700">
                Solidarité, intégrité, durabilité, équité et excellence guident chaque action que nous entreprendre.
              </p>
            </Card>
          </div>

          <h3 className="text-2xl font-bold text-neutral-900 mb-6">Nos Valeurs Fondamentales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-neutral-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
            Notre Équipe Dirigeante
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden text-center p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary-600 font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez-nous dans cette aventure
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
            Que vous soyez particulier, entreprise ou organisation, il existe une place pour vous dans notre mouvement.
          </p>
          <Button size="lg" variant="primary">
            Nous rejoindre
          </Button>
        </div>
      </section>
    </main>
  );
};
