/**
 * colors-reference.js
 * Gestion interactive de la palette de couleurs CLEE Bordeaux
 */

const ColorManager = (() => {
    // Couleurs par défaut (définies dans colors-reference.html inline)
    const DEFAULT_COLORS = {
        'primary-900': '#1F3448',
        'primary-500': '#5E7E9F',
        'primary-50': '#E5F0FF',
        'grey-900': '#333333',
        'orange': '#FF6B35',
        'cyan': '#00A7E1',
        'green': '#5CB85C',
        'red': '#E74C3C',
        'yellow': '#FFB84D'
    };

    let currentColors = { ...DEFAULT_COLORS };
    let modificationsCount = 0;

    /**
     * Convertir HEX en RGB
     */
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    };

    /**
     * Mettre à jour le badge "Modifié"
     */
    const updateModifiedBadge = () => {
        const badge = document.getElementById('modifiedBadge');
        if (badge) {
            if (modificationsCount > 0) {
                badge.style.display = 'inline-block';
                badge.textContent = `${modificationsCount} modification${modificationsCount > 1 ? 's' : ''}`;
            } else {
                badge.style.display = 'none';
            }
        }
    };

    /**
     * Charger les couleurs depuis localStorage
     */
    const loadColorsFromStorage = () => {
        const stored = localStorage.getItem('cleeCustomColors');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                currentColors = { ...DEFAULT_COLORS, ...parsed };
                modificationsCount = Object.keys(parsed).filter(key => 
                    parsed[key] !== DEFAULT_COLORS[key]
                ).length;
            } catch (e) {
                console.error('Erreur lors du chargement des couleurs:', e);
            }
        }
    };

    /**
     * Sauvegarder les couleurs dans localStorage
     */
    const saveColorsToStorage = () => {
        const modifications = {};
        
        Object.keys(currentColors).forEach(key => {
            if (currentColors[key] !== DEFAULT_COLORS[key]) {
                modifications[key] = currentColors[key];
            }
        });

        if (Object.keys(modifications).length > 0) {
            localStorage.setItem('cleeCustomColors', JSON.stringify(modifications));
        } else {
            localStorage.removeItem('cleeCustomColors');
        }
        
        modificationsCount = Object.keys(modifications).length;
        updateModifiedBadge();
    };

    /**
     * Initialisation du module
     */
    const init = () => {
        loadColorsFromStorage();
        attachColorPickerListeners();
        updateAllColors();
    };

    /**
     * Attacher les listeners aux color pickers
     */
    const attachColorPickerListeners = () => {
        document.querySelectorAll('.color-picker').forEach(picker => {
            const colorKey = picker.dataset.colorKey;
            
            // Initialiser la valeur du picker
            picker.value = currentColors[colorKey] || DEFAULT_COLORS[colorKey];
            
            // Écouter les changements
            picker.addEventListener('input', (e) => {
                updateColor(colorKey, e.target.value);
            });
        });
    };

    /**
     * Mettre à jour une couleur spécifique
     */
    const updateColor = (colorKey, newValue) => {
        currentColors[colorKey] = newValue;
        applyColorToPage(colorKey, newValue);
        applyColorToPreview(colorKey, newValue);
        saveColorsToStorage();
    };

    /**
     * Appliquer une couleur sur la page
     */
    const applyColorToPage = (colorKey, color) => {
        // Mise à jour de la carte de couleur
        const card = document.querySelector(`[data-color="${colorKey}"]`);
        if (card) {
            const swatch = card.querySelector('.color-swatch');
            if (swatch) {
                swatch.style.background = color;
                
                // Ajuster la couleur du texte selon la luminosité
                const rgb = hexToRgb(color);
                const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
                swatch.style.color = brightness > 128 ? '#1F3448' : 'white';
            }
            
            const hexCode = card.querySelector('.color-code');
            if (hexCode) {
                hexCode.textContent = `HEX: ${color.toUpperCase()}`;
            }

            const rgbCode = card.querySelectorAll('.color-code')[1];
            if (rgbCode) {
                const rgb = hexToRgb(color);
                rgbCode.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
            }
        }
    };

    /**
     * Appliquer les couleurs au panel de prévisualisation
     */
    const applyColorToPreview = (colorKey, color) => {
        const preview = document.querySelector('.preview-panel');
        if (!preview) return;

        // Mapper les clés vers les variables CSS
        const varMapping = {
            'primary-900': '--primary-900',
            'primary-500': '--primary-500',
            'primary-50': '--primary-50',
            'grey-900': '--grey-900',
            'orange': '--primary-orange',
            'cyan': '--primary-cyan',
            'green': '--primary-green',
            'red': '--primary-red',
            'yellow': '--primary-yellow'
        };

        const cssVar = varMapping[colorKey];
        if (cssVar) {
            preview.style.setProperty(cssVar, color);
        }
    };

    /**
     * Appliquer toutes les couleurs
     */
    const updateAllColors = () => {
        Object.keys(currentColors).forEach(key => {
            applyColorToPage(key, currentColors[key]);
            applyColorToPreview(key, currentColors[key]);
        });
    };

    /**
     * Réinitialiser toutes les couleurs aux valeurs par défaut
     */
    const resetAllColors = () => {
        if (modificationsCount === 0) {
            showNotification('Aucune modification à réinitialiser.', 'info');
            return;
        }

        if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes les couleurs aux valeurs par défaut ?')) {
            // Réinitialiser les couleurs
            currentColors = { ...DEFAULT_COLORS };
            localStorage.removeItem('cleeCustomColors');
            modificationsCount = 0;

            // Réinitialiser les color pickers
            document.querySelectorAll('.color-picker').forEach(picker => {
                const colorKey = picker.dataset.colorKey;
                picker.value = DEFAULT_COLORS[colorKey];
            });

            // Réappliquer toutes les couleurs
            updateAllColors();
            updateModifiedBadge();
            
            // Notification
            showNotification('Couleurs réinitialisées avec succès !', 'success');
        }
    };

    /**
     * Générer le CSS personnalisé
     */
    const generateCSS = () => {
        const modifications = {};

        Object.keys(currentColors).forEach(key => {
            if (currentColors[key] !== DEFAULT_COLORS[key]) {
                modifications[key] = currentColors[key];
            }
        });

        if (Object.keys(modifications).length === 0) {
            return '/* Aucune modification personnalisée */';
        }

        let css = '/* Personnalisation de la palette CLEE Bordeaux */\n';
        css += '/* Généré le ' + new Date().toLocaleString('fr-FR') + ' */\n\n';
        
        // Variables CSS pour thème professionnel
        const proCss = [];
        if (modifications['primary-900']) proCss.push(`  --primary-900: ${modifications['primary-900']};`);
        if (modifications['primary-500']) proCss.push(`  --primary-500: ${modifications['primary-500']};`);
        if (modifications['primary-50']) proCss.push(`  --primary-50: ${modifications['primary-50']};`);
        if (modifications['grey-900']) proCss.push(`  --grey-900: ${modifications['grey-900']};`);

        if (proCss.length > 0) {
            css += ':root {\n' + proCss.join('\n') + '\n}\n\n';
        }

        // Variables CSS pour thème étudiant
        const studentCss = [];
        if (modifications['orange']) studentCss.push(`  --primary-orange: ${modifications['orange']};`);
        if (modifications['cyan']) studentCss.push(`  --primary-cyan: ${modifications['cyan']};`);
        if (modifications['green']) studentCss.push(`  --primary-green: ${modifications['green']};`);
        if (modifications['red']) studentCss.push(`  --primary-red: ${modifications['red']};`);
        if (modifications['yellow']) studentCss.push(`  --primary-yellow: ${modifications['yellow']};`);

        if (studentCss.length > 0) {
            css += '[data-theme="etudiant"] {\n' + studentCss.join('\n') + '\n}\n';
        }

        return css;
    };

    /**
     * Exporter le CSS dans la modal
     */
    const exportCSS = () => {
        const css = generateCSS();
        const modal = document.getElementById('exportModal');
        const pre = document.getElementById('exportedCSS');
        
        if (modal && pre) {
            pre.textContent = css;
            modal.classList.add('active');
        }
    };

    /**
     * Fermer la modal d'export
     */
    const closeExportModal = () => {
        const modal = document.getElementById('exportModal');
        if (modal) {
            modal.classList.remove('active');
        }
    };

    /**
     * Copier le CSS dans le presse-papier
     */
    const copyCSS = () => {
        const css = generateCSS();
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(css).then(() => {
                showNotification('CSS copié dans le presse-papier !', 'success');
            }).catch(err => {
                console.error('Erreur lors de la copie:', err);
                fallbackCopyCSS(css);
            });
        } else {
            fallbackCopyCSS(css);
        }
    };

    /**
     * Méthode de copie alternative
     */
    const fallbackCopyCSS = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            showNotification('CSS copié dans le presse-papier !', 'success');
        } catch (err) {
            console.error('Erreur lors de la copie:', err);
            alert('Impossible de copier automatiquement. Veuillez copier manuellement le contenu.');
        }
        
        document.body.removeChild(textarea);
    };

    /**
     * Afficher une notification temporaire
     */
    const showNotification = (message, type = 'success') => {
        const colors = {
            success: '#4CAF50',
            info: '#2196F3',
            warning: '#ff9800',
            error: '#f44336'
        };

        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type] || colors.success};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            font-weight: 600;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };

    /**
     * Basculer le thème de prévisualisation
     */
    const switchPreviewTheme = (theme) => {
        const preview = document.querySelector('.preview-panel');
        const buttons = document.querySelectorAll('.theme-toggle button');

        if (preview) {
            if (theme === 'etudiant') {
                preview.setAttribute('data-theme', 'etudiant');
            } else {
                preview.removeAttribute('data-theme');
            }
        }

        buttons.forEach(btn => btn.classList.remove('active'));
        event?.target?.classList.add('active');
    };

    /**
     * Basculer les dégradés
     */
    const toggleGradient = () => {
        const preview = document.querySelector('.preview-panel');
        const checkbox = document.getElementById('gradientToggle');
        
        if (preview && checkbox) {
            if (checkbox.checked) {
                preview.classList.remove('no-gradient');
            } else {
                preview.classList.add('no-gradient');
            }
        }
    };

    // API publique
    return {
        init,
        resetAllColors,
        exportCSS,
        closeExportModal,
        copyCSS,
        switchPreviewTheme,
        toggleGradient
    };
})();

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    ColorManager.init();
});

// Ajouter les animations CSS dynamiquement
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Exposer les fonctions globalement pour les onclick
window.resetAllColors = () => ColorManager.resetAllColors();
window.exportCSS = () => ColorManager.exportCSS();
window.closeExportModal = () => ColorManager.closeExportModal();
window.copyCSS = () => ColorManager.copyCSS();
window.switchPreviewTheme = (theme) => ColorManager.switchPreviewTheme(theme);
window.toggleGradient = () => ColorManager.toggleGradient();