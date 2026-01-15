<?php
/**
 * CLEE Bordeaux Avenir - WordPress Theme
 * 
 * @package CLEE_Bordeaux
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme constants
 */
define('CLEE_THEME_VERSION', '1.0.0');
define('CLEE_THEME_DIR', get_template_directory());
define('CLEE_THEME_URI', get_template_directory_uri());

/**
 * Load theme modules
 */
require_once CLEE_THEME_DIR . '/inc/setup.php';
require_once CLEE_THEME_DIR . '/inc/enqueue.php';
require_once CLEE_THEME_DIR . '/inc/cpt.php';
require_once CLEE_THEME_DIR . '/inc/acf.php';
require_once CLEE_THEME_DIR . '/inc/helpers.php';

/**
 * Load Gutenberg patterns (if file exists)
 */
if (file_exists(CLEE_THEME_DIR . '/inc/patterns.php')) {
    require_once CLEE_THEME_DIR . '/inc/patterns.php';
}
