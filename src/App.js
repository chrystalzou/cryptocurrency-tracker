import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import CurrencySelector from './CurrencySelector.js'
import CoinList from './CoinList.js'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			coins: 'ethereum', // returned from API
			currencies: 'USD',
		}
	}

	render() {
		return (
			<div>
				<section className="hero is-info">
					<div className="hero-body is-size-2 has-text-centered">CryptoTrack</div>
				</section>
				<section className="section">
					<div className="container">
						<button>
							Add
						</button>
						<button>
							Remove
						</button>
						<CurrencySelector currencies={this.state.currencies}/>
						<CoinList coins={this.state.coins}/>
					</div>
				</section>
			</div>
		)
	}
}

export default App
