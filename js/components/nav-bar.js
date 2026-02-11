class CleeNavBar extends HTMLElement {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this._longPressTimer = null;
    this._longPressTriggered = false;
    this._handleLogoMouseDown = null;
    this._handleLogoMouseUp = null;
    this._handleLogoClick = null;
  }

  connectedCallback() {
    this.render();
    this.attachEvents();
  }

  disconnectedCallback() {
    const toggle = this.querySelector('.menu-toggle');
    if (toggle) {
      toggle.removeEventListener('click', this.handleToggle);
    }
    const logo = this.querySelector('.logo');
    if (logo) {
      logo.removeEventListener('mousedown', this._handleLogoMouseDown);
      logo.removeEventListener('touchstart', this._handleLogoMouseDown);
      logo.removeEventListener('mouseup', this._handleLogoMouseUp);
      logo.removeEventListener('mouseleave', this._handleLogoMouseUp);
      logo.removeEventListener('touchend', this._handleLogoMouseUp);
      logo.removeEventListener('touchcancel', this._handleLogoMouseUp);
      logo.removeEventListener('click', this._handleLogoClick);
    }
  }

  handleToggle() {
    const toggle = this.querySelector('.menu-toggle');
    const navLinks = this.querySelector('.nav-links');
    if (!toggle || !navLinks) return;

    const isOpen = toggle.classList.toggle('active');
    navLinks.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  attachEvents() {
    const toggle = this.querySelector('.menu-toggle');
    if (toggle) {
      toggle.addEventListener('click', this.handleToggle);
    }

    const logo = this.querySelector('.logo');
    // compute target for colors reference using same pages-path logic
    const pagesPath = this.getAttribute('pages-path') ?? 'pages';
    const colorsHref = pagesPath ? `${pagesPath}/colors-reference.html` : 'colors-reference.html';

    if (logo) {
      // cleanup previous handlers if any
      if (this._handleLogoMouseDown) {
        logo.removeEventListener('mousedown', this._handleLogoMouseDown);
        logo.removeEventListener('touchstart', this._handleLogoMouseDown);
        logo.removeEventListener('mouseup', this._handleLogoMouseUp);
        logo.removeEventListener('mouseleave', this._handleLogoMouseUp);
        logo.removeEventListener('touchend', this._handleLogoMouseUp);
        logo.removeEventListener('touchcancel', this._handleLogoMouseUp);
        logo.removeEventListener('click', this._handleLogoClick);
      }

      this._handleLogoMouseDown = (e) => {
        this._longPressTriggered = false;
        // start 3s timer
        this._longPressTimer = setTimeout(() => {
          this._longPressTriggered = true;
          // navigate to colors reference
          window.location.href = colorsHref;
        }, 3000);
      };

      this._handleLogoMouseUp = (e) => {
        if (this._longPressTimer) {
          clearTimeout(this._longPressTimer);
          this._longPressTimer = null;
        }
      };

      // prevent the normal click navigation when long-press triggered
      this._handleLogoClick = (e) => {
        if (this._longPressTriggered) {
          e.preventDefault();
          this._longPressTriggered = false;
        }
      };

      logo.addEventListener('mousedown', this._handleLogoMouseDown);
      logo.addEventListener('touchstart', this._handleLogoMouseDown, {passive: true});
      logo.addEventListener('mouseup', this._handleLogoMouseUp);
      logo.addEventListener('mouseleave', this._handleLogoMouseUp);
      logo.addEventListener('touchend', this._handleLogoMouseUp);
      logo.addEventListener('touchcancel', this._handleLogoMouseUp);
      logo.addEventListener('click', this._handleLogoClick);
    }
  }

  render() {
    const basePath = this.getAttribute('base-path') ?? '';
    const pagesPath = this.getAttribute('pages-path') ?? 'pages';

    const rootLink = basePath ? `${basePath}/index.html` : 'index.html';
    const page = (path) => (pagesPath ? `${pagesPath}/${path}` : path);

    this.innerHTML = `
      <style>
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: var(--100);
          z-index: var(--z-fixed);
          transition: all 0.3s ease;
        }

        .navigation .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          max-height: 80px;
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .logo img {
          height: 48px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .logo:hover img {
          transform: scale(1.05);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          position: relative;
        }

        .menu-toggle span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: var(--primary-800);
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        .menu-toggle.active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 4px;
          align-items: center;
        }

        .nav-link {
          font-family: var(--navbar-text-font-family);
          font-weight: var(--navbar-text-font-weight);
          font-size: 16px;
          color: var(--primary-700);
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 8px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          background-color: var(--primary-50);
          color: var(--primary-800);
        }

        .nav-link.active {
          background-color: var(--primary-100);
          color: var(--primary-800);
          font-weight: 600;
        }

        .nav-dropdown {
          position: relative;
        }

        .nav-dropdown > .nav-link {
          cursor: pointer;
        }

        .dropdown-menu {
          display: none;
          position: absolute;
          left: 0;
          top: 100%;
          min-width: 220px;
          background: rgba(255, 255, 255, 0.98);
          color: var(--primary-800);
          font-family: var(--navbar-text-font-family);
          font-size: 1rem;
          border-radius: 0 12px 8px 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          z-index: 100;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: opacity 0.22s cubic-bezier(.4,0,.2,1), transform 0.22s cubic-bezier(.4,0,.2,1);
          padding: 1.1rem 0 0.5rem 0;
          margin-top: 10px;
        }

        .nav-dropdown:hover > .dropdown-menu,
        .nav-dropdown:focus-within > .dropdown-menu {
          display: block;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .dropdown-menu li {
          list-style: none;
        }

        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1.5rem;
          color: var(--primary-800);
          text-decoration: none;
          font-family: var(--navbar-text-font-family);
          font-size: 1rem;
          white-space: nowrap;
          transition: background 0.15s;
        }

        .dropdown-menu a:hover,
        .dropdown-menu a:focus {
          background: var(--primary-100);
          color: var(--grey-900);
        }

        @media (max-width: 1200px) {
          .menu-toggle {
            display: flex;
            z-index: calc(var(--z-fixed) + 1);
          }

          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: #ffffff;
            padding: 24px;
            box-shadow: var(--300);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
            gap: 8px;
            max-height: calc(100vh - 80px);
            overflow-y: auto;
            z-index: var(--z-fixed);
          }

          .nav-links.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .nav-link {
            width: 100%;
            text-align: center;
            padding: 16px;
            display: block;
            font-size: 16px;
          }

          .dropdown-menu {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .navigation .container {
            padding: 12px 16px;
            max-height: 70px;
          }

          .nav-links {
            top: 70px;
            max-height: calc(100vh - 70px);
          }

          .logo img {
            height: 36px;
          }
        }

        @media (max-width: 480px) {
          .navigation .container {
            padding: 10px 12px;
          }

          .nav-links {
            padding: 16px;
            top: 60px;
            max-height: calc(100vh - 60px);
          }

          .nav-link {
            padding: 14px;
            font-size: 15px;
          }

          .menu-toggle {
            padding: 6px;
          }

          .menu-toggle span {
            width: 22px;
          }
        }
      </style>
      <header class="header">
        <nav class="navigation" role="navigation" aria-label="Navigation principale">
          <div class="container">
            <a href="${rootLink}" class="logo" aria-label="Retour à l'accueil">
              <img src="${basePath ? `${basePath}/assets/images/logo-clee.png` : 'assets/images/logo-clee.png'}" alt="CLEE Bordeaux Avenir">
            </a>

            <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul class="nav-links">
              <li class="nav-item nav-dropdown">
                <a href="${page('le-clee.html')}" class="nav-link nav-link-bleu">Le CLEE</a>
                <ul class="dropdown-menu">
                  <li><a href="${page('le-clee.html')}">Qui sommes-nous ?</a></li>
                  <li><a href="${page('bureau-membres.html')}">Bureau et membres</a></li>
                  <li><a href="${page('nos-actions.html')}">Nos actions</a></li>
                  <li><a href="${page('documents-officiels.html')}">Documents officiels</a></li>
                </ul>
              </li>
              <li class="nav-item nav-dropdown">
                <a href="${page('companies.html')}" class="nav-link nav-link-bleu">Entreprises & Partenaires</a>
                <ul class="dropdown-menu">
                  <li><a href="${page('companies.html')}">Devenir partenaire</a></li>
                  <li><a href="${page('companies.html#sponsors')}">Nos sponsors</a></li>
                  <li><a href="${page('companies.html#actions')}">Actions pour les entreprises</a></li>
                </ul>
              </li>
              <li class="nav-item nav-dropdown">
                <a href="${page('establishments.html')}" class="nav-link nav-link-orange">Établissements & Formations</a>
                <ul class="dropdown-menu">
                  <li><a href="${page('establishments.html')}">Établissements et formations</a></li>
                  <li><a href="${page('pfmp.html')}">Stages et/ou PFMP</a></li>
                </ul>
              </li>
              <li class="nav-item nav-dropdown">
                <a href="${page('jeunes-familles.html')}" class="nav-link nav-link-rouge">Jeunes & Familles</a>
                <ul class="dropdown-menu">
                  <li><a href="${page('pfmp.html')}">Tout savoir sur les stages</a></li>
                  <li><a href="${page('orientation-insertion.html')}">Conseils orientation</a></li>
                  <li><a href="${page('vie-clee-eleves.html')}">Vie du CLEE pour les élèves</a></li>
                </ul>
              </li>
              <li class="nav-item nav-dropdown">
                <a href="${page('vie-clee.html')}" class="nav-link nav-link-vert">Vie du CLEE</a>
                <ul class="dropdown-menu">
                  <li><a href="${page('agenda.html')}">Agenda</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="${page('connexion.html')}" class="nav-link nav-link-auth">Connexion</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('clee-nav-bar', CleeNavBar);
