const net = require("net");

const { getAllBooks, addBook } = require("./controllers/booksController");
const { getAllAuthors, addAuthor } = require("./controllers/authorsController");
const { getAllPublishers, addPublisher } = require("./controllers/publishersController");

const { success, error } = require("./views/responseFormatter");

const server = net.createServer((socket) => {
  console.log("Cliente conectado");

  socket.on("data", (data) => {
    try {
      const request = data.toString().trim();

      // 📚 BOOKS
      if (request === "GET BOOKS") {
        const books = getAllBooks();
        socket.write(success(books));
      }

      else if (request.startsWith("ADD BOOK")) {
        // Extraemos los datos JSON del comando
        const json = request.replace("ADD BOOK ", "");
        const bookData = JSON.parse(json);

        const newBook = addBook(bookData);
        socket.write(success(newBook));
      }

      // 👤 AUTHORS
      else if (request === "GET AUTHORS") {
        const authors = getAllAuthors();
        socket.write(success(authors));
      }

      else if (request.startsWith("ADD AUTHOR")) {
        const json = request.replace("ADD AUTHOR ", "");
        const authorData = JSON.parse(json);

        const newAuthor = addAuthor(authorData);
        socket.write(success(newAuthor));
      }

      // 🏢 PUBLISHERS
      else if (request === "GET PUBLISHERS") {
        const publishers = getAllPublishers();
        socket.write(success(publishers));
      }

      else if (request.startsWith("ADD PUBLISHER")) {
        const json = request.replace("ADD PUBLISHER ", "");
        const publisherData = JSON.parse(json);

        const newPublisher = addPublisher(publisherData);
        socket.write(success(newPublisher));
      }

      // ❌ Comando inválido
      else {
        socket.write(error("Comando no válido"));
      }

    } catch (err) {
      socket.write(error("Error procesando la solicitud"));
    }
  });

  socket.on("end", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(8080, () => {
  console.log("Servidor TCP corriendo en puerto 8080 🚀");
});