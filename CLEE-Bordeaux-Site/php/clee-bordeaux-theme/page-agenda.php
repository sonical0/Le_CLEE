<?php get_header(); ?>
<section class="hero">
<div class="container">
<h1 class="hero-title">Agenda 2026</h1>
<p class="hero-description">
                Découvrez tous les événements, rencontres et activités organisés par le CLEE Bordeaux Avenir tout au long de l'année.
            </p>
</div>
</section>
<section class="filters-section">
<div class="container">
<div class="filters-container">
<div class="filter-group">
<label class="filter-label" for="month-filter">Mois</label>
<select class="filter-select" id="month-filter">
<option value="all">Tous les mois</option>
<option value="0">Janvier</option>
<option value="1">Février</option>
<option value="2">Mars</option>
<option value="3">Avril</option>
<option value="4">Mai</option>
<option value="5">Juin</option>
<option value="6">Juillet</option>
<option value="7">Août</option>
<option value="8">Septembre</option>
<option value="9">Octobre</option>
<option value="10">Novembre</option>
<option value="11">Décembre</option>
</select>
</div>
<div class="filter-group">
<label class="filter-label" for="type-filter">Type d'événement</label>
<select class="filter-select" id="type-filter">
<option value="all">Tous les types</option>
<option value="conference">Conférence</option>
<option value="atelier">Atelier</option>
<option value="forum">Forum</option>
<option value="rencontre">Rencontre</option>
<option value="salon">Salon</option>
<option value="autre">Autre</option>
</select>
</div>
<div class="filter-group">
<label class="filter-label" for="search-filter">Rechercher</label>
<input class="filter-input" id="search-filter" placeholder="Rechercher un événement..." type="text"/>
</div>
<button class="btn btn-secondary" id="reset-filters">
                    Réinitialiser les filtres
                </button>
</div>
</div>
</section>
<section class="events-section">
<div class="container">
<div class="view-toggle">
<button class="view-btn active" data-view="calendar">
<span class="icon">📅</span>
                    Vue calendrier
                </button>
<button class="view-btn" data-view="list">
<span class="icon">📋</span>
                    Vue liste
                </button>
</div>
<!-- Calendar View -->
<div class="calendar-view" id="calendar-view">
<div class="calendar-header">
<button class="calendar-nav-btn" id="prev-month">‹</button>
<h2 class="calendar-month" id="current-month"></h2>
<button class="calendar-nav-btn" id="next-month">›</button>
</div>
<div class="calendar-grid" id="calendar-grid"></div>
</div>
<!-- List View -->
<div class="list-view" id="list-view" style="display: none;">
<div class="events-list" id="events-list"></div>
</div>
<!-- No Results Message -->
<div class="no-results" id="no-results" style="display: none;">
<div class="no-results-icon">🔍</div>
<h3>Aucun événement trouvé</h3>
<p>Essayez de modifier vos filtres de recherche</p>
</div>
</div>
</section>
<div class="modal" id="event-modal">
<div class="modal-overlay"></div>
<div class="modal-content">
<button class="modal-close">×</button>
<div id="modal-body"></div>
</div>
</div>
<?php get_footer(); ?>
