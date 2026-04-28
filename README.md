# 📚 Book API - TCP Server

## 📌 Descripción

Book API es una aplicación backend desarrollada con Node.js que utiliza un servidor TCP mediante el módulo nativo `net`.

El proyecto permite gestionar libros, autores y editoriales a través de comandos enviados desde un cliente por consola.

Los datos se almacenan de forma persistente en archivos JSON.

---

## ⚙️ Tecnologías utilizadas

* Node.js
* Módulo `net`
* File System (`fs`)
* UUID
* JSON
* Arquitectura MVC

---

## 🧱 Estructura del proyecto

```
book-api/
├── controllers/
│   ├── booksController.js
│   ├── authorsController.js
│   └── publishersController.js
│
├── models/
│   ├── booksModel.js
│   ├── authorsModel.js
│   └── publishersModel.js
│
├── views/
│   └── responseFormatter.js
│
├── data/
│   ├── books.json
│   ├── authors.json
│   └── publishers.json
│
├── server.js
├── client.js
├── package.json
└── README.md
```

---

## 🚀 Cómo ejecutar el proyecto

### 1. Instalar dependencias

```
npm install
```

### 2. Ejecutar el servidor

```
node server.js
```

El servidor se ejecuta en el puerto `8080`.

### 3. Ejecutar el cliente

En otra terminal:

```
node client.js
```

---

## 📡 Comandos disponibles

⚠️ Todos los comandos deben enviarse en una sola línea y con formato JSON válido cuando corresponda.

---

## 📖 Libros

### Obtener todos los libros

```
GET BOOKS
```

### Agregar un libro

```
ADD BOOK {"title":"1984","author":"George Orwell","year":1949}
```

### Eliminar un libro por ID

```
DELETE BOOK id_del_libro
```

---

## 👤 Autores

### Obtener todos los autores

```
GET AUTHORS
```

### Agregar un autor

```
ADD AUTHOR {"name":"George Orwell","nationality":"Británica"}
```

---

## 🏢 Editoriales

### Obtener todas las editoriales

```
GET PUBLISHERS
```

### Agregar una editorial

```
ADD PUBLISHER {"name":"Penguin","country":"Reino Unido"}
```

---

## 🧪 Ejemplos de uso

```
ADD BOOK {"title":"Una corte de rosas y espinas","author":"Sarah J. Maas","year":2015}
GET BOOKS

ADD AUTHOR {"name":"Sarah J. Maas","nationality":"Estadounidense"}
GET AUTHORS

ADD PUBLISHER {"name":"Bloomsbury","country":"Reino Unido"}
GET PUBLISHERS
```

---

## ✅ Ejemplo de respuesta exitosa

```json
{
  "status": "success",
  "data": {
    "id": "uuid-generado",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  }
}
```

---

## ❌ Ejemplo de respuesta con error

```json
{
  "status": "error",
  "message": "El libro ya existe"
}
```

---

## 🧠 Arquitectura MVC

El proyecto aplica el patrón MVC:

* Models: se encargan de leer y guardar datos en archivos JSON.
* Controllers: contienen la lógica de negocio y las validaciones.
* Views: formatean las respuestas enviadas al cliente.
* Server: recibe comandos mediante TCP y coordina el flujo de la aplicación.

---

## 💾 Persistencia

Los datos se almacenan en archivos JSON dentro de la carpeta `data/`.

Cada entidad se guarda de forma independiente:

* books.json
* authors.json
* publishers.json

---

## 🛡️ Validaciones implementadas

* Validación de campos obligatorios.
* Validación del formato JSON.
* Validación de año numérico en libros.
* Prevención de duplicados.
* Manejo de comandos inválidos.
* Manejo de errores con mensajes claros.

---

## 👩‍💻 Autoras

* Sofia Mendoza
* Yamila Valdez Aguilar
