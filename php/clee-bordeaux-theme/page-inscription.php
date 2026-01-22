<?php
/**
 * Template Name: Inscription
 */

get_header(); ?>

<!-- Main Content -->
<main class="auth-page">
    <div class="container">
        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-header">
                    <h1 class="auth-title">Créer un compte</h1>
                    <p class="auth-subtitle">Rejoignez la communauté CLEE Bordeaux Avenir</p>
                </div>

                <form class="auth-form" id="registerForm">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName" class="form-label">Prénom</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                class="form-input" 
                                placeholder="Prénom"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label for="lastName" class="form-label">Nom</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                class="form-input" 
                                placeholder="Nom"
                                required
                            >
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label">Adresse e-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            class="form-input" 
                            placeholder="exemple@email.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="userType" class="form-label">Type de compte</label>
                        <select id="userType" name="userType" class="form-input" required>
                            <option value="">Sélectionnez un type</option>
                            <option value="student">Étudiant / Jeune</option>
                            <option value="company">Entreprise</option>
                            <option value="establishment">Établissement</option>
                            <option value="parent">Parent</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="password" class="form-label">Mot de passe</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            class="form-input" 
                            placeholder="••••••••"
                            required
                        >
                        <small class="form-hint">Minimum 8 caractères</small>
                    </div>

                    <div class="form-group">
                        <label for="confirmPassword" class="form-label">Confirmer le mot de passe</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            class="form-input" 
                            placeholder="••••••••"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label class="checkbox-label">
                            <input type="checkbox" name="terms" required>
                            <span>J'accepte les <a href="<?php echo esc_url(home_url('/mentions-legales/')); ?>" class="auth-link">conditions d'utilisation</a></span>
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-large btn-full">
                        <span class="btn-text">S'inscrire</span>
                    </button>

                    <div class="auth-divider">
                        <span>ou</span>
                    </div>

                    <div class="auth-footer">
                        <p>Déjà un compte ? <a href="<?php echo esc_url(home_url('/connexion/')); ?>" class="auth-link">Se connecter</a></p>
                    </div>
                </form>
            </div>

            <div class="auth-info">
                <h2 class="info-title">Rejoignez le CLEE</h2>
                <ul class="info-list">
                    <li>
                        <strong>Pour les étudiants</strong>
                        <p>Trouvez des stages, alternances et opportunités professionnelles</p>
                    </li>
                    <li>
                        <strong>Pour les entreprises</strong>
                        <p>Publiez vos offres et connectez-vous avec les talents de demain</p>
                    </li>
                    <li>
                        <strong>Pour les établissements</strong>
                        <p>Gérez vos formations et collaborez avec les partenaires</p>
                    </li>
                    <li>
                        <strong>Pour les parents</strong>
                        <p>Suivez les opportunités et l'orientation de vos enfants</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
