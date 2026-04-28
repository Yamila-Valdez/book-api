const { getBooks, saveBooks } = require("../models/booksModel");
const { v4: uuidv4 } = require("uuid");

const getAllBooks = () => {
  return getBooks();
};

const addBook = (bookData) => {
  if (!bookData.title || !bookData.author || bookData.year === undefined) {
    throw new Error("Faltan datos del libro (title, author, year)");
  }

  const year = Number(bookData.year);

  if (isNaN(year)) {
    throw new Error("El año debe ser un número");
  }

  const books = getBooks();

  const exists = books.find(
    (b) =>
      b.title.toLowerCase() === bookData.title.toLowerCase() &&
      b.author.toLowerCase() === bookData.author.toLowerCase()
  );

  if (exists) {
    throw new Error("El libro ya existe");
  }

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

const deleteBook = (id) => {
  const books = getBooks();

  const bookExists = books.find((book) => book.id === id);

  if (!bookExists) {
    throw new Error("No se encontró un libro con ese ID");
  }

  const updatedBooks = books.filter((book) => book.id !== id);

  saveBooks(updatedBooks);

  return {
    message: "Libro eliminado correctamente",
    deletedBook: bookExists,
  };
};

module.exports = { getAllBooks, addBook, deleteBook };