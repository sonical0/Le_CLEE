<?php
/**
 * Enqueue scripts and styles
 */

if (!defined('ABSPATH')) {
    exit;
}

function clee_enqueue_assets() {
    $theme_version = wp_get_theme()->get('Version');
    
    // Global CSS (always loaded)
    wp_enqueue_style(
        'clee-globals',
        get_template_directory_uri() . '/assets/css/globals.css',
        [],
        $theme_version
    );
    
    // Global JS (always loaded)
    wp_enqueue_script(
        'clee-common',
        get_template_directory_uri() . '/assets/js/common.js',
        [],
        $theme_version,
        true
    );
    
    // Front page (homepage)
    if (is_front_page()) {
        wp_enqueue_style(
            'clee-home',
            get_template_directory_uri() . '/assets/css/home.css',
            ['clee-globals'],
            $theme_version
        );
        return;
    }
    
    // Page-specific assets based on slug
    $page_slug = get_post_field('post_name', get_queried_object_id());
    
    // Agenda page
    if (is_page('agenda') || is_post_type_archive('evenement')) {
        wp_enqueue_style(
            'clee-agenda',
            get_template_directory_uri() . '/assets/css/agenda.css',
            ['clee-globals'],
            $theme_version
        );
        wp_enqueue_script(
            'clee-agenda',
            get_template_directory_uri() . '/assets/js/agenda.js',
            ['clee-common'],
            $theme_version,
            true
        );
    }
    
    // Companies/Partenaires page
    if (is_page('companies') || is_post_type_archive('partenaire')) {
        wp_enqueue_style(
            'clee-companies',
            get_template_directory_uri() . '/assets/css/companies.css',
            ['clee-globals'],
            $theme_version
        );
        wp_enqueue_script(
            'clee-companies',
            get_template_directory_uri() . '/assets/js/companies.js',
            ['clee-common'],
            $theme_version,
            true
        );
    }
    
    // Establishments page
    if (is_page('establishments') || is_post_type_archive('etablissement')) {
        wp_enqueue_style(
            'clee-establishments',
            get_template_directory_uri() . '/assets/css/establishments.css',
            ['clee-globals'],
            $theme_version
        );
        wp_enqueue_script(
            'clee-establishments',
            get_template_directory_uri() . '/assets/js/establishments.js',
            ['clee-common'],
            $theme_version,
            true
        );
    }
    
    // Vie CLEE page
    if (is_page('vie-clee')) {
        wp_enqueue_style(
            'clee-vie-clee',
            get_template_directory_uri() . '/assets/css/vie-clee.css',
            ['clee-globals'],
            $theme_version
        );
        wp_enqueue_script(
            'clee-vie-clee',
            get_template_directory_uri() . '/assets/js/vie-clee.js',
            ['clee-common'],
            $theme_version,
            true
        );
    }
    
    // Contact page
    if (is_page('contact')) {
        wp_enqueue_style(
            'clee-contact',
            get_template_directory_uri() . '/assets/css/contact.css',
            ['clee-globals'],
            $theme_version
        );
        wp_enqueue_script(
            'clee-contact',
            get_template_directory_uri() . '/assets/js/contact.js',
            ['clee-common'],
            $theme_version,
            true
        );
    }
    
    // Pages using le-clee.css
    $uses_le_clee_css = ['le-clee', 'bureau-membres', 'nos-actions', 'documents-officiels'];
    if (is_page($uses_le_clee_css)) {
        wp_enqueue_style(
            'clee-le-clee',
            get_template_directory_uri() . '/assets/css/le-clee.css',
            ['clee-globals'],
            $theme_version
        );
    }
    
    // Pages using jeunes-familles.css
    $uses_jeunes_css = ['jeunes-familles', 'pfmp', 'orientation-insertion', 'vie-clee-eleves'];
    if (is_page($uses_jeunes_css)) {
        wp_enqueue_style(
            'clee-jeunes',
            get_template_directory_uri() . '/assets/css/jeunes-familles.css',
            ['clee-globals'],
            $theme_version
        );
    }
}
add_action('wp_enqueue_scripts', 'clee_enqueue_assets');

/**
 * Enqueue block editor assets
 */
function clee_enqueue_block_editor_assets() {
    $theme_version = wp_get_theme()->get('Version');
    
    wp_enqueue_style(
        'clee-editor',
        get_template_directory_uri() . '/assets/css/editor-style.css',
        ['wp-edit-blocks'],
        $theme_version
    );
}
add_action('enqueue_block_editor_assets', 'clee_enqueue_block_editor_assets');
