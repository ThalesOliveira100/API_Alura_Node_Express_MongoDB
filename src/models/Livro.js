import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { type: String, required: true },
        autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: { type: String },
        preco: { type: Number },
        paginas: { type: Number }
    }, 
    { 
        versionKey: false 
    }
);          // versionKey: false    ->     desativa o versionamento do MongoDB

const livros = mongoose.model("livros", livrosSchema);

export default livros;