class CLEEHero extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.imageLoaded = false;
        this.imageError = false;
    }

    connectedCallback() {
        this.render();
        this.setupImageHandlers();
        this.setupImageRotation();
    }

    render() {
        const title = this.getAttribute('title') || 'Titre du hero';
        const description = this.getAttribute('description') || '';
        const imageUrl = this.getAttribute('image-url') || 'https://picsum.photos/1920/1080';
        const basePath = this.getAttribute('base-path') || '..';

        const style = document.createElement('style');
        style.textContent = `
            :host {
                --primary-900: rgba(31, 52, 72, 1);
                --primary-800: rgba(24, 41, 56, 1);
            }

            .hero {
                padding-top: 60px;
                padding-bottom: 40px;
                background: linear-gradient(135deg, var(--primary-900) 0%, var(--primary-800) 100%);
                min-height: 360px;
                display: flex;
                align-items: center;
                position: relative;
                overflow: hidden;
            }

            .hero.image-error {
                background: linear-gradient(135deg, var(--primary-900) 0%, rgba(15, 77, 122, 1) 100%);
            }

            .hero-overlay {
                position: absolute;
                inset: 0;
                z-index: 0;
                overflow: hidden;
                pointer-events: none;
                opacity: 1;
                transition: opacity 0.3s ease;
            }

            .hero-overlay.loading {
                opacity: 0.5;
            }

            .hero-overlay img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                opacity: 0;
                transition: opacity 0.5s ease;
            }

            .hero-overlay img.loaded {
                opacity: 1;
            }

            .hero-overlay img.error {
                display: none;
            }

            .hero-overlay::after {
                content: '';
                position: absolute;
                inset: 0;
                background: var(--primary-900);
                opacity: 0.55;
                transition: opacity 0.3s ease;
            }

            .hero.image-error .hero-overlay::after {
                opacity: 0.75;
            }

            .hero::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -10%;
                width: 600px;
                height: 600px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
            }

            .hero::after {
                content: '';
                position: absolute;
                bottom: -10%;
                left: -5%;
                width: 400px;
                height: 400px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
            }

            .hero .container {
                position: relative;
                z-index: 1;
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
            }

            .hero-content {
                animation: fadeInUp 0.8s ease 0.2s both;
            }

            .hero-title {
                font-size: clamp(2rem, 6vw, 3.5rem);
                font-weight: 700;
                color: white;
                margin-bottom: 20px;
                line-height: 1.2;
                letter-spacing: -0.5px;
            }

            .hero-description {
                font-size: 1.125rem;
                color: rgba(255, 255, 255, 0.95);
                margin-bottom: 40px;
                line-height: 1.6;
                max-width: 600px;
            }

            .hero-cta {
                display: flex;
                gap: 20px;
                flex-wrap: wrap;
            }

            .btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 12px 28px;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s ease;
                cursor: pointer;
                border: none;
            }

            .btn-primary {
                background: linear-gradient(135deg, #FF7043 0%, #FF5722 100%);
                color: white;
                box-shadow: 0 4px 15px rgba(255, 87, 34, 0.3);
            }

            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255, 87, 34, 0.4);
            }

            .btn-large {
                padding: 14px 32px;
                font-size: 1.0625rem;
            }

            .btn-text {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @media (max-width: 768px) {
                .hero {
                    padding-top: 50px;
                    padding-bottom: 30px;
                    min-height: 300px;
                }

                .hero-title {
                    font-size: 2rem;
                    margin-bottom: 15px;
                }

                .hero-description {
                    font-size: 1rem;
                    margin-bottom: 30px;
                }

                .hero-cta {
                    flex-direction: column;
                    gap: 15px;
                }

                .btn-large {
                    width: 100%;
                }
            }
        `;

        const template = document.createElement('template');
        template.innerHTML = `
            <section class="hero">
                <div class="hero-overlay" aria-hidden="true">
                    <img src="${imageUrl}" alt="" loading="lazy">
                </div>
                <div class="container">
                    <div class="hero-content">
                        <h1 class="hero-title">${this.escapeHtml(title)}</h1>
                        ${description ? `<p class="hero-description">${this.escapeHtml(description)}</p>` : ''}
                    </div>
                </div>
            </section>
        `;

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    setupImageHandlers() {
        const imageElement = this.shadowRoot.querySelector('.hero-overlay img');
        const heroSection = this.shadowRoot.querySelector('.hero');
        if (!imageElement || !heroSection) return;

        // Gestion du chargement réussi
        imageElement.addEventListener('load', () => {
            this.imageLoaded = true;
            this.imageError = false;
            imageElement.classList.add('loaded');
            imageElement.classList.remove('error');
            heroSection.classList.remove('image-error');
        });

        // Gestion de l'erreur de chargement
        imageElement.addEventListener('error', () => {
            this.imageError = true;
            this.imageLoaded = false;
            imageElement.classList.add('error');
            imageElement.classList.remove('loaded');
            heroSection.classList.add('image-error');
            console.warn(`Erreur de chargement de l'image: ${imageElement.src}`);
        });

        // Déclencher le chargement si l'image n'a pas encore été chargée
        if (imageElement.src && !imageElement.complete) {
            imageElement.classList.add('loading');
        } else if (imageElement.complete && imageElement.naturalHeight !== 0) {
            // L'image était déjà en cache
            this.imageLoaded = true;
            imageElement.classList.add('loaded');
        }
    }

    setupImageRotation() {
        const imageElement = this.shadowRoot.querySelector('.hero-overlay img');
        if (!imageElement) return;

        const imageUrls = this.getAttribute('image-urls');
        const interval = this.getAttribute('image-interval') || 10000;

        if (imageUrls) {
            const urls = imageUrls.split('|');
            let currentIndex = 0;

            setInterval(() => {
                currentIndex = (currentIndex + 1) % urls.length;
                imageElement.style.opacity = '0';
                
                setTimeout(() => {
                    imageElement.src = urls[currentIndex];
                    imageElement.style.opacity = '1';
                }, 300);
            }, parseInt(interval));

            imageElement.style.transition = 'opacity 0.3s ease-in-out';
            imageElement.style.opacity = '1';
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Méthode publique pour changer l'image manuellement
    setImage(imageUrl) {
        const imageElement = this.shadowRoot.querySelector('.hero-overlay img');
        if (imageElement) {
            imageElement.src = imageUrl;
        }
    }

    // Méthode publique pour changer le titre
    setTitle(title) {
        const titleElement = this.shadowRoot.querySelector('.hero-title');
        if (titleElement) {
            titleElement.textContent = title;
        }
    }

    // Méthode publique pour changer la description
    setDescription(description) {
        const descElement = this.shadowRoot.querySelector('.hero-description');
        if (descElement) {
            descElement.textContent = description;
        }
    }
}

customElements.define('clee-hero', CLEEHero);
