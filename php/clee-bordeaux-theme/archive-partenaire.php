<?php
/**
 * Template Name: Archive Partenaires
 * Description: Liste tous les partenaires avec filtres
 */

get_header();

// Get filter parameters
$keyword = isset($_GET['keyword']) ? sanitize_text_field($_GET['keyword']) : '';
$category = isset($_GET['category']) ? sanitize_term_field('slug', $_GET['category'], 0, 'partner_category', 'raw') : '';

// Build query arguments
$args = [
    'post_type'      => 'partenaire',
    'posts_per_page' => -1, // Show all for map integration
    'orderby'        => 'title',
    'order'          => 'ASC',
];

// Keyword search
if (!empty($keyword)) {
    $args['s'] = $keyword;
}

// Filter by category
if (!empty($category)) {
    $args['tax_query'] = [
        [
            'taxonomy' => 'partner_category',
            'field'    => 'slug',
            'terms'    => $category,
        ],
    ];
}

$partners_query = new WP_Query($args);
?>

<main class="companies-page">
    <!-- Hero Section -->
    <section class="hero hero-gradient">
        <div class="container">
            <h1 class="hero-title">Entreprises & Partenaires</h1>
            <p class="hero-description">Découvrez nos partenaires engagés pour l'avenir des jeunes</p>
        </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section">
        <div class="container">
            <form method="get" action="<?php echo esc_url(get_post_type_archive_link('partenaire')); ?>" class="filters-form">
                
                <div class="filter-group">
                    <label for="keyword">Rechercher</label>
                    <input 
                        type="text" 
                        id="keyword" 
                        name="keyword" 
                        placeholder="Nom de l'entreprise..."
                        value="<?php echo esc_attr($keyword); ?>"
                    >
                </div>

                <div class="filter-group">
                    <label for="category">Catégorie</label>
                    <select id="category" name="category">
                        <option value="">Toutes les catégories</option>
                        <?php
                        $categories = get_terms([
                            'taxonomy'   => 'partner_category',
                            'hide_empty' => true,
                        ]);
                        if (!empty($categories) && !is_wp_error($categories)) {
                            foreach ($categories as $cat) {
                                printf(
                                    '<option value="%s"%s>%s</option>',
                                    esc_attr($cat->slug),
                                    selected($category, $cat->slug, false),
                                    esc_html($cat->name)
                                );
                            }
                        }
                        ?>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Filtrer</button>
                
                <?php if (!empty($keyword) || !empty($category)): ?>
                    <a href="<?php echo esc_url(get_post_type_archive_link('partenaire')); ?>" class="btn btn-secondary">Réinitialiser</a>
                <?php endif; ?>
            </form>
        </div>
    </section>

    <!-- Partners Section -->
    <section class="partners-section">
        <div class="container">
            <?php if ($partners_query->have_posts()): ?>
                
                <div class="partners-count">
                    <p><?php echo $partners_query->found_posts; ?> partenaire<?php echo $partners_query->found_posts > 1 ? 's' : ''; ?></p>
                </div>

                <div class="partners-grid">
                    <?php while ($partners_query->have_posts()): $partners_query->the_post(); 
                        $logo = get_field('logo');
                        $website = get_field('website');
                        $address = get_field('address');
                        $phone = get_field('phone');
                        ?>
                        
                        <article class="partner-card">
                            <?php if ($logo): ?>
                                <div class="partner-logo">
                                    <img src="<?php echo esc_url($logo['url']); ?>" alt="<?php echo esc_attr($logo['alt'] ?: get_the_title()); ?>">
                                </div>
                            <?php elseif (has_post_thumbnail()): ?>
                                <div class="partner-logo">
                                    <?php the_post_thumbnail('medium'); ?>
                                </div>
                            <?php endif; ?>
                            
                            <div class="partner-content">
                                <h3 class="partner-name">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                
                                <?php
                                $terms = get_the_terms(get_the_ID(), 'partner_category');
                                if ($terms && !is_wp_error($terms)): ?>
                                    <div class="partner-categories">
                                        <?php foreach ($terms as $term): ?>
                                            <span class="partner-category"><?php echo esc_html($term->name); ?></span>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                                
                                <?php if (has_excerpt()): ?>
                                    <p class="partner-description"><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                                <?php endif; ?>
                                
                                <?php if ($address): ?>
                                    <p class="partner-address">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <?php echo esc_html(wp_trim_words($address, 8)); ?>
                                    </p>
                                <?php endif; ?>
                                
                                <div class="partner-actions">
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
                    <p>Aucun partenaire trouvé pour les critères sélectionnés.</p>
                    <a href="<?php echo esc_url(get_post_type_archive_link('partenaire')); ?>" class="btn btn-primary">Voir tous les partenaires</a>
                </div>
                
            <?php endif; ?>
            
            <?php wp_reset_postdata(); ?>
        </div>
    </section>

    <!-- Map Section (if partners have coordinates) -->
    <?php
    // Check if any partners have coordinates
    $has_map_data = false;
    foreach ($partners_query->posts as $partner) {
        if (get_field('latitude', $partner->ID) && get_field('longitude', $partner->ID)) {
            $has_map_data = true;
            break;
        }
    }
    
    if ($has_map_data):
    ?>
        <section class="map-section">
            <div class="container">
                <h2>Carte des partenaires</h2>
                <div id="partners-map" class="interactive-map" data-post-type="partenaire"></div>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
