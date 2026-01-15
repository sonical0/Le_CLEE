<?php
/**
 * Gutenberg Block Patterns
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register pattern categories
 */
function clee_register_pattern_categories() {
    register_block_pattern_category('clee-patterns', [
        'label' => 'CLEE Patterns',
    ]);
}
add_action('init', 'clee_register_pattern_categories');

/**
 * Register patterns
 */
function clee_register_patterns() {
    
    // Pattern 1: Hero avec titre, description et bouton
    register_block_pattern('clee/hero-section', [
        'title'       => 'Hero Section',
        'description' => 'Section hero avec titre, description et bouton d\'action',
        'categories'  => ['clee-patterns'],
        'content'     => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"6rem","bottom":"6rem"}}},"backgroundColor":"primary-50","className":"hero hero-gradient"} -->
<div class="wp-block-group alignfull hero hero-gradient has-primary-50-background-color has-background" style="padding-top:6rem;padding-bottom:6rem"><!-- wp:group {"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":1,"fontSize":"xx-large"} -->
<h1 class="wp-block-heading has-text-align-center has-xx-large-font-size">Titre de la section hero</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"medium"} -->
<p class="has-text-align-center has-medium-font-size">Description courte et engageante pour expliquer le contenu de la page</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">En savoir plus</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
    ]);
    
    // Pattern 2: Section 3 colonnes avec cartes
    register_block_pattern('clee/three-columns-cards', [
        'title'       => 'Trois colonnes - Cartes',
        'description' => 'Section avec 3 cartes en colonnes',
        'categories'  => ['clee-patterns'],
        'content'     => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"4rem","bottom":"4rem"}}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull" style="padding-top:4rem;padding-bottom:4rem"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center">Titre de la section</h2>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"padding":{"top":"2rem","right":"2rem","bottom":"2rem","left":"2rem"}},"border":{"radius":"8px"}},"backgroundColor":"grey-50"} -->
<div class="wp-block-group has-grey-50-background-color has-background" style="border-radius:8px;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem"><!-- wp:heading {"level":3,"fontSize":"large"} -->
<h3 class="wp-block-heading has-large-font-size">Carte 1</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Description de la première carte avec des informations pertinentes.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"padding":{"top":"2rem","right":"2rem","bottom":"2rem","left":"2rem"}},"border":{"radius":"8px"}},"backgroundColor":"grey-50"} -->
<div class="wp-block-group has-grey-50-background-color has-background" style="border-radius:8px;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem"><!-- wp:heading {"level":3,"fontSize":"large"} -->
<h3 class="wp-block-heading has-large-font-size">Carte 2</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Description de la deuxième carte avec des informations pertinentes.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"padding":{"top":"2rem","right":"2rem","bottom":"2rem","left":"2rem"}},"border":{"radius":"8px"}},"backgroundColor":"grey-50"} -->
<div class="wp-block-group has-grey-50-background-color has-background" style="border-radius:8px;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem"><!-- wp:heading {"level":3,"fontSize":"large"} -->
<h3 class="wp-block-heading has-large-font-size">Carte 3</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Description de la troisième carte avec des informations pertinentes.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
    ]);
    
    // Pattern 3: Section 2 colonnes texte + image
    register_block_pattern('clee/text-image-two-columns', [
        'title'       => 'Deux colonnes - Texte et Image',
        'description' => 'Section avec texte à gauche et image à droite',
        'categories'  => ['clee-patterns'],
        'content'     => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"4rem","bottom":"4rem"}}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull" style="padding-top:4rem;padding-bottom:4rem"><!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:heading -->
<h2 class="wp-block-heading">Titre de la section</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Texte descriptif pour expliquer le contenu. Vous pouvez ajouter plusieurs paragraphes et détailler votre message.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Deuxième paragraphe avec des informations complémentaires.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button">En savoir plus</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://placehold.co/600x400" alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
    ]);
    
    // Pattern 4: CTA Banner
    register_block_pattern('clee/cta-banner', [
        'title'       => 'Bandeau Call-to-Action',
        'description' => 'Bandeau CTA avec fond coloré',
        'categories'  => ['clee-patterns'],
        'content'     => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"3rem","bottom":"3rem"}}},"backgroundColor":"primary-900","textColor":"white"} -->
<div class="wp-block-group alignfull has-white-color has-primary-900-background-color has-text-color has-background" style="padding-top:3rem;padding-bottom:3rem"><!-- wp:group {"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","textColor":"white"} -->
<h2 class="wp-block-heading has-text-align-center has-white-color has-text-color">Rejoignez le CLEE Bordeaux Avenir</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"white"} -->
<p class="has-text-align-center has-white-color has-text-color">Ensemble, construisons l\'avenir des jeunes et des entreprises de Bordeaux</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"white","textColor":"primary-900"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-primary-900-color has-white-background-color has-text-color has-background wp-element-button">Nous contacter</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->',
    ]);
    
    // Pattern 5: Stats Row (3 statistiques)
    register_block_pattern('clee/stats-row', [
        'title'       => 'Rangée de statistiques',
        'description' => 'Section avec 3 statistiques côte à côte',
        'categories'  => ['clee-patterns'],
        'content'     => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"4rem","bottom":"4rem"}}},"backgroundColor":"grey-50","layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull has-grey-50-background-color has-background" style="padding-top:4rem;padding-bottom:4rem"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"blockGap":"0.5rem"}}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"xx-large","textColor":"primary-900"} -->
<h3 class="wp-block-heading has-text-align-center has-primary-900-color has-text-color has-xx-large-font-size">150+</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"normal"} -->
<p class="has-text-align-center has-normal-font-size">Entreprises partenaires</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"blockGap":"0.5rem"}}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"xx-large","textColor":"primary-900"} -->
<h3 class="wp-block-heading has-text-align-center has-primary-900-color has-text-color has-xx-large-font-size">25</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"normal"} -->
<p class="has-text-align-center has-normal-font-size">Établissements scolaires</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"blockGap":"0.5rem"}}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"xx-large","textColor":"primary-900"} -->
<h3 class="wp-block-heading has-text-align-center has-primary-900-color has-text-color has-xx-large-font-size">5000+</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"normal"} -->
<p class="has-text-align-center has-normal-font-size">Élèves accompagnés</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
    ]);
    
    // Pattern 6: Section avec icônes et texte (4 colonnes)
    register_block_pattern('clee/four-columns-icons', [
        'title'       => 'Quatre colonnes avec icônes',
        'description' => 'Section avec 4 éléments icône + texte',
        'categories'  => ['clee-patterns'],
        'content'     => '<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"4rem","bottom":"4rem"}}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull" style="padding-top:4rem;padding-bottom:4rem"><!-- wp:heading {"textAlign":"center"} -->
<h2 class="wp-block-heading has-text-align-center">Nos missions</h2>
<!-- /wp:heading -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"blockGap":"1rem"}}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
<h3 class="wp-block-heading has-text-align-center has-medium-font-size">Accompagner</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"small"} -->
<p class="has-text-align-center has-small-font-size">Les jeunes dans leur orientation professionnelle</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"blockGap":"1rem"}}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
<h3 class="wp-block-heading has-text-align-center has-medium-font-size">Connecter</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"small"} -->
<p class="has-text-align-center has-small-font-size">Écoles et entreprises du territoire</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"blockGap":"1rem"}}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
<h3 class="wp-block-heading has-text-align-center has-medium-font-size">Former</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"small"} -->
<p class="has-text-align-center has-small-font-size">Aux métiers de demain avec nos partenaires</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"style":{"spacing":{"blockGap":"1rem"}}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","level":3,"fontSize":"medium"} -->
<h3 class="wp-block-heading has-text-align-center has-medium-font-size">Innover</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","fontSize":"small"} -->
<p class="has-text-align-center has-small-font-size">Dans les méthodes pédagogiques et partenariats</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->',
    ]);
}
add_action('init', 'clee_register_patterns');
