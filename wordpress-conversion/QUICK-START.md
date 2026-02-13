# Conversion Le CLEE vers WordPress - GUIDE RAPIDE

## Fichiers créés

✅ **template-le-clee.php** - Template de page WordPress
✅ **le-clee-styles.css** - Tous les styles CSS de la page
✅ **functions-le-clee.php** - Code PHP à ajouter dans functions.php
✅ **README.md** - Guide complet d'installation

## Installation en 5 étapes

### 1️⃣ Copier le template
```
template-le-clee.php → wp-content/themes/votre-theme/template-le-clee.php
```

### 2️⃣ Copier les styles CSS
```
le-clee-styles.css → wp-content/themes/votre-theme/css/le-clee-styles.css
```

### 3️⃣ Ajouter le code dans functions.php
Ouvrir `wp-content/themes/votre-theme/functions.php` et ajouter le contenu de `functions-le-clee.php` à la fin.

### 4️⃣ Créer la page WordPress
- WordPress Admin → Pages → Ajouter
- Titre : "Le CLEE"
- Template : Sélectionner "Le CLEE" dans Attributs de page
- Publier

### 5️⃣ Visiter la page
`https://votre-site.com/le-clee`

## Ce qui est inclus

✅ Tout le HTML converti en PHP WordPress
✅ Tous les styles CSS (identiques à la version statique)
✅ Variables CSS globales (design system complet)
✅ Breadcrumb (fil d'ariane)
✅ Hero section avec overlay
✅ Sections : Intro, Mission, Objectifs, Sous-pages
✅ Design responsive (mobile, tablette, desktop)
✅ Liens WordPress dynamiques avec `home_url()`

## Conseils importants

⚠️ **Utilisez un child theme** pour éviter de perdre vos modifications lors des mises à jour

⚠️ **Vérifiez les chemins** des fichiers CSS/JS dans functions-le-clee.php

⚠️ **Adaptez le header/footer** selon votre thème WordPress

## Documentation complète

Consultez [README.md](README.md) pour :
- Guide détaillé étape par étape
- Personnalisation avancée
- Résolution de problèmes
- Conversion d'autres pages

---

**Besoin d'aide ?** Consultez la section "Problèmes courants" dans README.md
