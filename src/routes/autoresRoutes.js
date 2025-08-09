import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/v1/autores", AutorController.listarAutores);
routes.get("/v1/autores/:id", AutorController.listaAutorPorId);
routes.post("/v1/autores", AutorController.cadastrarAutor);
routes.put("/v1/autores/:id", AutorController.atualizarAutor);
routes.delete("/v1/autores/:id", AutorController.excluirAutor);

export default routes;