<?php
/**
 * Template for: Bureau & Membres
 * Fully editable via Gutenberg in WordPress admin
 */
get_header();

clee_breadcrumb([
    ['title' => 'Accueil', 'url' => home_url('/')],
    ['title' => 'Le CLEE', 'url' => get_permalink(get_page_by_path('le-clee'))],
    ['title' => get_the_title(), 'url' => '']
]);

while (have_posts()) : the_post();
    ?>
    <main class="page-content">
        <?php the_content(); ?>
    </main>
    <?php
endwhile;

get_footer();
<?php clee_breadcrumb([
  ['title' => 'Accueil', 'url' => home_url('/')],
  ['title' => 'Le CLEE', 'url' => home_url('/le-clee/')],
  ['title' => 'Bureau & Membres']
]); ?>
<section class="hero">
<div class="container">
<div class="breadcrumb">
<a href="<?php echo esc_url(home_url('/le-clee/')); ?>">Le CLEE</a>
<span>/</span>
<span>Bureau &amp; Membres</span>
</div>
<h1 class="hero-title">Bureau &amp; Membres</h1>
<p class="hero-description">
                Découvrez les personnes qui composent le CLEE Bordeaux Avenir et leur rôle
            </p>
</div>
</section>
<section class="bureau-section">
<div class="container">
<h2 class="section-title">Composition du Bureau</h2>
<div class="membres-grid">
<!-- Président -->
<div class="membre-card">
<div class="membre-photo">
<img alt="Photo du Président" src="https://ui-avatars.com/api/?name=NP&amp;size=200&amp;background=1f3448&amp;color=fff"/>
</div>
<div class="membre-info">
<div class="membre-role">Président</div>
<h3 class="membre-name">Nom Prénom</h3>
<p class="membre-description">
                            Le président assure la direction générale du CLEE, préside les réunions et représente 
                            l'organisation auprès des partenaires institutionnels et économiques.
                        </p>
<div class="membre-contact">
<span>Email : president@clee-bordeaux.fr</span>
</div>
</div>
</div>
<!-- Vice-président -->
<div class="membre-card">
<div class="membre-photo">
<img alt="Photo du Vice-président" src="https://ui-avatars.com/api/?name=NP&amp;size=200&amp;background=507090&amp;color=fff"/>
</div>
<div class="membre-info">
<div class="membre-role">Vice-président</div>
<h3 class="membre-name">Nom Prénom</h3>
<p class="membre-description">
                            Le vice-président seconde le président dans ses fonctions et le remplace en cas d'absence. 
                            Il coordonne les actions opérationnelles du CLEE.
                        </p>
<div class="membre-contact">
<span>Email : vice-president@clee-bordeaux.fr</span>
</div>
</div>
</div>
<!-- Secrétaire -->
<div class="membre-card">
<div class="membre-photo">
<img alt="Photo du Secrétaire" src="https://ui-avatars.com/api/?name=NP&amp;size=200&amp;background=5e7e9f&amp;color=fff"/>
</div>
<div class="membre-info">
<div class="membre-role">Secrétaire</div>
<h3 class="membre-name">Nom Prénom</h3>
<p class="membre-description">
                            Le secrétaire assure la gestion administrative, rédige les comptes-rendus et 
                            garantit la communication interne et externe du CLEE.
                        </p>
<div class="membre-contact">
<span>Email : secretaire@clee-bordeaux.fr</span>
</div>
</div>
</div>
<!-- Trésorier -->
<div class="membre-card">
<div class="membre-photo">
<img alt="Photo du Trésorier" src="https://ui-avatars.com/api/?name=NP&amp;size=200&amp;background=7592b0&amp;color=fff"/>
</div>
<div class="membre-info">
<div class="membre-role">Trésorier</div>
<h3 class="membre-name">Nom Prénom</h3>
<p class="membre-description">
                            Le trésorier gère les finances du CLEE, établit les budgets prévisionnels et 
                            présente les comptes lors des assemblées générales.
                        </p>
<div class="membre-contact">
<span>Email : tresorier@clee-bordeaux.fr</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section class="referents-section">
<div class="container">
<h2 class="section-title">RBDE / Référents de Bassin</h2>
<p class="section-description">
                Les Référents de Bassin pour les Écoles et les Entreprises (RBDE) assurent le lien entre 
                les établissements scolaires et le monde économique.
            </p>
<div class="referents-list">
<div class="referent-item">
<div class="referent-icon">👤</div>
<div class="referent-info">
<h4 class="referent-name">Nom Prénom - Référent 1</h4>
<p class="referent-detail">Secteur : Industrie &amp; Technique</p>
<p class="referent-contact">Email : referent1@clee-bordeaux.fr | Tél : 05 XX XX XX XX</p>
</div>
</div>
<div class="referent-item">
<div class="referent-icon">👤</div>
<div class="referent-info">
<h4 class="referent-name">Nom Prénom - Référent 2</h4>
<p class="referent-detail">Secteur : Commerce &amp; Services</p>
<p class="referent-contact">Email : referent2@clee-bordeaux.fr | Tél : 05 XX XX XX XX</p>
</div>
</div>
<div class="referent-item">
<div class="referent-icon">👤</div>
<div class="referent-info">
<h4 class="referent-name">Nom Prénom - Référent 3</h4>
<p class="referent-detail">Secteur : Santé &amp; Social</p>
<p class="referent-contact">Email : referent3@clee-bordeaux.fr | Tél : 05 XX XX XX XX</p>
</div>
</div>
<div class="referent-item">
<div class="referent-icon">👤</div>
<div class="referent-info">
<h4 class="referent-name">Nom Prénom - Référent 4</h4>
<p class="referent-detail">Secteur : Numérique &amp; Innovation</p>
<p class="referent-contact">Email : referent4@clee-bordeaux.fr | Tél : 05 XX XX XX XX</p>
</div>
</div>
</div>
</div>
</section>
<section class="representants-section">
<div class="container">
<h2 class="section-title">Représentants Entreprises</h2>
<p class="section-description">
                Les représentants d'entreprises partenaires qui s'engagent activement dans la mission du CLEE.
            </p>
<div class="representants-grid">
<div class="representant-card">
<h4 class="representant-name">Nom Prénom</h4>
<p class="representant-company">Entreprise partenaire 1</p>
<p class="representant-role">Secteur d'activité</p>
</div>
<div class="representant-card">
<h4 class="representant-name">Nom Prénom</h4>
<p class="representant-company">Entreprise partenaire 2</p>
<p class="representant-role">Secteur d'activité</p>
</div>
<div class="representant-card">
<h4 class="representant-name">Nom Prénom</h4>
<p class="representant-company">Entreprise partenaire 3</p>
<p class="representant-role">Secteur d'activité</p>
</div>
<div class="representant-card">
<h4 class="representant-name">Nom Prénom</h4>
<p class="representant-company">Entreprise partenaire 4</p>
<p class="representant-role">Secteur d'activité</p>
</div>
<div class="representant-card">
<h4 class="representant-name">Nom Prénom</h4>
<p class="representant-company">Entreprise partenaire 5</p>
<p class="representant-role">Secteur d'activité</p>
</div>
<div class="representant-card">
<h4 class="representant-name">Nom Prénom</h4>
<p class="representant-company">Entreprise partenaire 6</p>
<p class="representant-role">Secteur d'activité</p>
</div>
</div>
</div>
</section>
<?php get_footer(); ?>
