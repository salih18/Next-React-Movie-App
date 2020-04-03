const path = require("path");
const fs = require("fs").promises;
const FILE = path.join("pages/api/", "db.json");

const loadMovies = async () => {
  const movies = await fs.readFile(FILE, "utf8");
  return JSON.parse(movies);
};

export default async (req, res) => {
  const movies = await loadMovies();
  res.status(200).json(movies);
};
