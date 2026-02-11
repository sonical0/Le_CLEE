class CleeFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const basePath = this.getAttribute('base-path') ?? '';
    const pagesPath = this.getAttribute('pages-path') ?? 'pages';
    const asset = (path) => (basePath ? `${basePath}/${path}` : path);
    const page = (path) => (pagesPath ? `${pagesPath}/${path}` : path);

    this.innerHTML = `
      <style>
        .footer {
          background-color: var(--primary-900);
          color: #ffffff;
          padding: 36px 0 16px; /* reduced vertical padding */
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: var(--footer-hero-image, none);
          background-size: cover;
          background-position: center bottom;
          opacity: 0.35;
          z-index: 0;
        }

        .footer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(31, 52, 72, 0.72);
          /* Charte originelle: rgba(31, 52, 72, 1) */
          z-index: 1;
        }

        .footer > .container {
          position: relative;
          z-index: 2;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 32px; /* reduced vertical gap between columns */
          margin-bottom: 24px; /* reduced bottom margin */
        }

        .footer-main {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px; /* reduced spacing */
        }

        .footer-logo img {
          width: 120px;
          height: auto;
        }

        .footer-logo p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 1.4; /* tighter line-height */
        }

        .footer-medef-logo {
          margin-top: 16px; /* reduced vertical spacing */
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-medef-logo img {
          width: 100%;
          max-width: 280px;
          height: auto;
          object-fit: contain;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .footer-medef-logo img:hover {
          opacity: 1;
        }

        .footer-title {
          font-family: var(--titre-font-family);
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px; /* reduced gap between link columns */
        }

        .footer-column ul {
          list-style: none;
        }

        .footer-column li {
          margin-bottom: 8px; /* less vertical space per link */
        }

        .footer-column a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 14px;
        }

        .footer-column a:hover {
          color: #ffffff;
        }

        .footer-subtitle {
          font-weight: 600;
          font-size: 15px;
          margin-bottom: 8px; /* tighter spacing */
          color: var(--primary-200);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 20px; /* reduced top padding */
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 48px 0 20px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      </style>
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-main">
              <div class="footer-logo">
                <img src="${asset('assets/images/logo-clee.png')}" alt="CLEE Bordeaux Avenir">
                <p>Comité Local École-Entreprise</p>
              </div>

              <p class="footer-description">
                Le CLEE Bordeaux Avenir œuvre pour renforcer les liens entre le monde éducatif et professionnel,
                accompagner les jeunes dans leur orientation et faciliter leur insertion dans le monde du travail.
              </p>
            </div>

            <div class="footer-links">
              <div class="footer-column">
                <h4 class="footer-subtitle">Le CLEE</h4>
                <ul>
                  <li><a href="${page('le-clee.html')}">Qui sommes-nous ?</a></li>
                  <li><a href="${page('bureau-membres.html')}">Bureau et membres</a></li>
                  <li><a href="${page('nos-actions.html')}">Nos actions</a></li>
                  <li><a href="${page('documents-officiels.html')}">Documents officiels</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4 class="footer-subtitle">Pour les entreprises</h4>
                <ul>
                  <li><a href="${page('companies.html')}">Devenir partenaire</a></li>
                  <li><a href="${page('companies.html#sponsors')}">Nos sponsors</a></li>
                  <li><a href="${page('companies.html#actions')}">Actions pour les entreprises</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4 class="footer-subtitle">Pour les jeunes</h4>
                <ul>
                  <li><a href="${page('pfmp.html')}">Tout savoir sur les stages</a></li>
                  <li><a href="${page('orientation-insertion.html')}">Conseils orientation</a></li>
                  <li><a href="${page('vie-clee-eleves.html')}">Vie du CLEE pour les élèves</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4 class="footer-subtitle">Navigation</h4>
                <ul>
                  <li><a href="${page('establishments.html')}">Établissements & Formations</a></li>
                  <li><a href="${page('vie-clee.html')}">Vie du CLEE</a></li>
                  <li><a href="${page('agenda.html')}">Agenda</a></li>
                </ul>
              </div>

              <div class="footer-column">
                <h4 class="footer-subtitle">Contact</h4>
                <ul>
                  <li><a href="${page('contact.html')}">Nous contacter</a></li>
                  <li><a href="${page('portail.html')}">Options d'accessibilité</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="${page('mentions-legales.html')}">Mentions légales</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2026 CLEE Bordeaux Avenir. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('clee-footer', CleeFooter);
