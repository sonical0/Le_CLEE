// ========================================
// VIE DU CLEE PAGE - SPECIFIC FUNCTIONALITY
// ========================================

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
 * Events Display Module
 * Load events dynamically from agenda.js
 */
const EventsDisplayModule = (() => {
  const init = () => {
    loadEvents();
  };

  const loadEvents = () => {
    const eventsGrid = document.getElementById('evenements-grid');
    if (!eventsGrid || typeof eventsData === 'undefined') return;

    const today = new Date();
    const monthNames = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'];
    
    // Séparer les événements futurs et passés
    const upcomingEvents = eventsData
      .filter(event => event.date >= today)
      .sort((a, b) => a.date - b.date)
      .slice(0, 2); // 2 événements à venir
    
    const pastEvents = eventsData
      .filter(event => event.date < today)
      .sort((a, b) => b.date - a.date)
      .slice(0, 2); // 2 événements passés

    // Combiner: événements à venir d'abord, puis passés
    const displayEvents = [...upcomingEvents, ...pastEvents];

    // Afficher les événements
    eventsGrid.innerHTML = '';
    
    if (displayEvents.length === 0) {
      eventsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--grey-600);">
          <p>Aucun événement disponible pour le moment.</p>
        </div>
      `;
      return;
    }

    displayEvents.forEach((event, index) => {
      const day = event.date.getDate();
      const month = monthNames[event.date.getMonth()];
      const isPast = event.date < today;
      const isFeatured = index === 0 && !isPast;
      
      // Mapper les types d'événements vers des tags
      const eventTags = getEventTags(event.type);
      
      const eventHTML = `
        <article class="evenement-card${isFeatured ? ' featured' : ''}">
          ${!isPast ? '<div class="evenement-badge">À venir</div>' : ''}
          <div class="evenement-image">
            <img src="https://picsum.photos/600/400?random=${event.id}" alt="${event.title}">
            <div class="evenement-date-overlay${isPast ? ' past' : ''}">
              <span class="date-day">${day}</span>
              <span class="date-month">${month}</span>
            </div>
          </div>
          <div class="evenement-content">
            <div class="evenement-meta">
              <span class="evenement-location">📍 ${event.location}</span>
              <span class="evenement-time">🕐 ${event.time}</span>
            </div>
            <h3 class="evenement-title">${event.title}</h3>
            <p class="evenement-description">
              ${event.description}
            </p>
            <div class="evenement-tags">
              ${eventTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
          </div>
        </article>
      `;
      
      eventsGrid.innerHTML += eventHTML;
    });
  };

  const getEventTags = (type) => {
    const tagMapping = {
      'forum': ['Forum', 'Recrutement', 'Networking'],
      'atelier': ['Atelier', 'Formation', 'Carrière'],
      'conference': ['Conférence', 'Innovation'],
      'rencontre': ['Rencontre', 'Networking', 'Échanges'],
      'salon': ['Salon', 'Découverte', 'Métiers'],
      'autre': ['Événement', 'CLEE']
    };
    
    return tagMapping[type] || ['Événement'];
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
  EventFilterModule.init();
  EventsDisplayModule.init();
  BlogAnimationModule.init();
});

// Fade in animations
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
