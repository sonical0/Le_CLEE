import Button from './Button';

function CTABand() {
  return (
    <section id="contact" className="cta-band">
      <div>
        <p className="eyebrow">Contact fictif</p>
        <h2>Une collaboration en trois clics</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          ut ipsum sit amet erat convallis tempus.
        </p>
      </div>
      <div className="cta-actions">
        <Button variant="primary on-dark" href="mailto:lorem.ipsum@example.com">Écrire</Button>
        <Button variant="ghost on-dark" href="#accueil">Retour accueil</Button>
      </div>
    </section>
  );
}

export default CTABand;
