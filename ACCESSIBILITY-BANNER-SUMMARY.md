# Bannière d'Accessibilité - Résumé d'Implémentation

## Vue d'ensemble

Une bannière de notification a été ajoutée au site CLEE Bordeaux Avenir, similaire aux bannières de cookies. Elle s'affiche automatiquement lors de la première visite pour proposer l'activation du mode contraste élevé.

## Fonctionnement

### Affichage automatique
- La bannière apparaît **1 seconde** après le chargement de la page
- Position fixe en bas de l'écran avec animation de slide-up
- Design moderne avec fond dégradé sombre et boutons stylisés

### Conditions d'affichage
La bannière ne s'affiche **PAS** si :
- L'utilisateur l'a déjà fermée (`clee_accessibility_banner_dismissed = true`)
- Le mode contraste élevé est déjà activé (`clee_high_contrast = true`)

### Actions utilisateur
1. **Activer** (bouton orange) : Active le contraste élevé et ferme la bannière
2. **Non merci** (bouton transparent) : Ferme la bannière sans activer
3. **Fermer (X)** : Même comportement que "Non merci"
4. **Lien vers portail** : Redirige vers les options d'accessibilité complètes

## Fichiers modifiés

### 1. JavaScript (`js/common.js`)
**Nouveau module** : `AccessibilityBannerModule`

```javascript
const AccessibilityBannerModule = (() => {
  // Clés localStorage
  const BANNER_DISMISSED_KEY = 'clee_accessibility_banner_dismissed';
  const HIGH_CONTRAST_KEY = 'clee_high_contrast';
  
  // Méthodes principales
  - init() : Initialise le module et affiche la bannière si nécessaire
  - showBanner() : Crée et affiche la bannière avec animation
  - dismissBanner() : Ferme la bannière et sauvegarde la préférence
  - acceptHighContrast() : Active le contraste et ferme la bannière
  - applyHighContrast() : Applique le contraste via classe CSS
})();
```

**Initialisation** dans `DOMContentLoaded` :
```javascript
document.addEventListener('DOMContentLoaded', () => {
  ThemeModule.init();
  AccessibilityBannerModule.init(); // Nouveau
  NavigationModule.init();
  // ...
});
```

### 2. CSS (`css/globals.css`)
**Nouveaux styles ajoutés** :

```css
/* Bannière d'accessibilité */
.accessibility-banner { ... }
.accessibility-banner-content { ... }
.accessibility-banner-icon { ... }
.accessibility-banner-text { ... }
.accessibility-banner-actions { ... }
.btn-banner { ... }
.btn-banner-accept { ... }
.btn-banner-decline { ... }
.btn-banner-close { ... }

/* Styles du mode contraste élevé */
.high-contrast { filter: contrast(1.2); }
.reduce-motion * { animation-duration: 0.01ms !important; }
```

**Responsive** :
- Mobile (<768px) : Icône cachée, boutons empilés verticalement
- Très petit écran (<480px) : Boutons en colonne, X en position absolue

### 3. Documentation
- **TEST-ACCESSIBILITY-BANNER.md** : Guide de test détaillé (8 scénarios)
- **test-banner-demo.html** : Page de démo interactive pour tester
- **CHANGELOG.md** : Historique des changements
- **README.md** : Documentation mise à jour

## Variables localStorage

| Clé | Type | Description |
|-----|------|-------------|
| `clee_accessibility_banner_dismissed` | boolean | Utilisateur a fermé la bannière |
| `clee_high_contrast` | boolean | Mode contraste élevé activé |

## Design

### Couleurs
- Fond : Dégradé `rgba(31, 52, 72, 0.98)` → `rgba(49, 73, 96, 0.98)`
- Icône : Orange CLEE (`#d8861b`)
- Bouton "Activer" : Orange avec hover `#ff9966`
- Bouton "Non merci" : Transparent avec bordure
- Texte : Blanc avec opacité variable

### Animations
```css
/* Apparition */
transform: translateY(100%) → translateY(0)
opacity: 0 → 1
transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1)

/* Disparition */
transform: translateY(0) → translateY(100%)
opacity: 1 → 0
```

### Layout
```
[Icône] [Texte]                    [Activer] [Non merci] [X]
  40px    flexible                     boutons orange/transparent
```

## Intégration avec le système existant

### Compatibilité avec portail.html
- Les styles `.high-contrast` sont maintenant dans `globals.css`
- Le module `AccessibilityBannerModule` et `portail.js` partagent la même clé localStorage
- Les préférences sont synchronisées automatiquement

### Détection du chemin
Le lien vers portail.html s'adapte automatiquement :
```javascript
const isRootPage = !window.location.pathname.includes('/pages/');
const portailUrl = isRootPage ? 'pages/portail.html' : 'portail.html';
```

## Test rapide

1. Ouvrir le site en navigation privée : `http://localhost:8000`
2. Attendre 1 seconde → la bannière apparaît
3. Cliquer sur "Activer" → contraste activé, bannière fermée
4. Recharger la page → bannière ne réapparaît pas

## Test avec la page de démo

1. Ouvrir `http://localhost:8000/test-banner-demo.html`
2. Voir l'état actuel du localStorage
3. Utiliser les boutons pour simuler différents scénarios
4. Ouvrir le site pour vérifier le comportement

## Points techniques importants

### Z-index
- Bannière : `10000` (au-dessus de tout)
- Header : `1000`

### Performance
- La bannière est injectée dynamiquement (pas de HTML initial)
- Pas de surcharge si déjà fermée ou contraste activé
- Vérification localStorage avant création de la bannière

### Accessibilité
- Attributs ARIA : `role="dialog"`, `aria-labelledby`, `aria-describedby`
- Boutons avec `aria-label`
- Contraste suffisant (WCAG AA)
- Navigation au clavier fonctionnelle

## Limitations et améliorations futures

### Limitations actuelles
- La bannière ne réapparaît jamais une fois fermée (choix de design)
- Pas de support de la touche Échap pour fermer (facile à ajouter)
- Pas d'analytics pour tracker les interactions

### Améliorations possibles
- [ ] Réaffichage après X jours/visites
- [ ] Support de la touche Échap
- [ ] Animation de pulse après 3 secondes pour attirer l'attention
- [ ] Proposer d'autres options (taille de texte, animations)
- [ ] A/B testing des messages
- [ ] Analytics (taux d'acceptation, de refus)

## Déploiement

Aucune configuration supplémentaire nécessaire. Les fichiers modifiés sont :
- `js/common.js` (déjà chargé sur toutes les pages)
- `css/globals.css` (déjà chargé sur toutes les pages)

La bannière fonctionnera automatiquement sur toutes les pages du site :
- ✅ `index.html` (racine)
- ✅ Toutes les pages dans `pages/`
- ✅ Compatible avec tous les navigateurs modernes

## Support navigateurs

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ⚠️ IE11 non supporté (localStorage, CSS modernes)

---

**Date d'implémentation** : 10 février 2026  
**Auteur** : GitHub Copilot (Claude Sonnet 4.5)  
**Documentation** : TEST-ACCESSIBILITY-BANNER.md, CHANGELOG.md, README.md
