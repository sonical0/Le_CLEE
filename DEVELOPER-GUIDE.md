# Guide Développeur - CLEE Bordeaux Avenir WordPress Theme

**Version** : 2.0  
**Dernière mise à jour** : Janvier 2026  
**Public cible** : Développeurs reprenant le projet

---

## Vue d'ensemble technique

### Stack
- **Front-end** : HTML5, CSS3 (variables, grid, flexbox), JavaScript ES6+ (modules IIFE)
- **Back-end** : WordPress 6.0+, PHP 7.4+
- **Base de données** : MySQL 5.7+ / MariaDB 10.3+
- **Dépendances** : Advanced Custom Fields (ACF)
- **Build tools** : Aucun (vanilla CSS/JS, pas de compilation)

### Architecture
- **Pattern** : Thème WordPress classique (pas de block theme FSE)
- **Modularité** : `inc/` avec 6 modules séparés
- **Assets** : Chargement conditionnel via `inc/enqueue.php`
- **Design system** : `theme.json` + CSS variables dans `globals.css`

---

## Structure détaillée du thème

```
php/clee-bordeaux-theme/
├── inc/                            # Modules fonctionnels
│   ├── setup.php                   # Theme setup + supports (42 lignes)
│   ├── enqueue.php                 # Asset loading logic (124 lignes)
│   ├── cpt.php                     # CPT + taxonomies (220 lignes)
│   ├── acf.php                     # ACF fields + options (380 lignes)
│   ├── helpers.php                 # Utility functions (150 lignes)
│   └── patterns.php                # Gutenberg patterns (320 lignes)
├── assets/
│   ├── css/
│   │   ├── globals.css             # Mirrored from root (937 lignes)
│   │   ├── home.css
│   │   ├── companies.css
│   │   ├── establishments.css
│   │   ├── agenda.css
│   │   ├── le-clee.css
│   │   ├── jeunes-familles.css
│   │   ├── vie-clee.css
│   │   ├── contact.css
│   │   └── editor-style.css        # Gutenberg editor styles
│   ├── js/
│   │   ├── common.js               # Mirrored from root (modules IIFE)
│   │   ├── companies.js
│   │   ├── establishments.js
│   │   ├── agenda.js
│   │   ├── vie-clee.js
│   │   └── contact.js
│   └── images/                     # Theme images
├── functions.php                   # Entry point (loads inc/)
├── style.css                       # Required stylesheet (WordPress info)
├── theme.json                      # Gutenberg configuration (v2)
├── header.php                      # Header with wp_nav_menu()
├── footer.php                      # Footer with ACF options
├── index.php                       # Fallback template
├── front-page.php                  # Homepage template
├── page.php                        # Generic page template
├── page-*.php                      # Page-specific templates (11 files)
├── archive-evenement.php           # Events archive with filters
├── single-evenement.php            # Event detail page
├── archive-partenaire.php          # Partners archive with map
├── single-partenaire.php           # Partner detail page
├── archive-etablissement.php       # Schools archive with map
├── single-etablissement.php        # School detail page
└── README.txt                      # Theme documentation
```

---

## Chargement des modules (functions.php)

```php
<?php
/**
 * Entry point - Charge tous les modules
 */

define('CLEE_THEME_VERSION', '1.0.0');
define('CLEE_THEME_DIR', get_template_directory());
define('CLEE_THEME_URI', get_template_directory_uri());

require_once CLEE_THEME_DIR . '/inc/setup.php';      // Theme setup
require_once CLEE_THEME_DIR . '/inc/enqueue.php';    // Asset enqueuing
require_once CLEE_THEME_DIR . '/inc/cpt.php';        // Custom Post Types
require_once CLEE_THEME_DIR . '/inc/acf.php';        // ACF fields
require_once CLEE_THEME_DIR . '/inc/helpers.php';    // Helper functions
if (file_exists(CLEE_THEME_DIR . '/inc/patterns.php')) {
    require_once CLEE_THEME_DIR . '/inc/patterns.php';
}
```

**Ordre d'exécution** :
1. `setup.php` : `add_theme_support()`, `register_nav_menus()`
2. `enqueue.php` : `wp_enqueue_scripts` hook
3. `cpt.php` : `register_post_type()`, `register_taxonomy()` on `init`
4. `acf.php` : `acf_add_local_field_group()` on `acf/init`
5. `helpers.php` : Fonctions utilitaires (pas de hooks)
6. `patterns.php` : `register_block_pattern()` on `init`

---

## Custom Post Types

### Enregistrement (inc/cpt.php)

```php
function clee_register_evenement_cpt() {
    $args = [
        'public'              => true,
        'has_archive'         => 'agenda',  // Archive URL
        'rewrite'             => ['slug' => 'agenda', 'with_front' => false],
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest'        => true,      // Gutenberg support
        'menu_icon'           => 'dashicons-calendar-alt',
    ];
    register_post_type('evenement', $args);
}
add_action('init', 'clee_register_evenement_cpt');
```

**3 CPT enregistrés** :
- `evenement` → Archive `/agenda/`, Single `/agenda/{slug}/`
- `partenaire` → Archive `/partenaires/`, Single `/partenaires/{slug}/`
- `etablissement` → Archive `/etablissements/`, Single `/etablissements/{slug}/`

**Taxonomies associées** :
- `event_type` (hierarchical) → evenement
- `partner_category` (hierarchical) → partenaire
- `formation_category` (hierarchical) → etablissement

**Hook important** :
```php
add_action('after_switch_theme', 'clee_flush_rewrite_rules');
```
Flush les permalinks après activation du thème.

---

## Champs ACF (inc/acf.php)

### Structure des field groups

**Événement** :
```php
acf_add_local_field_group([
    'key'      => 'group_evenement',
    'title'    => 'Informations de l\'événement',
    'fields'   => [
        ['key' => 'field_event_start_date', 'name' => 'start_date', 'type' => 'date_picker', 'required' => 1],
        ['key' => 'field_event_end_date', 'name' => 'end_date', 'type' => 'date_picker'],
        ['key' => 'field_event_location', 'name' => 'location', 'type' => 'text'],
        ['key' => 'field_event_registration_url', 'name' => 'registration_url', 'type' => 'url'],
        ['key' => 'field_event_is_featured', 'name' => 'is_featured', 'type' => 'true_false'],
    ],
    'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'evenement']]],
]);
```

**Partenaire** :
- `logo` (image)
- `website` (url)
- `address` (textarea)
- `latitude`, `longitude` (number) pour carte
- `phone`, `email`

**Établissement** :
- `address`, `contact_phone`, `contact_email`, `website`
- `latitude`, `longitude`
- `formations` (repeater) :
  - `name` (text)
  - `description` (textarea)
  - `level` (select: CAP, Bac Pro, BTS, Licence, Master)

### Options Page

```php
function clee_acf_options_page() {
    if (!function_exists('acf_add_options_page')) return;
    
    acf_add_options_page([
        'page_title' => 'Options du thème',
        'menu_slug'  => 'theme-options',
        'capability' => 'edit_posts',
        'icon_url'   => 'dashicons-admin-settings',
    ]);
}
add_action('acf/init', 'clee_acf_options_page');
```

**Champs options** :
- Onglet "Coordonnées" : `contact_address`, `contact_phone`, `contact_email`
- Onglet "Réseaux sociaux" : `social_facebook`, `social_twitter`, `social_linkedin`, `social_instagram`
- Onglet "Footer" : `footer_text`, `footer_copyright`

**Récupération** :
```php
$email = get_field('contact_email', 'option');
// Ou via helper :
$email = clee_get_option('contact_email', 'default@example.com');
```

---

## Templates d'archives

### Structure générale (archive-evenement.php)

```php
<?php
// 1. Get & sanitize filter parameters
$keyword = isset($_GET['keyword']) ? sanitize_text_field($_GET['keyword']) : '';
$event_type = isset($_GET['event_type']) ? sanitize_term_field(...) : '';

// 2. Build WP_Query args
$args = [
    'post_type'      => 'evenement',
    'posts_per_page' => 12,
    'paged'          => get_query_var('paged') ?: 1,
    'meta_key'       => 'start_date',
    'orderby'        => 'meta_value',
    'order'          => 'ASC',
];

// 3. Apply filters
if (!empty($keyword)) {
    $args['s'] = $keyword;
}

if (!empty($event_type)) {
    $args['tax_query'] = [[
        'taxonomy' => 'event_type',
        'field'    => 'slug',
        'terms'    => $event_type,
    ]];
}

// 4. Query & display
$query = new WP_Query($args);
while ($query->have_posts()): $query->the_post();
    // Display card
endwhile;
wp_reset_postdata();
```

**Filtres implémentés** :
- Événements : `keyword`, `event_type`, `status` (upcoming/past/all), `month`
- Partenaires : `keyword`, `category`
- Établissements : `keyword`, `formation` (formation_category)

**Cartes interactives** :
```php
// Vérifier si coordonnées GPS existent
$has_map_data = false;
foreach ($query->posts as $post) {
    if (get_field('latitude', $post->ID) && get_field('longitude', $post->ID)) {
        $has_map_data = true;
        break;
    }
}

if ($has_map_data):
    echo '<div id="map" data-post-type="partenaire"></div>';
endif;
```

---

## Helpers (inc/helpers.php)

### Fonctions utilitaires

**Breadcrumb** :
```php
clee_breadcrumb([
    ['title' => 'Accueil', 'url' => home_url('/')],
    ['title' => 'Agenda', 'url' => get_post_type_archive_link('evenement')],
    ['title' => get_the_title(), 'url' => ''],
]);
```

**Format date français** :
```php
echo clee_format_date('2026-03-15', 'j F Y'); // "15 mars 2026"
```

**Option ACF** :
```php
$phone = clee_get_option('contact_phone', '05 XX XX XX XX');
```

**Statut événement** :
```php
$status = clee_get_event_status('2026-03-15', '2026-03-17');
// Returns: 'past', 'ongoing', or 'upcoming'
```

**Truncate** :
```php
echo clee_truncate($text, 150, '...');
```

**Adresse formatée** :
```php
echo clee_get_formatted_address(get_the_ID()); // nl2br + esc_html
```

---

## Patterns Gutenberg (inc/patterns.php)

### Enregistrement

```php
register_block_pattern('clee/hero-section', [
    'title'       => 'Hero Section',
    'description' => 'Section hero avec titre, description et bouton',
    'categories'  => ['clee-patterns'],
    'content'     => '<!-- wp:group {...} -->...<!-- /wp:group -->',
]);
```

**6 patterns disponibles** :
1. `clee/hero-section` : Hero avec CTA
2. `clee/three-columns-cards` : 3 cartes en grille
3. `clee/text-image-two-columns` : Layout 2 colonnes
4. `clee/cta-banner` : Bandeau CTA fond bleu
5. `clee/stats-row` : 3 statistiques
6. `clee/four-columns-icons` : 4 missions/valeurs

**Utilisation client** :
- Éditeur Gutenberg > + > Patterns > CLEE Patterns
- Sélectionner un pattern
- Personnaliser le contenu

---

## Asset Enqueuing (inc/enqueue.php)

### Logique de chargement

```php
function clee_enqueue_assets() {
    $version = wp_get_theme()->get('Version');
    
    // Globals (always loaded)
    wp_enqueue_style('clee-globals', get_template_directory_uri() . '/assets/css/globals.css', [], $version);
    wp_enqueue_script('clee-common', get_template_directory_uri() . '/assets/js/common.js', [], $version, true);
    
    // Front page
    if (is_front_page()) {
        wp_enqueue_style('clee-home', ..., ['clee-globals'], $version);
        return;
    }
    
    // Page-specific
    if (is_page('agenda') || is_post_type_archive('evenement')) {
        wp_enqueue_style('clee-agenda', ..., ['clee-globals'], $version);
        wp_enqueue_script('clee-agenda', ..., ['clee-common'], $version, true);
    }
    
    // Groupes CSS
    $uses_le_clee_css = ['le-clee', 'bureau-membres', 'nos-actions', 'documents-officiels'];
    if (is_page($uses_le_clee_css)) {
        wp_enqueue_style('clee-le-clee', ..., ['clee-globals'], $version);
    }
}
add_action('wp_enqueue_scripts', 'clee_enqueue_assets');
```

**Stratégie** :
- **globals.css** : 18KB, partagé par toutes les pages (mise en cache)
- **Page-specific CSS** : chargé conditionnellement
- **Groupes CSS** : `le-clee.css` partagé par 4 pages
- **Dependencies** : `['clee-globals']` pour CSS, `['clee-common']` pour JS

---

## JavaScript Modules (common.js)

### Pattern IIFE

```javascript
const NavigationModule = (() => {
  const elements = {
    menuToggle: null,
    navLinks: null,
  };

  const init = () => {
    elements.menuToggle = document.querySelector('.menu-toggle');
    elements.navLinks = document.querySelector('.nav-links');
    
    if (!elements.menuToggle) return;
    
    elements.menuToggle.addEventListener('click', toggleMenu);
  };

  const toggleMenu = () => {
    const isExpanded = elements.menuToggle.getAttribute('aria-expanded') === 'true';
    elements.menuToggle.setAttribute('aria-expanded', !isExpanded);
    elements.navLinks.classList.toggle('active');
  };

  return { init };
})();

// Auto-initialize
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
- `NavigationModule` : Toggle menu mobile
- `SmoothScrollModule` : Smooth scroll vers ancres
- `HeaderScrollModule` : Ombre header au scroll
- `ScrollAnimationModule` : Animations Intersection Observer
- `CounterModule` : Compteurs animés (CountUp)
- `ActiveLinkModule` : Highlight page courante dans nav

---

## theme.json (Gutenberg Configuration)

### Structure

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        { "slug": "primary-900", "color": "#1F3448", "name": "Bleu primaire foncé" },
        { "slug": "primary-500", "color": "#5E7E9F", "name": "Bleu primaire moyen" },
        // ... 6 autres couleurs
      ]
    },
    "typography": {
      "fontFamilies": [
        { "fontFamily": "\"Barlow Condensed\", sans-serif", "slug": "barlow-condensed" },
        { "fontFamily": "\"Roboto\", sans-serif", "slug": "roboto" },
        { "fontFamily": "\"Inter\", sans-serif", "slug": "inter" }
      ],
      "fontSizes": [
        { "slug": "small", "size": "14px" },
        { "slug": "normal", "size": "18px" },
        // ... 4 autres tailles
      ]
    },
    "layout": {
      "contentSize": "1200px",
      "wideSize": "1400px"
    }
  },
  "styles": {
    "elements": {
      "link": { "color": { "text": "var(--wp--preset--color--primary-500)" } },
      "button": { "color": { "background": "var(--wp--preset--color--primary-900)" } },
      "h1": { "typography": { "fontSize": "var(--wp--preset--font-size--xx-large)" } }
    }
  }
}
```

**Utilisation** :
- Classes CSS générées automatiquement : `.has-primary-900-background-color`
- Variables CSS accessibles : `var(--wp--preset--color--primary-900)`
- Disponible dans l'éditeur Gutenberg (panneaux couleur/typo)

---

## Workflows de développement

### Modifier les styles globaux

1. Éditer `css/globals.css` (racine du projet)
2. Copier vers `php/clee-bordeaux-theme/assets/css/globals.css`
3. Vider le cache (si plugin activé)
4. Recharger la page

```bash
cp css/globals.css php/clee-bordeaux-theme/assets/css/globals.css
```

### Ajouter un nouveau CPT

1. **Créer le CPT dans `inc/cpt.php`** :
```php
function clee_register_mon_cpt() {
    register_post_type('mon_cpt', [...]);
}
add_action('init', 'clee_register_mon_cpt');
```

2. **Créer les champs ACF dans `inc/acf.php`** :
```php
acf_add_local_field_group([
    'key' => 'group_mon_cpt',
    'fields' => [...],
    'location' => [[['param' => 'post_type', 'value' => 'mon_cpt']]],
]);
```

3. **Créer les templates** :
```php
// archive-mon-cpt.php
<?php get_header(); ?>
<main>
    <?php if (have_posts()): while (have_posts()): the_post(); ?>
        <!-- Display logic -->
    <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>

// single-mon-cpt.php
<?php get_header(); ?>
<main>
    <?php while (have_posts()): the_post(); ?>
        <h1><?php the_title(); ?></h1>
        <?php the_content(); ?>
        <?php // ACF fields: get_field('mon_champ'); ?>
    <?php endwhile; ?>
</main>
<?php get_footer(); ?>
```

4. **Flush permalinks** :
```bash
wp rewrite flush
```

### Ajouter un nouveau pattern

1. **Éditer `inc/patterns.php`** :
```php
register_block_pattern('clee/mon-pattern', [
    'title'       => 'Mon Pattern',
    'description' => 'Description courte',
    'categories'  => ['clee-patterns'],
    'content'     => '<!-- wp:group {"align":"full"} -->
        <div class="wp-block-group alignfull">
            <!-- Contenu des blocs -->
        </div>
    <!-- /wp:group -->',
]);
```

2. **Tester dans l'éditeur** :
   - Éditer une page
   - + > Patterns > CLEE Patterns
   - Vérifier que le pattern apparaît

### Ajouter un champ à un CPT existant

1. **Trouver le field group dans `inc/acf.php`** :
```php
acf_add_local_field_group([
    'key' => 'group_evenement',
    'fields' => [
        // ... champs existants
        // Ajouter le nouveau champ
        [
            'key'  => 'field_event_capacity',
            'label' => 'Capacité',
            'name' => 'capacity',
            'type' => 'number',
            'required' => 0,
        ],
    ],
]);
```

2. **Utiliser dans le template** :
```php
<?php $capacity = get_field('capacity'); ?>
<?php if ($capacity): ?>
    <p>Places disponibles : <?php echo esc_html($capacity); ?></p>
<?php endif; ?>
```

---

## Debugging

### Activer WP_DEBUG

```php
// wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
@ini_set('display_errors', 0);
```

**Logs** : `wp-content/debug.log`

### Debugging des queries

```php
global $wpdb;
$wpdb->show_errors();

$query = new WP_Query($args);
error_log(print_r($query->request, true)); // SQL query
error_log(print_r($query->query_vars, true)); // Query args
```

### Debugging ACF

```php
// Vérifier si ACF est actif
if (function_exists('get_field')) {
    error_log('ACF is active');
} else {
    error_log('ACF is NOT active');
}

// Vérifier une valeur de champ
$value = get_field('start_date', $post_id);
error_log('start_date: ' . $value);

// Dump toutes les valeurs ACF d'un post
$fields = get_fields($post_id);
error_log(print_r($fields, true));
```

### Debugging des permalinks

```php
// Voir les règles de réécriture
global $wp_rewrite;
error_log(print_r($wp_rewrite->rules, true));

// Flush permalinks programmatiquement
flush_rewrite_rules();
```

---

## Performance

### Optimisations appliquées

**CSS** :
- Variables CSS (pas de preprocesseur)
- Chargement conditionnel (pas de bloat)
- Globals.css mis en cache

**JavaScript** :
- Modules IIFE (pas de bundler nécessaire)
- Chargé en footer (`true` dans `wp_enqueue_script`)
- Pas de jQuery (vanilla JS)

**Images** :
- Thumbnails WordPress automatiques
- Lazy loading natif (WordPress 5.5+)

**Base de données** :
- ACF local field groups (pas en BDD)
- Indexation sur `start_date` (meta_key ordering)

### Recommandations production

1. **Plugin de cache** : W3 Total Cache ou WP Super Cache
2. **Minification** : Autoptimize ou Asset CleanUp
3. **CDN** : Cloudflare (gratuit)
4. **Images** : WebP avec Imagify ou ShortPixel
5. **Database** : WP-Optimize (cleanup automatique)

---

## Tests automatisés

### Tests unitaires (PHPUnit)

```bash
# Installer WP Test Suite
bash bin/install-wp-tests.sh wordpress_test root '' localhost latest

# Lancer les tests
phpunit
```

**Exemple test** :
```php
class Test_CPT extends WP_UnitTestCase {
    public function test_evenement_registered() {
        $post_type = get_post_type_object('evenement');
        $this->assertNotNull($post_type);
        $this->assertEquals('agenda', $post_type->rewrite['slug']);
    }
}
```

### Tests fonctionnels (Cypress)

```javascript
// cypress/integration/events.spec.js
describe('Events Archive', () => {
  it('should display events and filter', () => {
    cy.visit('/agenda/');
    cy.get('.event-card').should('have.length.greaterThan', 0);
    
    cy.get('select[name="event_type"]').select('Conférence');
    cy.get('button[type="submit"]').click();
    
    cy.url().should('include', 'event_type=conference');
  });
});
```

---

## Migration & Déploiement

### Export/Import base de données

```bash
# Export local
wp db export local.sql

# Import production
scp local.sql user@prod:/tmp/
ssh user@prod
cd /var/www/html/wordpress
wp db import /tmp/local.sql
wp search-replace 'http://local.dev' 'https://prod.com'
```

### Synchronisation fichiers

```bash
# Rsync (excluant uploads)
rsync -avz --exclude 'wp-content/uploads' \
  ./wp-content/themes/clee-bordeaux-theme \
  user@prod:/var/www/html/wordpress/wp-content/themes/
```

### Checklist pré-déploiement

- [ ] Désactiver WP_DEBUG
- [ ] Changer les clés de sécurité wp-config.php
- [ ] Installer plugin de sécurité (Wordfence)
- [ ] Configurer sauvegardes automatiques (UpdraftPlus)
- [ ] Tester sur environnement de staging
- [ ] Vérifier certificat SSL
- [ ] Configurer SMTP pour emails
- [ ] Installer plugin de cache
- [ ] Soumettre sitemap à Google Search Console

---

## Troubleshooting

### Problèmes courants

**1. Pages CPT 404**
```bash
wp rewrite flush
```

**2. Champs ACF non visibles**
- Vérifier que ACF est activé
- Vérifier `location` du field group
- Vider le cache si plugin actif

**3. Assets non chargés**
- Vérifier chemins dans `inc/enqueue.php`
- Vérifier permissions fichiers (755 pour dossiers, 644 pour fichiers)
- Vider cache navigateur

**4. Menu ne s'affiche pas**
- Vérifier qu'un menu est assigné à l'emplacement
- Vérifier `has_nav_menu('primary')` dans header.php

**5. Carte interactive ne s'affiche pas**
- Vérifier que latitude/longitude sont renseignées
- Vérifier API Google Maps (si utilisée)
- Vérifier console JavaScript pour erreurs

---

## Ressources

### Documentation WordPress
- Codex : https://codex.wordpress.org/
- Developer Resources : https://developer.wordpress.org/
- Block Editor Handbook : https://developer.wordpress.org/block-editor/

### Documentation ACF
- ACF Docs : https://www.advancedcustomfields.com/resources/
- ACF Local : https://www.advancedcustomfields.com/resources/local-json/

### Outils
- WP-CLI : https://wp-cli.org/
- Query Monitor : https://querymonitor.com/ (plugin debugging)
- Debug Bar : https://wordpress.org/plugins/debug-bar/

### Standards
- WordPress Coding Standards : https://developer.wordpress.org/coding-standards/
- PHP_CodeSniffer : https://github.com/squizlabs/PHP_CodeSniffer

---

## Changelog développeur

### v2.0 (Janvier 2026)
- Refonte complète architecture modulaire
- Ajout CPT (evenement, partenaire, etablissement)
- Intégration ACF local field groups
- Création options page
- 6 patterns Gutenberg
- theme.json complet
- Templates archives avec filtres PHP
- Templates single avec contenu lié

### v1.0 (Décembre 2025)
- Conversion HTML → WordPress
- Templates statiques
- Enqueue basique

---

**Document technique CLEE Bordeaux Avenir**  
**Pour développeurs uniquement**  
Version 2.0 - Janvier 2026
