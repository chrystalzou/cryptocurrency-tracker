import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'

function CoinListEntry(props){
  console.log(props);
  return (
    <div>
      <div className="coin-header">
        <div className="coin-entry">{props.coinName}</div>
        <div className="coin-entry">{props.coinData.USD}</div>
      </div>
    </div>
  )
}

export default CoinListEntry;