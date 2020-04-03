const path = require("path");
const fs = require("fs").promises;
const FILE = path.join("pages/api/", "category.json");

const loadCategories = async () => {
  const categories = await fs.readFile(FILE, "utf8");
  return JSON.parse(categories);
};

export default async (req, res) => {
  const categories = await loadCategories();
  res.status(200).json(categories);
};
