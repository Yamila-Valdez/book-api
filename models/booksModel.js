const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/books.json");

// Obtener todos los libros
const getBooks = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Guardar libros
const saveBooks = (books) => {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
};

module.exports = { getBooks, saveBooks };