<?php get_header(); ?>
<?php clee_breadcrumb([
  ['title' => 'Accueil', 'url' => home_url('/')],
  ['title' => 'Entreprises & Partenaires']
]); ?>
<section class="hero-entreprises">
<div class="container">
<div class="hero-content">
<h1 class="hero-title">Entreprises &amp; Partenaires</h1>
<p class="hero-description">
                    Rejoignez un réseau dynamique d'entreprises engagées pour l'avenir des jeunes et le développement des compétences sur le territoire bordelais.
                </p>
</div>
</div>
</section>
<section class="pourquoi-section" id="devenir-partenaire">
<div class="container">
<div class="pourquoi-grid">
<div class="pourquoi-content">
<h2 class="section-title">Pourquoi devenir partenaire ?</h2>
<ul class="benefits-list">
<li class="benefit-item">
<div class="benefit-icon">💼</div>
<div class="benefit-text">
<h3 class="benefit-title">Contribuer à la formation des jeunes</h3>
<p>Participez activement à la transmission de savoirs et de compétences</p>
</div>
</li>
<li class="benefit-item">
<div class="benefit-icon">🔍</div>
<div class="benefit-text">
<h3 class="benefit-title">Repérer des talents</h3>
<p>Identifiez et recrutez les futurs talents de votre secteur</p>
</div>
</li>
<li class="benefit-item">
<div class="benefit-icon">⭐</div>
<div class="benefit-text">
<h3 class="benefit-title">Valoriser vos métiers</h3>
<p>Faites découvrir votre secteur d'activité et ses opportunités</p>
</div>
</li>
<li class="benefit-item">
<div class="benefit-icon">🤝</div>
<div class="benefit-text">
<h3 class="benefit-title">Participer à un réseau local</h3>
<p>Intégrez un réseau d'entreprises engagées sur le territoire</p>
</div>
</li>
<li class="benefit-item">
<div class="benefit-icon">📈</div>
<div class="benefit-text">
<h3 class="benefit-title">Soutenir l'attractivité de votre filière</h3>
<p>Contribuez au développement et à la visibilité de votre secteur</p>
</div>
</li>
</ul>
</div>
<div class="pourquoi-medef">
<img alt="MEDEF Gironde - Mouvement des Entreprises de France" src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/medef-gironde.png'); ?>"/>
</div>
</div>
</div>
</section>
<section class="comment-section" id="comment">
<div class="container">
<h2 class="section-title">Comment devenir partenaire ?</h2>
<div class="comment-grid">
<div class="comment-card">
<h3 class="comment-title">Accueillir des stagiaires</h3>
<p class="comment-text">Proposez des PFMP et stages pour former les jeunes de votre secteur</p>
</div>
<div class="comment-card">
<h3 class="comment-title">Participer à des interventions</h3>
<p class="comment-text">Intervenez dans les établissements pour présenter vos métiers</p>
</div>
<div class="comment-card">
<h3 class="comment-title">Ouvrir vos portes</h3>
<p class="comment-text">Organisez des visites d'entreprise et découverte de vos activités</p>
</div>
<div class="comment-card">
<h3 class="comment-title">Co-construire des projets</h3>
<p class="comment-text">Développez des projets pédagogiques innovants avec les établissements</p>
</div>
</div>
<div class="cta-buttons">
<a class="btn btn-primary" href="#contact">Contactez-nous pour en savoir plus</a>
</div>
</div>
</section>
<section class="partenaires-section" id="carte-partenaires">
<div class="container">
<h2 class="section-title">Carte des entreprises partenaires</h2>
<p class="section-subtitle">Découvrez les entreprises engagées avec le CLEE Bordeaux Avenir</p>
<div class="filtre-container">
<button class="filtre-btn active" data-filter="all">Tous les secteurs</button>
<button class="filtre-btn" data-filter="industrie">Industrie</button>
<button class="filtre-btn" data-filter="numerique">Numérique</button>
<button class="filtre-btn" data-filter="tertiaire">Tertiaire</button>
<button class="filtre-btn" data-filter="batiment">Bâtiment</button>
</div>
<div class="partenaires-grid">
<div class="partenaire-card" data-sector="industrie">
<div class="partenaire-image">
<img alt="Entreprise Industrie" src="https://picsum.photos/400/250?random=10"/>
<div class="partenaire-badge">Industrie</div>
</div>
<div class="partenaire-content">
<h3 class="partenaire-title">Entreprise Industrie</h3>
<p class="partenaire-activity"><strong>Activité :</strong> Fabrication industrielle</p>
<p class="partenaire-engagement"><strong>Type d'engagement :</strong> Accueil de stagiaires, Interventions</p>
<p class="partenaire-contact"><strong>Contact :</strong> contact@entreprise-industrie.fr</p>
<a class="partenaire-cta" href="#contact">Contacter →</a>
</div>
</div>
<div class="partenaire-card" data-sector="numerique">
<div class="partenaire-image">
<img alt="Tech Solutions" src="https://picsum.photos/400/250?random=11"/>
<div class="partenaire-badge">Numérique</div>
</div>
<div class="partenaire-content">
<h3 class="partenaire-title">Tech Solutions</h3>
<p class="partenaire-activity"><strong>Activité :</strong> Solutions informatiques</p>
<p class="partenaire-engagement"><strong>Type d'engagement :</strong> Projets pédagogiques, Visites d'entreprise</p>
<p class="partenaire-contact"><strong>Contact :</strong> contact@techsolutions.fr</p>
<a class="partenaire-cta" href="#contact">Contacter →</a>
</div>
</div>
<div class="partenaire-card" data-sector="tertiaire">
<div class="partenaire-image">
<img alt="Cabinet Conseil" src="https://picsum.photos/400/250?random=12"/>
<div class="partenaire-badge">Tertiaire</div>
</div>
<div class="partenaire-content">
<h3 class="partenaire-title">Cabinet Conseil</h3>
<p class="partenaire-activity"><strong>Activité :</strong> Gestion administrative</p>
<p class="partenaire-engagement"><strong>Type d'engagement :</strong> Accueil de stagiaires</p>
<p class="partenaire-contact"><strong>Contact :</strong> contact@cabinet-conseil.fr</p>
<a class="partenaire-cta" href="#contact">Contacter →</a>
</div>
</div>
<div class="partenaire-card" data-sector="batiment">
<div class="partenaire-image">
<img alt="BTP Bordeaux" src="https://picsum.photos/400/250?random=13"/>
<div class="partenaire-badge">Bâtiment</div>
</div>
<div class="partenaire-content">
<h3 class="partenaire-title">BTP Bordeaux</h3>
<p class="partenaire-activity"><strong>Activité :</strong> Construction et rénovation</p>
<p class="partenaire-engagement"><strong>Type d'engagement :</strong> Accueil de stagiaires, Interventions</p>
<p class="partenaire-contact"><strong>Contact :</strong> contact@btpbordeaux.fr</p>
<a class="partenaire-cta" href="#contact">Contacter →</a>
</div>
</div>
<div class="partenaire-card" data-sector="numerique">
<div class="partenaire-image">
<img alt="Digital Hub" src="https://picsum.photos/400/250?random=14"/>
<div class="partenaire-badge">Numérique</div>
</div>
<div class="partenaire-content">
<h3 class="partenaire-title">Digital Hub</h3>
<p class="partenaire-activity"><strong>Activité :</strong> Développement web</p>
<p class="partenaire-engagement"><strong>Type d'engagement :</strong> Projets pédagogiques, Accueil de stagiaires</p>
<p class="partenaire-contact"><strong>Contact :</strong> contact@digitalhub.fr</p>
<a class="partenaire-cta" href="#contact">Contacter →</a>
</div>
</div>
<div class="partenaire-card" data-sector="industrie">
<div class="partenaire-image">
<img alt="Manufacture Tech" src="https://picsum.photos/400/250?random=15"/>
<div class="partenaire-badge">Industrie</div>
</div>
<div class="partenaire-content">
<h3 class="partenaire-title">Manufacture Tech</h3>
<p class="partenaire-activity"><strong>Activité :</strong> Automation et robotique</p>
<p class="partenaire-engagement"><strong>Type d'engagement :</strong> Visites d'entreprise, Interventions</p>
<p class="partenaire-contact"><strong>Contact :</strong> contact@manufacturetech.fr</p>
<a class="partenaire-cta" href="#contact">Contacter →</a>
</div>
</div>
</div>
</div>
</section>
<section class="temoignages-section" id="temoignages">
<div class="container">
<h2 class="section-title">Témoignages</h2>
<p class="section-subtitle">Les entreprises du bassin Bordeaux Avenir partagent leur expérience, leurs motivations et les bénéfices concrets de leur engagement aux côtés du CLEE.</p>
<div class="temoignages-grid">
<div class="temoignage-card">
<div class="temoignage-quote">"</div>
<p class="temoignage-text">Accueillir des stagiaires nous permet de préparer nos futurs recrutements.</p>
<div class="temoignage-author">
<strong>Entreprise X</strong>
<span>Secteur Industrie</span>
</div>
</div>
<div class="temoignage-card">
<div class="temoignage-quote">"</div>
<p class="temoignage-text">Nous avons découvert des talents inattendus et renforcé notre responsabilité sociale.</p>
<div class="temoignage-author">
<strong>Entreprise Y</strong>
<span>Secteur Numérique</span>
</div>
</div>
<div class="temoignage-card">
<div class="temoignage-quote">"</div>
<p class="temoignage-text">Le CLEE facilite les échanges avec les lycées : c'est un vrai gain de temps.</p>
<div class="temoignage-author">
<strong>Entreprise Z</strong>
<span>Secteur Tertiaire</span>
</div>
</div>
</div>
<div class="cta-buttons">
<a class="btn btn-primary" href="#contact">Contactez-nous pour en savoir plus</a>
</div>
</div>
</section>
<section class="guides-section" id="guides-ressources">
<div class="container">
<h2 class="section-title">Guides &amp; ressources pratiques</h2>
<p class="section-subtitle">Retrouvez ici tous les documents utiles pour faciliter la collaboration école–entreprise : guides, procédures, modèles et supports administratifs.</p>
<div class="guides-grid">
<div class="guide-card">
<h3 class="guide-title">Guide d'accueil du tuteur</h3>
<p class="guide-description">Guide complet pour accompagner un élève en PFMP</p>
<a class="guide-download" href="#">Télécharger (PDF)</a>
</div>
<div class="guide-card">
<h3 class="guide-title">Modèle de convention</h3>
<p class="guide-description">Convention type pour l'accueil de stagiaires</p>
<a class="guide-download" href="#">Télécharger (PDF)</a>
</div>
<div class="guide-card">
<h3 class="guide-title">Les différents types de stage</h3>
<p class="guide-description">Comprendre PFMP, stages et contrats d'apprentissage</p>
<a class="guide-download" href="#">Télécharger (PDF)</a>
</div>
<div class="guide-card">
<h3 class="guide-title">Guide entreprise</h3>
<p class="guide-description">Comprendre le lycée professionnel et ses spécificités</p>
<a class="guide-download" href="#">Télécharger (PDF)</a>
</div>
<div class="guide-card">
<h3 class="guide-title">Calendrier des PFMP</h3>
<p class="guide-description">Périodes de stages pour l'année en cours</p>
<a class="guide-download" href="#">Télécharger (PDF)</a>
</div>
</div>
</div>
</section>
<section class="liens-section" id="liens-utiles">
<div class="container">
<h2 class="section-title">Liens utiles</h2>
<p class="section-subtitle">Déposez vos offres de PFMP, stages ou contrats d'apprentissage pour permettre aux jeunes du bassin de découvrir vos métiers et intégrer votre entreprise.</p>
<div class="liens-grid">
<a class="lien-card" href="https://www.1jeune1solution.gouv.fr/" target="_blank">
<h3 class="lien-title">1jeune1solution</h3>
<p class="lien-description">Plateforme nationale pour déposer vos offres d'emploi, stages et alternances</p>
<span class="lien-cta">Accéder au site →</span>
</a>
<a class="lien-card" href="https://www.lapprenti.com/" target="_blank">
<h3 class="lien-title">L'Apprenti</h3>
<p class="lien-description">Site dédié à l'apprentissage et aux formations en alternance</p>
<span class="lien-cta">Accéder au site →</span>
</a>
<a class="lien-card" href="https://www.alternance.emploi.gouv.fr/" target="_blank">
<h3 class="lien-title">Portail de l'Alternance</h3>
<p class="lien-description">Informations et ressources sur les contrats d'alternance</p>
<span class="lien-cta">Accéder au site →</span>
</a>
<a class="lien-card" href="https://www.nouvelle-aquitaine.fr/" target="_blank">
<h3 class="lien-title">Région Nouvelle-Aquitaine</h3>
<p class="lien-description">Dispositifs et aides régionales pour les entreprises</p>
<span class="lien-cta">Accéder au site →</span>
</a>
</div>
</div>
</section>
<section class="cta-section" id="contact">
<div class="container">
<h2 class="cta-title">Rejoignez notre réseau !</h2>
<p class="cta-text">
                Ensemble, nous créons des opportunités pour les jeunes et du potentiel pour votre entreprise. 
                Contactez-nous dès maintenant pour en savoir plus sur les modalités de partenariat.
            </p>
<div class="cta-buttons">
<a class="btn btn-primary" href="#contact">Contactez-nous</a>
</div>
</div>
</section>
<?php get_footer(); ?>
