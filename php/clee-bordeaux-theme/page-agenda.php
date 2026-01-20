<?php
/**
 * Template for: Agenda
 * 
 * This page redirects to the events archive (CPT: evenement)
 * URL: /agenda/ (handled by archive-evenement.php)
 * 
 * If you need a static page, edit archive-evenement.php or create
 * a custom template.
 */

// Redirect to events archive
wp_redirect(get_post_type_archive_link('evenement'), 301);
exit;