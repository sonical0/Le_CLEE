// ========================================
// PAGE-SPECIFIC MODULE - COMPANIES PAGE
// ========================================

const CompaniesPageModule = (() => {
  // Mapping sector values to badge display names
  const sectorBadges = {
    'aeroport': 'Aéroport',
    'agriculture': 'Agriculture',
    'animation-sport': 'Animation / Sport',
    'animaux-elevage': 'Animaux / Elevage',
    'artisanat': 'Artisanat',
    'automobile': 'Automobile',
    'batiment-tp': 'Bâtiment / Travaux publics',
    'energie': 'Energie',
    'hotellerie-restauration': 'Hôtellerie / Restauration',
    'industrie': 'Industrie',
    'maintenance-entretien': 'Maintenance / Entretien',
    'mode-esthetique': 'Mode / Esthétique',
    'nature-environnement': 'Nature / Environnement',
    'sante-social': 'Santé / Social',
    'securite-defense': 'Sécurité / Défense',
    'services-administratifs': 'Services administratifs',
    'services-funeraires': 'Services funéraires',
    'spectacles-divertissement': 'Spectacles / Divertissement',
    'transport-magasinage': 'Transport / Magasinage',
    'vente-commerce': 'Vente / Commerce'
  };

  let currentFilter = 'all'; // Track active filter

  const init = async () => {
    await loadAndRenderCards();
    initFilters();
    initToggleButton();
    initMobileSelect();
    initVoirPlus();
  };

  // Fetch JSON and render cards
  const loadAndRenderCards = async () => {
    try {
      const response = await fetch('../assets/data/partenaires.json');
      const data = await response.json();
      
      if (data.partenaires && Array.isArray(data.partenaires)) {
        renderCards(data.partenaires);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des partenaires:', error);
    }
  };

  // Render cards from JSON data
  const renderCards = (partenaires) => {
    const grid = document.getElementById('partenairesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    partenaires.forEach((partenaire, index) => {
      const card = createCardElement(partenaire, index);
      grid.appendChild(card);
    });
  };

  // Create card HTML element from data
  const createCardElement = (partenaire, index) => {
    const card = document.createElement('div');
    card.className = 'partenaire-card' + (index >= 6 ? ' partenaire-card-hidden' : '');
    card.setAttribute('data-sector', partenaire.sector);

    card.innerHTML = `
      <div class="partenaire-image">
        <img src="${partenaire.image}" alt="${partenaire.name}">
        <div class="partenaire-badge">${sectorBadges[partenaire.sector]}</div>
      </div>
      <div class="partenaire-content">
        <h3 class="partenaire-title">${partenaire.name}</h3>
        <p class="partenaire-activity"><strong>Activité :</strong> ${partenaire.activity}</p>
        <p class="partenaire-engagement"><strong>Type d'engagement :</strong> ${partenaire.engagement}</p>
        <p class="partenaire-contact"><strong>Contact :</strong> ${partenaire.contact}</p>
      </div>
    `;

    return card;
  };

  const filterCards = (filter) => {
    const cards = document.querySelectorAll('.partenaire-card');
    
    cards.forEach(card => {
      const sector = card.getAttribute('data-sector');
      const isHidden = card.classList.contains('partenaire-card-hidden');

      if ((filter === 'all' || sector === filter) && !isHidden) {
        card.style.display = 'flex';
        setTimeout(() => card.style.opacity = '1', 0);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  };

  const updateActiveButton = (activeButton, allButtons) => {
    allButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
  };

  const initFilters = () => {
    const filterButtons = document.querySelectorAll('.filtre-btn');

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        currentFilter = filter; // Update current filter
        
        // Update active button
        updateActiveButton(this, filterButtons);
        
        // Filter cards
        filterCards(filter);
        
        // Sync mobile select
        const mobileSelect = document.getElementById('filtreMobile');
        if (mobileSelect) {
          mobileSelect.value = filter;
        }
      });
    });
  };

  const initToggleButton = () => {
    const toggleBtn = document.getElementById('toggleFiltres');
    const container = document.querySelector('.filtre-container');
    const toggleText = toggleBtn?.querySelector('.toggle-text');

    if (toggleBtn && container) {
      toggleBtn.addEventListener('click', function() {
        container.classList.toggle('expanded');
        
        // Update button text
        if (container.classList.contains('expanded')) {
          toggleText.textContent = 'Moins de filtres';
        } else {
          toggleText.textContent = 'Plus de filtres';
        }
      });
    }
  };

  const initMobileSelect = () => {
    const mobileSelect = document.getElementById('filtreMobile');
    const filterButtons = document.querySelectorAll('.filtre-btn');

    if (mobileSelect) {
      mobileSelect.addEventListener('change', function() {
        const filter = this.value;
        currentFilter = filter; // Update current filter
        
        // Filter cards
        filterCards(filter);
        
        // Update active button (for consistency if switching back to desktop)
        const activeButton = document.querySelector(`.filtre-btn[data-filter="${filter}"]`);
        if (activeButton) {
          updateActiveButton(activeButton, filterButtons);
        }
      });
    }
  };

  const initVoirPlus = () => {
    const voirPlusBtn = document.getElementById('voirPlusBtn');
    const partenairesGrid = document.querySelector('.partenaires-grid');
    const voirPlusText = voirPlusBtn?.querySelector('.voir-plus-text');
    let isExpanded = false;

    if (voirPlusBtn && partenairesGrid) {
      voirPlusBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
          // Show hidden cards
          const hiddenCards = partenairesGrid.querySelectorAll('.partenaire-card-hidden');
          hiddenCards.forEach(card => {
            card.classList.remove('partenaire-card-hidden');
          });
          
          // Reapply current filter to update display styles
          filterCards(currentFilter);
          
          partenairesGrid.classList.add('expanded');
          voirPlusBtn.classList.add('expanded');
          voirPlusBtn.classList.remove('collapsed');
          voirPlusText.textContent = 'Voir moins d\'entreprises';
        } else {
          // Hide extra cards and scroll to grid
          const cards = partenairesGrid.querySelectorAll('.partenaire-card');
          cards.forEach((card, index) => {
            if (index >= 6) {
              card.classList.add('partenaire-card-hidden');
            }
          });
          
          // Reapply current filter to update display styles
          filterCards(currentFilter);
          
          partenairesGrid.classList.remove('expanded');
          voirPlusBtn.classList.remove('expanded');
          voirPlusBtn.classList.add('collapsed');
          voirPlusText.textContent = 'Voir plus d\'entreprises';
          
          // Scroll to grid
          partenairesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  };

  return { init };
})();

// Initialize if on companies page
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.partenaires-section')) {
    CompaniesPageModule.init();
  }
});
