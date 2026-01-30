// Module de recherche et filtre des formations
const FormationsFilterModule = (() => {
  const searchInputSelector = '#formation-search-input';
  const secteurFilterSelector = '#formation-secteur-filter';
  const niveauFilterSelector = '#formation-niveau-filter';
  const formationsGridSelector = '.formations-grid';
  const formationCardSelector = '.formation-card';

  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9\s-]/g, '');
  }

  function filterFormations() {
    const searchValue = normalize(document.querySelector(searchInputSelector).value.trim());
    const secteurValue = document.querySelector(secteurFilterSelector).value;
    const niveauValue = document.querySelector(niveauFilterSelector).value;
    const cards = document.querySelectorAll(formationCardSelector);

    cards.forEach(card => {
      const title = normalize(card.querySelector('.formation-title').textContent);
      const desc = normalize(card.querySelector('.formation-description').textContent);
      const secteur = card.getAttribute('data-secteur');
      const niveau = card.querySelector('.formation-niveau').textContent.trim();

      let visible = true;
      if (searchValue && !(title.includes(searchValue) || desc.includes(searchValue))) {
        visible = false;
      }
      if (secteurValue !== 'tous' && secteur !== secteurValue) {
        visible = false;
      }
      if (niveauValue !== 'tous' && niveau !== niveauValue) {
        visible = false;
      }
      card.style.display = visible ? '' : 'none';
    });
  }

  function init() {
    const searchInput = document.querySelector(searchInputSelector);
    const secteurFilter = document.querySelector(secteurFilterSelector);
    const niveauFilter = document.querySelector(niveauFilterSelector);
    const form = document.querySelector('.formations-search-bar');
    if (!searchInput || !secteurFilter || !niveauFilter || !form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      filterFormations();
    });
    [searchInput, secteurFilter, niveauFilter].forEach(el => {
      el.addEventListener('input', filterFormations);
    });
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  FormationsFilterModule.init();
});
// ========================================
// PAGE-SPECIFIC MODULE - ESTABLISHMENTS PAGE
// ========================================

const EstablishmentsPageModule = (() => {
  // Data for establishments
  const etablissements = {
    'lycee-talence': {
      nom: 'Lycée Professionnel Talence',
      adresse: '123 Avenue de la République, 33400 Talence',
      badge: 'Établissement Public',
      image: 'https://picsum.photos/800/400?random=10',
      stats: { etudiants: '850', formations: '12', taux: '95%' },
      description: 'Le Lycée Professionnel de Talence est un établissement d\'enseignement professionnel offrant une large gamme de formations dans les secteurs de l\'industrie, du numérique, et du tertiaire.',
      contact: { telephone: '05 56 84 56 78', email: 'contact@lp-talence.fr', horaires: 'Lundi au Vendredi : 8h00 - 18h00' }
    },
    'lycee-merignac': {
      nom: 'Lycée Professionnel Mérignac',
      adresse: '45 Rue du Château d\'Eau, 33700 Mérignac',
      badge: 'Établissement Public',
      image: 'https://picsum.photos/800/400?random=15',
      stats: { etudiants: '720', formations: '10', taux: '92%' },
      description: 'Le Lycée Professionnel de Mérignac se distingue par son expertise dans les métiers du bâtiment, de l\'aéronautique et de la logistique.',
      contact: { telephone: '05 56 97 45 23', email: 'contact@lp-merignac.fr', horaires: 'Lundi au Vendredi : 8h00 - 17h30' }
    },
    'lycee-pessac': {
      nom: 'Lycée Professionnel Pessac',
      adresse: '78 Avenue Jean Jaurès, 33600 Pessac',
      badge: 'Établissement Public',
      image: 'https://picsum.photos/800/400?random=20',
      stats: { etudiants: '680', formations: '9', taux: '93%' },
      description: 'Le Lycée Professionnel de Pessac propose des formations spécialisées dans les secteurs du numérique, de la gestion administrative et du commerce.',
      contact: { telephone: '05 56 36 78 90', email: 'contact@lp-pessac.fr', horaires: 'Lundi au Vendredi : 8h00 - 18h00' }
    },
    'lycee-bordeaux': {
      nom: 'Lycée Professionnel Bordeaux Centre',
      adresse: '12 Place de la Bourse, 33000 Bordeaux',
      badge: 'Établissement Public',
      image: 'https://picsum.photos/800/400?random=25',
      stats: { etudiants: '950', formations: '14', taux: '96%' },
      description: 'Le Lycée Professionnel Bordeaux Centre est le plus grand établissement professionnel de l\'agglomération bordelaise.',
      contact: { telephone: '05 56 00 12 34', email: 'contact@lp-bordeaux.fr', horaires: 'Lundi au Vendredi : 7h30 - 18h30' }
    }
  };

  let currentEcole = 'lycee-talence';

  const init = () => {
    initMapMarkers();
    initSchoolList();
    initFilters();
    initFormationToggles();
  };

  const initMapMarkers = () => {
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach(marker => {
      marker.addEventListener('click', function() {
        selectSchool(this.getAttribute('data-school'));
      });
    });
  };

  const initSchoolList = () => {
    const items = document.querySelectorAll('.ecole-item');
    items.forEach(item => {
      item.addEventListener('click', function() {
        selectSchool(this.getAttribute('data-school'));
      });
    });
  };

  const selectSchool = (schoolId) => {
    if (!etablissements[schoolId]) return;

    currentEcole = schoolId;
    const ecole = etablissements[schoolId];

    // Update markers
    document.querySelectorAll('.map-marker').forEach(marker => {
      marker.classList.remove('active');
      if (marker.getAttribute('data-school') === schoolId) {
        marker.classList.add('active');
      }
    });

    // Update school list
    document.querySelectorAll('.ecole-item').forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-school') === schoolId) {
        item.classList.add('active');
      }
    });

    // Update card
    updateCard(ecole);
  };

  const updateCard = (ecole) => {
    const card = document.querySelector('.etablissement-card');
    card.style.opacity = '0';

    setTimeout(() => {
      card.querySelector('.etablissement-image img').src = ecole.image;
      card.querySelector('.etablissement-badge').textContent = ecole.badge;
      card.querySelector('.etablissement-name').textContent = ecole.nom;
      card.querySelector('.etablissement-address').innerHTML = `<span style="font-size: 20px;">📍</span> ${ecole.adresse}`;

      const statNumbers = card.querySelectorAll('.stat-number');
      if (statNumbers.length >= 3) {
        statNumbers[0].textContent = ecole.stats.etudiants;
        statNumbers[1].textContent = ecole.stats.formations;
        statNumbers[2].textContent = ecole.stats.taux;
      }

      card.querySelector('.etablissement-description').textContent = ecole.description;

      const contactInfo = card.querySelectorAll('.info-item p');
      if (contactInfo.length >= 3) {
        contactInfo[0].textContent = ecole.contact.telephone;
        contactInfo[1].textContent = ecole.contact.email;
        contactInfo[2].textContent = ecole.contact.horaires;
      }

      card.style.opacity = '1';
    }, 300);
  };

  const initFilters = () => {
    const buttons = document.querySelectorAll('.secteur-btn');
    const cards = document.querySelectorAll('.formation-card');

    buttons.forEach(btn => {
      btn.addEventListener('click', function() {
        const secteur = this.getAttribute('data-secteur');

        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        cards.forEach(card => {
          const cardSecteur = card.getAttribute('data-secteur');
          card.style.display = (secteur === 'tous' || cardSecteur === secteur) ? 'flex' : 'none';
        });
      });
    });
  };

  const initFormationToggles = () => {
    const buttons = document.querySelectorAll('.formation-toggle');
    buttons.forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.formation-card');
        card.classList.toggle('expanded');
        this.textContent = card.classList.contains('expanded') ? 'Masquer les détails' : 'Voir les détails';
      });
    });
  };

  return { init };
})();

// Initialize if on establishments page
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.hero-etablissement')) {
    EstablishmentsPageModule.init();
  }
});
