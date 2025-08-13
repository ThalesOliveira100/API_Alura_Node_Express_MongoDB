import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes
    .get("/v1/livros", LivroController.listarLivros)
    .get("/v1/livros/busca", LivroController.listarLivrosPorEditora)
    .get("/v1/livros/:id", LivroController.listaLivroPorId)
    .post("/v1/livros", LivroController.cadastrarLivro)
    .put("/v1/livros/:id", LivroController.atualizarLivro)
    .delete("/v1/livros/:id", LivroController.excluirLivro)

export default routes;