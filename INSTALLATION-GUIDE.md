# Guide d'installation et de déploiement - CLEE Bordeaux Avenir WordPress

## Vue d'ensemble

Ce guide vous accompagne dans l'installation et la configuration complète du thème WordPress CLEE Bordeaux Avenir, de l'environnement local jusqu'à la mise en production.

## Prérequis techniques

### Serveur
- PHP 7.4 ou supérieur
- MySQL 5.7+ ou MariaDB 10.3+
- Apache ou Nginx
- HTTPS (recommandé pour la production)

### WordPress
- Version 6.0 ou supérieure
- Extensions recommandées :
  - Advanced Custom Fields (ACF) - version Pro recommandée
  - Yoast SEO (optionnel)
  - WP Super Cache ou W3 Total Cache (pour performance)

### Environnement local (pour développement)
- LocalWP (recommandé) ou MAMP/XAMPP
- Git (pour versionning)
- Éditeur de code (VS Code recommandé)

---

## Phase 0 : Installation de l'environnement local

### Option A : Avec LocalWP (recommandé)

1. **Télécharger LocalWP**
   - Aller sur [localwp.com](https://localwp.com)
   - Télécharger et installer

2. **Créer un nouveau site**
   ```
   Nom du site : CLEE Bordeaux Avenir
   Domaine local : clee-bordeaux.local
   PHP : 8.0
   Serveur web : Nginx
   MySQL : 8.0
   ```

3. **Démarrer le site**
   - Cliquer sur "Start Site"
   - Noter les identifiants admin générés

### Option B : Installation manuelle

1. **Télécharger WordPress**
   ```bash
   wget https://wordpress.org/latest.zip
   unzip latest.zip
   ```

2. **Créer la base de données**
   ```sql
   CREATE DATABASE clee_bordeaux CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'clee_user'@'localhost' IDENTIFIED BY 'mot_de_passe_fort';
   GRANT ALL PRIVILEGES ON clee_bordeaux.* TO 'clee_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

3. **Configurer WordPress**
   - Copier `wp-config-sample.php` vers `wp-config.php`
   - Remplir les informations de connexion à la base de données

4. **Lancer l'installateur**
   - Accéder à `http://localhost/wordpress`
   - Suivre les étapes d'installation

---

## Phase 1 : Installation du thème

### 1. Copier le thème

**Depuis le repository Git :**
```bash
cd /chemin/vers/wordpress/wp-content/themes/
cp -r /chemin/vers/Medef-Liste-EPSI/php/clee-bordeaux-theme ./clee-bordeaux-theme
```

**Structure attendue :**
```
wp-content/themes/clee-bordeaux-theme/
├── inc/
├── assets/
├── functions.php
├── style.css
├── theme.json
└── ...
```

### 2. Installer les plugins requis

**Via l'admin WordPress :**
1. Aller dans Extensions > Ajouter
2. Rechercher "Advanced Custom Fields"
3. Installer et activer

**Ou via WP-CLI :**
```bash
wp plugin install advanced-custom-fields --activate
```

### 3. Activer le thème

**Via l'admin WordPress :**
1. Aller dans Apparence > Thèmes
2. Trouver "CLEE Bordeaux Avenir"
3. Cliquer sur "Activer"

**Ou via WP-CLI :**
```bash
wp theme activate clee-bordeaux-theme
```

### 4. Regénérer les permaliens

1. Aller dans Réglages > Permaliens
2. Sélectionner "Nom de l'article"
3. Cliquer sur "Enregistrer les modifications"

---

## Phase 2 : Configuration du contenu

### 1. Créer les pages WordPress

**Liste complète des pages à créer :**

| Titre de la page | Slug | Template utilisé |
|------------------|------|------------------|
| Accueil | (vide) | front-page.php |
| Le CLEE | le-clee | page-le-clee.php |
| Bureau & Membres | bureau-membres | page-bureau-membres.php |
| Nos Actions | nos-actions | page-nos-actions.php |
| Documents Officiels | documents-officiels | page-documents-officiels.php |
| Jeunes & Familles | jeunes-familles | page-jeunes-familles.php |
| PFMP | pfmp | page-pfmp.php |
| Orientation & Insertion | orientation-insertion | page-orientation-insertion.php |
| Vie du CLEE pour les élèves | vie-clee-eleves | page-vie-clee-eleves.php |
| Vie du CLEE | vie-clee | page-vie-clee.php |
| Contact | contact | page-contact.php |

**Méthode manuelle :**
1. Aller dans Pages > Ajouter
2. Saisir le titre
3. Cliquer sur le bouton ⚙️ à droite
4. Dans "Permalien", vérifier que le slug correspond
5. Publier

**Méthode automatique via WP-CLI :**
```bash
# Script pour créer toutes les pages
wp post create --post_type=page --post_title="Le CLEE" --post_name="le-clee" --post_status=publish
wp post create --post_type=page --post_title="Bureau & Membres" --post_name="bureau-membres" --post_status=publish
wp post create --post_type=page --post_title="Nos Actions" --post_name="nos-actions" --post_status=publish
wp post create --post_type=page --post_title="Documents Officiels" --post_name="documents-officiels" --post_status=publish
wp post create --post_type=page --post_title="Jeunes & Familles" --post_name="jeunes-familles" --post_status=publish
wp post create --post_type=page --post_title="PFMP" --post_name="pfmp" --post_status=publish
wp post create --post_type=page --post_title="Orientation & Insertion" --post_name="orientation-insertion" --post_status=publish
wp post create --post_type=page --post_title="Vie du CLEE pour les élèves" --post_name="vie-clee-eleves" --post_status=publish
wp post create --post_type=page --post_title="Vie du CLEE" --post_name="vie-clee" --post_status=publish
wp post create --post_type=page --post_title="Contact" --post_name="contact" --post_status=publish
wp post create --post_type=page --post_title="Accueil" --post_name="accueil" --post_status=publish
```

### 2. Configurer la page d'accueil

1. Aller dans Réglages > Lecture
2. Sélectionner "Une page statique"
3. Page d'accueil : "Accueil"
4. Page des articles : (laisser vide ou créer une page "Blog")
5. Enregistrer

### 3. Créer les menus

**Menu principal :**
1. Aller dans Apparence > Menus
2. Créer un nouveau menu "Menu principal"
3. Cocher "Menu principal" dans "Réglages du menu"
4. Ajouter les pages :
   - Le CLEE
   - Entreprises & Partenaires (lien vers `/partenaires/`)
   - Établissements & Formations (lien vers `/etablissements/`)
   - Jeunes & Familles
   - Vie du CLEE
5. Enregistrer

**Menu footer :**
1. Créer un nouveau menu "Menu footer"
2. Cocher "Menu footer" dans "Réglages du menu"
3. Organiser en colonnes via les sous-menus
4. Enregistrer

### 4. Créer les taxonomies

**Types d'événements :**
1. Aller dans Événements > Types d'événements
2. Créer les termes :
   - Conférence
   - Atelier
   - Forum
   - Visite d'entreprise
   - Salon

**Catégories de partenaires :**
1. Aller dans Partenaires > Catégories
2. Créer les termes :
   - Industrie
   - Services
   - Commerce
   - Administration publique
   - Autre

**Catégories de formations :**
1. Aller dans Établissements > Catégories
2. Créer les termes :
   - CAP
   - Bac Pro
   - BTS
   - Licence
   - Master

---

## Phase 3 : Configuration des options du thème

### 1. Options du thème (ACF)

1. Aller dans "Options du thème" (menu admin)
2. Remplir les onglets :

**Onglet Coordonnées :**
```
Adresse : 
123 Rue de Bordeaux
33000 Bordeaux

Téléphone : 05 XX XX XX XX
Email : contact@clee-bordeaux.fr
```

**Onglet Réseaux sociaux :**
```
Facebook : https://facebook.com/clee-bordeaux
Twitter : https://twitter.com/clee-bordeaux
LinkedIn : https://linkedin.com/company/clee-bordeaux
Instagram : https://instagram.com/clee-bordeaux
```

**Onglet Footer :**
```
Texte du footer : 
Le CLEE Bordeaux Avenir accompagne les jeunes dans leur insertion professionnelle...

Copyright : 
© 2026 CLEE Bordeaux Avenir - Tous droits réservés
```

3. Enregistrer les modifications

---

## Phase 4 : Import du contenu

### Option A : Import manuel

**Événements :**
1. Aller dans Événements > Ajouter
2. Remplir les champs :
   - Titre
   - Contenu (description complète)
   - Extrait
   - Image à la une
   - Champs ACF (dates, lieu, lien inscription)
   - Type d'événement
3. Publier

**Partenaires :**
1. Aller dans Partenaires > Ajouter
2. Remplir les champs ACF
3. Publier

**Établissements :**
1. Aller dans Établissements > Ajouter
2. Remplir les formations dans le repeater
3. Publier

### Option B : Import via CSV (WP All Import)

1. Installer le plugin "WP All Import"
2. Préparer les fichiers CSV avec les colonnes correspondant aux champs ACF
3. Aller dans Tous les imports > Nouveau import
4. Sélectionner le fichier CSV
5. Mapper les colonnes aux champs
6. Lancer l'import

---

## Phase 5 : Tests et vérifications

### Checklist de test

**Navigation :**
- [ ] Le menu principal s'affiche correctement
- [ ] Le menu mobile fonctionne (toggle)
- [ ] Tous les liens sont valides
- [ ] Le breadcrumb s'affiche sur les pages

**Pages institutionnelles :**
- [ ] Le contenu Gutenberg s'affiche correctement
- [ ] Les patterns sont utilisables dans l'éditeur
- [ ] Les couleurs du theme.json sont disponibles

**Custom Post Types :**
- [ ] Les événements s'affichent sur `/agenda/`
- [ ] Les filtres fonctionnent (type, période, mois)
- [ ] Les partenaires s'affichent sur `/partenaires/`
- [ ] Les établissements s'affichent sur `/etablissements/`
- [ ] Les pages single affichent toutes les informations

**Options du thème :**
- [ ] Le footer affiche les coordonnées
- [ ] Les liens sociaux fonctionnent
- [ ] Le copyright est personnalisé

**Responsive :**
- [ ] Le site est responsive sur mobile (< 768px)
- [ ] Le site est responsive sur tablette (768px - 1023px)
- [ ] Le site s'affiche correctement sur desktop (> 1024px)

**Performance :**
- [ ] Les images sont optimisées
- [ ] Les CSS/JS sont minifiés (si plugin cache activé)
- [ ] Le temps de chargement est acceptable

---

## Phase 6 : Déploiement en production

### 1. Préparer le serveur de production

**Vérifier les prérequis serveur :**
```bash
php -v  # >= 7.4
mysql --version  # >= 5.7
```

**Installer WordPress :**
```bash
cd /var/www/html/
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz
mv wordpress clee-bordeaux
cd clee-bordeaux
```

**Créer la base de données :**
```sql
CREATE DATABASE clee_prod CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'clee_prod'@'localhost' IDENTIFIED BY 'mot_de_passe_ultra_fort';
GRANT ALL PRIVILEGES ON clee_prod.* TO 'clee_prod'@'localhost';
FLUSH PRIVILEGES;
```

### 2. Migrer les fichiers

**Méthode 1 : Via FTP/SFTP**
1. Compresser le thème localement
2. Uploader via FileZilla ou autre client SFTP
3. Décompresser sur le serveur

**Méthode 2 : Via Git (recommandé)**
```bash
cd /var/www/html/clee-bordeaux/wp-content/themes/
git clone https://github.com/votre-repo/clee-bordeaux-theme.git
```

### 3. Migrer la base de données

**Export depuis local :**
```bash
wp db export clee_local.sql
```

**Import sur production :**
```bash
wp db import clee_local.sql
wp search-replace 'http://clee-bordeaux.local' 'https://www.clee-bordeaux.fr'
```

### 4. Configurer wp-config.php

```php
define('DB_NAME', 'clee_prod');
define('DB_USER', 'clee_prod');
define('DB_PASSWORD', 'mot_de_passe_ultra_fort');
define('DB_HOST', 'localhost');

define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);

// Sécurité
define('DISALLOW_FILE_EDIT', true);
define('FORCE_SSL_ADMIN', true);

// Clés de sécurité (générer sur https://api.wordpress.org/secret-key/1.1/salt/)
define('AUTH_KEY', '...');
define('SECURE_AUTH_KEY', '...');
// etc.
```

### 5. Configurer le serveur web

**Nginx (exemple de configuration) :**
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.clee-bordeaux.fr clee-bordeaux.fr;
    return 301 https://www.clee-bordeaux.fr$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.clee-bordeaux.fr;

    root /var/www/html/clee-bordeaux;
    index index.php;

    ssl_certificate /etc/ssl/certs/clee-bordeaux.crt;
    ssl_certificate_key /etc/ssl/private/clee-bordeaux.key;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 6. Optimisations post-déploiement

**Plugins recommandés :**
```bash
wp plugin install w3-total-cache --activate
wp plugin install wordfence --activate
wp plugin install wp-optimize --activate
```

**Configurer le cache :**
1. Activer W3 Total Cache
2. Activer Page Cache, Browser Cache, Object Cache
3. Minifier les CSS/JS

**Configurer la sécurité :**
1. Installer et activer Wordfence
2. Lancer un scan de sécurité
3. Activer le firewall

---

## Maintenance et mises à jour

### Sauvegardes régulières

**Via WP-CLI :**
```bash
# Backup base de données
wp db export backups/$(date +%Y-%m-%d).sql

# Backup fichiers
tar -czf backups/files-$(date +%Y-%m-%d).tar.gz wp-content/
```

**Via plugin (UpdraftPlus recommandé) :**
1. Installer UpdraftPlus
2. Configurer les sauvegardes automatiques (quotidien recommandé)
3. Connecter à un stockage distant (Google Drive, Dropbox, S3)

### Mises à jour

**WordPress Core :**
```bash
wp core update
wp core update-db
```

**Plugins :**
```bash
wp plugin update --all
```

**Thème :**
```bash
cd wp-content/themes/clee-bordeaux-theme
git pull origin main
```

### Surveillance

**Monitoring à mettre en place :**
- Uptime monitoring (UptimeRobot, Pingdom)
- Google Analytics
- Google Search Console
- Logs serveur (accès + erreurs)

---

## Support et dépannage

### Problèmes courants

**1. Pages 404 sur les archives CPT**
```bash
# Regénérer les permaliens
wp rewrite flush
```

**2. Champs ACF non visibles**
```bash
# Vérifier que ACF est activé
wp plugin list | grep advanced-custom-fields

# Réactiver si nécessaire
wp plugin activate advanced-custom-fields
```

**3. Erreur "Headers already sent"**
- Vérifier l'encodage UTF-8 sans BOM des fichiers PHP
- Vérifier qu'il n'y a pas d'espaces avant `<?php`

**4. Problèmes de performance**
- Activer un plugin de cache
- Optimiser les images
- Utiliser un CDN (Cloudflare recommandé)

### Logs de débogage

**Activer temporairement en production :**
```php
// Dans wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

**Consulter les logs :**
```bash
tail -f wp-content/debug.log
```

---

## Ressources complémentaires

### Documentation
- WordPress Codex : https://codex.wordpress.org/
- ACF Documentation : https://www.advancedcustomfields.com/resources/
- Gutenberg Handbook : https://developer.wordpress.org/block-editor/

### Support CLEE
- Email technique : dev@clee-bordeaux.fr
- Documentation interne : [lien vers documentation]

### Outils recommandés
- LocalWP : https://localwp.com
- WP-CLI : https://wp-cli.org/
- VS Code : https://code.visualstudio.com/

---

**Version du guide :** 2.0  
**Dernière mise à jour :** Janvier 2026  
**Auteur :** Équipe technique CLEE Bordeaux Avenir
