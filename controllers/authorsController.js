const { getAuthors, saveAuthors } = require("../models/authorsModel");
const { v4: uuidv4 } = require("uuid");

const getAllAuthors = () => {
  return getAuthors();
};

const addAuthor = (authorData) => {
  if (!authorData.name || !authorData.nationality) {
    throw new Error("Faltan datos del autor (name, nationality)");
  }

  const authors = getAuthors();

  const exists = authors.find(
    (author) => author.name.toLowerCase() === authorData.name.toLowerCase()
  );

  if (exists) {
    throw new Error("El autor ya existe");
  }

  const newAuthor = {
    id: uuidv4(),
    name: String(authorData.name).trim(),
    nationality: String(authorData.nationality).trim(),
  };

  authors.push(newAuthor);
  saveAuthors(authors);

  return newAuthor;
};

module.exports = { getAllAuthors, addAuthor };