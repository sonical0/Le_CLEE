<?php
/**
 * Custom Post Types and Taxonomies
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register Custom Post Type: Événement
 */
function clee_register_evenement_cpt() {
    $labels = [
        'name'                  => 'Événements',
        'singular_name'         => 'Événement',
        'menu_name'             => 'Événements',
        'all_items'             => 'Tous les événements',
        'add_new'               => 'Ajouter',
        'add_new_item'          => 'Ajouter un événement',
        'edit_item'             => 'Modifier l\'événement',
        'new_item'              => 'Nouvel événement',
        'view_item'             => 'Voir l\'événement',
        'search_items'          => 'Rechercher des événements',
        'not_found'             => 'Aucun événement trouvé',
        'not_found_in_trash'    => 'Aucun événement dans la corbeille',
    ];

    $args = [
        'labels'              => $labels,
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => ['slug' => 'agenda', 'with_front' => false],
        'capability_type'     => 'post',
        'has_archive'         => 'agenda',
        'hierarchical'        => false,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-calendar-alt',
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest'        => true,
    ];

    register_post_type('evenement', $args);
}
add_action('init', 'clee_register_evenement_cpt');

/**
 * Register Custom Post Type: Partenaire
 */
function clee_register_partenaire_cpt() {
    $labels = [
        'name'                  => 'Partenaires',
        'singular_name'         => 'Partenaire',
        'menu_name'             => 'Partenaires',
        'all_items'             => 'Tous les partenaires',
        'add_new'               => 'Ajouter',
        'add_new_item'          => 'Ajouter un partenaire',
        'edit_item'             => 'Modifier le partenaire',
        'new_item'              => 'Nouveau partenaire',
        'view_item'             => 'Voir le partenaire',
        'search_items'          => 'Rechercher des partenaires',
        'not_found'             => 'Aucun partenaire trouvé',
        'not_found_in_trash'    => 'Aucun partenaire dans la corbeille',
    ];

    $args = [
        'labels'              => $labels,
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => ['slug' => 'partenaires', 'with_front' => false],
        'capability_type'     => 'post',
        'has_archive'         => 'partenaires',
        'hierarchical'        => false,
        'menu_position'       => 6,
        'menu_icon'           => 'dashicons-building',
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest'        => true,
    ];

    register_post_type('partenaire', $args);
}
add_action('init', 'clee_register_partenaire_cpt');

/**
 * Register Custom Post Type: Établissement
 */
function clee_register_etablissement_cpt() {
    $labels = [
        'name'                  => 'Établissements',
        'singular_name'         => 'Établissement',
        'menu_name'             => 'Établissements',
        'all_items'             => 'Tous les établissements',
        'add_new'               => 'Ajouter',
        'add_new_item'          => 'Ajouter un établissement',
        'edit_item'             => 'Modifier l\'établissement',
        'new_item'              => 'Nouvel établissement',
        'view_item'             => 'Voir l\'établissement',
        'search_items'          => 'Rechercher des établissements',
        'not_found'             => 'Aucun établissement trouvé',
        'not_found_in_trash'    => 'Aucun établissement dans la corbeille',
    ];

    $args = [
        'labels'              => $labels,
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => ['slug' => 'etablissements', 'with_front' => false],
        'capability_type'     => 'post',
        'has_archive'         => 'etablissements',
        'hierarchical'        => false,
        'menu_position'       => 7,
        'menu_icon'           => 'dashicons-bank',
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest'        => true,
    ];

    register_post_type('etablissement', $args);
}
add_action('init', 'clee_register_etablissement_cpt');

/**
 * Register Taxonomy: Type d'événement
 */
function clee_register_event_type_taxonomy() {
    $labels = [
        'name'              => 'Types d\'événements',
        'singular_name'     => 'Type d\'événement',
        'search_items'      => 'Rechercher des types',
        'all_items'         => 'Tous les types',
        'edit_item'         => 'Modifier le type',
        'update_item'       => 'Mettre à jour le type',
        'add_new_item'      => 'Ajouter un type',
        'new_item_name'     => 'Nouveau type',
        'menu_name'         => 'Types d\'événements',
    ];

    $args = [
        'labels'            => $labels,
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud'     => false,
        'show_in_rest'      => true,
        'rewrite'           => ['slug' => 'type-evenement'],
    ];

    register_taxonomy('event_type', ['evenement'], $args);
}
add_action('init', 'clee_register_event_type_taxonomy');

/**
 * Register Taxonomy: Catégorie de partenaire
 */
function clee_register_partner_category_taxonomy() {
    $labels = [
        'name'              => 'Catégories de partenaires',
        'singular_name'     => 'Catégorie',
        'search_items'      => 'Rechercher des catégories',
        'all_items'         => 'Toutes les catégories',
        'edit_item'         => 'Modifier la catégorie',
        'update_item'       => 'Mettre à jour la catégorie',
        'add_new_item'      => 'Ajouter une catégorie',
        'new_item_name'     => 'Nouvelle catégorie',
        'menu_name'         => 'Catégories',
    ];

    $args = [
        'labels'            => $labels,
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud'     => false,
        'show_in_rest'      => true,
        'rewrite'           => ['slug' => 'categorie-partenaire'],
    ];

    register_taxonomy('partner_category', ['partenaire'], $args);
}
add_action('init', 'clee_register_partner_category_taxonomy');

/**
 * Register Taxonomy: Catégorie de formation
 */
function clee_register_formation_category_taxonomy() {
    $labels = [
        'name'              => 'Catégories de formation',
        'singular_name'     => 'Catégorie',
        'search_items'      => 'Rechercher des catégories',
        'all_items'         => 'Toutes les catégories',
        'edit_item'         => 'Modifier la catégorie',
        'update_item'       => 'Mettre à jour la catégorie',
        'add_new_item'      => 'Ajouter une catégorie',
        'new_item_name'     => 'Nouvelle catégorie',
        'menu_name'         => 'Catégories',
    ];

    $args = [
        'labels'            => $labels,
        'hierarchical'      => true,
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud'     => false,
        'show_in_rest'      => true,
        'rewrite'           => ['slug' => 'categorie-formation'],
    ];

    register_taxonomy('formation_category', ['etablissement'], $args);
}
add_action('init', 'clee_register_formation_category_taxonomy');

/**
 * Flush rewrite rules on theme activation
 */
function clee_flush_rewrite_rules() {
    clee_register_evenement_cpt();
    clee_register_partenaire_cpt();
    clee_register_etablissement_cpt();
    clee_register_event_type_taxonomy();
    clee_register_partner_category_taxonomy();
    clee_register_formation_category_taxonomy();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'clee_flush_rewrite_rules');
