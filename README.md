# 📚 Book API - TCP Server

## 📌 Descripción

API de gestión de biblioteca desarrollada con Node.js utilizando un servidor TCP (módulo `net`).

Permite gestionar **libros, autores y publishers** mediante comandos enviados desde un cliente por consola.

---

## ⚙️ Tecnologías utilizadas

- Node.js
- Módulo `net` (TCP)
- File System (`fs`)
- UUID
- Arquitectura MVC

---

## 🧱 Estructura del proyecto

```bash
book.api/
├── controllers/
├── models/
├── views/
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

## 🚀 Cómo ejecutar

1. Instalar dependencias
npm install

2. Ejecutar servidor
node server.js

3. Ejecutar cliente
(en otra terminal)
node client.js

## 📡 Comandos disponibles

## 📖 Libros

Obtener todos los libros:
GET BOOKS

Agregar un libro:
ADD BOOK {"title":"Nombre","author":"Autor","year":2024}

## 👤 Autores

Obtener todos los autores:
GET AUTHORS

Agregar un autor:
ADD AUTHOR {"name":"Nombre del autor"}

## 🏢 Publishers

Obtener todos los publishers:
GET PUBLISHERS

Agregar un publisher:
ADD PUBLISHER {"name":"Nombre del publisher"}

## 🧪 Ejemplo de uso

ADD BOOK {"title":"1984","author":"George Orwell","year":1949}
GET BOOKS

ADD AUTHOR {"name":"George Orwell"}
GET AUTHORS

ADD PUBLISHER {"name":"Penguin"}
GET PUBLISHERS

* Cada comando debe enviarse en una sola línea desde el cliente.

## 🧠 Arquitectura

Se implementa el patrón MVC (Model - View - Controller):

Models: acceso a datos (archivos JSON)
Controllers: lógica de negocio y validaciones
Views: formato de respuesta (JSON)
Server: manejo de conexiones TCP y procesamiento de comandos

## 💾 Persistencia

Los datos se almacenan en archivos JSON dentro de la carpeta data/.

Cada entidad se guarda de forma independiente:

books.json
authors.json
publishers.json

## 👩‍💻 Autoras

Sofia Mendoza
Yamila Valdez Aguilar