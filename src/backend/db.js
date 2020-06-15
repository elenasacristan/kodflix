const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'kodflix';

// Use connect method to connect to the Server
module.exports = { connect };

function connect() {
  return new Promise((resolve, reject) => {
      MongoClient.connect(url, function (err, client) {
          assert.equal(null, err);
          console.log('Connected successfully to server');
          const dbo = client.db(dbName);
          resolve(dbo);
      });
  });
}
