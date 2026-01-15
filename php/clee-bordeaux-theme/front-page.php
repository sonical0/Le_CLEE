<?php
/**
 * Template Name: Page d'accueil
 * Description: Page d'accueil entièrement éditable via Gutenberg
 * 
 * @package CLEE_Bordeaux
 */

get_header(); 

while (have_posts()) : the_post();
    ?>
    
    <main id="main-content" class="site-main">
        
        <?php
        // Display Gutenberg blocks - 100% editable from WordPress admin
        the_content();
        ?>
        
    </main>
    
    <?php
endwhile;

get_footer();
