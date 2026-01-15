<?php
/**
 * Template for: Établissements & Formations
 * 
 * This page redirects to the establishments archive (CPT: etablissement)
 * URL: /etablissements/ (handled by archive-etablissement.php)
 * 
 * If you need a static page, edit archive-etablissement.php or create
 * a custom template.
 */

// Redirect to establishments archive
wp_redirect(get_post_type_archive_link('etablissement'), 301);
exit;
<section class="hero-etablissement">
<div class="container">
<div class="hero-grid">
<!-- Carte interactive -->
<div class="carte-ecoles-wrapper">
<h2 class="carte-title">Établissements du CLEE</h2>
<p class="carte-subtitle">Sélectionnez un établissement sur la carte</p>
<div class="carte-interactive">
<img alt="Carte des établissements" class="carte-image" src="https://picsum.photos/600/450?random=50"/>
<div class="carte-overlay">
<button aria-label="Lycée Professionnel Talence" class="map-marker active" data-school="lycee-talence" style="top: 45%; left: 50%;">
<span class="marker-dot"></span>
<span class="marker-label">LP Talence</span>
</button>
<button aria-label="Lycée Professionnel Mérignac" class="map-marker" data-school="lycee-merignac" style="top: 40%; left: 35%;">
<span class="marker-dot"></span>
<span class="marker-label">LP Mérignac</span>
</button>
<button aria-label="Lycée Professionnel Pessac" class="map-marker" data-school="lycee-pessac" style="top: 60%; left: 45%;">
<span class="marker-dot"></span>
<span class="marker-label">LP Pessac</span>
</button>
<button aria-label="Lycée Professionnel Bordeaux Centre" class="map-marker" data-school="lycee-bordeaux" style="top: 30%; left: 60%;">
<span class="marker-dot"></span>
<span class="marker-label">LP Bordeaux</span>
</button>
</div>
</div>
<!-- Liste des établissements -->
<div class="ecoles-list">
<button class="ecole-item active" data-school="lycee-talence">
<span>LP Talence</span>
<span class="ecole-arrow">→</span>
</button>
<button class="ecole-item" data-school="lycee-merignac">
<span>LP Mérignac</span>
<span class="ecole-arrow">→</span>
</button>
<button class="ecole-item" data-school="lycee-pessac">
<span>LP Pessac</span>
<span class="ecole-arrow">→</span>
</button>
<button class="ecole-item" data-school="lycee-bordeaux">
<span>LP Bordeaux Centre</span>
<span class="ecole-arrow">→</span>
</button>
</div>
</div>
<!-- Fiche établissement -->
<div class="etablissement-card" id="etablissement-content">
<div class="etablissement-image">
<img alt="Lycée Professionnel Talence" src="https://picsum.photos/800/500?random=51"/>
<div class="etablissement-badge">Établissement Public</div>
</div>
<div class="etablissement-content">
<h1 class="etablissement-name">Lycée Professionnel Talence</h1>
<p class="etablissement-address">📍 123 Avenue de la République, 33400 Talence</p>
<div class="etablissement-stats">
<div class="stat-item">
<span class="stat-number">850</span>
<span class="stat-label">Élèves</span>
</div>
<div class="stat-item">
<span class="stat-number">12</span>
<span class="stat-label">Formations</span>
</div>
<div class="stat-item">
<span class="stat-number">95%</span>
<span class="stat-label">Réussite</span>
</div>
</div>
<p class="etablissement-description">
                            Le Lycée Professionnel de Talence est un établissement d'excellence proposant des formations 
                            dans les secteurs de l'industrie, du numérique et du tertiaire. Équipé de plateaux techniques 
                            modernes, il accompagne ses élèves vers la réussite professionnelle.
                        </p>
<div class="etablissement-info">
<div class="info-item">
<strong>Contact PFMP :</strong>
<p>Marie Dupont - m.dupont@lycee-talence.fr</p>
</div>
<div class="info-item">
<strong>Téléphone :</strong>
<p>05 56 84 56 78</p>
</div>
</div>
<div class="etablissement-actions">
<a class="btn btn-primary" href="#formations">Voir les formations</a>
<a class="btn btn-outline" href="#">Site de l'établissement</a>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="filtres-secteurs" id="filtres">
<div class="container">
<h2 class="section-title">Formations par secteur</h2>
<div class="secteurs-grid">
<button class="secteur-btn active" data-secteur="tous">
<div class="secteur-icon" style="background: linear-gradient(135deg, #314960 0%, #405C76 100%);">📚</div>
<span class="secteur-name">Toutes les formations</span>
<span class="secteur-count">12</span>
</button>
<button class="secteur-btn" data-secteur="industrie">
<div class="secteur-icon" style="background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);">⚙️</div>
<span class="secteur-name">Industrie</span>
<span class="secteur-count">4</span>
</button>
<button class="secteur-btn" data-secteur="numerique">
<div class="secteur-icon" style="background: linear-gradient(135deg, #50C878 0%, #3BA561 100%);">💻</div>
<span class="secteur-name">Numérique</span>
<span class="secteur-count">3</span>
</button>
<button class="secteur-btn" data-secteur="tertiaire">
<div class="secteur-icon" style="background: linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%);">📋</div>
<span class="secteur-name">Tertiaire</span>
<span class="secteur-count">3</span>
</button>
<button class="secteur-btn" data-secteur="batiment">
<div class="secteur-icon" style="background: linear-gradient(135deg, #E67E22 0%, #D35400 100%);">🏗️</div>
<span class="secteur-name">Bâtiment</span>
<span class="secteur-count">2</span>
</button>
</div>
</div>
</section>
<section class="formations-section" id="formations">
<div class="container">
<h2 class="section-title">Formations proposées</h2>
<div class="formations-grid">
<article class="formation-card" data-secteur="industrie">
<div class="formation-header">
<div class="formation-image">
<img alt="CAP Électricien" src="https://picsum.photos/400/250?random=20"/>
<span class="formation-niveau">CAP</span>
</div>
<div class="formation-badge" style="background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);">Industrie</div>
</div>
<div class="formation-content">
<h3 class="formation-title">CAP Électricien</h3>
<p class="formation-description">Formation aux bases de l'électricité et installations électriques</p>
<div class="formation-details">
<div class="detail-section">
<h4>Objectifs</h4>
<ul>
<li>Réaliser des installations électriques</li>
<li>Assurer la maintenance préventive</li>
</ul>
</div>
</div>
<button class="formation-toggle">Voir les détails</button>
</div>
</article>
<article class="formation-card" data-secteur="numerique">
<div class="formation-header">
<div class="formation-image">
<img alt="Bac Pro SN" src="https://picsum.photos/400/250?random=21"/>
<span class="formation-niveau">BAC PRO</span>
</div>
<div class="formation-badge" style="background: linear-gradient(135deg, #50C878 0%, #3BA561 100%);">Numérique</div>
</div>
<div class="formation-content">
<h3 class="formation-title">Bac Pro Systèmes Numériques</h3>
<p class="formation-description">Formation en informatique, réseaux et cybersécurité</p>
<div class="formation-details">
<div class="detail-section">
<h4>Objectifs</h4>
<ul>
<li>Développer des applications</li>
<li>Gérer les réseaux informatiques</li>
</ul>
</div>
</div>
<button class="formation-toggle">Voir les détails</button>
</div>
</article>
<article class="formation-card" data-secteur="tertiaire">
<div class="formation-header">
<div class="formation-image">
<img alt="Bac Pro GA" src="https://picsum.photos/400/250?random=22"/>
<span class="formation-niveau">BAC PRO</span>
</div>
<div class="formation-badge" style="background: linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%);">Tertiaire</div>
</div>
<div class="formation-content">
<h3 class="formation-title">Bac Pro Gestion Administrative</h3>
<p class="formation-description">Formation en gestion administrative et ressources humaines</p>
<div class="formation-details">
<div class="detail-section">
<h4>Objectifs</h4>
<ul>
<li>Gérer l'administratif d'une entreprise</li>
<li>Participer à la gestion RH</li>
</ul>
</div>
</div>
<button class="formation-toggle">Voir les détails</button>
</div>
</article>
<article class="formation-card" data-secteur="numerique">
<div class="formation-header">
<div class="formation-image">
<img alt="BTS CRSA" src="https://picsum.photos/400/250?random=23"/>
<span class="formation-niveau">BTS</span>
</div>
<div class="formation-badge" style="background: linear-gradient(135deg, #50C878 0%, #3BA561 100%);">Numérique</div>
</div>
<div class="formation-content">
<h3 class="formation-title">BTS Cybersécurité</h3>
<p class="formation-description">Formation supérieure en cybersécurité et protection des données</p>
<div class="formation-details">
<div class="detail-section">
<h4>Objectifs</h4>
<ul>
<li>Sécuriser les systèmes informatiques</li>
<li>Analyser les menaces</li>
</ul>
</div>
</div>
<button class="formation-toggle">Voir les détails</button>
</div>
</article>
<article class="formation-card" data-secteur="industrie">
<div class="formation-header">
<div class="formation-image">
<img alt="BTS SIO" src="https://picsum.photos/400/250?random=24"/>
<span class="formation-niveau">BTS</span>
</div>
<div class="formation-badge" style="background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);">Industrie</div>
</div>
<div class="formation-content">
<h3 class="formation-title">BTS SIO - Option SLAM</h3>
<p class="formation-description">Formation en informatique et développement logiciel</p>
<div class="formation-details">
<div class="detail-section">
<h4>Objectifs</h4>
<ul>
<li>Développer des logiciels</li>
<li>Assurer le support utilisateur</li>
</ul>
</div>
</div>
<button class="formation-toggle">Voir les détails</button>
</div>
</article>
<article class="formation-card" data-secteur="batiment">
<div class="formation-header">
<div class="formation-image">
<img alt="CAP Maçon" src="https://picsum.photos/400/250?random=25"/>
<span class="formation-niveau">CAP</span>
</div>
<div class="formation-badge" style="background: linear-gradient(135deg, #E67E22 0%, #D35400 100%);">Bâtiment</div>
</div>
<div class="formation-content">
<h3 class="formation-title">CAP Maçon</h3>
<p class="formation-description">Formation aux techniques de maçonnerie et construction</p>
<div class="formation-details">
<div class="detail-section">
<h4>Objectifs</h4>
<ul>
<li>Construire des structures maçonnées</li>
<li>Assurer la finition</li>
</ul>
</div>
</div>
<button class="formation-toggle">Voir les détails</button>
</div>
</article>
</div>
</div>
</section>
<section class="cta-section" id="cta">
<div class="container">
<h2 class="cta-title">Prêt à commencer ?</h2>
<p class="cta-text">
                Explorez nos formations et trouvez le parcours professionnel qui vous correspond. 
                Nos conseillers sont là pour vous accompagner à chaque étape.
            </p>
<div class="cta-buttons">
<a class="btn btn-primary" href="#">Candidater maintenant</a>
<a class="btn btn-outline" href="#">Consulter l'offre complète</a>
</div>
</div>
</section>
<?php get_footer(); ?>
