<?php
/**
 * Single Événement Template
 */

get_header();

while (have_posts()): the_post();
    
    $start_date = get_field('start_date');
    $end_date = get_field('end_date');
    $start_time = get_field('start_time');
    $end_time = get_field('end_time');
    $location = get_field('location');
    $registration_url = get_field('registration_url');
    $is_featured = get_field('is_featured');
    
    $event_status = clee_get_event_status($start_date, $end_date);
    ?>

    <main class="single-event">
        
        <!-- Breadcrumb -->
        <?php
        clee_breadcrumb([
            ['title' => 'Accueil', 'url' => home_url('/')],
            ['title' => 'Agenda', 'url' => get_post_type_archive_link('evenement')],
            ['title' => get_the_title(), 'url' => ''],
        ]);
        ?>

        <article class="event-detail">
            <div class="container">
                
                <header class="event-header">
                    <?php if ($is_featured): ?>
                        <span class="featured-badge">À la une</span>
                    <?php endif; ?>
                    
                    <h1 class="event-title"><?php the_title(); ?></h1>
                    
                    <div class="event-meta">
                        <?php
                        $terms = get_the_terms(get_the_ID(), 'event_type');
                        if ($terms && !is_wp_error($terms)):
                            foreach ($terms as $term): ?>
                                <span class="event-type"><?php echo esc_html($term->name); ?></span>
                            <?php endforeach;
                        endif;
                        ?>
                        
                        <span class="event-status status-<?php echo esc_attr($event_status); ?>">
                            <?php 
                            if ($event_status === 'past') echo 'Événement passé';
                            elseif ($event_status === 'ongoing') echo 'En cours';
                            else echo 'À venir';
                            ?>
                        </span>
                    </div>
                </header>

                <div class="event-body">
                    
                    <?php if (has_post_thumbnail()): ?>
                        <div class="event-featured-image">
                            <?php the_post_thumbnail('large'); ?>
                        </div>
                    <?php endif; ?>

                    <div class="event-info-sidebar">
                        <div class="info-card">
                            <h3>Informations pratiques</h3>
                            
                            <?php if ($start_date): ?>
                                <div class="info-item">
                                    <i class="fas fa-calendar"></i>
                                    <div>
                                        <strong>Date</strong>
                                        <p>
                                            <?php echo clee_format_date($start_date, 'j F Y'); ?>
                                            <?php if ($end_date && $end_date !== $start_date): ?>
                                                <br>au <?php echo clee_format_date($end_date, 'j F Y'); ?>
                                            <?php endif; ?>
                                        </p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <?php if ($start_time): ?>
                                <div class="info-item">
                                    <i class="fas fa-clock"></i>
                                    <div>
                                        <strong>Horaires</strong>
                                        <p>
                                            <?php echo esc_html($start_time); ?>
                                            <?php if ($end_time): ?>
                                                - <?php echo esc_html($end_time); ?>
                                            <?php endif; ?>
                                        </p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <?php if ($location): ?>
                                <div class="info-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div>
                                        <strong>Lieu</strong>
                                        <p><?php echo esc_html($location); ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <?php if ($registration_url && $event_status === 'upcoming'): ?>
                                <a href="<?php echo esc_url($registration_url); ?>" class="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">
                                    <i class="fas fa-ticket-alt"></i> S'inscrire à l'événement
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="event-content">
                        <?php the_content(); ?>
                    </div>

                </div>

                <!-- Related Events -->
                <?php
                $terms = get_the_terms(get_the_ID(), 'event_type');
                if ($terms && !is_wp_error($terms)):
                    $term_ids = wp_list_pluck($terms, 'term_id');
                    
                    $related_events = new WP_Query([
                        'post_type'      => 'evenement',
                        'posts_per_page' => 3,
                        'post__not_in'   => [get_the_ID()],
                        'tax_query'      => [
                            [
                                'taxonomy' => 'event_type',
                                'field'    => 'term_id',
                                'terms'    => $term_ids,
                            ],
                        ],
                        'meta_query' => [
                            [
                                'key'     => 'start_date',
                                'value'   => date('Y-m-d'),
                                'compare' => '>=',
                                'type'    => 'DATE',
                            ],
                        ],
                        'meta_key'   => 'start_date',
                        'orderby'    => 'meta_value',
                        'order'      => 'ASC',
                    ]);
                    
                    if ($related_events->have_posts()):
                ?>
                    <aside class="related-events">
                        <h2>Événements similaires</h2>
                        <div class="events-grid">
                            <?php while ($related_events->have_posts()): $related_events->the_post(); ?>
                                <article class="event-card-small">
                                    <?php if (has_post_thumbnail()): ?>
                                        <div class="event-thumbnail">
                                            <?php the_post_thumbnail('thumbnail'); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="event-info">
                                        <time><?php echo clee_format_date(get_field('start_date'), 'j M Y'); ?></time>
                                        <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                    </div>
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
