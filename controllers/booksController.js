const { getBooks, saveBooks } = require("../models/booksModel");
const { v4: uuidv4 } = require("uuid");

// Obtener todos los libros
const getAllBooks = () => {
  return getBooks();
};

// Agregar libro
const addBook = (bookData) => {
  const books = getBooks();

  const newBook = {
    id: uuidv4(),
    ...bookData,
  };

  books.push(newBook);
  saveBooks(books);

  return newBook;
};

module.exports = { getAllBooks, addBook };