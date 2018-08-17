import React from 'react'

const CurrencyList = (props) => {
  return (
    <div className="currency-selector">
      Currency: 
      <select>
        {props.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
      </select>
    </div>
  )
}

export default CurrencyList;
