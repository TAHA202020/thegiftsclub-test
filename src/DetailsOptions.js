import React from 'react'
import check from './images/check.png'
import arrow from './images/arrow.png'
import add from './images/add.png'
import entreprise from "./images/entreprise.png"
import etoile from "./images/etoile.png"
function DetailsOptions({prices}) {
  return (<div className='details-container'>
    <div className='detail'>
      <div className='detail-title'>
        <h2 style={{marginBottom:'20px'}}>STANDARD</h2>
        <h2>{prices.standard} €</h2>
      </div>
      <div className='details'>
        <div className='check'><img src={check}/><p>Accès aux jeux en version non personnalisés</p></div>
        <div className='check'><img src={check}/><p>3 actions disponibles</p></div>
        <div className='check'><img src={check}/><p>Sélection de l'ordre de priorité des actions</p></div>
        <div className='check'><img src={check}/><p>Sélection des cadeaux</p></div>
        <div className='check'><img src={check}/><p>Choix limité de pictogrammes pour vos jeux</p></div>
        <div className='check'><img src={check}/><p>Accès au tableau de bord pour suivre vos activités</p></div>

      </div>
      <div className='btn-container'>
      <button className='btn'>
          Je sélectionne cette offre
        </button>
    </div>
    </div>
    <div className='premium detail'>
      <img src={etoile} className='favorite'/>
    <div className='detail-title'>
        <h1 style={{marginBottom:'20px',color:'#517AFB'}}>Premium</h1>
        <h1 style={{color:'#517AFB',fontSize:'50px'}}>{prices.premium} €</h1>
      </div>
      <div className='details'>
        <div className='check'><img src={check}/><p>3 actions disponibles</p></div>
        <div className='check'><img src={check}/><p>Sélection de l'ordre de priorité des actions</p></div>
        <div className='check'><img src={check}/><p>Sélection des cadeaux</p></div>
        <div className='check'><img src={check}/><p>Accès au tableau de bord pour suivre vos activité</p></div>
        <div className='check'><img src={add}/><p>Accès aux jeux en version personnalisés</p></div>
        <div className='check'><img src={add}/><p>Intégration de vos couleurs dans les jeux</p></div>
        <div className='check'><img src={add}/><p>Intégration de votre logo dans les jeux</p></div>
        <div className='check'><img src={add}/><p>Intégration vos pictogrammes dans les jeux</p></div>

      </div>
      <div className='btn-container'>
      <button className='btn premium-btn'>
          Je sélectionne cette offre
        </button>
    </div>
    </div>
    <div className='detail'>
    <div className='detail-title'>
        <h2 style={{marginBottom:'20px'}}>Sur Devis</h2>
        <img src={entreprise} style={{width:'50px'}}/>
      </div>
      <div className='details'>
        <div className='check'><img src={arrow}/><p>Vous avez plusieurs établissements ?</p></div>
        <div className='check'><img src={arrow}/><p>Vous souhaitez un jeu sur mesure à l'effigie de votre marque ?</p></div>
        <div className='check'><img src={arrow}/><p>Vous souhaitez une intégration caisse ?</p></div>
        <p className='description'>Un devis sur mesure est nécessaire pour répondre avec
          précision aux besoins spécifiques de votre réseau
          d'établissements et assurer une intégration harmonieuse.
        </p>
      </div>
    <div  className='btn-container'>
      <button className='btn '>
          Demander un Devis
        </button>
    </div>
      
    </div>
  
  </div>
  )
}

export default DetailsOptions