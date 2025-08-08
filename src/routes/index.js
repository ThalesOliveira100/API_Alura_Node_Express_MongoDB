// Padrão barrel
import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.route("/v1").get((req, res) => res.status(200).send("Curso de API Node Express + MongoDB - Alura"));
    
    // Middewares
    app.use(express.json(), livros);
};

export default routes;
