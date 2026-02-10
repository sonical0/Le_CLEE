/* ==========================================
   PORTAIL.JS - Gestion des options d'accessibilité
   Système de persistance avec localStorage
   ========================================== */

const AccessibilityModule = (() => {
    const FONT_SIZE_KEY = 'clee_font_size';
    const HIGH_CONTRAST_KEY = 'clee_high_contrast';
    const REDUCE_MOTION_KEY = 'clee_reduce_motion';
    const THEME_KEY = 'clee_theme';
    
    // Niveaux de taille de police
    const FONT_SIZES = {
        small: { value: 0.9, label: 'Petit' },
        normal: { value: 1, label: 'Normal' },
        large: { value: 1.15, label: 'Grand' },
        xlarge: { value: 1.3, label: 'Très grand' }
    };
    
    let currentFontSizeLevel = 'normal';
    
    // Récupérer les préférences
    const getPreferences = () => {
        return {
            fontSize: localStorage.getItem(FONT_SIZE_KEY) || 'normal',
            highContrast: localStorage.getItem(HIGH_CONTRAST_KEY) === 'true',
            reduceMotion: localStorage.getItem(REDUCE_MOTION_KEY) === 'true',
            theme: localStorage.getItem(THEME_KEY) || 'etudiant'
        };
    };
    
    // Appliquer la taille de police
    const applyFontSize = (level) => {
        currentFontSizeLevel = level;
        const size = FONT_SIZES[level];
        document.documentElement.style.fontSize = `${size.value * 16}px`;
        localStorage.setItem(FONT_SIZE_KEY, level);
        
        // Mettre à jour l'affichage
        const valueDisplay = document.getElementById('font-size-value');
        if (valueDisplay) {
            valueDisplay.textContent = size.label;
        }
    };
    
    // Augmenter la taille de police
    const increaseFontSize = () => {
        const levels = Object.keys(FONT_SIZES);
        const currentIndex = levels.indexOf(currentFontSizeLevel);
        if (currentIndex < levels.length - 1) {
            applyFontSize(levels[currentIndex + 1]);
        }
    };
    
    // Diminuer la taille de police
    const decreaseFontSize = () => {
        const levels = Object.keys(FONT_SIZES);
        const currentIndex = levels.indexOf(currentFontSizeLevel);
        if (currentIndex > 0) {
            applyFontSize(levels[currentIndex - 1]);
        }
    };
    
    // Appliquer le contraste élevé
    const applyHighContrast = (enabled) => {
        if (enabled) {
            document.documentElement.classList.add('high-contrast');
        } else {
            document.documentElement.classList.remove('high-contrast');
        }
        localStorage.setItem(HIGH_CONTRAST_KEY, enabled);
        
        // Mettre à jour l'affichage
        const statusDisplay = document.getElementById('contrast-status');
        if (statusDisplay) {
            statusDisplay.textContent = enabled ? 'Activé' : 'Désactivé';
        }
    };
    
    // Réduire les animations
    const applyReduceMotion = (enabled) => {
        if (enabled) {
            document.documentElement.classList.add('reduce-motion');
        } else {
            document.documentElement.classList.remove('reduce-motion');
        }
        localStorage.setItem(REDUCE_MOTION_KEY, enabled);
        
        // Mettre à jour l'affichage
        const statusDisplay = document.getElementById('motion-status');
        if (statusDisplay) {
            statusDisplay.textContent = enabled ? 'Animations réduites' : 'Animations actives';
        }
    };
    
    // Changer de thème
    const applyTheme = (theme) => {
        localStorage.setItem(THEME_KEY, theme);
        
        // Mettre à jour l'affichage
        const statusDisplay = document.getElementById('theme-status');
        const themeToggle = document.getElementById('theme-toggle');
        
        if (theme === 'etudiant') {
            if (statusDisplay) statusDisplay.textContent = 'Thème Étudiant';
            if (themeToggle) themeToggle.checked = false;
        } else {
            if (statusDisplay) statusDisplay.textContent = 'Thème Professionnel';
            if (themeToggle) themeToggle.checked = true;
        }
        
        // Recharger la page pour appliquer le nouveau thème
        setTimeout(() => {
            window.location.reload();
        }, 300);
    };
    
    // Réinitialiser tous les paramètres
    const resetAll = () => {
        applyFontSize('normal');
        applyHighContrast(false);
        applyReduceMotion(false);
        
        // Réinitialiser le thème à étudiant
        localStorage.setItem(THEME_KEY, 'etudiant');
        
        // Réinitialiser les toggles
        const contrastToggle = document.getElementById('high-contrast-toggle');
        const motionToggle = document.getElementById('reduce-motion-toggle');
        const themeToggle = document.getElementById('theme-toggle');
        
        if (contrastToggle) contrastToggle.checked = false;
        if (motionToggle) motionToggle.checked = false;
        if (themeToggle) themeToggle.checked = false;
        
        // Feedback visuel
        const resetBtn = document.getElementById('reset-accessibility');
        if (resetBtn) {
            resetBtn.textContent = 'Paramètres réinitialisés ✓';
            setTimeout(() => {
                resetBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4V10H7M23 20V14H17M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14L18.36 18.36A9 9 0 0 1 3.51 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Réinitialiser les paramètres
                `;
            }, 2000);
        }
    };
    
    // Initialisation
    const init = () => {
        // Charger les préférences sauvegardées
        const prefs = getPreferences();
        
        applyFontSize(prefs.fontSize);
        applyHighContrast(prefs.highContrast);
        applyReduceMotion(prefs.reduceMotion);
        
        // Mettre à jour les toggles
        const contrastToggle = document.getElementById('high-contrast-toggle');
        const motionToggle = document.getElementById('reduce-motion-toggle');
        const themeToggle = document.getElementById('theme-toggle');
        
        if (contrastToggle) contrastToggle.checked = prefs.highContrast;
        if (motionToggle) motionToggle.checked = prefs.reduceMotion;
        if (themeToggle) themeToggle.checked = prefs.theme === 'professionnel';
        
        // Mettre à jour l'affichage du thème
        const themeStatus = document.getElementById('theme-status');
        if (themeStatus) {
            themeStatus.textContent = prefs.theme === 'etudiant' ? 'Thème Étudiant' : 'Thème Professionnel';
        }
        
        // Attacher les événements
        document.querySelectorAll('[data-action="increase-font"]').forEach(btn => {
            btn.addEventListener('click', increaseFontSize);
        });
        
        document.querySelectorAll('[data-action="decrease-font"]').forEach(btn => {
            btn.addEventListener('click', decreaseFontSize);
        });
        
        document.querySelectorAll('[data-action="toggle-contrast"]').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                applyHighContrast(e.target.checked);
            });
        });
        
        document.querySelectorAll('[data-action="toggle-motion"]').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                applyReduceMotion(e.target.checked);
            });
        });
        
        document.querySelectorAll('[data-action="toggle-theme"]').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const newTheme = e.target.checked ? 'professionnel' : 'etudiant';
                applyTheme(newTheme);
            });
        });
        
        const resetBtn = document.getElementById('reset-accessibility');
        if (resetBtn) {
            resetBtn.addEventListener('click', resetAll);
        }
    };
    
    return {
        init,
        applyFontSize,
        applyHighContrast,
        applyReduceMotion,
        getPreferences
    };
})();

// Initialiser le module au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    AccessibilityModule.init();
});
document.addEventListener('DOMContentLoaded', () => {
    PortailModule.init();
});
