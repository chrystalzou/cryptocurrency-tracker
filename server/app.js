const app = require('express')()
const firebase = require('./firebase')
const bodyParser = require('body-parser')
var cors = require('cors');
const port = 5000

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser.json());
app.use(cors());

const db = firebase.database().ref();

// CREATE
app.post(`/coins`, function (req, res) {
  let coin = firebase.database().ref(`coins/${req.body.coin}`)
  coin.set({
    name: req.body.coin,
  });
  res.end();
})

// READ
app.get('/coins', (req, res) => {
  db.once("value", function(snapshot) {
    res.json(snapshot.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
})

// DELETE
app.delete(`/coins/:id`, (req, res) => {
  let coin = firebase.database().ref(`coins/${req.params.id}`);
  coin.remove();
  res.end();
})
