# Guide de Test du Système de Portail

## Démarrage Rapide

### Option 1 : Serveur HTTP Simple (Recommandé)

#### Avec Python
```powershell
# Python 3.x
python -m http.server 8000

# Ou Python 2.x
python -m SimpleHTTPServer 8000
```

#### Avec Node.js (http-server)
```powershell
# Installer http-server globalement (une seule fois)
npm install -g http-server

# Démarrer le serveur
http-server -p 8000
```

#### Avec PHP
```powershell
php -S localhost:8000
```

Puis ouvrez votre navigateur : **http://localhost:8000**

### Option 2 : Extension VS Code

1. Installez l'extension **Live Server** dans VS Code
2. Clic droit sur `index.html` → "Open with Live Server"

---

## Test du Système de Portail

### 1. Test de la Première Visite

1. **Effacez le localStorage** de votre navigateur :
   - Ouvrez DevTools (F12)
   - Onglet "Application" ou "Storage"
   - Supprimez les clés `clee_user_profile` et `clee_theme`

2. **Accédez à l'accueil** : http://localhost:8000
   - Vous devriez être **automatiquement redirigé** vers `pages/portail.html`

3. **Page de portail** :
   - Vérifiez l'affichage des 2 cartes (Étudiant / Professionnel)
   - Les cartes doivent s'élever au survol
   - Les icônes doivent tourner légèrement au survol

### 2. Test du Profil Étudiant

1. **Cliquez sur "Accéder à l'espace étudiant"**
   - Animation de feedback (la carte se rétrécit puis s'agrandit)
   - Redirection automatique vers `index.html`

2. **Vérifiez le thème étudiant** :
   - Hero section avec dégradé orange → jaune → cyan
   - Boutons avec dégradé orange
   - Section-title avec dégradé de couleur
   - Chiffres clés colorés (orange, cyan, vert, rouge)
   - Badge flottant "Mode Étudiant" en bas à droite

3. **Naviguez entre les pages** :
   - Le thème étudiant doit **rester actif**
   - Le badge "Mode Étudiant" doit apparaître sur toutes les pages

4. **Cliquez sur le badge "Mode Étudiant"** :
   - Vous devriez revenir au portail

### 3. Test du Profil Professionnel

1. **Sur le portail, cliquez sur "Accéder à l'espace professionnel"**
   - Redirection vers `index.html`

2. **Vérifiez le thème professionnel** :
   - Hero section avec dégradé bleu sobre
   - Boutons bleus sans dégradés vifs
   - Section-title en bleu foncé (pas de dégradé)
   - Chiffres clés avec couleur uniforme
   - Badge flottant bleu "Mode Professionnel" en bas à droite

3. **Naviguez entre les pages** :
   - Le thème professionnel doit rester actif
   - Le badge "Mode Professionnel" doit apparaître sur toutes les pages

4. **Cliquez sur le badge "Mode Professionnel"** :
   - Vous devriez revenir au portail

### 4. Test de la Persistance

1. **Choisissez un profil** (étudiant ou professionnel)
2. **Fermez le navigateur complètement**
3. **Rouvrez et accédez à** http://localhost:8000
   - Vous devriez **directement voir l'accueil** avec le thème choisi
   - Pas de redirection vers le portail

4. **Vérifiez le localStorage** (DevTools → Application) :
   - `clee_user_profile` : "etudiant" ou "professionnel"
   - `clee_theme` : "etudiant" ou "professionnel"

### 5. Test Responsive

#### Desktop (>1024px)
- Cartes du portail côte à côte
- Badge flottant en bas à droite

#### Tablet (768px - 1023px)
- Cartes du portail adaptées
- Navigation correcte

#### Mobile (<768px)
- Cartes du portail empilées verticalement
- Badge réduit mais visible
- Menu hamburger fonctionnel

**Astuce** : Utilisez DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M) pour tester différentes tailles d'écran.

---

## Comparaison Visuelle Rapide

### Page de Démonstration

Accédez à **http://localhost:8000/pages/theme-demo.html**

Cette page permet de **basculer instantanément** entre les thèmes sans changer de profil :
- Cliquez sur "Thème Professionnel" ou "Thème Étudiant"
- Comparez les boutons, titres, cartes, chiffres clés

---

## Résolution de Problèmes

### Le thème ne s'applique pas

1. **Vérifiez la console** (F12) :
   - Recherchez des erreurs JavaScript
   - Vérifiez que `ThemeModule.init()` s'exécute

2. **Vérifiez le localStorage** :
   ```javascript
   // Dans la console DevTools
   localStorage.getItem('clee_user_profile')
   localStorage.getItem('clee_theme')
   ```

3. **Vérifiez le chargement du CSS** :
   - Ouvrez l'onglet "Network" dans DevTools
   - Vérifiez que `theme-etudiant.css` se charge en mode étudiant

### Le badge ne s'affiche pas

1. Vérifiez que vous êtes en **mode étudiant**
2. Vérifiez que vous n'êtes **pas sur portail.html** (le badge n'apparaît pas sur cette page)
3. Inspectez l'élément `.theme-badge` dans DevTools

### Redirection infinie

1. **Effacez le localStorage** :
   ```javascript
   localStorage.clear()
   ```

2. **Rechargez la page** : Ctrl+F5 (rechargement forcé)

---

## Checklist de Tests

- [ ] Première visite → redirection automatique vers portail
- [ ] Sélection profil étudiant → thème coloré appliqué
- [ ] Sélection profil professionnel → thème sobre appliqué
- [ ] Badge "Mode Étudiant" visible et cliquable en mode étudiant
- [ ] Badge "Mode Professionnel" visible et cliquable en mode professionnel
- [ ] Navigation entre pages → thème persiste
- [ ] Fermeture/réouverture navigateur → thème persiste
- [ ] Clic sur badge → retour au portail
- [ ] Changement de profil → nouveau thème appliqué
- [ ] Responsive mobile → cartes empilées, badge visible
- [ ] Page theme-demo.html → basculement instantané fonctionnel

---

## Commandes Utiles

### Effacer le localStorage via console
```javascript
localStorage.removeItem('clee_user_profile');
localStorage.removeItem('clee_theme');
// ou
localStorage.clear();
```

### Forcer un profil spécifique
```javascript
localStorage.setItem('clee_user_profile', 'etudiant');
localStorage.setItem('clee_theme', 'etudiant');
location.reload();
```

### Vérifier le thème actuel
```javascript
document.documentElement.getAttribute('data-theme');
// Retourne: 'etudiant' ou null (professionnel)
```

---

## Support

Pour toute question ou problème, consultez :
- [PORTAIL-GUIDE.md](PORTAIL-GUIDE.md) - Documentation complète du système
- [PAGES-STRUCTURE.md](PAGES-STRUCTURE.md) - Structure des pages
- [README.md](README.md) - Documentation générale du projet

**Bon test !** 🚀
