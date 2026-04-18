const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {movies} = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and eturn the movies from 
     the model as an array */
  res.json(Object.values(movies));
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const movieID = req.params.imdbID;
  const movie = movies[movieID];

  if (movie) {
    res.json(movie);       // Gibt den gefundenen Film zurück
  } else {
    res.sendStatus(404);   // Falls nicht vorhanden
  }
});


/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

