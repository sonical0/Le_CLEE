// Menu déroulant navigation (fermeture au mouseleave, apparition vers le bas)
const DropdownMenuModule = (() => {
  function isMobile() {
    return window.innerWidth <= 1200; // Même breakpoint que le menu burger
  }
  
  function closeDropdown(dropdown) {
    if (isMobile()) return; // Ne rien faire en mode mobile
    
    dropdown.classList.remove('dropdown-open');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.style.display = '';
  }
  
  function openDropdown(dropdown) {
    if (isMobile()) return; // Ne pas ouvrir les dropdowns en mode mobile/tablette
    
    dropdown.classList.add('dropdown-open');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.style.display = 'block';
  }
  
  function handleDropdownEvents() {
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
      let timeout;
      
      dropdown.addEventListener('mouseenter', () => {
        if (isMobile()) return; // Ignorer en mode mobile
        clearTimeout(timeout);
        openDropdown(dropdown);
      });
      
      dropdown.addEventListener('mouseleave', () => {
        if (isMobile()) return; // Ignorer en mode mobile
        timeout = setTimeout(() => closeDropdown(dropdown), 120);
      });
      
      // Accessibilité : focus/blur
      dropdown.addEventListener('focusin', () => {
        if (isMobile()) return; // Ignorer en mode mobile
        clearTimeout(timeout);
        openDropdown(dropdown);
      });
      
      dropdown.addEventListener('focusout', () => {
        if (isMobile()) return; // Ignorer en mode mobile
        timeout = setTimeout(() => closeDropdown(dropdown), 120);
      });
      
      // Empêcher le scroll du menu déroulant
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.addEventListener('wheel', e => {
          if (!isMobile()) {
            e.preventDefault();
          }
        }, { passive: false });
      }
    });
  }
  
  function init() {
    handleDropdownEvents();
    
    // Fermer tous les dropdowns lors du redimensionnement en mode mobile
    window.addEventListener('resize', () => {
      if (isMobile()) {
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
          dropdown.classList.remove('dropdown-open');
          const menu = dropdown.querySelector('.dropdown-menu');
          if (menu) menu.style.display = '';
        });
      }
    });
  }
  
  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  DropdownMenuModule.init();
});
// ========================================
// SHARED UTILITIES & MODULES
// ========================================

/**
 * Navigation Toggle Utility
 */
const NavigationModule = (() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  const init = () => {
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', toggleMenu);
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
          closeMenu();
        }
      });
      
      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeMenu();
        }
      });
    }
  };

  const toggleMenu = () => {
    const isActive = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open on mobile
    if (isActive && window.innerWidth <= 992) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
  };

  return { init };
})();

/**
 * Smooth Scroll Handler
 */
const SmoothScrollModule = (() => {
  const init = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });
  };

  const handleScroll = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return { init };
})();

/**
 * Header Shadow on Scroll
 */
const HeaderScrollModule = (() => {
  const header = document.querySelector('.header');
  let lastScroll = 0;

  const init = () => {
    if (!header) return;
    window.addEventListener('scroll', handleScroll);
  };

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = 'var(--400)';
    } else {
      header.style.boxShadow = 'var(--100)';
    }

    lastScroll = currentScroll;
  };

  return { init };
})();

/**
 * Intersection Observer for Animations
 */
const ScrollAnimationModule = (() => {
  const init = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
      '.formation-card, .secteur-btn, .actualite-card, .chiffre-card, .agenda-card, .comment-card, .partenaire-card'
    );

    elementsToAnimate.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
  };

  return { init };
})();

/**
 * Footer background from hero image
 */
const FooterHeroImageModule = (() => {
  const init = () => {
    const footer = document.querySelector('.footer');
    const heroImage = document.querySelector('.hero-overlay img');

    if (!footer || !heroImage || !heroImage.src) return;

    footer.style.setProperty(
      '--footer-hero-image',
      `url("${heroImage.src}")`
    );
  };

  return { init };
})();

/**
 * Counter Animation for Numbers
 */
const CounterModule = (() => {
  const init = () => {
    const counters = document.querySelectorAll('[data-count]');
    const observerOptions = {
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          animateCounter(entry.target);
          entry.target.classList.add('counted');
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  };

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-count'), 10);
    const duration = 2000;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(target * progress);

      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target;
      }
    };

    animate();
  };

  return { init };
})();

/**
 * Active Link Highlighting
 */
const ActiveLinkModule = (() => {
  const init = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  return { init };
})();

// ========================================
// ACCESSIBILITY BANNER MODULE
// ========================================

const AccessibilityBannerModule = (() => {
  const BANNER_DISMISSED_KEY = 'clee_accessibility_banner_dismissed';
  const HIGH_CONTRAST_KEY = 'clee_high_contrast';
  
  // Vérifier si la bannière a déjà été affichée/fermée
  const isBannerDismissed = () => {
    return localStorage.getItem(BANNER_DISMISSED_KEY) === 'true';
  };
  
  // Vérifier si le contraste élevé est déjà activé
  const isHighContrastEnabled = () => {
    return localStorage.getItem(HIGH_CONTRAST_KEY) === 'true';
  };
  
  // Appliquer le contraste élevé
  const applyHighContrast = (enabled) => {
    if (enabled) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    localStorage.setItem(HIGH_CONTRAST_KEY, enabled);
  };
  
  // Fermer la bannière
  const dismissBanner = () => {
    const banner = document.getElementById('accessibility-banner');
    if (banner) {
      banner.classList.add('hidden');
      setTimeout(() => banner.remove(), 300);
    }
    localStorage.setItem(BANNER_DISMISSED_KEY, 'true');
  };
  
  // Activer le contraste et fermer la bannière
  const acceptHighContrast = () => {
    applyHighContrast(true);
    dismissBanner();
  };
  
  // Refuser et fermer la bannière
  const declineHighContrast = () => {
    dismissBanner();
  };
  
  // Créer et afficher la bannière
  const showBanner = () => {
    // Ne pas afficher si déjà fermée ou si contraste déjà activé
    if (isBannerDismissed() || isHighContrastEnabled()) {
      return;
    }
    
    // Créer l'élément de bannière
    const banner = document.createElement('div');
    banner.id = 'accessibility-banner';
    banner.className = 'accessibility-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'banner-title');
    banner.setAttribute('aria-describedby', 'banner-description');
    
    banner.innerHTML = `
      <div class="accessibility-banner-content">
        <div class="accessibility-banner-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M12 2V22" stroke="currentColor" stroke-width="2"/>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22V2Z" fill="currentColor"/>
          </svg>
        </div>
        <div class="accessibility-banner-text">
          <h3 id="banner-title" class="accessibility-banner-title">Mode Contraste Élevé</h3>
          <p id="banner-description" class="accessibility-banner-description">
            Améliorez la lisibilité du site avec un mode à fort contraste. 
            Vous pouvez modifier ce paramètre à tout moment dans les 
            <a href="${window.location.pathname.includes('/pages/') ? '' : 'pages/'}portail.html">options d'accessibilité</a>.
          </p>
        </div>
        <div class="accessibility-banner-actions">
          <button class="btn-banner btn-banner-accept" id="accept-contrast" aria-label="Activer le mode contraste élevé">
            Activer
          </button>
          <button class="btn-banner btn-banner-decline" id="decline-contrast" aria-label="Non merci">
            Non merci
          </button>
          <button class="btn-banner-close" id="close-banner" aria-label="Fermer la bannière">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(banner);
    
    // Ajouter les événements
    document.getElementById('accept-contrast').addEventListener('click', acceptHighContrast);
    document.getElementById('decline-contrast').addEventListener('click', declineHighContrast);
    document.getElementById('close-banner').addEventListener('click', dismissBanner);
    
    // Afficher la bannière avec animation après un court délai
    setTimeout(() => {
      banner.classList.add('visible');
    }, 500);
  };
  
  const init = () => {
    // Appliquer le contraste s'il est déjà activé
    if (isHighContrastEnabled()) {
      applyHighContrast(true);
    }
    
    // Afficher la bannière après un délai
    setTimeout(showBanner, 1000);
  };
  
  return { init };
})();

// ========================================
// THEME MANAGER MODULE
// ========================================

const ThemeModule = (() => {
  const THEME_KEY = 'clee_theme';
  
  // Charger la feuille de style du thème étudiant
  const loadStudentTheme = () => {
    // Vérifier si le lien existe déjà
    if (!document.getElementById('student-theme-css')) {
      const link = document.createElement('link');
      link.id = 'student-theme-css';
      link.rel = 'stylesheet';
      
      // Déterminer le chemin correct selon la page
      const isRootPage = !window.location.pathname.includes('/pages/');
      link.href = isRootPage ? 'css/theme-etudiant.css' : '../css/theme-etudiant.css';
      
      document.head.appendChild(link);
    }
    
    // Appliquer l'attribut data-theme
    document.documentElement.setAttribute('data-theme', 'etudiant');
  };
  
  // Supprimer le thème étudiant
  const removeStudentTheme = () => {
    const link = document.getElementById('student-theme-css');
    if (link) {
      link.remove();
    }
    document.documentElement.removeAttribute('data-theme');
  };
  
  // Récupérer le thème actuel (par défaut: étudiant)
  const getCurrentTheme = () => {
    return localStorage.getItem(THEME_KEY) || 'etudiant';
  };
  
  // Appliquer le thème
  const applyTheme = () => {
    const theme = getCurrentTheme();
    
    // Le thème étudiant est maintenant le thème par défaut
    if (theme === 'etudiant') {
      loadStudentTheme();
    } else {
      removeStudentTheme();
    }
  };
  
  // Changer de thème (fonction conservée pour compatibilité)
  const switchTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'etudiant' ? 'professionnel' : 'etudiant';
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme();
  };
  
  const init = () => {
    applyTheme();
  };
  
  return {
    init,
    applyTheme,
    switchTheme,
    getCurrentTheme
  };
})();

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialiser le gestionnaire de thème en premier
  ThemeModule.init();
  
  // Initialiser la bannière d'accessibilité
  AccessibilityBannerModule.init();
  
  NavigationModule.init();
  SmoothScrollModule.init();
  HeaderScrollModule.init();
  ScrollAnimationModule.init();
  CounterModule.init();
  ActiveLinkModule.init();
  FooterHeroImageModule.init();

  console.log('%c✓ CLEE Bordeaux Avenir - Core modules initialized', 'color: #314960; font-weight: bold;');
});

// ========================================
// WINDOW RESIZE HANDLER (DEBOUNCED)
// ========================================

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Handle resize events if needed
  }, 250);
});
