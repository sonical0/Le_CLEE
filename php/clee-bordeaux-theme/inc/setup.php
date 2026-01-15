<?php
/**
 * Theme setup and supports
 */

if (!defined('ABSPATH')) {
    exit;
}

function clee_theme_setup() {
    // Title tag support
    add_theme_support('title-tag');
    
    // Post thumbnails
    add_theme_support('post-thumbnails');
    
    // HTML5 support
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ]);
    
    // Wide alignment for Gutenberg
    add_theme_support('align-wide');
    
    // Responsive embeds
    add_theme_support('responsive-embeds');
    
    // Editor styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');
    
    // Custom logo support
    add_theme_support('custom-logo', [
        'height'      => 100,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
    
    // Navigation menus
    register_nav_menus([
        'primary' => __('Menu principal', 'clee'),
        'footer'  => __('Menu footer', 'clee'),
    ]);
}
add_action('after_setup_theme', 'clee_theme_setup');

/**
 * Content width
 */
if (!isset($content_width)) {
    $content_width = 1200;
}
