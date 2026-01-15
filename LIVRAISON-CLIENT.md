# Livraison Site WordPress CLEE Bordeaux Avenir

**Date de livraison** : Janvier 2026  
**Version** : 2.0 - WordPress Professionnel Client-Editable  
**Statut** : Livrable production-ready

---

## Résumé exécutif

Votre site statique HTML/CSS/JS a été transformé en **site WordPress professionnel entièrement éditable** sans perte de fonctionnalités ni de design.

### Ce qui change pour vous

| Avant (HTML statique) | Après (WordPress v2.0) |
|-----------------------|------------------------|
| Modification du contenu = éditer du code | Modification depuis l'interface admin WordPress |
| Ajouter un événement = créer une page HTML | Ajouter un événement = remplir un formulaire |
| Liste partenaires hardcodée dans le code | Liste générée automatiquement depuis la base de données |
| Coordonnées footer = modifier footer.html | Coordonnées = page "Options du thème" |
| Impossible de filtrer/rechercher sans dev | Filtres natifs sur tous les contenus |

---

## Ce qui a été livré

### 1. Thème WordPress complet (`php/clee-bordeaux-theme/`)

Architecture professionnelle avec :
- **Structure modulaire** : 6 fichiers dans `inc/` (setup, enqueue, CPT, ACF, helpers, patterns)
- **14 templates** : archives, singles, pages spécifiques
- **theme.json** : Design system verrouillé (couleurs, typographies)
- **6 patterns Gutenberg** : Layouts prêts à insérer

### 2. Custom Post Types (contenus structurés)

#### Événements (`/agenda/`)
**Vous pouvez** :
- Ajouter un événement depuis admin (Événements > Ajouter)
- Remplir : dates, horaires, lieu, lien d'inscription
- Assigner un type (Conférence, Atelier, Forum, etc.)
- Mettre en avant sur la homepage

**Vos utilisateurs peuvent** :
- Filtrer par type, période (à venir/passés), mois
- Rechercher par mot-clé
- S'inscrire directement via le lien

#### Partenaires (`/partenaires/`)
**Vous pouvez** :
- Ajouter un partenaire depuis admin (Partenaires > Ajouter)
- Uploader le logo
- Remplir coordonnées, site web, adresse
- Ajouter coordonnées GPS pour affichage sur carte
- Catégoriser (Industrie, Services, Commerce, etc.)

**Vos utilisateurs peuvent** :
- Filtrer par catégorie
- Rechercher par nom
- Voir les partenaires sur une carte interactive
- Accéder directement au site web du partenaire

#### Établissements (`/etablissements/`)
**Vous pouvez** :
- Ajouter un établissement depuis admin (Établissements > Ajouter)
- Remplir coordonnées, contact
- Ajouter plusieurs formations (repeater) avec nom, description, niveau
- Ajouter coordonnées GPS pour la carte
- Catégoriser par type de formation

**Vos utilisateurs peuvent** :
- Filtrer par catégorie de formation
- Voir les formations proposées par établissement
- Localiser sur carte interactive
- Contacter directement l'établissement

### 3. Pages institutionnelles éditables (Gutenberg)

**Pages créées** :
- Accueil
- Le CLEE
- Bureau & Membres
- Nos Actions
- Documents Officiels
- Jeunes & Familles
- PFMP
- Orientation & Insertion
- Vie du CLEE pour les élèves
- Vie du CLEE
- Contact

**Vous pouvez** :
- Modifier le contenu depuis l'éditeur Gutenberg (bloc par bloc)
- Insérer des patterns prêts à l'emploi (hero, cartes, CTA, stats)
- Changer les images, textes, liens
- Réorganiser les sections par glisser-déposer
- Prévisualiser avant publication

### 4. Options globales éditables

**Options du thème** (menu admin) :
- **Coordonnées** : Adresse, téléphone, email (affichés dans footer)
- **Réseaux sociaux** : Facebook, Twitter, LinkedIn, Instagram
- **Footer** : Texte personnalisé, copyright

**Modification en 1 clic** :
- Changez l'adresse → automatiquement mis à jour partout
- Ajoutez un réseau social → apparaît dans le footer
- Modifiez le copyright → visible immédiatement

### 5. Menus WordPress dynamiques

**2 menus configurables** :
- **Menu principal** (header) : Pages principales du site
- **Menu footer** : Liens organisés en colonnes

**Vous pouvez** :
- Ajouter/retirer des pages
- Réorganiser par glisser-déposer
- Créer des sous-menus
- Ajouter des liens externes

---

## Comment utiliser votre nouveau site

### Connexion à l'administration

```
URL : https://www.clee-bordeaux.fr/wp-admin
Identifiant : [fourni séparément]
Mot de passe : [fourni séparément]
```

### Modifier une page existante

1. Aller dans **Pages** (menu gauche)
2. Cliquer sur le titre de la page à modifier
3. Éditer le contenu dans Gutenberg
4. Cliquer sur **Mettre à jour**

### Ajouter un événement

1. Aller dans **Événements** > **Ajouter**
2. Saisir le titre de l'événement
3. Rédiger la description dans l'éditeur
4. Remplir les champs :
   - Date de début (obligatoire)
   - Date de fin (si plusieurs jours)
   - Horaires
   - Lieu
   - Lien d'inscription
5. Cocher "Événement à la une" si pertinent
6. Assigner un type d'événement
7. Ajouter une image à la une
8. Cliquer sur **Publier**

### Ajouter un partenaire

1. Aller dans **Partenaires** > **Ajouter**
2. Saisir le nom de l'entreprise
3. Uploader le logo
4. Remplir :
   - Site web
   - Adresse
   - Coordonnées GPS (latitude/longitude) pour affichage sur carte
   - Téléphone
   - Email
5. Assigner une catégorie
6. Rédiger une description
7. Publier

### Ajouter un établissement

1. Aller dans **Établissements** > **Ajouter**
2. Saisir le nom de l'établissement
3. Remplir les coordonnées
4. Ajouter les formations :
   - Cliquer sur "Ajouter une ligne"
   - Nom de la formation
   - Description
   - Niveau (CAP, Bac Pro, BTS, etc.)
   - Répéter pour chaque formation
5. Ajouter coordonnées GPS pour carte
6. Publier

### Modifier les coordonnées du footer

1. Aller dans **Options du thème** (menu gauche)
2. Onglet **Coordonnées** :
   - Modifier l'adresse
   - Modifier téléphone/email
3. Onglet **Réseaux sociaux** :
   - Ajouter/modifier les liens
4. Onglet **Footer** :
   - Modifier le texte
   - Modifier le copyright
5. Cliquer sur **Enregistrer les modifications**

### Utiliser les patterns Gutenberg

1. Éditer une page
2. Cliquer sur **+** (ajouter un bloc)
3. Onglet **Patterns** > **CLEE Patterns**
4. Choisir un pattern :
   - Hero Section
   - 3 colonnes - Cartes
   - 2 colonnes - Texte et Image
   - Bandeau CTA
   - Rangée de statistiques
   - 4 colonnes avec icônes
5. Personnaliser le texte/images du pattern
6. Publier

---

## Fonctionnalités clés à connaître

### Filtres automatiques

**Sur toutes les archives CPT, les utilisateurs peuvent filtrer sans JavaScript** :
- Événements : par type, période, mois, mot-clé
- Partenaires : par catégorie, nom
- Établissements : par catégorie de formation, nom

**Technique** : Filtres PHP natifs via formulaires GET, pas de dépendance JS.

### Cartes interactives

**Affichage automatique si coordonnées GPS renseignées** :
- Archive partenaires → carte avec tous les partenaires
- Archive établissements → carte avec tous les établissements
- Pages single → mini-carte de localisation

### Breadcrumbs (fil d'Ariane)

**Affichage automatique sur toutes les pages** :
- Accueil / Partenaires / Nom du partenaire
- Améliore le SEO et la navigation

### Pagination

**Gestion automatique sur les archives** :
- 12 éléments par page (événements)
- Tous les éléments (partenaires/établissements pour carte)
- Liens Précédent/Suivant

### Statuts événements

**Calcul automatique** :
- "À venir" (date future)
- "En cours" (date actuelle)
- "Passé" (date passée)

Lien d'inscription masqué sur événements passés.

### Contenus liés

**Suggestions automatiques en bas des pages single** :
- Événements similaires (même type)
- Partenaires similaires (même catégorie)
- Établissements similaires (même catégorie)

---

## Bonnes pratiques

### Images

**Tailles recommandées** :
- Image à la une (événement/partenaire/établissement) : 1200x675px (16:9)
- Logo partenaire : 400x400px (carré) sur fond transparent (PNG)
- Image page Gutenberg : 1200px de largeur

**Optimisation** :
- Format WebP privilégié
- Compression avant upload (TinyPNG)
- Alt text obligatoire pour accessibilité

### Rédaction

**Titres** :
- Court et descriptif (< 60 caractères)
- Mots-clés en début de titre (SEO)

**Extraits** :
- 150-200 caractères
- Résumé attractif
- Pas de point final

**Contenu** :
- Paragraphes courts (3-4 lignes)
- Listes à puces pour lisibilité
- Sous-titres H2/H3 pour structure

### SEO

**Chaque contenu doit avoir** :
- Titre unique
- Extrait rempli
- Image à la une avec alt text
- URL propre (slug)
- Catégorie/type assigné

---

## Maintenance recommandée

### Sauvegardes automatiques

**Plugin recommandé** : UpdraftPlus
- Sauvegarde quotidienne base de données
- Sauvegarde hebdomadaire fichiers
- Stockage Google Drive/Dropbox

### Mises à jour

**À faire mensuellement** :
- WordPress Core : Tableau de bord > Mises à jour
- Plugins : Extensions > Mettre à jour
- Thème : (mises à jour via Git si modifications)

### Sécurité

**Plugin recommandé** : Wordfence
- Scan hebdomadaire
- Firewall activé
- Authentification 2FA pour admin

---

## Support & Formation

### Documentation fournie

1. **[INSTALLATION-GUIDE.md](INSTALLATION-GUIDE.md)** (guide complet 70+ pages)
   - Installation locale et production
   - Configuration complète
   - Migrations
   - Optimisations

2. **[README-v2.md](README-v2.md)** (documentation technique)
   - Architecture complète
   - Fonctionnalités détaillées
   - Développement

3. **[php/clee-bordeaux-theme/README.txt](php/clee-bordeaux-theme/README.txt)** (documentation thème)
   - Structure thème
   - CPT et champs ACF
   - Patterns Gutenberg

### Support technique

**Email** : dev@clee-bordeaux.fr  
**Délai de réponse** : 24-48h ouvrées

**Inclus dans le support** :
- Bugs liés au thème
- Questions fonctionnelles
- Aide à la prise en main

**Non inclus** :
- Développements de nouvelles fonctionnalités
- Modifications graphiques
- Interventions sur serveur

### Formation recommandée

**Session 1 (2h)** : Prise en main WordPress
- Interface admin
- Gestion des pages
- Éditeur Gutenberg
- Menus

**Session 2 (2h)** : Gestion des contenus structurés
- Événements (ajout, modification, publication)
- Partenaires (formulaire complet, carte)
- Établissements (repeater formations)

**Session 3 (1h)** : Options et maintenance
- Options du thème
- Sauvegardes
- Mises à jour
- Bonnes pratiques

---

## Checklist de réception

Avant de valider la livraison, vérifiez que :

### Configuration
- [ ] Le thème est activé
- [ ] ACF est installé et activé
- [ ] Les 11 pages sont créées avec les bons slugs
- [ ] Les menus sont configurés (principal + footer)
- [ ] La page d'accueil est définie comme page statique
- [ ] Les permaliens sont régénérés

### Options du thème
- [ ] Les coordonnées sont remplies
- [ ] Les liens sociaux sont configurés
- [ ] Le texte du footer est personnalisé
- [ ] Le copyright est correct

### Custom Post Types
- [ ] Au moins 1 événement de test est créé
- [ ] Au moins 1 partenaire de test est créé
- [ ] Au moins 1 établissement de test est créé
- [ ] Les taxonomies ont des termes créés

### Fonctionnel
- [ ] La navigation fonctionne (desktop + mobile)
- [ ] Les filtres sur les archives fonctionnent
- [ ] Les cartes s'affichent si coordonnées GPS
- [ ] Les breadcrumbs s'affichent
- [ ] Les patterns Gutenberg sont disponibles

### Responsive
- [ ] Le site est responsive sur mobile
- [ ] Le site est responsive sur tablette
- [ ] Le menu mobile toggle fonctionne

### Performance & SEO
- [ ] Les images sont optimisées
- [ ] Un plugin de cache est installé
- [ ] Les permaliens sont propres (pas de ?p=123)
- [ ] Le sitemap XML est généré (Yoast SEO)

---

## Prochaines étapes

### Court terme (semaine 1-2)
1. Former les administrateurs (sessions 1-3)
2. Importer le contenu réel (événements, partenaires, établissements)
3. Remplir les pages institutionnelles
4. Vérifier le rendu sur différents navigateurs

### Moyen terme (mois 1)
1. Configurer les sauvegardes automatiques
2. Installer plugin de sécurité
3. Optimiser les performances (cache, images WebP)
4. Configurer Google Analytics
5. Soumettre le sitemap à Google Search Console

### Long terme (trimestre 1)
1. Analyser les statistiques
2. Ajuster le contenu selon les retours utilisateurs
3. Former de nouveaux administrateurs si besoin
4. Planifier évolutions (v2.1, v2.2)

---

## FAQ Client

**Q: Puis-je casser le design en modifiant le contenu ?**  
R: Non. Le design est verrouillé via theme.json. Vous ne pouvez modifier que le contenu (textes, images), pas les couleurs/typos globales.

**Q: Comment ajouter une nouvelle page au menu ?**  
R: Apparence > Menus > Ajouter des éléments > Sélectionner la page > Ajouter au menu > Enregistrer.

**Q: Les filtres nécessitent-ils JavaScript ?**  
R: Non. Les filtres sont 100% PHP, fonctionnent même si JavaScript est désactivé.

**Q: Puis-je avoir plusieurs administrateurs ?**  
R: Oui. Utilisateurs > Ajouter > Rôle "Administrateur". Chaque admin peut tout modifier.

**Q: Combien d'événements/partenaires puis-je créer ?**  
R: Illimité. La pagination gère l'affichage automatiquement.

**Q: Puis-je désactiver un événement sans le supprimer ?**  
R: Oui. Statut "Brouillon" au lieu de "Publié". L'événement reste dans l'admin mais invisible sur le site.

**Q: Comment traduire le site en plusieurs langues ?**  
R: Installer un plugin multilingue (Polylang ou WPML). Prévu pour v2.1.

**Q: Le site est-il optimisé pour mobile ?**  
R: Oui. Design 100% responsive, testé sur tous les devices.

**Q: Puis-je modifier les CSS/couleurs ?**  
R: Oui, mais nécessite intervention technique (modification de theme.json et globals.css).

**Q: Les données sont-elles sauvegardées automatiquement ?**  
R: WordPress sauvegarde les révisions. Mais configurez UpdraftPlus pour sauvegardes complètes.

---

## Validation de livraison

**Signature client** :  
Nom : ___________________________  
Date : ___________________________  
Signature : ___________________________

**Signature prestataire** :  
Nom : ___________________________  
Date : ___________________________  
Signature : ___________________________

---

**Document de livraison CLEE Bordeaux Avenir v2.0**  
© 2026 - Tous droits réservés
