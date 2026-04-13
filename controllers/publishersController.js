const { getPublishers, savePublishers } = require("../models/publishersModel");
const { v4: uuidv4 } = require("uuid");

const getAllPublishers = () => {
    return getPublishers();
};

const addPublisher = (publisherData) => {
    const publishers = getPublishers();

    const newPublisher = {
        id: uuidv4(),
        ...publisherData,
    };

    publishers.push(newPublisher);
    savePublishers(publishers);

    return newPublisher;
};

module.exports = { getAllPublishers, addPublisher };