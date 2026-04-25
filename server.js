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
        return socket.write(success(getAllBooks()));
      }

      else if (request.startsWith("ADD BOOK")) {
        if (!request.includes("{")) {
          return socket.write(error("Debes enviar datos JSON para agregar un libro"));
        }

        const json = request.replace("ADD BOOK ", "").trim();
        const bookData = JSON.parse(json);

        const newBook = addBook(bookData);
        return socket.write(success(newBook));
      }

      // 👤 AUTHORS
      else if (request === "GET AUTHORS") {
        return socket.write(success(getAllAuthors()));
      }

      else if (request.startsWith("ADD AUTHOR")) {
        if (!request.includes("{")) {
          return socket.write(error("Debes enviar datos JSON para agregar un autor"));
        }

        const json = request.replace("ADD AUTHOR ", "").trim();
        const authorData = JSON.parse(json);

        const newAuthor = addAuthor(authorData);
        return socket.write(success(newAuthor));
      }

      // 🏢 PUBLISHERS
      else if (request === "GET PUBLISHERS") {
        return socket.write(success(getAllPublishers()));
      }

      else if (request.startsWith("ADD PUBLISHER")) {
        if (!request.includes("{")) {
          return socket.write(error("Debes enviar datos JSON para agregar un publisher"));
        }

        const json = request.replace("ADD PUBLISHER ", "").trim();
        const publisherData = JSON.parse(json);

        const newPublisher = addPublisher(publisherData);
        return socket.write(success(newPublisher));
      }

      // ❌ Comando inválido
      else {
        return socket.write(error("Comando no válido"));
      }

    } catch (err) {
      return socket.write(error("Error procesando la solicitud"));
    }
  });

  socket.on("end", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(8080, () => {
  console.log("Servidor TCP corriendo en puerto 8080 🚀");
});