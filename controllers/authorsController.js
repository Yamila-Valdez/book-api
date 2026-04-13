const { getAuthors, saveAuthors } = require("../models/authorsModel");
const { v4: uuidv4 } = require("uuid");

const getAllAuthors = () => {
    return getAuthors();
};

const addAuthor = (authorData) => {
    const authors = getAuthors();

    const newAuthor = {
        id: uuidv4(),
        ...authorData,
    };

    authors.push(newAuthor);
    saveAuthors(authors);

    return newAuthor;
};

module.exports = { getAllAuthors, addAuthor };