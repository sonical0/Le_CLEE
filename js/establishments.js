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
// PAGE-SPECIFIC MODULE - ESTABLISHMENTS MAP
// ========================================

const EstablishmentsMapModule = (() => {
  const dataUrl = encodeURI('../assets/data/liste des tâches CLEE - Etablissement scolaire.json');
  const mapContainerId = 'establishmentsMap';
  const listContainerId = 'ecolesList';
  const defaultCenter = [44.837789, -0.57918];
  const defaultImage = 'https://picsum.photos/800/500?random=51';

  let map;
  let markers = [];
  let establishments = [];

  const buildAddress = (item) => {
    const number = item['Num adresse'] ? `${item['Num adresse']} ` : '';
    const street = item['nom adresse'] || '';
    const postal = item['cp'] ? `${item['cp']} ` : '';
    const city = item['ville'] || '';
    return `${number}${street}, ${postal}${city}`.trim();
  };

  const parseLatLng = (item) => [
    Number.parseFloat(item.Latitude),
    Number.parseFloat(item.Longitude)
  ];

  const createInfoContent = (item) => {
    const address = buildAddress(item);
    const site = item.Site
      ? `<div><strong>Site :</strong> <a href="${item.Site}" target="_blank" rel="noopener noreferrer">Accéder au site</a></div>`
      : '';
    const type = item.Type ? `<div><strong>Type :</strong> ${item.Type}</div>` : '';
    const formations = item['Type de formations'] ? `<div><strong>Formations :</strong> ${item['Type de formations']}</div>` : '';

    return `
      <div style="font-family: Roboto, sans-serif; font-size: 13px; line-height: 1.4;">
        <strong>${item.Nom}</strong>
        <div><strong>Adresse :</strong> ${address}</div>
        ${type}
        ${formations}
        ${site}
      </div>
    `;
  };

  const setActiveListItem = (index) => {
    const items = document.querySelectorAll('.ecole-item');
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === index);
    });
  };

  const buildDescription = (item) => {
    const type = item.Type ? item.Type.toLowerCase() : 'établissement';
    const city = item.ville ? item.ville : 'Bordeaux';
    const formations = item['Type de formations'] ? ` Formations : ${item['Type de formations']}.` : '';
    return `${item.Nom} est un ${type} situé à ${city}.${formations}`;
  };

  const updateCard = (item) => {
    const card = document.getElementById('etablissement-content');
    if (!card) return;

    const address = buildAddress(item);
    const badge = item.Type ? item.Type : 'Établissement';
    const description = buildDescription(item);
    const typeInfo = item.Type ? `<div><strong>Type :</strong> ${item.Type}</div>` : '';
    const formationsInfo = item['Type de formations'] ? `<div><strong>Formations :</strong> ${item['Type de formations']}</div>` : '';
    const siteButton = item.Site
      ? `<a href="${item.Site}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Site de l'établissement</a>`
      : '';

    card.innerHTML = `
      <div class="etablissement-image">
        <img src="${defaultImage}" alt="${item.Nom}">
        <div class="etablissement-badge">${badge}</div>
      </div>
      <div class="etablissement-content">
        <h1 class="etablissement-name">${item.Nom}</h1>
        <p class="etablissement-address"><span style="font-size: 20px;">📍</span> ${address}</p>
        <p class="etablissement-description">${description}</p>
        <div class="etablissement-info">
          <div class="info-item">${typeInfo}</div>
          <div class="info-item">${formationsInfo}</div>
        </div>
        <div class="etablissement-actions">
          <a href="#formations" class="btn btn-primary">Voir les formations</a>
          ${siteButton}
        </div>
      </div>
    `;
  };

  const focusMarker = (index) => {
    const marker = markers[index];
    const item = establishments[index];
    if (!marker || !item || !map) return;

    map.setView(marker.getLatLng(), 14, { animate: true });
    marker.openPopup();
    setActiveListItem(index);
    updateCard(item);
  };

  const renderList = () => {
    const list = document.getElementById(listContainerId);
    if (!list) return;
    list.innerHTML = '';

    establishments.forEach((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ecole-item';
      button.innerHTML = `<span>${item.Nom}</span><span class="ecole-arrow">→</span>`;
      button.addEventListener('click', () => focusMarker(index));
      list.appendChild(button);
    });
  };

  const initMap = () => {
    const container = document.getElementById(mapContainerId);
    if (!container || !window.L) return;

    map = window.L.map(container).setView(defaultCenter, 12);

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const markerGroup = [];
    markers = establishments.map((item, index) => {
      const position = parseLatLng(item);
      const isCollege = (item.Type || '').toLowerCase() === 'collège';
      const marker = window.L.circleMarker(position, {
        radius: 7,
        color: isCollege ? '#c63634' : '#176ea1',
        fillColor: isCollege ? '#c63634' : '#176ea1',
        fillOpacity: 0.9,
        weight: 2
      }).addTo(map);
      marker.bindPopup(createInfoContent(item));
      marker.on('click', () => setActiveListItem(index));
      markerGroup.push(marker);
      return marker;
    });

    if (markerGroup.length > 0) {
      const group = window.L.featureGroup(markerGroup);
      map.fitBounds(group.getBounds().pad(0.2));
    }
  };

  const loadData = async () => {
    const response = await fetch(dataUrl);
    const data = await response.json();
    establishments = Array.isArray(data) ? data : [];
  };

  const init = async () => {
    await loadData();
    renderList();
    initMap();
    if (establishments.length > 0) {
      setActiveListItem(0);
      updateCard(establishments[0]);
    }
  };

  return { init };
})();

// ========================================
// PAGE-SPECIFIC MODULE - ESTABLISHMENTS PAGE
// ========================================

const EstablishmentsPageModule = (() => {
  const init = () => {
    initFilters();
    initFormationToggles();
    initViewFormationsButton();
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

  const initViewFormationsButton = () => {
    const formationsSection = document.getElementById('formations');
    if (!formationsSection) return;

    document.addEventListener('click', (event) => {
      const target = event.target.closest('.etablissement-actions .btn-primary');
      if (!target) return;
      event.preventDefault();
      formationsSection.style.display = 'block';
      formationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return { init };
})();

// Initialize if on establishments page
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.hero-etablissement')) {
    EstablishmentsMapModule.init();
    EstablishmentsPageModule.init();
  }
});
