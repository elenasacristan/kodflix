const express = require("express");
const cors = require("cors");
// const gallery = require("./gallery");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const db = require("./db");

db.connect().then((dob) => {
  app.use(cors());

  app.get("/rest/shows", (req, res) => {
    dob
      .collection("movies")
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
