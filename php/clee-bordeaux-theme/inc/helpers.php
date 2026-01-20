<?php
/**
 * Helper functions
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Breadcrumb helper function
 */
function clee_breadcrumb($items) {
    if (empty($items)) {
        return;
    }
    
    echo '<div class="breadcrumb-container">';
    echo '<div class="container">';
    echo '<nav class="breadcrumb" aria-label="Fil d\'ariane">';
    
    $total = count($items);
    foreach ($items as $index => $item) {
        $is_last = ($index === $total - 1);
        
        if ($is_last) {
            echo '<span>' . esc_html($item['title']) . '</span>';
        } else {
            echo '<a href="' . esc_url($item['url']) . '">' . esc_html($item['title']) . '</a>';
            echo '<span>/</span>';
        }
    }
    
    echo '</nav>';
    echo '</div>';
    echo '</div>';
}

/**
 * Get page permalink by slug (safe version)
 * Returns home URL if page doesn't exist
 */
function clee_get_page_link($slug) {
    $page = get_page_by_path($slug);
    if ($page) {
        return get_permalink($page);
    }
    return home_url('/');
}

/**
 * Format date in French
 */
function clee_format_date($date, $format = 'j F Y') {
    if (empty($date)) {
        return '';
    }
    
    $timestamp = strtotime($date);
    $formatted = date_i18n($format, $timestamp);
    
    return $formatted;
}

/**
 * Get ACF option with fallback
 */
function clee_get_option($key, $default = '') {
    if (function_exists('get_field')) {
        $value = get_field($key, 'option');
        return !empty($value) ? $value : $default;
    }
    return $default;
}

/**
 * Truncate text
 */
function clee_truncate($text, $length = 100, $suffix = '...') {
    if (mb_strlen($text) <= $length) {
        return $text;
    }
    
    $truncated = mb_substr($text, 0, $length);
    $truncated = mb_substr($truncated, 0, mb_strrpos($truncated, ' '));
    
    return $truncated . $suffix;
}

/**
 * Get post type archive link
 */
function clee_get_archive_link($post_type) {
    $archive_link = get_post_type_archive_link($post_type);
    
    if (!$archive_link) {
        // Fallback to page with same slug
        $page = get_page_by_path($post_type);
        if ($page) {
            $archive_link = get_permalink($page);
        }
    }
    
    return $archive_link;
}

/**
 * Output social media links
 */
function clee_social_links() {
    $socials = [
        'facebook'  => ['url' => clee_get_option('social_facebook'), 'icon' => 'facebook-f'],
        'twitter'   => ['url' => clee_get_option('social_twitter'), 'icon' => 'twitter'],
        'linkedin'  => ['url' => clee_get_option('social_linkedin'), 'icon' => 'linkedin-in'],
        'instagram' => ['url' => clee_get_option('social_instagram'), 'icon' => 'instagram'],
    ];
    
    $output = '<div class="social-links">';
    
    foreach ($socials as $name => $data) {
        if (!empty($data['url'])) {
            $output .= sprintf(
                '<a href="%s" target="_blank" rel="noopener noreferrer" aria-label="%s"><i class="fab fa-%s"></i></a>',
                esc_url($data['url']),
                esc_attr(ucfirst($name)),
                esc_attr($data['icon'])
            );
        }
    }
    
    $output .= '</div>';
    
    return $output;
}

/**
 * Get formatted address
 */
function clee_get_formatted_address($post_id = null) {
    if (!function_exists('get_field')) {
        return '';
    }
    
    $address = get_field('address', $post_id);
    
    if (empty($address)) {
        return '';
    }
    
    return nl2br(esc_html($address));
}

/**
 * Check if date is past
 */
function clee_is_past_date($date) {
    if (empty($date)) {
        return false;
    }
    
    $timestamp = strtotime($date);
    $today = strtotime('today');
    
    return $timestamp < $today;
}

/**
 * Get event status
 */
function clee_get_event_status($start_date, $end_date = null) {
    $today = strtotime('today');
    $start = strtotime($start_date);
    $end = !empty($end_date) ? strtotime($end_date) : $start;
    
    if ($end < $today) {
        return 'past';
    } elseif ($start <= $today && $end >= $today) {
        return 'ongoing';
    } else {
        return 'upcoming';
    }
}
