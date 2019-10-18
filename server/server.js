const express = require('express');
const app = express();

const parser = require('body-parser');
app.use(parser.json());

const cors = require("cors");
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db()
  client.db('##########');
  const ########## = db.collection('##########');
  const ########## = createRouter(##########);
  app.use('/api/##########', ##########);
})
.catch(console.err);


app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port }`);
});
