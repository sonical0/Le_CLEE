<?php
/**
 * ACF Field Groups and Options Page
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register ACF Options Page
 */
function clee_acf_options_page() {
    if (!function_exists('acf_add_options_page')) {
        return;
    }

    acf_add_options_page([
        'page_title' => 'Options du thème',
        'menu_title' => 'Options du thème',
        'menu_slug'  => 'theme-options',
        'capability' => 'edit_posts',
        'icon_url'   => 'dashicons-admin-settings',
        'position'   => 60,
    ]);
}
add_action('acf/init', 'clee_acf_options_page');

/**
 * ACF Field Group: Événement
 */
function clee_acf_evenement_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key'      => 'group_evenement',
        'title'    => 'Informations de l\'événement',
        'fields'   => [
            [
                'key'           => 'field_event_start_date',
                'label'         => 'Date de début',
                'name'          => 'start_date',
                'type'          => 'date_picker',
                'required'      => 1,
                'display_format' => 'd/m/Y',
                'return_format'  => 'Y-m-d',
            ],
            [
                'key'           => 'field_event_end_date',
                'label'         => 'Date de fin',
                'name'          => 'end_date',
                'type'          => 'date_picker',
                'required'      => 0,
                'display_format' => 'd/m/Y',
                'return_format'  => 'Y-m-d',
            ],
            [
                'key'      => 'field_event_start_time',
                'label'    => 'Heure de début',
                'name'     => 'start_time',
                'type'     => 'time_picker',
                'required' => 0,
                'display_format' => 'H:i',
                'return_format'  => 'H:i',
            ],
            [
                'key'      => 'field_event_end_time',
                'label'    => 'Heure de fin',
                'name'     => 'end_time',
                'type'     => 'time_picker',
                'required' => 0,
                'display_format' => 'H:i',
                'return_format'  => 'H:i',
            ],
            [
                'key'      => 'field_event_location',
                'label'    => 'Lieu',
                'name'     => 'location',
                'type'     => 'text',
                'required' => 0,
            ],
            [
                'key'      => 'field_event_registration_url',
                'label'    => 'Lien d\'inscription',
                'name'     => 'registration_url',
                'type'     => 'url',
                'required' => 0,
            ],
            [
                'key'      => 'field_event_is_featured',
                'label'    => 'Événement à la une',
                'name'     => 'is_featured',
                'type'     => 'true_false',
                'default_value' => 0,
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'evenement',
                ],
            ],
        ],
    ]);
}
add_action('acf/init', 'clee_acf_evenement_fields');

/**
 * ACF Field Group: Partenaire
 */
function clee_acf_partenaire_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key'      => 'group_partenaire',
        'title'    => 'Informations du partenaire',
        'fields'   => [
            [
                'key'      => 'field_partner_logo',
                'label'    => 'Logo',
                'name'     => 'logo',
                'type'     => 'image',
                'required' => 0,
                'return_format' => 'array',
                'preview_size'  => 'medium',
            ],
            [
                'key'      => 'field_partner_website',
                'label'    => 'Site web',
                'name'     => 'website',
                'type'     => 'url',
                'required' => 0,
            ],
            [
                'key'      => 'field_partner_address',
                'label'    => 'Adresse',
                'name'     => 'address',
                'type'     => 'textarea',
                'required' => 0,
                'rows'     => 3,
            ],
            [
                'key'      => 'field_partner_latitude',
                'label'    => 'Latitude',
                'name'     => 'latitude',
                'type'     => 'number',
                'required' => 0,
                'step'     => 0.000001,
            ],
            [
                'key'      => 'field_partner_longitude',
                'label'    => 'Longitude',
                'name'     => 'longitude',
                'type'     => 'number',
                'required' => 0,
                'step'     => 0.000001,
            ],
            [
                'key'      => 'field_partner_phone',
                'label'    => 'Téléphone',
                'name'     => 'phone',
                'type'     => 'text',
                'required' => 0,
            ],
            [
                'key'      => 'field_partner_email',
                'label'    => 'Email',
                'name'     => 'email',
                'type'     => 'email',
                'required' => 0,
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'partenaire',
                ],
            ],
        ],
    ]);
}
add_action('acf/init', 'clee_acf_partenaire_fields');

/**
 * ACF Field Group: Établissement
 */
function clee_acf_etablissement_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key'      => 'group_etablissement',
        'title'    => 'Informations de l\'établissement',
        'fields'   => [
            [
                'key'      => 'field_etablissement_address',
                'label'    => 'Adresse',
                'name'     => 'address',
                'type'     => 'textarea',
                'required' => 0,
                'rows'     => 3,
            ],
            [
                'key'      => 'field_etablissement_phone',
                'label'    => 'Téléphone',
                'name'     => 'contact_phone',
                'type'     => 'text',
                'required' => 0,
            ],
            [
                'key'      => 'field_etablissement_email',
                'label'    => 'Email',
                'name'     => 'contact_email',
                'type'     => 'email',
                'required' => 0,
            ],
            [
                'key'      => 'field_etablissement_website',
                'label'    => 'Site web',
                'name'     => 'website',
                'type'     => 'url',
                'required' => 0,
            ],
            [
                'key'      => 'field_etablissement_latitude',
                'label'    => 'Latitude',
                'name'     => 'latitude',
                'type'     => 'number',
                'required' => 0,
                'step'     => 0.000001,
            ],
            [
                'key'      => 'field_etablissement_longitude',
                'label'    => 'Longitude',
                'name'     => 'longitude',
                'type'     => 'number',
                'required' => 0,
                'step'     => 0.000001,
            ],
            [
                'key'      => 'field_etablissement_formations',
                'label'    => 'Formations proposées',
                'name'     => 'formations',
                'type'     => 'repeater',
                'required' => 0,
                'layout'   => 'table',
                'button_label' => 'Ajouter une formation',
                'sub_fields' => [
                    [
                        'key'      => 'field_formation_name',
                        'label'    => 'Nom de la formation',
                        'name'     => 'name',
                        'type'     => 'text',
                        'required' => 1,
                    ],
                    [
                        'key'      => 'field_formation_description',
                        'label'    => 'Description',
                        'name'     => 'description',
                        'type'     => 'textarea',
                        'required' => 0,
                        'rows'     => 2,
                    ],
                    [
                        'key'      => 'field_formation_level',
                        'label'    => 'Niveau',
                        'name'     => 'level',
                        'type'     => 'select',
                        'required' => 0,
                        'choices'  => [
                            'cap'        => 'CAP',
                            'bac_pro'    => 'Bac Pro',
                            'bts'        => 'BTS',
                            'licence'    => 'Licence',
                            'master'     => 'Master',
                        ],
                    ],
                ],
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'etablissement',
                ],
            ],
        ],
    ]);
}
add_action('acf/init', 'clee_acf_etablissement_fields');

/**
 * ACF Field Group: Options du thème (Footer, coordonnées, etc.)
 */
function clee_acf_theme_options_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key'      => 'group_theme_options',
        'title'    => 'Options du thème',
        'fields'   => [
            // Coordonnées
            [
                'key'      => 'field_contact_tab',
                'label'    => 'Coordonnées',
                'type'     => 'tab',
                'placement' => 'top',
            ],
            [
                'key'      => 'field_contact_address',
                'label'    => 'Adresse',
                'name'     => 'contact_address',
                'type'     => 'textarea',
                'rows'     => 3,
            ],
            [
                'key'      => 'field_contact_phone',
                'label'    => 'Téléphone',
                'name'     => 'contact_phone',
                'type'     => 'text',
            ],
            [
                'key'      => 'field_contact_email',
                'label'    => 'Email',
                'name'     => 'contact_email',
                'type'     => 'email',
            ],
            
            // Réseaux sociaux
            [
                'key'      => 'field_social_tab',
                'label'    => 'Réseaux sociaux',
                'type'     => 'tab',
                'placement' => 'top',
            ],
            [
                'key'      => 'field_social_facebook',
                'label'    => 'Facebook',
                'name'     => 'social_facebook',
                'type'     => 'url',
            ],
            [
                'key'      => 'field_social_twitter',
                'label'    => 'Twitter',
                'name'     => 'social_twitter',
                'type'     => 'url',
            ],
            [
                'key'      => 'field_social_linkedin',
                'label'    => 'LinkedIn',
                'name'     => 'social_linkedin',
                'type'     => 'url',
            ],
            [
                'key'      => 'field_social_instagram',
                'label'    => 'Instagram',
                'name'     => 'social_instagram',
                'type'     => 'url',
            ],
            
            // Footer
            [
                'key'      => 'field_footer_tab',
                'label'    => 'Footer',
                'type'     => 'tab',
                'placement' => 'top',
            ],
            [
                'key'      => 'field_footer_text',
                'label'    => 'Texte du footer',
                'name'     => 'footer_text',
                'type'     => 'wysiwyg',
                'toolbar'  => 'basic',
                'media_upload' => 0,
            ],
            [
                'key'      => 'field_footer_copyright',
                'label'    => 'Copyright',
                'name'     => 'footer_copyright',
                'type'     => 'text',
                'default_value' => '© 2026 CLEE Bordeaux Avenir - Tous droits réservés',
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'options_page',
                    'operator' => '==',
                    'value'    => 'theme-options',
                ],
            ],
        ],
    ]);
}
add_action('acf/init', 'clee_acf_theme_options_fields');
