# Changelog - CLEE Bordeaux Avenir

## [23/01/2026] - Déplacement de index.html à la racine

### Changements structurels

#### Réorganisation de l'architecture
- Déplacement de `pages/index.html` vers la racine du projet: `./index.html`
- Mise à jour de tous les liens et chemins dans les 17 pages HTML
- Modification des chemins CSS/JS dans index.html (de `../css/` vers `css/`)
- Modification des chemins assets dans index.html (de `../assets/` vers `assets/`)
- Mise à jour des liens de navigation (de `[page].html` vers `pages/[page].html`)

#### Avantages de cette structure
1. **Déploiement simplifié** : Vercel, Netlify et autres plateformes détectent automatiquement index.html à la racine
2. **Convention standard** : Respecte la convention web classique avec index.html comme point d'entrée
3. **Configuration minimale** : Aucune configuration de routing nécessaire sur les plateformes de déploiement
4. **SEO optimisé** : URL propre pour la page d'accueil (`/` au lieu de `/pages/`)

#### Documentation mise à jour
- README.md : Structure du projet actualisée
- PAGES-STRUCTURE.md : Arborescence reflétant la nouvelle organisation
- .github/copilot-instructions.md : Règles de chemins mises à jour

### Structure actuelle du projet

```
CLEE-Bordeaux-Site/
├── index.html       # Page d'accueil à la racine
├── pages/           # 16 pages HTML statiques
├── css/             # Stylesheets modulaires
├── js/              # JavaScript modulaire
└── assets/          # Images et médias
```

---

## [23/01/2026] - Refactoring majeur : Passage au full-static

### Changements importants

#### Suppression de la version WordPress
- Retrait complet du dossier `php/clee-bordeaux-theme/`
- Le projet se concentre maintenant exclusivement sur le site statique HTML/CSS/JS
- Simplification de l'architecture (plus de synchronisation HTML ↔ WordPress)

#### Mise à jour de la documentation
- Mise à jour des instructions Copilot (`.github/copilot-instructions.md`)
- Nettoyage du README.md (suppression des références WordPress)
- Ajout d'une note explicative sur le changement de stratégie

### Avantages du passage au full-static

1. **Performance** : Temps de chargement optimaux sans base de données
2. **Sécurité** : Aucune vulnérabilité WordPress à gérer
3. **Déploiement** : Compatible avec tous les hébergeurs statiques (GitHub Pages, Netlify, Vercel, etc.)
4. **Maintenance** : Une seule version à maintenir au lieu de deux
5. **Coûts** : Hébergement gratuit possible avec les services statiques

### Structure actuelle du projet

```
CLEE-Bordeaux-Site/
├── index.html       # Page d'accueil à la racine
├── pages/           # 16 pages HTML statiques
├── css/             # Stylesheets modulaires
├── js/              # JavaScript modulaire
└── assets/          # Images et médias
```

### Options de déploiement

Le site peut maintenant être déployé facilement sur :
- GitHub Pages
- Netlify
- Vercel
- Surge
- AWS S3 + CloudFront
- Tout serveur web (Apache, Nginx)

### Migration future

Si un CMS devient nécessaire à l'avenir, les options incluent :
- Headless CMS (Strapi, Contentful, Sanity)
- Générateurs de sites statiques (Hugo, Jekyll, 11ty)
- JAMstack avec API REST/GraphQL
