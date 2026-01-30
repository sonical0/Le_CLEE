# Structure des Pages - Site CLEE Bordeaux

## Navigation Principale

Les **6 pages principales** du site :

```
0. Portail de sélection (NEW)     → pages/portail.html (choix du profil utilisateur)
1. Accueil                        → index.html (racine du projet)
2. Le CLÉE                        → pages/le-clee.html
3. Entreprises & Partenaires      → pages/companies.html
4. Établissements & Formations    → pages/establishments.html
5. Jeunes & Familles              → pages/jeunes-familles.html
6. Vie du CLÉE                    → pages/vie-clee.html
7. Connexion                      → pages/connexion.html (lien spécial dans la navbar)
```

**Note importante** : Le fichier `index.html` est situé à la racine du projet pour faciliter le déploiement sur les plateformes comme Vercel, Netlify, GitHub Pages, etc. Toutes les autres pages HTML sont dans le répertoire `pages/`.

**Nouveau système de portail** : Les utilisateurs sont d'abord redirigés vers [portail.html](pages/portail.html) pour choisir leur profil (Étudiant ou Professionnel). Ce choix détermine le thème visuel appliqué à toutes les pages. Voir [PORTAIL-GUIDE.md](PORTAIL-GUIDE.md) pour plus de détails.

## Arborescence Complète des Pages

```
./
└── index.html                      # PAGE PRINCIPALE : Accueil (racine du projet)

pages/
│
├── portail.html                    # PAGE SYSTÈME : Sélection du profil utilisateur (NEW)
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
| 2 | **Le CLÉE** | `pages/le-clee.html` | Présentation du CLÉE, sa mission et ses objectifs |
| 3 | **Entreprises & Partenaires** | `pages/companies.html` | Espace dédié aux entreprises partenaires |
| 4 | **Établissements & Formations** | `pages/establishments.html` | Annuaire des établissements et formations |
| 5 | **Jeunes & Familles** | `pages/jeunes-familles.html` | Ressources pour les jeunes et les familles |
| 6 | **Vie du CLÉE** | `pages/vie-clee.html` | Actualités, événements et vie de la communauté |
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
| Agenda | `agenda.html` | Calendrier des événements (peut-être intégré dans vie-clee.html) |
Rattachées à "Connexion"
| Page | Fichier | Description |
|------|---------|-------------|
| Inscription | `inscription.html` | Formulaire d'inscription pour créer un compte |

#### Pages Utilitaires
| Page | Fichier | Description |
|------|---------|-------------|
| Contact | `contact.html` | Formulaire de contact (accessible depuis footer et CTAs) |
| Mentions légales | `mentions-legales.html` | Mentions légales et conditions d'utilisation |

---

**Total : 17 pages HTML**
- 7 pages principales (dans la navigation)
- 8 sous-pages (accessibles depuis les pages principales)
- 2 pages utilitaires (contact et mentions légales - accessiblesges principales)
- 1 page utilitaire (contact - accessible depuis footer/CTAs)

