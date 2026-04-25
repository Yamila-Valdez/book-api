const { getBooks, saveBooks } = require("../models/booksModel");
const { v4: uuidv4 } = require("uuid");

// Obtener todos los libros
const getAllBooks = () => {
  return getBooks();
};

// Agregar libro
const addBook = (bookData) => {
  console.log("📥 bookData recibido:", bookData);
  // Validaciones básicas
  if (!bookData.title || !bookData.author || bookData.year === undefined) {
    throw new Error("Faltan datos del libro (title, author, year)");
  }

  const year = Number(bookData.year);
  if (isNaN(year)) {
    throw new Error("El año debe ser un número");
  }

  const books = getBooks();

  // Evitar duplicados
  const exists = books.find(
    (b) =>
      b.title.toLowerCase() === bookData.title.toLowerCase() &&
      b.author.toLowerCase() === bookData.author.toLowerCase()
  );

  if (exists) {
    throw new Error("El libro ya existe");
  }

  // Crear nuevo libro limpio
  const newBook = {
    id: uuidv4(),
    title: String(bookData.title).trim(),
    author: String(bookData.author).trim(),
    year: year,
  };

  books.push(newBook);
  saveBooks(books);

  return newBook;
};

module.exports = { getAllBooks, addBook };