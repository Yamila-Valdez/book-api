const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/publishers.json");

const getPublishers = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

const savePublishers = (publishers) => {
    fs.writeFileSync(filePath, JSON.stringify(publishers, null, 2));
};

module.exports = { getPublishers, savePublishers };