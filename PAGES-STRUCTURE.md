# Structure des Pages - Site CLEE Bordeaux

## Navigation Principale

Les **7 pages principales** du site :

```
1. Accueil                        → index.html (racine du projet)
2. Le CLEE                        → pages/le-clee.html
3. Entreprises & Partenaires      → pages/companies.html
4. Établissements & Formations    → pages/establishments.html
5. Jeunes & Familles              → pages/jeunes-familles.html
6. Vie du CLEE                    → pages/vie-clee.html
7. Connexion                      → pages/connexion.html (lien spécial dans la navbar)
```

**Note importante** : Le fichier `index.html` est situé à la racine du projet pour faciliter le déploiement sur les plateformes comme Vercel, Netlify, GitHub Pages, etc. Toutes les autres pages HTML sont dans le répertoire `pages/`.

**Thème par défaut** : Le site utilise désormais le **thème étudiant** par défaut pour tous les utilisateurs. Les visiteurs peuvent accéder aux options d'accessibilité via [portail.html](pages/portail.html) pour personnaliser leur expérience de navigation (taille de police, contraste, animations).

## Arborescence Complète des Pages

```
./
└── index.html                      # PAGE PRINCIPALE : Accueil (racine du projet)

pages/
│
├── portail.html                    # PAGE UTILITAIRE : Options d'accessibilité
├── le-clee.html                    # PAGE PRINCIPALE : Le CLEE
│   ├── bureau-membres.html            # Sous-page : Bureau et membres
│   ├── nos-actions.html               # Sous-page : Nos actions
│   └── documents-officiels.html       # Sous-page : Documents officiels
│
├── companies.html                  # PAGE PRINCIPALE : Entreprises & Partenaires
│
├── establishments.html             # PAGE PRINCIPALE : Établissements & Formations
│   ├── orientation-insertion.html     # Sous-page : Orientation et insertion
│   └── pfmp.html                      # Sous-page : PFMP (Périodes de Formation en Milieu Professionnel)
│
├── jeunes-familles.html            # PAGE PRINCIPALE : Jeunes & Familles
│
├── vie-clee.html                   # PAGE PRINCIPALE : Vie du CLEE
│   ├── vie-clee-eleves.html           # Sous-page : Vie du CLEE - Élèves
│   └── agenda.html                    # Sous-page : Agenda/Événements
│
├── connexion.html                  # PAGE PRINCIPALE : Connexion (authentification)
├── inscription.html                # Sous-page : Inscription (créer un compte)
├── contact.html                    # Page utilitaire : Formulaire de contact
└── mentions-legales.html           # Page utilitaire : Mentions légales
```

## Résumé des Pages

### Pages Principales (Navigation)
| # | Page | Fichier | Description |
|---|------|---------|-------------|
| 1 | **Accueil** | `index.html` (racine) | Page d'accueil du site |
| 2 | **Le CLEE** | `pages/le-clee.html` | Présentation du CLEE, sa mission et ses objectifs |
| 3 | **Entreprises & Partenaires** | `pages/companies.html` | Espace dédié aux entreprises partenaires |
| 4 | **Établissements & Formations** | `pages/establishments.html` | Annuaire des établissements et formations |
| 5 | **Jeunes & Familles** | `pages/jeunes-familles.html` | Ressources pour les jeunes et les familles |
| 6 | **Vie du CLEE** | `pages/vie-clee.html` | Actualités, événements et vie de la communauté |
| 7 | **Connexion** | `pages/connexion.html` | Page de connexion à l'espace personnel |

### Sous-pages (Non présentes dans la navigation principale)

#### Rattachées à "Le CLEE"
| Page | Fichier | Description |
|------|---------|-------------|
| Bureau & Membres | `bureau-membres.html` | Présentation du bureau et des membres |
| Nos Actions | `nos-actions.html` | Présentation des actions menées par le CLEE |
| Documents Officiels | `documents-officiels.html` | Accès aux documents et règlements |

#### Rattachées à "Établissements & Formations"
| Page | Fichier | Description |
|------|---------|-------------|
| Orientation & Insertion | `orientation-insertion.html` | Ressources pour l'orientation et l'insertion professionnelle |
| PFMP | `pfmp.html` | Informations sur les Périodes de Formation en Milieu Professionnel |

#### Rattachées à "Vie du CLEE"
| Page | Fichier | Description |
|------|---------|-------------|
| Vie du CLEE - Élèves | `vie-clee-eleves.html` | Vie étudiante et animations spécifiques |
| Agenda | `agenda.html` | Calendrier des événements |

#### Rattachées à "Connexion"
| Page | Fichier | Description |
|------|---------|-------------|
| Inscription | `inscription.html` | Formulaire d'inscription pour créer un compte |

#### Pages Utilitaires
| Page | Fichier | Description |
|------|---------|-------------|
| Accessibilité | `portail.html` | Options d'accessibilité (taille de police, contraste, animations) |
| Contact | `contact.html` | Formulaire de contact (accessible depuis footer et CTAs) |
| Mentions légales | `mentions-legales.html` | Mentions légales et conditions d'utilisation |

#### Pages de Démonstration
| Page | Fichier | Description |
|------|---------|-------------|
| Démonstration des thèmes | `theme-demo.html` | Page permettant de comparer les thèmes Étudiant et Professionnel |
| Référence des couleurs | `colors-reference.html` | Référence visuelle de la charte graphique |

---

**Total : 19 pages HTML**
- 7 pages principales (dans la navigation)
- 8 sous-pages (accessibles depuis les pages principales)
- 3 pages utilitaires (accessibilité, contact et mentions légales)
- 2 pages de démonstration (theme-demo et colors-reference)

---

## Fonctionnalités récentes (Février 2026)

### Recherche partenaires
La page **Entreprises & Partenaires** dispose désormais d'une barre de recherche en temps réel permettant de filtrer les entreprises par nom. Cette fonctionnalité s'ajoute au système de filtrage par catégorie existant.

### Améliorations du thème étudiant
Le thème étudiant a été optimisé avec :
- **Agenda** : Dates en fond orange et texte blanc pour plus de visibilité
- **Section "Notre impact"** : Surbrillance adoucie avec dégradé clair pour améliorer la lisibilité
- **Boutons CTA** : Application des couleurs de la charte graphique avec ombres optimisées

### Simplification du contenu
- **jeunes-familles.html** : Contenu amélioré et clarifié
- **vie-clee.html** : Modal de contact supprimée (simplification)
- **index.html** : Section agenda déplacée vers vie-clee.html

