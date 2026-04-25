const { getPublishers, savePublishers } = require("../models/publishersModel");
const { v4: uuidv4 } = require("uuid");

const getAllPublishers = () => {
  return getPublishers();
};

const addPublisher = (publisherData) => {
  if (!publisherData.name) {
    throw new Error("Falta nombre del publisher");
  }

  const publishers = getPublishers();

  const newPublisher = {
    id: uuidv4(),
    name: String(publisherData.name).trim(),
  };

  publishers.push(newPublisher);
  savePublishers(publishers);

  return newPublisher;
};

module.exports = { getAllPublishers, addPublisher };