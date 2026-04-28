const { getPublishers, savePublishers } = require("../models/publishersModel");
const { v4: uuidv4 } = require("uuid");

const getAllPublishers = () => {
  return getPublishers();
};

const addPublisher = (publisherData) => {
  if (!publisherData.name || !publisherData.country) {
    throw new Error("Faltan datos de la editorial (name, country)");
  }

  const publishers = getPublishers();

  const exists = publishers.find(
    (publisher) => publisher.name.toLowerCase() === publisherData.name.toLowerCase()
  );

  if (exists) {
    throw new Error("La editorial ya existe");
  }

  const newPublisher = {
    id: uuidv4(),
    name: String(publisherData.name).trim(),
    country: String(publisherData.country).trim(),
  };

  publishers.push(newPublisher);
  savePublishers(publishers);

  return newPublisher;
};

module.exports = { getAllPublishers, addPublisher };