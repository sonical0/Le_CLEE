<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="header">
<nav aria-label="Navigation principale" class="navigation" role="navigation">
<div class="container">
<a aria-label="Retour à l'accueil" class="logo" href="<?php echo esc_url(home_url('/')); ?>">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-clee.png" alt="CLEE Bordeaux Avenir">
                </a>
<button aria-expanded="false" aria-label="Ouvrir le menu" class="menu-toggle">
<span></span>
<span></span>
<span></span>
</button>
<ul class="nav-links">
<li><a class="nav-link" href="<?php echo esc_url(home_url('/le-clee/')); ?>">Le CLEE</a></li>
<li><a class="nav-link" href="<?php echo esc_url(home_url('/companies/')); ?>">Entreprises &amp; Partenaires</a></li>
<li><a class="nav-link" href="<?php echo esc_url(home_url('/establishments/')); ?>">Établissements &amp; Formations</a></li>
<li><a class="nav-link" href="<?php echo esc_url(home_url('/jeunes-familles/')); ?>">Jeunes &amp; Familles</a></li>
<li><a class="nav-link" href="<?php echo esc_url(home_url('/vie-clee/')); ?>">Vie du CLEE</a></li>
<li><a class="nav-link nav-link-auth" href="<?php echo esc_url(home_url('/connexion/')); ?>">Connexion</a></li>
</ul>
</div>
</nav>
</header>
