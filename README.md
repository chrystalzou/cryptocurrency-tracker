# LeapYear Fullstack Challenge
## Background
* Take-home evaluations are part of every technical interview process at LeapYear, because we believe our interviews should mirror the work we do as much as possible. 
* We understand that this is a non-trivial time commitment on your part, and we appreciate you taking the time to demonstrate your skills. 

## Challenge Details
* You will be building a simple cryptocurrency tracker! Your app will show the values of various cryptocurrencies at their current market value in $USD.
* This challenge was designed to evaluate your ability to implement features that require knowledge of front-end and back-end technologies.
* This challenge will also evaluate your ability to implement a clean, usable UI/UX
* Our expectation is that candidates with the necessary level of skill will be able to implement a working MVP within 4-6 hours (including time to clean up the code/UI).
* Please create a public Github respository to show all of your work
* Within 48 hours of receiving this project, send us a link to the Github repo. Our engineers will score your project using the rubric provided below. 

## MVP Requirements:
* User authentication is NOT required i.e. you do not need to think of your application as supporting users signing up and creating their own list of currencies to track. Instead, it's just an application for a single user (you). 
* A user (you) can see a list of cryptocurrencies and their current value in $USD (overall value)
* By default Bitcoin(BTC) and Ethereum(ETH) will always be shown in the list
* A user (you) can create/save a Currency that they want to track
* A user (you) can remove/delete a Currency from the list of saved currencies (except BTC/ETH)
* Use the Cryptocompare API to fetch prices: https://min-api.cryptocompare.com/
* Provided Firebase DB is used to save currencies
* When the application loads, it should fetch any currencies that are saved and display their current value
* Coin values DO NOT need to be continuously fetched in real-time, they can be requested on demand

## Additional features:
If invited for an on-site interview, you will be expanding the functionality of your application. Below are examples of features that can be added.

* Real-time price tracking
* Display cryptocurrency's current value in another currency (ex. EUR, BTC, DOGE).
* More detailed information about a currency i.e. Algorithm type, current block number, market cap, etc.
* Price alerts when a currency is above/below a certain threshold
* View a currency's value across different exchanges
* Unit Tests (component tests), Integration tests (server tests), End-to-end tests
* Compare a currency's value across different time periods (1 day, 1 week, 2 weeks etc.)
* Add functionality that enables recording the amount of a Currency you own
* Currency's price graphed over time
* Display the best performing coins in the market over some period of time
* Add sorting functionality to the cryptotracker i.e. sort by highest gains, highest losses over some period of time
* Custom order for list of currencies to watch i.e. the ability to set an order for the tracked currencies

## Rubric
### Functioning Cryptocurrency Tracker (up to 20 points)
* All the required features must be implemented according to the MVP requirements

### Code quality/User Experience (up to 5 points)
* This will measure your code cleanliness, readability and proper usage/implementation of APIs
* This will also measure how easy your application is to use and how polished it looks overall. As mentioned in the README.md, your application does NOT need to be flashy, but should be clean and functional. 

### Additional Features (up to 15 points) (On Site)
* Additional points will be given for implementing additional features beyond the MVP requirements
* Be prepared to explain why you chose the additional feature(s) you built

## Installation
### For yarn users:
1. Run `yarn install` in the directory where the boilerplate is
2. Add the provided Firebase API configuration JSON to `server/firebase.js`
3. Run `yarn start` in the directory where the boilerplate is (this will start both the express server and the webpack-dev-server)

### For npm users:
1. Run `npm install` in the directory where the boilerplate is
2. Add the provided Firebase API configuration JSON to `server/firebase.js`
3. Run `npm run start` in the directory where the boilerplate is (this will start both the express server and the webpack-dev-server)

## Miscellaneous
* Please use a git repository for your work and commit your code as you are working on it
* The client-side code is running on http://localhost:3000
* The node server is running on http://localhost:5000
* You can add your own styles if you need to
* The UI does not need to be flashy but it should be clean and functional
* All of the necessary packages should already be included during installation. You SHOULD NOT need to add additional packages (but you are not restricted from doing so) to complete the app requirements. If you are planning to tackle the additional features, you are welcome to add the packages you need
* Be prepared to explain the decisions you make!

## Helpful Documentation
* React https://reactjs.org/docs/react-component.html
* Express https://expressjs.com/en/api.html#express
* Bulma https://bulma.io/documentation/overview/start/
* Firebase https://firebase.google.com/docs/reference/js/ & https://firebase.google.com/docs/database/web/read-and-write
* CryptoCompare API https://min-api.cryptocompare.com/
