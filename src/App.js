import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './App.css'
import CurrencyList from './CurrencyList.js'
import CoinList from './CoinList.js'
import axios from 'axios'
import { runInThisContext } from 'vm';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
<<<<<<< HEAD
			coins: [],
			currencies: ['USD', 'EUR', 'CAD'],
			coinToAdd: '',
			coinToDelete: '',
			coinToSearch: '',
			filteredCoins: [],
			realTime: false,
			intervalID: null,
			selectedCurrency: 'USD',
=======
			coins: '',
			currencies: ['USD', 'EUR'],
			coinToAdd: '',
			coinToDelete: '',
			realTime: false,
			intervalID: null,
>>>>>>> 748918e61f031756ffa2d7353d3677134caa2cbe
		}

		this.handleCoinToAddChange = this.handleCoinToAddChange.bind(this);
		this.handleCoinToDeleteChange = this.handleCoinToDeleteChange.bind(this);
<<<<<<< HEAD
		this.handleCoinToSearchChange = this.handleCoinToSearchChange.bind(this);
=======
>>>>>>> 748918e61f031756ffa2d7353d3677134caa2cbe
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleRefresh = this.handleRefresh.bind(this);
		this.toggleRealTime = this.toggleRealTime.bind(this);
<<<<<<< HEAD
		this.selectCurrency = this.selectCurrency.bind(this);
=======
>>>>>>> 748918e61f031756ffa2d7353d3677134caa2cbe
	}

	componentDidMount() {
		axios.get('/coins')
		.then((response) => {
			let coins = Object.keys(response.data.coins).join(',');
			axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins}&tsyms=USD,EUR,CAD`)
			.then((response) => {
				let coinArray = [];
				for (var i = 0; i < Object.keys(response.data).length; i++) {
					let coin = {
						name: Object.keys(response.data)[i],
						data: response.data[Object.keys(response.data)[i]],
					}
					coinArray.push(coin);
				}
				this.setState({
					coins: coinArray,
					currencies: this.state.currencies.concat(Object.keys(response.data)),
<<<<<<< HEAD
					filteredCoins: coinArray,
				}, console.log(this.state.coins));
=======
				});
>>>>>>> 748918e61f031756ffa2d7353d3677134caa2cbe
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}

	handleCoinToAddChange(event) {
		this.setState({coinToAdd: event.target.value});
	}

	handleCoinToDeleteChange(event) {
		this.setState({coinToDelete: event.target.value});
<<<<<<< HEAD
	}

	handleCoinToSearchChange(event) {
		this.handleSearch(event);
=======
>>>>>>> 748918e61f031756ffa2d7353d3677134caa2cbe
	}

  handleAdd(event) {
		let currentCoins = this.state.coins;
		let currentCurrencies = this.state.currencies;
		if (!this.state.currencies.includes(this.state.coinToAdd)) {
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
		} else if (currentCoins.hasOwnProperty(this.state.coinToDelete)) {
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

<<<<<<< HEAD
	handleSearch(event) {
		console.log(this.state.coinToSearch);
		this.setState({
			coinToSearch: event.target.value,
			filteredCoins: this.state.coins.filter((coin) => coin.name.includes(event.target.value)),
		}, console.log(this.state.filteredCoins));
	}

=======
>>>>>>> 748918e61f031756ffa2d7353d3677134caa2cbe
	toggleRealTime() {
		new Promise((resolve, reject) => {
			this.setState({
				realTime: !this.state.realTime,
			}, resolve);
		})
		.then(() => {
			if (this.state.realTime === true) {
				this.setState({
					intervalID : window.setInterval(this.handleRefresh, 10000),
				});
			}
			if (this.state.realTime === false) {
				if (this.state.intervalID) {
					window.clearInterval();
				}
			}
		})
		.catch((error) => {console.log(error)});
		this.handleRefresh();
	}

<<<<<<< HEAD
	selectCurrency(event) {
		this.setState({
			selectedCurrency: event.target.value
		});
	}

=======
>>>>>>> 748918e61f031756ffa2d7353d3677134caa2cbe
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
								<input className="change-list" type="text" name="name" required pattern="[A-Z]{1,9}" title="You must use 1-9 uppercase letters" value={this.state.coinToAdd} onChange={this.handleCoinToAddChange}/>
							</label>
							<input className="change-list" type="submit" value="Add" />
						</form>
						<form onSubmit={this.handleDelete}>
							<label>
								<div className="coin-label">
									Coin:
								</div>
								<input className="change-list" type="text" name="name" required pattern="[A-Z]{1,9}" title="You must use 1-9 uppercase letters" value={this.state.coinToDelete} onChange={this.handleCoinToDeleteChange}/>
							</label>
							<input className="change-list" type="submit" value="Delete" />
						</form>
							<label>
								<div className="coin-label">
									Search:
								</div>
								<input className="change-list" type="text" name="name" required pattern="[A-Z]{1,9}" title="You must use 1-9 uppercase letters" value={this.state.coinToSearch} onChange={this.handleCoinToSearchChange}/>
							</label>
							<input className="change-list" type="submit" value="Search" />
						<div className="right-div">
							<button className="refresh" onClick={this.handleRefresh}>
								Refresh
							</button>
							<label>
								Real Time Updates:
								<input name="realTime" type="checkbox" checked={this.state.realTime} onChange={this.toggleRealTime}/>
							</label>
<<<<<<< HEAD
							<CurrencyList currencies={this.state.currencies} onSelect={this.selectCurrency}/>
=======
							<CurrencyList currencies={this.state.currencies}/>
>>>>>>> 748918e61f031756ffa2d7353d3677134caa2cbe
						</div>
						<CoinList coins={this.state.filteredCoins} selectedCurrency={this.state.selectedCurrency}/>
					</div>
				</section>
			</div>
		)
	}
}

export default App
