const net = require("net");

const client = new net.Socket();

client.connect(8080, "127.0.0.1", () => {
  console.log("Conectado al servidor 🚀");

  // 🔥 Probá comandos acá:

  // Obtener libros
  client.write("GET BOOKS");

  // Agregar libro (descomentar para probar)
  //client.write('ADD BOOK {"title":"El Principito","author":"Saint-Exupéry"}');
});

client.on("data", (data) => {
  console.log("Respuesta del servidor:");
  console.log(data.toString());

  client.end(); // cierra conexión después de recibir respuesta
});

client.on("close", () => {
  console.log("Conexión cerrada");
});

client.on("error", (err) => {
  console.error("Error:", err.message);
});