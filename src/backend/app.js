const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const db = require("./db");
var multer = require("multer");

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

  app.get("/rest/shows/:show", (req, res) => {
    dob
      .collection("movies")
      .findOne({ title: req.params.show }, function (err, result) {
        if (err) throw err;
        res.send(result);
      });
  });

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "build/static/media/");
      cb(null, "src/frontend/common/images");
      cb(null, "src/frontend/common/images/wallpapers");

    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '.jpg');
    },
  });

  var upload = multer({ storage: storage }).single("file");

  app.post("/rest/shows/upload", upload, (req, res) => {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(req.file);
    });
  });

  upload = multer();

  app.post("/rest/shows/add", upload.none(), (req, res) => {
    dob.collection("movies").insertOne({ title : req.body.title, synopsis : req.body.synopsis, videoId : req.body.videoId })
  });


  app.use(express.static(path.join(__dirname, "../../build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
  });

  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
  );
});
