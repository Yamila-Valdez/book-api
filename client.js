const net = require("net");
const readline = require("readline");

const client = new net.Socket();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.connect(8080, "127.0.0.1", () => {
  console.log("Conectado al servidor 🚀");
  console.log(`
Comandos disponibles:

📚 BOOKS
- GET BOOKS
- ADD BOOK {"title":"...","author":"...","year":...}
- DELETE BOOK id_del_libro

👤 AUTHORS
- GET AUTHORS
- ADD AUTHOR {"name":"...","nationality":"..."}

🏢 PUBLISHERS
- GET PUBLISHERS
- ADD PUBLISHER {"name":"...","country":"..."}

(Escribí un comando y presioná ENTER)
`);
  pedirComando();
});

function pedirComando() {
  rl.question("> ", (command) => {
    if (!command.trim()) {
      return pedirComando();
    }

    console.log("📤 Enviando:", command);
    client.write(command.trim());
  });
}

client.on("data", (data) => {
  console.log("\n📦 Respuesta del servidor:");
  console.log(data.toString());
  console.log("");
  pedirComando();
});

client.on("error", (err) => {
  console.error("Error:", err.message);
});

client.on("close", () => {
  console.log("Conexión cerrada");
  rl.close();
});