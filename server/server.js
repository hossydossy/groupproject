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
  const db = client.db('countries')
  const countryCollections = db.collection('countries_details');
  const countryRouter = createRouter(countryCollections);
  app.use('/api/countries', countryRouter);
})
.catch(console.err);


app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port }`);
});
