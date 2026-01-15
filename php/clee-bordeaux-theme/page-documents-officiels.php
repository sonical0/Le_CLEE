<?php
/**
 * Template for: Documents Officiels
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
  ['title' => 'Documents Officiels']
]); ?>
<section class="hero">
<div class="container">
<div class="breadcrumb">
<a href="<?php echo esc_url(home_url('/le-clee/')); ?>">Le CLEE</a>
<span>/</span>
<span>Documents Officiels</span>
</div>
<h1 class="hero-title">Documents Officiels</h1>
<p class="hero-description">
                Accédez aux documents institutionnels, statuts et plans d'action du CLEE Bordeaux Avenir
            </p>
</div>
</section>
<section class="documents-section">
<div class="container">
<!-- Plan d'action annuel -->
<div class="document-category">
<h2 class="category-title">
                    Plan d'Action Annuel
                </h2>
<p class="category-description">
                    Le plan d'action définit les orientations stratégiques et les actions prioritaires 
                    du CLEE pour l'année en cours.
                </p>
<div class="documents-grid">
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Plan d'Action 2026</h3>
<p class="document-meta">
<span class="document-date">Date : Janvier 2026</span>
<span class="document-size">Format : PDF - 2.5 Mo</span>
</p>
<p class="document-description">
                                Plan d'action détaillé pour l'année 2026 incluant les objectifs, actions 
                                prioritaires et calendrier prévisionnel.
                            </p>
</div>
<a aria-label="Télécharger le Plan d'Action 2026" class="document-download" href="#">
<span>Télécharger</span>
</a>
</div>
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Bilan d'Action 2025</h3>
<p class="document-meta">
<span class="document-date">Date : Décembre 2025</span>
<span class="document-size">Format : PDF - 1.8 Mo</span>
</p>
<p class="document-description">
                                Rapport d'activité complet de l'année 2025 avec bilan des actions menées 
                                et résultats obtenus.
                            </p>
</div>
<a aria-label="Télécharger le Bilan d'Action 2025" class="document-download" href="#">
<span>⬇️ Télécharger</span>
</a>
</div>
</div>
</div>
<!-- Statuts -->
<div class="document-category">
<h2 class="category-title">
                    Statuts
                </h2>
<p class="category-description">
                    Les statuts définissent l'organisation, le fonctionnement et les règles de gouvernance du CLEE.
                </p>
<div class="documents-grid">
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Statuts du CLEE Bordeaux Avenir</h3>
<p class="document-meta">
<span class="document-date">Version : 2024</span>
<span class="document-size">Format : PDF - 850 Ko</span>
</p>
<p class="document-description">
                                Statuts actualisés définissant l'objet, l'organisation et le fonctionnement 
                                du CLEE Bordeaux Avenir.
                            </p>
</div>
<a aria-label="Télécharger les Statuts" class="document-download" href="#">
<span>Télécharger</span>
</a>
</div>
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Règlement Intérieur</h3>
<p class="document-meta">
<span class="document-date">Version : 2024</span>
<span class="document-size">Format : PDF - 650 Ko</span>
</p>
<p class="document-description">
                                Règlement intérieur précisant les modalités d'application des statuts et 
                                le fonctionnement quotidien du CLEE.
                            </p>
</div>
<a aria-label="Télécharger le Règlement Intérieur" class="document-download" href="#">
<span>Télécharger</span>
</a>
</div>
</div>
</div>
<!-- Documents institutionnels académiques -->
<div class="document-category">
<h2 class="category-title">
                    Documents Institutionnels Académiques
                </h2>
<p class="category-description">
                    Documents cadres et références institutionnelles au niveau académique et national.
                </p>
<div class="documents-grid">
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Cadre National des CLEE</h3>
<p class="document-meta">
<span class="document-date">Année : 2023</span>
<span class="document-size">Format : PDF - 1.2 Mo</span>
</p>
<p class="document-description">
                                Document de référence définissant le cadre national des Comités Locaux École-Entreprise 
                                et leurs missions.
                            </p>
</div>
<a aria-label="Télécharger le Cadre National" class="document-download" href="#">
<span>Télécharger</span>
</a>
</div>
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Convention Académique</h3>
<p class="document-meta">
<span class="document-date">Année : 2024</span>
<span class="document-size">Format : PDF - 950 Ko</span>
</p>
<p class="document-description">
                                Convention liant le CLEE Bordeaux Avenir avec l'académie de Bordeaux, 
                                définissant les engagements mutuels.
                            </p>
</div>
<a aria-label="Télécharger la Convention Académique" class="document-download" href="#">
<span>Télécharger</span>
</a>
</div>
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Charte École-Entreprise</h3>
<p class="document-meta">
<span class="document-date">Année : 2023</span>
<span class="document-size">Format : PDF - 720 Ko</span>
</p>
<p class="document-description">
                                Charte définissant les bonnes pratiques et engagements dans les relations 
                                entre écoles et entreprises.
                            </p>
</div>
<a aria-label="Télécharger la Charte École-Entreprise" class="document-download" href="#">
<span>Télécharger</span>
</a>
</div>
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Guide PFMP</h3>
<p class="document-meta">
<span class="document-date">Année : 2025</span>
<span class="document-size">Format : PDF - 1.5 Mo</span>
</p>
<p class="document-description">
                                Guide pratique des Périodes de Formation en Milieu Professionnel : 
                                réglementation, organisation et accompagnement.
                            </p>
</div>
<a aria-label="Télécharger le Guide PFMP" class="document-download" href="#">
<span>Télécharger</span>
</a>
</div>
</div>
</div>
<!-- Comptes-rendus -->
<div class="document-category">
<h2 class="category-title">
                    Comptes-Rendus
                </h2>
<p class="category-description">
                    Comptes-rendus des assemblées générales et réunions importantes du CLEE.
                </p>
<div class="documents-grid">
<div class="document-card">
<div class="document-info">
<h3 class="document-title">Assemblée Générale 2025</h3>
<p class="document-meta">
<span class="document-date">Date : Juin 2025</span>
<span class="document-size">Format : PDF - 1.1 Mo</span>
</p>
<p class="document-description">
                                Compte-rendu de l'Assemblée Générale annuelle 2025 avec bilan d'activité 
                                et orientations stratégiques.
                            </p>
</div>
<a aria-label="Télécharger le CR AG 2025" class="document-download" href="#">
<span>Télécharger</span>
</a>
</div>
</div>
</div>
</div>
</section>
<section class="contact-documents-section">
<div class="container">
<div class="contact-box">
<h2 class="contact-title">Besoin d'informations complémentaires ?</h2>
<p class="contact-description">
                    Pour toute question concernant nos documents officiels ou pour obtenir des informations 
                    complémentaires, n'hésitez pas à nous contacter.
                </p>
<a class="btn btn-primary" href="mailto:contact@clee-bordeaux.fr">
<span class="btn-text">Nous contacter</span>
</a>
</div>
</div>
</section>
<?php get_footer(); ?>
