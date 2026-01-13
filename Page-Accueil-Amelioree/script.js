// ========================================
// MOBILE MENU TOGGLE
// ========================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Toggle menu
    navLinks.classList.toggle('active');
    
    // Update aria-expanded
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    // Animate hamburger icon
    menuToggle.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
    }
  });
  
  // Close menu when clicking on a link
  const navLinksItems = navLinks.querySelectorAll('.nav-link');
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
    });
  });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Only prevent default if it's not just '#'
    if (href !== '#' && href.length > 1) {
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow on scroll
  if (currentScroll > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Auto-hide header on scroll down (optional)
  // Uncomment below to enable
  /*
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  */
  
  lastScroll = currentScroll;
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // For cards animation with delay
      if (entry.target.classList.contains('actualite-card') || 
          entry.target.classList.contains('chiffre-card') ||
          entry.target.classList.contains('agenda-card')) {
        
        const cards = entry.target.parentElement.querySelectorAll('.actualite-card, .chiffre-card, .agenda-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 100);
        });
      }
    }
  });
}, observerOptions);

// Observe elements for animation
const animatedElements = document.querySelectorAll('.actualite-card, .chiffre-card, .agenda-card, .hero-content');
animatedElements.forEach(el => observer.observe(el));

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

function setActiveNavLink() {
  const scrollPosition = window.pageYOffset + 150;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);

// ========================================
// NUMBERS COUNTER ANIMATION
// ========================================

function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16); // 60 FPS
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + (element.textContent.includes('+') ? '+' : '');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : '');
    }
  }, 16);
}

// Observe chiffres for counter animation
const chiffresObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numberElement = entry.target;
      const text = numberElement.textContent;
      const hasPlus = text.includes('+');
      const number = parseInt(text.replace(/\D/g, ''));
      
      if (number && !numberElement.classList.contains('animated')) {
        numberElement.classList.add('animated');
        animateCounter(numberElement, number);
        if (hasPlus) {
          numberElement.textContent = number + '+';
        }
      }
      
      chiffresObserver.unobserve(numberElement);
    }
  });
}, { threshold: 0.5 });

const chiffresNumbers = document.querySelectorAll('.chiffre-number');
chiffresNumbers.forEach(num => chiffresObserver.observe(num));

// ========================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ========================================

// Trap focus in mobile menu when open
const focusableElements = 'a[href], button, textarea, input, select';

menuToggle?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    menuToggle.click();
  }
});

// ========================================
// LAZY LOADING IMAGES (if needed)
// ========================================

if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for older browsers
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll handlers
const debouncedScrollHandler = debounce(() => {
  setActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// ========================================
// ACCESSIBILITY: SKIP TO MAIN CONTENT
// ========================================

// Add skip link if not present
if (!document.querySelector('.skip-link')) {
  const skipLink = document.createElement('a');
  skipLink.href = '#hero';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Aller au contenu principal';
  skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-800);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 10000;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
  });
  
  document.body.insertBefore(skipLink, document.body.firstChild);
}

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c🎨 CLEE Bordeaux Avenir', 'color: #314960; font-size: 20px; font-weight: bold;');
console.log('%c✨ Page améliorée avec ergonomie et accessibilité', 'color: #405c76; font-size: 14px;');

// ========================================
// INITIALIZATION COMPLETE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Page chargée et scripts initialisés');
});
