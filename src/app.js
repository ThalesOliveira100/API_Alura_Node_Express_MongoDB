import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";

db.on("error",  console.error("Erro durante a conexão com o banco de dados", erro));
db.once("open", () => {
    console.log("Conexão com o banco de dados estabilizada com sucesso!");
});

const app = express();
app.use(express.json());
routes(app);

export default app;