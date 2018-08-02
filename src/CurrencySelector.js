import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'

function CurrencySelector(props){
  return (
    <div className="currency-selector">
      Currency: 
      <select>
        <option value="volvo">USD</option>
      </select>
    </div>
  )
}

export default CurrencySelector;

