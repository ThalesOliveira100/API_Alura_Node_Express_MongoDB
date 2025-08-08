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

export default app;