import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/v1/livros", LivroController.listarLivros);

export default routes;