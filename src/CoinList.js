import React from 'react'
import CoinListEntry from './CoinListEntry.js'

const CoinList = (props) => {
  console.log(props.coins);
  return (
    <div>
      <div className="coin-header">
        <div className="coin-data">Coin</div>
        <div className="coin-data">Price</div>
      </div>
        {(props.coins).map(coin => <CoinListEntry key={coin} coinName={coin.name} coinData={coin.data} currency={props.selectedCurrency}/>)}
    </div>
  )
}

export default CoinList;
