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
  let currentSearch = '';

  const normalize = (value) => {
    if (!value) return '';
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9\s-]/g, '');
  };

  const init = async () => {
    await loadAndRenderCards();
    initFilters();
    initToggleButton();
    initMobileSelect();
    initSearch();
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
    const searchValue = normalize(currentSearch);

    cards.forEach(card => {
      const sector = card.getAttribute('data-sector');
      const isHidden = card.classList.contains('partenaire-card-hidden');
      const title = normalize(card.querySelector('.partenaire-title')?.textContent || '');
      const activity = normalize(card.querySelector('.partenaire-activity')?.textContent || '');
      const matchesSearch = !searchValue || title.includes(searchValue) || activity.includes(searchValue);

      if ((filter === 'all' || sector === filter) && matchesSearch && !isHidden) {
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
      button.addEventListener('click', function () {
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
      toggleBtn.addEventListener('click', function () {
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
      mobileSelect.addEventListener('change', function () {
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

  const initSearch = () => {
    const searchInput = document.getElementById('partenairesSearch');
    const searchButton = document.getElementById('partenairesSearchBtn');

    if (!searchInput) return;

    const applySearch = () => {
      currentSearch = searchInput.value.trim();
      filterCards(currentFilter);
    };

    searchInput.addEventListener('input', applySearch);
    if (searchButton) {
      searchButton.addEventListener('click', applySearch);
    }
  };

  const initVoirPlus = () => {
    const voirPlusBtn = document.getElementById('voirPlusBtn');
    const partenairesGrid = document.querySelector('.partenaires-grid');
    const voirPlusText = voirPlusBtn?.querySelector('.voir-plus-text');
    let isExpanded = false;

    if (voirPlusBtn && partenairesGrid) {
      voirPlusBtn.addEventListener('click', function () {
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

// ========================================
// MODAL D'INSCRIPTION MODULE
// ========================================

const InscriptionModalModule = (() => {
  let formationCount = 1;
  let periodeCount = 1;

  const init = () => {
    const openBtn = document.getElementById('openInscriptionModal');
    const closeBtn = document.getElementById('closeInscriptionModal');
    const overlay = document.getElementById('inscriptionModalOverlay');

    const choixEntreprise = document.getElementById('choixEntreprise');
    const choixEtablissement = document.getElementById('choixEtablissement');

    const backFromEntreprise = document.getElementById('backFromEntreprise');
    const backFromEtablissement = document.getElementById('backFromEtablissement');

    const ajouterFormationBtn = document.getElementById('ajouterFormation');
    const ajouterPeriodeBtn = document.getElementById('ajouterPeriode');

    const formEntreprise = document.getElementById('formEntreprise');
    const formEtablissement = document.getElementById('formEtablissement');

    const closeConfirmation = document.getElementById('closeConfirmation');

    // Open modal
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        openModal();
      });
    }

    // Close modal
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal();
      });
    }

    // Overlay click disabled - modal can only be closed via close button
    // if (overlay) {
    //   overlay.addEventListener('click', (e) => {
    //     if (e.target === overlay) {
    //       closeModal();
    //     }
    //   });
    // }

    // Choice: Entreprise
    if (choixEntreprise) {
      choixEntreprise.addEventListener('click', () => {
        showFormulaire('entreprise');
      });
    }

    // Choice: Etablissement
    if (choixEtablissement) {
      choixEtablissement.addEventListener('click', () => {
        showFormulaire('etablissement');
      });
    }

    // Back buttons
    if (backFromEntreprise) {
      backFromEntreprise.addEventListener('click', () => {
        showChoixType();
      });
    }

    if (backFromEtablissement) {
      backFromEtablissement.addEventListener('click', () => {
        showChoixType();
      });
    }

    // Dynamic fields for enterprise form
    initEntrepriseFormLogic();

    // Add formation button
    if (ajouterFormationBtn) {
      ajouterFormationBtn.addEventListener('click', () => {
        ajouterFormation();
      });
    }

    // Add periode button
    if (ajouterPeriodeBtn) {
      ajouterPeriodeBtn.addEventListener('click', () => {
        ajouterPeriode();
      });
    }

    // Form submissions
    if (formEntreprise) {
      formEntreprise.addEventListener('submit', (e) => {
        e.preventDefault();
        handleEntrepriseSubmit(e);
      });
    }

    if (formEtablissement) {
      formEtablissement.addEventListener('submit', (e) => {
        e.preventDefault();
        handleEtablissementSubmit(e);
      });
    }

    // Close confirmation
    if (closeConfirmation) {
      closeConfirmation.addEventListener('click', () => {
        closeModal();
      });
    }

    // Character counter for description
    const descriptionTextarea = document.getElementById('entrepriseDescription');
    const descriptionCount = document.getElementById('descriptionCount');
    if (descriptionTextarea && descriptionCount) {
      descriptionTextarea.addEventListener('input', () => {
        descriptionCount.textContent = descriptionTextarea.value.length;
      });
    }

    // File size validation
    initFileValidation();
  };

  const openModal = () => {
    const overlay = document.getElementById('inscriptionModalOverlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    const overlay = document.getElementById('inscriptionModalOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';

      // Reset to choice screen
      setTimeout(() => {
        showChoixType();
        resetForms();
      }, 300);
    }
  };

  const showChoixType = () => {
    document.getElementById('choixTypeInscription').style.display = 'block';
    document.getElementById('formulaireEntreprise').style.display = 'none';
    document.getElementById('formulaireEtablissement').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'none';
  };

  const showFormulaire = (type) => {
    document.getElementById('choixTypeInscription').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'none';

    if (type === 'entreprise') {
      document.getElementById('formulaireEntreprise').style.display = 'block';
      document.getElementById('formulaireEtablissement').style.display = 'none';
    } else {
      document.getElementById('formulaireEntreprise').style.display = 'none';
      document.getElementById('formulaireEtablissement').style.display = 'block';
    }
  };

  const showConfirmation = () => {
    document.getElementById('choixTypeInscription').style.display = 'none';
    document.getElementById('formulaireEntreprise').style.display = 'none';
    document.getElementById('formulaireEtablissement').style.display = 'none';
    document.getElementById('confirmationMessage').style.display = 'block';
  };

  const resetForms = () => {
    document.getElementById('formEntreprise')?.reset();
    document.getElementById('formEtablissement')?.reset();

    // Reset dynamic formations and periodes
    formationCount = 1;
    periodeCount = 1;

    const formationsContainer = document.getElementById('formationsContainer');
    if (formationsContainer) {
      formationsContainer.innerHTML = getFormationTemplate(0);
    }

    const periodesContainer = document.getElementById('periodesContainer');
    if (periodesContainer) {
      periodesContainer.innerHTML = getPeriodeTemplate(0);
    }

    // Reset character counter
    const descriptionCount = document.getElementById('descriptionCount');
    if (descriptionCount) {
      descriptionCount.textContent = '0';
    }

    // Reset conditional fields
    document.getElementById('typesStagiairesGroup').style.display = 'none';
    document.getElementById('niveauxAlternantsGroup').style.display = 'none';
  };

  const initEntrepriseFormLogic = () => {
    // Show/hide types de stagiaires based on accepte stagiaires
    const accepteStagiairesRadios = document.querySelectorAll('input[name="accepteStagiaires"]');
    accepteStagiairesRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const typesStagiairesGroup = document.getElementById('typesStagiairesGroup');
        if (radio.value === 'oui' && radio.checked) {
          typesStagiairesGroup.style.display = 'block';
        } else if (radio.value === 'non' && radio.checked) {
          typesStagiairesGroup.style.display = 'none';
        }
      });
    });

    // Show/hide niveaux alternants based on accepte alternants
    const accepteAlternantsRadios = document.querySelectorAll('input[name="accepteAlternants"]');
    accepteAlternantsRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        const niveauxAlternantsGroup = document.getElementById('niveauxAlternantsGroup');
        if (radio.value === 'oui' && radio.checked) {
          niveauxAlternantsGroup.style.display = 'block';
        } else if (radio.value === 'non' && radio.checked) {
          niveauxAlternantsGroup.style.display = 'none';
        }
      });
    });
  };

  const ajouterFormation = () => {
    const container = document.getElementById('formationsContainer');
    const newFormation = document.createElement('div');
    newFormation.className = 'formation-item';
    newFormation.setAttribute('data-index', formationCount);
    newFormation.innerHTML = getFormationTemplate(formationCount);
    container.appendChild(newFormation);
    formationCount++;
  };

  const getFormationTemplate = (index) => {
    return `
      <div class="formation-header">
        <h4>Formation ${index + 1}</h4>
        ${index > 0 ? '<button type="button" class="btn-remove-item" onclick="InscriptionModalModule.removeFormation(this)"><i class="fas fa-times"></i> Supprimer</button>' : ''}
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="formationIntitule${index}" class="form-label">Intitulé de la formation <span class="required">*</span></label>
          <input type="text" id="formationIntitule${index}" name="formations[${index}][intitule]" class="form-input" required>
        </div>
        
        <div class="form-group">
          <label for="formationNiveau${index}" class="form-label">Niveau <span class="required">*</span></label>
          <select id="formationNiveau${index}" name="formations[${index}][niveau]" class="form-select" required>
            <option value="">Sélectionnez...</option>
            <option value="cap">CAP</option>
            <option value="bac-pro">Bac Pro</option>
            <option value="bts">BTS</option>
            <option value="licence-pro">Licence Pro</option>
            <option value="master">Master</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="formationSecteur${index}" class="form-label">Secteur <span class="required">*</span></label>
          <select id="formationSecteur${index}" name="formations[${index}][secteur]" class="form-select" required>
            <option value="">Sélectionnez...</option>
            <option value="agriculture">Agriculture / Agroalimentaire</option>
            <option value="artisanat">Artisanat / Métiers d'art</option>
            <option value="automobile">Automobile / Mécanique</option>
            <option value="batiment-tp">BTP / Construction</option>
            <option value="vente-commerce">Commerce / Distribution</option>
            <option value="communication">Communication / Marketing</option>
            <option value="culture">Culture / Arts / Spectacle</option>
            <option value="education">Éducation / Formation</option>
            <option value="energie">Énergie / Environnement</option>
            <option value="finance">Finance / Banque / Assurance</option>
            <option value="hotellerie-restauration">Hôtellerie / Restauration</option>
            <option value="immobilier">Immobilier</option>
            <option value="industrie">Industrie / Production</option>
            <option value="informatique">Informatique / Numérique</option>
            <option value="juridique">Juridique / Conseil</option>
            <option value="transport-magasinage">Logistique / Transport</option>
            <option value="sante-social">Santé / Social</option>
            <option value="securite-defense">Sécurité / Défense</option>
            <option value="animation-sport">Sport / Loisirs</option>
            <option value="tourisme">Tourisme</option>
          </select>
        </div>
        
        <div class="form-group">
          <label class="form-label">Modalités <span class="required">*</span></label>
          <div class="form-checkbox-group">
            <label class="form-checkbox">
              <input type="checkbox" name="formations[${index}][modalites][]" value="initial" required>
              <span>Initial</span>
            </label>
            <label class="form-checkbox">
              <input type="checkbox" name="formations[${index}][modalites][]" value="alternance">
              <span>Alternance</span>
            </label>
            <label class="form-checkbox">
              <input type="checkbox" name="formations[${index}][modalites][]" value="mixite">
              <span>Mixité</span>
            </label>
          </div>
        </div>
      </div>
    `;
  };

  const ajouterPeriode = () => {
    const container = document.getElementById('periodesContainer');
    const newPeriode = document.createElement('div');
    newPeriode.className = 'periode-item';
    newPeriode.setAttribute('data-index', periodeCount);
    newPeriode.innerHTML = getPeriodeTemplate(periodeCount);
    container.appendChild(newPeriode);
    periodeCount++;
  };

  const getPeriodeTemplate = (index) => {
    return `
      <div class="periode-header">
        <h4>Période ${index + 1}</h4>
        ${index > 0 ? '<button type="button" class="btn-remove-item" onclick="InscriptionModalModule.removePeriode(this)"><i class="fas fa-times"></i> Supprimer</button>' : ''}
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="periodeFormation${index}" class="form-label">Formation concernée <span class="required">*</span></label>
          <input type="text" id="periodeFormation${index}" name="periodes[${index}][formation]" class="form-input" required>
        </div>
        
        <div class="form-group">
          <label for="periodeNiveau${index}" class="form-label">Niveau <span class="required">*</span></label>
          <select id="periodeNiveau${index}" name="periodes[${index}][niveau]" class="form-select" required>
            <option value="">Sélectionnez...</option>
            <option value="cap">CAP</option>
            <option value="bac-pro">Bac Pro</option>
            <option value="bts">BTS</option>
            <option value="licence-pro">Licence Pro</option>
            <option value="master">Master</option>
          </select>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="periodeModalite${index}" class="form-label">Modalité <span class="required">*</span></label>
          <select id="periodeModalite${index}" name="periodes[${index}][modalite]" class="form-select" required>
            <option value="">Sélectionnez...</option>
            <option value="initial">Initial</option>
            <option value="alternance">Alternance</option>
            <option value="mixite">Mixité</option>
          </select>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="periodeDebut${index}" class="form-label">Date de début <span class="required">*</span></label>
          <input type="date" id="periodeDebut${index}" name="periodes[${index}][dateDebut]" class="form-input" required>
        </div>
        
        <div class="form-group">
          <label for="periodeFin${index}" class="form-label">Date de fin <span class="required">*</span></label>
          <input type="date" id="periodeFin${index}" name="periodes[${index}][dateFin]" class="form-input" required>
        </div>
      </div>
    `;
  };

  const removeFormation = (button) => {
    const formationItem = button.closest('.formation-item');
    if (formationItem) {
      formationItem.remove();
    }
  };

  const removePeriode = (button) => {
    const periodeItem = button.closest('.periode-item');
    if (periodeItem) {
      periodeItem.remove();
    }
  };

  const initFileValidation = () => {
    // Logo validation (2MB max)
    const logoInputs = document.querySelectorAll('#entrepriseLogo, #etablissementLogo');
    logoInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        validateFileSize(e.target, 2 * 1024 * 1024, 'Le logo ne doit pas dépasser 2 Mo');
      });
    });

    // Photos validation (5MB max per file, 10 files max)
    const photosInput = document.getElementById('entreprisePhotos');
    if (photosInput) {
      photosInput.addEventListener('change', (e) => {
        const files = e.target.files;
        if (files.length > 10) {
          alert('Vous ne pouvez télécharger que 10 photos maximum');
          e.target.value = '';
          return;
        }

        for (let file of files) {
          if (file.size > 5 * 1024 * 1024) {
            alert(`Le fichier "${file.name}" dépasse la taille maximale de 5 Mo`);
            e.target.value = '';
            return;
          }
        }
      });
    }
  };

  const validateFileSize = (input, maxSize, message) => {
    const file = input.files[0];
    if (file && file.size > maxSize) {
      alert(message);
      input.value = '';
    }
  };

  const handleEntrepriseSubmit = (e) => {
    const formData = new FormData(e.target);

    // Collect data
    const entrepriseData = {
      type: 'entreprise',
      nom: formData.get('nom'),
      siret: formData.get('siret'),
      effectif: formData.get('effectif'),
      adresse: {
        rue: formData.get('rue'),
        codePostal: formData.get('codePostal'),
        ville: formData.get('ville')
      },
      contact: {
        email: formData.get('email'),
        telephone: formData.get('telephone')
      },
      presenceEnLigne: {
        siteInternet: formData.get('siteInternet'),
        linkedin: formData.get('linkedin')
      },
      secteurs: formData.getAll('secteur[]'),
      description: formData.get('description'),
      international: formData.get('international'),
      accueilApprenants: {
        stagiaires: {
          accepte: formData.get('accepteStagiaires') === 'oui',
          types: formData.get('accepteStagiaires') === 'oui' ? formData.getAll('typesStagiaires[]') : []
        },
        alternants: {
          accepte: formData.get('accepteAlternants') === 'oui',
          niveaux: formData.get('accepteAlternants') === 'oui' ? formData.getAll('niveauxAlternants[]') : []
        }
      },
      dateInscription: new Date().toISOString()
    };

    console.log('Entreprise data:', entrepriseData);

    // Save to localStorage (simulation)
    saveInscription('entreprise', entrepriseData);

    // Show confirmation
    showConfirmation();
  };

  const handleEtablissementSubmit = (e) => {
    const formData = new FormData(e.target);

    // Collect formations
    const formations = [];
    const formationInputs = document.querySelectorAll('.formation-item');
    formationInputs.forEach((item, index) => {
      const intitule = formData.get(`formations[${index}][intitule]`);
      if (intitule) {
        formations.push({
          intitule: intitule,
          niveau: formData.get(`formations[${index}][niveau]`),
          secteur: formData.get(`formations[${index}][secteur]`),
          modalites: formData.getAll(`formations[${index}][modalites][]`)
        });
      }
    });

    // Collect periodes
    const periodes = [];
    const periodeInputs = document.querySelectorAll('.periode-item');
    periodeInputs.forEach((item, index) => {
      const formation = formData.get(`periodes[${index}][formation]`);
      if (formation) {
        periodes.push({
          formation: formation,
          niveau: formData.get(`periodes[${index}][niveau]`),
          modalite: formData.get(`periodes[${index}][modalite]`),
          dateDebut: formData.get(`periodes[${index}][dateDebut]`),
          dateFin: formData.get(`periodes[${index}][dateFin]`)
        });
      }
    });

    const etablissementData = {
      type: 'etablissement',
      nom: formData.get('nom'),
      adresse: {
        rue: formData.get('rue'),
        codePostal: formData.get('codePostal'),
        ville: formData.get('ville')
      },
      contact: {
        emailGeneral: formData.get('emailGeneral'),
        telephoneGeneral: formData.get('telephoneGeneral')
      },
      contactReferent: {
        nom: formData.get('contactNom'),
        fonction: formData.get('contactFonction'),
        email: formData.get('contactEmail'),
        telephone: formData.get('contactTelephone')
      },
      formations: formations,
      calendrierStages: periodes,
      anneeScolaire: formData.get('anneeScolaire'),
      dateInscription: new Date().toISOString()
    };

    console.log('Etablissement data:', etablissementData);

    // Save to localStorage (simulation)
    saveInscription('etablissement', etablissementData);

    // Show confirmation and reload table
    showConfirmation();

    // Reload formations table after 2 seconds
    setTimeout(() => {
      if (window.TableauFormationsModule) {
        TableauFormationsModule.loadData();
      }
    }, 2000);
  };

  const saveInscription = (type, data) => {
    // Get existing data
    let inscriptions = JSON.parse(localStorage.getItem('inscriptions') || '{"entreprises": [], "etablissements": []}');

    // Add new inscription
    if (type === 'entreprise') {
      data.id = 'ent-' + Date.now();
      inscriptions.entreprises.push(data);
    } else {
      data.id = 'etab-' + Date.now();
      inscriptions.etablissements.push(data);
    }

    // Save back to localStorage
    localStorage.setItem('inscriptions', JSON.stringify(inscriptions));
  };

  return {
    init,
    removeFormation,
    removePeriode
  };
})();

// ========================================
// TABLEAU DES FORMATIONS MODULE
// ========================================

const TableauFormationsModule = (() => {
  let allFormations = [];
  let filteredFormations = [];
  let currentSort = { column: null, direction: 'asc' };
  let currentPage = 1;
  let itemsPerPage = 5;

  const init = () => {
    loadData();
    initFilters();
    initSort();
    initPagination();
  };

  const loadData = async () => {
    try {
      // Load from JSON file
      const response = await fetch('../assets/data/inscriptions.json');
      const data = await response.json();

      // Also load from localStorage if available
      const localData = JSON.parse(localStorage.getItem('inscriptions') || '{"entreprises": [], "etablissements": []}');

      // Merge data
      const etablissements = [...data.etablissements, ...localData.etablissements];

      // Transform data for table
      allFormations = [];

      etablissements.forEach(etab => {
        etab.formations.forEach(formation => {
          // Find matching calendrier
          const calendrier = etab.calendrierStages?.find(c =>
            c.formation === formation.intitule && c.niveau === formation.niveau
          );

          allFormations.push({
            etablissement: etab.nom,
            etablissementContact: etab.contact,
            formation: formation.intitule,
            secteur: formation.secteur,
            niveau: formation.niveau,
            modalites: formation.modalites,
            periodes: calendrier?.periodes || [],
            ville: etab.adresse.ville
          });
        });
      });

      filteredFormations = [...allFormations];
      populateFilters();
      renderTable();
      renderPagination();

    } catch (error) {
      console.error('Erreur lors du chargement des formations:', error);
    }
  };

  const populateFilters = () => {
    // Etablissements
    const etablissements = [...new Set(allFormations.map(f => f.etablissement))].sort();
    const filtreEtablissement = document.getElementById('filtreEtablissement');
    etablissements.forEach(etab => {
      const option = document.createElement('option');
      option.value = etab;
      option.textContent = etab;
      filtreEtablissement.appendChild(option);
    });

    // Secteurs
    const secteurs = [...new Set(allFormations.map(f => f.secteur))].sort();
    const filtreSecteur = document.getElementById('filtreSecteur');
    secteurs.forEach(secteur => {
      const option = document.createElement('option');
      option.value = secteur;
      option.textContent = secteur;
      filtreSecteur.appendChild(option);
    });
  };

  const initFilters = () => {
    const filtreEtablissement = document.getElementById('filtreEtablissement');
    const filtreSecteur = document.getElementById('filtreSecteur');
    const filtreNiveau = document.getElementById('filtreNiveau');
    const filtreModalite = document.getElementById('filtreModalite');
    const filtreRecherche = document.getElementById('filtreRecherche');
    const reinitialiser = document.getElementById('reinitialiserFiltres');

    const applyFilters = () => {
      filteredFormations = allFormations.filter(formation => {
        // Etablissement filter
        if (filtreEtablissement.value && formation.etablissement !== filtreEtablissement.value) {
          return false;
        }

        // Secteur filter
        if (filtreSecteur.value && formation.secteur !== filtreSecteur.value) {
          return false;
        }

        // Niveau filter
        if (filtreNiveau.value && formation.niveau !== filtreNiveau.value) {
          return false;
        }

        // Modalite filter
        if (filtreModalite.value && !formation.modalites.includes(filtreModalite.value)) {
          return false;
        }

        // Search filter
        if (filtreRecherche.value) {
          const search = filtreRecherche.value.toLowerCase();
          const searchText = `${formation.formation} ${formation.etablissement} ${formation.secteur}`.toLowerCase();
          if (!searchText.includes(search)) {
            return false;
          }
        }

        return true;
      });

      currentPage = 1; // Reset to page 1 when filters change
      renderTable();
      renderPagination();
    };

    filtreEtablissement?.addEventListener('change', applyFilters);
    filtreSecteur?.addEventListener('change', applyFilters);
    filtreNiveau?.addEventListener('change', applyFilters);
    filtreModalite?.addEventListener('change', applyFilters);
    filtreRecherche?.addEventListener('input', applyFilters);

    reinitialiser?.addEventListener('click', () => {
      filtreEtablissement.value = '';
      filtreSecteur.value = '';
      filtreNiveau.value = '';
      filtreModalite.value = '';
      filtreRecherche.value = '';
      filteredFormations = [...allFormations];
      currentPage = 1; // Reset to page 1
      renderTable();
      renderPagination();
    });
  };

  const initSort = () => {
    const headers = document.querySelectorAll('.formations-table thead th[data-sort]');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const column = header.dataset.sort;

        if (currentSort.column === column) {
          currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
          currentSort.column = column;
          currentSort.direction = 'asc';
        }

        sortTable(column, currentSort.direction);
        updateSortIcons(header);
      });
    });
  };

  const sortTable = (column, direction) => {
    filteredFormations.sort((a, b) => {
      let valA, valB;

      if (column === 'modalites') {
        valA = a.modalites.join(', ');
        valB = b.modalites.join(', ');
      } else if (column === 'periodes') {
        valA = a.periodes.length > 0 ? a.periodes[0].dateDebut : '';
        valB = b.periodes.length > 0 ? b.periodes[0].dateDebut : '';
      } else {
        valA = a[column];
        valB = b[column];
      }

      if (valA < valB) return direction === 'asc' ? -1 : 1;
      if (valA > valB) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    currentPage = 1; // Reset to page 1 after sorting
    renderTable();
    renderPagination();
  };

  const updateSortIcons = (activeHeader) => {
    const headers = document.querySelectorAll('.formations-table thead th[data-sort]');
    headers.forEach(h => {
      h.classList.remove('sort-asc', 'sort-desc');
    });

    activeHeader.classList.add(`sort-${currentSort.direction}`);
  };

  const renderTable = () => {
    const tbody = document.getElementById('formationsTableBody');
    const tableauEmpty = document.getElementById('tableauEmpty');
    const nombreResultats = document.getElementById('nombreResultats');
    const resultatsDebut = document.getElementById('resultatsDebut');
    const resultatsFin = document.getElementById('resultatsFin');

    tbody.innerHTML = '';

    if (filteredFormations.length === 0) {
      tableauEmpty.style.display = 'block';
      document.querySelector('.formations-table').style.display = 'none';
      if (nombreResultats) nombreResultats.textContent = '0';
      document.querySelector('.tableau-footer').style.display = 'none';
    } else {
      tableauEmpty.style.display = 'none';
      document.querySelector('.formations-table').style.display = 'table';
      document.querySelector('.tableau-footer').style.display = 'flex';

      // Calculate pagination
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, filteredFormations.length);
      const paginatedFormations = filteredFormations.slice(startIndex, endIndex);

      // Update result counters (if elements exist)
      if (resultatsDebut) resultatsDebut.textContent = startIndex + 1;
      if (resultatsFin) resultatsFin.textContent = endIndex;
      if (nombreResultats) nombreResultats.textContent = filteredFormations.length;

      // Render rows for current page only
      paginatedFormations.forEach(formation => {
        const row = document.createElement('tr');

        // Etablissement
        const tdEtab = document.createElement('td');
        tdEtab.setAttribute('data-label', 'Établissement');
        tdEtab.innerHTML = `<strong>${formation.etablissement}</strong><br><small>${formation.ville}</small>`;
        row.appendChild(tdEtab);

        // Formation
        const tdFormation = document.createElement('td');
        tdFormation.setAttribute('data-label', 'Formation');
        tdFormation.textContent = formation.formation;
        row.appendChild(tdFormation);

        // Secteur
        const tdSecteur = document.createElement('td');
        tdSecteur.setAttribute('data-label', 'Secteur');
        tdSecteur.innerHTML = `<span class="tableau-badge badge-secteur">${formation.secteur}</span>`;
        row.appendChild(tdSecteur);

        // Niveau
        const tdNiveau = document.createElement('td');
        tdNiveau.setAttribute('data-label', 'Niveau');
        tdNiveau.textContent = formation.niveau;
        row.appendChild(tdNiveau);

        // Modalités
        const tdModalites = document.createElement('td');
        tdModalites.setAttribute('data-label', 'Modalités');
        tdModalites.innerHTML = formation.modalites.map(m =>
          `<span class="tableau-badge badge-modalite">${m}</span>`
        ).join(' ');
        row.appendChild(tdModalites);

        // Périodes
        const tdPeriodes = document.createElement('td');
        tdPeriodes.setAttribute('data-label', 'Périodes');
        if (formation.periodes.length > 0) {
          tdPeriodes.innerHTML = formation.periodes.map(p =>
            `<span class="tableau-badge badge-periode">${formatDate(p.dateDebut)} → ${formatDate(p.dateFin)}</span>`
          ).join('');
        } else {
          tdPeriodes.innerHTML = '<small class="text-muted">Non renseigné</small>';
        }
        row.appendChild(tdPeriodes);

        // Contact
        const tdContact = document.createElement('td');
        tdContact.setAttribute('data-label', 'Contact');
        tdContact.innerHTML = `
          <div class="contact-info">
            <a href="mailto:${formation.etablissementContact.email}">${formation.etablissementContact.email}</a><br>
            <small>${formation.etablissementContact.telephone}</small>
          </div>
        `;
        row.appendChild(tdContact);

        tbody.appendChild(row);
      });
    }
  };

  const initPagination = () => {
    // Results per page selector
    const resultsPerPageSelect = document.getElementById('resultsPerPage');
    resultsPerPageSelect?.addEventListener('change', (e) => {
      itemsPerPage = parseInt(e.target.value);
      currentPage = 1; // Reset to first page
      renderTable();
      renderPagination();
    });

    // Previous button
    document.getElementById('paginationPrev')?.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderTable();
        renderPagination();
      }
    });

    // Next button
    document.getElementById('paginationNext')?.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredFormations.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderTable();
        renderPagination();
      }
    });
  };

  const renderPagination = () => {
    const paginationNumbers = document.getElementById('paginationPages');
    const prevBtn = document.getElementById('paginationPrev');
    const nextBtn = document.getElementById('paginationNext');

    if (!paginationNumbers) return;

    const totalPages = Math.ceil(filteredFormations.length / itemsPerPage);
    paginationNumbers.innerHTML = '';

    // Disable/enable prev/next buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;

    if (totalPages === 0) return;

    // Generate page numbers with ellipsis logic
    const generatePageNumbers = () => {
      const pages = [];
      const maxVisible = 7; // Maximum page numbers to show

      if (totalPages <= maxVisible) {
        // Show all pages
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);

        if (currentPage <= 3) {
          // Near start: 1 2 3 4 5 ... last
          for (let i = 2; i <= 5; i++) {
            pages.push(i);
          }
          pages.push('...');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          // Near end: 1 ... last-4 last-3 last-2 last-1 last
          pages.push('...');
          for (let i = totalPages - 4; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          // Middle: 1 ... current-1 current current+1 ... last
          pages.push('...');
          pages.push(currentPage - 1);
          pages.push(currentPage);
          pages.push(currentPage + 1);
          pages.push('...');
          pages.push(totalPages);
        }
      }

      return pages;
    };

    const pageNumbers = generatePageNumbers();

    pageNumbers.forEach(page => {
      if (page === '...') {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.textContent = '...';
        paginationNumbers.appendChild(ellipsis);
      } else {
        const button = document.createElement('button');
        button.className = 'pagination-page';
        button.textContent = page;
        if (page === currentPage) {
          button.classList.add('active');
        }
        button.addEventListener('click', () => {
          currentPage = page;
          renderTable();
          renderPagination();
        });
        paginationNumbers.appendChild(button);
      }
    });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return { init, loadData };
})();

// Initialize if on companies page
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.partenaires-section')) {
    CompaniesPageModule.init();
  }

  // Initialize inscription modal
  if (document.getElementById('openInscriptionModal')) {
    InscriptionModalModule.init();
  }

  // Initialize tableau formations
  if (document.getElementById('formationsTable')) {
    TableauFormationsModule.init();
  }
});

// Make modules accessible globally for inline onclick handlers
window.InscriptionModalModule = InscriptionModalModule;
window.TableauFormationsModule = TableauFormationsModule;
