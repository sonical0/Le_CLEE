function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          <span className="mark-block mark-blue" />
          <span className="mark-block mark-red" />
          <span className="mark-block mark-violet" />
        </div>
        <div className="brand-text">
          <span className="brand-name">Medef Liste EPSI</span>
          <span className="brand-tagline">Agir ensemble pour une croissance responsable</span>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#valeurs">Valeurs</a></li>
          <li><a href="#engagements">Engagements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
