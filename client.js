const net = require("net");

const clien

//establecemos conexion con el servidor
client.connect(8080, "127.0.0.1", () => {
  console.log("Conectado al servidor 🚀");

  // 🔥 Probar comandos acá:

  // Obtener autores
  //client.write("GET AUTHORS");

  // Agregar libro (descomentar para probar)
 client.write('ADD PUBLISHER {"name":"Editorial Test"}');
});
//manejo de la respuesta del servidor mediante eventos
client.on("data", (data) => {
  console.log("Respuesta del servidor:");
  console.log(data.toString());

  client.end(); // cierra conexión después de recibir respuesta
});
//manejo del evento close para saber cuando se cierra la conexion

client.on("close", () => {
  console.log("Conexión cerrada");
});

client.on("error", (err) => {
  console.error("Error:", err.message);
});