import './styles/base.css';
import './styles/components/button.css';
import './styles/components/header.css';
import './styles/components/footer.css';
import './styles/page.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import QuoteBand from './components/QuoteBand';
import CTABand from './components/CTABand';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="corner-triangle" aria-hidden="true" />

        <Header />

        <main>
          <Hero />
          <Pillars />
          <QuoteBand />
          <CTABand />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
