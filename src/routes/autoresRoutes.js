import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes
    .get("/v1/autores", AutorController.listarAutores)
    .get("/v1/autores/:id", AutorController.listaAutorPorId)
    .post("/v1/autores", AutorController.cadastrarAutor)
    .put("/v1/autores/:id", AutorController.atualizarAutor)
    .delete("/v1/autores/:id", AutorController.excluirAutor)

export default routes;