<?php
/**
 * Template for: Établissements & Formations
 * 
 * This page redirects to the establishments archive (CPT: etablissement)
 * URL: /etablissements/ (handled by archive-etablissement.php)
 * 
 * If you need a static page, edit archive-etablissement.php or create
 * a custom template.
 */

// Redirect to establishments archive
wp_redirect(get_post_type_archive_link('etablissement'), 301);
exit;