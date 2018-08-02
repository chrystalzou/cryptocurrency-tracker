import React from 'react'

const CoinListEntry = (props) => {
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