# Changelog - CLEE Bordeaux Avenir

Tous les messages de commit suivent la convention **Conventional Commits** (voir `.github/copilot-instructions.md`).

## [13/02/2026] - Correction menu burger responsive

### Scripts
- [js/common.js](js/common.js) : Évite le double binding du menu burger quand le composant `clee-nav-bar` est utilisé

## [12/02/2026] - Correction génération cartes formations

### Scripts
- **js/formations.js** : Correction du mapping des champs du répertoire pour l'affichage des cartes

## [12/02/2026] - Source formations répertoire

### Données
- **assets/data/liste des tâches CLEE - Repertoire des formations.json** : Source principale des cartes formations
- **assets/data/formations.json** : Vidé pour préparer sa suppression

### Scripts
- **js/formations.js** : Conversion des champs du répertoire en cartes formation

## [12/02/2026] - Cartes formations dynamiques

### Données
- **assets/data/formations.json** : Ajout des données pour les cartes formations

### Scripts
- **js/formations.js** : Génération des cartes formations depuis le JSON
- **js/establishments.js** : Rafraîchissement des interactions après rendu dynamique

### Pages
- **pages/establishments.html** : Remplacement des cartes statiques par un conteneur dynamique

## [12/02/2026] - Filtre formations par établissement

### Données
- **assets/data/formations.json** : Ajout du champ établissement pour chaque formation

### Scripts
- **js/formations.js** : Génération du filtre établissement et data-etablissement
- **js/establishments.js** : Filtrage des cartes par établissement sélectionné

### Pages
- **pages/establishments.html** : Ajout du filtre établissement dans la barre de recherche

## [12/02/2026] - Ajout de formations

### Données
- **assets/data/formations.json** : Ajout de 20 formations supplémentaires réparties par établissement

## [12/02/2026] - Filtre formations via liste établissements

### Scripts
- **js/establishments.js** : Filtrage des formations déclenché par la sélection d'un établissement

### Pages
- **pages/establishments.html** : Suppression du filtre établissement dans la barre de recherche

## [12/02/2026] - Nettoyage CSS page d'accueil

### Styles
- **css/home.css** : Suppression des classes orphelines (sections actualités et agenda non utilisées)

## [12/02/2026] - Nettoyage CSS page entreprises

### Styles
- **css/companies.css** : Suppression des classes orphelines (éléments non présents et section tableau non utilisée)

## [12/02/2026] - Nettoyage CSS page contact

### Styles
- **css/contact.css** : Suppression des classes orphelines (sections info contact et styles de bouton inutilisés)
## [11/02/2026] - Mise à jour de la documentation

### Documentation
- **README.md** : Suppression des références à des fichiers obsolètes (PORTAIL-GUIDE.md, IMPLEMENTATION-SUMMARY.md)
- **README.md** : Correction du nombre total de pages (20 pages au lieu de 17)
- **PAGES-STRUCTURE.md** : Ajout de dashboard.html dans les pages utilitaires
- **PAGES-STRUCTURE.md** : Correction du total de pages (20 au lieu de 19)
- **copilot-instructions.md** : Mise à jour du nombre de pages (19 dans pages/ au lieu de 16)
- **copilot-instructions.md** : Mise à jour de la hiérarchie des pages pour inclure dashboard
- **Charte graphique.md** : Enrichissement avec le design system complet (CSS variables, tokens, typographie)
- **ACCESSIBILITY-BANNER-SUMMARY.md** : Suppression du fichier (redondant avec README et CHANGELOG)

### Améliorations
- Élimination des répétitions entre fichiers de documentation
- Cohérence des informations sur le nombre de pages
- Documentation complète de la charte graphique avec exemples CSS

## [11/02/2026] - Composant footer

### Composants
- **js/components/footer.js** : Création du composant footer avec CSS/HTML intégrés
- **index.html** : Remplacement du footer statique par le composant
- **pages/** : Remplacement du footer statique par le composant sur l'ensemble des pages

## [11/02/2026] - Généralisation du composant navbar

### Navigation
- **pages/** : Remplacement de la navbar statique par le composant `clee-nav-bar` sur l'ensemble des pages
- **pages/dashboard.html** : Réparation de la structure HTML/CSS endommagée et insertion du composant navbar
- **pages/connexion.html** : Restauration de l'entête HTML après remplacement de la navbar
- **pages/portail.html** : Restauration de l'entête HTML après remplacement de la navbar

## [11/02/2026] - Composant bouton principal centralisé

### Composants
- **js/components/primary-button.js** : Création d'un composant bouton principal avec styles intégrés et propriétés configurables
- **js/components/primary-button.js** : Ajout du thème étudiant optionnel pour le visuel du bouton
- **js/components/primary-button.js** : Ajustement du rendu étudiant pour conserver le gradient et le hover dédié
- **js/components/primary-button.js** : Valeurs par défaut dépendantes du thème avec overrides via attributs
- **js/components/primary-button.js** : Correction du background gradient en thème étudiant pour les hovers
- **js/components/primary-button.js** : Détection du thème étudiant sur html/body pour appliquer le gradient par défaut
- **js/components/primary-button.js** : Re-render automatique lors du changement de thème + fallback localStorage
- **js/components/primary-button.js** : Support du rendu en bouton (submit/button) pour les formulaires
- **pages/companies.html** : Remplacement des boutons btn-primary par le composant centralisé
- **pages/establishments.html** : Remplacement des boutons btn-primary par le composant centralisé
- **pages/contact.html** : Remplacement du bouton principal du formulaire par le composant
- **pages/vie-clee.html** : Remplacement du CTA principal par le composant
- **pages/orientation-insertion.html** : Remplacement du CTA principal par le composant
- **pages/nos-actions.html** : Remplacement du CTA principal par le composant
- **pages/documents-officiels.html** : Remplacement du CTA principal par le composant
- **pages/inscription.html** : Remplacement du bouton de soumission par le composant
- **pages/connexion.html** : Remplacement du bouton de soumission par le composant
- **pages/theme-demo.html** : Remplacement des boutons primaires de démonstration
- **pages/colors-reference.html** : Remplacement du bouton primaire de prévisualisation
- **pages/dashboard.html** : Remplacement du bouton de déconnexion par le composant

## [11/02/2026] - Composant navbar

### Composants
- **js/components/nav-bar.js** : Création d'un composant de navigation (HTML/CSS/JS) basé sur la navbar de l'accueil
- **index.html** : Remplacement intégral de la navbar par le composant
- **pages/agenda.html** : Remplacement de la navbar par le composant

## [11/02/2026] - Conformité hero et footer de l'agenda

### Ajustements de mise en page
- **pages/agenda.html** : Ajout du calque hero pour aligner la structure sur l'accueil
- **css/agenda.css** : Harmonisation de la hauteur du hero et du calque pour synchroniser le footer avec l'image

## [10/02/2026] - Ajout de la bannière d'accessibilité

### Nouvelle fonctionnalité : Bannière de notification
- **Bannière d'accessibilité** : Affichage automatique au lancement du site (similaire aux bannières de cookies)
- **Proposition de contraste élevé** : L'utilisateur peut activer le mode contraste élevé directement depuis la bannière
- **Persistance intelligente** : La bannière ne s'affiche qu'une seule fois et ne réapparaît pas si :
  - L'utilisateur l'a déjà fermée
  - Le mode contraste élevé est déjà activé
- **Lien vers portail** : Redirection vers les options d'accessibilité complètes

### Modifications techniques
- **js/common.js** : Ajout du module `AccessibilityBannerModule`
  - Gestion de l'affichage automatique (délai de 1 seconde)
  - Gestion des actions (Activer, Non merci, Fermer)
  - Application du contraste élevé
  - Persistance avec localStorage (`clee_accessibility_banner_dismissed`, `clee_high_contrast`)
- **css/globals.css** : Ajout des styles de la bannière
  - Design moderne avec fond dégradé sombre
  - Animation de slide-up depuis le bas
  - Boutons stylisés (Activer en orange, Non merci en transparent)
  - Responsive avec adaptations mobile/tablette
  - Déplacement des styles `.high-contrast` et `.reduce-motion` depuis portail.css

### Interface utilisateur
- Position fixe en bas de l'écran (z-index: 10000)
- Icône de contraste (cercle moitié noir/moitié blanc)
- Texte explicatif avec lien vers portail.html
- Trois actions possibles : Activer, Non merci, Fermer (X)
- Animation fluide d'apparition/disparition
- Responsive : boutons empilés sur mobile

### Documentation
- **TEST-ACCESSIBILITY-BANNER.md** : Guide complet de test avec 8 scénarios
- Instructions de test pour vérifier toutes les fonctionnalités
- Liste des fichiers modifiés et variables localStorage utilisées

## [10/02/2026] - Transformation du portail en page d'accessibilité

### Changement majeur du système de portail
- **Transformation de portail.html** : La page de sélection de profil devient une page d'options d'accessibilité
- **Thème par défaut** : Le thème étudiant est maintenant appliqué par défaut pour tous les utilisateurs
- **Suppression de la redirection** : Les utilisateurs ne sont plus redirigés automatiquement vers le portail

### Nouvelles fonctionnalités d'accessibilité
- **Taille de texte** : 4 niveaux ajustables (Petit, Normal, Grand, Très grand)
- **Contraste élevé** : Mode à fort contraste pour faciliter la lecture
- **Réduction d'animations** : Option pour désactiver ou réduire les animations
- **Persistance** : Toutes les préférences sont sauvegardées dans localStorage
- **Bouton de réinitialisation** : Restaure tous les paramètres par défaut

### Modifications techniques
- **js/portail.js** : Remplacement de PortailModule par AccessibilityModule
- **css/portail.css** : Refonte complète des styles pour la page d'accessibilité
- **js/common.js** : Suppression de la logique de redirection et du badge de profil
- Thème étudiant défini comme valeur par défaut dans getCurrentTheme()

### Documentation
- **Création de ACCESSIBILITE-GUIDE.md** : Guide complet des options d'accessibilité
- **Mise à jour de PORTAIL-GUIDE.md** : Marqué comme obsolète avec redirection vers le nouveau guide
- **Mise à jour de PAGES-STRUCTURE.md** : Portail.html déplacé vers les pages utilitaires
- **Mise à jour de README.md** : Section portail remplacée par section accessibilité

### Interface utilisateur
- Ajout de la navigation complète sur portail.html
- Nouveau design de cartes d'accessibilité avec icônes SVG
- Toggles interactifs pour les options on/off
- Boutons +/- pour l'ajustement de la taille de texte
- Design responsive avec breakpoints mobile/tablette/desktop
## [10/02/2026] - Déplacement du tableau des formations

### PFMP
- Déplacement du bloc "Formations disponibles" de la page Entreprises vers la page stages (PFMP)
- Positionnement du tableau juste après la section "Qu'est-ce qu'un stage ?"
- Suppression du téléchargement PDF "Calendrier des stages"
- Suppression du bloc "Calendriers des PFMP par Formation"
- Correction du padding dans "Modèles pour vos Candidatures"
- Liens utiles : grille 3x2
- PFMP ou Stage : remplacement par 2 cartes dédiées

### Entreprises & Partenaires
- Ajustement du style de la barre de recherche "Rechercher une formation" pour une hauteur fixe de 56px

### Formulaire établissements
- Remplacement de "Modalité" par des tags de type de stage (3e, 2de, PFMP, BTS)

### Accueil
- Ajout d'un calque photo sur le bandeau hero avec image de remplacement

### Pages principales
- Portail : hauteur du hero alignée sur les autres pages
- Portail : calque hero affiché sur l'en-tête

### Établissements & Formations
- Intégration d'une carte Google Maps interactive dans le bloc carte
- Génération de la liste et des points de carte à partir du JSON
- Remplacement de l'API Google Maps par un iframe Google Maps personnalisé
- Masquage du panneau/banderole dans l'iframe de la carte
- Remplacement par une carte Google Maps centrée sur Bordeaux (sans points personnalisés)
- Retour à la carte Google Maps JS avec points JSON
- Passage à une carte Leaflet/OpenStreetMap sans clé API
- Points des collèges en rouge sur la carte
- Génération dynamique des cartes établissement depuis le JSON
- Mise en forme des informations (lignes distinctes, libellés en gras)
- Footer synchronisé avec l'image du hero sur la page établissements

## [05/02/2026] - Système de pagination pour le tableau des formations

### Pagination complète
- Ajout d'un système de pagination avec navigation par pages
- Sélecteur de résultats par page : 5, 10, 15, 20, 50 formations
- Affichage par défaut de 5 formations par page
- Boutons précédent/suivant avec états désactivés intelligents
- Numéros de page cliquables avec ellipses pour les grandes listes
- Compteur de résultats affichant "Affichage de X à Y sur Z formation(s)"
- Réinitialisation à la page 1 lors du changement de filtres ou de tri
- Design responsive et cohérent avec la charte graphique

### Améliorations UX
- Limite de 7 numéros de page visibles simultanément
- Ellipses (...) pour indiquer les pages cachées
- État actif visuellement distinct (fond primary-500, texte blanc)
- Transitions fluides sur les interactions

## [05/02/2026] - Refactorisation et améliorations UX multiples

### Recherche partenaires
- Ajout d'une barre de recherche sur la page entreprises (entre introduction et filtres)
- Recherche en temps réel par nom d'entreprise
- Filtre dynamique des cartes partenaires
- Amélioration de l'UX avec feedback visuel instantané

### Améliorations du thème étudiant
- **Agenda accueil** : Dates mises en avant avec fond orange et texte blanc pour plus de visibilité
- **Section "Notre impact"** : Amélioration du hover avec dégradé clair et ombre adoucie pour une meilleure lisibilité des chiffres
- Remplacement du fond orange vif par un dégradé subtil sur les cartes statistiques

### Améliorations des boutons CTA
- Application des couleurs de la charte graphique sur les boutons du hero de l'accueil
- Ajustement des ombres pour renforcer la hiérarchie visuelle au survol
- Transitions fluides et feedback visuel amélioré

### Refactorisation du contenu
- **jeunes-familles.html** : Amélioration de la clarté et du formatage des descriptions de sections
- **index.html** : Suppression de la section agenda (déplacée dans vie-clee.html) et mise à jour du texte contact
- **vie-clee.html** : Suppression de la modal de contact et des fonctionnalités associées (simplification)
- **jeunes-familles.html** : Retrait des cartes info obsolètes et mise à jour du contenu

### Corrections diverses
- **companies.html** : Correction et amélioration de la page Entreprises et Partenaires
- **establishments.html** : Améliorations de la page Établissements et Formations

### Commits détaillés
```
ef27ac5 - Merge pull request #27 from sonical0/dev_xav
b1b8026 - Add partners search, student theme & CTA hovers
0487d84 - Merge pull request #26 from sonical0/dev_alex
6c1557f - refactor(jeunes-familles): improve content clarity and formatting
e693361 - refactor(index.html): remove agenda section and update contact text
8ecf690 - Merge pull request #25 from sonical0/dev
10a88e9 - Merge pull request #24 from sonical0/dev_xav
e2e99d5 - établissements et formation
0e8610b - Merge pull request #23 from sonical0/dev_alex
e06a742 - refactor(vie-clee): remove contact modal and related functionality
0b2c580 - refactor(jeunes-familles): remove outdated info cards and update content
bbb0470 - Corriger la page : Entreprises et partenaire
```

## [05/02/2026] - Lisibilité hover Notre impact (thème étudiant)

### Ajustement de la surbrillance
- Remplacement du fond orange par un dégradé clair sur les cartes "Notre impact"
- Ombre adoucie pour améliorer la lisibilité des chiffres

## [05/02/2026] - Agenda accueil thème étudiant

### Ajustement des dates de l'agenda
- Mise en avant des dates avec un fond orange et un texte blanc dans le thème Étudiant

## [05/02/2026] - Surbrillance des boutons d'accueil

### Amélioration du hover des CTA
- Application des couleurs de la charte graphique sur les boutons du hero de l'accueil
- Ajustement des ombres pour renforcer la hiérarchie visuelle au survol

## [05/02/2026] - Barre de recherche partenaires

### Ajout d'une recherche sur la page partenaires
- Ajout d'une barre de recherche entre l'introduction et les filtres des entreprises
- Filtrage des cartes par nom via le champ de recherche

## [05/02/2026] - Simplification de la page Nos Actions et documentation des commits

### Refactorisation du contenu
- Suppression des métadonnées (fréquence et impact) de toutes les cartes d'actions dans nos-actions.html
- Retrait de la 6ème carte "Accompagnement des stages" pour simplifier la présentation
- Correction d'une faute de frappe dans le CTA ("et vous souhaitez" au lieu de "et souhaitez")

### Documentation du projet
- Ajout de la convention **Conventional Commits** dans `.github/copilot-instructions.md`
- Définition des types de commit (feat, fix, refactor, docs, style, chore, perf, test)
- Règles claires pour la génération des messages de commit (anglais par défaut, français sur demande)
- Exemples de messages de commit conformes à la convention

### Avantages
- Interface plus épurée et facile à lire pour les visiteurs
- Standardisation des messages de commit pour une meilleure traçabilité Git
- Documentation claire pour les futurs contributeurs

---

## [27/01/2026] - Règle de documentation obligatoire

### Ajout d'une règle de contribution
- Il est désormais obligatoire de mettre à jour le `README.md` et le `CHANGELOG.md` à chaque modification du projet.
- Toute contribution ou correction doit être reflétée dans ces deux fichiers pour garantir la traçabilité et la clarté du projet.

# Changelog - CLEE Bordeaux Avenir

## [27/01/2026] - Règle de documentation obligatoire

## [23/01/2026] - Déplacement de index.html à la racine

### Changements structurels
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
