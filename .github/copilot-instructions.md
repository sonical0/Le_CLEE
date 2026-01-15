# CLEE Bordeaux Avenir - AI Agent Instructions

## Project Overview
Multi-page website for CLEE Bordeaux Avenir (school-business partnership organization) with **dual implementations**:
1. **Static HTML prototype** (`pages/` + `css/` + `js/`) - 14 pages, modular architecture
2. **WordPress theme** (`php/clee-bordeaux-theme/`) - auto-converted from static version

The codebase uses a **modular architecture** to eliminate code duplication through shared globals + page-specific assets.

## Architecture Pattern

### Dual Implementation Strategy
```
CLEE-Bordeaux-Site/
├── pages/           # Static HTML prototypes (14 pages)
├── css/             # Source stylesheets (globals + page-specific)
├── js/              # Source scripts (common.js + page-specific)
└── php/clee-bordeaux-theme/   # WordPress theme
    ├── assets/      # Mirrored CSS/JS from root
    ├── *.php        # WordPress templates (header, footer, page-*.php)
    └── functions.php  # Asset enqueuing logic
```

**Important**: Changes to CSS/JS should be made in **root folders** (`css/`, `js/`), then mirrored to `php/clee-bordeaux-theme/assets/`.

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

js/
  common.js            # Shared modules (NavigationModule, SmoothScrollModule, etc.)
  companies.js         # Page-specific: companies filter logic
  establishments.js    # Page-specific: interactive map + formations
  agenda.js            # Page-specific: event calendar
  vie-clee.js          # Page-specific: events display
  contact.js           # Page-specific: contact form handling
```

**Critical Rules for Static HTML**:
```html
<!-- Every HTML page MUST include -->
<link rel="stylesheet" href="../css/globals.css">
<link rel="stylesheet" href="../css/[page-specific].css">
<script src="../js/common.js"></script>
<!-- Page-specific JS only if needed -->
```

### WordPress Theme Integration
WordPress handles asset enqueuing via `functions.php`:
- **Global assets** always loaded: `globals.css`, `common.js`
- **Page-specific assets** conditionally loaded via `is_page()` checks
- **CSS grouping**: Multiple pages share same stylesheet (e.g., `le-clee.css` for 4 pages)
- **Internal links**: `.html` converted to WordPress slugs (e.g., `companies.html` → `get_permalink(get_page_by_path('companies'))`)

### Page Hierarchy (14 pages total)
See [PAGES-STRUCTURE.md](CLEE-Bordeaux-Site/PAGES-STRUCTURE.md) for complete structure:
- **6 main navigation pages**: index, le-clee, companies, establishments, jeunes-familles, vie-clee
- **7 sub-pages**: bureau-membres, nos-actions, documents-officiels, orientation-insertion, pfmp, vie-clee-eleves, agenda
- **1 utility page**: contact (accessible via footer/CTAs, not in main nav)
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
   - Include both globals.css and page-specific CSS
   - Include common.js for shared functionality
   - Copy navigation structure from existing pages

2. **Modifying shared styles** (header, footer, buttons):
   - Edit `css/globals.css` ONLY
   - Changes apply to all pages automatically
   - Mirror changes to `php/clee-bordeaux-theme/assets/css/globals.css`

3. **Adding reusable functionality**:
   - Add module to `js/common.js`
   - Follow IIFE pattern
   - Initialize in DOMContentLoaded
   - Mirror changes to `php/clee-bordeaux-theme/assets/js/common.js`

4. **File paths**: All HTML files in `pages/` reference assets with `../css/` and `../js/`

### WordPress Theme Development
1. **Creating a new WordPress page template**:
   - Create `page-{slug}.php` in theme root (e.g., `page-contact.php`)
   - Add conditional asset enqueuing in `functions.php`:
     ```php
     if (is_page('contact')) {
       wp_enqueue_style('clee-contact', get_template_directory_uri() . '/assets/css/contact.css', ['clee-globals'], '1.0');
       wp_enqueue_script('clee-contact', get_template_directory_uri() . '/assets/js/contact.js', ['clee-common'], '1.0', true);
     }
     ```
   - Ensure corresponding CSS/JS exist in `assets/` folder
   - Create WordPress page with matching slug in admin

2. **Converting internal links for WordPress**:
   - Static: `<a href="companies.html">`
   - WordPress: `<a href="<?php echo esc_url(get_permalink(get_page_by_path('companies'))); ?>">`

3. **WordPress installation**:
   - Copy `php/clee-bordeaux-theme/` to `wp-content/themes/`
   - Activate in WordPress admin
   - Create pages with slugs matching template names (see [README.txt](php/clee-bordeaux-theme/README.txt))
   - Set static homepage via Settings → Reading

4. **Asset syncing workflow**:
   - Source files: `css/`, `js/` (root)
   - WordPress mirror: `php/clee-bordeaux-theme/assets/`
   - Always update root files first, then copy to theme assets

## WordPress Theme Parity Verification

**Critical**: Every static HTML page MUST have a corresponding WordPress template. Verify periodically:

```bash
# Static pages (14 total)
pages/index.html              → php/clee-bordeaux-theme/front-page.php
pages/agenda.html             → php/clee-bordeaux-theme/page-agenda.php
pages/bureau-membres.html     → php/clee-bordeaux-theme/page-bureau-membres.php
pages/companies.html          → php/clee-bordeaux-theme/page-companies.php
pages/contact.html            → php/clee-bordeaux-theme/page-contact.php
pages/documents-officiels.html → php/clee-bordeaux-theme/page-documents-officiels.php
pages/establishments.html     → php/clee-bordeaux-theme/page-establishments.php
pages/jeunes-familles.html    → php/clee-bordeaux-theme/page-jeunes-familles.php
pages/le-clee.html            → php/clee-bordeaux-theme/page-le-clee.php
pages/nos-actions.html        → php/clee-bordeaux-theme/page-nos-actions.php
pages/orientation-insertion.html → php/clee-bordeaux-theme/page-orientation-insertion.php
pages/pfmp.html               → php/clee-bordeaux-theme/page-pfmp.php
pages/vie-clee-eleves.html    → php/clee-bordeaux-theme/page-vie-clee-eleves.php
pages/vie-clee.html           → php/clee-bordeaux-theme/page-vie-clee.php
```

**When adding a new page**:
1. Create static HTML in `pages/[name].html`
2. Create WordPress template `php/clee-bordeaux-theme/page-[slug].php`
3. Add asset enqueuing in `functions.php`
4. Add corresponding CSS/JS files to both root and theme assets
5. Update this checklist in copilot-instructions.md

**Missing template detection**: If a page exists in `pages/` without a corresponding WordPress template, it won't be accessible in WordPress.

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

### WordPress Theme Testing
- [ ] Theme activates without errors
- [ ] All page slugs match template file names
- [ ] Navigation links resolve to correct WordPress pages
- [ ] Asset dependencies load in correct order (globals → page-specific)
- [ ] CSS grouping works (e.g., le-clee.css serves 4 pages)
- [ ] Page-specific scripts only load on intended pages
- [ ] Mobile menu functionality preserved from static version

## Common Pitfalls
- Don't duplicate code from globals.css into page-specific CSS
- Don't create inline styles - use classes and CSS variables
- Don't forget to initialize new modules in DOMContentLoaded
- Don't use absolute file paths - always use relative paths from pages/
- Don't modify the navigation structure without updating all 14 pages
- Don't forget to mirror CSS/JS changes from root to `php/clee-bordeaux-theme/assets/`
- Don't add `.html` extensions in WordPress template links (use `get_permalink()`)
- Don't skip adding conditional enqueuing in `functions.php` for new pages

## Project Stats
- 14 HTML pages (~55KB total, 40% reduction vs duplicated structure)
- CSS shared caching improves load times across pages
- All animations use GPU acceleration (transform/opacity)
- WordPress theme mirrors all static functionality with dynamic routing
