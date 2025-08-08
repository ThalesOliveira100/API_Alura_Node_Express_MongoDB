import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livrosSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false });          // versionKey: false    ->     desativa o versionamento do MongoDB

const livro = mongoose.model("livros", livrosSchema);

export default livro;