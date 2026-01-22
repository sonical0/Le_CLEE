<?php
// Basic theme setup
add_action('after_setup_theme', function () {
  add_theme_support('title-tag');
  add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
});

// Enqueue CSS/JS
add_action('wp_enqueue_scripts', function () {
  // Global
  wp_enqueue_style('clee-globals', get_template_directory_uri() . '/assets/css/globals.css', [], '1.0');
  wp_enqueue_script('clee-common', get_template_directory_uri() . '/assets/js/common.js', [], '1.0', true);

  // Front page (from index.html)
  if (is_front_page()) {
    wp_enqueue_style('clee-home', get_template_directory_uri() . '/assets/css/home.css', ['clee-globals'], '1.0');
    wp_enqueue_script('clee-home-agenda', get_template_directory_uri() . '/assets/js/agenda.js', ['clee-common'], '1.0', true);
    return;
  }

  // Page-specific (based on slug templates: page-{slug}.php)
  if (is_page('agenda')) {
    wp_enqueue_style('clee-agenda', get_template_directory_uri() . '/assets/css/agenda.css', ['clee-globals'], '1.0');
    wp_enqueue_script('clee-agenda', get_template_directory_uri() . '/assets/js/agenda.js', ['clee-common'], '1.0', true);
  }

  if (is_page('companies')) {
    wp_enqueue_style('clee-companies', get_template_directory_uri() . '/assets/css/companies.css', ['clee-globals'], '1.0');
    wp_enqueue_script('clee-companies', get_template_directory_uri() . '/assets/js/companies.js', ['clee-common'], '1.0', true);
  }

  if (is_page('establishments')) {
    wp_enqueue_style('clee-establishments', get_template_directory_uri() . '/assets/css/establishments.css', ['clee-globals'], '1.0');
    wp_enqueue_script('clee-establishments', get_template_directory_uri() . '/assets/js/establishments.js', ['clee-common'], '1.0', true);
  }

  if (is_page('vie-clee')) {
    wp_enqueue_style('clee-vie-clee', get_template_directory_uri() . '/assets/css/vie-clee.css', ['clee-globals'], '1.0');
    wp_enqueue_script('clee-agenda-data', get_template_directory_uri() . '/assets/js/agenda.js', ['clee-common'], '1.0', true);
    wp_enqueue_script('clee-vie-clee', get_template_directory_uri() . '/assets/js/vie-clee.js', ['clee-agenda-data'], '1.0', true);
  }

  if (is_page('contact')) {
    wp_enqueue_style('clee-contact', get_template_directory_uri() . '/assets/css/contact.css', ['clee-globals'], '1.0');
    wp_enqueue_script('clee-contact', get_template_directory_uri() . '/assets/js/contact.js', ['clee-common'], '1.0', true);
  }

  // Authentication pages
  if (is_page(['connexion', 'inscription'])) {
    wp_enqueue_style('clee-auth', get_template_directory_uri() . '/assets/css/auth.css', ['clee-globals'], '1.0');
    wp_enqueue_script('clee-auth', get_template_directory_uri() . '/assets/js/auth.js', ['clee-common'], '1.0', true);
  }

  // Groups reusing the same stylesheet
  $uses_le_clee_css = ['le-clee', 'bureau-membres', 'nos-actions', 'documents-officiels', 'mentions-legales'];
  if (is_page($uses_le_clee_css)) {
    wp_enqueue_style('clee-le-clee', get_template_directory_uri() . '/assets/css/le-clee.css', ['clee-globals'], '1.0');
  }

  $uses_jeunes_css = ['jeunes-familles', 'pfmp', 'orientation-insertion', 'vie-clee-eleves'];
  if (is_page($uses_jeunes_css)) {
    wp_enqueue_style('clee-jeunes', get_template_directory_uri() . '/assets/css/jeunes-familles.css', ['clee-globals'], '1.0');
  }
});

// Breadcrumb helper function
function clee_breadcrumb($items) {
  if (empty($items)) return;
  
  echo '<div class="breadcrumb-container">';
  echo '<div class="container">';
  echo '<nav class="breadcrumb" aria-label="Fil d\'ariane">';
  
  $total = count($items);
  foreach ($items as $index => $item) {
    $is_last = ($index === $total - 1);
    
    if ($is_last) {
      echo '<span>' . esc_html($item['title']) . '</span>';
    } else {
      echo '<a href="' . esc_url($item['url']) . '">' . esc_html($item['title']) . '</a>';
      echo '<span>/</span>';
    }
  }
  
  echo '</nav>';
  echo '</div>';
  echo '</div>';
}
