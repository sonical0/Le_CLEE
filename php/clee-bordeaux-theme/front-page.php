<?php get_header(); ?>
<section class="hero" id="hero">
<div class="container">
<div class="hero-content">
<div class="hero-badge"> </div>
<h1 class="hero-title"> Construisons ensemble l'avenir de Bordeaux</h1>
<p class="hero-description">
                    CLEE Bordeaux Avenir renforce les ponts entre le monde éducatif et le tissu économique local. 
                    Nous créons des opportunités de stages, d'apprentissages et préparons les jeunes talents aux défis de demain.
                </p>
<div class="hero-cta">
<a class="btn btn-primary btn-large" href="<?php echo esc_url(home_url('/companies/')); ?>">
<span class="btn-text">Devenir partenaire</span>
</a>
<a class="btn btn-primary btn-large" href="<?php echo esc_url(home_url('/establishments/')); ?>">
<span class="btn-text">Découvrir les formations</span>
</a>
</div>
</div>
</div>
</section>
<section class="actualites" id="actualites">
<div class="container">
<div class="section-header">
<h2 class="section-title">Actualités récentes</h2>
<p class="section-subtitle">Restez informé des dernières nouvelles et événements du CLEE</p>
</div>
<div class="actualites-grid">
<article class="actualite-card featured">
<div class="actualite-badge">À la une</div>
<div class="actualite-image">
<img alt="Forum des métiers 2025" src="https://picsum.photos/600/350?random=1"/>
</div>
<div class="actualite-content">
<div class="actualite-meta">
<span class="actualite-date">Janvier 2026</span>
<span class="actualite-category">Événement</span>
</div>
<h3 class="actualite-title">Forum des métiers 2025</h3>
<p class="actualite-text">
                            Un record de participation avec plus de 500 jeunes et 80 entreprises. Une occasion unique de 
                            découvrir les métiers et opportunités du territoire.
                        </p>
<a class="actualite-link" href="#">Lire l'article complet →</a>
</div>
</article>
<article class="actualite-card">
<div class="actualite-image">
<img alt="Nouveau partenariat" src="https://picsum.photos/600/350?random=2"/>
</div>
<div class="actualite-content">
<div class="actualite-meta">
<span class="actualite-date">Décembre 2025</span>
<span class="actualite-category">Partenariat</span>
</div>
<h3 class="actualite-title">Nouveau partenariat stratégique</h3>
<p class="actualite-text">
                            Une entreprise majeure du bassin rejoint le CLEE pour multiplier les opportunités de stages et 
                            d'apprentissages.
                        </p>
<a class="actualite-link" href="#">En savoir plus →</a>
</div>
</article>
<article class="actualite-card">
<div class="actualite-image">
<img alt="Visite pédagogique" src="https://picsum.photos/600/350?random=3"/>
</div>
<div class="actualite-content">
<div class="actualite-meta">
<span class="actualite-date">Novembre 2025</span>
<span class="actualite-category">Visite</span>
</div>
<h3 class="actualite-title">Visite pédagogique en entreprise</h3>
<p class="actualite-text">
                            Les élèves découvrent les métiers, l'innovation et la culture d'entreprise lors de visites 
                            immersives.
                        </p>
<a class="actualite-link" href="#">Voir les photos →</a>
</div>
</article>
</div>
<div class="section-action">
<a class="btn btn-outline" href="#">Voir toutes les actualités</a>
</div>
</div>
</section>
<section class="chiffres-cles" id="chiffres">
<div class="container">
<div class="section-header">
<h2 class="section-title">Notre impact</h2>
<p class="section-subtitle">
                    Des chiffres qui parlent : le CLEE mobilise chaque jour un réseau dynamique au service de l'avenir
                </p>
</div>
<div class="chiffres-grid">
<div class="chiffre-card">
<div class="chiffre-number">120+</div>
<h3 class="chiffre-title">Entreprises partenaires</h3>
<p class="chiffre-text">Des TPE aux grands groupes, tous engagés pour l'avenir</p>
</div>
<div class="chiffre-card">
<div class="chiffre-number">45</div>
<h3 class="chiffre-title">Formations</h3>
<p class="chiffre-text">Un large éventail de filières professionnelles</p>
</div>
<div class="chiffre-card">
<div class="chiffre-number">3500+</div>
<h3 class="chiffre-title">Jeunes accompagnés</h3>
<p class="chiffre-text">Chaque année, des parcours vers l'insertion professionnelle</p>
</div>
<div class="chiffre-card">
<div class="chiffre-number">25+</div>
<h3 class="chiffre-title">Événements annuels</h3>
<p class="chiffre-text">Forums, visites, rencontres et conférences</p>
</div>
</div>
</div>
</section>
<section class="agenda" id="agenda">
<div class="container">
<div class="section-header">
<h2 class="section-title">Événements à venir</h2>
<p class="section-subtitle">Rejoignez-nous lors de nos prochains événements et rencontres</p>
</div>
<div class="agenda-timeline" id="upcoming-events">
<!-- Les événements seront chargés dynamiquement depuis agenda.js -->
</div>
<div class="section-action">
<a class="btn btn-outline" href="<?php echo esc_url(home_url('/agenda/')); ?>">Voir l'agenda complet </a>
</div>
</div>
</section>
<section class="contact" id="contact">
<div class="container">
<div class="contact-wrapper">
<div class="contact-content">
<h2 class="section-title">Rejoignez le mouvement</h2>
<p class="contact-text">
                        Vous êtes une entreprise, un établissement, un jeune chercheur ou simplement passionné par 
                        le rapprochement entre éducation et économie ? Nous serions ravis d'échanger avec vous !
                    </p>
<div class="contact-features">
<div class="feature">
<span class="feature-text">Une équipe réactive</span>
</div>
<div class="feature">
<span class="feature-text">Des solutions adaptées</span>
</div>
<div class="feature">
<span class="feature-text">Un réseau puissant</span>
</div>
</div>
</div>
<div class="contact-cta">
<a class="btn btn-primary btn-large" href="#">Contactez-nous</a>
<a class="btn btn-outline btn-large" href="#">Suivre sur LinkedIn</a>
</div>
</div>
</div>
</section>
<?php get_footer(); ?>
