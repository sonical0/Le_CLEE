<?php
/**
 * Template for: Jeunes & Familles
 * Fully editable via Gutenberg in WordPress admin
 */
get_header();

clee_breadcrumb([
    ['title' => 'Accueil', 'url' => home_url('/')],
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
  ['title' => 'Jeunes & Familles']
]); ?>
<section class="hero">
<div class="container">
<h1 class="hero-title">Jeunes &amp; Familles</h1>
<p class="hero-description">
                Le CLEE Bordeaux Avenir vous accompagne dans votre parcours professionnel : stages, orientation, 
                insertion et toutes les clés pour réussir votre avenir
            </p>
</div>
</section>
<section class="section-content">
<div class="container">
<h2 class="section-title">Ce que le CLEE vous apporte</h2>
<p class="section-description">
                Le CLEE Bordeaux Avenir est votre partenaire privilégié pour construire votre avenir professionnel. 
                Nous mettons à votre disposition un réseau d'entreprises engagées, des ressources pratiques et 
                un accompagnement personnalisé pour vous aider à chaque étape de votre parcours.
            </p>
<div class="cards-grid">
<div class="info-card">
<span class="info-card-icon">🎯</span>
<h3 class="info-card-title">Trouver un Stage ou une Alternance</h3>
<p class="info-card-text">
                        Accédez à des centaines d'offres de stages et d'alternances auprès de nos entreprises 
                        partenaires. Nous facilitons la mise en relation entre jeunes et employeurs.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">📚</span>
<h3 class="info-card-title">S'Orienter et Se Former</h3>
<p class="info-card-text">
                        Bénéficiez de conseils d'orientation, découvrez les métiers et formations du territoire, 
                        et participez à des événements pour construire votre projet professionnel.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">🤝</span>
<h3 class="info-card-title">Développer son Réseau</h3>
<p class="info-card-text">
                        Rencontrez des professionnels lors de forums, visites d'entreprises et événements 
                        organisés par le CLEE. Créez des liens pour votre avenir.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">💡</span>
<h3 class="info-card-title">Acquérir des Compétences</h3>
<p class="info-card-text">
                        Profitez d'ateliers pratiques (CV, entretien, soft skills), de formations et 
                        d'accompagnement pour développer vos compétences professionnelles.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">🎓</span>
<h3 class="info-card-title">Valider son Diplôme</h3>
<p class="info-card-text">
                        Les PFMP (stages) sont essentielles pour valider votre diplôme. Nous vous aidons 
                        à trouver les meilleures opportunités et à réussir vos périodes en entreprise.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">🚀</span>
<h3 class="info-card-title">Réussir son Insertion</h3>
<p class="info-card-text">
                        Préparez votre entrée dans la vie active avec nos conseils, nos ressources et 
                        l'accès direct aux recruteurs du bassin bordelais.
                    </p>
</div>
</div>
</div>
</section>
<section class="section-content" style="background: white;">
<div class="container">
<h2 class="section-title">Nos Actions pour Vous</h2>
<p class="section-description">
                Le CLEE organise tout au long de l'année des événements et actions concrètes pour vous accompagner
            </p>
<div class="cards-grid">
<div class="info-card">
<span class="info-card-icon">🎪</span>
<h3 class="info-card-title">Forum des Métiers</h3>
<p class="info-card-text">
                        Rencontrez plus de 80 entreprises en un seul lieu, découvrez des métiers et 
                        déposez vos candidatures directement auprès des recruteurs.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">🏢</span>
<h3 class="info-card-title">Visites d'Entreprises</h3>
<p class="info-card-text">
                        Découvrez les coulisses des entreprises du territoire, rencontrez des professionnels 
                        et comprenez concrètement les métiers.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">💼</span>
<h3 class="info-card-title">Speed Dating Recrutement</h3>
<p class="info-card-text">
                        Passez des entretiens express avec plusieurs entreprises en une journée. 
                        Une opportunité unique de multiplier vos chances.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">🎯</span>
<h3 class="info-card-title">Ateliers Pratiques</h3>
<p class="info-card-text">
                        Participez à des ateliers CV, lettre de motivation, simulation d'entretiens 
                        et développement de soft skills.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">🎓</span>
<h3 class="info-card-title">Conférences Métiers</h3>
<p class="info-card-text">
                        Assistez à des présentations de secteurs d'activité, témoignages de professionnels 
                        et tables rondes sur les métiers de demain.
                    </p>
</div>
<div class="info-card">
<span class="info-card-icon">🏆</span>
<h3 class="info-card-title">Concours et Projets</h3>
<p class="info-card-text">
                        Participez à des concours, portez vos projets innovants et valorisez vos talents 
                        avec le soutien du CLEE.
                    </p>
</div>
</div>
</div>
</section>
<section class="section-content">
<div class="container">
<h2 class="section-title">Toutes nos Ressources à votre Disposition</h2>
<p class="section-description">
                Explorez nos différentes sections pour trouver toutes les informations et ressources dont vous avez besoin
            </p>
<div class="articles-grid">
<!-- Section 1: PFMP -->
<article class="article-card">
<img alt="Tout savoir sur la PFMP" class="article-image" src="https://picsum.photos/400/250?random=40"/>
<div class="article-content">
<span class="article-badge">Stages</span>
<h3 class="article-title">Tout savoir sur la PFMP</h3>
<p class="article-text">
                            Découvrez le rôle des PFMP, consultez les calendriers par formation, téléchargez 
                            tous les documents nécessaires et accédez à des modèles de CV et lettres de motivation.
                        </p>
<ul class="article-text" style="padding-left: 20px; margin-top: 12px;">
<li>Explication et objectifs des PFMP</li>
<li>Calendriers par formation</li>
<li>Documents et conventions</li>
<li>Modèles CV et lettres</li>
<li>Vidéo conseils</li>
<li>Liens utiles et offres de stages</li>
</ul>
<a class="article-link" href="<?php echo esc_url(home_url('/pfmp/')); ?>">Accéder à la page →</a>
</div>
</article>
<!-- Section 2: Orientation -->
<article class="article-card">
<img alt="Conseils orientation" class="article-image" src="https://picsum.photos/400/250?random=41"/>
<div class="article-content">
<span class="article-badge">Orientation</span>
<h3 class="article-title">Conseils Orientation &amp; Insertion</h3>
<p class="article-text">
                            Tous nos conseils pratiques pour réussir votre parcours : faire un CV efficace, 
                            réussir votre entretien, découvrir un métier et s'orienter après le lycée pro.
                        </p>
<ul class="article-text" style="padding-left: 20px; margin-top: 12px;">
<li>Guide pour un CV efficace</li>
<li>Réussir son entretien d'embauche</li>
<li>Comment découvrir un métier</li>
<li>S'orienter après le lycée pro</li>
<li>Poursuites d'études et alternance</li>
<li>Insertion professionnelle</li>
</ul>
<a class="article-link" href="<?php echo esc_url(home_url('/orientation-insertion/')); ?>">Accéder à la page →</a>
</div>
</article>
<!-- Section 3: Vie du CLEE -->
<article class="article-card">
<img alt="Vie du CLEE élèves" class="article-image" src="https://picsum.photos/400/250?random=42"/>
<div class="article-content">
<span class="article-badge">Événements</span>
<h3 class="article-title">Vie du CLEE pour les Élèves</h3>
<p class="article-text">
                            Revivez les moments forts des événements du CLEE, découvrez les projets portés 
                            par les élèves et inspirez-vous pour vos propres initiatives.
                        </p>
<ul class="article-text" style="padding-left: 20px; margin-top: 12px;">
<li>Galerie photos et vidéos</li>
<li>Événements marquants</li>
<li>Projets élèves innovants</li>
<li>Témoignages d'élèves</li>
<li>Réussites et parcours</li>
<li>Concours et distinctions</li>
</ul>
<a class="article-link" href="<?php echo esc_url(home_url('/vie-clee-eleves/')); ?>">Accéder à la page →</a>
</div>
</article>
</div>
</div>
</section>
<section class="section-content" style="background: white;">
<div class="container">
<h2 class="section-title">Ils Ont Trouvé Leur Voie grâce au CLEE</h2>
<p class="section-description">
                Des parcours inspirants de jeunes qui ont bénéficié de l'accompagnement du CLEE
            </p>
<div class="cards-grid">
<div class="info-card">
<h3 class="info-card-title">Sarah, 18 ans - BAC PRO Commerce</h3>
<p class="info-card-text">
                        "J'ai trouvé mon alternance lors du Forum des métiers. Les ateliers CV m'ont vraiment 
                        aidée à me démarquer. Aujourd'hui, je suis en BTS MCO en alternance dans une entreprise 
                        géniale que j'ai rencontrée grâce au CLEE !"
                    </p>
<span class="info-card-link">Parcours : CAP → BAC PRO → BTS en alternance</span>
</div>
<div class="info-card">
<h3 class="info-card-title">Thomas, 17 ans - CAP Menuiserie</h3>
<p class="info-card-text">
                        "Grâce aux visites d'entreprises organisées par le CLEE, j'ai découvert une entreprise 
                        artisanale incroyable. Ils m'ont pris en stage, puis en apprentissage. Je me forme 
                        maintenant auprès d'un Meilleur Ouvrier de France !"
                    </p>
<span class="info-card-link">Parcours : CAP en apprentissage → Embauche</span>
</div>
<div class="info-card">
<h3 class="info-card-title">Léa, 19 ans - BTS NDRC</h3>
<p class="info-card-text">
                        "J'étais perdue sur mon orientation après le BAC PRO. Les conseillers du CLEE m'ont 
                        accompagnée, j'ai participé à un speed dating et j'ai décroché mon contrat d'alternance. 
                        Le CLEE a vraiment changé ma vie !"
                    </p>
<span class="info-card-link">Parcours : BAC PRO → BTS en alternance</span>
</div>
</div>
</div>
</section>
<section class="section-content">
<div class="container">
<h2 class="section-title">Le CLEE en Chiffres</h2>
<p class="section-description">
                L'impact concret du CLEE sur l'insertion des jeunes du territoire
            </p>
<div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
<div class="info-card" style="text-align: center;">
<div style="font-size: 48px; font-weight: 700; color: var(--primary-600); margin-bottom: 8px;">500+</div>
<h3 class="info-card-title" style="font-size: 18px;">Jeunes Accompagnés</h3>
<p class="info-card-text">chaque année dans leurs démarches</p>
</div>
<div class="info-card" style="text-align: center;">
<div style="font-size: 48px; font-weight: 700; color: var(--primary-600); margin-bottom: 8px;">200+</div>
<h3 class="info-card-title" style="font-size: 18px;">Offres de Stages</h3>
<p class="info-card-text">disponibles via nos entreprises partenaires</p>
</div>
<div class="info-card" style="text-align: center;">
<div style="font-size: 48px; font-weight: 700; color: var(--primary-600); margin-bottom: 8px;">15+</div>
<h3 class="info-card-title" style="font-size: 18px;">Événements</h3>
<p class="info-card-text">organisés chaque année pour vous</p>
</div>
<div class="info-card" style="text-align: center;">
<div style="font-size: 48px; font-weight: 700; color: var(--primary-600); margin-bottom: 8px;">85%</div>
<h3 class="info-card-title" style="font-size: 18px;">Taux d'Insertion</h3>
<p class="info-card-text">des jeunes accompagnés trouvent un stage ou alternance</p>
</div>
</div>
</div>
</section>
<section class="cta-section">
<div class="container">
<h2 class="cta-title">Prêt à Construire Votre Avenir ?</h2>
<p class="cta-description">
                Rejoignez les centaines de jeunes qui font confiance au CLEE pour réussir leur parcours professionnel
            </p>
<div class="cta-buttons">
<a class="btn btn-secondary btn-large" href="<?php echo esc_url(home_url('/pfmp/')); ?>">
<span class="btn-text">Trouver un Stage</span>
</a>
<a class="btn btn-secondary btn-large" href="<?php echo esc_url(home_url('/orientation-insertion/')); ?>">
<span class="btn-text">Conseils Orientation</span>
</a>
<a class="btn btn-secondary btn-large" href="<?php echo esc_url(home_url('/agenda/')); ?>">
<span class="btn-text">Voir les Événements</span>
</a>
</div>
</div>
</section>
<?php get_footer(); ?>
