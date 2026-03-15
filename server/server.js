const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies=[
    {Title:"Interstellar",Released:"2014-11-07",Runtime:169 ,Genres:['Adventure','Drama','SCI-FI'],Directors:['Christopher Nolan'],Writers:['Jonathan Nolan','Christopher Nolan'],Actors:['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],Plot:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",Poster:"https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",Metascore:74,imdbRating:8.7},
    {Title:"The Thing",Released:"1982-06-25",Runtime:109 ,Genres:['Horror','Mystery','SCI-FI'],Directors:['John Carpenter'],Writers:['Bill Lancaster','John W. Campbell Jr.'],Actors:['Kurt Russell', 'Wilford Brimley', 'Keith David'],Plot:"A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",Poster:"https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",Metascore:57,imdbRating:8.2},
    {Title:"Inception",Released:"2010-07-16",Runtime:148 ,Genres:['Adventure','Action','SCI-FI'],Directors:['Christopher Nolan'],Writers:['Christopher Nolan'],Actors:['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],Plot:"A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",Poster: "https://m.media-amazon.com/images/M/MV5BMmFmZTNhYzQtZDM3Ni00ZjU2LWI2NzQtODc0ZDM0YjNlN2EzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",Metascore:74,imdbRating:8.8}
  ];
  res.json(movies);
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

