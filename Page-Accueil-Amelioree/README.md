# 🎨 Page d'Accueil CLEE Bordeaux Avenir - Version Améliorée

Une refonte complète et ergonomique de la page d'accueil du CLEE Bordeaux Avenir, basée sur la charte graphique fournie.

## ✨ Améliorations Apportées

### 🎯 Design & UX
- **Design moderne et épuré** avec hiérarchie visuelle claire
- **Layout responsive** adapté à tous les écrans (mobile, tablette, desktop)
- **Animations subtiles** pour améliorer l'expérience utilisateur
- **Palette de couleurs** cohérente issue de la charte graphique
- **Espacement optimisé** pour une meilleure lisibilité

### ♿ Accessibilité
- **Balises sémantiques HTML5** (header, nav, section, article, footer)
- **Attributs ARIA** pour la navigation et les boutons
- **Navigation au clavier** complète
- **Contrastes de couleurs** respectant les normes WCAG
- **Support prefers-reduced-motion** pour les utilisateurs sensibles aux animations
- **Focus visible** pour la navigation au clavier
- **Skip link** pour aller directement au contenu

### 📱 Responsive Design
- **Mobile-first approach**
- **Menu hamburger** pour les petits écrans
- **Grid layout flexible** qui s'adapte automatiquement
- **Images optimisées** pour tous les formats d'écran
- Breakpoints : 
  - Mobile : < 480px
  - Tablet : 480px - 768px
  - Desktop : 768px - 1024px
  - Large : > 1024px

### 🚀 Performance
- **Lazy loading** des images
- **Debounce** sur les événements de scroll
- **Animations CSS** (plus performantes que JavaScript)
- **Code optimisé** et commenté
- **CSS Variables** pour une maintenance facile

### 🎨 Fonctionnalités Interactives
- **Menu mobile** avec animation hamburger
- **Scroll smooth** vers les sections
- **Header sticky** avec effet au scroll
- **Animation des chiffres** avec compteur animé
- **Cards hover effects** avec transitions
- **Active state** sur les liens de navigation selon la section visible

## 📁 Structure des Fichiers

```
Page-Accueil-Amelioree/
├── index.html          # Structure HTML sémantique
├── globals.css         # Variables CSS et styles de base
├── style.css           # Styles principaux et responsive
├── script.js           # Interactivité et animations
└── README.md           # Documentation (ce fichier)
```

## 🎨 Charte Graphique Appliquée

### Couleurs Principales
- **Primary 900** : #1F3448 - Texte principal foncé
- **Primary 800** : #314960 - Couleur principale (boutons, liens)
- **Primary 700** : #405C76 - Texte secondaire
- **Primary 50** : #E5F0FF - Arrière-plans clairs
- **Grey 50** : #F9FAFB - Arrière-plans neutres

### Typographie
- **Titres** : Barlow Condensed (500, 600)
- **Corps de texte** : Roboto (400, 600)
- **Éléments UI** : Inter (400, 600, 700)

### Ombres
Utilisation des variables CSS pour les ombres (--100 à --800) définies dans la charte graphique.

## 🔧 Installation & Utilisation

### Prérequis
Aucun ! Le projet utilise uniquement HTML, CSS et JavaScript vanilla.

### Lancement
1. Ouvrir `index.html` dans un navigateur web
2. Ou utiliser un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js (http-server)
   npx http-server
   
   # Avec PHP
   php -S localhost:8000
   ```
3. Accéder à `http://localhost:8000`

## 📱 Compatibilité

### Navigateurs Supportés
- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Opera (dernières versions)

### Appareils Testés
- ✅ Desktop (1920px, 1440px, 1280px)
- ✅ Tablet (768px, 1024px)
- ✅ Mobile (375px, 414px, 390px)

## 🎯 Sections de la Page

### 1. **Header & Navigation**
- Logo CLEE Bordeaux Avenir
- Menu de navigation avec 4 liens principaux
- Menu mobile responsive

### 2. **Hero Section**
- Titre principal avec dégradé d'arrière-plan
- Description du CLEE
- 3 boutons d'action (CTA) pour différentes audiences

### 3. **Actualités Récentes**
- Grid de 3 articles avec images
- Hover effects sur les cards
- Bouton "Voir toutes les actualités"

### 4. **Chiffres Clés**
- 4 statistiques importantes
- Animation de compteur au scroll
- Fond dégradé bleu foncé

### 5. **Agenda**
- 3 événements à venir
- Design type calendrier avec date mise en avant
- Bouton "Voir l'agenda complet"

### 6. **Contact**
- Message d'invitation au contact
- Boutons CTA avec icône LinkedIn
- Design épuré sur fond clair

### 7. **Footer**
- Informations CLEE
- Liens de navigation organisés en colonnes
- Copyright

## 🔄 Personnalisation

### Modifier les Couleurs
Éditer les variables CSS dans `globals.css` :
```css
:root {
  --primary-800: rgba(49, 73, 96, 1); /* Couleur principale */
  --primary-700: rgba(64, 92, 118, 1); /* Couleur secondaire */
  /* ... */
}
```

### Modifier les Animations
Ajuster les durées dans `style.css` :
```css
.btn {
  transition: all 0.3s ease; /* Modifier la durée ici */
}
```

### Ajouter une Section
1. Ajouter le HTML dans `index.html`
2. Ajouter les styles dans `style.css`
3. Si besoin d'interactivité, ajouter le code dans `script.js`

## 📊 Optimisations Futures

### Possibilités d'Amélioration
- [ ] Ajouter un système de recherche
- [ ] Intégrer un carrousel pour les actualités
- [ ] Ajouter un formulaire de contact fonctionnel
- [ ] Implémenter le lazy loading pour les images
- [ ] Ajouter un mode sombre
- [ ] Intégrer Google Analytics
- [ ] Optimiser pour le SEO (meta tags, Open Graph)
- [ ] Ajouter un système de filtres pour les actualités

### Performance
- [ ] Minifier CSS et JS pour la production
- [ ] Optimiser les images (WebP, compression)
- [ ] Implémenter le cache navigateur
- [ ] Utiliser un CDN pour les assets

## 🤝 Contribution

Pour contribuer à ce projet :
1. Respecter la charte graphique existante
2. Maintenir l'accessibilité (WCAG 2.1 niveau AA minimum)
3. Tester sur différents navigateurs et appareils
4. Commenter le code pour faciliter la maintenance
5. Optimiser les performances

## 📝 Licence

© 2026 CLEE Bordeaux Avenir. Tous droits réservés.

## 📞 Contact

Pour toute question sur cette implémentation, n'hésitez pas à contacter l'équipe de développement.

---

**Note** : Cette page est une refonte améliorée basée sur les éléments fournis dans les dossiers "Chartegraphique" et "Page accueil". Elle respecte la charte graphique tout en apportant des améliorations significatives en termes d'ergonomie, d'accessibilité et de responsive design.
