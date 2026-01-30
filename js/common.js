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
// THEME MANAGER MODULE
// ========================================

const ThemeModule = (() => {
  const THEME_KEY = 'clee_theme';
  const PROFILE_KEY = 'clee_user_profile';
  
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
  
  // Récupérer le thème actuel
  const getCurrentTheme = () => {
    return localStorage.getItem(THEME_KEY) || 'professionnel';
  };
  
  // Récupérer le profil actuel
  const getCurrentProfile = () => {
    return localStorage.getItem(PROFILE_KEY);
  };
  
  // Appliquer le thème
  const applyTheme = () => {
    const theme = getCurrentTheme();
    const profile = getCurrentProfile();
    
    // Si aucun profil n'est défini et qu'on n'est pas sur le portail, rediriger
    if (!profile && !window.location.pathname.includes('portail.html')) {
      const isRootPage = !window.location.pathname.includes('/pages/');
      window.location.href = isRootPage ? 'pages/portail.html' : 'portail.html';
      return;
    }
    
    if (theme === 'etudiant') {
      loadStudentTheme();
      addThemeBadge('etudiant');
    } else {
      removeStudentTheme();
      addThemeBadge('professionnel');
    }
  };
  
  // Ajouter un badge de changement de thème
  const addThemeBadge = (currentTheme) => {
    // Ne pas ajouter sur la page portail
    if (window.location.pathname.includes('portail.html')) return;
    
    // Vérifier si le badge existe déjà
    if (document.querySelector('.theme-badge')) return;
    
    const badge = document.createElement('div');
    badge.className = 'theme-badge';
    
    // Contenu différent selon le thème
    if (currentTheme === 'etudiant') {
      badge.classList.add('theme-badge-student');
      badge.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3Z" fill="currentColor"/>
        </svg>
        <span>Mode Étudiant</span>
      `;
    } else {
      badge.classList.add('theme-badge-pro');
      badge.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H16V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5Z" fill="currentColor"/>
        </svg>
        <span>Mode Professionnel</span>
      `;
    }
    
    badge.title = 'Changer de profil';
    
    badge.addEventListener('click', () => {
      const isRootPage = !window.location.pathname.includes('/pages/');
      window.location.href = isRootPage ? 'pages/portail.html' : 'portail.html';
    });
    
    document.body.appendChild(badge);
  };
  
  // Changer de thème
  const switchTheme = () => {
    const isRootPage = !window.location.pathname.includes('/pages/');
    window.location.href = isRootPage ? 'pages/portail.html' : 'portail.html';
  };
  
  const init = () => {
    applyTheme();
  };
  
  return {
    init,
    applyTheme,
    switchTheme,
    getCurrentTheme,
    getCurrentProfile
  };
})();

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialiser le gestionnaire de thème en premier
  ThemeModule.init();
  
  NavigationModule.init();
  SmoothScrollModule.init();
  HeaderScrollModule.init();
  ScrollAnimationModule.init();
  CounterModule.init();
  ActiveLinkModule.init();

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
