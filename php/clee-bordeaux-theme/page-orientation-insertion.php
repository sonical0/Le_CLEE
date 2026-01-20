<?php
/**
 * Template for: Orientation & Insertion
 * Fully editable via Gutenberg in WordPress admin
 */
get_header();

clee_breadcrumb([
    ['title' => 'Accueil', 'url' => home_url('/')],
    ['title' => 'Jeunes & Familles', 'url' => clee_get_page_link('jeunes-familles')],
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