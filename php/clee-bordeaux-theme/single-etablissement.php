<?php
/**
 * Single Établissement Template
 */

get_header();

while (have_posts()): the_post();
    
    $address = get_field('address');
    $phone = get_field('contact_phone');
    $email = get_field('contact_email');
    $website = get_field('website');
    $latitude = get_field('latitude');
    $longitude = get_field('longitude');
    $formations = get_field('formations');
    ?>

    <main class="single-establishment">
        
        <!-- Breadcrumb -->
        <?php
        clee_breadcrumb([
            ['title' => 'Accueil', 'url' => home_url('/')],
            ['title' => 'Établissements', 'url' => get_post_type_archive_link('etablissement')],
            ['title' => get_the_title(), 'url' => ''],
        ]);
        ?>

        <article class="establishment-detail">
            <div class="container">
                
                <header class="establishment-header">
                    <?php if (has_post_thumbnail()): ?>
                        <div class="establishment-logo-large">
                            <?php the_post_thumbnail('medium'); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="establishment-header-info">
                        <h1 class="establishment-title"><?php the_title(); ?></h1>
                        
                        <?php
                        $terms = get_the_terms(get_the_ID(), 'formation_category');
                        if ($terms && !is_wp_error($terms)): ?>
                            <div class="formation-categories">
                                <?php foreach ($terms as $term): ?>
                                    <span class="formation-category"><?php echo esc_html($term->name); ?></span>
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

                <div class="establishment-body">

                    <div class="establishment-info-sidebar">
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
                                <div class="establishment-map" data-lat="<?php echo esc_attr($latitude); ?>" data-lng="<?php echo esc_attr($longitude); ?>">
                                    <!-- Map will be rendered here by JS -->
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>

                    <div class="establishment-content">
                        <?php if (has_excerpt()): ?>
                            <div class="establishment-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php the_content(); ?>
                        
                        <!-- Formations Section -->
                        <?php if ($formations && is_array($formations)): ?>
                            <section class="formations-section">
                                <h2>Formations proposées</h2>
                                <div class="formations-list-detailed">
                                    <?php foreach ($formations as $formation): ?>
                                        <div class="formation-item">
                                            <h3><?php echo esc_html($formation['name']); ?></h3>
                                            
                                            <?php if (!empty($formation['level'])): ?>
                                                <span class="formation-level">
                                                    <?php 
                                                    $levels = [
                                                        'cap' => 'CAP',
                                                        'bac_pro' => 'Bac Pro',
                                                        'bts' => 'BTS',
                                                        'licence' => 'Licence',
                                                        'master' => 'Master',
                                                    ];
                                                    echo esc_html($levels[$formation['level']] ?? $formation['level']);
                                                    ?>
                                                </span>
                                            <?php endif; ?>
                                            
                                            <?php if (!empty($formation['description'])): ?>
                                                <p><?php echo esc_html($formation['description']); ?></p>
                                            <?php endif; ?>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </section>
                        <?php endif; ?>
                    </div>

                </div>

                <!-- Related Establishments -->
                <?php
                $terms = get_the_terms(get_the_ID(), 'formation_category');
                if ($terms && !is_wp_error($terms)):
                    $term_ids = wp_list_pluck($terms, 'term_id');
                    
                    $related_establishments = new WP_Query([
                        'post_type'      => 'etablissement',
                        'posts_per_page' => 3,
                        'post__not_in'   => [get_the_ID()],
                        'tax_query'      => [
                            [
                                'taxonomy' => 'formation_category',
                                'field'    => 'term_id',
                                'terms'    => $term_ids,
                            ],
                        ],
                        'orderby' => 'rand',
                    ]);
                    
                    if ($related_establishments->have_posts()):
                ?>
                    <aside class="related-establishments">
                        <h2>Établissements similaires</h2>
                        <div class="establishments-grid">
                            <?php while ($related_establishments->have_posts()): $related_establishments->the_post(); ?>
                                <article class="establishment-card-small">
                                    <?php if (has_post_thumbnail()): ?>
                                        <div class="establishment-thumbnail">
                                            <?php the_post_thumbnail('thumbnail'); ?>
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
