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
            required:[true, "A editora é obrigatória"],
            enum: {
                values: ["Casa do Código", "Alura", "eBooks"],
                message: "A editora {VALUE} não é um valor permitido."
            }
        },
        preco: { type: Number },
        paginas: { 
            type: Number,
            min: [10, "O número de páginas deve estar entre 10 e 5000. Valor Fornecido: {VALUE}"],
            max: [5000, "O número de páginas deve estar entre 10 e 5000. Valor Fornecido: {VALUE}"]
        }
    }, 
    { 
        versionKey: false 
    }
);          // versionKey: false    ->     desativa o versionamento do MongoDB

const livros = mongoose.model("livros", livrosSchema);

export default livros;