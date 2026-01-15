=== CLEE Bordeaux Avenir WordPress Theme ===
Contributors: CLEE Bordeaux
Version: 2.0.0
Requires at least: 6.0
Tested up to: 6.4
Requires PHP: 7.4
License: GPLv2 or later

== Description ==

Thème WordPress professionnel pour CLEE Bordeaux Avenir - Version éditable avec Gutenberg, Custom Post Types et ACF.

Ce thème transforme le site statique HTML/CSS/JS en un site WordPress entièrement éditable par le client.

== Architecture ==

Structure modulaire :
- inc/setup.php : Configuration du thème
- inc/enqueue.php : Chargement des assets
- inc/cpt.php : Custom Post Types (événements, partenaires, établissements)
- inc/acf.php : Champs ACF et options
- inc/helpers.php : Fonctions utilitaires
- inc/patterns.php : Patterns Gutenberg

== Installation ==

### Prérequis
1. WordPress 6.0+
2. PHP 7.4+
3. Plugin ACF (Advanced Custom Fields)

### Étapes
1. Copier le thème dans /wp-content/themes/
2. Activer le thème dans WP Admin
3. Installer et activer ACF
4. Aller dans Réglages > Permaliens et cliquer "Enregistrer"

### Pages à créer (avec slugs exacts)
- Le CLEE → le-clee
- Bureau & Membres → bureau-membres
- Nos Actions → nos-actions
- Documents Officiels → documents-officiels
- Jeunes & Familles → jeunes-familles
- PFMP → pfmp
- Orientation & Insertion → orientation-insertion
- Vie du CLEE pour les élèves → vie-clee-eleves
- Vie du CLEE → vie-clee
- Contact → contact

### Configuration
1. Créer les menus (Menu principal + Menu footer)
2. Définir la page d'accueil statique
3. Remplir les options du thème (Options du thème dans admin)

== Custom Post Types ==

### Événements (evenement)
Archive : /agenda/
Champs : dates, lieu, lien inscription
Taxonomie : Type d'événement

### Partenaires (partenaire)
Archive : /partenaires/
Champs : logo, site web, coordonnées GPS
Taxonomie : Catégorie de partenaire

### Établissements (etablissement)
Archive : /etablissements/
Champs : coordonnées, formations (repeater)
Taxonomie : Catégorie de formation

== Patterns Gutenberg ==

6 patterns disponibles dans "CLEE Patterns" :
1. Hero Section
2. Trois colonnes - Cartes
3. Deux colonnes - Texte et Image
4. Bandeau Call-to-Action
5. Rangée de statistiques
6. Quatre colonnes avec icônes

== Support ==

Email : contact@clee-bordeaux.fr


4) Set a static homepage and choose the page that uses the front page (or keep is_front_page()).

Notes:
- CSS/JS are enqueued via functions.php (globals/common always + page-specific).
- Internal links .html were converted to WordPress URLs based on these slugs.
