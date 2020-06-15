const express = require("express");
const cors = require("cors");

const gallery = require("./gallery");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const db = require("./db");

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert"); 

// Connection URL // base URL to connect to the database
const url = "mongodb://localhost:27017"; //27017 it the port where the mongo server runs

// Database Name
const dbName = "kodflix";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  app.get("/rest/shows", (req, res) => {
    db.collection("shows")
      .find({})
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
  });

  app.use(express.static(path.join(__dirname, "../../build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
  });

  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
});

