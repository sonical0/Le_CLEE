/* ==========================================
   PORTAIL.JS - Gestion de la sélection de profil
   Système de persistance avec localStorage
   ========================================== */

const PortailModule = (() => {
    const STORAGE_KEY = 'clee_user_profile';
    const THEME_KEY = 'clee_theme';
    
    // Récupérer le profil actuel
    const getProfile = () => {
        return localStorage.getItem(STORAGE_KEY);
    };
    
    // Enregistrer le profil
    const setProfile = (profile) => {
        localStorage.setItem(STORAGE_KEY, profile);
        if (profile === 'etudiant') {
            localStorage.setItem(THEME_KEY, 'etudiant');
        } else {
            localStorage.setItem(THEME_KEY, 'professionnel');
        }
    };
    
    // Rediriger vers l'accueil avec le thème appliqué
    const redirectToHome = () => {
        window.location.href = '../index.html';
    };
    
    // Gérer la sélection de profil
    const handleProfileSelection = (profile) => {
        // Animation de confirmation
        const card = document.querySelector(`[data-profile="${profile}"]`);
        card.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            setProfile(profile);
            
            // Feedback visuel
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 0 30px rgba(76, 175, 80, 0.6)';
            
            // Redirection après animation
            setTimeout(redirectToHome, 500);
        }, 200);
    };
    
    // Initialisation
    const init = () => {
        // Vérifier si l'utilisateur a déjà un profil
        const currentProfile = getProfile();
        
        // Si on est sur la page portail et qu'un profil existe déjà
        if (currentProfile && window.location.pathname.includes('portail.html')) {
            // Permettre de changer de profil depuis le portail
            console.log('Profil actuel:', currentProfile);
        }
        
        // Attacher les événements aux boutons
        const profileButtons = document.querySelectorAll('.btn-profile');
        profileButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const profile = button.getAttribute('data-profile');
                handleProfileSelection(profile);
            });
        });
        
        // Permettre le clic sur toute la carte
        const profileCards = document.querySelectorAll('.profile-card');
        profileCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Ne pas déclencher si on clique sur le bouton
                if (!e.target.closest('.btn-profile')) {
                    const profile = card.getAttribute('data-profile');
                    handleProfileSelection(profile);
                }
            });
        });
        
        // Effet de survol amélioré
        profileCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    };
    
    return {
        init,
        getProfile,
        setProfile
    };
})();

// Initialiser le module au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    PortailModule.init();
});
