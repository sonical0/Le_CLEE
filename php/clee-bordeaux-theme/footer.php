
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-info">
        <h3 class="footer-title"><?php bloginfo('name'); ?></h3>
        <?php if (clee_get_option('footer_text')): ?>
          <div class="footer-text">
            <?php echo wp_kses_post(clee_get_option('footer_text')); ?>
          </div>
        <?php else: ?>
          <p class="footer-text">Construisons ensemble l'avenir de Bordeaux</p>
        <?php endif; ?>
      </div>
      
      <div class="footer-links">
        <?php
        // Footer menu - if assigned, use it; otherwise fallback to hardcoded structure
        if (has_nav_menu('footer')) {
          wp_nav_menu([
            'theme_location' => 'footer',
            'container'      => 'div',
            'container_class' => 'footer-menu-columns',
            'menu_class'     => 'footer-menu',
            'depth'          => 2,
            'fallback_cb'    => false,
          ]);
        } else {
          // Fallback footer columns
          ?>
          <div class="footer-column">
            <h4 class="footer-subtitle">Le CLEE</h4>
            <ul>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('le-clee'))); ?>">Qui sommes-nous</a></li>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('bureau-membres'))); ?>">Bureau &amp; Membres</a></li>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('nos-actions'))); ?>">Nos Actions</a></li>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('documents-officiels'))); ?>">Documents Officiels</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4 class="footer-subtitle">Entreprises &amp; Partenaires</h4>
            <ul>
              <li><a href="<?php echo esc_url(get_post_type_archive_link('partenaire')); ?>">Nos partenaires</a></li>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('companies'))); ?>#devenir-partenaire">Devenir partenaire</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4 class="footer-subtitle">Jeunes &amp; Familles</h4>
            <ul>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('pfmp'))); ?>">Tout savoir sur la PFMP</a></li>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('orientation-insertion'))); ?>">Conseils orientation</a></li>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('vie-clee-eleves'))); ?>">Vie du CLEE pour les élèves</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4 class="footer-subtitle">Navigation</h4>
            <ul>
              <li><a href="<?php echo esc_url(get_post_type_archive_link('etablissement')); ?>">Établissements &amp; Formations</a></li>
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('vie-clee'))); ?>">Vie du CLEE</a></li>
              <li><a href="<?php echo esc_url(get_post_type_archive_link('evenement')); ?>">Agenda</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4 class="footer-subtitle">Contact</h4>
            <ul>
              <?php if (clee_get_option('contact_email')): ?>
                <li><a href="mailto:<?php echo esc_attr(clee_get_option('contact_email')); ?>">Nous contacter</a></li>
              <?php endif; ?>
              
              <?php if (clee_get_option('social_linkedin')): ?>
                <li><a href="<?php echo esc_url(clee_get_option('social_linkedin')); ?>" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <?php endif; ?>
              
              <li><a href="<?php echo esc_url(get_page_link(get_page_by_path('mentions-legales'))); ?>">Mentions légales</a></li>
            </ul>
          </div>
          <?php
        }
        ?>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>
        <?php 
        $copyright = clee_get_option('footer_copyright', '© ' . date('Y') . ' CLEE Bordeaux Avenir. Tous droits réservés.');
        echo esc_html($copyright);
        ?>
      </p>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
