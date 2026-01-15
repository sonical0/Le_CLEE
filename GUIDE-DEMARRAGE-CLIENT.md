# Guide de Démarrage Rapide - CLEE Bordeaux Avenir WordPress

**Version** : 2.0  
**Date** : Janvier 2026  
**Public** : Administrateurs WordPress CLEE

---

## Félicitations ! Votre site est maintenant WordPress

Votre site statique a été transformé en **site WordPress entièrement modifiable** depuis l'administration.

### Ce qui a changé

**AVANT** (Site statique) :
- Contenu hardcodé dans le code HTML
- Modifications nécessitant un développeur
- Pas de gestion de contenu dynamique

**MAINTENANT** (Site WordPress) :
- Contenu éditable via l'administration WordPress
- Pages éditables avec Gutenberg (éditeur visuel)
- Contenus structurés via Custom Post Types
- Footer et options globales modifiables

---

## 1. Accès à l'administration

### URL d'accès
```
https://votre-site.fr/wp-admin/
```

### Identifiants
Vous recevrez vos identifiants séparément par email sécurisé.

---

## 2. Structure du site

### Pages institutionnelles (éditables via Gutenberg)

**14 pages disponibles** :
1. **Accueil** (Page d'accueil)
2. **Le CLEE** (Page principale)
   - Bureau & Membres
   - Nos Actions
   - Documents Officiels
3. **Jeunes & Familles** (Page principale)
   - Orientation & Insertion
   - PFMP
   - Vie du CLEE - Élèves
4. **Vie du CLEE** (Page principale)
5. **Contact**

**Comment modifier une page** :
1. Aller dans **Pages** > **Toutes les pages**
2. Cliquer sur le titre de la page à modifier
3. Utiliser l'éditeur Gutenberg (blocs)
4. Cliquer sur **Mettre à jour**

### Custom Post Types (contenus structurés)

**3 types de contenus dynamiques** :

#### Événements (`/agenda/`)
- Titre, description, date, heure, lieu
- Type d'événement (Conférence, Forum, Visite, etc.)
- Lien d'inscription
- Image à la une
- **Archive** : Liste avec filtres (type, période, mois)

#### Partenaires (`/partenaires/`)
- Nom, logo, description
- Catégorie (PME, Grande entreprise, Institution, etc.)
- Site web, coordonnées
- Coordonnées GPS pour carte interactive
- **Archive** : Grille avec filtres par catégorie + carte

#### Établissements (`/etablissements/`)
- Nom, adresse, coordonnées
- Formations proposées (liste répétable)
- Coordonnées GPS pour carte
- **Archive** : Liste avec filtres par formation + carte

---

## 3. Premiers pas : Modifier la page d'accueil

### Étape 1 : Aller dans l'éditeur
1. Connexion à `/wp-admin/`
2. **Pages** > **Toutes les pages**
3. Cliquer sur **Accueil**

### Étape 2 : Utiliser Gutenberg
L'éditeur Gutenberg fonctionne par **blocs** :
- **Titre** : Bloc Titre (h1, h2, h3, etc.)
- **Paragraphe** : Bloc Paragraphe
- **Image** : Bloc Image
- **Colonnes** : Bloc Colonnes (layout)
- **Bouton** : Bloc Bouton
- **Groupe** : Conteneur pour autres blocs

### Étape 3 : Utiliser les patterns CLEE
Des **modèles prêts à l'emploi** sont disponibles :
1. Cliquer sur **+** (ajouter un bloc)
2. Onglet **Patterns**
3. Catégorie **CLEE Patterns**
4. Choisir un pattern :
   - **Hero Section** : Bannière avec titre + boutons
   - **3 Colonnes Cards** : 3 cartes côte à côte
   - **Texte + Image** : Layout 2 colonnes
   - **Bannière CTA** : Call-to-action fond bleu
   - **Statistiques** : Rangée de chiffres clés
   - **4 Missions** : 4 icônes + texte

### Étape 4 : Personnaliser le contenu
1. Cliquer sur un bloc pour le sélectionner
2. Modifier le texte directement
3. Barre d'outils en haut pour formater (gras, italique, lien)
4. Panneau de droite pour options avancées (couleurs, espacements)

### Étape 5 : Enregistrer
- **Brouillon** : Cliquer sur **Enregistrer le brouillon**
- **Publication** : Cliquer sur **Mettre à jour** (bleu)

---

## 4. Ajouter un événement

### Étape 1 : Créer l'événement
1. **Événements** > **Ajouter**
2. Remplir le titre (ex: "Forum des métiers 2026")
3. Ajouter la description dans l'éditeur

### Étape 2 : Remplir les champs
Descendre dans la page, section **Informations de l'événement** :
- **Date de début** (obligatoire)
- **Date de fin** (optionnel)
- **Heure de début / fin**
- **Lieu** (ex: "Lycée Professionnel Talence")
- **Lien d'inscription** (URL externe)
- **Événement à la une** (cocher pour mettre en avant)

### Étape 3 : Ajouter une image
1. Section **Image à la une** (colonne de droite)
2. **Définir l'image à la une**
3. Télécharger ou choisir dans la bibliothèque

### Étape 4 : Choisir le type
Section **Type d'événement** :
- Conférence
- Forum
- Visite d'entreprise
- Rencontre
- Formation
- Autre

### Étape 5 : Publier
Cliquer sur **Publier** (bouton bleu en haut à droite).

**L'événement apparaîtra automatiquement** :
- Sur l'archive `/agenda/` (liste avec filtres)
- Dans les événements à venir (si date future)
- Dans les événements passés (si date passée)

---

## 5. Ajouter un partenaire

### Étape 1 : Créer le partenaire
1. **Partenaires** > **Ajouter**
2. Titre = Nom de l'entreprise
3. Description dans l'éditeur

### Étape 2 : Remplir les champs
Section **Informations du partenaire** :
- **Logo** (image)
- **Site web** (URL)
- **Adresse** (texte multi-lignes)
- **Téléphone**
- **Email**
- **Latitude / Longitude** (pour carte interactive)

**Astuce coordonnées GPS** :
1. Aller sur Google Maps
2. Clic droit sur l'emplacement
3. Copier les coordonnées (ex: 44.8378, -0.5792)
4. Latitude = 44.8378
5. Longitude = -0.5792

### Étape 3 : Choisir la catégorie
Section **Catégorie de partenaire** :
- PME
- ETI
- Grande entreprise
- Institution
- Association

### Étape 4 : Publier
Le partenaire apparaîtra sur `/partenaires/` avec filtre + carte.

---

## 6. Ajouter un établissement

### Étape 1 : Créer l'établissement
1. **Établissements** > **Ajouter**
2. Titre = Nom de l'établissement
3. Description

### Étape 2 : Informations générales
Section **Informations de l'établissement** :
- **Adresse**
- **Téléphone**
- **Email**
- **Site web**
- **Latitude / Longitude** (pour carte)

### Étape 3 : Ajouter les formations
Section **Formations proposées** (champ répétable) :
1. Cliquer sur **+ Ajouter une formation**
2. Remplir :
   - **Nom** (ex: "CAP Électricien")
   - **Description**
   - **Niveau** (CAP, Bac Pro, BTS, Licence, Master)
3. Répéter pour chaque formation

**Astuce** : Utilisez les flèches pour réorganiser l'ordre.

### Étape 4 : Catégorie de formation
Section **Catégorie de formation** :
- Électricité
- Mécanique
- Commerce
- Santé
- Numérique
- Autre

### Étape 5 : Publier
L'établissement apparaîtra sur `/etablissements/` avec toutes ses formations.

---

## 7. Modifier les options globales

### Footer & Coordonnées

1. **Options du thème** (menu latéral)
2. Trois onglets disponibles :

#### Onglet "Coordonnées"
- **Adresse** (siège social)
- **Téléphone**
- **Email**

Ces informations apparaissent :
- Dans le footer
- Sur la page contact
- Partout où vous appelez ces données

#### Onglet "Réseaux sociaux"
- **Facebook** (URL complète)
- **Twitter / X**
- **LinkedIn**
- **Instagram**

Les liens apparaissent automatiquement dans le footer.

#### Onglet "Footer"
- **Texte du footer** (description courte)
- **Copyright** (© 2026 CLEE Bordeaux Avenir)

### Enregistrer
Cliquer sur **Enregistrer les modifications** en haut.

---

## 8. Gérer les menus

### Menu principal (navigation en haut)

1. **Apparence** > **Menus**
2. Sélectionner **Menu principal** (ou créer un nouveau)
3. **Emplacement** : Cocher "Menu principal"

#### Ajouter des pages
1. Section **Pages** (colonne gauche)
2. Cocher les pages à ajouter
3. Cliquer sur **Ajouter au menu**

#### Ajouter les archives CPT
1. Section **Liens personnalisés**
2. URL : `/agenda/` - Texte : "Agenda"
3. URL : `/partenaires/` - Texte : "Partenaires"
4. URL : `/etablissements/` - Texte : "Établissements"

#### Réorganiser
Glisser-déposer les éléments pour changer l'ordre.

#### Sous-menus
Glisser un élément légèrement vers la droite pour en faire un sous-menu.

### Enregistrer
Cliquer sur **Enregistrer le menu**.

---

## 9. Taxonomies (catégories)

### Types d'événements
1. **Événements** > **Types d'événements**
2. Ajouter un nouveau type (ex: "Webinaire")
3. **Nom** : Webinaire
4. **Slug** : webinaire (automatique)

Utilisable ensuite lors de la création d'événements.

### Catégories de partenaires
1. **Partenaires** > **Catégories de partenaire**
2. Même procédure

### Catégories de formations
1. **Établissements** > **Catégories de formation**
2. Même procédure

---

## 10. Médias (bibliothèque d'images)

### Télécharger une image
1. **Médias** > **Ajouter**
2. Glisser-déposer ou sélectionner fichiers
3. Cliquer sur **Téléverser**

### Formats recommandés
- **Format** : JPG ou PNG
- **Poids** : Max 1 MB par image (optimiser avant upload)
- **Dimensions** :
  - Bannières hero : 1920x800px
  - Images événements : 800x600px
  - Logos partenaires : 400x300px (transparent PNG)

### Optimisation
Avant d'uploader, compresser vos images avec :
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)

---

## 11. Utilisateurs & Rôles

### Rôles disponibles

| Rôle | Droits |
|------|--------|
| **Administrateur** | Tous les droits (thème, plugins, options) |
| **Éditeur** | Gestion complète des contenus (pages, événements, partenaires) |
| **Auteur** | Création/édition de ses propres contenus |
| **Contributeur** | Création de contenus (soumission, pas de publication) |

### Ajouter un utilisateur
1. **Utilisateurs** > **Ajouter**
2. Remplir les informations
3. Choisir le **rôle**
4. Cliquer sur **Ajouter un utilisateur**

**Recommandation** : Ne pas donner le rôle Administrateur sauf nécessité absolue.

---

## 12. Sauvegardes

### Importance des sauvegardes
Effectuer des sauvegardes **avant** :
- Modifications importantes
- Mises à jour de WordPress
- Mises à jour de thème ou plugins

### Plugin recommandé : UpdraftPlus
1. **Extensions** > **Ajouter**
2. Rechercher "UpdraftPlus"
3. Installer et activer

#### Configuration
1. **Réglages** > **Sauvegardes UpdraftPlus**
2. **Planification** : Quotidien (fichiers), Hebdomadaire (base de données)
3. **Stockage distant** : Google Drive, Dropbox, ou email
4. **Sauvegarder maintenant** : Pour créer une sauvegarde immédiate

---

## 13. Mise à jour du site

### Mises à jour WordPress
1. **Tableau de bord** > **Mises à jour**
2. Vérifier les mises à jour disponibles :
   - WordPress core
   - Thème CLEE Bordeaux Avenir
   - Plugins (notamment ACF)

**Procédure** :
1. **Faire une sauvegarde complète**
2. Mettre à jour WordPress
3. Mettre à jour les plugins
4. Tester le site

### Mises à jour ACF
Advanced Custom Fields (ACF) est **essentiel** pour le site :
- Gérer les champs événements
- Gérer les champs partenaires/établissements
- Options du thème

**Ne jamais désactiver ACF** sans backup préalable.

---

## 14. Troubleshooting (Problèmes courants)

### Problème : Les événements n'apparaissent pas sur l'archive
**Solution** :
1. Vérifier que l'événement est **publié** (pas en brouillon)
2. Vérifier la **date de début** (filtres actifs par défaut)
3. Vider le cache si plugin de cache activé

### Problème : Les coordonnées du footer ne s'affichent pas
**Solution** :
1. Aller dans **Options du thème**
2. Onglet **Coordonnées**
3. Vérifier que les champs sont remplis
4. Cliquer sur **Enregistrer**

### Problème : La carte interactive ne fonctionne pas
**Solution** :
1. Vérifier que **latitude** ET **longitude** sont renseignées
2. Format : Nombres décimaux (44.8378, -0.5792)
3. Utiliser un point (.) pas une virgule (,)

### Problème : Les patterns CLEE n'apparaissent pas
**Solution** :
1. Vider le cache navigateur (Ctrl+Shift+R)
2. Vérifier que le fichier `inc/patterns.php` est présent
3. Désactiver/réactiver le thème

### Problème : Erreur 404 sur les archives CPT
**Solution** :
1. **Réglages** > **Permaliens**
2. Cliquer sur **Enregistrer** (sans rien modifier)
3. Cela régénère les règles de réécriture

---

## 15. Support & Ressources

### Documentation WordPress
- Guide officiel : https://wordpress.org/support/
- Gutenberg : https://wordpress.org/gutenberg/
- Vidéos tutoriels : https://learn.wordpress.org/

### Documentation ACF
- ACF Documentation : https://www.advancedcustomfields.com/resources/

### Documentation projet
Dans le dossier du thème, vous trouverez :
- `INSTALLATION-GUIDE.md` : Guide installation technique
- `README-v2.md` : Architecture technique
- `DEVELOPER-GUIDE.md` : Guide développeur
- `LIVRAISON-CLIENT.md` : Document de livraison

### Contact développeur
Pour toute question technique ou assistance :
- Créer un ticket GitHub
- Email support (fourni séparément)

---

## 16. Checklist première utilisation

- [ ] Connexion à `/wp-admin/` réussie
- [ ] Changement du mot de passe par défaut
- [ ] Configuration **Options du thème** (coordonnées, réseaux sociaux, footer)
- [ ] Configuration **Menu principal** (Apparence > Menus)
- [ ] Création d'un événement test
- [ ] Création d'un partenaire test
- [ ] Création d'un établissement test
- [ ] Modification de la page d'accueil avec patterns CLEE
- [ ] Vérification affichage mobile (responsive)
- [ ] Configuration sauvegarde UpdraftPlus
- [ ] Test formulaire de contact

---

## 17. Bonnes pratiques

### Contenu
- **Titres** : Courts et explicites (60 caractères max)
- **Descriptions** : 150-300 caractères pour les extraits
- **Images** : Toujours ajouter un texte alternatif (accessibilité)

### SEO
- **Titre de page** : Unique pour chaque page
- **Meta description** : Plugin Yoast SEO recommandé
- **URLs** : Courtes et descriptives (slug personnalisable)

### Performance
- **Optimiser images** avant upload
- **Limiter le nombre de plugins** (garder l'essentiel)
- **Vider le cache** après modifications importantes

### Sécurité
- **Mots de passe** : Forts et uniques
- **Mises à jour** : Régulières (WordPress + plugins)
- **Utilisateurs** : Rôles appropriés (principe du moindre privilège)
- **Sauvegardes** : Automatiques et testées

---

## Contact & Assistance

Pour toute question sur l'utilisation de WordPress :

**Documentation** : Consulter les fichiers .md fournis  
**Support technique** : [Contact fourni séparément]  
**Formation** : Sessions de formation disponibles sur demande

---

**Bienvenue dans l'univers WordPress !**  
Votre site est désormais entre vos mains. Explorez, expérimentez, et n'hésitez pas à poser des questions.

L'équipe de développement CLEE Bordeaux Avenir
