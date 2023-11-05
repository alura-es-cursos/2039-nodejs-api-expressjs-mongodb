import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

//Consulta los libros
routes.get("/autores", autorController.listaAutores);
//Consulta un libro en particular
routes.get("/autores/:id", autorController.listaAutorPorId);
//Crear un libro
routes.post("/autores", autorController.creaAutor);
//Actualización de un libro
routes.put("/autores/:id", autorController.actualizaAutorPorId);
//Borrado de un libro
routes.delete("/autores/:id", autorController.eliminaAutorPorId);

export default routes;
