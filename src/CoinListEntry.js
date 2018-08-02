import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'

function CoinListEntry(props){
  return (
    <div>
      <div className="coin-header">
        <div className="coin-entry">ETH</div>
        <div className="coin-entry">Ethereum</div>
        <div className="coin-entry">400</div>
      </div>
    </div>
  )
}

export default CoinListEntry;