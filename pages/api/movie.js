import uuidv4 from "uuid/v4";

const path = require("path");
const fs = require("fs").promises;
const FILE = path.join("pages/api/", "db.json");

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    case "PUT":
      await handlePutRequest(req, res);
      break;
    case "DELETE":
      await handleDeleteRequest(req, res);
      break;
    default:
      break;
  }
};

const loadMovies = async () => {
  const movies = await fs.readFile(FILE, "utf8");
  return JSON.parse(movies);
};

async function handleGetRequest(req, res) {
  const { id } = req.query;
  const movies = await loadMovies();
  const movie = movies.find(movie => movie.id === id);
  res.json(movie);
}

async function handlePutRequest(req, res) {
  const { id, name, releaseYear, description, rating, genre, image } = req.body;
  if (!name || !releaseYear || !description || !rating || !genre || !image) {
    return res.status(422).send("Movie missing one or more fields");
  }
  try {
    const movies = await loadMovies();
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (!movieIndex) {
      return res.status(422).send("There is no movie!");
    }
    movies.splice(movieIndex, 1, {
      id,
      name,
      releaseYear,
      description,
      rating,
      genre,
      image
    });
    await fs.writeFile(FILE, JSON.stringify(movies));
    res.send("Successfully updated!");
  } catch (e) {
    console.error(e);
    res.status(500).send("Server error in updating the movie");
  }
}

async function handleDeleteRequest(req, res) {
  const { id } = req.query;
  const movies = await loadMovies();
  const movieIndex = movies.findIndex(movie => movie.id === id);
  movies.splice(movieIndex, 1);
  await fs.writeFile(FILE, JSON.stringify(movies));
  res.send("Successfully removed!");
}

async function handlePostRequest(req, res) {
  const { name, releaseYear, description, rating, genre, image } = req.body;
  if (!name || !releaseYear || !description || !rating || !genre || !image) {
    return res.status(422).send("Movies missing one or more fields");
  }
  try {
    const movies = await loadMovies();
    const lengthArr = movies.push({
      id: uuidv4(),
      name,
      releaseYear: Number(releaseYear),
      description,
      rating,
      genre,
      image
    });

    await fs.writeFile(FILE, JSON.stringify(movies));

    res.status(201).json(movies[lengthArr - 1]);
  } catch (e) {
    console.error(e);
    res.status(500).send("Server error in creating movie");
  }
}
