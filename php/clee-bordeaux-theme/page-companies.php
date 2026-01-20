<?php
/**
 * Template for: Entreprises & Partenaires
 * 
 * This page redirects to the partners archive (CPT: partenaire)
 * URL: /partenaires/ (handled by archive-partenaire.php)
 * 
 * If you need a static page, edit archive-partenaire.php or create
 * a custom template.
 */

// Redirect to partners archive
wp_redirect(get_post_type_archive_link('partenaire'), 301);
exit;