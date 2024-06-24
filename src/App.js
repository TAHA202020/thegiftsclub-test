import './App.css';

function App() {
  return (<div className='devis'>
  <div className='title-container'>
    <div className='title'>
      <h1>DÉCOUVREZ </h1>
    <div className='circle-container'>
      <div className='xs'><p className='x'>x</p><p className='x'>x</p><p className='x'>x</p></div>
      <span className='circle'></span>
        <h1>NOS OFFRES</h1>
    </div>
    </div>
    <p>Trouver le plan parfait pour votre entreprise parmi nos différentes options<br />
      d'abonnement mensuel , trimsetriel , annuel et biennal
    </p>
  </div>
  <div className='options'>
    <div>
      <input type="radio"  id="option-1" />
      <label htmlFor="option-1">1 mois</label>
    </div>
    <div>
      <input type="radio"  id="option-2" />
      <label htmlFor="option-2">3 mois</label>
    </div>
    <div>
      <input type="radio"  id="option-3" />
      <label htmlFor="option-3">6 mois</label>
    </div>
    <div>
      <input type="radio"  id="option-4" />
      <label htmlFor="option-4">12 mois</label>
    </div>
    <div>
      <input type="radio"  id="option-5" />
      <label htmlFor="option-5">24 mois</label>
    </div>
  </div>



  </div>
  );
}

export default App;
