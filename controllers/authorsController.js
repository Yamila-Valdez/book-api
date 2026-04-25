const { getAuthors, saveAuthors } = require("../models/authorsModel");
const { v4: uuidv4 } = require("uuid");

const getAllAuthors = () => {
  return getAuthors();
};

const addAuthor = (authorData) => {
  if (!authorData.name) {
    throw new Error("Falta nombre del autor");
  }

  const authors = getAuthors();

  const newAuthor = {
    id: uuidv4(),
    name: String(authorData.name).trim(),
  };

  authors.push(newAuthor);
  saveAuthors(authors);

  return newAuthor;
};

module.exports = { getAllAuthors, addAuthor };