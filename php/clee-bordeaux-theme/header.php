<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header">
  <nav aria-label="Navigation principale" class="navigation" role="navigation">
    <div class="container">
      <a aria-label="Retour à l'accueil" class="logo" href="<?php echo esc_url(home_url('/')); ?>">
        <?php 
        if (has_custom_logo()) {
          the_custom_logo();
        } else {
          echo '<img src="' . get_template_directory_uri() . '/assets/images/logo-clee.png" alt="CLEE Bordeaux Avenir">';
        }
        ?>
      </a>
      
      <button aria-expanded="false" aria-label="Ouvrir le menu" class="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <?php
      if (has_nav_menu('primary')) {
        wp_nav_menu([
          'theme_location' => 'primary',
          'container'      => false,
          'menu_class'     => 'nav-links',
          'link_before'    => '<span class="nav-link">',
          'link_after'     => '</span>',
          'fallback_cb'    => false,
        ]);
      } else {
        // Fallback static menu if no menu is assigned
        ?>
        <ul class="nav-links">
          <li><a class="nav-link" href="<?php echo esc_url(get_page_link(get_page_by_path('le-clee'))); ?>">Le CLEE</a></li>
          <li><a class="nav-link" href="<?php echo esc_url(get_post_type_archive_link('partenaire')); ?>">Entreprises &amp; Partenaires</a></li>
          <li><a class="nav-link" href="<?php echo esc_url(get_post_type_archive_link('etablissement')); ?>">Établissements &amp; Formations</a></li>
          <li><a class="nav-link" href="<?php echo esc_url(get_page_link(get_page_by_path('jeunes-familles'))); ?>">Jeunes &amp; Familles</a></li>
          <li><a class="nav-link" href="<?php echo esc_url(get_page_link(get_page_by_path('vie-clee'))); ?>">Vie du CLEE</a></li>
        </ul>
        <?php
      }
      ?>
    </div>
  </nav>
</header>
