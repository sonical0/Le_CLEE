// Menu déroulant navigation (fermeture au mouseleave, apparition vers le bas)
const DropdownMenuModule = (() => {
  function closeDropdown(dropdown) {
    dropdown.classList.remove('dropdown-open');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.style.display = '';
  }
  function openDropdown(dropdown) {
    dropdown.classList.add('dropdown-open');
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) menu.style.display = 'block';
  }
  function handleDropdownEvents() {
    document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
      let timeout;
      dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        openDropdown(dropdown);
      });
      dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => closeDropdown(dropdown), 120);
      });
      // Accessibilité : focus/blur
      dropdown.addEventListener('focusin', () => {
        clearTimeout(timeout);
        openDropdown(dropdown);
      });
      dropdown.addEventListener('focusout', () => {
        timeout = setTimeout(() => closeDropdown(dropdown), 120);
      });
      // Empêcher le scroll du menu déroulant
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.addEventListener('wheel', e => e.preventDefault(), { passive: false });
      }
    });
  }
  function init() {
    handleDropdownEvents();
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
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
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
