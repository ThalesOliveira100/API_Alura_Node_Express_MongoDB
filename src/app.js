import express from "express";
import conectaNaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro durante a conexão com o banco de dados", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados estabilizada com sucesso!")
});

const app = express();
routes(app);

app.post("/v1/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso.");
})

app.put("/v1/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros[index])
})

app.delete("/v1/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso.");
})

export default app;