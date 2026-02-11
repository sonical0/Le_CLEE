# CLEE Bordeaux Avenir - Site Web Institutionnel

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-blue)](https://web.dev/responsive-web-design-basics/)

> **Note importante** : Ce projet se concentre désormais exclusivement sur le développement statique HTML/CSS/JS. La version WordPress (anciennement dans `php/`) a été retirée pour simplifier la maintenance et améliorer les performances. Le site est maintenant déployable sur n'importe quel serveur web ou hébergement statique (GitHub Pages, Netlify, Vercel, etc.).

---


## Règle de contribution

À chaque modification du projet, il est obligatoire de mettre à jour le fichier `README.md` (documentation, tâches, instructions) et le fichier `CHANGELOG.md` (historique des changements).
Chaque contribution ou correction doit être reflétée dans ces deux fichiers pour garantir la traçabilité et la clarté du projet.

## Convention de commit

Le projet utilise la convention **Conventional Commits** pour standardiser les messages de commit :

**Format** : `type(scope): description`

**Types courants** :
- `feat`: nouvelle fonctionnalité
- `fix`: correction de bug
- `refactor`: refactorisation sans changement de comportement
- `style`: formatage, espaces, ponctuation
- `docs`: modifications de documentation
- `chore`: maintenance, dépendances, build
- `perf`: amélioration de performance
- `test`: ajout ou modification de tests

**Exemples** :
```
feat(portail): add student theme switcher with localStorage persistence
fix(navbar): correct dropdown menu z-index on mobile devices
refactor(nos-actions): remove frequency/impact metadata from action cards
docs(readme): update installation instructions
```

Voir `.github/copilot-instructions.md` pour plus de détails.

## Liste de tâches - Retour entretien CLEE

### Modifications prioritaires
- [x] Retirer MEDEF du footer
- [x] Diminuer le scroll de l'accueil
- [x] Rendre chaque icône/logo du carrousel cliquable vers le site correspondant
- [ ] Ajouter une page ressources rassemblant les entreprises d'information qui ne sont pas autour de la table
- [x] Supprimer les options téléphone et adresse ainsi que l'engagement de délai de la page Contact
- [ ] Objet du formulaire de contact à customiser côté administrateur
- [x] Déplacer l'agenda directement dans la page Vie du CLEE pour éviter le publipostage sur plusieurs pages
- [x] Retirer les majuscules en milieu de phrase
- [x] Remplacer le logo du CLEE par celui de la charte graphique
- [ ] Décider et uniformiser : CLEE ou CLEE ou Clée pour le SEO
- [x] Retirer convention de stage et livret de suivi, remplacer par les documents officiels

### Améliorations UX/UI
- [x] Ajouter une barre de recherche avec option filtre dans la page établissements et formations
- [x] Remplacer le terme PFMP par "stage" pour vulgariser
- [x] Améliorer le header pour ajouter les sous-pages par catégorie en liste déroulante
- [x] Adapter la surbrillance des boutons avec les couleurs de la charte graphique
- [x] Faire un portail étudiant/pro avec un style CSS qui change selon la catégorie d'utilisateur (transformé en page d'accessibilité)
- [x] Améliorer la lisibilité de la section "Notre impact" en mode étudiant avec surbrillance adoucie
- [x] Ajouter une barre de recherche sur la page Entreprises & Partenaires
- [ ] Sur le ruban sous le header, ajouter un calque avec une photo et reprendre les couleurs de la charte graphique
- [ ] **ATTENTION : Respecter les règles d'accessibilité pour les couleurs**

### Mentions légales et contenu
- [ ] Déplacer le bloc crédit photos dans les mentions légales

### Validation et présentation
- [ ] Mettre en place la maquette sur Cercle pour que les clients puissent la consulter avec leurs associés
- [ ] **13 mars : Nouvelle présentation de la maquette**

---

## À propos du projet

**CLEE Bordeaux Avenir** est une organisation qui renforce les ponts entre le monde éducatif et le tissu économique local. Ce projet est le site web institutionnel de l'organisation, conçu pour faciliter les interactions entre :

- **Entreprises partenaires** : Accès aux talents, participation aux formations, opportunités de stages
- **Établissements scolaires** : Lycées professionnels, centres de formation, réseau de formations
- **Jeunes et familles** : Orientation, insertion professionnelle, stages (PFMP), ressources
- **Vie associative** : Événements, actualités, actions du CLEE

### Mission du CLEE

> "Créer des opportunités de stages, d'apprentissages et préparer les jeunes talents aux défis de demain en connectant le monde éducatif et économique de la région bordelaise."

---

## Fonctionnalités principales

### Accessibilité
- **Bannière de notification** : Au premier lancement, propose d'activer le mode contraste élevé
  - Ne s'affiche qu'une seule fois (persistance localStorage)
  - Trois actions : Activer, Non merci, Fermer
  - Lien vers les options d'accessibilité complètes
- **Options d'accessibilité** : Taille de texte, contraste élevé, réduction d'animations
- **Persistance** : Les préférences sont sauvegardées dans le navigateur (localStorage)
- **Page dédiée** : [pages/portail.html](pages/portail.html) accessible à tout moment
- **Thème par défaut** : Le site utilise le thème étudiant pour tous les utilisateurs
- **Réglages personnalisables** :
  - 4 niveaux de taille de police (Petit, Normal, Grand, Très grand)
  - Mode contraste élevé pour faciliter la lecture
  - Option de réduction des animations pour les personnes sensibles aux mouvements
- Thème étudiant : couleurs de texte renforcées pour un contraste minimum de 4,5:1
- Portail accessibilité : footer synchronisé via hero masqué
- Portail accessibilité : hauteur du hero alignée sur les autres pages
- Portail accessibilité : calque hero affiché sur l'en-tête

### Page d'accueil
- **Hero section** dynamique avec appel à l'action et boutons CTA optimisés (couleurs charte graphique, ombres au survol)
- Calque visuel sur le hero avec image de remplacement à mettre à jour
- **Actualités** du CLEE et événements récents (section agenda désormais dans vie-clee.html)
- **Chiffres clés** animés (compteurs dynamiques) avec surbrillance améliorée en mode étudiant
- **Section contact** rapide avec texte mis à jour
- Fil d'Ariane sans fond, texte en noir avec contraste du hero
- Fil d'Ariane superposé au hero pour conserver le fond visuel
- Menu déroulant harmonisé avec les couleurs des sections
- Menu déroulant aéré et sans fond bleu marine
- Couleurs de texte des hovers de navigation renforcées pour le contraste
- Connexion : footer synchronisé via hero masqué
- Footer synchronisé avec le hero sur toutes les pages (y compris Vie du CLEE)
- Footer synchronisé avec l'image du hero (calque partagé, bas de l'image visible)

### Espace Entreprises & Partenaires
- **Catalogue des entreprises partenaires** avec système de filtrage multi-critères
- **Barre de recherche en temps réel** pour retrouver rapidement une entreprise par son nom
- Barre de recherche ajustée pour une hauteur fixe de 56px
- Hero harmonisé avec l'accueil (calque photo)
- Hauteur de hero alignée sur l'accueil
- **Filtrage dynamique** des cartes partenaires avec feedback visuel instantané
- **Avantages du partenariat** clairement détaillés
- **Processus de candidature** guidé
- **Témoignages** d'entreprises partenaires
- **Formulaire de contact** dédié
- Formulaire établissements : tags de type de stage à la place de "modalité"

### Établissements & Formations
- Carte interactive basée sur Leaflet/OpenStreetMap (sans clé API)
- Liste d'établissements générée depuis le JSON
- Points de carte générés à partir des coordonnées JSON
- Points des collèges en rouge
- Cartes établissement générées depuis le JSON
- Informations affichées sur plusieurs lignes avec libellés en gras
- Footer synchronisé avec l'image du hero (calque invisible sur la page)
- **Filtrage par secteur** (Commerce, Industrie, Services, Hôtellerie-Restauration)
- **Catalogue de formations** avec descriptions complètes
- **Informations PFMP** (Périodes de Formation en Milieu Professionnel)

### Page Stages (PFMP)
- Hero harmonisé avec l'accueil (calque photo)
- Lisibilité du texte du hero sécurisée (empilement du calque)
- Suppression des calendriers PFMP par formation
- Bloc "Modèles pour vos Candidatures" : structure et padding corrigés
- **Tableau des formations** avec système de pagination complet :
  - Affichage par défaut de 5 formations par page
  - Sélecteur personnalisé (5, 10, 15, 20, 50 résultats par page)
  - Navigation par pages avec boutons précédent/suivant
  - Numéros de page cliquables avec ellipses pour grandes listes
  - Compteur de résultats affichant "Affichage de X à Y sur Z formation(s)"
  - Tri par colonnes (établissement, formation, secteur, niveau, modalités, périodes)
  - Filtres multicritères (établissement, secteur, niveau, modalité, recherche textuelle)
  - Réinitialisation à la page 1 lors du changement de filtres ou tri
- Calendriers de stages : suppression du PDF "Calendrier des stages"
- Liens utiles : grille 3x2 sur PFMP
- PFMP ou Stage : cartes en 2 colonnes (PFMP/Stage)

### Espace Jeunes & Familles
- **Ressources d'orientation** professionnelle
- Hero harmonisé avec l'accueil (calque photo)
- Hauteur de hero alignée sur l'accueil
- Lisibilité du texte du hero sécurisée (empilement du calque)
- **Guide d'insertion** dans le monde du travail (contenu amélioré et clarifié)
- **Informations stages** et apprentissage
- **Témoignages** d'anciens élèves
- Interface simplifiée avec contenu pertinent et actualisé
- Orientation & insertion : hero et footer synchronisés avec le calque
- Vie du CLEE élèves : hero et footer synchronisés avec le calque
### Vie du CLEE
- **Actualités** du réseau école-entreprise
- Hero harmonisé avec l'accueil (calque photo)
- Hauteur de hero alignée sur l'accueil
- **Agenda complet** des événements (anciennement sur index.html)
- **Galerie photos/vidéos** des événements
- Interface simplifiée (modal de contact supprimée)
- Agenda : dates en texte orange primaire
- Agenda (vue liste) : dates en blanc
- Agenda : hero et footer synchronisés avec le calque

### Présentation institutionnelle
- **Histoire et mission** du CLEE
- Hero harmonisé avec l'accueil (calque photo)
- Hauteur de hero alignée sur l'accueil
- **Bureau et membres** de l'organisation
- **Actions et projets** en cours
- **Documents officiels** (statuts, rapports, PV)
- Hero harmonisé avec l'accueil sur les sous-pages Le CLEE (bureau, actions, documents)

---

## Architecture du projet

Le site utilise une **architecture modulaire** pour optimiser la maintenance et les performances :
- **globals.css** : Composants et styles partagés (header, footer, boutons)
- **CSS page-specific** : Styles uniques à chaque page
- **common.js** : Modules JavaScript réutilisables
- **JS page-specific** : Logique spécifique aux pages
- **Composants JS** : Web Components centralisés dans `js/components/` (ex: bouton principal utilisé sur companies et establishments)

### Avantages
- Mise en cache optimale (globals.css chargé une fois pour toutes les pages)
- Maintenance simplifiée (modifier globals.css = impact sur tout le site)
- Performance maximale (~55KB total, réduction de 40% vs code dupliqué)

---

## Design System centralisé
Toutes les variables de design sont définies dans [css/globals.css](css/globals.css) :

### Palette de couleurs

```css
:root {
  /* Couleurs primaires (Bleu) */
  --primary-900: rgba(31, 52, 72, 1);      /* Bleu très foncé */
  --primary-800: rgba(49, 73, 96, 1);
  --primary-700: rgba(68, 95, 122, 1);
  --primary-600: rgba(81, 110, 140, 1);
  --primary-500: rgba(94, 126, 159, 1);    /* Bleu moyen */
  --primary-400: rgba(153, 173, 194, 1);
  --primary-300: rgba(184, 199, 214, 1);
  --primary-200: rgba(214, 224, 235, 1);
  --primary-100: rgba(229, 236, 245, 1);
  --secondary-500: rgba(255, 136, 73, 1);  /* Orange */
  --secondary-50: rgba(255, 240, 229, 1);  /* Orange clair */
}

### Typographie

```css
:root {
  --navbar-text-font-family: "Roboto", sans-serif;
  --titre-font-family: "Barlow Condensed", sans-serif;
  --body-text-font-family: "Roboto", sans-serif;
  
  --text-sm: 0.875rem;  /* 14px */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-2xl: 1.5rem;   /* 24px */
  --text-3xl: 2rem;     /* 32px */
  --text-4xl: 2.5rem;   /* 40px */
}
```

### Espacements et ombres

```css
:root {
  /* Espacements */
  --spacing-xs: 0.5rem;  /* 8px */
  --spacing-sm: 1rem;    /* 16px */
  --spacing-md: 1.5rem;  /* 24px */
  --spacing-lg: 2rem;    /* 32px */
  --spacing-xl: 3rem;    /* 48px */
  --spacing-2xl: 4rem;   /* 64px */
  
  /* Ombres */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

**Avantages du système de tokens** :
- **Cohérence visuelle** garantie sur toutes les pages
- **Modifications centralisées** (changer `--primary-500` = impact sur tout le site)
- **Accessibilité** facilitée (contraste, lisibilité)
- **Thème sombre** implémentable en redéfinissant les variables

---

## Modules JavaScript (Architecture IIFE)

### Modules partagés ([js/common.js](js/common.js))

Toutes les fonctionnalités réutilisables sont encapsulées dans des **modules autonomes** avec le pattern IIFE (Immediately Invoked Function Expression) :

```javascript
// Module de navigation (menu mobile/desktop)
const NavigationModule = (() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  const init = () => {
    menuToggle?.addEventListener('click', toggleMenu);
  };
  
  const toggleMenu = () => {
    navLinks.classList.toggle('active');
    // ... logique
  };
  
  return { init };
})();

// Module de smooth scroll sur ancres
const SmoothScrollModule = (() => {
  const init = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });
  };
  return { init };
})();

// Module d'animation au scroll (Intersection Observer)
const ScrollAnimationModule = (() => {
  const init = () => {
    const observer = new IntersectionObserver(handleIntersection, options);
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  };
  return { init };
})();

// Auto-initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  NavigationModule.init();
  SmoothScrollModule.init();
  HeaderScrollModule.init();
  ScrollAnimationModule.init();
  CounterModule.init();
  ActiveLinkModule.init();
});
```

**Modules disponibles** :
- **NavigationModule** : Toggle menu mobile, gestion responsive
- **SmoothScrollModule** : Défilement smooth vers ancres
- **HeaderScrollModule** : Ombre sur le header au scroll
- **ScrollAnimationModule** : Animations au scroll (Intersection Observer API)
- **CounterModule** : Animation des chiffres (compteurs incrémentaux)
- **ActiveLinkModule** : Highlight du lien actif dans la navigation

### Modules page-spécifiques

- **companies.js** ([js/companies.js](js/companies.js))
  - Filtrage multi-critères des entreprises partenaires
  - Recherche dynamique dans le catalogue
  
- **establishments.js** ([js/establishments.js](js/establishments.js))
  - Carte interactive Google Maps
  - Affichage fiches établissements
  - Filtrage par secteur d'activité
  - Détails formations expandables
  
- **agenda.js** ([js/agenda.js](js/agenda.js))
  - Calendrier événementiel interactif
  - Filtrage par type d'événement
  
- **vie-clee.js** ([js/vie-clee.js](js/vie-clee.js))
  - Affichage dynamique des événements
  
- **contact.js** ([js/contact.js](js/contact.js))
  - Validation formulaire
  - Gestion soumission

---

## Installation & Utilisation

### Version statique (HTML/CSS/JS)

**Prérequis** : Aucun ! Serveur web basique ou ouverture directe dans un navigateur.

```bash
# 1. Cloner le repository
git clone https://github.com/votre-org/clee-bordeaux-site.git
cd clee-bordeaux-site

# 2. Ouvrir avec un serveur local (optionnel, évite problèmes CORS)

# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server -p 8000

# Avec PHP
php -S localhost:8000

# 3. Accéder au site
# http://localhost:8000/pages/index.html
```

**Ou simplement** : Double-cliquer sur `index.html` (fonctionne sans serveur).

---

## Guide de développement

### Ajouter une nouvelle page

```bash
# 1. Créer le fichier HTML
touch pages/nouvelle-page.html

# 2. Créer le CSS spécifique (si nécessaire)
touch css/nouvelle-page.css

# 3. Créer le JS spécifique (si nécessaire)
touch js/nouvelle-page.js
```

**Structure minimale de la page** :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle Page - CLEE Bordeaux Avenir</title>
    
    <!-- OBLIGATOIRE : globals.css -->
    <link rel="stylesheet" href="../css/globals.css">
    
    <!-- Page-specific CSS -->
    <link rel="stylesheet" href="../css/nouvelle-page.css">
</head>
<body>
    <!-- OBLIGATOIRE : Copier le header depuis une autre page -->
    <header class="header">
        <!-- ... navigation ... -->
    </header>
    
    <!-- Contenu spécifique de la page -->
    <main>
        <!-- ... -->
    </main>
    
    <!-- OBLIGATOIRE : Copier le footer depuis une autre page -->
    <footer class="footer">
        <!-- ... -->
    </footer>
    
    <!-- OBLIGATOIRE : common.js -->
    <script src="../js/common.js"></script>
    
    <!-- Page-specific JS -->
    <script src="../js/nouvelle-page.js"></script>
</body>
</html>
```

### Modifier des styles partagés

**Règle d'or** : Toute modification de composant partagé (header, footer, boutons) se fait dans [css/globals.css](css/globals.css).

```bash
# Éditer globals.css
code css/globals.css
```

**Exemple : Changer la couleur primaire**

```css
/* css/globals.css */
:root {
  --primary-500: rgba(100, 150, 200, 1); /* Nouvelle couleur */
}
```

→ Impact automatique sur **toutes les pages** (boutons, liens, header, etc.).

### Ajouter un module JavaScript réutilisable

```javascript
// js/common.js

const NouveauModule = (() => {
  const init = () => {
    // Logique d'initialisation
  };
  
  const methodePublique = () => {
    // Fonctionnalités exportées
  };
  
  return { init, methodePublique };
})();

// Initialiser dans DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // ... modules existants
  NouveauModule.init();
});
```

---

## Performance & Optimisation

### Métriques de performance

| Métrique | Valeur | Détails |
|----------|--------|---------|
| **Taille totale** | ~55 KB | CSS + JS (minifié) |
| **Réduction vs duplication** | **-40%** | Grâce à l'architecture modulaire |
| **Time to Interactive** | < 2s | Sur connexion 3G |
| **First Contentful Paint** | < 1.5s | Optimisations images WebP |
| **Lighthouse Score** | 95+ | Performance, Accessibilité, SEO |

### Optimisations appliquées

**CSS**
- Variables CSS (design tokens centralisés)
- Sélecteurs optimisés (évite imbrication excessive)
- Media queries mobile-first
- Animations GPU (transform, opacity uniquement)

**JavaScript**
- Modules IIFE (pas de pollution namespace global)
- Event delegation où possible
- Intersection Observer (lazy animations)
- Pas de dépendances externes (vanilla JS)

**Images**
- Format WebP recommandé (fallback JPEG/PNG)
- Lazy loading natif (`loading="lazy"`)
- Responsive images (`srcset`)

**Chargement**
- CSS critique inline (optionnel)
- Scripts en fin de `<body>` ou `defer`
- DNS prefetch pour ressources externes

### Tests de compatibilité

| Navigateur | Version minimale | Statut |
|------------|------------------|--------|
| Chrome | 90+ | Testé |
| Firefox | 88+ | Testé |
| Safari | 14+ | Testé |
| Edge | 90+ | Testé |
| Mobile Safari (iOS) | 14+ | Testé |
| Chrome Mobile (Android) | 90+ | Testé |

### Responsive breakpoints

```css
/* Mobile first */
/* Base : < 768px (mobile) */

@media (min-width: 768px) {
  /* Tablette */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1440px) {
  /* Large desktop */
}
```

---

## Accessibilité (WCAG 2.1 AA)

### Standards respectés

**Sémantique HTML** : Utilisation correcte des balises `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`

**ARIA labels** : Navigation (`aria-label`, `aria-expanded`, `aria-current`)

**Contraste** : Ratio minimum 4.5:1 (texte normal), 3:1 (texte large)

**Navigation clavier** : Focus visible, ordre logique

**Images** : Attributs `alt` descriptifs

**Formulaires** : Labels associés, messages d'erreur clairs

### Tests effectués

- **Lighthouse Accessibility** : Score 95+
- **axe DevTools** : Aucune violation critique
- **Lecteur d'écran** : NVDA/VoiceOver testés
- **Navigation clavier** : Tab, Shift+Tab, Enter, Espace

---

## Tests

### Checklist de validation

#### Fonctionnalités de base
- Navigation menu mobile/desktop
- Smooth scroll vers ancres
- Header shadow au scroll
- Animations au scroll (Intersection Observer)
- Liens internes entre pages
- Liens externes (target="_blank", rel="noopener")

#### Pages spécifiques
- **Accueil** : Compteurs animés, actualités, agenda
- **Entreprises** : Filtres partenaires, recherche
- **Établissements** : Carte interactive, fiches détaillées, filtrage
- **Agenda** : Calendrier événements, filtres
- **Contact** : Validation formulaire

#### Responsive
- Mobile (320px - 767px)
- Tablette (768px - 1023px)
- Desktop (1024px+)
- Large desktop (1440px+)

### Lancer les tests

```bash
# Tests manuels
# 1. Ouvrir pages/index.html dans navigateurs
# 2. Tester toutes les fonctionnalités
# 3. Vérifier responsive (DevTools)

# Tests automatisés (optionnel)
# npm test (si configuré)
```

---

## 📖 Documentation complémentaire

- 📄 [PAGES-STRUCTURE.md](PAGES-STRUCTURE.md) - Hiérarchie complète des pages
- 📄 [ACCESSIBILITE-GUIDE.md](ACCESSIBILITE-GUIDE.md) - Guide des options d'accessibilité
- 📄 [PORTAIL-GUIDE.md](PORTAIL-GUIDE.md) - Ancien système de portail (obsolète, voir ACCESSIBILITE-GUIDE.md)
- 📄 [IMPLEMENTATION-SUMMARY.md](IMPLEMENTATION-SUMMARY.md) - Résumé des implémentations principales
- 📄 [CHANGELOG.md](CHANGELOG.md) - Historique détaillé des modifications
- 📄 [.github/copilot-instructions.md](.github/copilot-instructions.md) - Instructions pour AI agents

---

## 🛠️ Technologies utilisées

- **HTML5** : Sémantique moderne
- **CSS3** : Custom Properties, Flexbox, Grid, Animations
- **JavaScript ES6+** : Modules IIFE, Intersection Observer API, localStorage
- **Leaflet** : Carte interactive établissements (OpenStreetMap)

**Aucune dépendance externe** (pas de jQuery, pas de frameworks) → Performance maximale.

---

## 🤝 Contribution

### Workflow Git

```bash
# 1. Créer une branche pour la nouvelle fonctionnalité
git checkout -b feature/nouvelle-fonctionnalite

# 2. Faire les modifications
# - Éditer pages/*.html
# - Éditer css/*.css
# - Éditer js/*.js

# 3. Tester dans le navigateur
# - Ouvrir index.html
# - Vérifier responsive
# - Tester toutes les fonctionnalités

# 4. Commit avec convention Conventional Commits
git add .
git commit -m "feat(scope): description de la fonctionnalité"

# 5. Push et Pull Request
git push origin feature/nouvelle-fonctionnalite
```

### Conventions de code

**CSS** :
- Classes en `kebab-case` : `.hero-section`, `.nav-link`
- Toujours utiliser des variables CSS : `var(--primary-500)` au lieu de valeurs hardcodées
- Mobile-first : styles de base pour mobile, `@media (min-width: ...)` pour desktop

**JavaScript** :
- Modules en `PascalCase` : `NavigationModule`, `ScrollAnimationModule`
- Variables/fonctions en `camelCase` : `initMenu`, `handleClick`
- Toujours déclarer avec `const` (ou `let` si réassignation nécessaire)

**HTML** :
- Attributs `alt` descriptifs pour images
- Attributs ARIA où approprié
- Sémantique HTML5 : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

---

## Problèmes courants & Solutions

### Les styles ne s'appliquent pas

**Problème** : CSS non chargé ou styles incorrects

**Solutions** :
1. Vérifier les chemins relatifs : `../css/globals.css` depuis `pages/`
2. Vérifier que `globals.css` est chargé **avant** le CSS page-specific
3. Vider le cache navigateur (Ctrl+Shift+R / Cmd+Shift+R)
4. Vérifier la console pour erreurs 404

### JavaScript ne fonctionne pas

**Problème** : Fonctionnalités interactives non opérationnelles

**Solutions** :
1. Vérifier que `common.js` est chargé **avant** les scripts page-specific
2. Ouvrir la console (F12) et chercher les erreurs JavaScript
3. Vérifier que les modules sont initialisés dans `DOMContentLoaded`
4. S'assurer que les sélecteurs CSS correspondent aux éléments HTML

### Animations saccadées

**Problème** : Animations pas fluides (< 60 FPS)

**Solutions** :
1. Utiliser uniquement `transform` et `opacity` (GPU-accelerated)
2. Éviter d'animer `width`, `height`, `left`, `top` (reflow coûteux)
3. Ajouter `will-change` pour animations critiques (avec parcimonie)

```css
.element {
  will-change: transform;
  transform: translateX(0);
  transition: transform 0.3s ease;
}
```

---

## Support & Contact

**Pour les questions techniques** :
- Email : dev@clee-bordeaux.fr
- Documentation : [README.md](README.md), [PAGES-STRUCTURE.md](PAGES-STRUCTURE.md)
- Issues : [GitHub Issues](https://github.com/votre-org/clee-bordeaux-site/issues)

**Pour les questions sur l'organisation CLEE** :
- Site web : https://clee-bordeaux.fr
- Email : contact@clee-bordeaux.fr
- Adresse : [Adresse du CLEE Bordeaux]

---

## Licence

© 2026 CLEE Bordeaux Avenir. Tous droits réservés.

Ce projet est la propriété de CLEE Bordeaux Avenir. Toute reproduction, distribution ou modification sans autorisation expresse est interdite.

---

## Crédits

**Développement** : [Votre équipe/nom]

**Design** : [Designer/Agence]

**Technologies open-source utilisées** :
- Google Fonts (Roboto, Barlow Condensed)
- Leaflet (OpenStreetMap)
- Intersection Observer API (Web standard)

---

**Dernière mise à jour** : 10 février 2026  
**Version** : 2.2  
**Statut** : Production Ready

---

## Historique des versions principales

### Version 2.2 (Février 2026) - Transformation du portail en page d'accessibilité
- **Changement majeur** : Transformation de portail.html en page d'options d'accessibilité
- Thème étudiant défini comme thème par défaut pour tous les utilisateurs
- Suppression de la redirection automatique vers le portail
- Nouvelles options d'accessibilité : taille de texte (4 niveaux), contraste élevé, réduction d'animations
- Persistance des préférences d'accessibilité via localStorage
- Création du guide ACCESSIBILITE-GUIDE.md

### Version 2.1 (Février 2026) - Améliorations UX et recherche
- Ajout barre de recherche partenaires en temps réel
- Améliorations du thème étudiant (agenda, section impact, boutons CTA)
- Refactorisation et simplification du contenu (jeunes-familles, vie-clee)
- Suppression de la section agenda de l'accueil (déplacée vers vie-clee)
- Amélioration des hovers et feedback visuel

### Version 2.0 (Janvier 2026) - Refonte complète
- Architecture modulaire (Globals + Spécifiques)
- Passage au full-static (suppression WordPress)
- Réduction ~40% de code dupliqué
- Design system centralisé (CSS variables)
- Modules JavaScript IIFE
- 19 pages complètes
- Système de portail étudiant/professionnel
- Carte interactive établissements
- Système de filtrage avancé
- Responsive complet (mobile-first)
- Accessibilité WCAG 2.1 AA
- Performance optimisée (Lighthouse 95+)

### Version 1.0 (2025) - Version initiale
- Page d'accueil
- Page entreprises
- Page établissements
- Structure HTML/CSS/JS basique
