# Système de Portail Étudiant/Professionnel

## Vue d'ensemble

Le site CLÉE Bordeaux Avenir dispose désormais d'un **système de portail** permettant aux utilisateurs de choisir leur profil (Étudiant ou Professionnel) avec une expérience visuelle adaptée à chaque catégorie.

## Fonctionnalités

### Page de Portail (`pages/portail.html`)
- Interface de sélection de profil avec deux cartes interactives
- Design responsive avec animations fluides
- Redirection automatique vers l'accueil après sélection
- Persistance du choix via localStorage

### Thèmes Visuels

#### **Mode Professionnel (par défaut)**
- Palette sobre : bleus et gris (#1F3448, #5E7E9F)
- Design élégant et corporate
- Badge bleu "Mode Professionnel" avec icône mallette
- Idéal pour les entreprises et partenaires

#### **Mode Étudiant**
- Couleurs vives basées sur la charte graphique :
  - Orange : #FF6B35
  - Cyan : #00A7E1
  - Vert : #5CB85C
  - Rouge : #E74C3C
- Dégradés colorés et animations dynamiques
- Design énergique et engageant
- Badge orange "Mode Étudiant" avec icône diplôme
- Possibilité de changer de profil via le badge

## Architecture Technique

### Fichiers créés

```
pages/
  └── portail.html           # Page de sélection de profil

css/
  ├── portail.css           # Styles de la page de portail
  └── theme-etudiant.css    # Thème coloré pour les étudiants

js/
  ├── portail.js            # Gestion de la sélection et persistance
  └── common.js (modifié)   # Ajout du ThemeModule
```

### Modules JavaScript

#### **PortailModule** (`js/portail.js`)
- Gestion de la sélection de profil
- Stockage dans localStorage
- Animations de feedback visuel
- Redirection vers l'accueil

#### **ThemeModule** (`js/common.js`)
- Chargement dynamique du thème étudiant
- Vérification du profil au chargement de chaque page
- Redirection vers le portail si aucun profil n'est défini
- Ajout du badge de changement de profil

### Persistance des données

Le système utilise **localStorage** avec deux clés :
- `clee_user_profile` : Stocke le profil choisi (`etudiant` ou `professionnel`)
- `clee_theme` : Stocke le thème appliqué (`etudiant` ou `professionnel`)

## Utilisation

### Pour l'utilisateur final

1. **Première visite** : Redirection automatique vers [portail.html](pages/portail.html)
2. **Choix du profil** : Clic sur la carte correspondante
3. **Navigation** : Le thème reste actif sur toutes les pages
4. **Changement** : Clic sur le badge flottant ("Mode Étudiant" ou "Mode Professionnel") en bas à droite pour revenir au portail

### Pour les développeurs

#### Ajouter le thème à une nouvelle page :

```html
<!-- Dans toutes les pages HTML -->
<link rel="stylesheet" href="../css/globals.css">
<script src="../js/common.js"></script>
<!-- Le ThemeModule s'initialise automatiquement -->
```

#### Détecter le profil actuel en JavaScript :

```javascript
const profile = ThemeModule.getCurrentProfile(); // 'etudiant' ou 'professionnel'
const theme = ThemeModule.getCurrentTheme();     // 'etudiant' ou 'professionnel'
```

#### Forcer l'affichage du portail :

```javascript
ThemeModule.switchTheme(); // Redirige vers portail.html
```

## Styles CSS du Mode Étudiant

Le thème étudiant utilise des sélecteurs d'attributs pour cibler les éléments :

```css
[data-theme="etudiant"] .btn-primary {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
}

[data-theme="etudiant"] .section-title {
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Charte Graphique

### Couleurs Mode Étudiant

Basées sur le document "CLEE AVENIR - MINI CHARTE GRAPHIQUE" :

| Couleur | HEX     | CMJN                | RGB           | Usage                    |
|---------|---------|---------------------|---------------|--------------------------|
| Orange  | #FF6B35 | C000 M055 J100 N000 | 255, 107, 53  | Primaire, CTA, accents   |
| Cyan    | #00A7E1 | C100 M045 J018 N000 | 0, 167, 225   | Secondaire, liens        |
| Vert    | #5CB85C | C082 M010 J100 N000 | 92, 184, 92   | Succès, validation       |
| Rouge   | #E74C3C | C000 M090 J080 N000 | 231, 76, 60   | Urgence, alertes         |

### Typographies

- **Titres** : Barlow Condensed (Bold/SemiBold)
- **Corps de texte** : Roboto (Regular/Medium)

## Responsive Design

Le portail et les thèmes sont entièrement responsive :

- **Desktop** : 1024px+ (cartes côte à côte)
- **Tablet** : 768px-1023px (cartes adaptées)
- **Mobile** : <768px (cartes empilées)

## Animations

### Page Portail
- **fadeInDown** : Logo et titre principal
- **fadeInUp** : Cartes de profil
- **fadeIn** : Note de bas de page
- **Hover effects** : Élévation des cartes, rotation des icônes

### Mode Étudiant
- **float** : Cercles décoratifs dans le hero
- **Gradient sweep** : Effet de brillance sur les boutons
- **Scale effects** : Zoom sur les chiffres clés

## Tests recommandés

- [ ] Sélection du profil étudiant → vérifier l'application des couleurs
- [ ] Sélection du profil professionnel → vérifier le thème sobre
- [ ] Rechargement de page → vérifier la persistance du thème
- [ ] Badge flottant → vérifier le retour au portail
- [ ] Responsive → tester sur mobile, tablette, desktop
- [ ] Navigation → vérifier que le thème reste actif sur toutes les pages

## Compatibilité

- **Navigateurs** : Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Features** :
  - CSS Variables (supporté par tous les navigateurs modernes)
  - localStorage (supporté universellement)
  - CSS Grid et Flexbox (supporté universellement)
  - Gradient backgrounds (supporté universellement)

## Notes de développement

### Points d'attention

1. **Redirection automatique** : Les utilisateurs sans profil sont redirigés vers le portail
2. **Badge persistant** : Le badge "Mode Étudiant" apparaît sur toutes les pages sauf le portail
3. **Chemins relatifs** : Le système détecte automatiquement si la page est à la racine ou dans `pages/`
4. **Performance** : Le CSS du thème étudiant est chargé dynamiquement uniquement si nécessaire

### Extensions possibles

- Ajouter d'autres profils (enseignant, parent, etc.)
- Personnalisation avancée par profil
- Dashboard dédié par type d'utilisateur
- Historique des interactions
- Notifications personnalisées

## Support

Pour toute question ou amélioration, référez-vous à la documentation principale du projet dans [README.md](../README.md).
