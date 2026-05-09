import { NewsArticle, Mission, TeamMember } from '@types';

/**
 * Données mockées pour le développement
 * À remplacer par les appels API en production
 */

export const MOCK_MISSIONS: Mission[] = [
  {
    id: 'peace',
    title: 'Paix & Sécurité',
    description: 'Promotion de la paix et de la sécurité internationales',
    icon: '☮️',
    color: '#0033A0',
  },
  {
    id: 'health',
    title: 'Santé Mondiale',
    description: 'Accès universel aux soins de santé',
    icon: '⚕️',
    color: '#C9A227',
  },
  {
    id: 'education',
    title: 'Éducation',
    description: 'Éducation de qualité pour tous',
    icon: '📚',
    color: '#0033A0',
  },
  {
    id: 'climate',
    title: 'Action Climatique',
    description: 'Protection de l\'environnement',
    icon: '🌍',
    color: '#C9A227',
  },
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'Lancement du programme de santé en Afrique',
    excerpt: 'Un nouveau programme pour améliorer l\'accès aux soins.',
    content: 'Contenu complet de l\'article...',
    category: 'Presse',
    imageUrl: '/news-1.jpg',
    date: '2024-05-05',
    author: 'Dr. Marie Durand',
  },
  {
    id: '2',
    title: 'Rapport annuel 2024 : 10 millions vies impactées',
    excerpt: 'Des résultats exceptionnels dans tous les domaines.',
    content: 'Contenu complet du rapport...',
    category: 'Rapports',
    imageUrl: '/news-2.jpg',
    date: '2024-05-01',
    author: 'Équipe OMPDD',
  },
];

export const MOCK_TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Marie Durand',
    role: 'Secrétaire Générale',
    bio: 'Experte en relations internationales avec 25 ans d\'expérience',
    imageUrl: '/team-1.jpg',
  },
  {
    id: '2',
    name: 'Dr. Ahmed Hassan',
    role: 'Directeur des Missions',
    bio: 'Spécialiste du développement durable',
    imageUrl: '/team-2.jpg',
  },
  {
    id: '3',
    name: 'Dr. Elena Rossi',
    role: 'Responsable Santé',
    bio: 'Médecin et humanitaire reconnue',
    imageUrl: '/team-3.jpg',
  },
  {
    id: '4',
    name: 'Dr. James Smith',
    role: 'Responsable Éducation',
    bio: 'Pionnier de l\'éducation accessible',
    imageUrl: '/team-4.jpg',
  },
];
