<?php
/**
 * Template Name: Connexion
 */

get_header(); ?>

<!-- Main Content -->
<main class="auth-page">
    <div class="container">
        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-header">
                    <h1 class="auth-title">Connexion</h1>
                    <p class="auth-subtitle">Accédez à votre espace personnel</p>
                </div>

                <form class="auth-form" id="loginForm">
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
                        <label for="password" class="form-label">Mot de passe</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            class="form-input" 
                            placeholder="••••••••"
                            required
                        >
                    </div>

                    <div class="form-options">
                        <label class="checkbox-label">
                            <input type="checkbox" name="remember">
                            <span>Se souvenir de moi</span>
                        </label>
                        <a href="#" class="auth-link">Mot de passe oublié ?</a>
                    </div>

                    <button type="submit" class="btn btn-primary btn-large btn-full">
                        <span class="btn-text">Se connecter</span>
                    </button>

                    <div class="auth-divider">
                        <span>ou</span>
                    </div>

                    <div class="auth-footer">
                        <p>Pas encore de compte ? <a href="<?php echo esc_url(home_url('/inscription/')); ?>" class="auth-link">S'inscrire</a></p>
                    </div>
                </form>
            </div>

            <div class="auth-info">
                <h2 class="info-title">Pourquoi créer un compte ?</h2>
                <ul class="info-list">
                    <li>
                        <strong>Accès aux offres</strong>
                        <p>Consultez les offres de stages et d'alternance en exclusivité</p>
                    </li>
                    <li>
                        <strong>Gestion de profil</strong>
                        <p>Créez et gérez votre profil professionnel</p>
                    </li>
                    <li>
                        <strong>Événements</strong>
                        <p>Inscrivez-vous aux événements et forums organisés par le CLEE</p>
                    </li>
                    <li>
                        <strong>Réseau</strong>
                        <p>Connectez-vous avec des entreprises et des établissements partenaires</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
