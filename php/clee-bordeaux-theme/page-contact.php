<?php
/**
 * Template for: Contact
 * Fully editable via Gutenberg in WordPress admin
 */
get_header();

clee_breadcrumb([
    ['title' => 'Accueil', 'url' => home_url('/')],
    ['title' => get_the_title(), 'url' => '']
]);

while (have_posts()) : the_post();
    ?>
    <main class="page-content">
        <?php the_content(); ?>
    </main>
    <?php
endwhile;

get_footer();