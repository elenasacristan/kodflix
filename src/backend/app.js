require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const path = require("path");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

app.use(cors());

//middleware
app.use(bodyParser.json());
// app.use(methodOverride("_method"));

//MongoURI
const url =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URL
    : "mongodb://localhost:27017/kodflix";

const movieSchema = new mongoose.Schema({
  id: String,
  title: String,
  synopsis: String,
  videoId: String,
});

// We create the TvShow model and the collection tvShows
const Movie = mongoose.model("Movie", movieSchema);

//if the db doesn't exist it will be generated
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.get("/rest/movies", async (req, res) => {
      const movies = await Movie.find();
      res.send(movies);
    });

    app.get("/rest/movies/:movie", async (req, res) => {
      const movie = await Movie.findOne({ title: req.params.movie });
      res.send(movie);
    });

    //Create storage engine
    const storage = new GridFsStorage({
      url: url,
      file: (req, file) => {
        if (
          file.mimetype === "image/jpeg" ||
          file.mimetype === "image/jpg" ||
          file.mimetype === "image/png"
        ) {
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: "uploads",
          };
          return fileInfo;
        } else {
          console.log('Wrong image fotmat!')
          return null;
        }
      },
    });

    let upload = multer();

    // Add movies to database
    app.post("/rest/movies/add", upload.none(), (req, res) => {
      let movie = new Movie({
        id: req.body.id,
        title: req.body.title,
        synopsis: req.body.synopsis,
        videoId: req.body.videoId,
      });
      movie.save();
    });

    upload = multer({ storage });

    //Upload movie cover
    app.post("/upload", upload.single("file"), (req, res) => {
      console.log("file uploaded!");
      res.redirect('/');
    });

    let gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "uploads",
    });

    app.get("/covers/", (req, res) => {
      gfs.find().toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.status(404).json({ err: "No files exist" });
        }
        return res.json(files[0]);
      });
    });

    // end point to display a cover image for a movie
    app.get("/covers/:filename", (req, res) => {
      gfs
        .find({
          filename: req.params.filename,
        })
        .toArray((err, files) => {
          if (!files || files.length === 0) {
            return res.status(404).json({
              err: "no files exist",
            });
          }
          gfs.openDownloadStreamByName(req.params.filename).pipe(res);
        });
    });

    app.use(express.static(path.join(__dirname, "../../build")));

    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../../build/index.html"));
    });

    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  })
  .catch(() => {
    console.log("Database connection failed!");
  });
