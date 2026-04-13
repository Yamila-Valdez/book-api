const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/authors.json");

const getAuthors = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

const saveAuthors = (authors) => {
    fs.writeFileSync(filePath, JSON.stringify(authors, null, 2));
};

module.exports = { getAuthors, saveAuthors };
