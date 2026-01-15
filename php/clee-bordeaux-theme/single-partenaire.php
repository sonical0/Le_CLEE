<?php
/**
 * Single Partenaire Template
 */

get_header();

while (have_posts()): the_post();
    
    $logo = get_field('logo');
    $website = get_field('website');
    $address = get_field('address');
    $latitude = get_field('latitude');
    $longitude = get_field('longitude');
    $phone = get_field('phone');
    $email = get_field('email');
    ?>

    <main class="single-partner">
        
        <!-- Breadcrumb -->
        <?php
        clee_breadcrumb([
            ['title' => 'Accueil', 'url' => home_url('/')],
            ['title' => 'Partenaires', 'url' => get_post_type_archive_link('partenaire')],
            ['title' => get_the_title(), 'url' => ''],
        ]);
        ?>

        <article class="partner-detail">
            <div class="container">
                
                <header class="partner-header">
                    <?php if ($logo): ?>
                        <div class="partner-logo-large">
                            <img src="<?php echo esc_url($logo['url']); ?>" alt="<?php echo esc_attr($logo['alt'] ?: get_the_title()); ?>">
                        </div>
                    <?php elseif (has_post_thumbnail()): ?>
                        <div class="partner-logo-large">
                            <?php the_post_thumbnail('medium'); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="partner-header-info">
                        <h1 class="partner-title"><?php the_title(); ?></h1>
                        
                        <?php
                        $terms = get_the_terms(get_the_ID(), 'partner_category');
                        if ($terms && !is_wp_error($terms)): ?>
                            <div class="partner-categories">
                                <?php foreach ($terms as $term): ?>
                                    <span class="partner-category"><?php echo esc_html($term->name); ?></span>
                                <?php endforeach; ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php if ($website): ?>
                            <a href="<?php echo esc_url($website); ?>" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i> Visiter le site web
                            </a>
                        <?php endif; ?>
                    </div>
                </header>

                <div class="partner-body">
                    
                    <?php if (has_post_thumbnail() && !$logo): ?>
                        <div class="partner-featured-image">
                            <?php the_post_thumbnail('large'); ?>
                        </div>
                    <?php endif; ?>

                    <div class="partner-info-sidebar">
                        <div class="info-card">
                            <h3>Contact</h3>
                            
                            <?php if ($address): ?>
                                <div class="info-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div>
                                        <strong>Adresse</strong>
                                        <?php echo clee_get_formatted_address(get_the_ID()); ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <?php if ($phone): ?>
                                <div class="info-item">
                                    <i class="fas fa-phone"></i>
                                    <div>
                                        <strong>Téléphone</strong>
                                        <p><a href="tel:<?php echo esc_attr(str_replace(' ', '', $phone)); ?>"><?php echo esc_html($phone); ?></a></p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <?php if ($email): ?>
                                <div class="info-item">
                                    <i class="fas fa-envelope"></i>
                                    <div>
                                        <strong>Email</strong>
                                        <p><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a></p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <?php if ($website): ?>
                                <div class="info-item">
                                    <i class="fas fa-globe"></i>
                                    <div>
                                        <strong>Site web</strong>
                                        <p><a href="<?php echo esc_url($website); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html(parse_url($website, PHP_URL_HOST)); ?></a></p>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                        
                        <?php if ($latitude && $longitude): ?>
                            <div class="info-card">
                                <h3>Localisation</h3>
                                <div class="partner-map" data-lat="<?php echo esc_attr($latitude); ?>" data-lng="<?php echo esc_attr($longitude); ?>">
                                    <!-- Map will be rendered here by JS -->
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>

                    <div class="partner-content">
                        <?php if (has_excerpt()): ?>
                            <div class="partner-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php the_content(); ?>
                    </div>

                </div>

                <!-- Related Partners -->
                <?php
                $terms = get_the_terms(get_the_ID(), 'partner_category');
                if ($terms && !is_wp_error($terms)):
                    $term_ids = wp_list_pluck($terms, 'term_id');
                    
                    $related_partners = new WP_Query([
                        'post_type'      => 'partenaire',
                        'posts_per_page' => 3,
                        'post__not_in'   => [get_the_ID()],
                        'tax_query'      => [
                            [
                                'taxonomy' => 'partner_category',
                                'field'    => 'term_id',
                                'terms'    => $term_ids,
                            ],
                        ],
                        'orderby' => 'rand',
                    ]);
                    
                    if ($related_partners->have_posts()):
                ?>
                    <aside class="related-partners">
                        <h2>Partenaires similaires</h2>
                        <div class="partners-grid">
                            <?php while ($related_partners->have_posts()): $related_partners->the_post(); 
                                $partner_logo = get_field('logo');
                            ?>
                                <article class="partner-card-small">
                                    <?php if ($partner_logo): ?>
                                        <div class="partner-logo">
                                            <img src="<?php echo esc_url($partner_logo['url']); ?>" alt="<?php echo esc_attr($partner_logo['alt'] ?: get_the_title()); ?>">
                                        </div>
                                    <?php endif; ?>
                                    <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                </article>
                            <?php endwhile; wp_reset_postdata(); ?>
                        </div>
                    </aside>
                <?php 
                    endif;
                endif;
                ?>

            </div>
        </article>

    </main>

<?php endwhile; ?>

<?php get_footer(); ?>
