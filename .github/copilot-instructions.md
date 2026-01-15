# CLEE Bordeaux Avenir - AI Agent Instructions

## Project Overview
Multi-page static website for CLEE Bordeaux Avenir (school-business partnership organization). The codebase uses a **modular architecture** to eliminate code duplication across 13 HTML pages.

## Architecture Pattern

### Modular CSS/JS Structure
The project uses a **shared + specific** pattern to avoid duplication:

```
css/
  globals.css          # Shared: variables, header, footer, buttons, animations
  home.css             # Page-specific: index.html only
  companies.css        # Page-specific: companies.html only
  establishments.css   # Page-specific: establishments.html only
  le-clee.css          # Page-specific: le-clee.html only
  vie-clee.css         # Page-specific: vie-clee.html only
  [etc...]

js/
  common.js            # Shared modules (NavigationModule, SmoothScrollModule, etc.)
  companies.js         # Page-specific: companies filter logic
  establishments.js    # Page-specific: interactive map + formations
  agenda.js            # Page-specific: event calendar
  vie-clee.js          # Page-specific: events display
```

**Critical Rule**: Every HTML page MUST include:
```html
<link rel="stylesheet" href="../css/globals.css">
<link rel="stylesheet" href="../css/[page-specific].css">
<script src="../js/common.js"></script>
<!-- Page-specific JS only if needed -->
```

### Page Hierarchy
See `CLEE-Bordeaux-Site/PAGES-STRUCTURE.md` for complete structure:
- **6 main navigation pages**: index, le-clee, companies, establishments, jeunes-familles, vie-clee
- **7 sub-pages**: bureau-membres, nos-actions, documents-officiels, orientation-insertion, pfmp, vie-clee-eleves, agenda
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

1. **Adding a new page**:
   - Create HTML in `pages/`
   - Create page-specific CSS in `css/`
   - Include both globals.css and page-specific CSS
   - Include common.js for shared functionality
   - Copy navigation structure from existing pages

2. **Modifying shared styles** (header, footer, buttons):
   - Edit `globals.css` ONLY
   - Changes apply to all pages automatically

3. **Adding reusable functionality**:
   - Add module to `common.js`
   - Follow IIFE pattern
   - Initialize in DOMContentLoaded

4. **File paths**: All HTML files in `pages/` reference assets with `../css/` and `../js/`

## Responsive Design
- Desktop: 1024px+
- Tablet: 768px-1023px  
- Mobile: <768px
- Breakpoints defined in each CSS file, use `@media (max-width: ...)` consistently

## Testing Checklist
When modifying pages, verify:
- [ ] Mobile menu toggle works
- [ ] Navigation active state highlights correct page
- [ ] Smooth scroll to anchors works
- [ ] Header shadow appears on scroll
- [ ] All scroll animations trigger correctly
- [ ] Responsive layout at 480px, 768px, 1024px

## Common Pitfalls
- Don't duplicate code from globals.css into page-specific CSS
- Don't create inline styles - use classes and CSS variables
- Don't forget to initialize new modules in DOMContentLoaded
- Don't use absolute file paths - always use relative paths from pages/
- Don't modify the navigation structure without updating all 13 pages

## Project Stats
- 13 HTML pages, ~55KB total (40% reduction vs duplicated structure)
- CSS shared caching improves load times across pages
- All animations use GPU acceleration (transform/opacity)
