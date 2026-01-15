<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <h1 class="hero-title">Contactez-nous</h1>
        <p class="hero-description">
            Vous avez une question, une proposition de partenariat ou besoin d'informations ? 
            Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
        </p>
    </div>
</section>

<!-- Contact Info Section -->
<section class="contact-info-section">
    <div class="container">
        <div class="contact-info-grid">
            <div class="contact-info-card">
                <div class="contact-icon">📧</div>
                <h3 class="contact-info-title">Email</h3>
                <p class="contact-info-text">contact@clee-bordeaux.fr</p>
                <p class="contact-info-note">Réponse sous 48h</p>
            </div>

            <div class="contact-info-card">
                <div class="contact-icon">📞</div>
                <h3 class="contact-info-title">Téléphone</h3>
                <p class="contact-info-text">05 56 00 00 00</p>
                <p class="contact-info-note">Lun-Ven 9h-17h</p>
            </div>

            <div class="contact-info-card">
                <div class="contact-icon">📍</div>
                <h3 class="contact-info-title">Adresse</h3>
                <p class="contact-info-text">Bordeaux, Gironde</p>
                <p class="contact-info-note">Nouvelle-Aquitaine</p>
            </div>
        </div>
    </div>
</section>

<!-- Contact Form Section -->
<section class="contact-form-section">
    <div class="container">
        <div class="form-container">
            <div class="form-header">
                <h2 class="form-title">Envoyez-nous un message</h2>
                <p class="form-description">
                    Remplissez les champs ci-dessous et nous vous répondrons rapidement.
                </p>
            </div>

            <form id="contactForm" class="contact-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName" class="form-label">Prénom <span class="required">*</span></label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            class="form-input" 
                            placeholder="Votre prénom"
                            required
                        >
                    </div>
                    
                    <div class="form-group">
                        <label for="lastName" class="form-label">Nom <span class="required">*</span></label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            class="form-input" 
                            placeholder="Votre nom"
                            required
                        >
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="email" class="form-label">Email <span class="required">*</span></label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            class="form-input" 
                            placeholder="votre.email@exemple.com"
                            required
                        >
                    </div>
                    
                    <div class="form-group">
                        <label for="phone" class="form-label">Téléphone</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            class="form-input" 
                            placeholder="06 12 34 56 78"
                        >
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="subject" class="form-label">Objet <span class="required">*</span></label>
                    <select id="subject" name="subject" class="form-select" required>
                        <option value="">Sélectionnez un objet</option>
                        <option value="partenariat">Proposition de partenariat</option>
                        <option value="evenement">Organisation d'événement</option>
                        <option value="stage">Recherche de stage/alternance</option>
                        <option value="information">Demande d'information</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="message" class="form-label">Message <span class="required">*</span></label>
                    <textarea 
                        id="message" 
                        name="message" 
                        class="form-textarea" 
                        rows="8" 
                        placeholder="Décrivez votre demande..."
                        required
                    ></textarea>
                </div>
                
                <div class="form-footer">
                    <button type="submit" class="btn btn-primary btn-large btn-submit">
                        <span class="btn-icon">📨</span>
                        <span class="btn-text">Envoyer le message</span>
                    </button>
                    <p class="form-note">* Champs obligatoires</p>
                </div>
            </form>
            
            <div id="formSuccess" class="form-message success" style="display: none;">
                <div class="message-icon">✅</div>
                <h3 class="message-title">Message envoyé !</h3>
                <p class="message-text">Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
            </div>
            
            <div id="formError" class="form-message error" style="display: none;">
                <div class="message-icon">❌</div>
                <h3 class="message-title">Erreur</h3>
                <p class="message-text">Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.</p>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
