<?php
/**
 * Template Name: Archive Établissements
 * Description: Liste tous les établissements avec filtres
 */

get_header();

// Get filter parameters
$keyword = isset($_GET['keyword']) ? sanitize_text_field($_GET['keyword']) : '';
$formation_category = isset($_GET['formation']) ? sanitize_term_field('slug', $_GET['formation'], 0, 'formation_category', 'raw') : '';

// Build query arguments
$args = [
    'post_type'      => 'etablissement',
    'posts_per_page' => -1, // Show all for map integration
    'orderby'        => 'title',
    'order'          => 'ASC',
];

// Keyword search
if (!empty($keyword)) {
    $args['s'] = $keyword;
}

// Filter by formation category
if (!empty($formation_category)) {
    $args['tax_query'] = [
        [
            'taxonomy' => 'formation_category',
            'field'    => 'slug',
            'terms'    => $formation_category,
        ],
    ];
}

$establishments_query = new WP_Query($args);
?>

<main class="establishments-page">
    <!-- Hero Section -->
    <section class="hero hero-gradient">
        <div class="container">
            <h1 class="hero-title">Établissements & Formations</h1>
            <p class="hero-description">Découvrez les établissements membres du CLEE et leurs formations</p>
        </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section">
        <div class="container">
            <form method="get" action="<?php echo esc_url(get_post_type_archive_link('etablissement')); ?>" class="filters-form">
                
                <div class="filter-group">
                    <label for="keyword">Rechercher</label>
                    <input 
                        type="text" 
                        id="keyword" 
                        name="keyword" 
                        placeholder="Nom de l'établissement..."
                        value="<?php echo esc_attr($keyword); ?>"
                    >
                </div>

                <div class="filter-group">
                    <label for="formation">Catégorie de formation</label>
                    <select id="formation" name="formation">
                        <option value="">Toutes les formations</option>
                        <?php
                        $formations = get_terms([
                            'taxonomy'   => 'formation_category',
                            'hide_empty' => true,
                        ]);
                        if (!empty($formations) && !is_wp_error($formations)) {
                            foreach ($formations as $formation) {
                                printf(
                                    '<option value="%s"%s>%s</option>',
                                    esc_attr($formation->slug),
                                    selected($formation_category, $formation->slug, false),
                                    esc_html($formation->name)
                                );
                            }
                        }
                        ?>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Filtrer</button>
                
                <?php if (!empty($keyword) || !empty($formation_category)): ?>
                    <a href="<?php echo esc_url(get_post_type_archive_link('etablissement')); ?>" class="btn btn-secondary">Réinitialiser</a>
                <?php endif; ?>
            </form>
        </div>
    </section>

    <!-- Establishments Section -->
    <section class="establishments-section">
        <div class="container">
            <?php if ($establishments_query->have_posts()): ?>
                
                <div class="establishments-count">
                    <p><?php echo $establishments_query->found_posts; ?> établissement<?php echo $establishments_query->found_posts > 1 ? 's' : ''; ?></p>
                </div>

                <div class="establishments-grid">
                    <?php while ($establishments_query->have_posts()): $establishments_query->the_post(); 
                        $address = get_field('address');
                        $phone = get_field('contact_phone');
                        $email = get_field('contact_email');
                        $website = get_field('website');
                        $formations = get_field('formations');
                        ?>
                        
                        <article class="establishment-card">
                            <?php if (has_post_thumbnail()): ?>
                                <div class="establishment-image">
                                    <?php the_post_thumbnail('medium'); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div class="establishment-content">
                                <h3 class="establishment-name">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                
                                <?php
                                $terms = get_the_terms(get_the_ID(), 'formation_category');
                                if ($terms && !is_wp_error($terms)): ?>
                                    <div class="establishment-categories">
                                        <?php foreach ($terms as $term): ?>
                                            <span class="formation-category"><?php echo esc_html($term->name); ?></span>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                                
                                <?php if (has_excerpt()): ?>
                                    <p class="establishment-description"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                                <?php endif; ?>
                                
                                <?php if ($formations && is_array($formations)): ?>
                                    <div class="formations-list">
                                        <h4>Formations proposées :</h4>
                                        <ul>
                                            <?php foreach (array_slice($formations, 0, 3) as $formation): ?>
                                                <li><?php echo esc_html($formation['name']); ?></li>
                                            <?php endforeach; ?>
                                            <?php if (count($formations) > 3): ?>
                                                <li><em>+ <?php echo count($formations) - 3; ?> autres formations</em></li>
                                            <?php endif; ?>
                                        </ul>
                                    </div>
                                <?php endif; ?>
                                
                                <?php if ($address): ?>
                                    <p class="establishment-address">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <?php echo esc_html(wp_trim_words($address, 8)); ?>
                                    </p>
                                <?php endif; ?>
                                
                                <div class="establishment-actions">
                                    <a href="<?php the_permalink(); ?>" class="btn btn-secondary">En savoir plus</a>
                                    
                                    <?php if ($website): ?>
                                        <a href="<?php echo esc_url($website); ?>" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                                            <i class="fas fa-external-link-alt"></i> Site web
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </article>
                        
                    <?php endwhile; ?>
                </div>

            <?php else: ?>
                
                <div class="no-results">
                    <p>Aucun établissement trouvé pour les critères sélectionnés.</p>
                    <a href="<?php echo esc_url(get_post_type_archive_link('etablissement')); ?>" class="btn btn-primary">Voir tous les établissements</a>
                </div>
                
            <?php endif; ?>
            
            <?php wp_reset_postdata(); ?>
        </div>
    </section>

    <!-- Map Section (if establishments have coordinates) -->
    <?php
    // Check if any establishments have coordinates
    $has_map_data = false;
    if ($establishments_query->have_posts()) {
        foreach ($establishments_query->posts as $establishment) {
            $lat = get_field('latitude', $establishment->ID);
            $lng = get_field('longitude', $establishment->ID);
            if (!empty($lat) && !empty($lng)) {
                $has_map_data = true;
                break;
            }
        }
    }
    
    if ($has_map_data):
    ?>
        <section class="map-section">
            <div class="container">
                <h2>Carte des établissements</h2>
                <div id="establishments-map" class="interactive-map" data-post-type="etablissement"></div>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
