import React from 'react'
import CurrencyListEntry from './CurrencyList.js'

const CurrencyList = (props) => {
  console.log(props.currencies);
  return (
    <div className="currency-selector">
      Currency: 
      <select>
        {props.currencies.map(currency => <option value={currency}>{currency}</option>)}
      </select>
    </div>
  )
}

export default CurrencyList;
