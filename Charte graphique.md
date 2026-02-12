# Charte Graphique CLEE Bordeaux Avenir

## Palette de Couleurs Principales

### Couleurs par Catégorie
Les couleurs du site sont organisées par thématique :

- **Orange** : `#d8861b` - Formations
- **Bleu** : `#176ea1` - Entreprises  
- **Vert** : `#589842` - Stages et insertions professionnels
- **Rouge** : `#c63634` - Les jeunes

**Note** : Acceptation des variations avec transparence par tranche de 10%

## Typographie

**Polices officielles** :
- **Kodchasan Regular** : Texte courant
- **Kodchasan Bold** : Titres et emphase

## Design System (CSS Variables)

Le projet utilise un système de tokens CSS centralisé dans `css/globals.css` pour garantir la cohérence visuelle.

### Palette de Couleurs du Site

```css
:root {
  /* Couleurs primaires (Bleu) */
  --primary-900: rgba(31, 52, 72, 1);      /* Bleu très foncé */
  --primary-800: rgba(49, 73, 96, 1);
  --primary-700: rgba(68, 95, 122, 1);
  --primary-600: rgba(81, 110, 140, 1);
  --primary-500: rgba(94, 126, 159, 1);    /* Bleu moyen (base) */
  --primary-400: rgba(153, 173, 194, 1);
  --primary-300: rgba(184, 199, 214, 1);
  --primary-200: rgba(214, 224, 235, 1);
  --primary-100: rgba(229, 236, 245, 1);
  --primary-50: rgba(229, 240, 255, 1);    /* Bleu très clair */
  
  /* Couleurs secondaires (Orange) */
  --secondary-500: rgba(255, 136, 73, 1);  /* Orange principal */
  --secondary-50: rgba(255, 240, 229, 1);  /* Orange clair */
  
  /* Nuances de gris */
  --grey-900: rgba(33, 37, 41, 1);         /* Gris très foncé */
  --grey-700: rgba(73, 80, 87, 1);
  --grey-600: rgba(108, 117, 125, 1);
  --grey-500: rgba(128, 128, 128, 1);
  --grey-400: rgba(173, 181, 189, 1);
  --grey-300: rgba(206, 212, 218, 1);
  --grey-200: rgba(233, 236, 239, 1);
  --grey-100: rgba(248, 249, 250, 1);
  --grey-50: rgba(250, 250, 250, 1);       /* Gris très clair */
}
```

### Typographie (Tokens CSS)

```css
:root {
  /* Familles de polices */
  --navbar-text-font-family: "Roboto", sans-serif;
  --titre-font-family: "Barlow Condensed", sans-serif;
  --body-text-font-family: "Roboto", sans-serif;
  
  /* Tailles de texte */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 2rem;       /* 32px */
  --text-4xl: 2.5rem;     /* 40px */
}
```

### Espacements

```css
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-2xl: 4rem;    /* 64px */
}
```

### Ombres

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
}
```

## Utilisation des Variables CSS

Pour maintenir la cohérence visuelle, **toujours utiliser les variables CSS** au lieu de valeurs hardcodées :

```css
/* ✅ Bon */
.button {
  background-color: var(--primary-500);
  color: white;
  padding: var(--spacing-md);
  box-shadow: var(--shadow-md);
}

/* ❌ Mauvais */
.button {
  background-color: #5e7e9f;
  color: white;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Accessibilité

Toutes les combinaisons de couleurs respectent les normes WCAG 2.1 AA :
- **Contraste minimum** : 4.5:1 pour le texte normal
- **Contraste minimum** : 3:1 pour le texte large (18px+ ou 14px+ en gras)

## Références

- Fichier source : `css/globals.css`
- Documentation complète : [README.md](README.md)
- Police Kodchasan : `assets/doc/CLEE charte graphique/Kodchasan.ttc`