const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 3001;
const path = require("path");
// const db = require("./db");
// var multer = require("multer");
require("dotenv").config({ path: __dirname + "/.env" });

const url = process.env.NODE_ENV === 'production' ?
process.env.MONGO_URL : 'mongodb://localhost:27017/kodflix';


app.use(cors());

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
   
    app.get("/rest/movies", async(req, res) => {
      const movies = await Movie.find();
      res.send(movies);
    });

    app.get("/rest/shows/:show", async(req, res) => {
      const movie = await Movie.findOne({ title: req.params.show });
      res.send(movie);
    });

    app.use(express.static(path.join(__dirname, "../../build")));

    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../../build/index.html"));
    });

    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  })
  .catch(() => {console.log('Database connection failed!')});
