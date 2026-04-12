const express = require("express");
const app = express();

app.use(express.json());

const bookRoutes = require("./routes/books");
app.use("/books", bookRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000 🚀");
});