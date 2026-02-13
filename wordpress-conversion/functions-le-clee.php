<?php
/**
 * Functions pour la page Le CLEE
 * À ajouter dans le fichier functions.php de votre thème WordPress
 */

/**
 * Enregistrer les styles CSS pour la page Le CLEE
 */
function clee_enqueue_le_clee_styles() {
    // Vérifier si on est sur la page "Le CLEE"
    if (is_page_template('template-le-clee.php')) {
        
        // Enregistrer les variables CSS globales (globals.css)
        // Note: Ces styles doivent être ajoutés dans le style.css de votre thème
        // ou dans un fichier global chargé sur toutes les pages
        
        // Charger les styles spécifiques à la page Le CLEE
        wp_enqueue_style(
            'le-clee-styles',
            get_template_directory_uri() . '/css/le-clee-styles.css',
            array(),
            '1.0.0',
            'all'
        );
    }
}
add_action('wp_enqueue_scripts', 'clee_enqueue_le_clee_styles');

/**
 * Enregistrer les scripts JavaScript pour la page Le CLEE
 * (Si nécessaire pour les interactions)
 */
function clee_enqueue_le_clee_scripts() {
    if (is_page_template('template-le-clee.php')) {
        
        // Charger le script common.js (animations, scroll, etc.)
        wp_enqueue_script(
            'clee-common',
            get_template_directory_uri() . '/js/common.js',
            array('jquery'), // Dépendances (jQuery si nécessaire)
            '1.0.0',
            true // Charger dans le footer
        );
    }
}
add_action('wp_enqueue_scripts', 'clee_enqueue_le_clee_scripts');

/**
 * Ajouter les variables CSS globales dans le <head>
 * (Équivalent de globals.css)
 */
function clee_add_global_css_variables() {
    ?>
    <style>
        :root {
            /* Couleurs primaires (Bleu) */
            --primary-900: rgba(31, 52, 72, 1);
            --primary-800: rgba(49, 73, 96, 1);
            --primary-700: rgba(68, 95, 122, 1);
            --primary-600: rgba(81, 110, 140, 1);
            --primary-500: rgba(94, 126, 159, 1);
            --primary-400: rgba(153, 173, 194, 1);
            --primary-300: rgba(184, 199, 214, 1);
            --primary-200: rgba(214, 224, 235, 1);
            --primary-100: rgba(229, 236, 245, 1);
            --primary-50: rgba(229, 240, 255, 1);
            
            /* Couleurs secondaires (Orange) */
            --secondary-500: rgba(255, 136, 73, 1);
            --secondary-50: rgba(255, 240, 229, 1);
            
            /* Gris */
            --grey-900: rgba(17, 24, 39, 1);
            --grey-800: rgba(31, 41, 55, 1);
            --grey-700: rgba(55, 65, 81, 1);
            --grey-600: rgba(75, 85, 99, 1);
            --grey-500: rgba(107, 114, 128, 1);
            --grey-400: rgba(156, 163, 175, 1);
            --grey-300: rgba(209, 213, 219, 1);
            --grey-200: rgba(229, 231, 235, 1);
            --grey-100: rgba(243, 244, 246, 1);
            --grey-50: rgba(249, 250, 251, 1);
            
            /* Typographie */
            --navbar-text-font-family: "Roboto", sans-serif;
            --titre-font-family: "Barlow Condensed", sans-serif;
            --body-text-font-family: "Roboto", sans-serif;
            
            /* Tailles de texte */
            --text-xs: 0.75rem;    /* 12px */
            --text-sm: 0.875rem;   /* 14px */
            --text-base: 1rem;     /* 16px */
            --text-lg: 1.125rem;   /* 18px */
            --text-xl: 1.25rem;    /* 20px */
            --text-2xl: 1.5rem;    /* 24px */
            --text-3xl: 2rem;      /* 32px */
            --text-4xl: 2.5rem;    /* 40px */
            
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
        
        /* Styles de base pour le container */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing-md);
        }
        
        /* Charger les fontes Google */
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap');
    </style>
    <?php
}
add_action('wp_head', 'clee_add_global_css_variables');

/**
 * Fonction helper pour obtenir l'URL d'une page par son slug
 */
function clee_get_page_url($slug) {
    $page = get_page_by_path($slug);
    return $page ? get_permalink($page->ID) : home_url();
}
