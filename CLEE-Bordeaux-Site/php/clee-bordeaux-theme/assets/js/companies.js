// ========================================
// PAGE-SPECIFIC MODULE - COMPANIES PAGE
// ========================================

const CompaniesPageModule = (() => {
  const init = () => {
    initFilters();
  };

  const initFilters = () => {
    const filterButtons = document.querySelectorAll('.filtre-btn');
    const cards = document.querySelectorAll('.partenaire-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter cards
        cards.forEach(card => {
          const sector = card.getAttribute('data-sector');

          if (filter === 'all' || sector === filter) {
            card.style.display = 'flex';
            setTimeout(() => card.style.opacity = '1', 0);
          } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
          }
        });
      });
    });
  };

  return { init };
})();

// Initialize if on companies page
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.partenaires-section')) {
    CompaniesPageModule.init();
  }
});
