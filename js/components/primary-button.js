class CleebuttonPrimary extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['href', 'text', 'width', 'height', 'bg-color', 'text-color', 'theme', 'as', 'type'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.themeObserver = null;
    this.internals = this.attachInternals();
  }

  connectedCallback() {
    this.render();
    this.observeThemeChanges();
  }

  disconnectedCallback() {
    if (this.themeObserver) {
      this.themeObserver.disconnect();
      this.themeObserver = null;
    }
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const href = this.getAttribute('href') || '#';
    const text = this.getAttribute('text') || 'Bouton';
    const width = this.getAttribute('width') || 'auto';
    const height = this.getAttribute('height') || 'auto';
    const as = this.getAttribute('as') || 'link';
    const buttonType = this.getAttribute('type') || 'button';
    const documentTheme = document.documentElement.getAttribute('data-theme') || document.body?.getAttribute('data-theme');
    const storedTheme = localStorage.getItem('clee_theme');
    const theme = this.getAttribute('theme') || documentTheme || storedTheme || 'etudiant';
    const isStudent = theme === 'etudiant';
    const defaultBg = isStudent ? 'var(--gradient-primary)' : 'var(--primary-800)';
    const defaultText = '#ffffff';
    const defaultBorder = isStudent ? 'transparent' : 'var(--primary-800)';
    const defaultHoverBg = isStudent ? 'var(--gradient-primary)' : 'var(--primary-700)';
    const defaultHoverShadow = isStudent
      ? '0 8px 24px rgba(255, 153, 102, 0.35)'
      : 'var(--400)';

    const bgColor = this.getAttribute('bg-color') || defaultBg;
    const textColor = this.getAttribute('text-color') || defaultText;
    const borderColor = isStudent ? 'transparent' : bgColor;
    const buttonClass = `btn-primary${isStudent ? ' is-student' : ''}`;

    const isButton = as === 'button' || !href;
    const tagName = isButton ? 'button' : 'a';
    const tagAttributes = isButton
      ? `type="${buttonType}"`
      : `href="${href}"`;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          --btn-bg: ${bgColor};
          --btn-text: ${textColor};
          --btn-border: ${borderColor || defaultBorder};
          --btn-hover-bg: ${defaultHoverBg};
          --btn-hover-shadow: ${defaultHoverShadow};
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          font-family: var(--button-font-giant-font-family);
          font-weight: var(--button-font-giant-font-weight);
          font-size: var(--button-font-giant-font-size);
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid var(--btn-border);
          width: ${width};
          height: ${height};
          background: var(--btn-bg);
          color: var(--btn-text);
          box-shadow: var(--200);
        }

        .btn-primary:not(.is-student):hover {
          background: var(--btn-hover-bg);
          box-shadow: var(--btn-hover-shadow);
          transform: translateY(-2px);
        }

        .btn-primary.is-student {
          background: var(--btn-bg);
          border: none;
          color: var(--btn-text);
          font-weight: 700;
          position: relative;
          overflow: hidden;
        }

        .btn-primary.is-student::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary.is-student:hover::before {
          left: 100%;
        }

        .btn-primary.is-student:hover {
          background: var(--btn-bg);
          transform: translateY(-2px);
          box-shadow: var(--btn-hover-shadow);
        }
      </style>
      <${tagName} class="${buttonClass}" ${tagAttributes}>${text}</${tagName}>
    `;

    if (isButton) {
      const innerButton = this.shadowRoot.querySelector(tagName);
      if (innerButton && buttonType === 'submit') {
        innerButton.addEventListener('click', () => {
          this.internals.form?.requestSubmit();
        });
      }
    }
  }

  observeThemeChanges() {
    if (this.themeObserver) return;

    this.themeObserver = new MutationObserver(() => {
      this.render();
    });

    this.themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }
}

customElements.define('clee-primary-button', CleebuttonPrimary);
