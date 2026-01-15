<?php
/**
 * Template for: Generic Pages
 * 
 * This template is used for all pages that don't have a specific template.
 * Content is fully editable via Gutenberg blocks in the WordPress admin.
 * 
 * @package CLEE_Bordeaux
 */

get_header(); 

// Breadcrumb
$page_title = get_the_title();
clee_breadcrumb([
    ['title' => 'Accueil', 'url' => home_url('/')],
    ['title' => $page_title, 'url' => '']
]);
?>

<main class="site-main">
    <?php
    while (have_posts()) : the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            
            <?php if (has_post_thumbnail()): ?>
                <div class="page-hero">
                    <div class="container">
                        <?php the_post_thumbnail('large', ['class' => 'page-hero-image']); ?>
                    </div>
                </div>
            <?php endif; ?>
            
            <div class="container">
                <div class="page-content">
                    <?php
                    // Display Gutenberg blocks content
                    the_content();
                    
                    // If the page has pagination (<!--nextpage-->)
                    wp_link_pages([
                        'before' => '<div class="page-links"><span class="page-links-title">' . __('Pages:', 'clee') . '</span>',
                        'after'  => '</div>',
                        'link_before' => '<span>',
                        'link_after'  => '</span>',
                    ]);
                    ?>
                </div>
            </div>
            
        </article>
        
        <?php
        // If comments are open or there is at least one comment
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        
    endwhile;
    ?>
</main>

<?php get_footer(); ?>
