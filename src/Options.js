import React from 'react'

function Options() {
  return (<div className='options'>
    <div>
      <input type="radio"  id="option-1" name='option'/>
      <label htmlFor="option-1">1 Mois</label>
    </div>
    <div>
      <input type="radio"  id="option-2" name='option'/>
      <label htmlFor="option-2">3 Mois</label>
      <span>-20% / mois</span>
    </div>
    <div>
      <input type="radio"  id="option-3" name='option' />
      <label htmlFor="option-3">6 Mois</label>
      <span>-30% / mois</span>
    </div>
    <div>
      <input type="radio"  id="option-4" name='option'/>
      <label htmlFor="option-4">12 Mois</label>
      <span>-40% / mois</span>
    </div>
    <div>
      <input type="radio"  id="option-5" name='option'/>
      <label htmlFor="option-5">24 Mois</label>
      <span>-50% / mois</span>
    </div>
  </div>
  )
}

export default Options