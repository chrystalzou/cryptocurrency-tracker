import React from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import CoinListEntry from './CoinListEntry.js'

function CoinList(props){
  return (
    <div>
      <div className="coin-header">
        <div className="coin-data">Coin</div>
        <div className="coin-data">Name</div>
        <div className="coin-data">Price</div>
      </div>
        <CoinListEntry coin={props.coins}/>
    </div>
  )
}

export default CoinList;