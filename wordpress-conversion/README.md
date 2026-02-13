# Guide de conversion : Le CLEE vers WordPress

Ce guide explique comment convertir la page statique `le-clee.html` en page WordPress.

## Table des matières

1. [Prérequis](#prérequis)
2. [Structure des fichiers](#structure-des-fichiers)
3. [Installation étape par étape](#installation-étape-par-étape)
4. [Création de la page WordPress](#création-de-la-page-wordpress)
5. [Vérification et tests](#vérification-et-tests)
6. [Adaptation du header et footer](#adaptation-du-header-et-footer)

---

## Prérequis

- Site WordPress installé et fonctionnel
- Accès FTP ou accès fichiers du serveur
- Thème WordPress actif (child theme recommandé pour les modifications)
- Droits d'administrateur sur WordPress

---

## Structure des fichiers

Voici les fichiers créés pour la conversion :

```
wordpress-conversion/
├── template-le-clee.php      # Template de page WordPress
├── le-clee-styles.css         # Styles CSS spécifiques
├── functions-le-clee.php      # Fonctions PHP à ajouter
└── README.md                  # Ce guide
```

---

## Installation étape par étape

### Étape 1 : Créer un Child Theme (Recommandé)

Si vous n'avez pas encore de child theme, créez-en un pour éviter de perdre vos modifications lors des mises à jour du thème parent.

**Créer le dossier du child theme** :
```
wp-content/themes/votre-theme-child/
```

**Créer style.css** :
```css
/*
Theme Name: Votre Theme Child
Template: votre-theme-parent
*/
```

**Créer functions.php** :
```php
<?php
// Charger les styles du thème parent
function child_theme_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'child_theme_enqueue_styles');
```

**Activer le child theme** dans WordPress : Apparence > Thèmes

---

### Étape 2 : Copier les fichiers dans votre thème

#### 2.1 Template de page

Copiez `template-le-clee.php` dans le dossier de votre thème :

```
wp-content/themes/votre-theme/template-le-clee.php
```

ou si vous utilisez un child theme :

```
wp-content/themes/votre-theme-child/template-le-clee.php
```

#### 2.2 Fichier CSS

Créez un dossier `css` dans votre thème s'il n'existe pas déjà :

```
wp-content/themes/votre-theme/css/
```

Copiez `le-clee-styles.css` dans ce dossier :

```
wp-content/themes/votre-theme/css/le-clee-styles.css
```

#### 2.3 Fichier JavaScript (si nécessaire)

Si vous avez des interactions JavaScript (animations, smooth scroll, etc.), copiez vos fichiers JS :

```
wp-content/themes/votre-theme/js/common.js
```

---

### Étape 3 : Ajouter le code dans functions.php

Ouvrez le fichier `functions.php` de votre thème et **ajoutez à la fin** le contenu du fichier `functions-le-clee.php`.

**Chemin du fichier functions.php** :
```
wp-content/themes/votre-theme/functions.php
```

Ou si vous utilisez un child theme (recommandé) :
```
wp-content/themes/votre-theme-child/functions.php
```

**Copiez tout le contenu** de `functions-le-clee.php` **SAUF** la balise d'ouverture `<?php` du début (car elle existe déjà dans votre functions.php).

---

### Étape 4 : Vérifier les chemins des fichiers

Dans `functions-le-clee.php`, assurez-vous que les chemins correspondent à votre structure :

```php
// Si vos fichiers CSS sont dans wp-content/themes/votre-theme/css/
get_template_directory_uri() . '/css/le-clee-styles.css'

// Si vos fichiers JS sont dans wp-content/themes/votre-theme/js/
get_template_directory_uri() . '/js/common.js'
```

**Note** : `get_template_directory_uri()` pointe vers le thème parent. Si vous utilisez un child theme et que vous voulez pointer vers les fichiers du child theme, utilisez `get_stylesheet_directory_uri()`.

---

## Création de la page WordPress

### Étape 1 : Créer une nouvelle page

1. Connectez-vous à l'administration WordPress
2. Allez dans **Pages > Ajouter**
3. Donnez un titre à la page : **"Le CLEE"**
4. Vous pouvez laisser le contenu vide (le template gère tout le contenu)

### Étape 2 : Sélectionner le template

Dans la colonne de droite, sous **Attributs de page**, sélectionnez le modèle :

**Template** : `Le CLEE`

![Sélection du template](https://i.imgur.com/example.png)

### Étape 3 : Définir l'URL (slug)

Dans le bloc "Permalien", définissez l'URL de la page :

```
votre-site.com/le-clee
```

Cliquez sur **Publier**.

---

## Vérification et tests

### Vérifier l'affichage

1. Visitez la page : `https://votre-site.com/le-clee`
2. Vérifiez que tous les styles s'appliquent correctement
3. Testez la responsivité (mobile, tablette, desktop)

### Ouvrir la console du navigateur

Appuyez sur **F12** et vérifiez :

- **Console** : Pas d'erreurs JavaScript
- **Réseau** : Tous les fichiers CSS et JS se chargent (code 200, pas 404)

### Tester les fonctionnalités

- Fil d'ariane (breadcrumb) : vérifie que les liens fonctionnent
- Liens vers "Bureau Membres" et "Nos Actions" : créez ces pages aussi ou adaptez les liens
- Responsive : testez sur mobile (menu responsive, grilles adaptatives)

---

## Adaptation du header et footer

### Option 1 : Utiliser get_header() et get_footer()

Le template utilise `get_header()` et `get_footer()`, qui chargent automatiquement votre header et footer WordPress.

**Si votre thème a déjà un header/footer personnalisé**, ils seront utilisés automatiquement.

### Option 2 : Créer un header/footer personnalisé

Si vous voulez un header/footer spécifique pour cette page, créez :

```
wp-content/themes/votre-theme/header-leclee.php
wp-content/themes/votre-theme/footer-leclee.php
```

Et dans `template-le-clee.php`, remplacez :

```php
get_header(); // Devient : get_header('leclee');
get_footer(); // Devient : get_footer('leclee');
```

### Option 3 : Dupliquer la navigation HTML statique

Si vous voulez utiliser exactement la même navigation que votre site statique, vous pouvez :

1. Copier le code HTML de `<clee-nav-bar>` depuis votre composant
2. Le coller directement dans le template après `get_header();`
3. Adapter les liens avec `home_url()` pour WordPress

**Exemple** :
```php
<nav class="main-nav">
    <a href="<?php echo home_url(); ?>">Accueil</a>
    <a href="<?php echo home_url('/le-clee'); ?>">Le CLEE</a>
    <a href="<?php echo home_url('/companies'); ?>">Entreprises</a>
    <!-- etc. -->
</nav>
```

---

## Personnalisation avancée

### Changer l'image du hero

Dans `template-le-clee.php`, ligne 18, remplacez l'URL de l'image :

```php
<section class="hero-section" style="background-image: url('<?php echo get_template_directory_uri(); ?>/images/hero-le-clee.jpg');">
```

Puis uploadez votre image dans :
```
wp-content/themes/votre-theme/images/hero-le-clee.jpg
```

### Rendre le contenu éditable depuis WordPress

Si vous voulez que l'administrateur puisse modifier le contenu depuis l'éditeur WordPress :

**Remplacer le contenu statique par** :
```php
<div class="intro-content">
    <?php the_content(); ?>
</div>
```

Puis ajoutez le contenu directement dans l'éditeur WordPress de la page.

### Utiliser des Custom Fields (ACF)

Pour une gestion encore plus flexible, installez **Advanced Custom Fields** (ACF) :

1. Installez le plugin ACF
2. Créez un groupe de champs pour la page "Le CLEE"
3. Ajoutez des champs : titre hero, description hero, etc.
4. Utilisez `get_field()` dans le template

**Exemple** :
```php
<h1 class="hero-title"><?php the_field('hero_title'); ?></h1>
<p class="hero-description"><?php the_field('hero_description'); ?></p>
```

---

## Conversion d'autres pages

Pour convertir les autres pages (Bureau Membres, Nos Actions, etc.), répétez le processus :

1. Créez `template-bureau-membres.php`
2. Créez `bureau-membres-styles.css`
3. Ajoutez les fonctions dans `functions.php`
4. Créez la page WordPress et assignez le template

**Conseil** : Créez une fonction réutilisable pour enregistrer les styles/scripts de toutes les pages.

---

## Problèmes courants et solutions

### Les styles ne s'appliquent pas

**Vérifications** :
1. Le fichier CSS est bien dans le bon dossier
2. Le chemin dans `functions.php` est correct
3. Vider le cache WordPress (si plugin de cache installé)
4. Vider le cache du navigateur (Ctrl+Shift+R)
5. Vérifier la console F12 pour erreurs 404

**Solution** : Inspecter la page (F12), onglet Réseau, filtrer par CSS, vérifier que `le-clee-styles.css` se charge.

### Le template n'apparaît pas dans la liste

**Cause** : Le fichier template n'est pas reconnu par WordPress.

**Solution** :
1. Vérifier que le fichier commence bien par :
   ```php
   <?php
   /**
    * Template Name: Le CLEE
    */
   ```
2. Rafraîchir la page d'édition de WordPress
3. Vérifier que le fichier est bien dans le dossier du thème actif

### Les liens ne fonctionnent pas

**Cause** : Les URLs sont encore en format statique (.html).

**Solution** : Remplacer tous les liens par des fonctions WordPress :
```php
// Au lieu de : href="bureau-membres.html"
href="<?php echo home_url('/bureau-membres'); ?>"
```

### Les variables CSS ne fonctionnent pas

**Cause** : Les variables CSS ne sont pas chargées.

**Solution** : Vérifier que `clee_add_global_css_variables()` est bien appelée dans `functions.php`.

---

## Support et ressources

**Documentation WordPress** :
- [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)
- [Page Templates](https://developer.wordpress.org/themes/template-files-section/page-template-files/)
- [Enqueue Scripts and Styles](https://developer.wordpress.org/themes/basics/including-css-javascript/)

**Outils utiles** :
- Plugin **Query Monitor** : debug des requêtes et assets chargés
- Plugin **Advanced Custom Fields** : gestion des champs personnalisés
- Plugin **Duplicator** : sauvegarde avant modifications

---

## Récapitulatif des fichiers créés

| Fichier | Emplacement WordPress | Description |
|---------|----------------------|-------------|
| `template-le-clee.php` | `wp-content/themes/votre-theme/` | Template de page |
| `le-clee-styles.css` | `wp-content/themes/votre-theme/css/` | Styles CSS |
| `functions-le-clee.php` | Ajouter dans `functions.php` | Enregistrement assets |
| `common.js` | `wp-content/themes/votre-theme/js/` | JavaScript (optionnel) |

---

## Prochaines étapes

1. Convertir les autres pages (bureau-membres, nos-actions, etc.)
2. Créer un système de navigation cohérent avec WordPress
3. Ajouter un menu WordPress personnalisé
4. Intégrer les formulaires avec un plugin (Contact Form 7, Gravity Forms)
5. Optimiser les performances (cache, minification)

---

**Dernière mise à jour** : 12 février 2026
**Version** : 1.0
**Auteur** : Équipe technique CLEE Bordeaux Avenir
