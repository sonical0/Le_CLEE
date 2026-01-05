import Button from './Button';

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-text">
        <p className="eyebrow">Croissance responsable</p>
        <h1>Une homepage fictive, fidèle à la charte MEDEF</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vulputate euismod massa, non laoreet erat aliquet nec. Aenean
          sollicitudin tortor nec nibh volutpat, vitae vehicula ligula
          ultricies.
        </p>
        <div className="cta-row">
          <Button variant="primary" href="#engagements">Découvrir</Button>
          <Button variant="ghost" href="#contact">Prendre contact</Button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="trapeze" aria-hidden="true" />
        <div className="stat-card">
          <p className="stat-label">Initiatives fictives</p>
          <p className="stat-value">+128</p>
          <p className="stat-desc">Projets imaginaires portés par la communauté.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
