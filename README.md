# 📚 Book API - TCP Server

## 📌 Descripción

API de gestión de biblioteca desarrollada con Node.js utilizando un servidor TCP (módulo `net`).
Permite gestionar libros mediante comandos enviados desde un cliente.

---

## ⚙️ Tecnologías utilizadas

* Node.js
* Módulo `net` (TCP)
* File System (`fs`)
* UUID
* Arquitectura MVC

---

## 🧱 Estructura del proyecto

```
book.api/
│
├── controllers/
├── models/
├── views/
├── data/
│
├── server.js
├── client.js
├── package.json
```

---

## 🚀 Cómo ejecutar

### 1. Instalar dependencias

```
npm install
```

### 2. Ejecutar servidor

```
node server.js
```

### 3. Ejecutar cliente

(en otra terminal)

```
node client.js
```

---

## 📡 Comandos disponibles

### 📖 Libros

* Obtener todos los libros:

```
GET BOOKS
```

* Agregar un libro:

```
ADD BOOK {"title":"Nombre","author":"Autor"}
```

---

## 🧠 Arquitectura

Se implementa el patrón MVC:

* **Models**: acceso a datos (JSON)
* **Controllers**: lógica de negocio
* **Views**: formato de respuesta
* **Server**: manejo de conexiones TCP

---

## 💾 Persistencia

Los datos se almacenan en archivos JSON dentro de la carpeta `data/`.

---

## 👩‍💻 Autoras

* Sofia Mendoza
* Yamila Valdez Aguilar
---
