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
			value: '',
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleRefresh = this.handleRefresh.bind(this);
	}

	componentDidMount() {
		axios.get('/coins')
		.then((response) => {
			let coins = Object.keys(response.data.coins).join(',');
			axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins}&tsyms=USD,EUR`)
			.then((response) => {
				this.setState({
					coins: response.data,
					currencies: this.state.currencies.concat(Object.keys(response.data)),
				});
			})
			.catch((error) => {
				console.log(error);
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

  handleAdd(event) {
		let currentCoins = this.state.coins;
		let currentCurrencies = this.state.currencies;
		if (!this.state.currencies.includes(this.state.value)) {
			axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${this.state.value}&tsyms=USD,EUR`)
			.then((response) => {
				if (response.data.Response === 'Error') {
					alert(`Sorry, we couldn't find that coin.`);
				} else {
					currentCoins[this.state.value] = response.data[this.state.value];
					currentCurrencies.push(this.state.value);
					this.setState({
						coins: currentCoins,
						currencies: currentCurrencies,
					});

					axios.post('/coins', {
						coin: this.state.value,
					})
					.then(function (response) {
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
		} else {
			alert('That coin is already being tracked!');
		}
		event.preventDefault();
		event.target.reset();
	}

	handleDelete(event) {
		let currentCoins = this.state.coins;
		let currentCurrencies = this.state.currencies;
		if (this.state.value === 'BTC' || this.state.value === 'ETH') {
			alert('Cannot delete BTC or ETH!');
		} else if (currentCoins.hasOwnProperty(this.state.value)) {
			delete currentCoins[this.state.value];
			currentCurrencies.splice(currentCurrencies.indexOf(this.state.value), 1);
			this.setState({
				coins: currentCoins,
				currencies: currentCurrencies,
			});

			axios.delete(`/coins/${this.state.value}`, {
				data: {
					coin: this.state.value,
				} 
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		} else {
			alert(`That coin isn't currently being tracked.`);
		}
		event.preventDefault();
		event.target.reset();
	}
	
	handleRefresh() {
		let currentCoins = Object.keys(this.state.coins).join(',');
		axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${currentCoins}&tsyms=USD,EUR`)
		.then((response) => {
			this.setState({
				coins: response.data,
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
						<form onSubmit={this.handleAdd}>
							<label>
								<div className="coin-label">
									Coin:
								</div>
								<input className="change-list" type="text" name="name" required pattern="[A-Z]{1,9}" title="You must use 1-9 uppercase letters" onChange={this.handleChange}/>
							</label>
							<input className="change-list" type="submit" value="Add" />
						</form>
						<form onSubmit={this.handleDelete}>
							<label>
								<div className="coin-label">
									Coin:
								</div>
								<input className="change-list" type="text" name="name" required pattern="[A-Z]{1,9}" title="You must use 1-9 uppercase letters" onChange={this.handleChange}/>
							</label>
							<input className="change-list" type="submit" value="Delete" />
						</form>
						<div className="right-div">
							<button className="refresh" onClick={this.handleRefresh}>
								Refresh
							</button>
							<CurrencyList currencies={this.state.currencies}/>
						</div>
						<CoinList coins={this.state.coins}/>
					</div>
				</section>
			</div>
		)
	}
}

export default App
