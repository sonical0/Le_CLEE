// ========================================
// PAGE-SPECIFIC MODULE - FORMATIONS CARDS
// ========================================

const FormationsCardsModule = (() => {
  const dataUrl = encodeURI('../assets/data/liste des tâches CLEE - Repertoire des formations.json');
  const gridSelector = '.formations-grid';

  const slugify = (value) => {
    if (!value) return '';
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  };

  const createObjectivesList = (objectifs = []) => {
    if (!Array.isArray(objectifs) || objectifs.length === 0) return '';
    const items = objectifs.map((item) => `<li>${item}</li>`).join('');
    return `
      <div class="formation-details">
        <div class="detail-section">
          <h4>Objectifs</h4>
          <ul>
            ${items}
          </ul>
        </div>
      </div>
    `;
  };

  const inferSector = (item) => {
    const source = [
      item['Famille de métiers'],
      item['Nom de la formation'],
      item['Type d\'établissement']
    ].join(' ');
    const normalized = slugify(source);

    if (/(informatique|numerique|digital|cyber|reseau)/.test(normalized)) return 'numerique';
    if (/(maintenance|industri|elect|production|mecan)/.test(normalized)) return 'industrie';
    if (/(batiment|construction|macon|bois)/.test(normalized)) return 'batiment';
    return 'tertiaire';
  };

  const formatNiveau = (niveau) => {
    const value = (niveau || '').toLowerCase();
    if (value.includes('cap')) return 'CAP';
    if (value.includes('bts')) return 'BTS';
    if (value.includes('licence') || value.includes('but')) return 'BAC+3';
    if (value.includes('bac')) return 'BAC PRO';
    return niveau || 'Formation';
  };

  const sectorLabel = (secteur) => {
    switch (secteur) {
      case 'numerique':
        return 'Numérique';
      case 'industrie':
        return 'Industrie';
      case 'batiment':
        return 'Bâtiment';
      default:
        return 'Tertiaire';
    }
  };

  const sectorGradient = (secteur) => {
    switch (secteur) {
      case 'numerique':
        return 'linear-gradient(135deg, var(--color-numerique) 0%, var(--color-numerique) 100%)';
      case 'industrie':
        return 'linear-gradient(135deg, var(--color-industrie) 0%, var(--color-industrie) 100%)';
      case 'batiment':
        return 'linear-gradient(135deg, var(--color-batiment) 0%, var(--color-batiment) 100%)';
      default:
        return 'linear-gradient(135deg, var(--color-tertiaire) 0%, var(--color-tertiaire) 100%)';
    }
  };

  const buildObjectives = (item) => {
    const rawKeywords = item['Mots clés'] || '';
    const keywords = rawKeywords
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean);

    if (keywords.length > 0) return keywords;

    const fallback = [];
    if (item.Niveau) fallback.push(`Niveau : ${item.Niveau}`);
    if (item.Format) fallback.push(`Format : ${item.Format}`);
    if (item['Famille de métiers']) fallback.push(`Famille : ${item['Famille de métiers']}`);
    return fallback;
  };

  const buildDescription = (item) => {
    return item['Famille de métiers'] || item.Format || item['Type d\'établissement'] || 'Formation proposée.';
  };

  const buildTitle = (item) => {
    const base = item['Nom de la formation'] || 'Formation';
    const acronyme = item.Acronyme ? ` (${item.Acronyme})` : '';
    return `${base}${acronyme}`;
  };

  const createCard = (formation) => {
    const secteur = inferSector(formation);
    const niveau = formatNiveau(formation.Niveau);
    const titre = buildTitle(formation);
    const description = buildDescription(formation);
    const etablissement = formation['Nom de l\'établissement'] || '';
    const badgeLabel = sectorLabel(secteur);
    const badgeGradient = sectorGradient(secteur);
    const objectifs = buildObjectives(formation);
    const image = `https://picsum.photos/400/250?random=${formation.__index + 20}`;
    const imageAlt = titre;

    const etablissementLine = etablissement
      ? `<p class="formation-description"><strong>Établissement :</strong> ${etablissement}</p>`
      : '';

    return `
      <article class="formation-card" data-secteur="${secteur}" data-etablissement="${slugify(etablissement)}">
        <div class="formation-header">
          <div class="formation-image">
            <img src="${image}" alt="${imageAlt || titre}">
            <span class="formation-niveau">${niveau}</span>
          </div>
          <div class="formation-badge" style="background: ${badgeGradient};">${badgeLabel}</div>
        </div>
        <div class="formation-content">
          <h3 class="formation-title">${titre}</h3>
          <p class="formation-description">${description}</p>
          ${etablissementLine}
          ${createObjectivesList(objectifs)}
          <button class="formation-toggle">Voir les détails</button>
        </div>
      </article>
    `;
  };

  const renderCards = (formations) => {
    const grid = document.querySelector(gridSelector);
    if (!grid) return;
    const normalized = formations.map((item, index) => ({ ...item, __index: index }));
    grid.innerHTML = normalized.map(createCard).join('');
    document.dispatchEvent(new CustomEvent('formations:loaded'));
  };

  const init = async () => {
    try {
      const response = await fetch(dataUrl);
      const data = await response.json();
      if (!Array.isArray(data)) return;
      renderCards(data);
    } catch (error) {
      console.error('Erreur lors du chargement des formations:', error);
    }
  };

  return { init };
})();

// Initialize when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.formations-grid')) {
    FormationsCardsModule.init();
  }
});
