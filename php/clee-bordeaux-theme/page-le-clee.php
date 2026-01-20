<?php
/**
 * Template for: Le CLEE
 * Fully editable via Gutenberg
 */
get_header();

clee_breadcrumb([
    ['title' => 'Accueil', 'url' => home_url('/')],
    ['title' => get_the_title(), 'url' => '']
]);

while (have_posts()) : the_post();
    ?>
    <main class="page-content">
        <div class="container">
            <?php the_content(); ?>
        </div>
    </main>
    <?php
endwhile;

get_footer();