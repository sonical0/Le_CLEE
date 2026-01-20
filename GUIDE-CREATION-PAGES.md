# Checklist Création des Pages WordPress - CLEE Bordeaux Avenir

## Pages à créer (14 au total)

### Instructions
1. Aller dans **Pages** > **Ajouter**
2. Saisir le **Titre** exact
3. Le **slug** se génère automatiquement (vérifier dans "Permalien")
4. Laisser le contenu vide pour l'instant (ou ajouter titre + paragraphe test)
5. Cliquer sur **Publier**

---

## Liste des Pages

### Pages Principales (6)

#### 1. Page d'Accueil
- **Titre** : `Accueil` (ou le titre de votre choix)
- **Slug** : N/A (configuré via Réglages > Lecture)
- **Template** : `front-page.php` (automatique)
- **Note** : Après création, aller dans **Réglages > Lecture** > Page d'accueil > Sélectionner cette page

#### 2. Le CLEE
- **Titre** : `Le CLEE`
- **Slug** : `le-clee`
- **Template** : `page-le-clee.php`

#### 3. Jeunes & Familles
- **Titre** : `Jeunes & Familles`
- **Slug** : `jeunes-familles`
- **Template** : `page-jeunes-familles.php`

#### 4. Vie du CLEE
- **Titre** : `Vie du CLEE`
- **Slug** : `vie-clee`
- **Template** : `page-vie-clee.php`

#### 5. Contact
- **Titre** : `Contact`
- **Slug** : `contact`
- **Template** : `page-contact.php`

#### 6. Agenda (Optionnel - redirige vers /agenda/)
- **Titre** : `Agenda`
- **Slug** : `agenda-page` (éviter conflit avec CPT)
- **Template** : `page-agenda.php`
- **Note** : Redirige automatiquement vers l'archive événements `/agenda/`

---

### Sous-pages "Le CLEE" (3)

#### 7. Bureau & Membres
- **Titre** : `Bureau & Membres`
- **Slug** : `bureau-membres`
- **Template** : `page-bureau-membres.php`
- **Parent** : Le CLEE (optionnel)

#### 8. Nos Actions
- **Titre** : `Nos Actions`
- **Slug** : `nos-actions`
- **Template** : `page-nos-actions.php`
- **Parent** : Le CLEE (optionnel)

#### 9. Documents Officiels
- **Titre** : `Documents Officiels`
- **Slug** : `documents-officiels`
- **Template** : `page-documents-officiels.php`
- **Parent** : Le CLEE (optionnel)

---

### Sous-pages "Jeunes & Familles" (3)

#### 10. Orientation & Insertion
- **Titre** : `Orientation & Insertion`
- **Slug** : `orientation-insertion`
- **Template** : `page-orientation-insertion.php`
- **Parent** : Jeunes & Familles (optionnel)

#### 11. PFMP
- **Titre** : `PFMP`
- **Slug** : `pfmp`
- **Template** : `page-pfmp.php`
- **Parent** : Jeunes & Familles (optionnel)

#### 12. Vie du CLEE - Élèves
- **Titre** : `Vie du CLEE - Élèves`
- **Slug** : `vie-clee-eleves`
- **Template** : `page-vie-clee-eleves.php`
- **Parent** : Vie du CLEE (optionnel)

---

### Pages Redirections CPT (2 - Optionnelles)

#### 13. Entreprises & Partenaires (Optionnel)
- **Titre** : `Entreprises & Partenaires`
- **Slug** : `companies`
- **Template** : `page-companies.php`
- **Note** : Redirige vers `/partenaires/` (archive CPT)

#### 14. Établissements & Formations (Optionnel)
- **Titre** : `Établissements & Formations`
- **Slug** : `establishments`
- **Template** : `page-establishments.php`
- **Note** : Redirige vers `/etablissements/` (archive CPT)

---

## Vérification Slugs

Après création, vérifier que les slugs correspondent exactement :

```
/le-clee/
/jeunes-familles/
/vie-clee/
/contact/
/bureau-membres/
/nos-actions/
/documents-officiels/
/orientation-insertion/
/pfmp/
/vie-clee-eleves/
```

**Important** : Si un slug est différent, le modifier dans :
**Pages** > Sélectionner la page > **Permalien** > Cliquer sur "Modifier" > Corriger le slug

---

## Configuration Page d'Accueil

1. **Réglages** > **Lecture**
2. **Affichage de la page d'accueil** : Sélectionner "Une page statique"
3. **Page d'accueil** : Sélectionner "Accueil"
4. **Page des articles** : Laisser vide (ou créer une page "Blog" si nécessaire)
5. **Enregistrer les modifications**

---

## Hiérarchie des Pages (Optionnel mais recommandé)

Pour créer une hiérarchie claire dans le menu :

### Le CLEE
- Bureau & Membres
- Nos Actions
- Documents Officiels

### Jeunes & Familles
- Orientation & Insertion
- PFMP

### Vie du CLEE
- Vie du CLEE - Élèves

**Comment définir un parent** :
1. Éditer la page enfant
2. Panneau de droite > **Attributs de page**
3. **Parent** : Sélectionner la page parente
4. **Mettre à jour**

---

## Ordre Création Recommandé

1. ✅ Le CLEE
2. ✅ Jeunes & Familles
3. ✅ Vie du CLEE
4. ✅ Contact
5. ✅ Bureau & Membres (parent: Le CLEE)
6. ✅ Nos Actions (parent: Le CLEE)
7. ✅ Documents Officiels (parent: Le CLEE)
8. ✅ Orientation & Insertion (parent: Jeunes & Familles)
9. ✅ PFMP (parent: Jeunes & Familles)
10. ✅ Vie du CLEE - Élèves (parent: Vie du CLEE)
11. ✅ Accueil
12. ✅ Configuration page d'accueil (Réglages > Lecture)

---

## Après Création

### Étape 6 : Permaliens
1. **Réglages** > **Permaliens**
2. Structure recommandée : **Nom de l'article** (`/%postname%/`)
3. **Enregistrer les modifications** (cela flush les règles de réécriture)

### Test Navigation
Vérifier que toutes les URLs fonctionnent :
- `http://localhost/votre-site/`
- `http://localhost/votre-site/le-clee/`
- `http://localhost/votre-site/agenda/` (archive CPT)
- `http://localhost/votre-site/partenaires/` (archive CPT)
- `http://localhost/votre-site/etablissements/` (archive CPT)

### Créer Menu
1. **Apparence** > **Menus**
2. **Créer un nouveau menu** : "Menu Principal"
3. **Emplacement** : Cocher "Menu principal"
4. Ajouter les pages dans l'ordre souhaité
5. **Enregistrer le menu**

---

## Statut Actuel

- [x] WordPress installé localement
- [x] Thème CLEE copié et activé
- [x] ACF installé
- [ ] Pages créées (en cours - étape 5)
- [ ] Permaliens configurés (étape 6)
- [ ] Menu créé
- [ ] Options du thème configurées
- [ ] Contenus test ajoutés

---

## Prochaines Étapes

Après avoir créé toutes les pages :

1. **Étape 6** : Flush permaliens (Réglages > Permaliens > Enregistrer)
2. Créer menu principal
3. Configurer **Options du thème** (coordonnées, footer)
4. Ajouter contenu test avec patterns Gutenberg
5. Créer événements/partenaires/établissements test
6. Tester toutes les fonctionnalités

---

## Commande Rapide (si WP-CLI installé)

```bash
# Créer toutes les pages d'un coup
wp post create --post_type=page --post_title="Le CLEE" --post_name="le-clee" --post_status=publish
wp post create --post_type=page --post_title="Jeunes & Familles" --post_name="jeunes-familles" --post_status=publish
wp post create --post_type=page --post_title="Vie du CLEE" --post_name="vie-clee" --post_status=publish
wp post create --post_type=page --post_title="Contact" --post_name="contact" --post_status=publish
wp post create --post_type=page --post_title="Bureau & Membres" --post_name="bureau-membres" --post_status=publish
wp post create --post_type=page --post_title="Nos Actions" --post_name="nos-actions" --post_status=publish
wp post create --post_type=page --post_title="Documents Officiels" --post_name="documents-officiels" --post_status=publish
wp post create --post_type=page --post_title="Orientation & Insertion" --post_name="orientation-insertion" --post_status=publish
wp post create --post_type=page --post_title="PFMP" --post_name="pfmp" --post_status=publish
wp post create --post_type=page --post_title="Vie du CLEE - Élèves" --post_name="vie-clee-eleves" --post_status=publish
wp post create --post_type=page --post_title="Accueil" --post_name="accueil" --post_status=publish

# Flush permalinks
wp rewrite flush
```

---

**Guide créé le** : 20 janvier 2026  
**Durée estimée** : 10-15 minutes pour créer toutes les pages
