import livros from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livros.find()
                .populate("autor")
                .exec();

            res.status(200).json(listaLivros);
            
        } catch (error) {
            res.status(500).json({ message: `Falha na listagem de livros: ${error.message}`});
        }
    };

    static async listaLivroPorId (req, res) {
        try {
            const livroEncontrado = await livros.findById(req.params.id)
                .populate("autor", "nome")
                .exec();

            res.status(200).json(livroEncontrado);

        } catch (error) {
            res.status(400).json({message: `ID do livro não localizado: ${error.message}`});
        }
    };

    static async cadastrarLivro(req, res) {
        try {
            let livro = new livros(req.body);

            const livroResultado = await livro.save()

            res.status(201).send(livroResultado.toJSON());
            
        } catch (error) {
            res.status(500).json({message: `Falha na criação de livros: ${error.message}`});
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, {$set: req.body});

            res.status(200).json({ message: "Livro atualizado"});

        } catch (error) {
            res.status(500).json({message: `Falha na atualização do livro: ${error.message}`});
        }
    };

    static async excluirLivro (req, res) {
        try {
            await livros.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Livro removido com sucesso."})

        } catch (error) {;
            res.status(500).json({message: `Falha na exclusão do livro: ${error.message}`});
        }
    };

    static async listarLivrosPorEditora (req, res) {
        try {
            const editora = req.query.editora;

            const livrosPorEditora = await livros.find({"editora": editora });
            res.status(200).json(livrosPorEditora);
            
        } catch (error) {
            res.status(500).json({message: `Falha na listagem de listros por editora: ${error.message}`});
        }
    };
};

export default LivroController