import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import CoinListEntry from './CoinListEntry.js'

function CoinList(props){
  return (
    <div>
      <div className="coin-header">
        <div className="coin-data">Coin</div>
        <div className="coin-data">Price</div>
      </div>
        {Object.keys(props.coins).map(coin => <CoinListEntry coinName={coin} coinData={props.coins[coin]}/>)}
    </div>
  )
}

export default CoinList;