// ========================================
// VIE DU CLEE PAGE - SPECIFIC FUNCTIONALITY
// ========================================

/**
 * Contact Modal Module
 */
const ContactModalModule = (() => {
  const modal = document.getElementById('contactModal');
  const contactBtn = document.getElementById('contactBtn');
  const closeBtn = modal?.querySelector('.modal-close');
  const overlay = modal?.querySelector('.modal-overlay');
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');
  const errorMessage = document.getElementById('formError');

  const init = () => {
    if (!modal || !contactBtn) return;

    // Open modal
    contactBtn.addEventListener('click', openModal);

    // Close modal
    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Handle form submission
    contactForm?.addEventListener('submit', handleFormSubmit);
  };

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset form and messages
    resetForm();
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    // Disable submit button
    const submitBtn = contactForm.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Envoi en cours...';

    try {
      // Simulate API call (replace with actual backend endpoint)
      await simulateFormSubmission(data);

      // Show success message
      contactForm.style.display = 'none';
      successMessage.style.display = 'block';

      // Log to console (for demonstration)
      console.log('Formulaire de contact soumis:', data);

      // Close modal after 3 seconds
      setTimeout(() => {
        closeModal();
        resetForm();
      }, 3000);

    } catch (error) {
      // Show error message
      contactForm.style.display = 'none';
      errorMessage.style.display = 'block';
      console.error('Erreur lors de l\'envoi du formulaire:', error);

      // Reset after 3 seconds
      setTimeout(() => {
        resetForm();
      }, 3000);
    } finally {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Envoyer le message';
    }
  };

  const simulateFormSubmission = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 95% success rate
        if (Math.random() > 0.05) {
          resolve(data);
        } else {
          reject(new Error('Erreur réseau'));
        }
      }, 1500); // Simulate network delay
    });
  };

  const resetForm = () => {
    contactForm.reset();
    contactForm.style.display = 'flex';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
  };

  return { init, openModal, closeModal };
})();

/**
 * Contact Button Handler (Legacy - now handled by Modal)
 */
const ContactModule = (() => {
  const init = () => {
    // Modal module handles the contact button now
  };

  return { init };
})();

/**
 * Filter Events by Status (Future implementation)
 */
const EventFilterModule = (() => {
  const init = () => {
    // Placeholder for event filtering functionality
    // Can be expanded to filter events by category, date, etc.
  };

  return { init };
})();

/**
 * Blog Card Animations on Scroll
 */
const BlogAnimationModule = (() => {
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

    // Observe blog cards and event cards
    const cards = document.querySelectorAll('.blog-card, .evenement-card');
    cards.forEach(card => {
      observer.observe(card);
    });
  };

  return { init };
})();

/**
 * Initialize all modules when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  NavigationModule.init();
  SmoothScrollModule.init();
  HeaderScrollModule.init();
  ContactModalModule.init();
  ContactModule.init();
  EventFilterModule.init();
  BlogAnimationModule.init();
});

// Fade in animations
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
