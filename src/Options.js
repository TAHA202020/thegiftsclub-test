import React from 'react'

function Options({setprices,option}) {
  return (<div className='options'>
    <div>
      <input type="radio"  id="option-1" name='option' onClick={()=>setprices({standard:169,premium:199,option:1})} checked={option===1}/>
      <label htmlFor="option-1">1 Mois</label>
    </div>
    <div>
      <input type="radio"  id="option-2" name='option' onClick={()=>setprices({standard:406,premium:478,option:2})} checked={option===2}/>
      <label htmlFor="option-2">3 Mois</label>
      <span>-20% / mois</span>
    </div>
    <div>
      <input type="radio"  id="option-3" name='option' onClick={()=>setprices({standard:710,premium:836,option:3})} checked={option===3}/>
      <label htmlFor="option-3">6 Mois</label>
      <span>-30% / mois</span>
    </div>
    <div>
      <input type="radio"  id="option-4" name='option'onClick={()=>setprices({standard:1217,premium:1433,option:4})} checked={option===4}/>
      <label htmlFor="option-4">12 Mois</label>
      <span>-40% / mois</span>
    </div>
    <div>
      <input type="radio"  id="option-5" name='option'onClick={()=>setprices({standard:2028,premium:2388,option:5})} checked={option===5}/>
      <label htmlFor="option-5">24 Mois</label>
      <span>-50% / mois</span>
    </div>
  </div>
  )
}

export default Options