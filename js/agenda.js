// ========================================
// AGENDA PAGE - EVENT MANAGEMENT
// ========================================

/**
 * Sample Events Data for 2026
 */
const eventsData = [
  {
    id: 1,
    title: "Forum Emploi & Alternance",
    type: "forum",
    date: new Date(2026, 0, 20), // 20 janvier 2026
    time: "09:00 - 17:00",
    location: "Campus EPSI Bordeaux",
    description: "Rencontrez plus de 50 entreprises partenaires à la recherche de talents pour des stages, alternances et CDI. Une journée dédiée aux étudiants pour découvrir les opportunités professionnelles dans le secteur du numérique.",
    organizer: "CLEE Bordeaux Avenir",
    participants: "500 participants attendus"
  },
  {
    id: 2,
    title: "Atelier CV & Entretiens",
    type: "atelier",
    date: new Date(2026, 1, 5), // 5 février 2026
    time: "14:00 - 17:00",
    location: "Salle de conférence - bâtiment A",
    description: "Apprenez à optimiser votre CV et préparez-vous aux entretiens d'embauche avec nos experts RH. Conseils personnalisés et simulations d'entretiens.",
    organizer: "service carrières EPSI",
    participants: "30 places disponibles"
  },
  {
    id: 3,
    title: "Conférence: intelligence artificielle et métiers du numérique",
    type: "conference",
    date: new Date(2026, 1, 15), // 15 février 2026
    time: "18:30 - 20:30",
    location: "amphithéâtre principal",
    description: "Découvrez comment l'IA transforme les métiers du numérique avec des experts du secteur. Table ronde et échanges avec le public.",
    organizer: "CLEE Bordeaux & Tech leaders",
    participants: "200 places disponibles"
  },
  {
    id: 4,
    title: "Rencontre Entreprises-Étudiants",
    type: "rencontre",
    date: new Date(2026, 2, 10), // 10 mars 2026
    time: "16:00 - 19:00",
    location: "espace networking",
    description: "Une après-midi de networking informel pour créer des liens entre étudiants et professionnels. Speed-meetings et échanges autour d'un cocktail.",
    organizer: "CLEE Bordeaux Avenir",
    participants: "150 participants"
  },
  {
    id: 5,
    title: "Salon des Métiers du Digital",
    type: "salon",
    date: new Date(2026, 2, 25), // 25 mars 2026
    time: "10:00 - 18:00",
    location: "parc des expositions",
    description: "Le plus grand salon dédié aux métiers du numérique en Nouvelle-Aquitaine. Stands d'entreprises, conférences et ateliers thématiques.",
    organizer: "CLEE Bordeaux & Partenaires",
    participants: "2000 visiteurs attendus"
  },
  {
    id: 6,
    title: "Atelier Entrepreneuriat & Startups",
    type: "atelier",
    date: new Date(2026, 3, 8), // 8 avril 2026
    time: "14:00 - 18:00",
    location: "Incubateur EPSI",
    description: "Pour les étudiants porteurs de projets: conseils en création d'entreprise, pitch training et rencontre avec des entrepreneurs à succès.",
    organizer: "EPSI innovation lab",
    participants: "25 places disponibles"
  },
  {
    id: 7,
    title: "Journée Portes Ouvertes",
    type: "autre",
    date: new Date(2026, 3, 18), // 18 avril 2026
    time: "09:00 - 17:00",
    location: "Campus EPSI Bordeaux",
    description: "Découvrez nos formations, nos infrastructures et rencontrez nos équipes pédagogiques. Présentations des cursus et visite guidée du campus.",
    organizer: "EPSI Bordeaux",
    participants: "Ouvert à tous"
  },
  {
    id: 8,
    title: "Conférence: Cybersécurité et Enjeux Actuels",
    type: "conference",
    date: new Date(2026, 4, 12), // 12 mai 2026
    time: "18:00 - 20:00",
    location: "amphithéâtre principal",
    description: "Experts en cybersécurité vous présentent les menaces actuelles et les bonnes pratiques pour protéger les systèmes d'information.",
    organizer: "CLEE Bordeaux & CyberExperts",
    participants: "180 places disponibles"
  },
  {
    id: 9,
    title: "Rencontre Alumni & Étudiants",
    type: "rencontre",
    date: new Date(2026, 5, 5), // 5 juin 2026
    time: "18:30 - 21:00",
    location: "Rooftop Campus",
    description: "Retrouvailles des anciens étudiants et échanges avec les promotions actuelles. Networking, témoignages et opportunités professionnelles.",
    organizer: "Association des Alumni EPSI",
    participants: "200 participants"
  },
  {
    id: 10,
    title: "Forum Stages d'Été",
    type: "forum",
    date: new Date(2026, 5, 20), // 20 juin 2026
    time: "10:00 - 16:00",
    location: "hall principal",
    description: "Trouvez votre stage d'été! Rencontre avec des entreprises proposant des missions estivales pour les étudiants.",
    organizer: "CLEE Bordeaux Avenir",
    participants: "300 étudiants attendus"
  },
  {
    id: 11,
    title: "Atelier Design Thinking",
    type: "atelier",
    date: new Date(2026, 8, 15), // 15 septembre 2026
    time: "13:00 - 17:00",
    location: "salle innovation",
    description: "Découvrez la méthodologie Design Thinking à travers un atelier pratique. Résolvez un cas concret en équipe avec des professionnels.",
    organizer: "EPSI innovation lab",
    participants: "35 places disponibles"
  },
  {
    id: 12,
    title: "Conférence: IA Générative et Développement",
    type: "conference",
    date: new Date(2026, 8, 25), // 25 septembre 2026
    time: "18:00 - 20:00",
    location: "amphithéâtre principal",
    description: "Comment l'IA générative révolutionne le développement logiciel. Démonstrations pratiques et cas d'usage.",
    organizer: "CLEE Bordeaux & Tech Innovators",
    participants: "200 places disponibles"
  },
  {
    id: 13,
    title: "Salon Alternance & Apprentissage",
    type: "salon",
    date: new Date(2026, 9, 8), // 8 octobre 2026
    time: "09:00 - 18:00",
    location: "parc des expositions",
    description: "Le rendez-vous incontournable pour trouver son alternance. Plus de 100 entreprises présentes avec des offres concrètes.",
    organizer: "CLEE Bordeaux & CCI Bordeaux",
    participants: "3000 visiteurs attendus"
  },
  {
    id: 14,
    title: "Atelier Gestion de Projet Agile",
    type: "atelier",
    date: new Date(2026, 9, 22), // 22 octobre 2026
    time: "14:00 - 18:00",
    location: "salle projet",
    description: "Maîtrisez les méthodes agiles (Scrum, Kanban) avec des praticiens certifiés. Exercices pratiques et certification.",
    organizer: "EPSI Formation Continue",
    participants: "20 places disponibles"
  },
  {
    id: 15,
    title: "Rencontre Startups Bordelaises",
    type: "rencontre",
    date: new Date(2026, 10, 10), // 10 novembre 2026
    time: "17:00 - 20:00",
    location: "espace coworking",
    description: "Découvrez l'écosystème startup de Bordeaux. Pitch de startups locales et opportunités de stages/emplois dans ces structures innovantes.",
    organizer: "CLEE Bordeaux & French tech Bordeaux",
    participants: "100 participants"
  },
  {
    id: 16,
    title: "Forum de l'Emploi Tech 2026",
    type: "forum",
    date: new Date(2026, 10, 25), // 25 novembre 2026
    time: "09:00 - 18:00",
    location: "centre de congrès",
    description: "Le plus grand forum emploi tech de la région! 80+ entreprises, conférences métiers et ateliers coaching carrière.",
    organizer: "CLEE Bordeaux Avenir",
    participants: "1500 participants attendus"
  },
  {
    id: 17,
    title: "Conférence: Blockchain et Web3",
    type: "conference",
    date: new Date(2026, 11, 3), // 3 décembre 2026
    time: "18:30 - 21:00",
    location: "amphithéâtre principal",
    description: "Plongez dans l'univers de la blockchain et du Web3. Experts et entrepreneurs partagent leurs visions et projets.",
    organizer: "CLEE Bordeaux & Blockchain Experts",
    participants: "150 places disponibles"
  },
  {
    id: 18,
    title: "Gala de Fin d'Année",
    type: "autre",
    date: new Date(2026, 11, 18), // 18 décembre 2026
    time: "19:00 - 02:00",
    location: "Château Pape Clément",
    description: "Clôturez l'année en beauté! Soirée de gala avec remise des prix, animations et networking dans un cadre prestigieux.",
    organizer: "Bureau des Étudiants EPSI",
    participants: "400 participants"
  }
];

// ========================================
// STATE MANAGEMENT
// ========================================

const AgendaState = {
  currentDate: new Date(2026, 0, 1), // Janvier 2026
  view: 'calendar', // 'calendar' or 'list'
  filters: {
    month: 'all',
    type: 'all',
    search: ''
  },
  events: eventsData
};

// ========================================
// CALENDAR MODULE
// ========================================

const CalendarModule = (() => {
  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const dayNames = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

  const init = () => {
    renderCalendar();
    attachEventListeners();
  };

  const attachEventListeners = () => {
    document.getElementById('prev-month').addEventListener('click', () => {
      AgendaState.currentDate.setMonth(AgendaState.currentDate.getMonth() - 1);
      renderCalendar();
    });

    document.getElementById('next-month').addEventListener('click', () => {
      AgendaState.currentDate.setMonth(AgendaState.currentDate.getMonth() + 1);
      renderCalendar();
    });
  };

  const renderCalendar = () => {
    const currentMonth = AgendaState.currentDate.getMonth();
    const currentYear = AgendaState.currentDate.getFullYear();

    // Update header
    document.getElementById('current-month').textContent = 
      `${monthNames[currentMonth]} ${currentYear}`;

    // Generate calendar grid
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    // Add day headers
    dayNames.forEach(day => {
      const header = document.createElement('div');
      header.className = 'calendar-day-header';
      header.textContent = day;
      grid.appendChild(header);
    });

    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust so Monday = 0

    // Get days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

    const today = new Date();
    const filteredEvents = FilterModule.getFilteredEvents();

    // Previous month days
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const dayDiv = createDayCell(day, true, currentMonth - 1, currentYear, filteredEvents);
      grid.appendChild(dayDiv);
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isToday = date.toDateString() === today.toDateString();
      const dayDiv = createDayCell(day, false, currentMonth, currentYear, filteredEvents, isToday);
      grid.appendChild(dayDiv);
    }

    // Next month days to fill grid
    const totalCells = grid.children.length - 7; // Subtract day headers
    const remainingCells = 42 - totalCells; // 6 rows * 7 days
    for (let day = 1; day <= remainingCells; day++) {
      const dayDiv = createDayCell(day, true, currentMonth + 1, currentYear, filteredEvents);
      grid.appendChild(dayDiv);
    }
  };

  const createDayCell = (day, otherMonth, month, year, events, isToday = false) => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    if (otherMonth) dayDiv.classList.add('other-month');
    if (isToday) dayDiv.classList.add('today');

    const dayNumber = document.createElement('div');
    dayNumber.className = 'day-number';
    dayNumber.textContent = day;
    dayDiv.appendChild(dayNumber);

    // Find events for this day
    const dayEvents = events.filter(event => {
      const eventDate = event.date;
      return eventDate.getDate() === day && 
             eventDate.getMonth() === month && 
             eventDate.getFullYear() === year;
    });

    if (dayEvents.length > 0) {
      const eventsContainer = document.createElement('div');
      eventsContainer.className = 'day-events';
      
      dayEvents.slice(0, 3).forEach(event => {
        const eventDot = document.createElement('div');
        eventDot.className = `event-dot ${event.type}`;
        eventDot.textContent = event.title;
        eventDot.addEventListener('click', (e) => {
          e.stopPropagation();
          ModalModule.open(event);
        });
        eventsContainer.appendChild(eventDot);
      });

      if (dayEvents.length > 3) {
        const moreText = document.createElement('div');
        moreText.className = 'event-dot autre';
        moreText.textContent = `+${dayEvents.length - 3} autre(s)`;
        eventsContainer.appendChild(moreText);
      }

      dayDiv.appendChild(eventsContainer);
    }

    return dayDiv;
  };

  return { init, renderCalendar };
})();

// ========================================
// LIST VIEW MODULE
// ========================================

const ListModule = (() => {
  const monthNames = [
    'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
    'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'
  ];

  const typeLabels = {
    conference: 'Conférence',
    atelier: 'Atelier',
    forum: 'Forum',
    rencontre: 'Rencontre',
    salon: 'Salon',
    autre: 'Autre'
  };

  const render = () => {
    const listContainer = document.getElementById('events-list');
    listContainer.innerHTML = '';

    const filteredEvents = FilterModule.getFilteredEvents();
    const sortedEvents = [...filteredEvents].sort((a, b) => a.date - b.date);

    sortedEvents.forEach(event => {
      const card = createEventCard(event);
      listContainer.appendChild(card);
    });
  };

  const createEventCard = (event) => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.addEventListener('click', () => ModalModule.open(event));

    const day = event.date.getDate();
    const month = monthNames[event.date.getMonth()];

    card.innerHTML = `
      <div class="event-date-badge">
        <div class="event-day">${day}</div>
        <div class="event-month">${month}</div>
      </div>
      <div class="event-details">
        <div class="event-header">
          <div>
            <h3 class="event-title">${event.title}</h3>
          </div>
          <span class="event-type-badge ${event.type}">${typeLabels[event.type]}</span>
        </div>
        <div class="event-info">
          <div class="event-info-item">
            <span class="icon">🕐</span>
            <span>${event.time}</span>
          </div>
          <div class="event-info-item">
            <span class="icon">📍</span>
            <span>${event.location}</span>
          </div>
          <div class="event-info-item">
            <span class="icon">👥</span>
            <span>${event.participants}</span>
          </div>
        </div>
        <p class="event-description">${event.description}</p>
      </div>
    `;

    return card;
  };

  return { render };
})();

// ========================================
// FILTER MODULE
// ========================================

const FilterModule = (() => {
  const init = () => {
    const monthFilter = document.getElementById('month-filter');
    const typeFilter = document.getElementById('type-filter');
    const searchFilter = document.getElementById('search-filter');
    const resetBtn = document.getElementById('reset-filters');

    monthFilter.addEventListener('change', (e) => {
      AgendaState.filters.month = e.target.value;
      applyFilters();
    });

    typeFilter.addEventListener('change', (e) => {
      AgendaState.filters.type = e.target.value;
      applyFilters();
    });

    searchFilter.addEventListener('input', (e) => {
      AgendaState.filters.search = e.target.value.toLowerCase();
      applyFilters();
    });

    resetBtn.addEventListener('click', () => {
      monthFilter.value = 'all';
      typeFilter.value = 'all';
      searchFilter.value = '';
      AgendaState.filters = { month: 'all', type: 'all', search: '' };
      applyFilters();
    });
  };

  const applyFilters = () => {
    if (AgendaState.view === 'calendar') {
      CalendarModule.renderCalendar();
    } else {
      ListModule.render();
    }
    checkNoResults();
  };

  const getFilteredEvents = () => {
    return AgendaState.events.filter(event => {
      // Month filter
      if (AgendaState.filters.month !== 'all') {
        if (event.date.getMonth() !== parseInt(AgendaState.filters.month)) {
          return false;
        }
      }

      // Type filter
      if (AgendaState.filters.type !== 'all') {
        if (event.type !== AgendaState.filters.type) {
          return false;
        }
      }

      // Search filter
      if (AgendaState.filters.search) {
        const searchLower = AgendaState.filters.search;
        return event.title.toLowerCase().includes(searchLower) ||
               event.description.toLowerCase().includes(searchLower) ||
               event.location.toLowerCase().includes(searchLower);
      }

      return true;
    });
  };

  const checkNoResults = () => {
    const filteredEvents = getFilteredEvents();
    const noResults = document.getElementById('no-results');
    const calendarView = document.getElementById('calendar-view');
    const listView = document.getElementById('list-view');

    if (filteredEvents.length === 0) {
      noResults.style.display = 'block';
      calendarView.style.display = 'none';
      listView.style.display = 'none';
    } else {
      noResults.style.display = 'none';
      if (AgendaState.view === 'calendar') {
        calendarView.style.display = 'block';
        listView.style.display = 'none';
      } else {
        calendarView.style.display = 'none';
        listView.style.display = 'block';
      }
    }
  };

  return { init, getFilteredEvents };
})();

// ========================================
// VIEW TOGGLE MODULE
// ========================================

const ViewModule = (() => {
  const init = () => {
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        switchView(view);
      });
    });
  };

  const switchView = (view) => {
    AgendaState.view = view;

    // Update button states
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === view);
    });

    // Toggle views
    const calendarView = document.getElementById('calendar-view');
    const listView = document.getElementById('list-view');

    if (view === 'calendar') {
      calendarView.style.display = 'block';
      listView.style.display = 'none';
      CalendarModule.renderCalendar();
    } else {
      calendarView.style.display = 'none';
      listView.style.display = 'block';
      ListModule.render();
    }
  };

  return { init };
})();

// ========================================
// MODAL MODULE
// ========================================

const ModalModule = (() => {
  const monthNames = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  const typeLabels = {
    conference: 'Conférence',
    atelier: 'Atelier',
    forum: 'Forum',
    rencontre: 'Rencontre',
    salon: 'Salon',
    autre: 'Autre'
  };

  const init = () => {
    const modal = document.getElementById('event-modal');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
  };

  const open = (event) => {
    const modal = document.getElementById('event-modal');
    const modalBody = document.getElementById('modal-body');

    const day = event.date.getDate();
    const month = monthNames[event.date.getMonth()];
    const year = event.date.getFullYear();

    modalBody.innerHTML = `
      <div class="modal-event-header">
        <h2 class="modal-event-title">${event.title}</h2>
        <div class="modal-event-meta">
          <span class="event-type-badge ${event.type}">${typeLabels[event.type]}</span>
          <span class="event-info-item">
            <span class="icon">📅</span>
            ${day} ${month} ${year}
          </span>
        </div>
      </div>

      <div class="modal-event-body">
        <div class="modal-info-section">
          <h3 class="modal-info-title">⏰ Horaires</h3>
          <p class="modal-info-text">${event.time}</p>
        </div>

        <div class="modal-info-section">
          <h3 class="modal-info-title">📍 Lieu</h3>
          <p class="modal-info-text">${event.location}</p>
        </div>

        <div class="modal-info-section">
          <h3 class="modal-info-title">📝 Description</h3>
          <p class="modal-info-text">${event.description}</p>
        </div>

        <div class="modal-info-section">
          <h3 class="modal-info-title">👥 Participants</h3>
          <p class="modal-info-text">${event.participants}</p>
        </div>

        <div class="modal-info-section">
          <h3 class="modal-info-title">🎯 Organisateur</h3>
          <p class="modal-info-text">${event.organizer}</p>
        </div>
      </div>

      <div style="margin-top: 30px;">
        <button class="btn btn-primary btn-large" style="width: 100%;">
          <span class="btn-text">S'inscrire à l'événement</span>
        </button>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    const modal = document.getElementById('event-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  return { init, open, close };
})();

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize common modules
  if (typeof NavigationModule !== 'undefined') {
    NavigationModule.init();
  }
  if (typeof SmoothScrollModule !== 'undefined') {
    SmoothScrollModule.init();
  }
  if (typeof HeaderScrollModule !== 'undefined') {
    HeaderScrollModule.init();
  }

  // Initialize agenda-specific modules
  CalendarModule.init();
  FilterModule.init();
  ViewModule.init();
  ModalModule.init();
  ListModule.render();
});
