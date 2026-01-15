<?php
/**
 * Template Name: Archive Événements
 * Description: Liste tous les événements avec filtres
 */

get_header();

// Get filter parameters
$keyword = isset($_GET['keyword']) ? sanitize_text_field($_GET['keyword']) : '';
$event_type = isset($_GET['event_type']) ? sanitize_term_field('slug', $_GET['event_type'], 0, 'event_type', 'raw') : '';
$month = isset($_GET['month']) ? sanitize_text_field($_GET['month']) : '';
$status = isset($_GET['status']) ? sanitize_text_field($_GET['status']) : 'upcoming';

// Build query arguments
$args = [
    'post_type'      => 'evenement',
    'posts_per_page' => 12,
    'paged'          => get_query_var('paged') ? get_query_var('paged') : 1,
    'meta_key'       => 'start_date',
    'orderby'        => 'meta_value',
    'order'          => 'ASC',
];

// Keyword search
if (!empty($keyword)) {
    $args['s'] = $keyword;
}

// Filter by event type taxonomy
if (!empty($event_type)) {
    $args['tax_query'] = [
        [
            'taxonomy' => 'event_type',
            'field'    => 'slug',
            'terms'    => $event_type,
        ],
    ];
}

// Filter by status (upcoming, past, all)
if ($status === 'upcoming') {
    $args['meta_query'] = [
        [
            'key'     => 'start_date',
            'value'   => date('Y-m-d'),
            'compare' => '>=',
            'type'    => 'DATE',
        ],
    ];
} elseif ($status === 'past') {
    $args['meta_query'] = [
        [
            'key'     => 'start_date',
            'value'   => date('Y-m-d'),
            'compare' => '<',
            'type'    => 'DATE',
        ],
    ];
    $args['order'] = 'DESC';
}

// Filter by month
if (!empty($month)) {
    $args['date_query'] = [
        [
            'year'  => substr($month, 0, 4),
            'month' => substr($month, 5, 2),
        ],
    ];
}

$events_query = new WP_Query($args);
?>

<main class="agenda-page">
    <!-- Hero Section -->
    <section class="hero hero-gradient">
        <div class="container">
            <h1 class="hero-title">Agenda</h1>
            <p class="hero-description">Découvrez tous les événements organisés par le CLEE Bordeaux Avenir</p>
        </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section">
        <div class="container">
            <form method="get" action="<?php echo esc_url(get_post_type_archive_link('evenement')); ?>" class="filters-form">
                
                <!-- Keyword search -->
                <div class="filter-group">
                    <label for="keyword">Rechercher</label>
                    <input 
                        type="text" 
                        id="keyword" 
                        name="keyword" 
                        placeholder="Mots-clés..."
                        value="<?php echo esc_attr($keyword); ?>"
                    >
                </div>

                <!-- Event type filter -->
                <div class="filter-group">
                    <label for="event_type">Type d'événement</label>
                    <select id="event_type" name="event_type">
                        <option value="">Tous les types</option>
                        <?php
                        $types = get_terms([
                            'taxonomy'   => 'event_type',
                            'hide_empty' => true,
                        ]);
                        if (!empty($types) && !is_wp_error($types)) {
                            foreach ($types as $type) {
                                printf(
                                    '<option value="%s"%s>%s</option>',
                                    esc_attr($type->slug),
                                    selected($event_type, $type->slug, false),
                                    esc_html($type->name)
                                );
                            }
                        }
                        ?>
                    </select>
                </div>

                <!-- Status filter -->
                <div class="filter-group">
                    <label for="status">Période</label>
                    <select id="status" name="status">
                        <option value="upcoming"<?php selected($status, 'upcoming'); ?>>À venir</option>
                        <option value="past"<?php selected($status, 'past'); ?>>Passés</option>
                        <option value="all"<?php selected($status, 'all'); ?>>Tous</option>
                    </select>
                </div>

                <!-- Month filter -->
                <div class="filter-group">
                    <label for="month">Mois</label>
                    <input 
                        type="month" 
                        id="month" 
                        name="month"
                        value="<?php echo esc_attr($month); ?>"
                    >
                </div>

                <button type="submit" class="btn btn-primary">Filtrer</button>
                
                <?php if (!empty($keyword) || !empty($event_type) || !empty($month) || $status !== 'upcoming'): ?>
                    <a href="<?php echo esc_url(get_post_type_archive_link('evenement')); ?>" class="btn btn-secondary">Réinitialiser</a>
                <?php endif; ?>
            </form>
        </div>
    </section>

    <!-- Events Section -->
    <section class="events-section">
        <div class="container">
            <?php if ($events_query->have_posts()): ?>
                
                <div class="events-count">
                    <p><?php echo $events_query->found_posts; ?> événement<?php echo $events_query->found_posts > 1 ? 's' : ''; ?> trouvé<?php echo $events_query->found_posts > 1 ? 's' : ''; ?></p>
                </div>

                <div class="events-grid">
                    <?php while ($events_query->have_posts()): $events_query->the_post(); 
                        $start_date = get_field('start_date');
                        $end_date = get_field('end_date');
                        $location = get_field('location');
                        $start_time = get_field('start_time');
                        $registration_url = get_field('registration_url');
                        $is_featured = get_field('is_featured');
                        
                        $event_status = clee_get_event_status($start_date, $end_date);
                        ?>
                        
                        <article class="event-card <?php echo $is_featured ? 'featured' : ''; ?> <?php echo esc_attr($event_status); ?>">
                            <?php if (has_post_thumbnail()): ?>
                                <div class="event-image">
                                    <?php the_post_thumbnail('medium'); ?>
                                    <?php if ($is_featured): ?>
                                        <span class="featured-badge">À la une</span>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                            
                            <div class="event-content">
                                <div class="event-meta">
                                    <?php
                                    $terms = get_the_terms(get_the_ID(), 'event_type');
                                    if ($terms && !is_wp_error($terms)):
                                        foreach ($terms as $term): ?>
                                            <span class="event-type"><?php echo esc_html($term->name); ?></span>
                                        <?php endforeach;
                                    endif;
                                    ?>
                                    
                                    <?php if ($start_date): ?>
                                        <time class="event-date" datetime="<?php echo esc_attr($start_date); ?>">
                                            <?php echo clee_format_date($start_date, 'j F Y'); ?>
                                        </time>
                                    <?php endif; ?>
                                </div>
                                
                                <h3 class="event-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                
                                <?php if (has_excerpt()): ?>
                                    <p class="event-excerpt"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                                <?php endif; ?>
                                
                                <?php if ($location): ?>
                                    <p class="event-location">
                                        <i class="fas fa-map-marker-alt"></i> <?php echo esc_html($location); ?>
                                    </p>
                                <?php endif; ?>
                                
                                <div class="event-actions">
                                    <a href="<?php the_permalink(); ?>" class="btn btn-secondary">En savoir plus</a>
                                    
                                    <?php if ($registration_url && $event_status === 'upcoming'): ?>
                                        <a href="<?php echo esc_url($registration_url); ?>" class="btn btn-primary" target="_blank" rel="noopener noreferrer">S'inscrire</a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </article>
                        
                    <?php endwhile; ?>
                </div>

                <!-- Pagination -->
                <?php if ($events_query->max_num_pages > 1): ?>
                    <nav class="pagination">
                        <?php
                        echo paginate_links([
                            'total'     => $events_query->max_num_pages,
                            'current'   => max(1, get_query_var('paged')),
                            'prev_text' => '← Précédent',
                            'next_text' => 'Suivant →',
                        ]);
                        ?>
                    </nav>
                <?php endif; ?>

            <?php else: ?>
                
                <div class="no-results">
                    <p>Aucun événement trouvé pour les critères sélectionnés.</p>
                    <a href="<?php echo esc_url(get_post_type_archive_link('evenement')); ?>" class="btn btn-primary">Voir tous les événements</a>
                </div>
                
            <?php endif; ?>
            
            <?php wp_reset_postdata(); ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>
