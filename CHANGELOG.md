# Changelog - CLEE Bordeaux Avenir

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
├── pages/           # 17 pages HTML statiques
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
