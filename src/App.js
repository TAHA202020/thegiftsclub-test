import './App.css';
import Options from './Options';
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
  <Options/>
  </div>
  );
}

export default App;
