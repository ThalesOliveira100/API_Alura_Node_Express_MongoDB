import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/v1/livros", LivroController.listarLivros);
routes.get("/v1/livros/:id", LivroController.listaLivroPorId);
routes.post("/v1/livros", LivroController.cadastrarLivro);
routes.put("/v1/livros/:id", LivroController.atualizarLivro);
routes.delete("/v1/livros/:id", LivroController.excluirLivro);

export default routes;