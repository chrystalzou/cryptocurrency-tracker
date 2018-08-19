import React from 'react'

const CoinListEntry = (props) => {
  console.log(props);
  return (
    <div>
      <div className="coin-header">
        <div className="coin-entry">{props.coinName}</div>
        <div className="coin-entry">{props.coinData[props.currency]}</div>
      </div>
    </div>
  )
}

export default CoinListEntry;
