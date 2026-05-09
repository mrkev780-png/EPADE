# OMPDD Website

Site web officiel de l'Organisation Mondiale pour la Paix et le Développement Durable.

## 🚀 Démarrage

### Prérequis
- Node.js 18+ avec npm/pnpm
- Navigateur moderne

### Installation

```bash
cd ompdd-website
npm install
# ou
pnpm install
```

### Développement

```bash
npm run dev
# ou
pnpm dev
```

Le site s'ouvrira automatiquement sur `http://localhost:3000`.

### Build pour production

```bash
npm run build
# ou
pnpm build
```

### Preview

```bash
npm run preview
# ou
pnpm preview
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── layout/         # Composants de layout (Header, Footer)
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Accordion.tsx
│   └── ...
├── pages/              # Pages du site
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── MissionsPage.tsx
│   ├── NewsPage.tsx
│   ├── ResourcesPage.tsx
│   └── JoinPage.tsx
├── hooks/              # Custom React hooks
├── utils/              # Fonctions utilitaires
├── types/              # Types TypeScript
├── styles/             # Styles CSS/SCSS globaux
├── App.tsx             # Composant principal
└── main.tsx            # Point d'entrée
```

## 🎨 Design System

Le site utilise Ontario Design System comme base avec des tokens personnalisés :

### Couleurs Principales
- **Bleu institutionnel** : `#0033A0`
- **Or accentu** : `#C9A227`
- **Blanc** : `#FFFFFF`
- **Gris clair** : `#F5F5F5`

### Espacements
- xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 24px, 2xl: 32px, 3xl: 48px, 4xl: 64px

### Typographie
- H1: 48px, H2: 36px, H3: 24px, Body: 16px, Small: 14px

## 🛠️ Technologies

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **Tailwind CSS** - Styling utilitaire
- **React Router** - Routage
- **Framer Motion** - Animations

## ♿ Accessibilité

Le site respecte les normes d'accessibilité WCAG 2.1 :
- Navigation au clavier
- Contrastes conformes
- ARIA labels appropriés
- Lecteur d'écran compatible
- Structure sémantique HTML5

## 📱 Responsive

Design mobile-first avec breakpoints:
- 320px (mobile)
- 768px (tablet)
- 1024px (desktop)
- 1440px (wide)

## 🌐 Multilingue (Préparation)

Structure prête pour FR/EN/ES avec `react-i18next`

## 📝 Pages

1. **Accueil** - Hero, missions, stats, actualités, partenaires
2. **À propos** - Histoire, vision/mission/valeurs, équipe dirigeante
3. **Missions** - Détails sur les 4 missions principales
4. **Actualités** - Articles avec pagination et filtres
5. **Ressources** - Rapports, infographies, vidéos, données
6. **Nous rejoindre** - Formulaire de contact, FAQ, opportunités

## 📞 Contact

Organisation Mondiale pour la Paix et le Développement Durable
- Email: contact@ompdd.org
- Téléphone: +41 (22) 500-0000
- Adresse: 123 Rue de la Paix, Geneva, Suisse

## 📄 License

Tous droits réservés © 2024 OMPDD

---

**Développé avec ❤️ pour la paix et le développement durable**
