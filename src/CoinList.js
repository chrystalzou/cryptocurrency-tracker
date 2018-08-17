import React from 'react'
import CoinListEntry from './CoinListEntry.js'

const CoinList = (props) => {
  return (
    <div>
      <div className="coin-header">
        <div className="coin-data">Coin</div>
        <div className="coin-data">Price</div>
      </div>
        {Object.keys(props.coins).map(coin => <CoinListEntry key={coin} coinName={coin} coinData={props.coins[coin]}/>)}
    </div>
  )
}

export default CoinList;
