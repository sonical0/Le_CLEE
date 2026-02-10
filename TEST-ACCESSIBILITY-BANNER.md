# Test de la Bannière d'Accessibilité

## Description
Bannière d'accessibilité similaire aux bannières de cookies qui s'affiche au lancement du site pour proposer l'activation du mode contraste élevé.

## Fonctionnalités

### Affichage
- La bannière apparaît 1 seconde après le chargement de la page
- Position fixe en bas de l'écran
- Animation de slide-up depuis le bas
- Style similaire aux bannières de cookies (fond sombre, bordure subtile)

### Conditions d'affichage
La bannière ne s'affiche PAS si :
- L'utilisateur a déjà fermé la bannière (localStorage: `clee_accessibility_banner_dismissed`)
- Le mode contraste élevé est déjà activé (localStorage: `clee_high_contrast`)

### Actions disponibles
1. **Activer** : Active le mode contraste élevé et ferme la bannière
2. **Non merci** : Ferme la bannière sans activer le contraste
3. **Bouton fermer (X)** : Ferme la bannière sans activer le contraste
4. **Lien vers portail** : Redirige vers la page des options d'accessibilité

### Persistance
- Préférence de fermeture stockée dans `localStorage` (`clee_accessibility_banner_dismissed`)
- État du contraste élevé stocké dans `localStorage` (`clee_high_contrast`)
- La bannière ne réapparaît pas une fois fermée

## Tests à effectuer

### Test 1 : Première visite
1. Ouvrir le site en navigation privée
2. Attendre 1 seconde après le chargement
3. ✅ La bannière doit apparaître en bas de page
4. ✅ Les 3 actions (Activer, Non merci, Fermer) doivent être visibles

### Test 2 : Activer le contraste
1. Cliquer sur "Activer"
2. ✅ Le contraste élevé doit s'activer immédiatement
3. ✅ La bannière doit se fermer avec animation
4. Recharger la page
5. ✅ La bannière ne doit PAS réapparaître
6. ✅ Le contraste élevé doit rester activé

### Test 3 : Refuser
1. Ouvrir en navigation privée
2. Cliquer sur "Non merci"
3. ✅ La bannière doit se fermer
4. ✅ Le contraste ne doit PAS être activé
5. Recharger la page
6. ✅ La bannière ne doit PAS réapparaître

### Test 4 : Fermer avec X
1. Ouvrir en navigation privée
2. Cliquer sur le bouton fermer (X)
3. ✅ Même comportement que "Non merci"

### Test 5 : Lien vers portail
1. Cliquer sur le lien "options d'accessibilité"
2. ✅ Redirection vers `/pages/portail.html` (ou `portail.html` si déjà dans pages/)
3. ✅ Sur la page portail, possibilité de désactiver le contraste

### Test 6 : Responsive
1. Tester sur mobile (<768px)
2. ✅ La bannière doit s'adapter (texte plus petit, boutons empilés)
3. ✅ Le bouton X doit être en position absolue (top-right)
4. ✅ Les boutons doivent occuper toute la largeur sur petit écran

### Test 7 : Accessibilité clavier
1. Utiliser uniquement le clavier (Tab, Enter)
2. ✅ Le focus doit être visible sur tous les boutons
3. ✅ Possibilité de fermer avec Échap (si implémenté)

### Test 8 : Compatibilité avec portail.html
1. Aller sur `/pages/portail.html`
2. Activer le contraste élevé via le toggle
3. ✅ Le contraste doit s'appliquer
4. Retourner sur la page d'accueil
5. ✅ La bannière ne doit PAS apparaître
6. ✅ Le contraste doit rester activé

## Fichiers modifiés

### JavaScript
- **`js/common.js`** : Ajout du module `AccessibilityBannerModule`
  - Gestion de l'affichage de la bannière
  - Gestion des actions (accepter, refuser, fermer)
  - Persistance avec localStorage
  - Application du contraste élevé

### CSS
- **`css/globals.css`** : Ajout des styles de la bannière
  - `.accessibility-banner` : Styles de base
  - `.accessibility-banner-content` : Layout flex
  - `.btn-banner` : Styles des boutons
  - Media queries pour responsive
  - Styles `.high-contrast` et `.reduce-motion` déplacés depuis portail.css

### HTML
- Aucune modification nécessaire (la bannière est injectée dynamiquement)

## Variables localStorage utilisées

| Clé | Type | Description |
|-----|------|-------------|
| `clee_accessibility_banner_dismissed` | boolean | Bannière fermée par l'utilisateur |
| `clee_high_contrast` | boolean | Mode contraste élevé activé |

## Compatibilité
- ✅ Fonctionne sur toutes les pages du site (index.html et pages/)
- ✅ Compatible avec le système d'accessibilité existant dans portail.html
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Accessible au clavier
- ✅ Persistance multi-sessions

## Notes techniques

### Détection du chemin
Le lien vers portail.html s'adapte automatiquement selon la page :
```javascript
const isRootPage = !window.location.pathname.includes('/pages/');
const portailLink = isRootPage ? 'pages/portail.html' : 'portail.html';
```

### Animation
- Transition CSS : `transform` et `opacity`
- Durée : 400ms
- Easing : `cubic-bezier(0.4, 0, 0.2, 1)`

### Z-index
- Bannière : `z-index: 10000` (au-dessus de tout)
- Header : `z-index: 1000`

## Améliorations futures possibles
- [ ] Ajouter un délai avant réaffichage (ex: 30 jours)
- [ ] Proposer d'autres options d'accessibilité (taille de texte, etc.)
- [ ] Analytics pour tracker les acceptations/refus
- [ ] Support de la touche Échap pour fermer
- [ ] Animation de pulse sur le bouton "Activer" après 3 secondes
