# Introduction
## Mission
Réaliser une maquette d'un site web pour le CLEE (*Comité Local École-Entreprise*) Bordeaux Avenir avec les fonctionnalités demandées afin que la conception du dit site sur WordPress soit plus rapide (*autre groupe de stagiaire en Juin*).
## Contexte
Le Comité Local École-Entreprise (CLEE) Bordeaux Avenir est une instance partenariale qui rassemble les acteurs de l'éducation et du monde économique du bassin bordelais. Créé pour répondre aux enjeux de l'insertion professionnelle des jeunes et de l'adéquation entre formation et emploi, le CLEE fédère autour de projets communs.

Notre comité réunit deux groupes d'acteurs :
- Les acteurs de l'éducation et de la formation (collèges, lycées, institutionnels...)
- Les acteurs du monde économique (entreprises, organisations professionnelles...)

Le CLEE Bordeaux Avenir s'inscrit dans le réseau national des Comités Locaux École-Entreprise, coordonné par l'Éducation Nationale et les organisations professionnelles. Notre ancrage territorial fort nous permet d'adapter nos actions aux spécificités économiques et sociales de notre bassin d'emploi.

Le CLEE Bordeaux Avenir veut un nouveau site pour le représenter sur Internet et à demandé à l'EPSI Bordeaux de l'effectuer. Ce projet sera fait en deux étapes: 
1. Binôme de B2 (Alexandre et Xavier Sanchez) de Janvier à fin Février 2026 pour la conception de la maquette du site WEB
2. Binôme ou trinôme de B1 de Mai à fin Juin pour la conception du WordPress à partir de la maquette.
# Plan
## I. Présentation de la ou des missions (3-4 pages)
### A - Contexte professionnel de la mission
+ Bases de départ
	+ Acteurs 
		+ Jacques coach MyDil
		+ Personnel du CLEE
		+ Xavier et Alexandre SANCHEZ
		+ Barbara directrice EPSI
+ Objectifs
	+ Réaliser une maquette d'un site web pour le CLEE (*Comité Local École-Entreprise*) Bordeaux Avenir avec les fonctionnalités demandées.
	+ faciliter la transition afin que la conception du dit site sur WordPress soit plus rapide (*autre groupe de stagiaire en Juin*).
	+ ajouter chaque les rôles de chaque catégorie d'utlisateur
+ Enjeux pour l'entreprise
	+ Positif
		+ Visibilité 
	+ négatif
		+ temps perdu 
### B - Problèmes à résoudre/ contraintes/ limites (Critique de l’existant éventuellement)
+ Temporel
		+ passation du projet: 2 groupes de stagiaires, un en janvier-février et un autre en mai juin
		+ finir le projet wordpress en juin
+ spatial
	+ aucun local fixe pour l'association
+ humain
	+ pas de connaissance spécialisée en informatique autre qu'une gestion de wordpress de la part du client
+ financier
	+ Le CLEE étant une association, ils ont peu de moyens
	+ charges de l'hébergement du serveur wordpress
## II. Démarche suivie pour effectuer cette ou ces missions (5/6 pages) 
### A - Processus suivi - méthode
+ Méthode retenue: 
	+ tableaux de répartition des tâches (*Google Sheets*)
	+ Charte graphique sur Figma
	+ Versioning du projet sur GitHub
	+ Maquette faite sur HTML CSS avec scripts en JavaScript
+ Présentation du processus adopté: 
	+ Charte graphique -> répartition des taches & versioning -> réalisation de la maquette 
### B - Organisation des missions
+ Planning, compte-rendu, réunions, formation: 
	+ pas de planning, juste une date de rendu pour la maquette
	+ 2 compte rendu dont un sur Teams
	+ 2 réunions, 1 pour la présentation de la maquette (*v1*), 2ème pour la mise au point, 3ème le 13 Mars reunion final pour presenter la maquette
+ Lecture de documents, tutoriaux: 
	+ Charte graphique déjà existante
	+ Padlet
	+ tutoriel wordpress avec utilisation O2Switch
## III. Réalisation de la ou des missions (6/7 pages)
### A - Justification de solution retenue
+ Comparatif logiciel et matériel: 
	+ maquette Figma 
	+ maquette responsive en html avec scripts js
+ Choix retenu(s): 
	+ Maquette en html pour plus d’interactivité 
### B - Étapes essentielles
+ Analyse Fonctionnalités:
	+ **Navigation (Header/Navbar)**
	
		+ Menu responsive avec burger mobile (écran < 1200px)
		
		+ Menu déroulant sur desktop avec 5 sections principales
		 
		+ Surbrillance de la page active
		
		+ Lien de connexion dans la navbar
		
		+ Gestion du focus clavier pour l'accessibilité
	
	+ **Footer**
	
		+ Synchronisation automatique avec l'image du hero (calque partagé)
		
		+ Liens vers toutes les pages du site
		
		+ Informations de contact et mentions légales
		
		+ Icônes des réseaux sociaux
		
		+ Image de fond alignée sur le bas du hero
	
	+ **<mark style="background:rgba(240, 200, 0, 0.2)">Système d'accessibilité</mark>**
	
		+ Bannière de notification au premier lancement (localStorage)
		
		+ Page portail dédiée aux options d'accessibilité
		
		+ 4 niveaux de taille de police (Petit, Normal, Grand, Très grand)
		
		+ Mode contraste élevé
		
		+ Option de réduction des animations
		
		+ Thème étudiant par défaut avec couleurs renforcées
		
		+ Persistance des préférences dans le navigateur
	
	+ **<mark style="background:rgba(240, 200, 0, 0.2)">Page d'accueil (index.html)</mark>**
	
		+ Hero section dynamique avec calque photo
		
		+ 2 boutons CTA (*Call To Action*) (Devenir partenaire, Découvrir formations)
		
		+ Section chiffres clés avec compteurs animés (120+ partenaires, etc.)
		
		+ Section actualités du CLEE
		
		+ Section contact rapide
		
		+ Fil d'Ariane superposé au hero
	
	+ <mark style="background:rgba(240, 200, 0, 0.2)">**Page Entreprises & Partenaires**</mark>
	
		+ Catalogue complet des entreprises partenaires (chargé depuis JSON)
		
		+ Barre de recherche en temps réel par nom d'entreprise
		
		+ Système de filtrage multi-critères par secteur d'activité (20 secteurs)
		
		+ Cartes partenaires avec informations clés et badges sectoriels
		
		+ Section avantages du partenariat
		
		+ Processus de candidature guidé
		
		+ Témoignages d'entreprises partenaires
		
		+ Formulaire de contact dédié avec validation
	
	+ <mark style="background:rgba(240, 200, 0, 0.2)">**Page Établissements & Formations**</mark>
	
		+ Carte interactive basée sur Leaflet/OpenStreetMap (sans clé API)
		
		+ Liste d'établissements générée depuis JSON (données coordonnées GPS)
		
		+ Marqueurs de carte différenciés par type (collèges en rouge, lycées en bleu)
		
		+ Système de filtrage par secteur et niveau
		
		+ Barre de recherche pour trouver un établissement
		
		+ Catalogue de formations avec descriptions complètes
		
		+ Cartes d'établissement avec informations détaillées (adresse, contact, formations)
	
	+ **Page PFMP (Périodes de Formation en Milieu Professionnel)**
	
		+ Tableau de formations avec système de pagination complet
		
		+ Affichage paramétrable (5, 10, 15, 20, 50 résultats par page)
		
		+ Navigation par pages avec boutons précédent/suivant et ellipses
		
		+ Compteur de résultats ("Affichage de X à Y sur Z formation(s)")
		
		+ Tri par colonnes (établissement, formation, secteur, niveau, modalités, périodes)
		
		+ Filtres multicritères (établissement, secteur, niveau, modalité, recherche textuelle)
		
		+ Réinitialisation automatique à la page 1 lors du changement de filtres
		
		+ Section ressources avec cartes PFMP/Stage en 2 colonnes
		
		+ Bloc "Modèles pour vos Candidatures" avec documents téléchargeables
		
		+ Grille de liens utiles 3x2
	
	+ <mark style="background:rgba(240, 200, 0, 0.2)">**Page Jeunes & Familles**</mark>
	
		+ Ressources d'orientation professionnelle détaillées
		
		+ Guide d'insertion dans le monde du travail
		
		+ Informations sur les stages et l'apprentissage
		
		+ Section témoignages d'anciens élèves
		
		+ Contenu pédagogique adapté aux jeunes et parents
		
		+ Sous-pages : Orientation & Insertion, Vie du CLEE élèves
	
	+ **Page Vie du CLEE**
	
		+ Section actualités du réseau école-entreprise
		
		+ Agenda complet des événements (anciennement sur index.html)
		
		+ Système de filtrage par type d'événement (forum, atelier, conférence, rencontre)
		
		+ Galerie photos/vidéos des événements passés
		
		+ Cartes d'événements avec détails (date, lieu, organisateur, participants)
		
		+ Vue liste avec dates en texte orange primaire
	
	+ **Page Agenda**
	
		+ **Calendrier interactif des événements 2026**
		
		+ Vue mensuelle avec navigation mois par mois
		
		+ Filtrage par type d'événement (tous, forum, atelier, conférence, rencontre)
		
		+ Cartes d'événements avec informations complètes
		
		+ Modal de détail pour chaque événement (à venir)
		
		+ Dates formatées et surbrillance des jours événements
	
	+ **Page Le CLEE**
	
		+ Présentation de l'histoire et de la mission du CLEE
		
		+ Page Bureau & Membres (composition de l'équipe)
		
		+ Page Nos Actions (projets et initiatives en cours)
		
		+ Page Documents Officiels (statuts, rapports, PV assemblées)
		
		+ Navigation entre sous-pages via menu latéral
	
	+ **Système d'authentification**
	
		+ Page de connexion avec formulaire sécurisé
		
		+ Page d'inscription pour créer un compte
		
		+ Validation des champs (email, mot de passe, téléphone)
		
		+ Gestion des messages d'erreur et de succès
		
		+ Redirection vers dashboard après connexion
		
		+ Utilisation du fichier users.json pour la gestion des comptes
	
	+ **Page Contact**
	
		+ Formulaire de contact avec validation en temps réel
		
		+ Champs : nom, prénom, email, téléphone, sujet, message
		
		+ Validation des formats (email, téléphone)
		
		+ Feedback visuel sur les erreurs de saisie
		
		+ Messages de succès/erreur après soumission
		
		+ **Accessible depuis le footer et divers CTAs du site**
	
	+ **Modules JavaScript partagés (common.js)**
	
		+ **NavigationModule : gestion du menu burger mobile**
		
		+ DropdownMenuModule : menus déroulants sur desktop
		
		+ SmoothScrollModule : défilement fluide vers les ancres
		
		+ HeaderScrollModule : ombre du header au scroll
		
		+ ScrollAnimationModule : animations au défilement (Intersection Observer)
		
		+ CounterModule : compteurs animés pour les chiffres clés
		
		+ ActiveLinkModule : surbrillance de la page active dans la nav
		
		+ <mark style="background:rgba(240, 200, 0, 0.2)">ThemeModule : gestion du thème étudiant et des préférences</mark>
		
		+ FooterHeroImageModule : synchronisation automatique footer/hero
		
		+ AccessibilityBannerModule : bannière de notification accessibilité
	
	+ **<mark style="background:rgba(240, 200, 0, 0.2)">Web Components (js/components/)</mark>**
	
		+ clee-nav-bar : composant de navigation réutilisable
		
		+ clee-footer : composant de pied de page centralisé
		
		+ clee-hero : composant hero section (à venir)
		
		+ clee-primary-button : bouton principal standardisé
	
	+ **Design System centralisé (globals.css)**
	
		+ Variables CSS pour couleurs (palette primaire/secondaire, niveaux de gris)
		
		+ Tokens typographiques (Roboto, Barlow Condensed, tailles standardisées)
		
		+ Espacements normalisés (xs à 2xl)
		
		+ Ombres prédéfinies (sm à xl)
		
		+ Classes utilitaires pour boutons, cartes, grilles
		
		+ Animations et transitions standardisées
	
	+ **Pages utilitaires**
	
		+ Page Dashboard : espace utilisateur personnalisé (après connexion)
		
		+ Page Mentions légales : informations légales et RGPD
		
		+ <mark style="background:rgba(240, 200, 0, 0.2)">Page Portail : options d'accessibilité complètes</mark>
		
		+ <mark style="background:rgba(240, 200, 0, 0.2)">Page Colors Reference : documentation du design system (pour développeurs)</mark>
	
	+ **Optimisations et performance**
	
		+ **<mark style="background:rgba(240, 200, 0, 0.2)">Architecture modulaire (40% de réduction du code dupliqué)</mark>**
		
		+ Mise en cache optimale des CSS/JS partagés
		
		+ Images avec lazy loading (*en attendant la banque d'images de l'association*)
		
		+ Chargement asynchrone des données JSON
		
		+ Animations GPU-accélérées (transform/opacity)
		
		+ Responsive design mobile-first (breakpoints 480px, 768px, 1024px)
		  
		+ Mise en place : outils mis en œuvre, déroulement et incidents
## IV. Évaluation des réalisations et des compétences mobilisées (3/5 pages)
### A - Adéquation du travail
+ Réaction des demandeurs et intéressés : partir de la mission pour aboutir à l’intérêt général de l’entreprise: 
	+ les clients voulaient un <mark style="background:rgba(240, 200, 0, 0.2)">site web leur permettant d'être représenté </mark>sur le web et <mark style="background:rgba(240, 200, 0, 0.2)">sont donc passés par l'EPSI</mark> pour l'effectuer.
	+ Notre mission fut donc de concevoir une maquette de site fonctionnel imitant le fonctionnement du futur site sur <mark style="background:rgba(240, 200, 0, 0.2)">wordpress</mark> que livreront <mark style="background:rgba(240, 200, 0, 0.2)">les prochains stagiaires en Mai/Juin</mark>
	+ nous avons commencé par travaillé sur <mark style="background:rgba(240, 200, 0, 0.2)">Figma</mark> pour la dite maquette en nous inspirant <mark style="background:rgba(240, 200, 0, 0.2)">des demandes fournis par les clients </mark>et la norme générale présente sur d'autres sites
	+ nous sommes passé en meme temps sur le developpement de la dite maquette <mark style="background:rgba(240, 200, 0, 0.2)">en html/css</mark> au debut par curiosité puis ensuite par praticité car il était beaucoup plus pratique de réaliser dans ce cas ci precisemment une maquette interactive avec l'ajout ou non de fonctionnalités. 
	+ <mark style="background:rgba(240, 200, 0, 0.2)">A la suite de notre premier entretien avec les clients</mark>, nous avons eu la confirmation de pouvoir nous concentrer le modele html, ce qui permettrait aux client d'avoir un aperçu en temps réel des modifications apportés au cours du temps une fois celui ci hébergé en ligne (*Vercel ici*)
	+ nous avons mis en place <mark style="background:rgba(240, 200, 0, 0.2)">une architecture modulaire</mark> pour éviter la duplication du code entre les 20 pages du site, en séparant les styles globaux (*header, footer, boutons*) des styles spécifiques à chaque page
	+ nous avons adopté <mark style="background:rgba(240, 200, 0, 0.2)">un système de versioning sur GitHub</mark> avec des branches dédiées (*dev, dev_alex, dev_xav*) pour permettre un travail collaboratif efficace et une traçabilité des modifications
	+ nous avons créé <mark style="background:rgba(240, 200, 0, 0.2)">un design system centralisé</mark> dans globals.css avec des variables CSS pour les couleurs, la typographie et les espacements afin de garantir la cohérence visuelle sur l'ensemble du site
	+ nous avons développé <mark style="background:rgba(240, 200, 0, 0.2)">des fonctionnalités interactives avancées</mark> telles que la carte interactive des établissements (*Leaflet/OpenStreetMap sans clé API*), le système de pagination des formations, et les filtres multicritères pour les entreprises partenaires
	+ nous avons implémenté <mark style="background:rgba(240, 200, 0, 0.2)">un système d'accessibilité complet</mark> comprenant 4 niveaux de taille de texte, un mode contraste élevé, une réduction d'animations, ainsi qu'une bannière de notification au premier lancement pour sensibiliser les utilisateurs
	+ suite à <mark style="background:rgba(240, 200, 0, 0.2)">notre deuxième entretien avec les clients</mark>, nous avons restructuré le contenu de certaines pages (*déplacement de l'agenda de l'accueil vers vie-clee, déplacement du tableau des formations vers PFMP, simplification de nos-actions*)
	+ nous avons créé <mark style="background:rgba(240, 200, 0, 0.2)">des Web Components réutilisables</mark> (*clee-nav-bar, clee-footer, clee-primary-button*) pour centraliser le code du header, footer et des boutons principaux, permettant une maintenance simplifiée et une cohérence garantie
	+ nous avons optimisé le site pour <mark style="background:rgba(240, 200, 0, 0.2)">le responsive design</mark> avec des breakpoints à 480px, 768px et 1024px pour garantir une expérience optimale sur mobile, tablette et desktop
	+ nous avons mis en place <mark style="background:rgba(240, 200, 0, 0.2)">un système de chargement dynamique des données</mark> depuis des fichiers JSON (*partenaires.json, formations.json, users.json*) pour faciliter la mise à jour du contenu sans modifier le code HTML
	+ nous avons documenté l'ensemble du projet dans <mark style="background:rgba(240, 200, 0, 0.2)">plusieurs fichiers Markdown</mark> (*README.md, CHANGELOG.md, PAGES-STRUCTURE.md, ACCESSIBILITE-GUIDE.md, Charte graphique.md*) pour assurer la transmission du projet aux futurs stagiaires et mainteneurs
+ Proposition d’amélioration: 
### B – Compétences mises en œuvre
Rétrospective des compétences exploitées :
+ Identifier les compétences mobilisées pour mener à bien la mission/les missions :
	+ Quelles compétences ont été mobilisées par l’apprenant.e ?
	+ Dans quels domaines la mission/les missions a-t-elle (ont-elles) permis la montée en compétences de l’apprenant.e ? Prendre un exemple et développer ce point (situation de départ, processus d’amélioration, situation d’arrivée, 9 qu’a apporté le développement de cette compétence pour l’apprenant.e, pour la/les missions, pour l’entreprise ?)
	+ **Prospective des compétences à développer**
+ Pour mettre en place ses propositions d’amélioration, l’apprenant.e doit il/elle acquérir de nouvelles compétences ? et si oui lesquelles ?
+ Quelles compétences l’apprenant.e doit il/elle encore développer/acquérir pour travailler comme Concepteur-Intégrateur DevOps ?
## Conclusion
+ Analyse des conditions de travail
+ Apport de la/des mission(s) de l’entreprise pour le stagiaire.
+ Prochain stage (quel type de stage pourrait vous intéresser suite à cette expérience ? Pourquoi ? Cette réflexion ne vous engage en aucune façon, il s’agit d’une réflexion à un temps T)
+ *Glossaire* 
+ *Bibliographie et webographie* 
+ *Annexes*
