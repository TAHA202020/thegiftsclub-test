import { useState } from 'react';
import './App.css';
import DetailsOptions from './DetailsOptions';
import Options from './Options';
function App() {
  const [prices, setPrices] = useState({standard:169,premium:199,option:1});
  return (<div className='devis'>
  <div className='title-container'>
    <div className='title'>
      <h1>DÉCOUVREZ </h1>
    <div className='circle-container'>
      <div className='xs'><p className='x'>x</p><p className='x'>x</p><p className='x'>x</p></div>
      <span className='circle'></span>
        <h1 style={{color:'#517AFB'}}>NOS OFFRES</h1>
    </div>
    </div>
    <p>Trouver le plan parfait pour votre entreprise parmi nos différentes options<br />
      d'abonnement mensuel,trimsetriel,semestriel,annuel et biennal.
    </p>
  </div>
  <Options  setprices={setPrices} option={prices.option}/>
  <DetailsOptions prices={prices}/> 
  </div>
  );
}

export default App;
