import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import CurrencyList from './CurrencyList.js'
import CoinList from './CoinList.js'
import axios from 'axios'

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			coins: '',
			currencies: ['USD', 'EUR'],
		}

	}

	componentDidMount() {
		axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR')
		.then((response) => {
			this.setState({
				coins: response.data,
				currencies: this.state.currencies.concat(Object.keys(response.data)),
			});
		})
		.catch((error) => {
			console.log(error);
		});
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
						<button>
							Refresh
						</button>
						<CurrencyList currencies={this.state.currencies}/>
						<CoinList coins={this.state.coins}/>
					</div>
				</section>
			</div>
		)
	}
}

export default App
