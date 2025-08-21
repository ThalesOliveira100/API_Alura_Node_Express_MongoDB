import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { 
            type: String, 
            required: [true, "O título do livro é obrigatório"] 
        },
        autor: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'autores', 
            required: [true, "O(a) autor(a) é obrigatório"]
        },
        editora: { 
            type: String, 
            required:[true, "A editora é obrigatória"]
        },
        preco: { type: Number },
        paginas: { type: Number }
    }, 
    { 
        versionKey: false 
    }
);          // versionKey: false    ->     desativa o versionamento do MongoDB

const livros = mongoose.model("livros", livrosSchema);

export default livros;