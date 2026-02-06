const originalColors = {};
const modifiedColors = new Set();
let root;

function rgbaToHex(rgba) {
    if (rgba.startsWith('#')) return rgba;
    
    const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (!match) return rgba;
    
    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);
    
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
}

function updateModifiedBadge() {
    const badge = document.getElementById('modifiedBadge');
    if (badge) {
        if (modifiedColors.size > 0) {
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    root = document.documentElement;
    const rootStyles = getComputedStyle(root);
    
    const getCSSVar = (varName) => {
        const value = rootStyles.getPropertyValue(varName).trim();
        return value;
    };
    
    const updateColorCard = (cardElement, cssVar, displayName, colorValue = null) => {
        if (!colorValue) {
            colorValue = getCSSVar(cssVar);
        }
        if (!colorValue) return;
        
        if (!originalColors[cssVar]) {
            originalColors[cssVar] = colorValue;
        }
        
        const swatch = cardElement.querySelector('.color-swatch');
        const nameElement = cardElement.querySelector('.color-name');
        const codesElement = cardElement.querySelector('.color-codes');
        const colorInfo = cardElement.querySelector('.color-info');
        
        if (swatch) {
            swatch.style.background = colorValue;
            
            const isLight = colorValue.includes('255') || colorValue.includes('#E') || colorValue.includes('#F');
            swatch.style.color = isLight ? '#1F3448' : 'white';
        }
        
        if (nameElement) {
            nameElement.textContent = displayName;
        }
        
        if (codesElement) {
            const hex = rgbaToHex(colorValue);
            codesElement.innerHTML = `
                <span class="color-code">CSS Var: ${cssVar}</span>
                <span class="color-code">HEX: ${hex}</span>
                <span class="color-code">Value: ${colorValue}</span>
            `;
        }
        
        if (colorInfo && !colorInfo.querySelector('.color-picker-container')) {
            const pickerContainer = document.createElement('div');
            pickerContainer.className = 'color-picker-container';
            pickerContainer.innerHTML = `
                <span class="color-picker-label">Expérimenter:</span>
                <input type="color" class="color-picker" value="${rgbaToHex(colorValue)}" 
                       data-css-var="${cssVar}" data-card-selector="${getCardSelector(cardElement)}">
            `;
            colorInfo.appendChild(pickerContainer);
            
            const picker = pickerContainer.querySelector('.color-picker');
            picker.addEventListener('input', (e) => {
                const newColor = e.target.value;
                swatch.style.background = newColor;
                
                codesElement.innerHTML = `
                    <span class="color-code">CSS Var: ${cssVar}</span>
                    <span class="color-code">HEX: ${newColor}</span>
                    <span class="color-code">Value: ${newColor}</span>
                `;
                
                root.style.setProperty(cssVar, newColor);
                
                const previewPanel = document.querySelector('.preview-panel');
                if (previewPanel) {
                    previewPanel.style.setProperty(cssVar, newColor);
                }
                
                modifiedColors.add(cssVar);
                updateModifiedBadge();
            });
        }
    };
    
    const getCardSelector = (cardElement) => {
        const parent = cardElement.closest('.theme-section');
        const parentIndex = Array.from(document.querySelectorAll('.theme-section')).indexOf(parent) + 1;
        const cardIndex = Array.from(parent.querySelectorAll('.color-card')).indexOf(cardElement) + 1;
        return `.theme-section:nth-of-type(${parentIndex}) .color-card:nth-of-type(${cardIndex})`;
    };
    
    const proColors = [
        { selector: '.theme-section:nth-of-type(1) .color-card:nth-of-type(1)', var: '--primary-900', name: 'Couleur 1' },
        { selector: '.theme-section:nth-of-type(1) .color-card:nth-of-type(2)', var: '--primary-500', name: 'Couleur 2' },
        { selector: '.theme-section:nth-of-type(1) .color-card:nth-of-type(3)', var: '--primary-50', name: 'Couleur 3' },
        { selector: '.theme-section:nth-of-type(1) .color-card:nth-of-type(4)', var: '--grey-900', name: 'Couleur 4' }
    ];
    
    proColors.forEach(({ selector, var: cssVar, name }) => {
        const card = document.querySelector(selector);
        if (card) updateColorCard(card, cssVar, name);
    });
    
    root.setAttribute('data-theme', 'etudiant');
    const studentStyles = getComputedStyle(root);
    
    const getStudentVar = (varName) => {
        return studentStyles.getPropertyValue(varName).trim();
    };
    
    const studentColors = [
        { selector: '.theme-section:nth-of-type(2) .color-card:nth-of-type(1)', var: '--primary-orange', name: 'Couleur 1' },
        { selector: '.theme-section:nth-of-type(2) .color-card:nth-of-type(2)', var: '--primary-cyan', name: 'Couleur 2' },
        { selector: '.theme-section:nth-of-type(2) .color-card:nth-of-type(3)', var: '--primary-green', name: 'Couleur 3' },
        { selector: '.theme-section:nth-of-type(2) .color-card:nth-of-type(4)', var: '--primary-red', name: 'Couleur 4' },
        { selector: '.theme-section:nth-of-type(2) .color-card:nth-of-type(5)', var: '--primary-yellow', name: 'Couleur 5' }
    ];
    
    studentColors.forEach(({ selector, var: cssVar, name }) => {
        const card = document.querySelector(selector);
        const colorValue = getStudentVar(cssVar);
        if (card && colorValue) {
            updateColorCard(card, cssVar, name, colorValue);
        }
    });
    
    const gradients = [
        { selector: '.gradient-card:nth-of-type(1)', var: '--gradient-primary', name: 'Dégradé Primaire' },
        { selector: '.gradient-card:nth-of-type(2)', var: '--gradient-secondary', name: 'Dégradé Secondaire' },
        { selector: '.gradient-card:nth-of-type(3)', var: '--gradient-hero', name: 'Dégradé Hero' }
    ];
    
    gradients.forEach(({ selector, var: cssVar, name }) => {
        const card = document.querySelector(selector);
        const gradientValue = getStudentVar(cssVar);
        if (card && gradientValue) {
            card.style.background = gradientValue;
        }
    });
    
    root.removeAttribute('data-theme');
    
    console.log('✅ Couleurs chargées dynamiquement depuis les fichiers CSS du projet');
});

function resetAllColors() {
    if (!root) return;
    
    const previewPanel = document.querySelector('.preview-panel');
    
    modifiedColors.forEach(cssVar => {
        if (originalColors[cssVar]) {
            root.style.setProperty(cssVar, originalColors[cssVar]);
            if (previewPanel) {
                previewPanel.style.setProperty(cssVar, originalColors[cssVar]);
            }
        } else {
            root.style.removeProperty(cssVar);
            if (previewPanel) {
                previewPanel.style.removeProperty(cssVar);
            }
        }
    });
    
    document.querySelectorAll('.color-picker').forEach(picker => {
        const cssVar = picker.dataset.cssVar;
        if (originalColors[cssVar]) {
            const originalHex = rgbaToHex(originalColors[cssVar]);
            picker.value = originalHex;
            
            const card = document.querySelector(picker.dataset.cardSelector);
            if (card) {
                const swatch = card.querySelector('.color-swatch');
                if (swatch) {
                    swatch.style.background = originalColors[cssVar];
                }
                
                const codesElement = card.querySelector('.color-codes');
                if (codesElement) {
                    codesElement.innerHTML = `
                        <span class="color-code">CSS Var: ${cssVar}</span>
                        <span class="color-code">HEX: ${originalHex}</span>
                        <span class="color-code">Value: ${originalColors[cssVar]}</span>
                    `;
                }
            }
        }
    });
    
    modifiedColors.clear();
    updateModifiedBadge();
}

function exportCSS() {
    if (modifiedColors.size === 0) {
        alert('Aucune modification à exporter. Modifiez d\'abord quelques couleurs !');
        return;
    }
    
    let cssCode = ':root {\n';
    
    modifiedColors.forEach(cssVar => {
        const picker = document.querySelector(`[data-css-var="${cssVar}"]`);
        if (picker) {
            cssCode += `  ${cssVar}: ${picker.value};\n`;
        }
    });
    
    cssCode += '}';
    
    const studentVars = Array.from(modifiedColors).filter(v => 
        ['--primary-orange', '--primary-cyan', '--primary-green', '--primary-red', '--primary-yellow'].includes(v)
    );
    
    if (studentVars.length > 0) {
        cssCode += '\n\n:root[data-theme="etudiant"] {\n';
        studentVars.forEach(cssVar => {
            const picker = document.querySelector(`[data-css-var="${cssVar}"]`);
            if (picker) {
                cssCode += `  ${cssVar}: ${picker.value};\n`;
            }
        });
        cssCode += '}';
    }
    
    document.getElementById('exportedCSS').textContent = cssCode;
    document.getElementById('exportModal').classList.add('active');
}

function closeExportModal() {
    document.getElementById('exportModal').classList.remove('active');
}

function copyCSS() {
    const cssText = document.getElementById('exportedCSS').textContent;
    navigator.clipboard.writeText(cssText).then(() => {
        const btn = event.target.closest('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>✓</span> Copié !';
        btn.style.background = '#4CAF50';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Erreur lors de la copie : ' + err);
    });
}

document.getElementById('exportModal').addEventListener('click', (e) => {
    if (e.target.id === 'exportModal') {
        closeExportModal();
    }
});

function switchPreviewTheme(theme) {
    const previewPanel = document.querySelector('.preview-panel');
    const buttons = document.querySelectorAll('.theme-toggle button');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (theme === 'etudiant') {
        previewPanel.setAttribute('data-theme', 'etudiant');
    } else {
        previewPanel.removeAttribute('data-theme');
    }
    
    modifiedColors.forEach(cssVar => {
        const picker = document.querySelector(`[data-css-var="${cssVar}"]`);
        if (picker && previewPanel) {
            previewPanel.style.setProperty(cssVar, picker.value);
        }
    });
}

function toggleGradient() {
    const previewPanel = document.querySelector('.preview-panel');
    const checkbox = document.getElementById('gradientToggle');
    
    if (checkbox.checked) {
        previewPanel.classList.remove('no-gradient');
    } else {
        previewPanel.classList.add('no-gradient');
    }
}