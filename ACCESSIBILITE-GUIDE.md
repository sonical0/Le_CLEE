# Guide des Options d'Accessibilité - CLEE Bordeaux Avenir

## Vue d'ensemble

La page d'accessibilité du site CLEE Bordeaux Avenir permet aux utilisateurs de personnaliser leur expérience de navigation selon leurs besoins. Cette page remplace l'ancien portail de sélection de profil.

**URL** : [pages/portail.html](pages/portail.html)

## Options Disponibles

### 1. Taille du texte

Permet d'ajuster la taille de la police pour améliorer la lisibilité.

**Niveaux disponibles** :
- **Petit** : 0.9x (14.4px)
- **Normal** : 1x (16px) - Par défaut
- **Grand** : 1.15x (18.4px)
- **Très grand** : 1.3x (20.8px)

**Utilisation** :
- Cliquez sur le bouton `A-` pour diminuer la taille
- Cliquez sur le bouton `A+` pour augmenter la taille

**Persistance** : Le réglage est sauvegardé dans `localStorage` sous la clé `clee_font_size`

### 2. Contraste élevé

Active un mode à fort contraste pour faciliter la lecture.

**Effet** :
- Applique un filtre de contraste de 1.2x sur tout le document
- Ajoute des bordures plus marquées aux cartes d'accessibilité

**Utilisation** :
- Activez/désactivez via l'interrupteur à bascule

**Persistance** : Le réglage est sauvegardé dans `localStorage` sous la clé `clee_high_contrast`

### 3. Réduire les animations

Désactive ou réduit significativement les animations et transitions.

**Effet** :
- Réduit toutes les animations à 0.01ms
- Limite les animations à une seule itération
- Idéal pour les personnes sensibles aux mouvements

**Utilisation** :
- Activez/désactivez via l'interrupteur à bascule

**Persistance** : Le réglage est sauvegardé dans `localStorage` sous la clé `clee_reduce_motion`

### 4. Mode sombre (À venir)

Cette fonctionnalité est prévue pour une future version du site.

## Réinitialisation

Un bouton "Réinitialiser les paramètres" permet de restaurer tous les réglages par défaut en un clic.

**Action** :
- Taille de police : Normal
- Contraste élevé : Désactivé
- Réduire les animations : Désactivé

## Architecture Technique

### Fichiers concernés

```
pages/portail.html         # Page d'accessibilité
js/portail.js              # Module AccessibilityModule
css/portail.css            # Styles de la page d'accessibilité
```

### Module JavaScript : AccessibilityModule

Le module `AccessibilityModule` dans [js/portail.js](js/portail.js) gère toutes les options d'accessibilité.

**Méthodes principales** :
- `applyFontSize(level)` : Applique un niveau de taille de police
- `increaseFontSize()` : Augmente la taille de police d'un niveau
- `decreaseFontSize()` : Diminue la taille de police d'un niveau
- `applyHighContrast(enabled)` : Active/désactive le contraste élevé
- `applyReduceMotion(enabled)` : Active/désactive la réduction d'animations
- `resetAll()` : Réinitialise tous les paramètres
- `getPreferences()` : Récupère les préférences sauvegardées

**Clés localStorage** :
```javascript
const FONT_SIZE_KEY = 'clee_font_size';
const HIGH_CONTRAST_KEY = 'clee_high_contrast';
const REDUCE_MOTION_KEY = 'clee_reduce_motion';
```

### Classes CSS appliquées

**Contraste élevé** :
```css
.high-contrast {
    filter: contrast(1.2);
}
```

**Réduction d'animations** :
```css
.reduce-motion * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
}
```

**Taille de police** :
Appliquée directement sur `document.documentElement.style.fontSize`

## Intégration dans la Navigation

La page d'accessibilité est accessible via :
- Le footer du site (lien "Accessibilité")
- URL directe : `/pages/portail.html`

**Note** : Il n'y a plus de redirection automatique vers cette page au chargement du site. Les utilisateurs peuvent y accéder à tout moment pour ajuster leurs préférences.

## Thème par Défaut

Depuis la transformation du portail, le site utilise le **thème étudiant** par défaut pour tous les visiteurs. Ce choix assure une expérience visuelle cohérente et accessible dès l'arrivée sur le site.

**Changement important** :
- Ancien comportement : Redirection vers portail.html pour choisir un profil
- Nouveau comportement : Thème étudiant appliqué par défaut, accès aux options d'accessibilité sur demande

## Accessibilité WCAG

Les options proposées contribuent à l'accessibilité du site selon les critères WCAG 2.1 :

- **Taille du texte** : Critère 1.4.4 (Niveau AA) - Redimensionnement du texte
- **Contraste élevé** : Critère 1.4.6 (Niveau AAA) - Contraste amélioré
- **Réduction d'animations** : Critère 2.3.3 (Niveau AAA) - Animation issue du mouvement

## Support navigateurs

Les fonctionnalités d'accessibilité sont compatibles avec :
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Tous les navigateurs supportant localStorage et CSS variables

## Responsive Design

La page d'accessibilité est entièrement responsive avec des breakpoints à :
- **Mobile** : < 480px
- **Tablette** : 481px - 768px
- **Desktop** : > 768px
