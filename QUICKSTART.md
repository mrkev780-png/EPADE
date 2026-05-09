# Quick Start Guide - OMPDD Website

## 🚀 Démarrage Rapide (2 minutes)

### 1. Installation des dépendances
```bash
cd ompdd-website
npm install  # ou pnpm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Le site s'ouvrira automatiquement sur http://localhost:3000 ✨

### 3. Commandes principales

| Commande | Fonction |
|----------|----------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm run preview` | Preview du build |
| `npm run type-check` | Vérifier les types TypeScript |
| `npm run lint` | Vérifier le code |

## 📁 Structure Rapide

```
src/
├── components/       ← Composants réutilisables
├── pages/           ← Pages du site (6 pages)
├── hooks/           ← Hooks personnalisés
├── utils/           ← Utilitaires
├── types/           ← Types TypeScript
├── styles/          ← Styles globaux
├── data/            ← Données mockées
├── App.tsx          ← Routing principal
└── main.tsx         ← Point d'entrée
```

## 🎨 Palettes de Couleurs

Utiliser dans Tailwind:
- `bg-primary-500` → Bleu institutionnel (#0033A0)
- `bg-secondary-500` → Or (#C9A227)
- `bg-neutral-100` → Gris très clair
- `text-neutral-900` → Texte sombre

## 🧩 Exemple d'Ajout de Contenu

### Ajouter une section à la page d'accueil

1. Ouvrir `src/pages/HomePage.tsx`
2. Ajouter une nouvelle section `<section>`
3. Utiliser les composants: `Button`, `Card`, etc.

```tsx
<section className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-neutral-900 mb-8">
      Titre
    </h2>
    <Button>Cliquez-moi</Button>
  </div>
</section>
```

## 🔧 Modifications Courantes

### Changer les couleurs
→ Éditer `tailwind.config.js` (section colors)

### Ajouter une nouvelle page
1. Créer `src/pages/NewPage.tsx`
2. Ajouter route dans `App.tsx`
3. Ajouter lien dans `Header.tsx`

### Modifier le header/footer
→ Éditer `src/components/layout/Header.tsx` ou `Footer.tsx`

### Ajouter un formulaire
Utiliser `useForm` hook:

```tsx
import { useForm } from '@hooks';
import { Input, Button } from '@components';

const { values, errors, handleChange } = useForm({
  name: '',
  email: '',
});

// Dans le JSX:
<Input
  name="name"
  value={values.name}
  onChange={handleChange}
  error={errors.name}
/>
```

## 📱 Tester la Responsivité

1. Ouvrir DevTools (F12)
2. Cliquer sur l'icône "Toggle device toolbar" (Ctrl+Shift+M)
3. Tester sur différentes tailles

## 🧪 Tester l'Accessibilité

1. DevTools → Lighthouse
2. Cliquer "Analyze page load"
3. Vérifier la note d'accessibilité

## 📦 Déployer

### Sur Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Sur Netlify
```bash
npm run build
# Uploader le dossier dist/
```

## 🆘 Problèmes Communs

**"npm install" échoue**
→ Essayer: `npm cache clean --force` puis `npm install`

**Le port 3000 est utilisé**
→ Changer dans `vite.config.ts` (server.port)

**Tailwind CSS ne fonctionne pas**
→ Vérifier que les fichiers ont l'extension `.tsx`
→ Redémarrer le serveur: Ctrl+C puis `npm run dev`

## 📚 Ressources

- [Documentation Complète](./DEVELOPMENT.md)
- [Components Guide](./src/components/index.ts)
- [Types](./src/types/index.ts)

## ✅ Checklist avant déploiement

- [ ] Vérifier tous les liens de navigation
- [ ] Tester la responsivité mobile
- [ ] Vérifier l'accessibilité WCAG
- [ ] Build en production: `npm run build`
- [ ] Preview: `npm run preview`
- [ ] Vérifier les images chargent correctement

---

Besoin d'aide? Contactez: contact@ompdd.org
