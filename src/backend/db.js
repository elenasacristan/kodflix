require("dotenv").config({ path: __dirname + "/.env" });
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.NODE_ENV === 'development' ?
'mongodb://localhost:27017' : process.env.MONGO_URL;

// Database Name
const dbName = 'kodflix';

// Use connect method to connect to the Server
module.exports = { connect };

function connect() {
  return new Promise((resolve, reject) => {
      MongoClient.connect(url, { useUnifiedTopology: true },function (err, client) {
          assert.equal(null, err);
          console.log('Connected successfully to server');
          const dbo = client.db(dbName);
          resolve(dbo);
      });
  });
}
