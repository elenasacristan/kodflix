const express = require('express')
const gallery = require('./gallery')
const app = express()
const port = 3001

app.get('/rest/shows/', (req, res) => res.send(gallery.arrayTvShows()));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))