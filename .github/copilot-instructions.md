# CLEE Bordeaux Avenir - AI Agent Instructions

## Project Overview
Multi-page static website for CLEE Bordeaux Avenir (school-business partnership organization) with **modular architecture**:
- Index page (accueil) at project root: `index.html`
- Static HTML pages in `pages/` directory (16 pages)
- Shared and page-specific stylesheets in `css/` directory
- Shared and page-specific JavaScript in `js/` directory

The codebase uses a **modular architecture** to eliminate code duplication through shared globals + page-specific assets.

## Architecture Pattern

### Project Structure
```
CLEE-Bordeaux-Site/
├── index.html       # Homepage at root for easy deployment (Vercel, Netlify, etc.)
├── pages/           # Static HTML pages (16 pages)
├── css/             # Stylesheets (globals + page-specific)
├── js/              # JavaScript (common.js + page-specific)
└── assets/          # Images and media files
    └── images/
```

### Modular CSS/JS Structure
The project uses a **shared + specific** pattern to avoid duplication:

```
css/
  globals.css          # Shared: variables, header, footer, buttons, animations
  home.css             # Page-specific: index.html only
  companies.css        # Page-specific: companies.html only
  establishments.css   # Page-specific: establishments.html only
  contact.css          # Page-specific: contact.html only
  le-clee.css          # Shared by: le-clee, bureau-membres, nos-actions, documents-officiels
  jeunes-familles.css  # Shared by: jeunes-familles, pfmp, orientation-insertion, vie-clee-eleves
  vie-clee.css         # Page-specific: vie-clee.html only
  agenda.css           # Page-specific: agenda.html only
  auth.css             # Shared by: connexion.html, inscription.html

js/
  common.js            # Shared modules (NavigationModule, SmoothScrollModule, etc.)
  companies.js         # Page-specific: companies filter logic
  establishments.js    # Page-specific: interactive map + formations
  agenda.js            # Page-specific: event calendar
  vie-clee.js          # Page-specific: events display
  contact.js           # Page-specific: contact form handling
  auth.js              # Shared by: connexion.html, inscription.html
```

**Critical Rules for Static HTML**:
```html
<!-- index.html (at root) includes -->
<link rel="stylesheet" href="css/globals.css">
<link rel="stylesheet" href="css/home.css">
<script src="js/common.js"></script>

<!-- Pages in pages/ directory include -->
<link rel="stylesheet" href="../css/globals.css">
<link rel="stylesheet" href="../css/[page-specific].css">
<script src="../js/common.js"></script>
<!-- Page-specific JS only if needed -->
```

### Page Hierarchy (17 pages total)
See [PAGES-STRUCTURE.md](PAGES-STRUCTURE.md) for complete structure:
- **1 homepage at root**: index.html (Accueil)
- **6 main navigation pages**: le-clee, companies, establishments, jeunes-familles, vie-clee, connexion
- **9 sub-pages**: bureau-membres, nos-actions, documents-officiels, orientation-insertion, pfmp, vie-clee-eleves, agenda, connexion, inscription
- **2 utility pages**: contact (accessible via footer/CTAs, not in main nav), mentions-legales (legal notice in footer)
- All pages share identical navigation header/footer structure

## Design System (CSS Variables)

All styling uses CSS variables defined in `globals.css`:
```css
:root {
  --primary-900: rgba(31, 52, 72, 1);  /* Darkest blue */
  --primary-500: rgba(94, 126, 159, 1); /* Mid blue */
  --primary-50: rgba(229, 240, 255, 1); /* Lightest blue */
  --grey-[50-900]: /* Grey scale */
  
  /* Typography tokens */
  --navbar-text-font-family: "Roboto", sans-serif;
  --titre-font-family: "Barlow Condensed", sans-serif;
}
```

**Never use hardcoded colors** - always reference CSS variables or add new ones to globals.css.

## JavaScript Module Pattern

All shared functionality uses **IIFE modules** in `common.js`:
```javascript
const ModuleName = (() => {
  const init = () => { /* initialization logic */ };
  return { init };
})();

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  ModuleName.init();
});
```

**Available shared modules**:
- `NavigationModule`: Mobile menu toggle
- `SmoothScrollModule`: Anchor smooth scrolling  
- `HeaderScrollModule`: Header shadow on scroll
- `ScrollAnimationModule`: Intersection Observer animations
- `CounterModule`: Animated number counters
- `ActiveLinkModule`: Current page highlight in nav

## Key Development Rules

### Working with Static HTML Pages
1. **Adding a new page**:
   - Create HTML in `pages/`
   - Create page-specific CSS in `css/` (or reuse existing if appropriate)
   - Include both globals.css and page-specific CSS in the HTML
   - Include common.js for shared functionality
   - Copy navigation structure from existing pages
   - Update [PAGES-STRUCTURE.md](PAGES-STRUCTURE.md) with the new page

2. **Modifying shared styles** (header, footer, buttons):
   - Edit `css/globals.css` ONLY
   - Changes apply to all pages automatically

3. **Adding reusable functionality**:
   - Add module to `js/common.js`
   - Follow IIFE pattern
   - Initialize in DOMContentLoaded

4. **File paths**: 
   - `index.html` at root references: `css/`, `js/`, `assets/`
   - All HTML files in `pages/` reference assets with `../css/`, `../js/`, `../assets/`
   - Links from `index.html` to pages: `pages/[page-name].html`
   - Links from pages to index: `../index.html`

## Responsive Design
- Desktop: 1024px+
- Tablet: 768px-1023px  
- Mobile: <768px
- Breakpoints defined in each CSS file, use `@media (max-width: ...)` consistently

## Testing Checklist

### Static HTML Testing
When modifying pages, verify:
- [ ] Mobile menu toggle works (NavigationModule)
- [ ] Navigation active state highlights correct page (ActiveLinkModule)
- [ ] Smooth scroll to anchors works (SmoothScrollModule)
- [ ] Header shadow appears on scroll (HeaderScrollModule)
- [ ] All scroll animations trigger correctly (ScrollAnimationModule)
- [ ] Animated counters work if present (CounterModule)
- [ ] Responsive layout at breakpoints: 480px, 768px, 1024px
- [ ] All internal links use correct relative paths (`../`)
- [ ] globals.css and page-specific CSS are both loaded
- [ ] common.js initializes all required modules

## Common Pitfalls
- Don't duplicate code from globals.css into page-specific CSS
- Don't create inline styles - use classes and CSS variables
- Don't forget to initialize new modules in DOMContentLoaded
- Don't use absolute file paths - always use relative paths from pages/
- Don't modify the navigation structure without updating all 17 pages

## Project Stats
- 17 HTML pages (~55KB total, 40% reduction vs duplicated structure)
- CSS shared caching improves load times across pages
- All animations use GPU acceleration (transform/opacity)

## Writing Style & Formatting Rules

### Emojis Usage Policy
**CRITICAL**: Do NOT use emojis in documentation, code comments, or commit messages unless explicitly requested by the user.

**Reasoning**:
- Emojis add visual clutter without adding meaningful information
- Professional documentation should be text-based for accessibility and searchability
- Emojis render inconsistently across different platforms and terminals
- They make diffs harder to read in version control
- Screen readers may announce emojis in distracting ways

**Exceptions** (only when explicitly requested):
- Marketing or user-facing content where visual appeal is a priority
- Social media posts or casual communication channels
- User explicitly asks to add emojis for decoration

**Instead of emojis, use**:
- Clear, descriptive text
- Bold or italic formatting for emphasis
- Proper section headers with Markdown syntax
- Bullet points and numbered lists for structure
- Code blocks and syntax highlighting for technical content

**Examples**:

❌ **Bad** (Don't do this):
```markdown
## 🚀 Features
- ✅ Fast performance
- 🎨 Beautiful design
```

✅ **Good** (Do this):
```markdown
## Features
- Fast performance
- Beautiful design
```

This rule applies to:
- README.md files
- Code comments
- Git commit messages
- Documentation files (.md, .txt)
- Inline comments in HTML/CSS/JS
- AI agent responses

**Note**: Badges (like ![Build Status]) and icons in UI/UX design are acceptable as they serve functional purposes.
