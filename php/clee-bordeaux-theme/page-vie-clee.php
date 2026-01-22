<?php get_header(); ?>
<?php clee_breadcrumb([
    ['title' => 'Accueil', 'url' => home_url('/')],
    ['title' => 'Vie du CLÉE']
]); ?>
<section class="hero-vie-clee">
<div class="container">
<div class="hero-content">
<h1 class="hero-title">Vie du CLÉE</h1>
<p class="hero-description">
                                        Découvrez les derniers événements, actualités et initiatives qui animent notre communauté. 
                                        Le CLÉE est un réseau vivant qui connecte étudiants, écoles et entreprises.
                                </p>
</div>
</div>
</section>
<section class="evenements-section" id="evenements">
<div class="container">
<div class="section-header">
<h2 class="section-title">Derniers Événements</h2>
<?php get_header(); ?>
<?php clee_breadcrumb([
  ['title' => 'Accueil', 'url' => home_url('/')],
  ['title' => 'Vie du CLEE']
]); ?>
<section class="hero-vie-clee">
<div class="container">
<div class="hero-content">
<h1 class="hero-title">Vie du CLEE</h1>
<p class="hero-description">
                    Découvrez les derniers événements, actualités et initiatives qui animent notre communauté. 
                    Le CLEE est un réseau vivant qui connecte étudiants, écoles et entreprises.
                </p>
</div>
</div>
</section>
<section class="evenements-section" id="evenements">
<div class="container">
<div class="section-header">
<h2 class="section-title">Derniers Événements</h2>
<p class="section-subtitle">Découvrez les événements passés et à venir organisés par le CLEE</p>
</div>
<div class="evenements-grid" id="evenements-grid">
<!-- Les événements seront chargés dynamiquement depuis agenda.js -->
</div>
<div class="section-action">
<a href="<?php echo esc_url(get_permalink(get_page_by_path('agenda'))); ?>" class="btn btn-outline btn-large">Voir l'agenda complet</a>
</div>
</div>
</section>
<section class="blog-section" id="blog">
<div class="container">
<div class="section-header">
<h2 class="section-title">Blog &amp; Actualités</h2>
<p class="section-subtitle">Articles, témoignages et retours d'expérience de notre communauté</p>
</div>
<div class="blog-grid">
<article class="blog-card">
<div class="blog-image">
<img alt="Article blog" src="https://picsum.photos/600/350?random=5"/>
<div class="blog-category">Témoignage</div>
</div>
<div class="blog-content">
<div class="blog-meta">
<span class="blog-date">12 Janvier 2026</span>
<span class="blog-author">Par Sophie Martin</span>
</div>
<h3 class="blog-title">Mon alternance chez Thales : une expérience enrichissante</h3>
<p class="blog-excerpt">
                            Découvrez le témoignage de Sophie, étudiante en informatique, qui partage son expérience 
                            d'alternance dans une grande entreprise de défense et de sécurité...
                        </p>
<a class="blog-link" href="#">Lire la suite →</a>
</div>
</article>
<article class="blog-card">
<div class="blog-image">
<img alt="Article blog" src="https://picsum.photos/600/350?random=6"/>
<div class="blog-category">Conseils</div>
</div>
<div class="blog-content">
<div class="blog-meta">
<span class="blog-date">08 Janvier 2026</span>
<span class="blog-author">Par L'équipe CLEE</span>
</div>
<h3 class="blog-title">5 conseils pour réussir son entretien d'embauche</h3>
<p class="blog-excerpt">
                            L'entretien d'embauche est une étape cruciale dans votre recherche de stage ou d'alternance. 
                            Découvrez nos meilleurs conseils pour faire la différence...
                        </p>
<a class="blog-link" href="#">Lire la suite →</a>
</div>
</article>
<article class="blog-card">
<div class="blog-image">
<img alt="Article blog" src="https://picsum.photos/600/350?random=7"/>
<div class="blog-category">Partenariat</div>
</div>
<div class="blog-content">
<div class="blog-meta">
<span class="blog-date">05 Janvier 2026</span>
<span class="blog-author">Par Jean Dupont</span>
</div>
<h3 class="blog-title">Nouveau partenariat avec Cap Gemini</h3>
<p class="blog-excerpt">
                            Le CLEE Bordeaux Avenir est fier d'annoncer un nouveau partenariat stratégique avec Cap Gemini, 
                            offrant de nouvelles opportunités pour nos étudiants...
                        </p>
<a class="blog-link" href="#">Lire la suite →</a>
</div>
</article>
<article class="blog-card">
<div class="blog-image">
<img alt="Article blog" src="https://picsum.photos/600/350?random=8"/>
<div class="blog-category">Guide</div>
</div>
<div class="blog-content">
<div class="blog-meta">
<span class="blog-date">28 Décembre 2025</span>
<span class="blog-author">Par Marie Leclerc</span>
</div>
<h3 class="blog-title">Alternance vs Stage : Comment choisir ?</h3>
<p class="blog-excerpt">
                            Vous hésitez entre un stage et une alternance ? Nous vous aidons à y voir plus clair 
                            avec ce guide complet qui compare les deux formules...
                        </p>
<a class="blog-link" href="#">Lire la suite →</a>
</div>
</article>
<article class="blog-card">
<div class="blog-image">
<img alt="Article blog" src="https://picsum.photos/600/350?random=9"/>
<div class="blog-category">Événement</div>
</div>
<div class="blog-content">
<div class="blog-meta">
<span class="blog-date">20 Décembre 2025</span>
<span class="blog-author">Par L'équipe CLEE</span>
</div>
<h3 class="blog-title">Retour sur le Hackathon Étudiants-Entreprises</h3>
<p class="blog-excerpt">
                            Plus de 100 participants pour la 2ème édition de notre hackathon. Découvrez les projets 
                            gagnants et les moments forts de cet événement...
                        </p>
<a class="blog-link" href="#">Lire la suite →</a>
</div>
</article>
<article class="blog-card">
<div class="blog-image">
<img alt="Article blog" src="https://picsum.photos/600/350?random=10"/>
<div class="blog-category">Témoignage</div>
</div>
<div class="blog-content">
<div class="blog-meta">
<span class="blog-date">15 Décembre 2025</span>
<span class="blog-author">Par Thomas Bernard</span>
</div>
<h3 class="blog-title">De stagiaire à CDI : Mon parcours chez Ubisoft</h3>
<p class="blog-excerpt">
                            Thomas nous raconte comment son stage de fin d'études chez Ubisoft s'est transformé 
                            en proposition de CDI. Un parcours inspirant...
                        </p>
<a class="blog-link" href="#">Lire la suite →</a>
</div>
</article>
</div>
<div class="blog-cta">
<button class="btn btn-outline btn-large">Voir tous les articles</button>
</div>
</div>
</section>
<section class="contact-cta-section">
<div class="container">
<div class="contact-cta-card">
<div class="contact-cta-content">
<h2 class="contact-cta-title">Contactez le CLEE</h2>
<p class="contact-cta-description">
                        Une question ? Une suggestion ? Vous souhaitez organiser un événement ou proposer un partenariat ? 
                        Notre équipe est à votre écoute et se fera un plaisir de vous accompagner dans vos projets.
                    </p>
<div class="contact-cta-features">
<div class="feature-item">
<div class="feature-icon">📧</div>
<div class="feature-text">
<h4>Email</h4>
<p>contact@clee-bordeaux.fr</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon">📞</div>
<div class="feature-text">
<h4>Téléphone</h4>
<p>05 56 XX XX XX</p>
</div>
</div>
<div class="feature-item">
<div class="feature-icon">📍</div>
<div class="feature-text">
<h4>Adresse</h4>
<p>Bordeaux, Nouvelle-Aquitaine</p>
</div>
</div>
</div>
</div>
<div class="contact-cta-action">
<button class="btn btn-primary btn-large btn-contact" id="contactBtn">
<span class="btn-icon">✉️</span>
<span class="btn-text">Nous contacter</span>
</button>
<p class="contact-note">Nous vous répondrons sous 48h</p>
</div>
</div>
</div>
</section>
<div class="modal" id="contactModal">
<div class="modal-overlay"></div>
<div class="modal-container">
<div class="modal-header">
<h2 class="modal-title">Contactez-nous</h2>
<button aria-label="Fermer la modale" class="modal-close">
<span>×</span>
</button>
</div>
<div class="modal-body">
<p class="modal-description">
                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                </p>
<form class="contact-form" id="contactForm">
<div class="form-row">
<div class="form-group">
<label class="form-label" for="firstName">Prénom <span class="required">*</span></label>
<input class="form-input" id="firstName" name="firstName" placeholder="Votre prénom" required="" type="text"/>
</div>
<div class="form-group">
<label class="form-label" for="lastName">Nom <span class="required">*</span></label>
<input class="form-input" id="lastName" name="lastName" placeholder="Votre nom" required="" type="text"/>
</div>
</div>
<div class="form-row">
<div class="form-group">
<label class="form-label" for="email">Email <span class="required">*</span></label>
<input class="form-input" id="email" name="email" placeholder="votre.email@exemple.com" required="" type="email"/>
</div>
<div class="form-group">
<label class="form-label" for="phone">Téléphone</label>
<input class="form-input" id="phone" name="phone" placeholder="06 12 34 56 78" type="tel"/>
</div>
</div>
<div class="form-group">
<label class="form-label" for="subject">Objet <span class="required">*</span></label>
<select class="form-select" id="subject" name="subject" required="">
<option value="">Sélectionnez un objet</option>
<option value="partenariat">Proposition de partenariat</option>
<option value="evenement">Organisation d'événement</option>
<option value="stage">Recherche de stage/alternance</option>
<option value="information">Demande d'information</option>
<option value="autre">Autre</option>
</select>
</div>
<div class="form-group">
<label class="form-label" for="message">Message <span class="required">*</span></label>
<textarea class="form-textarea" id="message" name="message" placeholder="Décrivez votre demande..." required="" rows="6"></textarea>
</div>
<div class="form-footer">
<button class="btn btn-primary btn-large btn-submit" type="submit">
<span class="btn-icon">📨</span>
<span class="btn-text">Envoyer le message</span>
</button>
<p class="form-note">* Champs obligatoires</p>
</div>
</form>
<div class="form-message success" id="formSuccess" style="display: none;">
<div class="message-icon">✅</div>
<h3 class="message-title">Message envoyé !</h3>
<p class="message-text">Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
</div>
<div class="form-message error" id="formError" style="display: none;">
<div class="message-icon">❌</div>
<h3 class="message-title">Erreur</h3>
<p class="message-text">Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.</p>
</div>
</div>
</div>
</div>
<?php get_footer(); ?>
