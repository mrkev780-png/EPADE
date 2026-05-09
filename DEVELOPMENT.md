# Documentation du Projet OMPDD Website

## 📋 Vue d'ensemble

Le site OMPDD est un site web institutionnel pour l'Organisation Mondiale pour la Paix et le Développement Durable. Il combine:
- Design system Ontario (accessibilité WCAG AAA)
- React + TypeScript pour la robustesse
- Tailwind CSS pour un design moderne et responsive
- Architecture modulaire et maintenable

## 🏗️ Architecture

### Hiérarchie des Composants

```
App
└── Header
└── Main (Routes)
    ├── HomePage
    ├── AboutPage
    ├── MissionsPage
    ├── NewsPage
    ├── ResourcesPage
    └── JoinPage
└── Footer
```

### Design Tokens (Ontario)

| Categorie | Tokens |
|-----------|--------|
| **Couleurs** | primary-500, secondary-500, neutral-100..900 |
| **Espacement** | xs (4px), sm (8px), md (12px), lg (16px), xl (24px), 2xl (32px), 3xl (48px), 4xl (64px) |
| **Typographie** | Sans-serif, poids 400/600/700, tailles H1-H4, body, small |
| **Ombres** | Légères/minimales (style institutionnel) |
| **Radius** | 0px ou 4px (style sérieux) |

## 📦 Composants Réutilisables

### Button
```tsx
import { Button } from '@components';

<Button 
  variant="primary|secondary|tertiary"
  size="sm|md|lg"
  fullWidth={false}
  onClick={() => {}}
>
  Texte
</Button>
```

### Card
```tsx
<Card className="p-6">
  Contenu
</Card>
```

### Input / TextArea
```tsx
<Input
  label="Email"
  type="email"
  error="Message d'erreur"
  required
/>

<TextArea
  label="Message"
  helperText="Aide"
/>
```

### Accordion
```tsx
<Accordion 
  items={[
    { id: '1', title: 'Q1', content: 'Réponse' },
  ]}
/>
```

### Pagination
```tsx
<Pagination
  currentPage={1}
  totalPages={5}
  onPageChange={(page) => {}}
/>
```

### Alert
```tsx
<Alert
  type="success|error|warning|info"
  title="Titre"
  message="Message"
/>
```

## 🎣 Hooks Personnalisés

### useScrollAnimation
Déclenche une animation quand un élément devient visible:

```tsx
const { elementRef, isVisible } = useScrollAnimation(0.1);

<div ref={elementRef} className={isVisible ? 'fade-in' : ''}>
  Contenu
</div>
```

### usePagination
Gère la pagination de listes:

```tsx
const { currentPage, totalPages, currentItems, goToPage } = usePagination(items, 10);
```

### useForm
Gère les états de formulaire:

```tsx
const { values, errors, handleChange, handleBlur, resetForm } = 
  useForm({ name: '', email: '' });
```

## 🛠️ Utilitaires

- `cn()` - Combiner les classes CSS
- `formatDate()` - Formater une date
- `truncateText()` - Tronquer un texte
- `isValidEmail()` - Valider un email
- `scrollToElement()` - Scroll lisse vers un élément

## 📄 Types TypeScript

Les types principaux sont définis dans `src/types/index.ts`:

```tsx
interface Mission { id, title, description, icon, color }
interface NewsArticle { id, title, excerpt, content, category, imageUrl, date, author }
interface TeamMember { id, name, role, bio, imageUrl }
interface ContactFormData { name, email, subject, message }
```

## 🎨 Personnalisation du Design

### Modifier les couleurs

Éditez `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#0033A0',  // Bleu institutionnel
    600: '#002e8a',
  },
  secondary: {
    500: '#C9A227',  // Or
  },
}
```

### Modifier l'espacemement

```js
spacing: {
  'xs': '4px',
  'sm': '8px',
  'md': '12px',
  // ...
}
```

### Modifier la typographie

```js
fontSize: {
  'base': ['16px', { lineHeight: '24px' }],
  // ...
}
```

## 📱 Breakpoints Responsive

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

Utilisez: `md:flex`, `lg:grid-cols-3`, etc.

## ♿ Accessibilité (WCAG)

Le site est conforme aux normes WCAG 2.1:

✅ **Navigation clavier**
- Focus visible sur tous les éléments interactifs
- Tab order logique

✅ **Contrastes**
- Ratio minimum 4.5:1 pour le texte
- Ratio minimum 3:1 pour les éléments graphiques

✅ **ARIA**
- `aria-label` pour les icônes
- `aria-expanded` pour accordions/menus
- `aria-invalid` pour les erreurs de formulaire

✅ **Structure HTML**
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- Hiérarchie de titres correcte (H1 → H2 → H3)

✅ **Lecteur d'écran**
- `role="alert"` pour les alertes
- `role="navigation"` pour les barres de navigation
- Alt text sur toutes les images

## 🔄 Workflow de Développement

### Ajouter une nouvelle page

1. Créer `src/pages/NewPage.tsx`
2. Ajouter la route dans `App.tsx`
3. Ajouter le lien dans `Header.tsx`

### Ajouter un nouveau composant

1. Créer `src/components/NewComponent.tsx`
2. Exporter depuis `src/components/index.ts`
3. Importer et utiliser: `import { NewComponent } from '@components'`

### Ajouter un hook personnalisé

1. Créer dans `src/hooks/useNewHook.ts`
2. Exporter depuis `src/hooks/index.ts`
3. Utiliser: `import { useNewHook } from '@hooks'`

## 📊 SEO & Performance

### Meta Tags
Éditer `index.html`:
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta property="og:title" content="...">
```

### Lazy Loading Images
```tsx
<img src="..." loading="lazy" alt="..." />
```

### Code Splitting
Les routes React Router créent automatiquement des chunks.

### Compression
Vite minifie automatiquement le code.

## 🚀 Déploiement

### Sur Vercel
```bash
npm install -g vercel
vercel
```

### Sur Netlify
```bash
npm run build
# Uploader le dossier dist/
```

### Sur un serveur

```bash
npm run build
# Copier dist/ vers le serveur
```

## 🧪 Testing (Optionnel)

Pour ajouter des tests:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Créer `src/__tests__/Button.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@components';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## 🌐 i18n (Internationalisation - Optionnel)

Pour ajouter le multilingue (FR/EN/ES):

```bash
npm install i18next react-i18next
```

Créer `src/i18n/locales/fr.json`, `en.json`, `es.json`

## 📚 Ressources Ontario Design System

- Composants: `ontario-design-system-develop/packages/ontario-design-system-component-library-react`
- Styles: `ontario-design-system-develop/packages/ontario-design-system-global-styles`
- Design Tokens: `ontario-design-system-develop/packages/ontario-design-system-design-tokens`

## 🔗 Références

- [Ontario Design System](../ontario-design-system-develop/)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

## 📞 Support

Contactez l'équipe: contact@ompdd.org

---

**Dernière mise à jour:** Mai 2024
