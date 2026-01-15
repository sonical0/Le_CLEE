# CLEE Bordeaux Avenir - Site Web

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![WordPress](https://img.shields.io/badge/WordPress-21759B?style=flat&logo=wordpress&logoColor=white)](https://wordpress.org/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-blue)](https://web.dev/responsive-web-design-basics/)

Site web institutionnel du CLEE (Comité Local École-Entreprise) Bordeaux Avenir, organisation facilitant les liens entre établissements scolaires et entreprises du territoire bordelais.

---

## Version 2.0 - WordPress Éditable (Client-Ready)

Le projet a été transformé en **site WordPress professionnel entièrement éditable** :

- Pages institutionnelles via **Gutenberg** avec patterns prêts à l'emploi
- **Custom Post Types** pour événements, partenaires, établissements
- Champs **ACF** pour données structurées
- Templates dynamiques avec **filtres PHP natifs**
- Options globales éditables (footer, coordonnées, réseaux sociaux)
- **Zero code hardcodé** - tout est éditable depuis l'admin

### Deux implémentations disponibles

| Version | Usage | Localisation |
|---------|-------|--------------|
| **Prototype statique** | Maquette fonctionnelle HTML/CSS/JS | `pages/`, `css/`, `js/` |
| **Thème WordPress** | Site éditable client-ready | `php/clee-bordeaux-theme/` |

---

## Architecture du projet

```
CLEE-Bordeaux-Site/
├── pages/                      # 14 pages HTML statiques (prototypes)
├── css/                        # Source stylesheets (globals + page-specific)
│   ├── globals.css             # Variables CSS, header, footer, animations
│   ├── home.css                # Page d'accueil
│   ├── companies.css           # Entreprises & partenaires
│   ├── establishments.css      # Établissements & formations
│   ├── agenda.css              # Agenda événements
│   ├── le-clee.css             # Partagé par 4 pages institutionnelles
│   └── ...
├── js/                         # Source scripts
│   ├── common.js               # Modules partagés (NavigationModule, etc.)
│   ├── companies.js            # Filtres partenaires
│   ├── establishments.js       # Carte interactive + filtres
│   ├── agenda.js               # Calendrier événements
│   └── ...
├── assets/images/              # Images et médias
├── php/clee-bordeaux-theme/    # Thème WordPress complet
│   ├── inc/                    # Architecture modulaire
│   │   ├── setup.php           # Configuration thème + supports
│   │   ├── enqueue.php         # Gestion assets conditionnels
│   │   ├── cpt.php             # Custom Post Types + taxonomies
│   │   ├── acf.php             # Champs ACF + options page
│   │   ├── helpers.php         # Fonctions utilitaires
│   │   └── patterns.php        # 6 patterns Gutenberg
│   ├── assets/                 # Assets mirrés depuis root
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── archive-evenement.php   # Archive événements avec filtres
│   ├── single-evenement.php    # Détail événement
│   ├── archive-partenaire.php  # Archive partenaires + carte
│   ├── single-partenaire.php   # Détail partenaire
│   ├── archive-etablissement.php # Archive établissements + carte
│   ├── single-etablissement.php  # Détail établissement
│   ├── header.php              # En-tête avec menus WP dynamiques
│   ├── footer.php              # Pied de page avec options ACF
│   ├── functions.php           # Point d'entrée (charge inc/)
│   ├── theme.json              # Config Gutenberg (couleurs, typos)
│   └── README.txt              # Documentation thème
├── INSTALLATION-GUIDE.md       # Guide complet installation WordPress
├── PAGES-STRUCTURE.md          # Hiérarchie des 14 pages
└── README.md                   # Ce fichier
```

---

## Nouveautés WordPress v2.0

### Custom Post Types avec filtres dynamiques

| CPT | Archive | Champs ACF | Filtres disponibles |
|-----|---------|------------|---------------------|
| **Événements** (`evenement`) | `/agenda/` | Dates, lieu, lien inscription, type | Mot-clé, type, période, mois |
| **Partenaires** (`partenaire`) | `/partenaires/` | Logo, coordonnées, GPS, catégorie | Nom, catégorie |
| **Établissements** (`etablissement`) | `/etablissements/` | Coordonnées, formations (repeater), GPS | Nom, catégorie formation |

**Fonctionnalités avancées :**
- Carte interactive si coordonnées GPS renseignées
- Pagination automatique
- Contenu lié (suggestions similaires)
- Statut événement (à venir / en cours / passé)

### Patterns Gutenberg (6 layouts prêts)

Disponibles dans l'éditeur sous "CLEE Patterns" :

1. **Hero Section** : Titre + description + bouton CTA
2. **3 colonnes - Cartes** : Layout en grille avec fond coloré
3. **2 colonnes - Texte + Image** : Layout alterné
4. **Bandeau CTA** : Call-to-action avec fond bleu foncé
5. **Rangée de statistiques** : 3 chiffres clés animés
6. **4 colonnes - Icônes** : Nos missions / valeurs

### theme.json (Design System verrouillé)

Configuration Gutenberg complète :
- **Palette** : 8 couleurs (primary-900 → primary-50, grey-900 → grey-50)
- **Typographies** : Barlow Condensed (titres), Roboto (corps), Inter
- **Tailles de police** : 6 tailles prédéfinies (small → xx-large)
- **Layout** : contentSize 1200px, wideSize 1400px
- **Styles globaux** : headings, buttons, links

### Options du thème (ACF)

Page d'options accessible via menu admin "Options du thème" :
- **Onglet Coordonnées** : Adresse, téléphone, email
- **Onglet Réseaux sociaux** : Facebook, Twitter, LinkedIn, Instagram
- **Onglet Footer** : Texte personnalisé, copyright

### Architecture modulaire (inc/)

Fichiers séparés pour maintenabilité :
```php
// functions.php charge tous les modules
require_once CLEE_THEME_DIR . '/inc/setup.php';      // add_theme_support, menus
require_once CLEE_THEME_DIR . '/inc/enqueue.php';    // wp_enqueue_scripts
require_once CLEE_THEME_DIR . '/inc/cpt.php';        // register_post_type
require_once CLEE_THEME_DIR . '/inc/acf.php';        // acf_add_local_field_group
require_once CLEE_THEME_DIR . '/inc/helpers.php';    // clee_breadcrumb(), etc.
require_once CLEE_THEME_DIR . '/inc/patterns.php';   // register_block_pattern
```

---

## Installation WordPress (Quick Start)

### Prérequis
- WordPress 6.0+
- PHP 7.4+
- Plugin : **Advanced Custom Fields** (gratuit ou Pro)

### 3 étapes essentielles

```bash
# 1. Copier le thème
cp -r php/clee-bordeaux-theme /chemin/vers/wordpress/wp-content/themes/

# 2. Via WP Admin
# - Apparence > Thèmes > Activer "CLEE Bordeaux Avenir"
# - Extensions > Installer "Advanced Custom Fields" > Activer

# 3. Regénérer les permaliens
# Réglages > Permaliens > "Nom de l'article" > Enregistrer
```

### Configuration post-installation

**Pages à créer** (avec slugs exacts) :
- Le CLEE → `le-clee`
- Bureau & Membres → `bureau-membres`
- Jeunes & Familles → `jeunes-familles`
- Vie du CLEE → `vie-clee`
- Contact → `contact`
- (Voir [INSTALLATION-GUIDE.md](INSTALLATION-GUIDE.md) pour la liste complète)

**Menus à configurer** :
1. Créer "Menu principal" → Assigner à "Menu principal"
2. Créer "Menu footer" → Assigner à "Menu footer"

**Page d'accueil** :
- Réglages > Lecture > Page statique > Sélectionner "Accueil"

**Options du thème** :
- Aller dans "Options du thème" (menu admin)
- Remplir coordonnées, liens sociaux, footer

**Guide complet** : [INSTALLATION-GUIDE.md](INSTALLATION-GUIDE.md) (70+ pages, déploiement production, migrations, optimisations)

---

## Architecture technique (Site statique)

### Modularité CSS/JS (élimination des duplications)

```
Stratégie : globals.css + page-specific.css
-------------------------------------------
globals.css (18KB) → Partagé par TOUTES les pages :
  - Variables CSS (couleurs, typos)
  - Header + footer
  - Boutons, animations
  - Composants réutilisables

home.css (5KB) → Spécifique à index.html
companies.css (8KB) → Spécifique à companies.html
le-clee.css (6KB) → Partagé par 4 pages institutionnelles
jeunes-familles.css (7KB) → Partagé par 3 pages jeunesse
```

**Avantages** :
- Réduction de 40% du poids total CSS
- Cache navigateur optimisé (globals.css mis en cache)
- Maintenabilité : modification header = 1 seul fichier

### Modules JavaScript (pattern IIFE)

```javascript
// common.js (tous les modules partagés)
const NavigationModule = (() => {
  const init = () => { /* toggle mobile menu */ };
  return { init };
})();

const SmoothScrollModule = (() => {
  const init = () => { /* smooth scroll to anchors */ };
  return { init };
})();

// Auto-init tous les modules
document.addEventListener('DOMContentLoaded', () => {
  NavigationModule.init();
  SmoothScrollModule.init();
  HeaderScrollModule.init();
  ScrollAnimationModule.init();
  // ...
});
```

**Modules disponibles** :
- `NavigationModule` : Toggle menu mobile
- `SmoothScrollModule` : Défilement fluide vers ancres
- `HeaderScrollModule` : Ombre header au scroll
- `ScrollAnimationModule` : Animations au scroll (Intersection Observer)
- `CounterModule` : Compteurs animés
- `ActiveLinkModule` : Highlight page courante dans nav

### Design System (CSS Variables)

```css
:root {
  /* Palette primaire (bleu) */
  --primary-900: #1F3448;   /* Darkest */
  --primary-500: #5E7E9F;   /* Mid */
  --primary-50: #E5F0FF;    /* Lightest */
  
  /* Grey scale */
  --grey-900: #131927;
  --grey-300: #D1D5DB;
  --grey-50: #F9FAFB;
  
  /* Typographies */
  --titre-font-family: "Barlow Condensed", sans-serif;
  --navbar-text-font-family: "Roboto", sans-serif;
}
```

**Règle stricte** : JAMAIS de couleurs hardcodées, toujours via variables.

### Responsive Design

| Breakpoint | Usage | Technique |
|------------|-------|-----------|
| < 768px | Mobile | Menu hamburger, stack vertical |
| 768px - 1023px | Tablette | 2 colonnes, images réduites |
| ≥ 1024px | Desktop | Layout complet, hover effects |

---

## Fonctionnalités principales

### Page d'accueil
- Hero section dynamique avec CTA
- Actualités du CLEE
- Chiffres clés animés (CounterModule)
- Agenda prochains événements
- Section contact rapide

### Entreprises & Partenaires
- Filtrage multi-critères (secteur, ville)
- Carte interactive Google Maps
- Témoignages d'entreprises
- Formulaire devenir partenaire

### Établissements & Formations
- Carte interactive des lycées
- Filtrage par secteur de formation
- Catalogue de formations détaillé
- Informations PFMP

### Jeunes & Familles
- Ressources d'orientation
- Guide d'insertion professionnelle
- Conseils stages et apprentissage
- Vie du CLEE pour les élèves

### Agenda & Événements
- Calendrier événements
- Filtres par type et période
- Inscriptions en ligne
- Événements à la une

---

## Développement

### Stack technique
- **Front-end** : HTML5 sémantique, CSS3 (variables, grid, flexbox), JavaScript ES6+
- **Back-end** : WordPress 6.0+ (PHP 7.4+)
- **Base de données** : MySQL 5.7+ / MariaDB 10.3+
- **Plugins** : ACF (champs personnalisés)
- **Fonts** : Barlow Condensed, Roboto, Inter (Google Fonts)
- **Icons** : Font Awesome (si utilisé)

### Commandes utiles (WP-CLI)

```bash
# Activer le thème
wp theme activate clee-bordeaux-theme

# Installer ACF
wp plugin install advanced-custom-fields --activate

# Créer les pages
wp post create --post_type=page --post_title="Le CLEE" --post_name="le-clee" --post_status=publish

# Flush permalinks
wp rewrite flush

# Export base de données
wp db export backup.sql

# Search & replace URLs
wp search-replace 'http://local.dev' 'https://clee-bordeaux.fr'
```

### Ajouter un nouveau Custom Post Type

1. Éditer `php/clee-bordeaux-theme/inc/cpt.php`
2. Ajouter `register_post_type()` et taxonomies
3. Créer les templates `archive-{cpt}.php` et `single-{cpt}.php`
4. Ajouter les champs ACF dans `inc/acf.php`
5. Flush permalinks

### Ajouter un nouveau pattern Gutenberg

```php
// Dans inc/patterns.php
register_block_pattern('clee/mon-pattern', [
    'title'       => 'Mon Pattern',
    'description' => 'Description',
    'categories'  => ['clee-patterns'],
    'content'     => '<!-- wp:group -->...<!-- /wp:group -->',
]);
```

---

## Testing & Quality

### Checklist de test

**Navigation** :
- [ ] Menu mobile toggle fonctionne
- [ ] Active link highlighting
- [ ] Smooth scroll vers ancres
- [ ] Breadcrumbs corrects

**Pages institutionnelles** :
- [ ] Patterns Gutenberg disponibles
- [ ] Couleurs theme.json accessibles
- [ ] WYSIWYG correspond au front

**Custom Post Types** :
- [ ] Filtres fonctionnent sans JavaScript
- [ ] Pagination
- [ ] Carte interactive (si GPS renseignés)
- [ ] Singles affichent toutes les infos

**Performance** :
- [ ] Lighthouse score > 90
- [ ] Images optimisées
- [ ] CSS/JS minifiés (en prod)

### Tests responsive

```bash
# Desktop (1920x1080)
# Tablette (768x1024)
# Mobile (375x667, 414x896)
```

---

## Déploiement

### Environnement de production

**Serveur requis** :
- PHP 7.4+, MySQL 5.7+
- HTTPS obligatoire
- Certificat SSL valide

**Optimisations recommandées** :
- Plugin de cache (W3 Total Cache)
- CDN (Cloudflare)
- Minification CSS/JS
- Images WebP

**Sauvegardes** :
- Base de données quotidienne
- Fichiers hebdomadaire
- Stockage distant (S3, Google Drive)

Voir [INSTALLATION-GUIDE.md](INSTALLATION-GUIDE.md) section "Déploiement en production"

---

## Roadmap

### Version 2.1 (À venir)
- [ ] Import CSV automatique pour événements/partenaires
- [ ] Vue calendrier (fullCalendar.js) pour agenda
- [ ] API REST pour filtres AJAX
- [ ] Multilingue (Polylang)

### Version 2.2
- [ ] Espace membre sécurisé
- [ ] Système de candidature stages en ligne
- [ ] Tableau de bord entreprises

---

## Support & Contact

**Documentation** :
- Guide d'installation : [INSTALLATION-GUIDE.md](INSTALLATION-GUIDE.md)
- Structure des pages : [PAGES-STRUCTURE.md](PAGES-STRUCTURE.md)
- README thème : [php/clee-bordeaux-theme/README.txt](php/clee-bordeaux-theme/README.txt)

**Support technique** :
- Email : dev@clee-bordeaux.fr
- Issues GitHub : [Lien vers repo]

---

## Licence

© 2026 CLEE Bordeaux Avenir - Tous droits réservés

---

## Crédits

- **Design & Développement** : Équipe CLEE Bordeaux
- **Fonts** : Google Fonts (Barlow Condensed, Roboto, Inter)
- **Framework** : WordPress 6.0+, Gutenberg
- **Champs personnalisés** : Advanced Custom Fields
